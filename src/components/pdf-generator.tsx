"use client";

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { BudgetPDF } from '@/components/pdf/budget-pdf';
import { FileDown, FileText, Send } from 'lucide-react';

export function PDFGenerator() {
  const mockData = {
    patientName: "Mariana Silva",
    date: new Date().toLocaleDateString('pt-BR'),
    items: [
      { description: "Aplicação de Toxina Botulínica (3 áreas)", value: "R$ 1.200,00" },
      { description: "Bioestimulador de Colágeno", value: "R$ 2.400,00" },
      { description: "Preenchimento Labial (1ml)", value: "R$ 1.600,00" },
    ],
    total: "R$ 5.200,00"
  };

  return (
    <div className="rounded-3xl bg-card border border-border p-6 shadow-xl space-y-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          <FileText className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Documentos & Orçamentos</h2>
          <p className="text-sm text-muted-foreground">Gere documentos oficiais em um clique</p>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="p-4 rounded-2xl bg-secondary/30 border border-border flex items-center justify-between group hover:border-primary/50 transition-all">
          <div className="flex flex-col">
            <span className="text-sm font-bold">Próximo Orçamento</span>
            <span className="text-xs text-muted-foreground">Paciente: {mockData.patientName}</span>
          </div>

          <div className="flex gap-2">
            <PDFDownloadLink 
              document={<BudgetPDF {...mockData} />} 
              fileName={`orcamento_${mockData.patientName.replace(/\s+/g, '_')}.pdf`}
              className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-bold text-foreground hover:bg-primary/90 transition-all active:scale-95"
            >
              {({ loading }) => (
                <>
                  <FileDown className="h-4 w-4" />
                  {loading ? 'Gerando...' : 'Baixar PDF'}
                </>
              )}
            </PDFDownloadLink>

            <button 
              title="Enviar Orçamento por WhatsApp/E-mail"
              aria-label="Enviar Orçamento por WhatsApp/E-mail"
              className="p-2 rounded-xl bg-white border border-border text-primary hover:bg-primary/5 transition-all"
            >
               <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
