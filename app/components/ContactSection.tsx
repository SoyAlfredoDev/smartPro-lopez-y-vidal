"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 text-white">
      <div
        className="relative flex min-h-screen items-center py-14 sm:py-16 lg:py-20"
        style={{ backgroundImage: "url('/images/bg-practice.png')" }}
      >
        {/* Capa base de la imagen */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />

        {/* Oscurecimiento general más suave */}
        <div className="absolute inset-0 bg-black/42" />

        {/* Fade oscuro arriba y abajo más ligero */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#141414_0%,rgba(20,20,20,0.46)_18%,rgba(20,20,20,0.14)_38%,rgba(20,20,20,0.14)_62%,rgba(20,20,20,0.46)_82%,#141414_100%)]" />

        {/* Glow dorado sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,164,108,0.06),transparent_30%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch"
          >
            {/* Columna izquierda */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,164,108,0.08),transparent_35%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />

              <div className="relative">
                <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#c6a46c] sm:text-xs">
                  Contacto
                </p>

                <h2 className="mt-3 text-3xl font-medium tracking-[-0.02em] text-white sm:text-4xl">
                  Contáctanos
                </h2>

                <p className="mt-4 max-w-md text-sm leading-6 text-white/72 sm:text-[15px] sm:leading-7">
                  Estamos disponibles para orientarte con atención
                  personalizada, evaluación inicial y seguimiento profesional de
                  tu caso.
                </p>

                <div className="mt-8 space-y-5">
                  <motion.div
                    variants={itemVariants}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c6a46c]/25 bg-[#c6a46c]/10 text-[#d2b07a] shadow-[0_0_24px_rgba(198,164,108,0.08)]">
                      <Phone className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white/82">
                        Teléfono
                      </p>
                      <p className="mt-1 text-sm text-white sm:text-[15px]">
                        +56 9 2721 7616
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c6a46c]/25 bg-[#c6a46c]/10 text-[#d2b07a] shadow-[0_0_24px_rgba(198,164,108,0.08)]">
                      <Mail className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white/82">
                        Correo
                      </p>
                      <p className="mt-1 break-all text-sm text-white sm:text-[15px]">
                        info@estudiolyv.cl
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={itemVariants}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#c6a46c]/25 bg-[#c6a46c]/10 text-[#d2b07a] shadow-[0_0_24px_rgba(198,164,108,0.08)]">
                      <MapPin className="h-5 w-5" strokeWidth={1.8} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-white/82">
                        Ubicación
                      </p>
                      <p className="mt-1 text-sm leading-6 text-white sm:text-[15px]">
                        Providencia 1017 OF 41, Comuna Providencia, Codigo
                        postal 7500000
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <p className="mt-6 text-sm leading-6 text-white/60">
                  Lunes a viernes de 9:00 a 19:00 hrs.
                </p>
              </div>
            </motion.div>

            {/* Formulario */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md sm:p-8"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,164,108,0.06),transparent_35%)]" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />

              <form className="relative">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/88">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre y apellido"
                      className="h-11 w-full border-0 border-b border-white/18 bg-transparent px-0 text-sm text-white placeholder:text-white/42 focus:border-[#c6a46c]/70 focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/88">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      placeholder="Ej: +56 9 1234 5678"
                      className="h-11 w-full border-0 border-b border-white/18 bg-transparent px-0 text-sm text-white placeholder:text-white/42 focus:border-[#c6a46c]/70 focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/88">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      className="h-11 w-full border-0 border-b border-white/18 bg-transparent px-0 text-sm text-white placeholder:text-white/42 focus:border-[#c6a46c]/70 focus:outline-none focus:ring-0"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-white/88">
                      Asunto
                    </label>
                    <input
                      type="text"
                      placeholder="Motivo de tu consulta"
                      className="h-11 w-full border-0 border-b border-white/18 bg-transparent px-0 text-sm text-white placeholder:text-white/42 focus:border-[#c6a46c]/70 focus:outline-none focus:ring-0"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label className="mb-2 block text-sm font-medium text-white/88">
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos brevemente tu caso"
                    className="w-full resize-none border-0 border-b border-white/18 bg-transparent px-0 py-3 text-sm text-white placeholder:text-white/42 focus:border-[#c6a46c]/70 focus:outline-none focus:ring-0"
                  />
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <input
                    id="privacy"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border border-white/20 bg-transparent accent-[#c6a46c]"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-xs leading-5 text-white/60 sm:text-sm"
                  >
                    Acepto el tratamiento de mis datos personales conforme a la
                    normativa vigente, para ser contactado(a) y recibir
                    información sobre los servicios solicitados.
                  </label>
                </div>

                <div className="mt-8 flex justify-start sm:justify-center">
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.22 }}
                    className="inline-flex min-w-[170px] items-center justify-center rounded-md border border-[#d2b07a]/30 bg-[linear-gradient(135deg,#d1b07a,#a88652)] px-6 py-3 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(198,164,108,0.18)] transition duration-300 hover:shadow-[0_16px_50px_rgba(198,164,108,0.22)]"
                  >
                    Enviar
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
