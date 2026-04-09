import React, { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  ClipboardList,
  FileText,
  FolderKanban,
  HardHat,
  Headphones,
  Home,
  Layers3,
  NotebookTabs,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5575991438777";

const services = [
  {
    icon: <ClipboardCheck className="h-8 w-8 text-emerald-400" />,
    title: "Consultoria ISO 9001 e PBQP-H",
    desc: "Estruturação, orientação e apoio técnico para implantação e organização do sistema da qualidade.",
  },
  {
    icon: <Home className="h-8 w-8 text-emerald-400" />,
    title: "Vistoria de imóvel",
    desc: "Análise técnica detalhada para identificar falhas, inconformidades e riscos antes que virem prejuízo.",
  },
  {
    icon: <Calculator className="h-8 w-8 text-emerald-400" />,
    title: "Orçamentos e apoio técnico",
    desc: "Suporte técnico para levantamento, organização de informações e apoio à tomada de decisão.",
  },
  {
    icon: <FileText className="h-8 w-8 text-emerald-400" />,
    title: "Documentação técnica",
    desc: "Padronização de documentos, registros, controles e materiais de apoio para sua operação.",
  },
];

const differentials = [
  "Atendimento técnico com foco prático",
  "Linguagem clara e apoio consultivo",
  "Soluções para construtoras e clientes finais",
  "Organização, segurança e visão de resultado",
];

const testimonials = [
  {
    name: "Construtora cliente",
    text: "Conseguimos organizar todo o SGQ e avançar na certificação com muito mais clareza.",
  },
  {
    name: "Cliente vistoria",
    text: "Evitei diversos problemas no imóvel com o laudo técnico detalhado.",
  },
  {
    name: "Engenheiro parceiro",
    text: "Os materiais aceleraram muito a implantação da ISO na empresa.",
  },
];

const faqs = [
  {
    question: "Quais serviços a ICENG oferece?",
    answer:
      "A ICENG atua com consultoria em ISO 9001 e PBQP-H, vistoria de imóveis, documentação técnica e apoio técnico para engenharia.",
  },
  {
    question: "O atendimento pode ser feito à distância?",
    answer:
      "Sim. Parte dos serviços pode ser conduzida de forma remota, especialmente consultorias, organização documental e suporte técnico.",
  },
  {
    question: "A vistoria ajuda antes da entrega do imóvel?",
    answer:
      "Sim. A vistoria é importante para identificar problemas, registrar inconformidades e reduzir riscos antes da aceitação do imóvel.",
  },
  {
    question: "Como solicitar atendimento?",
    answer:
      "Basta clicar nos botões de WhatsApp da página para falar diretamente e receber orientação inicial.",
  },
];

function FloatingCTA() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-emerald-500 px-5 py-4 text-white shadow-2xl transition hover:bg-emerald-400"
    >
      <Phone className="h-5 w-5" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}

export default function IcengSiteInstitucional() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#06101f] text-white">
      <FloatingCTA />

      <header className="border-b border-white/10 bg-[#071426]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-500/20 p-2">
              <HardHat className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <div className="text-lg font-bold">ICENG Consultoria</div>
              <div className="text-xs text-slate-400">
                Engenharia • Qualidade • Vistoria
              </div>
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            <Phone className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              <Sparkles className="h-4 w-4" />
              Soluções técnicas para engenharia com foco em resultado
            </div>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Evite problemas em obras, documentos e certificações
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 md:text-xl">
              Consultoria, vistoria e suporte técnico para empresas e clientes
              que precisam de mais organização, segurança e clareza para tomar
              decisões.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-400"
              >
                Falar com especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                Ver serviços
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white/5 p-5 shadow-lg">
                <p className="text-sm leading-6 text-slate-300">“{t.text}”</p>
                <div className="mt-3 text-sm font-semibold text-amber-300">
                  {t.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="servicos" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
              <Building2 className="h-4 w-4" />
              Serviços
            </div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Como a ICENG pode ajudar
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              Soluções pensadas para reduzir falhas, organizar processos e dar
              mais segurança técnica às suas decisões.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
                <Target className="h-4 w-4" />
                Diferenciais
              </div>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Atendimento técnico com foco em solução
              </h2>

              <p className="mt-4 text-slate-300">
                A proposta da ICENG é unir visão prática, organização e suporte
                consultivo para ajudar você a evitar retrabalho, reduzir riscos
                e estruturar melhor sua operação.
              </p>

              <div className="mt-6 space-y-4">
                {differentials.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400" />
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 to-white/5 p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#08192f] p-5">
                  <ClipboardList className="h-8 w-8 text-emerald-400" />
                  <div className="mt-4 text-lg font-bold">Mais organização</div>
                  <p className="mt-2 text-sm text-slate-300">
                    Estruture informações, documentos e processos com mais
                    clareza.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#08192f] p-5">
                  <ShieldCheck className="h-8 w-8 text-emerald-400" />
                  <div className="mt-4 text-lg font-bold">Mais segurança</div>
                  <p className="mt-2 text-sm text-slate-300">
                    Reduza riscos técnicos e aumente a confiança nas decisões.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#08192f] p-5">
                  <FolderKanban className="h-8 w-8 text-emerald-400" />
                  <div className="mt-4 text-lg font-bold">Mais controle</div>
                  <p className="mt-2 text-sm text-slate-300">
                    Acompanhe melhor demandas, pendências e necessidades.
                  </p>
                </div>

                <div className="rounded-2xl bg-[#08192f] p-5">
                  <BadgeCheck className="h-8 w-8 text-emerald-400" />
                  <div className="mt-4 text-lg font-bold">Mais resultado</div>
                  <p className="mt-2 text-sm text-slate-300">
                    Ganhe agilidade e direção técnica para avançar com confiança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 text-center">
          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/10 p-8 md:p-10">
            <h2 className="text-2xl font-bold md:text-3xl">
              Está com problema em obra, documentação ou certificação?
            </h2>
            <p className="mt-4 text-slate-200">
              Quanto mais você demora, maior pode ser o risco de retrabalho,
              perda financeira e decisões sem segurança técnica.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-amber-400 px-6 py-3 font-semibold text-black transition hover:bg-amber-300"
            >
              Resolver agora
            </a>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-300">
              <NotebookTabs className="h-4 w-4" />
              Perguntas frequentes
            </div>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Dúvidas comuns
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="border-t border-white/10 px-5 py-4 text-sm leading-6 text-slate-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-20 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Fale diretamente com um engenheiro especialista
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Atendimento rápido via WhatsApp para entender sua necessidade e
            direcionar a melhor solução para seu caso.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-400"
          >
            Iniciar conversa
          </a>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#071426]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3 md:px-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-emerald-500/20 p-2">
                <HardHat className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-lg font-bold">ICENG Consultoria</div>
                <div className="text-xs text-slate-400">
                  Engenharia • Qualidade • Vistoria
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Soluções técnicas para engenharia com foco em clareza,
              organização, segurança e resultado.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Serviços</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li>Consultoria ISO 9001 e PBQP-H</li>
              <li>Vistoria de imóvel</li>
              <li>Documentação técnica</li>
              <li>Apoio técnico em engenharia</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>WhatsApp: (75) 99143-8777</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>Atendimento sob consulta</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>Atendimento local e remoto</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ICENG Consultoria. Todos os direitos
          reservados.
        </div>
      </footer>
    </div>
  );
}
