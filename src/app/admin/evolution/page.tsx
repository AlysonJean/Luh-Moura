import React from 'react';
import { ImageAnnotator } from '@/components/image-annotator';
import { EvolutionPatientPicker } from '@/components/evolution-patient-picker';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

export default async function EvolutionPage({
  searchParams,
}: {
  searchParams: Promise<{ patientId?: string }>;
}) {
  const { patientId } = await searchParams;

  const patients = await db.patient.findMany({
    select: { id: true, name: true },
    orderBy: { name: 'asc' },
  });

  const selectedPatient = patientId ? patients.find((p) => p.id === patientId) : undefined;

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="flex items-center gap-4">
          <Link
            href="/admin"
            className="p-2 rounded-xl bg-secondary border border-border hover:bg-secondary/80 transition-all active:scale-95"
          >
            <ChevronLeft className="h-6 w-6 text-primary" />
          </Link>
          <div>
            <h1 className="font-serif italic text-2xl font-black tracking-tight text-foreground">Mapeamento do Paciente</h1>
            <p className="text-sm text-muted-foreground">Registro fotográfico e marcações de evolução</p>
          </div>
        </header>

        <EvolutionPatientPicker patients={patients} selectedId={patientId} />

        {selectedPatient ? (
          <section className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ImageAnnotator patientId={selectedPatient.id} patientName={selectedPatient.name} />
          </section>
        ) : (
          <p className="text-center text-sm text-muted-foreground py-12">
            {patients.length === 0
              ? 'Nenhuma paciente cadastrada ainda.'
              : 'Selecione uma paciente acima para iniciar o registro de evolução.'}
          </p>
        )}

        <footer className="text-center py-8">
           <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-muted-foreground/40">
              Luh Moura Estética © 2026 • Visual Evolution Protocol
           </p>
        </footer>
      </div>
    </div>
  );
}
