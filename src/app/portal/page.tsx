import React from 'react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { CheckCircle2, FileText, ChevronRight, Camera, User, Home, Users, Bell, Settings, MessageCircle } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { LogoutButton } from '@/components/logout-button';
import { LogoMark } from '@/components/logo';
import { auth } from '@/lib/auth';
import { db } from '@/lib/db';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portal | Luh Moura Estética",
  description: "Procedimentos de estética avançada e acompanhamento exclusivo com Dra. Luh Moura.",
  openGraph: {
    title: "Portal | Luh Moura Estética",
    description: "Procedimentos de estética avançada e acompanhamento exclusivo com Dra. Luh Moura.",
  },
};



const PAYMENT_STATUS_LABELS: Record<string, string> = {
  PENDING: 'Pagamento pendente',
  PAID: 'Pago',
  PARTIAL: 'Pago parcialmente',
};

export default async function PatientPortal() {
  const session = await auth();

  if (!session?.user) {
    redirect('/login');
  }

  const firstName = session.user.name?.split(' ')[0] ?? 'Paciente';

  const treatments =
    session.user.role === 'PATIENT'
      ? await db.treatmentPlan.findMany({
          where: { patientId: session.user.id },
          orderBy: { updatedAt: 'desc' },
        })
      : [];

  return (
    <div className="min-h-screen bg-background mesh-bg text-foreground font-sans pb-32">
      {/* Signature Patient Header */}
      <header className="flex h-20 items-center justify-between px-6 bg-white/50 dark:bg-black/30 backdrop-blur-xl sticky top-0 z-50 border-b border-primary/5">
        <div className="flex items-center gap-4">
           <Link href="/" className="h-10 w-10 flex items-center justify-center rounded-xl bg-primary/10 hover:bg-primary/20 transition-colors">
              <Home className="h-5 w-5 text-primary" />
           </Link>
           <div className="flex items-center gap-2">
              <LogoMark className="h-8 w-8" />
              <span className="text-xs font-medium uppercase tracking-widest text-muted uppercase">Portal VIP</span>
           </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            type="button"
            className="h-10 w-10 flex items-center justify-center rounded-full bg-popover shadow-sm border border-primary/10"
            title="Notificações"
            aria-label="Ver Notificações"
          >
            <Bell className="h-5 w-5 text-muted" />
          </button>
        </div>
      </header>

      <main className="p-6 space-y-10 max-w-md mx-auto">
        {/* Profile Section */}
        <section className="flex flex-col items-center text-center space-y-6 pt-4">
           <div className="relative">
              <div className="h-32 w-32 rounded-full bg-secondary/40 flex items-center justify-center border-4 border-background shadow-xl overflow-hidden">
                 {/* Monogram in Avatar */}
                 <div className="font-serif text-gradient-rose font-medium text-4xl italic tracking-tighter">LM</div>
              </div>
              <div className="absolute bottom-1 right-1 h-8 w-8 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow-lg">
                 <Camera className="h-3 w-3 text-white" />
              </div>
           </div>

           <div className="space-y-1">
              <h2 className="font-serif italic text-[var(--font-size-section)] font-medium tracking-tight text-foreground">Bem-vinda, {firstName}.</h2>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary">Estética Avançada</p>
           </div>
        </section>

        {/* Treatments Section - Real Data */}
        {session.user.role === 'PATIENT' && (
          <section className="space-y-3 sda-reveal">
            <h3 className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted px-2">Meus Tratamentos</h3>
            {treatments.length === 0 ? (
              <p className="p-5 rounded-3xl glass-card border border-primary/5 shadow-sm text-xs font-medium text-muted-foreground">
                Nenhum tratamento registrado até o momento.
              </p>
            ) : (
              treatments.map((treatment) => (
                <div key={treatment.id} className="flex items-center justify-between p-5 rounded-3xl glass-card border border-primary/5 shadow-sm">
                  <div>
                    <p className="text-sm font-medium text-foreground/80">{treatment.name}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted">
                      {treatment.completedSessions}/{treatment.totalSessions} sessões • {PAYMENT_STATUS_LABELS[treatment.paymentStatus] ?? treatment.paymentStatus}
                    </p>
                  </div>
                  <CheckCircle2
                    className={`h-5 w-5 ${
                      treatment.completedSessions >= treatment.totalSessions ? 'text-emerald-500' : 'text-muted-foreground/30'
                    }`}
                  />
                </div>
              ))
            )}
          </section>
        )}

        {/* Quick Actions List - Mockup Style */}
        <section className="space-y-3 sda-reveal">
           <div className="group flex items-center justify-between p-5 rounded-3xl glass-card border border-primary/5 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                 <div className="h-10 w-10 rounded-2xl bg-secondary/20 flex items-center justify-center">
                    <User className="h-5 w-5 text-muted" />
                 </div>
                 <span className="text-sm font-medium text-foreground/80">Profile</span>
              </div>
              <ChevronRight className="h-4 w-4 text-primary opacity-40 group-hover:translate-x-1 transition-transform" />
           </div>

           <div className="group flex items-center justify-between p-5 rounded-3xl glass-card border border-primary/5 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                 <div className="h-10 w-10 rounded-2xl bg-secondary/20 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-muted" />
                 </div>
                 <span className="text-sm font-medium text-foreground/80">Contratos</span>
              </div>
              <ChevronRight className="h-4 w-4 text-primary opacity-40 group-hover:translate-x-1 transition-transform" />
           </div>

           <a
             href="https://wa.me/5531985537919"
             target="_blank"
             rel="noopener noreferrer"
             className="group flex items-center justify-between p-5 rounded-3xl glass-card border border-primary/5 shadow-sm hover:shadow-md transition-all cursor-pointer"
           >
              <div className="flex items-center gap-4">
                 <div className="h-10 w-10 rounded-2xl bg-secondary/20 flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-muted" />
                 </div>
                 <span className="text-sm font-medium text-foreground/80">Mensagens</span>
              </div>
              <ChevronRight className="h-4 w-4 text-primary opacity-40 group-hover:translate-x-1 transition-transform" />
           </a>
        </section>

        {/* Evolution Teaser - Platinum Luxury */}
        <section className="relative overflow-hidden rounded-[2.5rem] bg-foreground p-8 text-background shadow-2xl shadow-foreground/20 active:scale-[0.98] transition-all cursor-pointer group sda-reveal">
          <div className="relative z-10 space-y-3">
            <h2 className="text-2xl font-medium tracking-tighter italic">Ver Evolução</h2>
            <p className="opacity-60 text-xs font-medium max-w-[180px]">Compare seus resultados em alta definição.</p>
            <div className="pt-2">
               <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-[10px] font-medium uppercase tracking-widest text-primary backdrop-blur-md">
                 Acessar Galeria
               </span>
            </div>
          </div>
          <Camera className="absolute -right-4 -bottom-4 h-32 w-32 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </section>

        {/* Logout */}
        <LogoutButton />
      </main>

      {/* Brand Navigation Bar - Signature Mockup */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[min(90%,400px)] z-50">
         <div className="bg-white/90 dark:bg-black/40 backdrop-blur-2xl rounded-[2.5rem] p-3 flex justify-evenly items-center shadow-2xl border border-primary/10">
            <button
              type="button"
              title="Dashboard"
              aria-label="Ir para Dashboard"
              className="p-4 rounded-full bg-primary/10 text-primary"
            >
               <Home className="h-6 w-6" />
            </button>
            <button
              type="button"
              title="Comunidade"
              aria-label="Ver Comunidade"
              className="p-4 rounded-full text-muted hover:bg-secondary/20 transition-colors"
            >
               <Users className="h-6 w-6" />
            </button>
            <button
              type="button"
              title="Notificações"
              aria-label="Ver Notificações"
              className="p-4 rounded-full text-muted hover:bg-secondary/20 transition-colors"
            >
               <Bell className="h-6 w-6" />
            </button>
            <button
              type="button"
              title="Configurações"
              aria-label="Ir para Configurações"
              className="p-4 rounded-full text-muted hover:bg-secondary/20 transition-colors"
            >
               <Settings className="h-6 w-6" />
            </button>
         </div>
      </nav>
    </div>
  );
}
