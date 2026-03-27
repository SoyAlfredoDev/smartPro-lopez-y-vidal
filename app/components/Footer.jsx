"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(201,169,97,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(255,255,255,0.02),transparent)]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* LOGO + TEXTO */}
        <motion.div variants={fadeUp} className="flex flex-col gap-5">
          <Image
            src="/images/logo-lopez-vidal2.png"
            alt="Logo"
            width={200}
            height={200}
          />

          <div className="h-[2px] w-16 bg-gradient-to-r from-[#c9a961] to-transparent" />

          <p className="text-sm text-[#d5d0c7]/80 leading-6">
            Nuestro compromiso es defender tus derechos con responsabilidad,
            ética y una sólida experiencia jurídica que respalde cada decisión.
          </p>
        </motion.div>

        {/* GPS */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-[#f5efe4]">
            Llegar por GPS
          </h3>

          <div className="h-[1px] w-10 bg-[#c9a961]" />

          <div className="flex flex-col gap-3 mt-2">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10 text-sm"
            >
              📍 Llegar por Waze
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10 text-sm"
            >
              🗺️ Llegar por Maps
            </a>
          </div>
        </motion.div>

        {/* MAPA DEL SITIO */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-[#f5efe4]">
            Mapa del sitio
          </h3>

          <div className="h-[1px] w-10 bg-[#c9a961]" />

          <ul className="flex flex-col gap-2 text-sm text-[#d5d0c7]/80 mt-2">
            <li className="hover:text-[#c9a961] transition cursor-pointer">
              Inicio
            </li>
            <li className="hover:text-[#c9a961] transition cursor-pointer">
              Equipo de trabajo
            </li>
            <li className="hover:text-[#c9a961] transition cursor-pointer">
              Áreas de trabajo
            </li>
            <li className="hover:text-[#c9a961] transition cursor-pointer">
              Asesorías
            </li>
            <li className="hover:text-[#c9a961] transition cursor-pointer">
              Contacto
            </li>
            <li className="hover:text-[#c9a961] transition cursor-pointer">
              Cómo llegar
            </li>
          </ul>
        </motion.div>

        {/* CONTACTO */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-[#f5efe4]">Aquí estamos</h3>

          <div className="h-[1px] w-10 bg-[#c9a961]" />

          <div className="flex flex-col gap-4 mt-2 text-sm text-[#d5d0c7]/85">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#c9a961] mt-1" />
              <span>Avenida Vicuña Mackenna 920, Ñuñoa</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#c9a961]" />
              <span>+56 2 6469 13 52</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#c9a961]" />
              <span>info@estudiolyv.cl</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a961]/40 to-transparent" />
      </div>

      {/* Bottom */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#a8a29e]">
        <span>
          © {new Date().getFullYear()} López & Vidal. Todos los derechos
          reservados.
        </span>

        <span className="text-[#c9a961] font-medium">
          Formas de pago disponibles
        </span>
      </div>
    </footer>
  );
}
