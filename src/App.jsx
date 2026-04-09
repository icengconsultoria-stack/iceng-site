import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
  Headphones,
  Home,
  Layers3,
  NotebookTabs,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
} from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5575991438777'
const INSTAGRAM_URL = 'https://instagram.com/icengconsult'
const DEFAULT_HOTMART_URL = 'https://go.hotmart.com/L105258643W'

const services = [
  {
    icon: ShieldCheck,
    title: 'Consultoria SGQ / ISO 9001 / PBQP-H',
    description:
      'Estruturação, organização e apoio técnico para implantação de sistemas de gestão da qualidade na construção civil.',
    cta: 'Solicitar consultoria',
  },
  {
    icon: Home,
    title: 'Vistoria de Imóveis',
    description:
      'Vistorias técnicas com foco em segurança, conformidade, registro e apoio documental para tomada de decisão.',
    cta: 'Solicitar vistoria',
  },
  {
    icon: Calculator,
    title: 'Orçamentos de Obras',
    description:
      'Levantamentos e orçamentos com visão técnica para apoiar planejamento, controle e viabilidade da obra.',
    cta: 'Pedir orçamento',
  },
  {
    icon: ClipboardCheck,
    title: 'Montagem de PCIs Caixa',
    description:
      'Organização técnica e montagem documental para atender demandas específicas com mais clareza e padronização.',
    cta: 'Solicitar proposta',
  },
]

const products = [
  {
    icon: FileText,
    title: '18 Procedimentos Operacionais',
    subtitle: 'SGQ ISO 9001:2015 / PBQP-H',
    description:
      'Procedimentos operacionais e formulários para padronizar a rotina e fortalecer a base documental da empresa.',
    url: 'https://go.hotmart.com/S105270171H?dp=1',
    buttonLabel: 'Acessar produto',
  },
  {
    icon: NotebookTabs,
    title: 'Kit Instruções de Trabalho',
    subtitle: 'SGQ ISO 9001 / PBQP-H',
    description:
      'Instruções práticas para orientar a execução, melhorar o padrão operacional e apoiar a implantação.',
    url: 'https://go.hotmart.com/V105270264E',
    buttonLabel: 'Acessar produto',
  },
  {
    icon: ShieldCheck,
    title: 'Kit SST',
    subtitle: 'PCMAT · PCMSO · PPRA · PGR',
    description:
      'Material voltado à estrutura de segurança do trabalho, com foco em organização e conformidade documental.',
    url: 'https://go.hotmart.com/H105270528Y',
    buttonLabel: 'Acessar produto',
  },
  {
    icon: ClipboardList,
    title: 'Kit ITs + Manual da Qualidade',
    subtitle: 'SGQ ISO 9001 / PBQP-H',
    description:
      'Conteúdo para apoiar a padronização, orientar a equipe e consolidar a base do sistema de gestão.',
    url: 'https://go.hotmart.com/F105269835T',
    buttonLabel: 'Acessar produto',
  },
  {
    icon: FolderKanban,
    title: 'Kit SGQ Completo',
    subtitle: 'ISO 9001 e PBQP-H',
    description:
      'A solução mais completa para quem quer acelerar a implantação com documentos, controles e estrutura integrada.',
    url: 'https://go.hotmart.com/L105258643W',
    buttonLabel: 'Quero o kit completo',
    featured: true,
  },
  {
    icon: BadgeCheck,
    title: 'Kit SGQ Premium',
    subtitle: 'ISO 9001 e PBQP-H + Checklist',
    description:
      'Versão premium com checklist e recursos extras para quem deseja mais clareza, apoio e agilidade no processo.',
    url: 'https://go.hotmart.com/L105261429W?dp=1',
    buttonLabel: 'Quero o premium',
    featured: true,
  },
]

const differentials = [
  'Capacidade técnica aplicada a diferentes demandas da engenharia',
  'Foco em gestão, organização e resultado',
  'Direcionamento claro para cada necessidade do cliente',
  'Apoio documental e institucional para decisões mais seguras',
  'Atendimento com visão prática, técnica e estratégica',
  'Soluções adaptadas à realidade de cada projeto ou operação',
]

