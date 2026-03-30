"use client";

import { motion } from "framer-motion";
import { Scale, Brain, Handshake } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="relative overflow-hidden bg-[#141414] py-24 text-white"
    >
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,97,0.06),transparent_40%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* TOP */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* TEXTO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-serif text-[#f5efe4] md:text-4xl">
                Nosotros
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-[#c9a961] to-transparent" />
            </div>

            <h3 className="text-xl font-medium text-[#ddd5c9] md:text-2xl">
              Compromiso real con cada decisión legal
            </h3>

            <p className="max-w-xl text-sm leading-7 text-[#cfc7b8]/82 md:text-base">
              Porque en López & Vidal entendemos lo importante que son para ti
              la protección de tus asuntos más importantes nos comprometemos a
              entregarte una defensa personalizada, integral y
              multidisciplinaria en la solución de tus problemas legales.
            </p>

            <p className="max-w-xl text-sm leading-7 text-[#cfc7b8]/82 md:text-base">
              Nos involucramos con profundidad en tus asuntos y estamos siempre
              disponibles para trabajar en conjunto, buscando que te sientas
              protegido en todo momento.
            </p>
          </motion.div>

          {/* IMAGEN */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#c9a961]/18 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <img
                src="/images/aboutUs.png"
                alt="Equipo legal"
                className="h-[320px] w-full object-cover brightness-105 saturate-90 md:h-[420px] scale-x-[-1]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/58 via-[#141414]/14 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* CARDS INFERIORES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid gap-6 md:grid-cols-3"
        >
          {[
            {
              icon: Scale,
              title: "Estrategia Jurídica Real",
              desc: "Soluciones basadas en un análisis serio para tomar decisiones con respaldo.",
            },
            {
              icon: Brain,
              title: "Análisis Personalizado",
              desc: "Estudiamos cada caso en detalle para una estrategia realmente efectiva.",
            },
            {
              icon: Handshake,
              title: "Acompañamiento Total",
              desc: "Te guiamos en todo el proceso con cercanía, claridad y compromiso.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-[#c9a961]/14 bg-[#1a1a1a] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.28)]"
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(201,169,97,0.10),transparent_60%)] opacity-0 transition group-hover:opacity-100" />

              <item.icon className="mb-4 h-7 w-7 text-[#c9a961]" />

              <h4 className="text-lg font-semibold text-[#f5efe4]">
                {item.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-[#cfc7b8]/78">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
