import React, { useState } from 'react'
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Home,
  Search,
  Camera,
  FileCheck2,
  Shield,
  Ruler,
  Sparkles,
} from 'lucide-react'

const WHATSAPP_URL = 'https://wa.me/5575991438777'

const vistoriaPackages = [
  {
    title: 'Vistoria Básica',
    description:
      'Inspeção visual orientativa dos principais elementos do imóvel, como paredes, pisos, portas, janelas e acabamentos aparentes. Ideal para uma verificação rápida no momento da entrega.',
    details: [
      'Verificação visual dos itens aparentes',
      'Indicado para entrega das chaves',
      'Não inclui relatório técnico formal',
      'Sem registro fotográfico',
    ],
  },
  {
    title: 'Vistoria Intermediária',
    description:
      'Inclui a vistoria básica e acrescenta análises técnicas das instalações elétricas e hidráulicas, com testes de funcionamento e relatório simplificado.',
    details: [
      'Inclui itens da vistoria básica',
      'Testes de tomadas, interruptores e torneiras',
      'Verificação de escoamento de água',
      'Registro fotográfico ilustrativo e relatório digital',
    ],
    featured: true,
  },
  {
    title: 'Vistoria Completa',
    description:
      'A vistoria mais abrangente, conduzida por engenheiro civil, com análise técnica e documental, comparação com memorial descritivo, medições e laudo completo.',
    details: [
      'Análise técnica e documental completa',
      'Comparação com memorial descritivo',
      'Registro fotográfico detalhado',
      'Relatório técnico completo com opção de ART',
    ],
  },
]

const vistoriaProcess = [
  {
    icon: Search,
    title: 'Inspeção visual detalhada',
    text: 'Avaliação minuciosa de acabamentos, pinturas, pisos, revestimentos, forros, esquadrias e acabamentos aparentes, de forma visual e não destrutiva.',
  },
  {
    icon: Shield,
    title: 'Verificação das instalações',
    text: 'Testes das instalações elétricas e hidráulicas aparentes, sempre que houver disponibilidade de energia e água.',
  },
  {
    icon: FileCheck2,
    title: 'Análise do memorial descritivo',
    text: 'Comparação entre o imóvel entregue e o memorial descritivo da construtora, para checar conformidade com o que foi contratado.',
  },
  {
    icon: Camera,
    title: 'Registro de não conformidades',
    text: 'Documentação das falhas encontradas com fotos, descrições e observações técnicas para apoiar a solicitação de correções.',
  },
  {
    icon: Ruler,
    title: 'Checklist completo',
    text: 'Uso de checklist técnico abrangente para inspeção sistemática dos principais itens do imóvel.',
  },
]

const vistoriaEconomyScenarios = [
  {
    title: 'Correções pontuais',
    economy: 'Até 5% do valor do imóvel',
    description:
      'Cenário em que a vistoria identifica ajustes localizados, mas já relevantes para evitar gastos futuros e fortalecer a cobrança antes da entrega.',
  },
  {
    title: 'Correções moderadas',
    economy: 'Até 7,5% do valor do imóvel',
    description:
      'Quando há mais itens acumulados, o respaldo técnico passa a ter ainda mais peso para orientar correções e negociações com a construtora.',
  },
  {
    title: 'Correções mais amplas',
    economy: 'Até 10% do valor do imóvel',
    description:
      'Em situações mais abrangentes, a vistoria pode representar uma proteção financeira importante ao apontar falhas com impacto mais expressivo.',
  },
]

