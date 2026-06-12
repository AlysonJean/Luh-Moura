import Link from "next/link";
import Image from "next/image";
import type { SVGProps } from "react";
import { Sparkles, ArrowRight, ShieldCheck, MessageSquare, Award, Instagram, Heart } from "lucide-react";
import { auth } from "@/lib/auth";
import { Logo } from "@/components/logo";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luh Moura | Estética Avançada",
  description: "Procedimentos de estética avançada e acompanhamento exclusivo com Dra. Luh Moura.",
  openGraph: {
    title: "Luh Moura | Estética Avançada",
    description: "Procedimentos de estética avançada e acompanhamento exclusivo com Dra. Luh Moura.",
  },
};



export default async function Home() {
  const session = await auth();
  const role = session?.user?.role;

  const restrictedHref = role === "PATIENT" ? "/portal" : role === "ADMIN" || role === "ASSISTANT" ? "/admin" : "/login";
  const restrictedLabel = role === "PATIENT" ? "Meu Portal" : role === "ADMIN" || role === "ASSISTANT" ? "Painel Admin" : "Acesso Restrito";

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20">
      {/* Heritage Immersive Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-background mesh-bg">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-50 dark:opacity-10"
        />
        <div className="absolute top-[5%] right-[5%] h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-[5%] left-[5%] h-[40rem] w-[40rem] rounded-full bg-secondary/20 blur-[100px]" />
      </div>

      {/* Signature Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[min(90%,1200px)]">
        <div className="glass-card px-8 py-5 rounded-[2rem] flex items-center justify-between border-primary/10 bg-white/70 dark:bg-black/30">
          <Logo markClassName="h-11 w-11 transition-transform hover:rotate-6" wordmarkClassName="h-6" />

          <div className="hidden md:flex items-center gap-10 text-[10px] font-medium uppercase tracking-[0.2em] opacity-80">
            <Link href="/quem-somos" className="hover:text-primary transition-colors py-2">Quem Somos</Link>
            <Link href="/procedimentos" className="hover:text-primary transition-colors py-2">Procedimentos</Link>
            <Link href="/metodologia" className="hover:text-primary transition-colors py-2">Metodologia</Link>
            <Link href="/tecnologia" className="hover:text-primary transition-colors py-2">Tecnologia</Link>
            <Link href="/criolipolise-em-casa" className="hover:text-primary transition-colors py-2">Criolipólise em Casa</Link>
            <Link href="/contato" className="hover:text-primary transition-colors py-2">Contato</Link>
          </div>

          <Link href={restrictedHref} className="px-6 py-2.5 rounded-xl bg-foreground text-background font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-muted active:scale-95 shadow-lg shadow-foreground/10">
            {restrictedLabel}
          </Link>
        </div>
      </nav>

      {/* Hero Section - Signature Heritage */}
      <main className="container relative mx-auto px-6 pt-56 pb-32">
        <div className="flex flex-col items-center text-center space-y-14 max-w-5xl mx-auto sda-reveal">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground shadow-sm">
             <div className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
             Protocolos Exclusivos • Belo Horizonte
          </div>
          
          <h1 className="text-[var(--font-size-hero)] font-medium leading-[0.9] tracking-tighter text-foreground">
            Excelência em <br />
            <span className="font-serif text-gradient-rose italic font-medium">Harmonização.</span>
          </h1>
          
          <p className="text-xl text-muted leading-relaxed max-w-2xl font-medium">
            Aliando ciência avançada a uma visão artística única para revelar sua melhor versão. Experiências sob medida em um ambiente de absoluto requinte.
          </p>

          <div className="flex flex-col gap-5 sm:flex-row pt-8">
            <Link
              href="/portal"
              className="group relative flex h-20 items-center justify-center gap-4 rounded-[2rem] bg-primary px-14 text-sm font-medium uppercase tracking-widest text-foreground shadow-2xl shadow-primary/20 transition-all hover:scale-[1.02] hover:bg-primary/90 active:scale-[0.98]"
            >
              Meu Portal de Evolução
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </Link>
            
            <a
              href="https://wa.me/5531985537919"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-20 items-center justify-center gap-4 rounded-[2rem] border-2 border-primary/30 bg-white/50 px-14 text-sm font-medium uppercase tracking-widest text-foreground transition-all hover:bg-primary/10 active:scale-[0.98] backdrop-blur-sm cursor-pointer shadow-lg shadow-white/10"
            >
              <MessageSquare className="h-5 w-5" />
              WhatsApp VIP
            </a>
          </div>
        </div>

        {/* Heritage Bento Grid */}
        <div className="mt-40 bento-grid sda-reveal">
           {/* Primary Brand Block */}
           <div className="md:col-span-4 lg:col-span-3 relative overflow-hidden glass-card rounded-[3rem] p-12 space-y-8 hover:translate-y-[-10px] transition-transform duration-700 bg-white/80 border-primary/5">
              <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full overflow-hidden border-[6px] border-white shadow-xl shadow-primary/10">
                 <Image src="/images/seal-heritage.webp" alt="" fill sizes="200px" className="object-cover" />
              </div>
              <div className="h-16 w-16 rounded-2xl bg-primary flex items-center justify-center relative z-10">
                 <Award className="h-8 w-8 text-white sda-float" />
              </div>
              <div className="space-y-4 relative z-10 max-w-md">
                <h2 className="font-serif italic text-[var(--font-size-section)] font-medium leading-tight tracking-tighter">O Selo Luh Moura</h2>
                <p className="text-muted text-lg font-medium leading-relaxed">Mais que tratamentos, entregamos um legado de cuidado. Cada detalhe é planejado para que sua jornada seja tão impecável quanto o resultado.</p>
              </div>
              <div className="h-px w-full bg-gradient-to-r from-primary/30 to-transparent relative z-10" />
              <div className="flex gap-4 relative z-10">
                 <span className="px-4 py-2 rounded-full bg-secondary/30 text-[9px] font-medium uppercase tracking-widest">Naturalidade</span>
                 <span className="px-4 py-2 rounded-full bg-secondary/30 text-[9px] font-medium uppercase tracking-widest">Precisão</span>
              </div>
           </div>

           {/* Care Highlight */}
           <div className="md:col-span-2 lg:col-span-1 glass-card rounded-[3rem] p-10 flex flex-col items-center justify-center text-center space-y-3 hover:translate-y-[-10px] transition-transform duration-700 delay-100 border-secondary/20">
              <Heart className="h-10 w-10 text-primary sda-float" />
              <span className="text-[10px] uppercase font-medium tracking-widest text-muted">Cuidado Genuíno</span>
           </div>

           {/* Secure Heritage Block */}
           <div className="md:col-span-2 lg:col-span-2 rounded-[3rem] p-10 space-y-6 bg-foreground text-background hover:translate-y-[-10px] transition-transform duration-700 delay-200 shadow-2xl shadow-foreground/20 sda-reveal">
              <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-foreground sda-float" />
              </div>
              <h3 className="text-2xl font-medium tracking-tight">Privacidade Total</h3>
              <p className="text-sm font-medium opacity-60">Sua jornada protegida por criptografia de ponta e sigilo absoluto.</p>
           </div>

           {/* Signature Block */}
           <div className="md:col-span-3 lg:col-span-2 relative overflow-hidden rounded-[3rem] hover:translate-y-[-10px] transition-transform duration-700 delay-300 sda-reveal min-h-[20rem]">
              <Image src="/images/dra-assinatura.webp" alt="Dra. Luh Moura" fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10 space-y-2">
                 <p className="font-serif italic text-2xl text-white font-medium leading-tight">&ldquo;Cada protocolo carrega minha assinatura.&rdquo;</p>
                 <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/70">Dra. Luh Moura</span>
              </div>
           </div>

           {/* Call to Action Banner */}
           <div className="md:col-span-3 lg:col-span-4 relative glass-card rounded-[3rem] flex flex-col md:flex-row items-center justify-between group overflow-hidden hover:translate-y-[-10px] transition-transform duration-700 delay-400 border-primary/10 sda-reveal">
              <Image
                src="/images/cta-banner.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30 dark:from-black/85 dark:via-black/70 dark:to-black/20" />
              <div className="relative z-10 space-y-6 p-12 text-center md:text-left">
                 <h2 className="font-serif italic text-[var(--font-size-section)] font-medium tracking-tighter">Manifeste o seu melhor.</h2>
                 <p className="text-muted font-medium max-w-sm">Estamos prontos para desenhar seu novo capítulo. Agende sua avaliação VIP hoje mesmo.</p>
                 <a
                   href="https://wa.me/5531985537919"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 text-primary font-medium uppercase text-xs tracking-widest group"
                 >
                    Descobrir mais <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                 </a>
              </div>
              <div className="relative z-10 mt-8 md:mt-0 mr-12">
                 <div className="h-40 w-40 rounded-full bg-primary/20 blur-3xl group-hover:scale-150 transition-transform duration-1000 sda-float" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Sparkles className="h-16 w-16 text-primary opacity-40 animate-spin-slow" />
                 </div>
              </div>
           </div>
        </div>
      </main>

      {/* Signature Footer */}
      <footer className="border-t border-primary/5 bg-white/80 dark:bg-black/30 backdrop-blur-xl pt-28 pb-14">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-16">
          <div className="col-span-2 space-y-8">
            <Logo markClassName="h-14 w-14" wordmarkClassName="h-9" />
            <p className="text-sm text-muted font-medium max-w-md leading-relaxed">Excelência técnica e sensibilidade artística para o seu bem-estar supremo.</p>
            <div className="flex gap-6">
              <a 
                href="https://instagram.com/dra.luhmoura" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full border border-primary/20 flex items-center justify-center text-muted hover:text-primary transition-colors"
                title="Instagram"
                aria-label="Seguir no Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://wa.me/5531985537919" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="h-10 w-10 rounded-full border border-primary/20 flex items-center justify-center text-muted hover:text-primary transition-colors"
                title="WhatsApp VIP"
                aria-label="Falar no WhatsApp"
              >
                <MessageConnection className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-[10px] font-medium uppercase tracking-widest text-primary">Navegação Elite</h3>
            <ul className="space-y-4">
              <li><Link href="/quem-somos" className="block py-2 text-[10px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors">Quem Somos</Link></li>
              <li><Link href="/procedimentos" className="block py-2 text-[10px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors">Procedimentos</Link></li>
              <li><Link href="/metodologia" className="block py-2 text-[10px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors">Metodologia</Link></li>
              <li><Link href="/tecnologia" className="block py-2 text-[10px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors">Tecnologia</Link></li>
              <li><Link href="/criolipolise-em-casa" className="block py-2 text-[10px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors">Criolipólise em Casa</Link></li>
              <li><Link href="/duvidas-frequentes" className="block py-2 text-[10px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors">Dúvidas Frequentes</Link></li>
              <li><Link href="/contato" className="block py-2 text-[10px] font-medium uppercase tracking-widest text-muted hover:text-foreground transition-colors">Contato VIP</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-[10px] font-medium uppercase tracking-widest text-primary">Contato Concierge</h3>
            <div className="space-y-2">
              <p className="text-xs font-medium">Belo Horizonte, MG</p>
              <p className="text-[11px] text-muted font-medium">Atendimento por Agendamento</p>
              <a href="tel:+5531985537919" className="text-xs font-medium block py-3">(31) 98553-7919</a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 pt-24 text-center border-t border-primary/5 mt-16">
          <p className="text-[9px] font-medium uppercase tracking-[0.4em] opacity-30">© 2026 Luh Moura Estética Avançada • Heritage Edition</p>
        </div>
      </footer>
    </div>
  );
}

function MessageConnection(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
        </svg>
    )
}

function ChevronRight(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
