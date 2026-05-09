import { useParams, Link } from "wouter";
import { usePatients } from "@/context/PatientContext";
import { mockDepartments } from "@/data/mockData";
import { PatientCard } from "@/components/PatientCard";
import { BroadcastModal } from "@/components/BroadcastModal";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Megaphone, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function QueuePage() {
  const params = useParams();
  const departmentId = params.department;
  const { patients } = usePatients();
  const [broadcastOpen, setBroadcastOpen] = useState(false);

  const department = mockDepartments.find((d) => d.id === departmentId);
  const deptPatients = patients.filter((p) => p.departmentId === departmentId);
  
  if (!department) return <div>Department not found</div>;

  const waiting = deptPatients.filter(p => p.status === "Waiting").length;
  const withDoctor = deptPatients.filter(p => p.status === "With Doctor").length;
  const done = deptPatients.filter(p => p.status === "Done").length;

  return (
    <div className="min-h-[100dvh] bg-muted/30">
      <div className="w-full max-w-[430px] mx-auto bg-background min-h-[100dvh] shadow-sm flex flex-col relative pb-24">
        
        {/* Header */}
        <header className="sticky top-0 z-20 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Link href="/departments" className="h-10 w-10 flex items-center justify-center -ml-2 rounded-full hover:bg-secondary transition-colors" data-testid="btn-back">
                <ChevronLeft className="h-6 w-6" />
              </Link>
              <div>
                <h1 className="font-bold text-lg leading-tight">{department.nameEn}</h1>
                <p className="text-muted-foreground text-sm font-medium" dir="rtl">{department.nameAr}</p>
              </div>
            </div>
            
            <Button 
              size="icon" 
              variant="secondary" 
              className="rounded-full h-10 w-10 shrink-0 bg-primary/10 text-primary hover:bg-primary/20"
              onClick={() => setBroadcastOpen(true)}
              data-testid="btn-open-broadcast"
            >
              <Megaphone className="h-5 w-5" />
            </Button>
          </div>

          {/* Banner / Summary */}
          {department.isOverloaded ? (
            <div className="bg-destructive text-destructive-foreground px-4 py-3 flex items-center gap-2 text-sm font-bold shadow-sm">
              <AlertTriangle className="h-5 w-5 shrink-0" />
              <span>ER is overloaded — avg wait: {department.averageWaitTimeMinutes} min</span>
            </div>
          ) : (
            <div className="bg-secondary/50 px-4 py-3 flex justify-between text-sm font-semibold text-muted-foreground border-t border-border/50">
              <span className="text-amber-600 dark:text-amber-500">{waiting} Waiting</span>
              <span className="text-blue-600 dark:text-blue-500">{withDoctor} With Doctor</span>
              <span className="text-green-600 dark:text-green-500">{done} Done</span>
            </div>
          )}
        </header>

        {/* Queue List */}
        <main className="flex-1 p-4">
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {deptPatients.map((patient, i) => (
                <motion.div
                  key={patient.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                >
                  <PatientCard patient={patient} />
                </motion.div>
              ))}
            </AnimatePresence>
            
            {deptPatients.length === 0 && (
              <div className="text-center py-12 text-muted-foreground font-medium">
                No patients in queue
              </div>
            )}
          </div>
        </main>

        <BroadcastModal open={broadcastOpen} onOpenChange={setBroadcastOpen} />
      </div>
    </div>
  );
}
