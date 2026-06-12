import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Home, Lock, HeartHandshake, Snowflake, MessageSquare, CheckCircle2, ChevronDown, Sparkles, Cpu, Waves, Zap, Lightbulb, Thermometer } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { NoiseFilter } from "@/components/noise-filter";

export const metadata: Metadata = {
  title: "Criolipólise em Casa | Luh Moura Estética Avançada",
  description: "Criolipólise profissional no conforto da sua casa, em Belo Horizonte. Agende uma avaliação gratuita e sem compromisso com nossa equipe.",
  openGraph: { title: "Criolipólise em Casa | Luh Moura Estética Avançada", description: "Criolipólise profissional no conforto da sua casa, em Belo Horizonte. Agende uma avaliação gratuita e sem compromisso com nossa equipe." }
};

const whatsappMessage = encodeURIComponent("Olá! Vi a página de Criolipólise em Casa e quero agendar minha avaliação gratuita.");
const whatsappHref = `https://wa.me/5531985537919?text=${whatsappMessage}`;

const beneficios = [
  {
    title: "Comodidade",
    description: "Sem deslocamento, sem trânsito e sem sala de espera. A sessão acontece no seu horário, no seu espaço.",
    icon: <Home className="h-6 w-6 text-primary" />
  },
  {
    title: "Privacidade",
    description: "Você se sente à vontade em um ambiente conhecido, sem se preocupar com olhares ou agendas de terceiros.",
    icon: <Lock className="h-6 w-6 text-primary" />
  },
  {
    title: "Atenção Individual",
    description: "Atendimento dedicado a você, sem pressa, com tempo para tirar todas as suas dúvidas com a especialista.",
    icon: <HeartHandshake className="h-6 w-6 text-primary" />
  }
];

const techFeatures = [
  {
    title: "Criolipólise de Precisão",
    description: "As placas resfriam a região tratada a -10°C, com controle de temperatura em tempo real exibido na tela touch e aquecimento gradual ao final da sessão, para mais segurança e conforto.",
    icon: <Snowflake className="h-6 w-6 text-primary" />
  },
  {
    title: "Ultracavitação",
    description: "Ondas de ultrassom de alta frequência atuam sobre as células de gordura, auxiliando na remodelação do contorno corporal de forma não invasiva.",
    icon: <Waves className="h-6 w-6 text-primary" />
  },
  {
    title: "Ondas de Choque (PSW)",
    description: "Ondas de choque piezoelétricas estimulam a regeneração celular, contribuindo para a melhora da textura da pele e do aspecto da celulite.",
    icon: <Zap className="h-6 w-6 text-primary" />
  },
  {
    title: "Luz LED",
    description: "Fototerapia que estimula a produção de colágeno, contribuindo para uma pele com aspecto mais viçoso e uniforme.",
    icon: <Lightbulb className="h-6 w-6 text-primary" />
  },
];

const passos = [
  "Você entra em contato pelo WhatsApp e agenda sua avaliação gratuita.",
  "Nossa especialista faz uma anamnese completa para entender suas necessidades e indicar as áreas adequadas.",
  "A sessão é realizada no conforto da sua casa, com equipamento profissional e os protocolos de segurança de uma clínica.",
  "Você recebe orientações de pós-sessão e um cronograma de acompanhamento personalizado.",
];

const faqItems = [
  {
    q: "A criolipólise em casa é segura?",
    a: "Sim. Utilizamos equipamento profissional e seguimos os mesmos protocolos de avaliação e segurança de um atendimento em clínica — toda sessão começa com uma anamnese individual."
  },
  {
    q: "Dói?",
    a: "A maioria das pessoas relata apenas uma sensação de frio intenso nos primeiros minutos, que se torna mais confortável conforme a área perde sensibilidade temporariamente."
  },
  {
    q: "Quantas sessões são necessárias?",
    a: "Varia de pessoa para pessoa e da área tratada. Na sua avaliação, a especialista monta um cronograma personalizado para o seu caso."
  },
  {
    q: "Quando começo a notar mudanças?",
    a: "O processo é gradual: o organismo processa as células tratadas ao longo das semanas seguintes à sessão, com mudanças percebidas progressivamente."
  },
  {
    q: "Como faço para agendar?",
    a: "Toque no botão de WhatsApp nesta página e fale com nossa equipe — a avaliação inicial é gratuita e sem compromisso."
  },
];