const processSteps = [
  {
    number: '01',
    title: 'Diagnóstico da necessidade',
    text: 'A ICENG entende o perfil da demanda e do público atendido, seja empresa, profissional, investidor, construtora, cliente particular ou operação que precise de apoio técnico.',
  },
  {
    number: '02',
    title: 'Definição da solução ideal',
    text: 'Com base na necessidade identificada, direcionamos a melhor solução: serviço técnico, organização institucional, consultoria especializada ou produto digital de apoio.',
  },
  {
    number: '03',
    title: 'Execução técnica com método',
    text: 'A entrega é conduzida com foco em clareza, padronização, registros, documentação e segurança, para gerar valor prático e facilitar a tomada de decisão do cliente.',
  },
  {
    number: '04',
    title: 'Estrutura para continuidade',
    text: 'Além da entrega imediata, buscamos deixar uma base organizada para continuidade operacional, fortalecimento institucional e futuras evoluções da empresa ou do projeto.',
  },
]

const stats = [
  { label: 'Consultoria e gestão', icon: Target },
  { label: 'Serviços técnicos', icon: Wrench },
  { label: 'Produtos digitais', icon: FolderKanban },
  { label: 'Estrutura para crescer', icon: Layers3 },
]

const principles = [
  {
    icon: Target,
    title: 'Missão',
    text: 'Oferecer serviços técnicos e soluções organizacionais com responsabilidade, clareza e eficiência, contribuindo para a conformidade, segurança e fortalecimento institucional de cada cliente.',
  },
  {
    icon: Building2,
    title: 'Visão',
    text: 'Ser reconhecida como referência em apoio técnico e organização institucional aplicada à engenharia, ampliando a atuação em diferentes setores com qualidade, confiança e resultados sustentáveis.',
  },
  {
    icon: ShieldCheck,
    title: 'Valores',
    text: 'Ética profissional, compromisso técnico, organização, clareza na comunicação, responsabilidade com prazos, foco em conformidade, melhoria contínua e respeito à realidade de cada cliente.',
  },
]

const faqs = [
  {
    q: 'A ICENG atende somente construtoras?',
    a: 'Não. A ICENG atende construtoras, empresas, profissionais, investidores e clientes particulares que precisem de apoio técnico, orientação especializada, organização documental ou soluções ligadas à engenharia e à conformidade.',
  },
  {
    q: 'Qual a vantagem da vistoria de imóvel novo com um engenheiro especialista?',
    a: 'A principal vantagem é ter mais segurança e poder de negociação no momento da entrega do imóvel. Com a vistoria técnica, o cliente recebe um laudo detalhado com os pontos identificados, o que ajuda a solicitar correções à construtora e evita custos futuros com problemas como falhas de acabamento, infiltrações, pisos soltos, vazamentos ocultos e irregularidades elétricas.',
  },
  {
    q: 'Quais tipos de serviço a ICENG pode prestar?',
    a: 'A ICENG atua com consultoria em SGQ, apoio em ISO 9001 e PBQP-H, vistoria de imóveis, orçamentos de obras, montagem de PCIs Caixa e outras soluções técnicas voltadas à organização, análise e direcionamento profissional de cada demanda.',
  },
  {
    q: 'Posso contratar apenas um serviço específico?',
    a: 'Sim. Você pode contratar somente o serviço que precisa no momento. A estrutura da ICENG foi pensada para oferecer soluções independentes, de acordo com a necessidade de cada cliente.',
  },
  {
    q: 'Na aquisição dos produtos de apoio à certificação ISO 9001 e PBQP-H, posso ter suporte?',
    a: 'Sim. Caso necessário, oferecemos suporte para orientar o uso dos materiais. E, se o cliente tiver dificuldade na implantação, também pode contratar horas técnicas de orientação para receber um acompanhamento mais próximo e direcionado.',
  },
  {
    q: 'Quem pode contratar o serviço de PCI junto à Caixa?',
    a: 'Qualquer cliente que precise dar andamento ao processo de financiamento junto à Caixa pode contratar esse serviço. O atendimento para preenchimento e organização da PCI é voltado ao suporte documental e ao direcionamento do processo, sem vínculo direto com a responsabilidade técnica da obra a ser executada.',
  },
]

function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
          <Sparkles className="h-3.5 w-3.5" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p>
      ) : null}
    </div>
  )
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-base font-semibold text-white md:text-lg">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-amber-300 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open ? <div className="px-5 pb-5 text-sm leading-7 text-slate-300 md:text-base">{a}</div> : null}
    </div>
  )
}

