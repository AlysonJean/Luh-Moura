import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MessageSquare, Phone, MapPin, Instagram, Mail, ChevronRight } from "lucide-react";
import { LogoMark } from "@/components/logo";

export const metadata: Metadata = {
  title: "Contato | Luh Moura Estética Avançada",
  description: "Fale com a equipe da Dra. Luh Moura via WhatsApp, telefone ou redes sociais e agende sua avaliação.",
};

export default function Contato() {
  const contactMethods = [
    {
      label: "WhatsApp VIP",
      value: "(31) 98553-7919",
      description: "Agendamento prioritário e dúvidas sobre protocolos.",
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      link: "https://wa.me/5531985537919",
      color: "bg-[#25D366]/10"
    },
    {
      label: "Concierge Clínico",
      value: "(31) 98553-7919",
      description: "Suporte direto para pacientes em tratamento.",
      icon: <Phone className="h-6 w-6 text-primary" />,
      link: "tel:+5531985537919",
      color: "bg-primary/10"
    },
    {
      label: "Curadoria & Parcerias",
      value: "contato@luhmoura.com.br",
      description: "Para assuntos institucionais e colaborações.",
      icon: <Mail className="h-6 w-6 text-primary" />,
      link: "mailto:contato@luhmoura.com.br",
      color: "bg-foreground/5"
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
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground">VIP Concierge</span>
          </div>
          <Link href="/login" className="px-5 py-2 rounded-xl bg-foreground text-background font-bold text-[9px] uppercase tracking-widest transition-all hover:bg-muted shadow-lg shadow-foreground/10">
            Portal
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-48">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
           
           <div className="space-y-16 sda-reveal">
              <header className="space-y-8">
                 <div className="inline-flex py-2 px-4 rounded-full border border-primary/20 bg-white text-[9px] font-black uppercase tracking-widest text-primary">
                    Canal Exclusivo
                 </div>
                 <h1 className="text-[var(--font-size-hero)] font-black leading-[0.85] tracking-tighter text-foreground">
                    Inicie seu <br />
                    <span className="font-serif text-gradient-rose italic font-medium">Capítulo Elite.</span>
                 </h1>
                 <p className="text-xl text-muted font-medium leading-relaxed max-w-md">
                    Estamos prontos para desenhar sua jornada de transformação. Escolha seu canal de preferência.
                 </p>
              </header>

              <div className="relative rounded-[3rem] overflow-hidden aspect-[16/9] shadow-xl shadow-primary/10">
                 <Image src="/images/dra-contato.webp" alt="Dra. Luh Moura" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                 <div className="absolute bottom-8 left-8">
                    <p className="text-white font-black text-xl tracking-tight">Dra. Luh Moura</p>
                    <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.3em]">Fundadora & Especialista</p>
                 </div>
              </div>

              <div className="space-y-6">
                 {contactMethods.map((method, i) => (
                    <a key={i} href={method.link} target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-8 p-8 rounded-[2.5rem] border-primary/5 hover:border-primary/20 hover:scale-[1.02] transition-all group">
                       <div className={`h-16 w-16 rounded-2xl ${method.color} flex items-center justify-center shrink-0`}>
                          {method.icon}
                       </div>
                       <div className="flex-1 space-y-1">
                          <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">{method.label}</span>
                          <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">{method.value}</h3>
                          <p className="text-muted text-xs font-medium opacity-60 leading-relaxed">{method.description}</p>
                       </div>
                       <ChevronRight className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                 ))}
              </div>
           </div>

           <div className="space-y-12 sda-reveal">
              <div className="glass-card rounded-[4rem] overflow-hidden aspect-square relative bg-white border-primary/10">
                 <Image src="/images/contato-location.webp" alt="Recepção da Clínica Luh Moura" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                 <div className="absolute bottom-10 left-10 right-10 p-8 glass-card rounded-3xl space-y-4">
                    <div className="flex items-center gap-2">
                       <MapPin className="h-5 w-5 text-primary" />
                       <h4 className="text-xl font-black tracking-tighter">Belo Horizonte, MG</h4>
                    </div>
                    <p className="text-xs text-muted font-medium leading-relaxed">
                       Nossa unidade conceito está localizada no coração estratégico da estética avançada em BH. Endereço completo enviado após agendamento VIP.
                    </p>
                 </div>
              </div>

              <div className="relative overflow-hidden flex items-center justify-between p-10 glass-card rounded-[3rem] border-primary/5">
                 <Image src="/images/personal-care.webp" alt="" fill sizes="600px" className="object-cover opacity-10 pointer-events-none" />
                 <div className="relative z-10 space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary">Siga o Legado</h4>
                    <div className="flex gap-6">
                       <Link href="https://instagram.com" className="h-12 w-12 rounded-full bg-foreground flex items-center justify-center text-background hover:bg-primary transition-colors">
                          <Instagram className="h-5 w-5" />
                       </Link>
                       <Link href="https://wa.me/5531985537919" className="h-12 w-12 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform">
                          <MessageSquare className="h-5 w-5" />
                       </Link>
                    </div>
                 </div>
                 <div className="relative z-10 text-right">
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-30">Horário de Atendimento</span>
                    <p className="text-xs font-black">Seg — Sex • 09:00 — 19:00</p>
                    <p className="text-[10px] font-medium text-primary">Atendimento VIP aos Sábados</p>
                 </div>
              </div>
           </div>

        </div>
      </main>
    </div>
  );
}
