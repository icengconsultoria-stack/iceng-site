import React from "react";
import {
  ShieldCheck,
  Home,
  Calculator,
  ClipboardList,
  Folder,
  Headphones,
  Wrench,
  Layers,
  Phone,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5575991438777";

function FloatingCTA() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg hover:bg-green-400"
    >
      <Phone className="h-4 w-4" />
      WhatsApp
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#06101f] text-white">
      <FloatingCTA />

      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-6">
        <div>
          <h1 className="text-lg font-bold">ICENG CONSULTORIA</h1>
          <p className="text-xs text-slate-400">
            Engenharia • Gestão • Soluções Técnicas
          </p>
        </div>

        <nav className="hidden gap-6 text-sm md:flex">
          <a href="#">Serviços</a>
          <a href="#">Produtos</a>
          <a href="#">Diferenciais</a>
          <a href="#">Sobre</a>
          <a href="#">FAQ</a>
        </nav>

        <a className="rounded-lg bg-yellow-400 px-4 py-2 text-black">
          Solicitar atendimento
        </a>
      </header>

      {/* HERO */}
      <section className="grid items-center gap-10 px-8 py-16 md:grid-cols-2">
        {/* ESQUERDA */}
        <div>
          <div className="mb-4 inline-block rounded-full border border-yellow-400/30 px-4 py-1 text-sm text-yellow-400">
            SITE INSTITUCIONAL COMERCIAL
          </div>

          <h1 className="text-4xl font-black leading-tight md:text-5xl">
            Soluções em{" "}
            <span className="text-yellow-400">
              Engenharia, Vistorias Técnicas, Orçamentos e Certificações.
            </span>
          </h1>

          <p className="mt-6 text-slate-300">
            Nosso objetivo é transformar necessidades diversas em soluções
            claras, organizadas e tecnicamente bem direcionadas.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-white/5 p-4">Consultoria e gestão</div>
            <div className="rounded-xl bg-white/5 p-4">Serviços técnicos</div>
            <div className="rounded-xl bg-white/5 p-4">Produtos digitais</div>
            <div className="rounded-xl bg-white/5 p-4">
              Estrutura para crescer
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <a className="rounded-lg bg-yellow-400 px-6 py-3 text-black">
              Conhecer serviços
            </a>
            <a className="rounded-lg border border-white/20 px-6 py-3">
              Ver produtos digitais
            </a>
          </div>
        </div>

        {/* DIREITA */}
        <div className="rounded-2xl bg-white/5 p-6">
          <h3 className="mb-6 text-lg font-bold">ICENG Consultoria</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#08192f] p-4">
              <ShieldCheck className="mb-2" />
              Consultoria SGQ
            </div>

            <div className="rounded-xl bg-[#08192f] p-4">
              <Home className="mb-2" />
              Vistoria de imóveis
            </div>

            <div className="rounded-xl bg-[#08192f] p-4">
              <Calculator className="mb-2" />
              Orçamentos de obras
            </div>

            <div className="rounded-xl bg-[#08192f] p-4">
              <ClipboardList className="mb-2" />
              Montagem de PCIs
            </div>

            <div className="rounded-xl bg-[#08192f] p-4">
              <Folder className="mb-2" />
              Produtos digitais
            </div>

            <div className="rounded-xl bg-[#08192f] p-4">
              <Headphones className="mb-2" />
              Soluções sob medida
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
