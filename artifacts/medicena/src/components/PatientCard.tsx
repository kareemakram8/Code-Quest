import { Patient } from "@/data/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "./StatusBadge";
import { Clock, MapPin } from "lucide-react";
import { Link } from "wouter";

interface PatientCardProps {
  patient: Patient;
}

export function PatientCard({ patient }: PatientCardProps) {
  return (
    <Card className="hover-elevate transition-colors border-border overflow-hidden group">
      <Link href={`/patient/${patient.id}`} className="block h-full" data-testid={`card-patient-${patient.id}`}>
        <CardContent className="p-0">
          <div className="p-4 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="font-bold text-lg leading-tight" dir="auto">{patient.name}</h3>
                {patient.room && (
                  <div className="flex items-center text-muted-foreground text-sm font-medium gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{patient.room}</span>
                  </div>
                )}
              </div>
              <StatusBadge status={patient.status} />
            </div>
            
            <div className="flex items-center gap-1.5 text-sm font-semibold text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{patient.waitTimeMinutes} min wait</span>
              <span className="opacity-50 mx-1">•</span>
              <span dir="auto">{patient.waitTimeMinutes} دقيقة</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
