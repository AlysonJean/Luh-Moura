import React from 'react';
import { Package, AlertTriangle, CheckCircle2, TrendingUp, Users, Calendar, Plus } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { LogoutButton } from '@/components/logout-button';
import { Logo, LogoMark } from '@/components/logo';
import { db } from '@/lib/db';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Luh Moura Estética",
  description: "Procedimentos de estética avançada e acompanhamento exclusivo com Dra. Luh Moura.",
  openGraph: {
    title: "Admin | Luh Moura Estética",
    description: "Procedimentos de estética avançada e acompanhamento exclusivo com Dra. Luh Moura.",
  },
};



export const dynamic = 'force-dynamic';

const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function getStockStatus(stock: number, minThreshold: number): 'critical' | 'warning' | 'ok' {
  if (stock <= 0) return 'critical';
  if (stock <= minThreshold) return 'warning';
  return 'ok';
}

export default async function AdminDashboard() {
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const [patientCount, sessionsThisMonth, revenueAgg, inventoryItems] = await Promise.all([
    db.patient.count(),
    db.medicalRecord.count({ where: { createdAt: { gte: startOfMonth } } }),
    db.treatmentPlan.aggregate({
      _sum: { totalAmount: true },
      where: { createdAt: { gte: startOfMonth } },
    }),
    db.inventoryItem.findMany({
      include: { batches: true },
      orderBy: { name: 'asc' },
    }),
  ]);

  const stats = [
    { label: 'Pacientes', value: String(patientCount), icon: Users, color: 'text-blue-500' },
    { label: 'Sessões/Mês', value: String(sessionsThisMonth), icon: Calendar, color: 'text-emerald-500' },
    {
      label: 'Faturamento',
      value: currencyFormatter.format(Number(revenueAgg._sum.totalAmount ?? 0)),
      icon: TrendingUp,
      color: 'text-emerald-500',
    },
  ];

  const inventoryStatus = inventoryItems
    .map((item) => {
      const stock = item.batches.reduce((sum, batch) => sum + batch.currentQuantity, 0);
      return {
        id: item.id,
        name: item.name,
        brand: item.brand,
        stock,
        status: getStockStatus(stock, item.minThreshold),
      };
    })
    .sort((a, b) => {
      const priority = { critical: 0, warning: 1, ok: 2 } as const;
      return priority[a.status] - priority[b.status];
    });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Header Mobile-First */}
      <header className="sticky top-0 z-10 flex h-16 items-center justify-between border-b border-border/50 bg-background/80 px-4 backdrop-blur-md sm:px-8">
        <Logo markClassName="h-9 w-9" wordmarkClassName="h-5" tagline={false} />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LogoMark className="h-10 w-10" />
          <LogoutButton variant="icon" />
        </div>
      </header>

      <main className="p-4 sm:p-8 max-w-7xl mx-auto space-y-8">
        {/* Quick Actions - One Hand Operation */}
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <button type="button" className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-primary p-6 text-primary-foreground shadow-lg shadow-primary/20 active:scale-95 transition-all">
            <Plus className="h-6 w-6" />
            <span className="text-sm font-bold">Novo Paciente</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-card border border-border p-6 shadow-sm active:scale-95 transition-all">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="text-sm font-bold">Agenda</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-card border border-border p-6 shadow-sm active:scale-95 transition-all">
            <Package className="h-6 w-6 text-primary" />
            <span className="text-sm font-bold">Estoque</span>
          </button>
          <button type="button" className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-card border border-border p-6 shadow-sm active:scale-95 transition-all">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-sm font-bold">Financeiro</span>
          </button>
        </section>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="flex items-center gap-4 rounded-2xl bg-card border border-border p-6 shadow-sm">
              <div className={`rounded-xl bg-secondary p-3 ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Stock Semaphore - THE CORE FEATURE */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Monitoramento de Estoque
            </h2>
            <span className="text-xs font-bold px-2 py-1 bg-secondary rounded-full text-muted-foreground">SISTEMA SEMÁFORO</span>
          </div>

          {inventoryStatus.length === 0 ? (
            <p className="text-center text-sm text-muted-foreground py-12">
              Nenhum item de estoque cadastrado ainda.
            </p>
          ) : (
            <div className="grid gap-4">
              {inventoryStatus.map((item) => (
                <div key={item.id} className="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-card border border-border p-4 shadow-sm transition-all hover:border-primary/50">
                  {/* Status Indicator Bar */}
                  <div className={`absolute left-0 top-0 h-full w-1.5 ${
                    item.status === 'critical' ? 'bg-red-500' :
                    item.status === 'warning' ? 'bg-yellow-500' :
                    'bg-emerald-500'
                  }`} />

                  <div className="pl-2">
                    <h3 className="font-bold">{item.name}</h3>
                    {item.brand && (
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.brand}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className={`text-xl font-black ${
                        item.status === 'critical' ? 'text-red-500' :
                        item.status === 'warning' ? 'text-yellow-500' :
                        'text-emerald-500'
                      }`}>
                        {item.stock}
                      </p>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase">unidades</p>
                    </div>

                    {item.status === 'critical' && <AlertTriangle className="h-5 w-5 text-red-500 animate-pulse" />}
                    {item.status === 'ok' && <CheckCircle2 className="h-5 w-5 text-emerald-500" />}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Bottom Navigation for Mobile (One-Handed) */}
      <nav className="fixed bottom-0 left-0 z-20 w-full bg-background/90 backdrop-blur-lg border-t border-border flex justify-around p-4 sm:hidden">
         <Plus className="h-7 w-7 text-primary" />
         <Calendar className="h-7 w-7 text-muted-foreground" />
         <Users className="h-7 w-7 text-muted-foreground" />
         <Package className="h-7 w-7 text-muted-foreground" />
      </nav>
    </div>
  );
}
