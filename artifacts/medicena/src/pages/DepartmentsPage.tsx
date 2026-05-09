import { Link } from "wouter";
import { mockDepartments } from "@/data/mockData";
import { usePatients } from "@/context/PatientContext";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Users, AlertTriangle } from "lucide-react";

export default function DepartmentsPage() {
  const { patients } = usePatients();

  return (
    <div className="min-h-[100dvh] bg-muted/30">
      <div className="w-full max-w-[430px] mx-auto bg-background min-h-[100dvh] shadow-sm flex flex-col">
        
        {/* Header */}
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border p-4">
          <h1 className="text-2xl font-bold tracking-tight">Departments</h1>
          <p className="text-muted-foreground text-sm font-medium">Select a department to view queue</p>
        </header>

        {/* Content */}
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 gap-4">
            {mockDepartments.map((dept, i) => {
              const activePatients = patients.filter(
                p => p.departmentId === dept.id && p.status !== "Done"
              ).length;

              return (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link href={`/queue/${dept.id}`}>
                    <Card className="hover-elevate cursor-pointer border-border transition-all active:scale-[0.98]" data-testid={`card-department-${dept.id}`}>
                      <CardContent className="p-5 flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-lg font-bold">{dept.nameEn}</h2>
                          <p className="text-muted-foreground font-medium text-sm" dir="rtl">{dept.nameAr}</p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          {dept.isOverloaded && (
                            <div className="bg-destructive/10 text-destructive px-3 py-1 rounded-full flex items-center gap-1.5 font-semibold text-sm">
                              <AlertTriangle className="h-4 w-4" />
                              <span>Overloaded</span>
                            </div>
                          )}
                          <div className="flex items-center gap-2 bg-secondary px-3 py-1.5 rounded-full">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="font-semibold">{activePatients}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
