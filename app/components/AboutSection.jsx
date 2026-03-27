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
      className="relative bg-[#050505] text-white py-24 overflow-hidden"
    >
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,97,0.08),transparent_40%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* TEXTO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {/* título con línea */}
            <div className="flex items-center gap-4">
              <h2 className="text-3xl md:text-4xl font-serif text-[#f5efe4]">
                Nosotros
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-[#c9a961] to-transparent" />
            </div>

            <h3 className="text-xl md:text-2xl text-[#d6cfc2] font-medium">
              Compromiso real con cada decisión legal
            </h3>

            <p className="text-[#cfc7b8]/80 leading-7 text-sm md:text-base max-w-xl">
              En López & Vidal entendemos que cada decisión es parte de un
              proceso legal. Sabemos que impacta profundamente en la vida de
              nuestros clientes. Nuestra estrategia combina experiencia,
              análisis y visión jurídica para ofrecer soluciones efectivas,
              claras y seguras en cada etapa del proceso.
            </p>

            <p className="text-[#cfc7b8]/80 leading-7 text-sm md:text-base max-w-xl">
              Nos involucramos con seriedad, trabajamos con precisión.
              Analizamos cada caso en detalle, anticipamos escenarios y
              construimos con convicción lo que realmente importa: tus derechos,
              tu tranquilidad y tu futuro.
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
            <div className="relative rounded-2xl overflow-hidden border border-[#c9a961]/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img
                src="/images/aboutUs.png"
                alt="Equipo legal"
                className="w-full h-[320px] md:h-[420px] object-cover scale-x-[-1]"
              />

              {/* overlay elegante */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* CARDS INFERIORES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mt-20"
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
              className="relative p-6 rounded-2xl bg-[#0b0b0b] border border-[#c9a961]/15 shadow-[0_10px_40px_rgba(0,0,0,0.4)] group"
            >
              {/* glow dorado */}
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(201,169,97,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition" />

              <item.icon className="w-7 h-7 text-[#c9a961] mb-4" />

              <h4 className="text-lg font-semibold text-[#f5efe4]">
                {item.title}
              </h4>

              <p className="text-sm text-[#cfc7b8]/75 mt-2 leading-6">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
