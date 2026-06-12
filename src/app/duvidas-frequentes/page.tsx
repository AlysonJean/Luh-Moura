import type { Metadata } from "next";
import { HelpCircle, MessageSquare, ChevronDown, Sparkles, Calendar, Wallet, Lock } from "lucide-react";
import { MarketingNav } from "@/components/marketing-nav";
import { NoiseFilter } from "@/components/noise-filter";

export const metadata: Metadata = {
  title: "Dúvidas Frequentes | Luh Moura Estética Avançada",
  description: "Tire suas dúvidas sobre procedimentos, agendamento, Portal de Evolução, formas de pagamento e privacidade na clínica da Dra. Luh Moura.",
  openGraph: { title: "Dúvidas Frequentes | Luh Moura Estética Avançada", description: "Tire suas dúvidas sobre procedimentos, agendamento, Portal de Evolução, formas de pagamento e privacidade na clínica da Dra. Luh Moura." }
};

const faqGroups = [
  {
    title: "Procedimentos & Cuidados",
    icon: <Sparkles className="h-5 w-5 text-primary" />,
    items: [
      {
        q: "O que é harmonização facial?",
        a: "É um conjunto de técnicas — como toxina botulínica, preenchimentos com ácido hialurônico e bioestimuladores de colágeno — que trabalham juntas para equilibrar as proporções do rosto, suavizar sinais de envelhecimento e realçar sua beleza natural, sempre respeitando a sua identidade."
      },
      {
        q: "Os procedimentos doem?",
        a: "A maioria dos protocolos utiliza agulhas finas e, quando necessário, anestésicos tópicos para garantir o máximo conforto. O desconforto relatado costuma ser leve e rápido — durante a avaliação, explicamos detalhadamente o que esperar em cada técnica."
      },
      {
        q: "Quanto tempo dura o resultado?",
        a: "Varia de acordo com o protocolo: toxina botulínica e peelings costumam durar entre 4 e 6 meses, enquanto preenchimentos, skinboosters e bioestimuladores podem durar de 12 a 18 meses. Na sua avaliação, montamos um cronograma de manutenção personalizado."
      },
      {
        q: "Quais cuidados devo ter após a sessão?",
        a: "As orientações variam por procedimento, mas em geral recomendamos evitar exposição solar direta, atividades físicas intensas e consumo de álcool nas primeiras 24-48h. Você recebe um checklist completo de pós-cuidados ao final de cada sessão."
      },
      {
        q: "Existem contraindicações?",
        a: "Sim. Gestantes, lactantes, pessoas com doenças autoimunes ativas ou alergia a algum dos componentes utilizados podem ter restrições. Por isso, toda jornada começa com uma anamnese detalhada para garantir segurança total."
      },
    ]
  },
  {
    title: "Agendamento & Portal",
    icon: <Calendar className="h-5 w-5 text-primary" />,
    items: [
      {
        q: "Como faço para agendar uma avaliação?",
        a: "Basta entrar em contato pelo nosso WhatsApp VIP na página de Contato. Nossa equipe de concierge vai entender sua necessidade e encontrar o melhor horário para sua avaliação."
      },
      {
        q: "Como funciona o acesso ao Portal de Evolução?",
        a: "Não é necessário criar senha. Basta informar seu WhatsApp na tela de login que enviaremos um link seguro e exclusivo para você acessar seu portal — onde ficam seu histórico, fotos de evolução e planos de tratamento."
      },
      {
        q: "Recebi um link de acesso por WhatsApp, e agora?",
        a: "É só tocar no link recebido: você será autenticada automaticamente e direcionada ao seu Portal de Evolução. Por segurança, cada link é de uso único e expira após um período curto — se expirar, basta gerar um novo na tela de login."
      },
      {
        q: "Posso acompanhar minhas fotos e evolução online?",
        a: "Sim! No Portal de Evolução você acompanha o progresso dos seus protocolos, os registros fotográficos de cada sessão e o status dos seus planos de tratamento, tudo em um só lugar."
      },
    ]
  },
  {
    title: "Pagamentos",
    icon: <Wallet className="h-5 w-5 text-primary" />,
    items: [
      {
        q: "Quais formas de pagamento são aceitas?",
        a: "Aceitamos PIX, cartão de crédito, cartão de débito e dinheiro. Você pode confirmar a melhor opção com nossa equipe no momento do agendamento ou da avaliação."
      },
      {
        q: "É possível parcelar os planos de tratamento?",
        a: "Sim, planos de tratamento com múltiplas sessões podem ser organizados em parcelas. O status de cada pagamento (pendente, pago ou parcial) fica visível no seu Portal de Evolução."
      },
    ]
  },
  {
    title: "Privacidade & LGPD",
    icon: <Lock className="h-5 w-5 text-primary" />,
    items: [
      {
        q: "Meus dados estão protegidos?",
        a: "Sim. Seguimos rigorosamente a Lei Geral de Proteção de Dados (LGPD): seus dados pessoais, prontuários e imagens são armazenados com segurança e utilizados exclusivamente para o seu acompanhamento clínico."
      },
      {
        q: "Quem tem acesso ao meu prontuário e fotos?",
        a: "Apenas a equipe responsável pelo seu atendimento. Antes de qualquer registro, solicitamos seu consentimento explícito — que pode ser revisado a qualquer momento pelo seu Portal de Evolução."
      },
    ]
  },
];

export default function DuvidasFrequentes() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqGroups.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <div className="min-h-screen bg-background relative selection:bg-primary/20 mesh-bg pb-24">
      <NoiseFilter />

      <MarketingNav label="Central de Ajuda" ctaHref="/contato" ctaLabel="Agendar" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="container mx-auto px-6 pt-48">
        <div className="max-w-4xl mx-auto space-y-24">

          <header className="max-w-2xl mx-auto text-center space-y-8 sda-reveal">
            <div className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
              <HelpCircle className="h-4 w-4" />
              Central de Ajuda
            </div>
            <h1 className="text-[var(--font-size-section)] font-medium leading-none tracking-tighter text-foreground">
              Dúvidas <br />
              <span className="font-serif text-gradient-rose italic font-medium">Frequentes.</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium leading-relaxed">
              Reunimos as perguntas mais comuns sobre procedimentos, agendamento, pagamentos e privacidade. Não encontrou o que procurava? Fale com a gente.
            </p>
          </header>

          {faqGroups.map((group, i) => (
            <section key={i} className="space-y-8 sda-reveal">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-lg shadow-primary/5 bg-texture">
                  {group.icon}
                </div>
                <h2 className="text-2xl font-medium tracking-tight">{group.title}</h2>
              </div>

              <div className="space-y-4">
                {group.items.map((item, j) => (
                  <details key={j} className="group glass-card rounded-[2rem] border-primary/5 open:border-primary/20 transition-colors">
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
          ))}

          {/* CTA */}
          <section className="glass-card rounded-[4rem] p-12 md:p-20 text-center space-y-8 sda-reveal">
            <h3 className="text-4xl font-medium tracking-tighter">Ainda com dúvidas?</h3>
            <p className="text-muted-foreground font-medium leading-relaxed max-w-md mx-auto">Nossa equipe de concierge está pronta para te ajudar diretamente pelo WhatsApp.</p>
            <a
              href="https://wa.me/5531985537919"
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
