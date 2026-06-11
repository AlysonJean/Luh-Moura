"use client";

import React, { useState } from 'react';
import { ChevronLeft, ShieldCheck, PenTool, Check, Loader2, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function ConsentPage() {
  const [status, setStatus] = useState<'idle' | 'signing' | 'signed' | 'error'>('idle');
  const [acceptedAt, setAcceptedAt] = useState<string | null>(null);

  const handleSign = async () => {
    setStatus('signing');

    try {
      const res = await fetch('/api/consent', { method: 'POST' });
      if (!res.ok) throw new Error('Falha ao registrar consentimento');

      const data = await res.json();
      setAcceptedAt(data.acceptedAt);
      setStatus('signed');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-background mesh-bg p-6">
      <div className="max-w-xl mx-auto space-y-8">
        <header className="flex items-center gap-4">
          <Link href="/portal" className="p-2 rounded-xl bg-secondary text-primary">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="font-serif italic text-2xl font-black tracking-tight text-foreground">Assinar Termo</h1>
        </header>

        <section className="glass-card rounded-3xl border-primary/10 p-6 shadow-xl space-y-6">
          <div className="flex items-center gap-3 text-primary">
             <ShieldCheck className="h-6 w-6" />
             <h2 className="font-bold">Termo de Consentimento Livre e Esclarecido</h2>
          </div>

          <div className="h-80 overflow-y-auto rounded-xl bg-secondary/30 p-4 text-xs leading-relaxed text-muted-foreground space-y-4">
             <p className="font-bold text-foreground">Procedimento: Toxina Botulínica (Botox)</p>
             <p>Eu, devidamente identificada, declaro estar ciente dos riscos e benefícios do procedimento estéticos proposto pela Dra. Luh Moura.</p>
             <p>Compreendo que os resultados podem variar de acordo com o metabolismo individual e que as orientações pós-procedimento são fundamentais para o sucesso do tratamento.</p>
             <p>Autorizo o registro fotográfico para fins de acompanhamento clínico e evolução técnica, estando ciente da proteção de meus dados conforme a LGPD.</p>
             <p>Declaro não possuir alergias conhecidas aos componentes do produto e não estar gestante ou em período de lactação.</p>
             {/* Simulação de mais texto */}
             {[1,2,3,4].map(i => (
                <p key={i}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             ))}
          </div>

          {status !== 'signed' ? (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
               <div className="flex items-center gap-2 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <p className="text-[10px] font-bold text-primary uppercase">Assinatura Digital Biométrica Ativa</p>
               </div>

               <button
                type="button"
                onClick={handleSign}
                disabled={status === 'signing'}
                className="w-full flex items-center justify-center gap-3 rounded-2xl bg-primary py-5 text-base font-bold text-foreground shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
               >
                  {status === 'signing' ? <Loader2 className="h-5 w-5 animate-spin" /> : <PenTool className="h-5 w-5" />}
                  {status === 'signing' ? 'Registrando...' : 'Li e concordo com os termos'}
               </button>

               {status === 'error' && (
                 <p className="flex items-center gap-2 text-xs font-bold text-red-500">
                   <AlertCircle className="h-4 w-4" />
                   Não foi possível registrar sua assinatura. Tente novamente.
                 </p>
               )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 animate-in zoom-in-95 duration-500">
               <div className="h-14 w-14 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
                  <Check className="h-8 w-8" />
               </div>
               <p className="font-bold">Assinado com Sucesso!</p>
               <p className="text-[10px] uppercase font-bold opacity-70">
                 Timestamp: {acceptedAt ? new Date(acceptedAt).toLocaleString() : ''}
               </p>
               <Link href="/portal" className="mt-4 text-xs font-bold underline">Voltar ao portal</Link>
            </div>
          )}
        </section>

        <footer className="text-center opacity-40">
           <p className="text-[8px] font-bold uppercase tracking-widest">Este documento possui validade jurídica em conformidade com a MP 2.200-2/2001</p>
        </footer>
      </div>
    </div>
  );
}
