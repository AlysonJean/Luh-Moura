"use client";

import React, { useState, useRef } from 'react';
import { MapPin, X, Plus, Save, RotateCcw, ImageIcon, Loader2, Check, AlertCircle } from 'lucide-react';

interface Annotation {
  id: string;
  x: number; // Porcentagem (0-100)
  y: number; // Porcentagem (0-100)
  label: string;
}

interface ImageAnnotatorProps {
  patientId: string;
  patientName: string;
}

export function ImageAnnotator({ patientId, patientName }: ImageAnnotatorProps) {
  const [image, setImage] = useState<string | null>(null);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [procedureName, setProcedureName] = useState('');
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
        setAnnotations([]); // Reseta ao trocar foto
        setSaveState('idle');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if (!isAdding || !containerRef.current || !image) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    const newAnnotation: Annotation = {
      id: Math.random().toString(36).substr(2, 9),
      x,
      y,
      label: `Ponto ${annotations.length + 1}`,
    };

    setAnnotations([...annotations, newAnnotation]);
    setIsAdding(false);
  };

  const removeAnnotation = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setAnnotations(annotations.filter((a) => a.id !== id));
  };

  const handleSave = async () => {
    if (!image || !procedureName.trim()) return;

    setSaveState('saving');

    try {
      const res = await fetch('/api/medical-records', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          patientId,
          procedureName: procedureName.trim(),
          imageDataUrl: image,
          annotations,
        }),
      });

      if (!res.ok) throw new Error('Falha ao salvar registro');

      setSaveState('success');
    } catch {
      setSaveState('error');
    }
  };

  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-card border border-border p-6 shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Visual Evolution Engine</h2>
          <p className="text-sm text-muted-foreground">Mapeamento de procedimentos em tempo real • {patientName}</p>
        </div>
        <div className="flex gap-2">
           {image && (
             <button
               type="button"
               onClick={() => { setAnnotations([]); setSaveState('idle'); }}
               className="p-2 rounded-xl bg-secondary text-muted-foreground hover:text-foreground transition-colors"
               title="Resetar"
             >
               <RotateCcw className="h-5 w-5" />
             </button>
           )}
        </div>
      </div>

      {!image ? (
        <label className="flex h-80 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border p-12 text-center cursor-pointer hover:bg-secondary/30 transition-all active:scale-[0.99]">
          <div className="rounded-full bg-primary/10 p-4">
            <ImageIcon className="h-10 w-10 text-primary" />
          </div>
          <span className="mt-4 text-lg font-bold">Carregar Foto do Paciente</span>
          <span className="text-sm text-muted-foreground">PNG ou JPG (Máx 10MB)</span>
          <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
        </label>
      ) : (
        <div className="space-y-4">
          <div
            ref={containerRef}
            onClick={handleContainerClick}
            className={`relative overflow-hidden rounded-2xl border border-border bg-black shadow-inner ${isAdding ? 'cursor-crosshair' : 'cursor-default'}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt="Paciente"
              className="w-full h-auto select-none opacity-90"
              onDragStart={(e) => e.preventDefault()}
            />

            {/* Mapeamento de Pontos - LEI DA COORDENADA (%) */}
            {annotations.map((a) => (
                <div
                  key={a.id}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${a.x}%`, top: `${a.y}%` }}
                >
                <div className="relative">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-primary shadow-lg shadow-black/30 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>

                  {/* Tooltip/Label */}
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all scale-90 group-hover:scale-100 z-20">
                    <div className="bg-black/90 backdrop-blur-md text-white text-[10px] font-bold py-1 px-3 rounded-full border border-white/20 whitespace-nowrap">
                      {a.label}
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={(e) => removeAnnotation(a.id, e)}
                    className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-red-500 text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-all border border-white"
                    title="Remover ponto"
                    aria-label="Remover ponto"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}

            {isAdding && (
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center pointer-events-none">
                <p className="bg-primary px-4 py-2 rounded-full text-foreground font-bold text-sm shadow-xl">
                  Clique na foto para marcar
                </p>
              </div>
            )}
          </div>

          <input
            type="text"
            value={procedureName}
            onChange={(e) => { setProcedureName(e.target.value); setSaveState('idle'); }}
            placeholder="Procedimento realizado (ex: Botox - Glabela)"
            className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm font-medium outline-none focus:border-primary transition-all"
          />

          <div className="flex gap-4">
            {!isAdding ? (
              <button
                type="button"
                onClick={() => setIsAdding(true)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-foreground shadow-lg shadow-primary/20 active:scale-95 transition-all"
              >
                <Plus className="h-5 w-5" />
                Adicionar Marcação
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-500 py-4 font-bold text-white shadow-lg shadow-red-500/20 active:scale-95 transition-all"
              >
                Cancelar Marcação
              </button>
            )}

            <button
              type="button"
              onClick={handleSave}
              disabled={!procedureName.trim() || saveState === 'saving'}
              className="flex h-full items-center justify-center gap-2 rounded-xl bg-secondary px-6 font-bold text-muted-foreground active:scale-95 transition-all disabled:opacity-50"
            >
              {saveState === 'saving' && <Loader2 className="h-4 w-4 animate-spin" />}
              {saveState === 'success' && <Check className="h-4 w-4 text-emerald-500" />}
              {saveState === 'error' && <AlertCircle className="h-4 w-4 text-red-500" />}
              {saveState === 'idle' && <Save className="h-4 w-4" />}
              {saveState === 'success' ? 'Salvo!' : saveState === 'error' ? 'Erro ao salvar' : 'Salvar Registro'}
            </button>
          </div>
        </div>
      )}

      {annotations.length > 0 && (
        <div className="space-y-2 border-t border-border pt-4">
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Log de Procedimentos</p>
          <div className="grid grid-cols-2 gap-2">
            {annotations.map((a) => (
              <div key={a.id} className="flex items-center justify-between p-2 rounded-lg bg-secondary/50 border border-border">
                <span className="text-xs font-medium">{a.label}</span>
                <span className="text-[10px] font-mono opacity-60">X:{a.x.toFixed(0)}% Y:{a.y.toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
