"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Especialización", href: "#especializacion" },
  { label: "Abogados expertos", href: "#team" },
  { label: "Cómo llegar", href: "#como-llegar" },
  { label: "Contacto", href: "#contact" },
  { label: "Agendar una reunión", href: "#agendar-reunion", isButton: true },
];

export default function Footer() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
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
              target="_blank"
              href="https://www.waze.com/es-419/live-map/directions/cl/region-metropolitana/nunoa/av.-vicuna-mackenna-920?to=place.ChIJPRKVLXvFYpYRKa94T2R44SI"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition border border-white/10 text-sm"
            >
              📍 Llegar por Waze
            </a>

            <a
              target="_blank"
              href="https://www.google.com/maps/place/Av.+Vicu%C3%B1a+Mackenna+920,+8330670+%C3%91u%C3%B1oa,+Regi%C3%B3n+Metropolitana,+Chile/@-33.4534987,-70.6327437,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c57b2d95123d:0x22e178644f78af29!8m2!3d-33.4535032!4d-70.6301634!16s%2Fg%2F11c4vqg9sz?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
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
            {navItems.map((item) => (
              <li
                key={item.label}
                className="hover:text-[#c9a961] transition cursor-pointer"
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
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
              <span>+56 9 2721 76 16</span>
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
        <Image
          src="/images/webpay-2048x979.png"
          alt="Formas de pago"
          width={200}
          height={200}
        />
      </div>
    </footer>
  );
}
