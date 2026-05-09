import { Status } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Clock, Stethoscope, Activity, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = {
    "Waiting": {
      color: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20",
      icon: Clock,
      label: "Waiting",
      labelAr: "إنتظار"
    },
    "With Doctor": {
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
      icon: Stethoscope,
      label: "With Doctor",
      labelAr: "مع الطبيب"
    },
    "In Progress": {
      color: "bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-500/20",
      icon: Activity,
      label: "In Progress",
      labelAr: "جاري المعالجة"
    },
    "Done": {
      color: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
      icon: CheckCircle2,
      label: "Done",
      labelAr: "تم"
    }
  };

  const { color, icon: Icon, label, labelAr } = config[status];

  return (
    <Badge 
      variant="outline" 
      className={cn("px-2.5 py-1 gap-1.5 font-semibold", color, className)}
    >
      <Icon className="h-3.5 w-3.5" />
      <span className="whitespace-nowrap">{label}</span>
      <span className="opacity-50 mx-0.5">•</span>
      <span dir="auto" className="whitespace-nowrap">{labelAr}</span>
    </Badge>
  );
}
