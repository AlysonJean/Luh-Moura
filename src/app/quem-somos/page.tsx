import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, HeartHandshake, ShieldCheck, Sparkles, ChevronRight, MapPin } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { NoiseFilter } from "@/components/noise-filter";

export const metadata: Metadata = {
  title: "Quem Somos | Luh Moura Estética Avançada",
  description: "Conheça a história, a formação e os valores da Dra. Luh Moura e da equipe por trás da clínica de estética avançada em Belo Horizonte.",
  openGraph: { title: "Quem Somos | Luh Moura Estética Avançada", description: "Conheça a história, a formação e os valores da Dra. Luh Moura e da equipe por trás da clínica de estética avançada em Belo Horizonte." }
};

export default function QuemSomos() {
  const values = [
    {
      title: "Ética & Transparência",
      description: "Avaliações honestas, expectativas realistas e indicações que priorizam sempre o seu bem-estar — nunca o procedimento pelo procedimento.",
      icon: <ShieldCheck className="h-6 w-6 text-primary" />
    },
    {
      title: "Cuidado Humanizado",
      description: "Cada jornada é acompanhada de perto, com escuta atenta e acolhimento em todas as etapas — do diagnóstico ao pós-tratamento.",
      icon: <HeartHandshake className="h-6 w-6 text-primary" />
    },
    {
      title: "Atualização Contínua",
      description: "Formação técnica em constante evolução, com participação em congressos e certificações nas técnicas mais avançadas de estética.",
      icon: <GraduationCap className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 mesh-bg pb-24">
      <NoiseFilter />

      <MarketingNav label="Nossa História" ctaHref="/contato" ctaLabel="Agendar" />

      <main className="container mx-auto px-6 pt-48">
        <div className="max-w-6xl mx-auto space-y-32">

          {/* Hero */}
          <section className="grid lg:grid-cols-2 gap-16 items-center sda-reveal">
            <div className="order-2 lg:order-1 relative aspect-[3/4] max-w-md w-full mx-auto rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10">
              <Image src="/images/dra-metodologia.webp" alt="Dra. Luh Moura" fill sizes="(min-width: 1024px) 480px, 100vw" className="object-cover" priority />
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left space-y-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white px-6 py-2.5 text-[10px] font-medium uppercase tracking-[0.3em] text-primary shadow-sm">
                Fundadora & Esteticista
              </div>
              <h1 className="text-[var(--font-size-hero)] font-medium leading-[0.85] tracking-tighter text-foreground">
                Quem é <br />
                <span className="font-serif text-gradient-rose italic font-medium">Dra. Luh Moura.</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Biomédica e esteticista especializada em estética avançada, a Dra. Luh Moura uniu rigor científico e sensibilidade artística para criar uma clínica onde cada protocolo é uma assinatura: único, ético e profundamente humano.
              </p>
              <p className="text-muted-foreground/80 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Sua trajetória começou no estudo aprofundado da anatomia facial e corporal e se consolidou em especializações nas técnicas mais avançadas de harmonização, bioestimulação e tecnologia estética — sempre com um compromisso: revelar a melhor versão de cada paciente, com naturalidade.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="space-y-16 sda-reveal">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
                <Sparkles className="h-4 w-4" />
                O Que Nos Move
              </div>
              <h2 className="text-[var(--font-size-section)] font-medium leading-none tracking-tighter">
                Valores que <br />
                <span className="font-serif text-gradient-rose italic font-medium">guiam cada decisão.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {values.map((value, i) => (
                <div key={i} className="space-y-6 group">
                  <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center shadow-xl shadow-primary/5 group-hover:scale-110 transition-transform bg-texture">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-medium tracking-tight">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium opacity-80">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* The Clinic */}
          <section className="glass-card rounded-[4rem] p-12 md:p-24 relative overflow-hidden sda-reveal">
            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <MapPin className="h-12 w-12 text-primary" />
                <h2 className="text-5xl font-medium tracking-tighter leading-none">Nosso <br /><span className="font-serif text-gradient-rose italic">espaço.</span></h2>
                <p className="text-muted-foreground font-medium leading-relaxed text-lg">
                  Em Belo Horizonte, cuidamos de cada detalhe para que sua visita seja tranquila, confortável e acolhedora — um ambiente reservado e uma equipe atenta para te acompanhar do início ao fim da sua jornada.
                </p>
                <ul className="space-y-4 pt-4">
                  {["Ambiente Reservado & Acolhedor", "Protocolos de Biossegurança", "Atendimento Próximo e Personalizado"].map((t, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/70">
                      <div className="h-1 w-4 bg-primary rounded-full" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10">
                <Image src="/images/contato-location.webp" alt="Recepção da Clínica Luh Moura" fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover" />
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pb-24 sda-reveal">
            <h3 className="text-4xl font-medium tracking-tighter mb-6">Vamos escrever o seu próximo capítulo?</h3>
            <p className="text-muted-foreground font-medium leading-relaxed max-w-xl mx-auto mb-10">
              Tem alguma dúvida sobre nossa equipe ou protocolos? Confira nossas{" "}
              <Link href="/duvidas-frequentes" className="text-primary underline underline-offset-4">perguntas frequentes</Link> ou fale diretamente com a gente.
            </p>
            <Link href="/contato" className="inline-flex h-20 items-center justify-center gap-4 rounded-[2rem] bg-foreground text-background px-16 text-sm font-medium uppercase tracking-widest hover:bg-muted transition-all active:scale-95 shadow-2xl">
              Agendar Minha Avaliação
              <ChevronRight className="h-5 w-5" />
            </Link>
          </section>

        </div>
      </main>
    </div>
  );
}
