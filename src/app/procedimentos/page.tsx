import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Zap, Shield, ChevronRight } from "lucide-react";
import { LogoMark } from "@/components/logo";

export const metadata: Metadata = {
  title: "Procedimentos | Luh Moura Estética Avançada",
  description: "Conheça os protocolos exclusivos de harmonização facial, body sculpt e longevidade da Dra. Luh Moura.",
  openGraph: { title: "Procedimentos | Luh Moura Estética Avançada", description: "Conheça os protocolos exclusivos de harmonização facial, body sculpt e longevidade da Dra. Luh Moura." }
};

export default function Procedimentos() {
  const categories = [
    {
      title: "Facial Heritage",
      description: "Esculpir contornos, restaurar volumes e devolver a luminosidade natural com precisão cirúrgica.",
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      image: "/images/facial-heritage.webp",
      items: ["Harmonização Facial", "Bioestimuladores", "Botox Advanced", "Ultraformer MPT"]
    },
    {
      title: "Body Sculpt",
      description: "Tecnologia de ponta para redesenhar a silhueta e tratar a flacidez com protocolos exclusivos.",
      icon: <Zap className="h-6 w-6 text-primary" />,
      image: "/images/body-sculpt.webp",
      items: ["Lipo Sem Cortes", "Protocolo Scizer", "Morpheus8 Body", "Bioestimulo Corporal"]
    },
    {
      title: "Longevity & Care",
      description: "Tratamentos regenerativos que atuam na saúde celular para resultados que transcendem o tempo.",
      icon: <Shield className="h-6 w-6 text-primary" />,
      image: "/images/longevity-care.webp",
      items: ["PDRN Infusion", "Exossomos de Elite", "Skinbooster Platinum", "Microagulhamento VIP"]
    }
  ];

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 mesh-bg pb-24">
      {/* 2026 Grainy Texture Filter */}
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(90%,1200px)]">
        <div className="glass-card px-8 py-4 rounded-[2rem] flex items-center justify-between border-primary/10 bg-white/70">
          <Link href="/" className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-muted hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-3">
            <LogoMark className="h-9 w-9" />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-foreground">Menu de Excelência</span>
          </div>
          <Link href="/login" className="px-5 py-2 rounded-xl bg-foreground text-background font-bold text-[9px] uppercase tracking-widest transition-all hover:bg-muted shadow-lg shadow-foreground/10">
            Portal
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-48">
        <header className="max-w-3xl mb-24 sda-reveal">
          <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
             <div className="h-1 w-8 bg-primary" />
             Catálogo de Transformação
          </div>
          <h1 className="text-[var(--font-size-section)] font-medium leading-none tracking-tighter text-foreground mb-8">
            Nossos <br />
            <span className="font-serif text-gradient-rose italic font-medium">Procedimentos.</span>
          </h1>
          <p className="text-xl text-muted font-medium leading-relaxed">
            Curadoria rigorosa de tecnologias aliada a uma visão artística para resultados que respeitam sua identidade.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sda-reveal">
          {categories.map((cat, i) => (
            <div key={i} className="glass-card rounded-[3rem] overflow-hidden flex flex-col hover:translate-y-[-10px] transition-transform duration-700 bg-white/80 border-primary/5">
              <div className="relative aspect-[4/3]">
                <Image src={cat.image} alt={cat.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-transparent" />
                <div className="absolute top-6 left-6 h-14 w-14 rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                  {cat.icon}
                </div>
              </div>
              <div className="p-10 flex flex-col space-y-8 flex-1">
                <div>
                  <h3 className="text-3xl font-medium tracking-tighter mb-4">{cat.title}</h3>
                  <p className="text-muted text-sm font-medium leading-relaxed mb-8">{cat.description}</p>
                  <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent mb-8" />
                  <ul className="space-y-4">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center justify-between group cursor-pointer">
                        <span className="text-xs font-medium uppercase tracking-widest text-foreground/80 group-hover:text-primary transition-colors">{item}</span>
                        <ChevronRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
                      </li>
                    ))}
                  </ul>
                </div>
                <button type="button" className="w-full h-16 rounded-2xl bg-foreground text-background text-[10px] font-medium uppercase tracking-[0.3em] hover:bg-muted transition-colors mt-auto">
                  Consultar Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-32 glass-card rounded-[4rem] p-12 md:p-20 overflow-hidden relative sda-reveal">
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                 <h2 className="text-5xl font-medium tracking-tighter leading-none">Personalização <br /><span className="font-serif text-gradient-rose italic">Algorítmica.</span></h2>
                 <p className="text-muted font-medium leading-relaxed">Cada diagnóstico começa com uma análise digital profunda da sua pele, permitindo que criemos protocolos matematicamente precisos para suas necessidades únicas.</p>
                 <div className="flex gap-6">
                    <div className="flex flex-col">
                       <span className="text-4xl font-medium text-primary italic tracking-tighter">100%</span>
                       <span className="text-[9px] font-medium uppercase tracking-widest opacity-60">Personalizado</span>
                    </div>
                    <div className="flex flex-col">
                       <span className="text-4xl font-medium text-primary italic tracking-tighter">零</span>
                       <span className="text-[9px] font-medium uppercase tracking-widest opacity-60">Fórmula Pronta</span>
                    </div>
                 </div>
              </div>
              <div className="relative">
                 <div className="h-64 w-64 rounded-full bg-primary/20 blur-[100px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                 <div className="relative h-80 w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20">
                    <Image src="/images/algorithmic-personalization.webp" alt="Mapeamento digital de pele" fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover" />
                 </div>
              </div>
           </div>
        </div>
      </main>
    </div>
  );
}
