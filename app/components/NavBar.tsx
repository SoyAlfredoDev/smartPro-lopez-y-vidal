"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
const CalendlyButton = dynamic(() => import("./CalendlyButton"), {
  ssr: false,
});

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Especialización", href: "#especializacion" },
  { label: "Abogados expertos", href: "#team" },
  { label: "Cómo llegar", href: "#como-llegar" },
  { label: "Contacto", href: "#contact" },
];

export default function NavBar() {
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
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#070707]/88 backdrop-blur-xl border-b border-[#c9a961]/15 shadow-[0_12px_40px_rgba(0,0,0,0.28)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          {/* Logo */}
          <a
            href="#inicio"
            className="group flex items-center gap-3"
            aria-label="Ir al inicio"
          >
            <img
              src="/images/logo-lopez-vidal2.png"
              alt="Logo"
              className="w-32 m-0 p-0"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium text-[#e7e0d2]/88 transition-colors duration-300 hover:text-[#f5efe4]"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9a961] transition-all duration-300 hover:w-full" />
              </a>
            ))}
            <CalendlyButton
              title="Agendar una reunión"
              style="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9a961]/35 bg-[linear-gradient(180deg,rgba(201,169,97,0.18),rgba(201,169,97,0.08))] px-5 py-2.5 text-sm font-medium text-[#f5efe4] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#e6d19a]/55 hover:bg-[linear-gradient(180deg,rgba(201,169,97,0.24),rgba(201,169,97,0.12))] hover:shadow-[0_10px_30px_rgba(201,169,97,0.12)]"
            />
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#c9a961]/25 bg-white/[0.03] text-[#f5efe4] transition hover:border-[#c9a961]/45 hover:bg-white/[0.06] lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/65 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-[360px] flex-col border-l border-[#c9a961]/15 bg-[#090909] shadow-[0_20px_60px_rgba(0,0,0,0.45)] lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-5">
                <div className="flex flex-col leading-none">
                  <span className="font-serif text-[24px] text-[#f5efe4]">
                    López <span className="text-[#b42a1e]">&</span> Vidal
                  </span>
                  <span className="mt-2 h-px w-14 bg-gradient-to-r from-[#c9a961] to-transparent" />
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#c9a961]/20 bg-white/[0.03] text-[#f5efe4] transition hover:border-[#c9a961]/45 hover:bg-white/[0.06]"
                  aria-label="Cerrar menú"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col px-5 py-6">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * index }}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl border border-transparent px-4 py-3 text-[15px] font-medium text-[#e7e0d2]/88 transition-all duration-300 hover:border-[#c9a961]/12 hover:bg-white/[0.03] hover:text-[#f5efe4]"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <CalendlyButton
                    title="Agendar una reunión"
                    style="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9a961]/35 bg-[linear-gradient(180deg,rgba(201,169,97,0.18),rgba(201,169,97,0.08))] px-5 py-2.5 text-sm font-medium text-[#f5efe4] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#e6d19a]/55 hover:bg-[linear-gradient(180deg,rgba(201,169,97,0.24),rgba(201,169,97,0.12))] hover:shadow-[0_10px_30px_rgba(201,169,97,0.12)]"
                  />
                </nav>

                <div className="mt-auto pt-8">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a961]/35 to-transparent" />
                  <p className="mt-5 text-sm leading-6 text-[#bfb7a9]/72">
                    Estudio jurídico con enfoque profesional, cercanía y una
                    presentación visual consistente con toda la experiencia del
                    sitio.
                  </p>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
