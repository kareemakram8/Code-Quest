import React, { createContext, useContext, useState } from "react";
import { Patient, mockPatients, Status } from "@/data/mockData";

interface PatientContextType {
  patients: Patient[];
  updatePatientStatus: (id: string, status: Status) => void;
  updatePatientNotes: (id: string, notes: string) => void;
}

const PatientContext = createContext<PatientContextType | undefined>(undefined);

export function PatientProvider({ children }: { children: React.ReactNode }) {
  const [patients, setPatients] = useState<Patient[]>(mockPatients);

  const updatePatientStatus = (id: string, status: Status) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status } : p))
    );
  };

  const updatePatientNotes = (id: string, notes: string) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === id ? { ...p, notes } : p))
    );
  };

  return (
    <PatientContext.Provider value={{ patients, updatePatientStatus, updatePatientNotes }}>
      {children}
    </PatientContext.Provider>
  );
}

export function usePatients() {
  const context = useContext(PatientContext);
  if (context === undefined) {
    throw new Error("usePatients must be used within a PatientProvider");
  }
  return context;
}
