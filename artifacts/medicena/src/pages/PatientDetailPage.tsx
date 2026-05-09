import { useParams, Link, useLocation } from "wouter";
import { usePatients } from "@/context/PatientContext";
import { mockDepartments, Status } from "@/data/mockData";
import { StatusBadge } from "@/components/StatusBadge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, User, MapPin, Clock, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PatientDetailPage() {
  const params = useParams();
  const [, setLocation] = useLocation();
  const { patients, updatePatientStatus, updatePatientNotes } = usePatients();
  const { toast } = useToast();
  
  const patient = patients.find(p => p.id === params.id);
  const [notes, setNotes] = useState("");
  
  useEffect(() => {
    if (patient?.notes) setNotes(patient.notes);
  }, [patient?.notes]);

  if (!patient) return <div>Patient not found</div>;

  const department = mockDepartments.find(d => d.id === patient.departmentId);

  const handleStatusUpdate = (status: Status) => {
    updatePatientStatus(patient.id, status);
    toast({
      title: "Status Updated",
      description: `${patient.name} marked as ${status}`,
    });
    setLocation(`/queue/${patient.departmentId}`);
  };

  const handleSaveNotes = () => {
    updatePatientNotes(patient.id, notes);
    toast({
      title: "Notes Saved",
    });
  };

  return (
    <div className="min-h-[100dvh] bg-muted/30">
      <div className="w-full max-w-[430px] mx-auto bg-background min-h-[100dvh] shadow-sm flex flex-col">
        
        <header className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-border flex items-center p-4 gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-10 w-10 -ml-2 rounded-full"
            onClick={() => setLocation(`/queue/${patient.departmentId}`)}
            data-testid="btn-back"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <h1 className="font-bold text-lg">Patient Detail</h1>
        </header>

        <main className="flex-1 p-4 space-y-6">
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-border rounded-2xl p-5 shadow-sm space-y-4"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold leading-tight" dir="auto">{patient.name}</h2>
                <p className="text-muted-foreground font-medium">{department?.nameEn}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <User className="h-6 w-6 text-muted-foreground" />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
              <StatusBadge status={patient.status} className="text-sm px-3 py-1" />
              {patient.room && (
                <div className="flex items-center gap-1.5 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  <MapPin className="h-4 w-4" />
                  {patient.room}
                </div>
              )}
              <div className="flex items-center gap-1.5 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                <Clock className="h-4 w-4" />
                {patient.waitTimeMinutes} min wait
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider pl-1">Update Status</h3>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                variant={patient.status === "Waiting" ? "default" : "outline"} 
                className="h-16 text-base font-bold rounded-xl"
                onClick={() => handleStatusUpdate("Waiting")}
                data-testid="btn-status-waiting"
              >
                Waiting
              </Button>
              <Button 
                variant={patient.status === "With Doctor" ? "default" : "outline"} 
                className="h-16 text-base font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                onClick={() => handleStatusUpdate("With Doctor")}
                data-testid="btn-status-doctor"
              >
                With Doctor
              </Button>
              <Button 
                variant={patient.status === "In Progress" ? "default" : "outline"} 
                className="h-16 text-base font-bold rounded-xl bg-purple-600 hover:bg-purple-700 text-white border-purple-600"
                onClick={() => handleStatusUpdate("In Progress")}
                data-testid="btn-status-progress"
              >
                In Progress
              </Button>
              <Button 
                variant={patient.status === "Done" ? "default" : "outline"} 
                className="h-16 text-base font-bold rounded-xl bg-green-600 hover:bg-green-700 text-white border-green-600"
                onClick={() => handleStatusUpdate("Done")}
                data-testid="btn-status-done"
              >
                Done
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between pl-1">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Internal Notes</h3>
              <Button variant="ghost" size="sm" className="h-8 gap-1.5 text-primary" onClick={handleSaveNotes}>
                <Save className="h-4 w-4" />
                Save
              </Button>
            </div>
            <Textarea 
              placeholder="Add patient notes here..." 
              className="min-h-[120px] resize-none rounded-xl p-4 text-base bg-card"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              data-testid="textarea-notes"
            />
          </motion.div>

        </main>
      </div>
    </div>
  );
}
