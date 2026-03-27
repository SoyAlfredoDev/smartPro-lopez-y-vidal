"use client";

import { motion } from "framer-motion";

const lawyers = [
  {
    name: "Diego Santander",
    role: "Abogado",
    image: "/images/abogado-01.png",
    description:
      "Abogado de la Pontificia Universidad Católica de Valparaíso, diplomado en derecho laboral de empresa, Universidad de los Andes.",
  },
  {
    name: "Gonzalo Oliva",
    role: "Abogado",
    image: "/images/abogado-02.png",
    description:
      "Especialista en litigación y asesoría jurídica, con experiencia en defensa de intereses corporativos y civiles.",
  },
  {
    name: "Francisca Oliva",
    role: "Abogada",
    image: "/images/abogado-03.jpg",
    description:
      "Abogada con enfoque en asesoría legal estratégica, contratos y representación en materias de alta complejidad.",
  },
  {
    name: "Miguel Oyarzún",
    role: "Abogado",
    image: "/images/abogado-04.png",
    description:
      "Magíster en derecho, con trayectoria en consultoría, defensa jurídica y resolución de controversias.",
  },
];

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#070707] py-20 md:py-28 text-white"
    >
      {/* Fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,169,97,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(201,169,97,0.08),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015),transparent,rgba(201,169,97,0.04))]" />
      </div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 md:px-10 lg:grid-cols-[1.05fr_1.4fr] lg:gap-16"
      >
        {/* Texto principal */}
        <motion.div variants={fadeUp} className="flex flex-col justify-center">
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a961]"
          >
            Nuestro equipo
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="max-w-xl font-serif text-4xl leading-tight text-[#f5efe4] sm:text-5xl lg:text-[58px]"
          >
            Abogados Expertos
            <br />
            en Materia Legal
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-6 h-px w-24 bg-gradient-to-r from-[#c9a961] via-[#e6d19a] to-transparent"
          />

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-[15px] leading-7 text-[#d5d0c7]/85 sm:text-base"
          >
            Contamos con un equipo especializado y comprometido con cada caso.
            Más de 10 años de experiencia nos respaldan para ofrecer un servicio
            jurídico de alta calidad, confianza y excelencia profesional.
          </motion.p>
        </motion.div>

        {/* Grid abogados */}
        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {lawyers.map((lawyer, index) => (
            <motion.article
              key={lawyer.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-[22px] border border-[#c9a961]/20 bg-[#0d0d0d] shadow-[0_14px_40px_rgba(0,0,0,0.35)]"
            >
              {/* borde dorado suave */}
              <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-inset ring-white/5" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a961] to-transparent opacity-80" />

              {/* imagen */}
              <div className="relative h-[360px] overflow-hidden">
                <motion.img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/35 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(201,169,97,0.10),transparent_40%)] opacity-60" />

                {/* contenido base */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-lg font-semibold tracking-[0.01em] text-[#f5efe4]">
                    {lawyer.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#c9a961]">
                    {lawyer.role}
                  </p>
                </div>

                {/* overlay hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 flex items-end bg-[linear-gradient(to_top,rgba(5,5,5,0.96),rgba(5,5,5,0.78),rgba(5,5,5,0.18))] p-5"
                >
                  <div className="translate-y-4 transform transition-all duration-300 group-hover:translate-y-0">
                    <div className="mb-3 h-px w-14 bg-[#c9a961]" />
                    <p className="text-sm leading-6 text-[#ece6da]/90">
                      {lawyer.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