export default function CriolipoliseEmCasa() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 mesh-bg pb-24">
      <NoiseFilter />

      <MarketingNav label="Atendimento Domiciliar" ctaHref="#agendar" ctaLabel="Agendar" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="container mx-auto px-6 pt-28 sm:pt-36 md:pt-48">
        <div className="max-w-6xl mx-auto space-y-32">

          {/* Hero */}
          <section className="grid lg:grid-cols-2 gap-16 items-center sda-reveal">
            <div className="text-center lg:text-left space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.3em] text-primary shadow-sm">
                <Home className="h-3.5 w-3.5" />
                Novidade: Atendimento Domiciliar
              </div>
              <h1 className="text-[var(--font-size-hero)] font-medium leading-[0.85] tracking-tighter text-foreground">
                Criolipólise <br />
                <span className="font-serif text-gradient-rose italic font-medium">no conforto da sua casa.</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Tecnologia profissional para redução de gordura localizada, com toda a privacidade e comodidade de receber nossa especialista no conforto do seu lar, em Belo Horizonte.
              </p>
              <div className="flex flex-col items-center lg:items-start gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-20 items-center justify-center gap-4 rounded-[2rem] bg-[#25D366] px-12 text-sm font-medium uppercase tracking-widest text-white shadow-2xl shadow-[#25D366]/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <MessageSquare className="h-5 w-5" />
                  Quero Minha Avaliação Gratuita
                </a>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground opacity-60">
                  Atendimento por agendamento • Vagas conforme disponibilidade
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] max-w-lg w-full mx-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10">
              <Image src="/images/cta-banner.webp" alt="Ambiente acolhedor para sua sessão em casa" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" priority />
            </div>
          </section>

          {/* O que é */}
          <section className="grid lg:grid-cols-2 gap-16 items-center sda-reveal">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="h-32 w-32 rounded-[2.5rem] bg-white flex items-center justify-center shadow-xl shadow-primary/10 bg-texture">
                <Snowflake className="h-14 w-14 text-primary" />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
              <h2 className="text-[var(--font-size-section)] font-medium leading-none tracking-tighter">
                O que é a <br />
                <span className="font-serif text-gradient-rose italic font-medium">Criolipólise?</span>
              </h2>
              <p className="text-muted-foreground font-medium leading-relaxed text-lg max-w-xl mx-auto lg:mx-0">
                A criolipólise é uma tecnologia não invasiva que utiliza o resfriamento controlado para atuar sobre as células de gordura localizada. Nas semanas seguintes, o organismo processa naturalmente essas células, podendo reduzir gradualmente as medidas da região tratada — sem cortes, agulhas ou anestesia, e com retorno imediato à rotina.
              </p>
            </div>
          </section>

          {/* Tecnologia */}
          <section className="space-y-16 sda-reveal">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
                <Cpu className="h-4 w-4" />
                Equipamento Profissional
              </div>
              <h2 className="text-[var(--font-size-section)] font-medium leading-none tracking-tighter">
                Tecnologia <br />
                <span className="font-serif text-gradient-rose italic font-medium">Kryoplatten 4 em 1.</span>
              </h2>
              <p className="text-muted-foreground font-medium leading-relaxed text-lg max-w-xl mx-auto">
                Levamos até você o mesmo equipamento de alta performance utilizado em clínicas especializadas: criolipólise, ultracavitação, ondas de choque e luz LED em um único aparelho, com monitoramento de temperatura em tempo real.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10">
                  <Image src="/images/kryoplatten-device.webp" alt="Equipamento Kryoplatten utilizado nas sessões" fill sizes="(min-width: 1024px) 280px, 45vw" className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/10 mt-12">
                  <Image src="/images/kryoplatten-applicators.webp" alt="Aplicadores de criolipólise do equipamento Kryoplatten" fill sizes="(min-width: 1024px) 280px, 45vw" className="object-cover" />
                </div>
              </div>
              <div className="space-y-10">
                {techFeatures.map((feature, i) => (
                  <div key={i} className="flex gap-5">
                    <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-primary/5 bg-texture shrink-0">
                      {feature.icon}
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg font-medium tracking-tight">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-medium opacity-80">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card rounded-[3rem] p-10 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <Thermometer className="h-12 w-12 text-primary shrink-0" />
              <p className="text-muted-foreground font-medium leading-relaxed">
                Tela touch de 8&quot; monitora a temperatura da pele em tempo real durante toda a sessão, com aquecimento gradual ao final do procedimento — indicado para todos os tipos de pele.
              </p>
            </div>
          </section>

          {/* Por que em casa */}
          <section className="space-y-16 sda-reveal">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
                <Sparkles className="h-4 w-4" />
                A Diferença do Atendimento Domiciliar
              </div>
              <h2 className="text-[var(--font-size-section)] font-medium leading-none tracking-tighter">
                Por que <br />
                <span className="font-serif text-gradient-rose italic font-medium">em casa?</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {beneficios.map((b, i) => (
                <div key={i} className="space-y-6 group text-center md:text-left">
                  <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-primary/5 group-hover:scale-110 transition-transform bg-texture mx-auto md:mx-0">
                    {b.icon}
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium opacity-80">{b.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Como funciona */}
          <section className="glass-card rounded-[4rem] p-8 sm:p-12 md:p-20 sda-reveal space-y-12">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1]">Como funciona o <br /><span className="font-serif text-gradient-rose italic">atendimento?</span></h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {passos.map((passo, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary font-medium text-sm">
                    {i + 1}
                  </div>
                  <p className="text-muted-foreground font-medium leading-relaxed pt-1.5">{passo}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Indicação / pontos de atenção */}
          <section className="grid lg:grid-cols-2 gap-16 items-center sda-reveal">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1]">Vale para <br /><span className="font-serif text-gradient-rose italic">todo mundo?</span></h2>
              <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                A criolipólise é indicada para gordura localizada em pessoas com boa saúde geral. Gestantes, lactantes e pessoas com determinadas condições de saúde podem ter restrições — por isso, toda sessão começa com uma avaliação individual para confirmar se o procedimento é adequado para você.
              </p>
            </div>
            <div className="glass-card rounded-[3rem] p-10 space-y-4 border-primary/5">
              <CheckCircle2 className="h-10 w-10 text-primary" />
              <h3 className="text-xl font-medium tracking-tight">Quem vai te atender</h3>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed opacity-80">
                O atendimento é conduzido pela equipe especializada da Dra. Luh Moura, biomédica e esteticista.
              </p>
              <Link href="/quem-somos" className="inline-flex text-primary font-medium uppercase text-xs tracking-widest underline underline-offset-4">
                Conhecer a equipe
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-8 sda-reveal">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter leading-[1.1] text-center">Perguntas <br /><span className="font-serif text-gradient-rose italic">Rápidas.</span></h2>
            <div className="space-y-4 max-w-3xl mx-auto pt-8">
              {faqItems.map((item, i) => (
                <details key={i} className="group glass-card rounded-[2rem] border-primary/5 open:border-primary/20 transition-colors">
                  <summary className="flex items-center justify-between gap-6 cursor-pointer list-none px-8 py-6 text-sm md:text-base font-medium tracking-tight">
                    {item.q}
                    <ChevronDown className="h-5 w-5 text-primary shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="px-8 pb-8 text-sm text-muted-foreground font-medium leading-relaxed opacity-80">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Final */}
          <section id="agendar" className="glass-card rounded-[4rem] p-8 sm:p-12 md:p-20 text-center space-y-8 sda-reveal">
            <h3 className="text-4xl font-medium tracking-tighter">Pronta para começar?</h3>
            <p className="text-muted-foreground font-medium leading-relaxed max-w-md mx-auto">
              Fale agora com nossa equipe pelo WhatsApp e agende sua avaliação gratuita, sem compromisso.
            </p>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-20 items-center justify-center gap-4 rounded-[2rem] bg-[#25D366] px-16 text-sm font-medium uppercase tracking-widest text-white hover:scale-[1.02] transition-all active:scale-[0.98] shadow-2xl shadow-[#25D366]/20"
            >
              <MessageSquare className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </section>

        </div>
      </main>
    </div>
  );
}