function GoldDivider() {
  return (
    <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
  )
}

function Card({ className = '', children }) {
  return <div className={`rounded-3xl ${className}`}>{children}</div>
}

function CardContent({ className = '', children }) {
  return <div className={className}>{children}</div>
}

function Button({ className = '', variant = 'default', size = 'default', asChild = false, children }) {
  const Comp = asChild ? 'span' : 'button'
  const base =
    'inline-flex items-center justify-center gap-2 transition focus:outline-none focus:ring-2 focus:ring-amber-300/60'
  const variants = {
    default: '',
    outline: '',
  }
  const sizes = {
    default: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  return <Comp className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>{children}</Comp>
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <div className="min-h-screen bg-[#06101f] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.18),transparent_24%),radial-gradient(circle_at_top_right,rgba(29,78,216,0.22),transparent_28%),linear-gradient(180deg,#07111f_0%,#081527_36%,#06101f_100%)]" />
        <div className="absolute left-0 top-24 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute right-0 top-64 h-96 w-96 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-sky-500/5 blur-3xl" />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06101f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-400/30 bg-gradient-to-br from-amber-300/25 to-amber-500/10 shadow-[0_0_30px_rgba(245,158,11,0.12)]">
              <ShieldCheck className="h-5 w-5 text-amber-300" />
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-wide">ICENG CONSULTORIA</div>
              <div className="text-xs uppercase tracking-[0.28em] text-slate-400">
                Engenharia • Gestão • Soluções Técnicas
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-6 text-sm text-slate-300 lg:flex">
            <a href="#servicos" className="transition hover:text-white">Serviços</a>
            <a href="#produtos" className="transition hover:text-white">Produtos</a>
            <a href="#diferenciais" className="transition hover:text-white">Diferenciais</a>
            <a href="#sobre" className="transition hover:text-white">Sobre</a>
            <a href="#essencia" className="transition hover:text-white">Essência</a>
            <a href="#faq" className="transition hover:text-white">FAQ</a>
          </div>

          <a
            href="#contato"
            className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-amber-300"
          >
            Solicitar atendimento
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
                <BadgeCheck className="h-4 w-4 text-amber-300" />
                Site institucional comercial
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl xl:text-7xl">
                Soluções em{' '}
                <span className="text-amber-300">Engenharia, Vistorias Técnicas, Orçamentos e Certificações</span>{' '}
                para orientar, organizar e apoiar cada necessidade com mais clareza e segurança.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                Nosso objetivo é transformar necessidades diversas em soluções claras, organizadas e tecnicamente bem direcionadas, seja para uma empresa, profissional ou cliente que precise de suporte especializado.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {stats.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm"
                  >
                    <div className="rounded-xl bg-amber-300/10 p-2 text-amber-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-slate-100">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#servicos"
                  className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-7 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-300"
                >
                  Conhecer serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#produtos"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-3 text-base text-white transition hover:bg-white/10"
                >
                  Ver produtos digitais
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-300" />
                  Estrutura pronta para crescer
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-300" />
                  Serviços e produtos no mesmo ambiente
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-amber-300" />
                  Visual institucional e profissional
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-amber-300/15 blur-3xl" />
              <div className="absolute -right-8 bottom-8 h-36 w-36 rounded-full bg-blue-500/15 blur-3xl" />

              <Card className="overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-md">
                <CardContent className="p-0">
                  <div className="border-b border-white/10 bg-gradient-to-r from-white/10 to-white/5 px-6 py-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm uppercase tracking-[0.25em] text-slate-400">Áreas de atuação</div>
                        <div className="mt-1 text-2xl font-bold">ICENG Consultoria</div>
                      </div>
                      <div className="rounded-full border border-amber-400/30 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                        Multi-serviços
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 p-6 md:grid-cols-2">
                    {[
                      ['Consultoria SGQ', ShieldCheck],
                      ['Vistoria de imóveis', Home],
                      ['Orçamentos de obras', Calculator],
                      ['Montagem de PCIs Caixa', ClipboardCheck],
                      ['Produtos digitais', FolderKanban],
                      ['Soluções sob medida', Headphones],
                    ].map(([label, Icon]) => (
                      <div key={label} className="rounded-[1.5rem] border border-white/10 bg-[#081629] p-5">
                        <div className="mb-3 inline-flex rounded-xl bg-amber-300/10 p-2 text-amber-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-base font-semibold text-white">{label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <GoldDivider />

        <section id="servicos" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionTitle
            eyebrow="Serviços"
            title="Atuação técnica em diferentes setores da engenharia, com foco em organização, conformidade e suporte institucional."
            description="A ICENG foi estruturada para atender demandas técnicas, documentais e operacionais em diferentes frentes da engenharia, oferecendo soluções que combinam suporte especializado, organização institucional e direcionamento profissional para públicos diversos."
            center
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map(({ icon: Icon, title, description, cta }) => (
              <motion.div key={title} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card className="h-full border border-white/10 bg-white/5 backdrop-blur-sm">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <p className="mt-3 flex-1 leading-7 text-slate-300">{description}</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white/10 px-4 py-3 text-white transition hover:bg-white/15"
                    >
                      {cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <GoldDivider />

        <section id="produtos" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionTitle
            eyebrow="Produtos digitais"
            title="Uma estrutura completa para ganhar tempo, reduzir retrabalho e avançar com mais segurança."
            description="Estrutura documental pronta para apoiar a implantação de procedimentos, padronizações e requisitos normativos, facilitando a organização da empresa e a preparação para certificações com mais clareza e eficiência."
            center
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map(({ icon: Icon, title, subtitle, description, url, buttonLabel, featured }) => (
              <motion.div key={title} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                <Card
                  className={`h-full border backdrop-blur-sm ${featured ? 'border-amber-400/30 bg-amber-300/10' : 'border-white/10 bg-white/5'}`}
                >
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                        <Icon className="h-6 w-6" />
                      </div>
                      {featured ? (
                        <div className="rounded-full border border-amber-400/30 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-200">
                          Destaque
                        </div>
                      ) : null}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{subtitle}</div>
                    <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
                    <p className="mt-3 flex-1 leading-7 text-slate-300">{description}</p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center justify-center rounded-2xl bg-amber-400 px-4 py-3 font-medium text-slate-950 transition hover:bg-amber-300"
                    >
                      {buttonLabel}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href={DEFAULT_HOTMART_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-3 text-white transition hover:bg-white/10"
            >
              Ir para o kit completo
            </a>
          </div>
        </section>

        <GoldDivider />

        <section id="diferenciais" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Diferenciais"
                title="Capacidade técnica, foco em gestão e direcionamento para gerar resultados com mais segurança."
                description="A ICENG vai além da prestação de serviços isolados. A proposta da empresa é unir conhecimento técnico, organização institucional e visão de gestão para oferecer soluções mais claras, eficientes e alinhadas à realidade de cada cliente."
              />
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {differentials.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-300" />
                    <span className="text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border border-white/10 bg-gradient-to-br from-[#0c1d34] to-[#091220] shadow-2xl shadow-black/30">
              <CardContent className="p-7">
                <div className="mb-4 inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                  <Scale className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Nos posicionamos de forma técnica e clara, com direcionamento profissional e foco em resultados.
                </h3>
                <p className="mt-3 leading-7 text-slate-200">
                  Confiança, clareza e responsabilidade fazem parte da forma como a ICENG atende cada demanda. Nossa atuação busca unir análise técnica, boa orientação e organização para oferecer soluções mais seguras e alinhadas à necessidade de cada cliente.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    ['Base técnica', ['Conhecimento aplicado', 'Leitura mais profissional', 'Mais confiança para contratar']],
                    ['Base de gestão', ['Organização institucional', 'Direcionamento claro', 'Melhor apoio à decisão']],
                  ].map(([title, items]) => (
                    <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                      <div className="text-lg font-bold text-white">{title}</div>
                      <div className="mt-4 space-y-3">
                        {items.map((item) => (
                          <div key={item} className="text-sm text-slate-200">• {item}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <GoldDivider />

        <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionTitle
            eyebrow="Como funciona"
            title="A ICENG atende diferentes públicos com serviços técnicos e organização institucional."
            description="O fluxo foi pensado para transformar necessidades diversas em soluções claras, organizadas e tecnicamente bem direcionadas, seja para uma empresa, profissional ou cliente que precise de suporte especializado."
            center
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <Card key={step.number} className="border border-white/10 bg-white/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-amber-300">{step.number}</div>
                  <div className="text-xl font-bold text-white">{step.title}</div>
                  <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <GoldDivider />

        <section id="sobre" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Card className="border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <CardContent className="p-7 md:p-8">
                <div className="mb-4 inline-flex rounded-2xl bg-blue-400/10 p-3 text-blue-200">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold text-white">Sobre a ICENG</h3>
                <p className="mt-4 leading-8 text-slate-200">
                  A ICENG foi fundada por <strong className="text-white">Israel Chaves</strong>, Engenheiro Civil e Engenheiro de Produção. Profissional com mais de 15 anos de experiência, possui atuação em obras públicas e particulares, habitações populares, residências de médio padrão e empreendimentos de alto padrão, somando mais de 2.000 casas entregues ao longo da trajetória.
                </p>
                <p className="mt-4 leading-8 text-slate-200">
                  Também possui atuação como Auditor Interno e experiência de 7 anos consecutivos em sistemas de gestão da qualidade <strong className="text-white">ISO 9001</strong> e <strong className="text-white">PBQP-H</strong>, incluindo participação em processos de transição de normas. Sua vivência profissional também abrange gestão de usinagem de concreto, terraplenagem e obras públicas vinculadas a instituições como <strong className="text-white">PETROBRAS</strong>, <strong className="text-white">CAIXA</strong> e o <strong className="text-white">Ministério da Integração e do Desenvolvimento Regional</strong>.
                </p>
              </CardContent>
            </Card>

            <div>
              <SectionTitle
                eyebrow="Posicionamento"
                title="Experiência técnica, visão prática de obra e atuação orientada à qualidade e ao desempenho institucional."
                description="A trajetória profissional que sustenta a ICENG reforça a capacidade de atender diferentes demandas com base técnica, organização, responsabilidade e conhecimento aplicado à realidade de cada cliente e de cada obra."
              />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  'Atendimento técnico para diferentes públicos',
                  'Organização institucional como diferencial',
                  'Apresentação comercial mais profissional',
                  'Base preparada para novas soluções',
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <GoldDivider />

        <section id="essencia" className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <SectionTitle
            eyebrow="Missão, visão e valores"
            title="Princípios que sustentam a atuação técnica e institucional da ICENG."
            description="Esta base fortalece o posicionamento da empresa e comunica com mais clareza o compromisso da marca com qualidade técnica, organização e evolução contínua."
            center
          />

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, text }) => (
              <Card key={title} className="border border-white/10 bg-white/5 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <GoldDivider />

        <section id="faq" className="mx-auto max-w-5xl px-4 py-20 md:px-8">
          <SectionTitle
            eyebrow="Perguntas frequentes"
            title="Tire suas dúvidas sobre nossos serviços e produtos digitais."
            description="Reunimos aqui as principais informações para facilitar seu entendimento sobre atendimento, contratação e soluções oferecidas pela ICENG."
            center
          />

          <div className="mt-10 space-y-4">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.q}
                {...item}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </section>

        <section id="contato" className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
          <Card className="overflow-hidden border border-amber-400/20 bg-gradient-to-r from-amber-300/10 via-amber-200/10 to-blue-500/10 shadow-2xl shadow-black/30">
            <CardContent className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                  <BadgeCheck className="h-3.5 w-3.5" />
                  Área de contato
                </div>
                <h3 className="text-3xl font-black leading-tight text-white md:text-5xl">
                  Fale com a ICENG e encontre a solução ideal para sua necessidade.
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
                  Se você busca apoio técnico, vistoria, orçamento, consultoria ou soluções para certificações, entre em contato e receba um direcionamento claro para o seu caso.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">WhatsApp</div>
                  <div className="mt-2 text-2xl font-bold text-white">(75) 99143-8777</div>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Atendimento para informações, dúvidas, propostas e direcionamento dos serviços.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Instagram</div>
                  <div className="mt-2 text-2xl font-bold text-white">@icengconsult</div>
                  <p className="mt-2 text-sm leading-7 text-slate-200">
                    Acompanhe conteúdos, atualizações e mais informações sobre a atuação da ICENG.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-7 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-300"
                  >
                    Falar no WhatsApp
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-3 text-base text-white transition hover:bg-white/10"
                  >
                    Ver Instagram
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