const vistoriaFaqs = [
  {
    q: 'Quais são os pacotes de vistoria oferecidos pela ICENG Consultoria e Engenharia?',
    a: 'A ICENG Consultoria e Engenharia oferece três pacotes de vistoria: Básica, Intermediária e Completa. Cada pacote é projetado para atender diferentes necessidades, desde uma verificação rápida até uma análise técnica e documental completa do imóvel.',
  },
  {
    q: 'Qual é a diferença entre a Vistoria Básica e a Intermediária?',
    a: 'A Vistoria Básica consiste em uma inspeção visual orientativa dos principais elementos do imóvel, sem relatório técnico formal. Já a Vistoria Intermediária inclui todos os itens da básica e adiciona análises técnicas das instalações elétricas e hidráulicas, além de registro fotográfico ilustrativo e relatório técnico simplificado.',
  },
  {
    q: 'O que está incluído na Vistoria Completa?',
    a: 'A Vistoria Completa é a mais abrangente, conduzida por engenheiro civil. Inclui análise técnica e documental do imóvel, verificação de todas as condições construtivas, comparação com o memorial descritivo, medições de áreas, registro fotográfico detalhado, relatório técnico completo e normativo e, opcionalmente, a emissão de ART.',
  },
  {
    q: 'Qual pacote de vistoria devo escolher para meu imóvel?',
    a: 'A escolha depende do nível de segurança e documentação que você deseja. Para uma verificação rápida no momento da entrega, a Básica é suficiente. Se deseja um respaldo técnico adicional, a Intermediária é ideal. Para máxima segurança técnica e respaldo legal, recomendamos a Vistoria Completa.',
  },
  {
    q: 'A ICENG Consultoria e Engenharia fornece um relatório após a vistoria?',
    a: 'Sim. Na modalidade Intermediária, é fornecido um relatório técnico simplificado em formato digital. Na Vistoria Completa, o relatório é detalhado, com fundamentação nas normas da ABNT, registro fotográfico completo e, opcionalmente, ART.',
  },
  {
    q: 'A vistoria da CAIXA para financiamento é a mesma coisa?',
    a: 'Não. O engenheiro enviado pela CAIXA faz uma avaliação para o banco, com o objetivo de verificar o valor de mercado do imóvel e se ele pode servir como garantia do financiamento. A vistoria da ICENG é feita para proteger o comprador, inspecionando acabamentos, pisos, pintura, instalações elétricas e hidráulicas e comparando com o memorial descritivo da construtora.',
  },
  {
    q: 'Como posso agendar uma vistoria para meu apartamento?',
    a: 'Para agendar sua vistoria, entre em contato diretamente pelo WhatsApp: (75) 99143-8777. A ICENG orienta você sobre o melhor pacote para sua necessidade e agenda a data mais conveniente.',
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
      {description ? <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{description}</p> : null}
    </div>
  )
}

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <button onClick={onToggle} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
        <span className="text-base font-semibold text-white md:text-lg">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-amber-300 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open ? <div className="px-5 pb-5 text-sm leading-7 text-slate-300 md:text-base">{a}</div> : null}
    </div>
  )
}

function GoldDivider() {
  return <div className="mx-auto h-px w-full max-w-6xl bg-gradient-to-r from-transparent via-amber-400/40 to-transparent" />
}

function Card({ className = '', children }) {
  return <div className={`rounded-3xl ${className}`}>{children}</div>
}

function CardContent({ className = '', children }) {
  return <div className={className}>{children}</div>
}

