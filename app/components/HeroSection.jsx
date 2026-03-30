"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { Briefcase, Scale, Globe, FileText } from "lucide-react";

const CalendlyButton = dynamic(() => import("./CalendlyButton"), {
  ssr: false,
});

const cards = [
  {
    icon: <Briefcase className="h-5 w-5" />,
    title: "10 Años",
    description: "de experiencia",
  },
  {
    icon: <Scale className="h-5 w-5" />,
    title: "+500",
    description: "Casos Resueltos",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Cobertura",
    description: "Nacional",
  },
];

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#141414] text-white"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/bg-hero.png"
          alt="Defensa legal estratégica"
          fill
          priority
          className="object-cover object-center brightness-105 saturate-90"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(198,164,108,0.14),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.55))]" />

      {/* Contenido */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="w-full max-w-3xl">
          <div className="inline-flex items-center rounded-full border border-[#c6a46c]/25 bg-[#c6a46c]/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[#d6b27a] backdrop-blur-sm">
            Estudio Jurídico Profesional
          </div>

          <h1 className="mt-6 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-5xl">
            Defensa Legal Especializada: La protección de tus derechos en manos
            de los mejores profesionales
          </h1>

          <p className="mt-3 text-lg text-[#d6b27a] sm:text-xl">
            para decisiones que realmente importan
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/78 sm:text-base">
            Más de 10 años de experiencia entregando soluciones legales
            efectivas, con un enfoque serio, cercano y orientado a resultados.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CalendlyButton />

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition duration-300 hover:bg-white/[0.1]"
            >
              <FileText className="h-4 w-4" />
              Evaluar mi caso
            </Link>
          </div>

          {/* Métricas */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {cards.map((card, index) => (
                <div
                  key={card.title}
                  className={`flex items-center gap-4 px-6 py-5 ${
                    index !== cards.length - 1
                      ? "md:border-r md:border-white/10"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c6a46c]/25 bg-[#c6a46c]/10 text-[#d6b27a] shadow-[0_0_24px_rgba(198,164,108,0.08)]">
                    {card.icon}
                  </div>

                  <div className="flex flex-col">
                    <p className="text-base font-semibold leading-none text-white sm:text-lg">
                      {card.title}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-white/68">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#141414]" />
    </section>
  );
}
