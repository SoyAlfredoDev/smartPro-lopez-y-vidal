"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Car, Train, Video, ArrowUpRight } from "lucide-react";
const CalendlyButton = dynamic(() => import("./CalendlyButton"), {
  ssr: false,
});

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// Array de imágenes que rotarán
const images = ["/images/howToArrive01.jpg", "/images/howToArrive02.jpg"];

export default function HowToArriveSection() {
  const [currentImg, setCurrentImg] = useState(0);

  // Efecto para cambiar la imagen cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="como-llegar"
      className="relative overflow-hidden bg-[#050505] py-24 text-white"
    >
      {/* Fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,169,97,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(201,169,97,0.06),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015),transparent,rgba(201,169,97,0.03))]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto max-w-7xl px-6 md:px-10"
      >
        {/* Encabezado */}
        <motion.div variants={fadeUp} className="mb-12 flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <h2 className="font-serif text-3xl text-[#f5efe4] md:text-4xl">
              Cómo llegar
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-[#c9a961] to-transparent" />
          </div>

          <p className="max-w-2xl text-sm leading-7 text-[#d5d0c7]/82 md:text-base">
            Queremos que tu visita sea simple, cómoda y clara desde el primer
            momento. Puedes llegar en auto o en metro, y si lo prefieres,
            también podemos coordinar una videollamada.
          </p>
        </motion.div>

        {/* Layout principal */}
        <div className="grid gap-8 lg:grid-cols-[1.05fr_1.2fr]">
          {/* Columna izquierda */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            {/* Imagen con Slider Suave */}
            <div className="relative overflow-hidden rounded-[28px] border border-[#c9a961]/18 bg-[#0b0b0b] shadow-[0_18px_50px_rgba(0,0,0,0.4)]">
              <div className="relative h-[300px] md:h-[380px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={images[currentImg]}
                    src={images[currentImg]}
                    alt="Ubicación oficina"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute h-full w-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Card videollamada */}
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[24px] border border-[#c9a961]/16 bg-[#0b0b0b] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,169,97,0.10),transparent_60%)]" />

              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#c9a961]/25 bg-[#c9a961]/8">
                  <Video className="h-5 w-5 text-[#c9a961]" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#f5efe4]">
                    ¿Quieres agendar una videollamada?
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-[#d5d0c7]/78 mb-4">
                    Si te acomoda más una reunión remota, también podemos
                    coordinar una videollamada para orientarte y revisar tu
                    caso.
                  </p>

                  <CalendlyButton />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            variants={fadeUp}
            className="rounded-[28px] border border-[#c9a961]/18 bg-[#0a0a0a] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.42)] md:p-8"
          >
            {/* Intro */}
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-4">
                <span className="h-7 w-[3px] rounded-full bg-[#c9a961]" />
                <h3 className="text-2xl font-semibold text-[#f5efe4]">
                  Contamos con estacionamiento privado y visita
                </h3>
              </div>

              <div className="ml-[19px] border-l border-[#c9a961]/10 pl-6">
                <p className="text-[15px] leading-8 text-[#d5d0c7]/82">
                  No importa cuán complejo sea tu caso, estamos preparados para
                  ofrecerte una atención seria, clara y profesional. Queremos
                  que llegar a nuestra oficina sea cómodo y simple desde el
                  primer momento.
                </p>
              </div>
            </div>

            {/* Grid auto + metro */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Auto */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-[22px] border border-[#c9a961]/14 bg-[#0d0d0d] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.32)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#c9a961]/22 bg-[#c9a961]/8">
                    <Car className="h-5 w-5 text-[#c9a961]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#f5efe4]">
                    Si vienes en auto
                  </h4>
                </div>

                <div className="mb-5 h-px w-full bg-gradient-to-r from-[#c9a961]/45 to-transparent" />

                <p className="text-sm leading-7 text-[#d5d0c7]/78">
                  Contamos con estacionamiento privado y alternativas de visita
                  para que tu llegada sea más cómoda.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="https://www.waze.com/es-419/live-map/directions/cl/region-metropolitana/providencia/av.-providencia-1017?to=place.ChIJG-0f4YfFYpYRAOa9KqXKYdA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#c9a961]/32 bg-[linear-gradient(180deg,rgba(201,169,97,0.18),rgba(201,169,97,0.08))] px-5 py-3 text-sm font-medium text-[#f5efe4] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#e6d19a]/55 hover:bg-[linear-gradient(180deg,rgba(201,169,97,0.24),rgba(201,169,97,0.12))] hover:shadow-[0_10px_28px_rgba(201,169,97,0.10)]"
                  >
                    Llegar por Waze
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href="https://www.google.com/maps/place/Av.+Providencia+1017,+7500620+Providencia,+Regi%C3%B3n+Metropolitana,+Chile/@-33.4308855,-70.6255499,17z/data=!3m1!4b1!4m6!3m5!1s0x9662c587e11fed1b:0xd061caa52abde600!8m2!3d-33.4308855!4d-70.622975!16s%2Fg%2F11c5l340wy?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-[#f5efe4] transition-all duration-300 hover:-translate-y-[1px] hover:border-[#c9a961]/28 hover:bg-white/[0.05]"
                  >
                    Llegar por Maps
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>

              {/* Metro */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="rounded-[22px] border border-[#c9a961]/14 bg-[#0d0d0d] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.32)]"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#c9a961]/22 bg-[#c9a961]/8">
                    <Train className="h-5 w-5 text-[#c9a961]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[#f5efe4]">
                    Si vienes en metro
                  </h4>
                </div>

                <div className="mb-5 h-px w-full bg-gradient-to-r from-[#c9a961]/45 to-transparent" />

                <ul className="space-y-3 text-sm leading-7 text-[#d5d0c7]/78">
                  <li>
                    • La estación más cercana a nuestra oficina es Irarrázaval,
                    Línea 5.
                  </li>
                  <li>
                    • Esta estación cuenta con acceso y conexión conveniente
                    para llegar a la zona.
                  </li>
                  <li>
                    • Si lo deseas, también puedes complementar el trayecto con
                    indicaciones por Maps.
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