export default function VistoriaPage({ onBackHome }) {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">
              <Home className="h-4 w-4 text-amber-300" />
              Vistoria Técnica de Recebimento de Imóvel Novo
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] md:text-5xl xl:text-[3.15rem]">
              Receba seu imóvel com mais <span className="text-amber-300">segurança, clareza e respaldo técnico.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              A vistoria técnica ajuda a identificar falhas de acabamento, instalações e não conformidades antes da entrega das chaves, para que você tenha mais segurança ao cobrar correções da construtora.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-7 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-300">
                Solicitar orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <button onClick={onBackHome} className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-3 text-base text-white transition hover:bg-white/10">
                Voltar ao site principal
              </button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                'Análise visual e técnica do imóvel',
                'Verificação de instalações elétricas e hidráulicas',
                'Comparação com memorial descritivo',
                'Relatório para apoiar sua cobrança',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-300" />
                  <span className="text-slate-100">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-md">
            <CardContent className="p-0">
              <div className="border-b border-white/10 bg-gradient-to-r from-white/10 to-white/5 px-6 py-5">
                <div className="text-sm uppercase tracking-[0.25em] text-slate-400">O que é avaliado</div>
                <div className="mt-1 text-2xl font-bold">Itens principais da vistoria</div>
              </div>

              <div className="grid gap-4 p-6 md:grid-cols-2">
                {[
                  ['Acabamentos e pintura', Camera],
                  ['Pisos, revestimentos e forros', Ruler],
                  ['Esquadrias, portas e janelas', Home],
                  ['Instalações elétricas', Shield],
                  ['Instalações hidráulicas', FileCheck2],
                  ['Conformidade com memorial', ClipboardCheck],
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
        </div>
      </section>

      <GoldDivider />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <SectionTitle
          eyebrow="Modalidades"
          title="Escolha o nível de vistoria que faz sentido para sua necessidade."
          description="A ICENG trabalha com três modalidades de vistoria: Básica, Intermediária e Completa, variando no nível de análise, documentação e profundidade técnica."
          center
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {vistoriaPackages.map((item) => (
            <Card key={item.title} className={`h-full border ${item.featured ? 'border-amber-400/30 bg-amber-300/10' : 'border-white/10 bg-white/5'} backdrop-blur-sm`}>
              <CardContent className="flex h-full flex-col p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                  <Home className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.description}</p>
                <div className="mt-5 space-y-3">
                  {item.details.map((detail) => (
                    <div key={detail} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-300" />
                      <span className="text-sm text-slate-200">{detail}</span>
                    </div>
                  ))}
                </div>
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center rounded-2xl bg-white/10 px-4 py-3 text-white transition hover:bg-white/15">
                  Solicitar orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <GoldDivider />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <SectionTitle
          eyebrow="Como funciona"
          title="Um processo técnico pensado para proteger você antes da entrega das chaves."
          description="A vistoria é conduzida de forma organizada, com inspeção dos principais itens construtivos, verificação de instalações e documentação das não conformidades."
          center
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {vistoriaProcess.map(({ icon: Icon, title, text }) => (
            <Card key={title} className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-amber-300/10 p-3 text-amber-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <GoldDivider />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="rounded-[2rem] border border-amber-400/30 bg-gradient-to-r from-amber-300/15 via-amber-200/10 to-blue-500/10 p-8 text-center shadow-2xl shadow-black/30 md:p-10">
          <div className="mx-auto max-w-4xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
              <BadgeCheck className="h-3.5 w-3.5" />
              Destaque importante
            </div>
            <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
              A vistoria da CAIXA protege o banco. A vistoria técnica protege você e ainda pode se pagar.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-200 md:text-lg">
              Com respaldo técnico em mãos, você pode exigir correções, negociar abatimentos e reduzir o risco de assumir problemas que deveriam ser resolvidos pela construtora antes da entrega.
            </p>
          </div>
        </div>
      </section>

      <GoldDivider />

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <SectionTitle
          eyebrow="Quanto você pode economizar"
          title="Um investimento pequeno pode evitar prejuízos muito maiores no recebimento do imóvel."
          description="A vistoria técnica ajuda o cliente a enxergar problemas antes da entrega das chaves. Em um imóvel de R$ 200 mil, por exemplo, se a análise identificar itens que representem R$ 5 mil em correções, isso já demonstra como a vistoria pode trazer retorno prático e financeiro."
          center
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {vistoriaEconomyScenarios.map((item) => (
            <Card key={item.title} className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">{item.title}</div>
                <div className="mt-4 text-3xl font-black text-white">{item.economy}</div>
                <div className="mt-4 rounded-[1.5rem] border border-white/10 bg-[#081629] p-4 text-sm leading-7 text-slate-200">
                  {item.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/5 p-6 text-center md:p-8">
          <p className="text-base leading-8 text-slate-200 md:text-lg">
            Em resumo: a vistoria técnica não deve ser vista apenas como um custo, mas como uma forma de prevenção, clareza e proteção financeira.
          </p>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center justify-center rounded-2xl bg-amber-400 px-7 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-300">
            Solicitar orçamento da vistoria
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      <GoldDivider />

      <section className="mx-auto max-w-5xl px-4 py-20 md:px-8">
        <SectionTitle
          eyebrow="Perguntas frequentes"
          title="As dúvidas mais comuns sobre a vistoria de imóvel novo."
          description="Reunimos aqui os principais pontos para o cliente entender as modalidades, o relatório e a diferença entre a vistoria técnica e a avaliação da CAIXA."
          center
        />

        <div className="mt-10 space-y-4">
          {vistoriaFaqs.map((item, index) => (
            <FaqItem key={item.q} {...item} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-8">
        <Card className="overflow-hidden border border-amber-400/20 bg-gradient-to-r from-amber-300/10 via-amber-200/10 to-blue-500/10 shadow-2xl shadow-black/30">
          <CardContent className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">
                <BadgeCheck className="h-3.5 w-3.5" />
                Solicite sua vistoria
              </div>
              <h3 className="text-3xl font-black leading-tight text-white md:text-5xl">Receba orientação e solicite seu orçamento pelo WhatsApp.</h3>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
                Se você vai receber seu imóvel novo, fale com a ICENG para entender a modalidade ideal e agendar sua vistoria técnica com mais segurança.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">WhatsApp</div>
                <div className="mt-2 text-2xl font-bold text-white">(75) 99143-8777</div>
                <p className="mt-2 text-sm leading-7 text-slate-200">Atendimento para orçamento, dúvidas e agendamento da vistoria.</p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl bg-amber-400 px-7 py-3 text-base font-bold text-slate-950 transition hover:bg-amber-300">
                  Solicitar orçamento
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button onClick={onBackHome} className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-3 text-base text-white transition hover:bg-white/10">
                  Voltar ao site principal
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
