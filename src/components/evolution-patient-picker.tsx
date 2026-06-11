"use client";

import { useRouter } from "next/navigation";

interface EvolutionPatientPickerProps {
  patients: { id: string; name: string }[];
  selectedId?: string;
}

export function EvolutionPatientPicker({ patients, selectedId }: EvolutionPatientPickerProps) {
  const router = useRouter();

  return (
    <select
      value={selectedId ?? ""}
      onChange={(e) => router.push(`/admin/evolution?patientId=${e.target.value}`)}
      className="w-full rounded-2xl border border-border bg-card px-4 py-4 text-sm font-bold outline-none focus:border-primary transition-all"
    >
      <option value="" disabled>
        Selecione uma paciente...
      </option>
      {patients.map((patient) => (
        <option key={patient.id} value={patient.id}>
          {patient.name}
        </option>
      ))}
    </select>
  );
}
