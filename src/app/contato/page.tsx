import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Phone, MapPin, Instagram, Mail, ChevronRight } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";

export const metadata: Metadata = {
  title: "Contato | Luh Moura Estética Avançada",
  description: "Fale com a equipe da Dra. Luh Moura via WhatsApp, telefone ou redes sociais e agende sua avaliação.",
  openGraph: { title: "Contato | Luh Moura Estética Avançada", description: "Fale com a equipe da Dra. Luh Moura via WhatsApp, telefone ou redes sociais e agende sua avaliação." }
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

      <MarketingNav label="VIP Concierge" ctaHref="/login" ctaLabel="Portal" />

      <main className="container mx-auto px-6 pt-28 sm:pt-36 md:pt-48">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
           
           <div className="space-y-16 sda-reveal">
              <header className="space-y-8">
                 <div className="inline-flex py-2 px-4 rounded-full border border-primary/20 bg-white text-[9px] font-medium uppercase tracking-widest text-primary">
                    Canal Exclusivo
                 </div>
                 <h1 className="text-[var(--font-size-hero)] font-medium leading-[0.85] tracking-tighter text-foreground">
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
                    <p className="text-white font-medium text-xl tracking-tight">Dra. Luh Moura</p>
                    <p className="text-white/70 text-[10px] font-medium uppercase tracking-[0.3em]">Fundadora & Especialista</p>
                 </div>
              </div>

              <div className="space-y-6">
                 {contactMethods.map((method, i) => (
                    <a key={i} href={method.link} target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-4 sm:gap-8 p-5 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border-primary/5 hover:border-primary/20 hover:scale-[1.02] transition-all group">
                       <div className={`h-12 w-12 sm:h-16 sm:w-16 rounded-2xl ${method.color} flex items-center justify-center shrink-0`}>
                          {method.icon}
                       </div>
                       <div className="flex-1 space-y-1 min-w-0">
                          <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-primary">{method.label}</span>
                          <h3 className="text-lg sm:text-2xl font-medium tracking-tight break-words group-hover:text-primary transition-colors">{method.value}</h3>
                          <p className="text-muted text-xs font-medium opacity-60 leading-relaxed">{method.description}</p>
                       </div>
                       <ChevronRight className="hidden sm:block h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                 ))}
              </div>
           </div>

           <div className="space-y-12 sda-reveal">
              <div className="glass-card rounded-[4rem] overflow-hidden aspect-square relative bg-white border-primary/10">
                 <Image src="/images/contato-location.webp" alt="Recepção da Clínica Luh Moura" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                 <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 p-6 sm:p-8 glass-card rounded-3xl space-y-4">
                    <div className="flex items-center gap-2">
                       <MapPin className="h-5 w-5 text-primary" />
                       <h4 className="text-xl font-medium tracking-tighter">Belo Horizonte, MG</h4>
                    </div>
                    <p className="text-xs text-muted font-medium leading-relaxed">
                       Nossa unidade conceito está localizada no coração estratégico da estética avançada em BH. Endereço completo enviado após agendamento VIP.
                    </p>
                 </div>
              </div>

              <div className="relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-0 p-8 sm:p-10 glass-card rounded-[3rem] border-primary/5">
                 <Image src="/images/personal-care.webp" alt="" fill sizes="600px" className="object-cover opacity-10 pointer-events-none" />
                 <div className="relative z-10 space-y-4">
                    <h4 className="text-[10px] font-medium uppercase tracking-widest text-primary">Siga o Legado</h4>
                    <div className="flex gap-6">
                       <Link href="https://instagram.com" className="h-12 w-12 rounded-full bg-foreground flex items-center justify-center text-background hover:bg-primary transition-colors">
                          <Instagram className="h-5 w-5" />
                       </Link>
                       <Link href="https://wa.me/5531985537919" className="h-12 w-12 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-transform">
                          <MessageSquare className="h-5 w-5" />
                       </Link>
                    </div>
                 </div>
                 <div className="relative z-10 text-left sm:text-right">
                    <span className="text-[10px] font-medium uppercase tracking-widest opacity-30">Horário de Atendimento</span>
                    <p className="text-xs font-medium">Seg — Sex • 09:00 — 19:00</p>
                    <p className="text-[10px] font-medium text-primary">Atendimento VIP aos Sábados</p>
                 </div>
              </div>
           </div>

        </div>
      </main>
    </div>
  );
}
