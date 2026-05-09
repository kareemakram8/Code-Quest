export type Status = "Waiting" | "With Doctor" | "In Progress" | "Done";

export interface Patient {
  id: string;
  name: string;
  departmentId: string;
  status: Status;
  waitTimeMinutes: number;
  room?: string;
  notes?: string;
}

export interface Department {
  id: string;
  nameEn: string;
  nameAr: string;
  isOverloaded?: boolean;
  averageWaitTimeMinutes?: number;
}

export const mockDepartments: Department[] = [
  { id: "cardiology", nameEn: "Cardiology", nameAr: "قلب" },
  { id: "orthopedics", nameEn: "Orthopedics", nameAr: "عظام" },
  { id: "er", nameEn: "Emergency Room (ER)", nameAr: "طوارئ", isOverloaded: true, averageWaitTimeMinutes: 68 },
  { id: "general", nameEn: "General Clinic", nameAr: "عيادة عامة" },
  { id: "pediatrics", nameEn: "Pediatrics", nameAr: "أطفال" },
  { id: "radiology", nameEn: "Radiology", nameAr: "أشعة" },
];

export const mockPatients: Patient[] = [
  { id: "p1", name: "Ahmed Ali", departmentId: "er", status: "Waiting", waitTimeMinutes: 45 },
  { id: "p2", name: "Sara Mohamed", departmentId: "er", status: "In Progress", waitTimeMinutes: 12, room: "Trauma 1" },
  { id: "p3", name: "محمد إبراهيم", departmentId: "er", status: "Waiting", waitTimeMinutes: 82 },
  { id: "p4", name: "فاطمة حسن", departmentId: "cardiology", status: "With Doctor", waitTimeMinutes: 5, room: "Clinic A" },
  { id: "p5", name: "Khaled Nour", departmentId: "orthopedics", status: "Done", waitTimeMinutes: 60, room: "X-Ray 2" },
  { id: "p6", name: "Nadia Samir", departmentId: "pediatrics", status: "Waiting", waitTimeMinutes: 20 },
  { id: "p7", name: "يوسف منصور", departmentId: "general", status: "In Progress", waitTimeMinutes: 15, room: "Room 4" },
  { id: "p8", name: "Layla Hassan", departmentId: "radiology", status: "With Doctor", waitTimeMinutes: 8, room: "MRI 1" },
  { id: "p9", name: "Omar Youssef", departmentId: "er", status: "Waiting", waitTimeMinutes: 55 },
  { id: "p10", name: "Mona Adel", departmentId: "er", status: "With Doctor", waitTimeMinutes: 10, room: "Exam 3" },
  { id: "p11", name: "Tarek Zaki", departmentId: "cardiology", status: "Waiting", waitTimeMinutes: 30 },
  { id: "p12", name: "Hoda Mahmoud", departmentId: "general", status: "Waiting", waitTimeMinutes: 25 },
  { id: "p13", name: "Amr Hassan", departmentId: "orthopedics", status: "Waiting", waitTimeMinutes: 40 },
  { id: "p14", name: "Salma Ibrahim", departmentId: "pediatrics", status: "With Doctor", waitTimeMinutes: 12, room: "Clinic B" },
  { id: "p15", name: "Karim Safwat", departmentId: "radiology", status: "Waiting", waitTimeMinutes: 18 },
  { id: "p16", name: "Dina Nabil", departmentId: "general", status: "Done", waitTimeMinutes: 5 },
  { id: "p17", name: "Hassan Fawzy", departmentId: "er", status: "Done", waitTimeMinutes: 90 },
];
