import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Award, Sun, Wind, Gem, ChevronRight } from "lucide-react";
import { LogoMark } from "@/components/logo";

export const metadata: Metadata = {
  title: "Metodologia | Luh Moura Estética Avançada",
  description: "Conheça os pilares da metodologia da Dra. Luh Moura: bioestética de precisão, curadoria de ativos e cuidado humanizado.",
  openGraph: { title: "Metodologia | Luh Moura Estética Avançada", description: "Conheça os pilares da metodologia da Dra. Luh Moura: bioestética de precisão, curadoria de ativos e cuidado humanizado." }
};

export default function Metodologia() {
  const pillars = [
    {
      title: "Bioestética de Precisão",
      description: "Unimos o conhecimento profundo da anatomia à sensibilidade artística para resultados que não parecem 'feitos', mas sim revelados.",
      icon: <Gem className="h-6 w-6 text-primary" />
    },
    {
      title: "Curadoria de Ativos",
      description: "Cada substância utilizada em nossos protocolos passa por um processo rigoroso de seleção, priorizando pureza e regeneração celular.",
      icon: <Wind className="h-6 w-6 text-primary" />
    },
    {
      title: "Jornada Atemporal",
      description: "Nosso foco não é a correção momentânea, mas o planejamento do seu envelhecimento com dignidade, vitalidade e viço.",
      icon: <Sun className="h-6 w-6 text-primary" />
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
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-foreground">Essência Signature</span>
          </div>
          <Link href="/portal" className="px-5 py-2 rounded-xl bg-foreground text-background font-bold text-[9px] uppercase tracking-widest transition-all hover:bg-muted shadow-lg shadow-foreground/10">
            Acesso VIP
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-48">
        <div className="max-w-6xl mx-auto space-y-32">

          {/* Hero Section */}
          <section className="grid lg:grid-cols-2 gap-16 items-center sda-reveal">
            <div className="text-center lg:text-left space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.3em] text-primary shadow-sm">
                  O Manifesto Luh Moura
              </div>
              <h1 className="text-[var(--font-size-hero)] font-medium leading-[0.85] tracking-tighter text-foreground">
                Ciência com <br />
                <span className="font-serif text-gradient-rose italic font-medium">Alma Artistica.</span>
              </h1>
              <p className="text-xl text-muted font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Acreditamos que a verdadeira beleza não é uma construção, mas uma herança protegida e aprimorada com o que há de mais avançado na biomedicina mundial.
              </p>
            </div>
            <div className="relative aspect-[3/4] max-w-md w-full mx-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10">
              <Image src="/images/dra-metodologia.webp" alt="Dra. Luh Moura" fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" priority />
            </div>
          </section>

          {/* The Pillars */}
          <section className="grid md:grid-cols-3 gap-12 sda-reveal">
             {pillars.map((pillar, i) => (
                <div key={i} className="space-y-6 group">
                   <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-primary/5 group-hover:scale-110 transition-transform bg-texture">
                      {pillar.icon}
                   </div>
                   <h3 className="text-2xl font-medium tracking-tight">{pillar.title}</h3>
                   <p className="text-muted text-sm leading-relaxed font-medium opacity-80">{pillar.description}</p>
                </div>
             ))}
          </section>

          {/* Core Philosophy Section */}
          <section className="glass-card rounded-[4rem] p-12 md:p-24 relative overflow-hidden sda-reveal">
             <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
                <div className="flex-1 space-y-8">
                   <Award className="h-12 w-12 text-primary" />
                   <h2 className="text-5xl font-medium tracking-tighter leading-none">O Selo de <br /><span className="font-serif text-gradient-rose italic">Excelência LM.</span></h2>
                   <p className="text-muted font-medium leading-relaxed text-lg">
                      Cada protocolo desenvolvido pela Dra. Luh Moura carrega um selo de compromisso absoluto. Não aceitamos nada menos que a perfeição técnica, protegida pelo mais alto padrão de segurança biológica e ética profissional.
                   </p>
                   <ul className="space-y-4 pt-4">
                      {["Rastreabilidade de Ativos", "Certificação de Protocolos Luxo", "Controle de Resultados 4k"].map((t, idx) => (
                         <li key={idx} className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/70">
                            <div className="h-1 w-4 bg-primary rounded-full" />
                            {t}
                         </li>
                      ))}
                   </ul>
                </div>
                <div className="flex-1 flex justify-center">
                   <div className="relative h-72 w-72 md:h-80 md:w-80 rounded-full overflow-hidden border-[6px] border-white shadow-2xl shadow-primary/20">
                      <Image src="/images/seal-excellence.webp" alt="Selo de Excelência LM" fill sizes="320px" className="object-cover" />
                   </div>
                </div>
             </div>
          </section>

          {/* Call To Action */}
          <section className="text-center pb-24 sda-reveal">
             <h3 className="text-4xl font-medium tracking-tighter mb-10">Dê o primeiro passo para sua melhor versão.</h3>
             <Link href="/contato" className="inline-flex h-20 items-center justify-center gap-4 rounded-[2rem] bg-foreground text-background px-16 text-sm font-medium uppercase tracking-widest hover:bg-muted transition-all active:scale-95 shadow-2xl">
                Agendar Minha Consultoria VIP
                <ChevronRight className="h-5 w-5" />
             </Link>
          </section>

        </div>
      </main>
    </div>
  );
}
