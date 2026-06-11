import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Cpu, Activity, ShieldCheck, ChevronRight } from "lucide-react";
import { LogoMark } from "@/components/logo";

export const metadata: Metadata = {
  title: "Tecnologia | Luh Moura Estética Avançada",
  description: "Equipamentos de última geração como Ultraformer MPT e Morpheus8 para resultados de alta performance.",
};

export default function Tecnologia() {
  const assets = [
    {
      name: "Ultraformer MPT",
      category: "Lifting Não Invasivo",
      description: "A última evolução em ultrassom micro e macrofocado. Atua nas camadas mais profundas para um efeito de lifting imediato e duradouro.",
      tag: "Destaque",
      image: "/images/ultraformer-mpt.webp"
    },
    {
      name: "Morpheus8",
      category: "Remodelamento Adiposo",
      description: "Radiofrequência microagulhada de elite. Estimula o colágeno de forma profunda, tratando flacidez e textura da pele simultaneamente.",
      tag: "Elite Tech",
      image: "/images/morpheus8.webp"
    },
    {
      name: "Scizer",
      category: "Contorno Corporal",
      description: "Tecnologia HIFU focada na redução de gordura localizada com precisão milimétrica e resfriamento integrado para máximo conforto.",
      tag: "Body Precision",
      image: "/images/scizer-hifu.webp"
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
          <Link href="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-muted hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Voltar
          </Link>
          <div className="flex items-center gap-3">
            <LogoMark className="h-9 w-9" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">Alquimia Moderna</span>
          </div>
          <Link href="/contato" className="px-5 py-2 rounded-xl bg-foreground text-background font-bold text-[9px] uppercase tracking-widest transition-all hover:bg-muted shadow-lg shadow-foreground/10">
            Agendar
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-48">
        <header className="max-w-3xl mb-32 sda-reveal">
           <div className="inline-flex items-center gap-2 mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-primary">
              <Cpu className="h-4 w-4" />
              Alta Performance Clínica
           </div>
           <h1 className="text-[var(--font-size-section)] font-black leading-none tracking-tighter text-foreground mb-10">
              Onde a Tecnologia <br />
              <span className="font-serif text-gradient-rose italic font-medium">se torna Magia.</span>
           </h1>
           <p className="text-xl text-muted font-medium leading-relaxed">
              Investimos no que há de mais disruptivo no mercado global. Cada equipamento em nossa clínica foi selecionado por sua capacidade de entregar resultados seguros e transformadores.
           </p>
        </header>

        <section className="space-y-12">
           {assets.map((asset, i) => (
              <div key={i} className="glass-card rounded-[4rem] p-10 md:p-16 flex flex-col md:flex-row items-center gap-16 sda-reveal hover:border-primary/20 transition-colors group">
                 <div className="flex-1 space-y-8">
                    <div className="inline-flex px-4 py-2 rounded-full bg-primary/10 text-primary text-[8px] font-black uppercase tracking-widest">
                       {asset.tag}
                    </div>
                    <h2 className="text-5xl font-black tracking-tighter">{asset.name}</h2>
                    <p className="text-lg font-medium text-muted leading-relaxed opacity-80">{asset.description}</p>
                    <div className="flex items-center gap-8 pt-4">
                       <div className="flex items-center gap-2 text-[10px] font-bold text-foreground">
                          <Activity className="h-4 w-4 text-primary" />
                          Certificado FDA
                       </div>
                       <div className="flex items-center gap-2 text-[10px] font-bold text-foreground">
                          <ShieldCheck className="h-4 w-4 text-primary" />
                          Segurança Total
                       </div>
                    </div>
                 </div>
                 <div className="flex-1 flex justify-center">
                    <div className="relative h-64 w-full md:w-80 rounded-[3rem] overflow-hidden border border-primary/5 shadow-xl shadow-primary/5 group-hover:scale-[1.02] transition-transform duration-700">
                       <Image src={asset.image} alt={asset.name} fill sizes="(min-width: 768px) 320px, 100vw" className="object-cover" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent" />
                       <div className="absolute bottom-8 left-0 right-0 text-center">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-4 block">{asset.category}</span>
                          <div className="h-px w-12 bg-primary mx-auto" />
                       </div>
                    </div>
                 </div>
              </div>
           ))}
        </section>

        {/* Integration Teaser */}
        <section className="mt-40 text-center space-y-12 sda-reveal">
           <h2 className="text-5xl font-black tracking-tighter leading-none max-w-2xl mx-auto">Tudo controlado pela palma da sua mão.</h2>
           <p className="text-muted font-medium leading-relaxed max-w-xl mx-auto">No nosso portal, você acompanha cada parâmetro tecnológico utilizado em seus protocolos e visualiza sua evolução em alta definição.</p>
           <Link href="/login" className="group inline-flex items-center gap-3 text-primary font-black uppercase text-xs tracking-widest">
              Acesse seu histórico tecnológico <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
           </Link>
        </section>
      </main>
    </div>
  );
}
