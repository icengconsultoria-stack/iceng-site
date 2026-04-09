import React, { useState } from "react";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/5575991438777";

// 🔥 NOVO: prova social (aumenta conversão)
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

// 🔥 NOVO: CTA flutuante (principal melhoria de conversão)
function FloatingCTA() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full bg-green-500 px-6 py-4 text-white shadow-2xl hover:bg-green-400"
    >
      <Phone className="h-5 w-5" />
      Falar no WhatsApp
    </a>
  );
}

export default function IcengSiteInstitucional() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="min-h-screen bg-[#06101f] text-white">
      {/* 🔥 NOVO: BOTÃO FIXO */}
      <FloatingCTA />

      <main>
        {/* HERO OTIMIZADO */}
        <section className="mx-auto max-w-7xl px-4 py-20 text-center md:px-8">
          <h1 className="text-4xl font-black md:text-6xl">
            Evite problemas em obras e certificações
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Consultoria, vistoria e soluções técnicas para engenharia com foco
            em resultado, segurança e organização.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-green-500 text-white hover:bg-green-400"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Falar com especialista
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>

          {/* 🔥 PROVA SOCIAL */}
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-xl bg-white/5 p-4">
                <p className="text-sm text-slate-300">"{t.text}"</p>
                <div className="mt-2 text-xs text-amber-300">{t.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 🔥 SEÇÃO DE URGÊNCIA */}
        <section className="mx-auto max-w-5xl px-4 py-16 text-center">
          <div className="rounded-2xl border border-amber-400/30 bg-amber-400/10 p-8">
            <h2 className="text-2xl font-bold">
              Está com problema em obra, documentação ou certificação?
            </h2>
            <p className="mt-3 text-slate-300">
              Quanto mais você demora, maior o risco de prejuízo.
            </p>

            <Button asChild className="mt-6 bg-amber-400 text-black">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                Resolver agora
              </a>
            </Button>
          </div>
        </section>

        {/* 🔥 CTA FINAL OTIMIZADO */}
        <section className="mx-auto max-w-5xl px-4 pb-20 text-center">
          <h2 className="text-3xl font-bold">
            Fale diretamente com um engenheiro especialista
          </h2>

          <p className="mt-4 text-slate-300">
            Atendimento rápido via WhatsApp para entender sua necessidade e
            direcionar a melhor solução.
          </p>

          <Button asChild size="lg" className="mt-6 bg-green-500 text-white">
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              Iniciar conversa
            </a>
          </Button>
        </section>
      </main>
    </div>
  );
}
