"use client";

import { motion } from "framer-motion";

const lawyers = [
  {
    name: "Diego Berrios Santander",
    role: "Abogado",
    image: "/images/lawyer-01.png",
    descriptionLines: [
      "Abogado de la Pontificia Universidad Católica de Valparaíso.",
      "Diplomado en Derecho Laboral de la Empresa • Universidad de los Andes.",
      "Diplomado en Responsabilidad Civil Extracontractual • Pontificia Universidad Católica de Valparaíso.",
      "Master of Laws (LL. M) – Magíster en Derecho, mención en Derecho del Trabajo.",
    ],
  },
  {
    name: "Andrés Araneda Cruz",
    role: "Abogado",
    image: "/images/lawyer-02.png",
    descriptionLines: [
      "Abogado de la Pontificia Universidad Católica de Valparaíso con especialidad en Derecho Laboral.",
      "Diplomado en Derecho Laboral, Reforma Procesal y Litigación • Universidad Diego Portales.",
      "Diplomado en Derecho Colectivo del Trabajo • Pontificia Universidad Católica de Valparaíso.",
    ],
  },
  {
    name: "Francisca Ogalde Vega",
    role: "Abogada",
    image: "/images/lawyer-03.png",
    descriptionLines: [
      "Abogada de la Universidad Andrés Bello.",
      "Diplomado en Derecho Aduanero • Universidad Andrés Bello.",
      "Diplomado en Gestión de Conflictos, Negociación, con especialidad en materia de familia • Pontificia Universidad Católica de Valparaíso.",
      "Magíster en Derecho del Trabajo y Seguridad Social • Universidad Adolfo Ibáñez.",
    ],
  },
  {
    name: "Rodrigo Mancilla Coyopae",
    role: "Abogado",
    image: "/images/lawyer-04.png",
    descriptionLines: [
      "Abogado de la Pontificia Universidad Católica de Valparaíso.",
      "Diplomado en Derecho del Trabajo con mención en Derecho Colectivo y Negociación • Pontificia Universidad Católica de Chile.",
    ],
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
      className="relative min-h-screen overflow-hidden bg-[#141414] py-20 text-white md:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* 🔥 BLOQUE AGREGADO (título + descripción) */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="mb-10"
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c9a961]">
            Nuestro equipo
          </span>

          <div className="mt-3 h-px w-24 bg-gradient-to-r from-[#c9a961] via-[#e6d19a] to-transparent" />

          <h2 className="mt-6 text-4xl font-serif leading-tight text-[#f5efe4] sm:text-5xl">
            Abogados Expertos en Materia
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#d5d0c7]/85 sm:text-base">
            Contamos con más de 10 años de experiencia en el ámbito legal, lo
            que nos permite ofrecer un servicio de alta calidad y confianza a
            nuestros clientes.
          </p>
        </motion.div>

        {/* Grid abogados */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          {lawyers.map((lawyer) => (
            <motion.article
              key={lawyer.name}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[22px] border border-[#c9a961]/16 bg-[#1a1a1a] shadow-[0_14px_40px_rgba(0,0,0,0.24)]"
            >
              <div className="relative min-h-[500px] overflow-hidden">
                {/* IMAGEN */}
                <motion.img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="min-h-[500px] w-full object-cover brightness-105 saturate-90 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />

                {/* Overlay base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/78 via-[#141414]/28 to-transparent" />

                {/* Info base */}
                <div className="absolute inset-x-0 bottom-0 p-5 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="text-lg font-semibold text-[#f5efe4]">
                    {lawyer.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#c9a961]">{lawyer.role}</p>
                </div>

                {/* Hover info */}
                <div className="absolute inset-0 flex items-end bg-[linear-gradient(to_top,rgba(20,20,20,0.94),rgba(20,20,20,0.72),rgba(20,20,20,0.18))] p-5 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="translate-y-4 transition-all duration-300 group-hover:translate-y-0">
                    <h3 className="text-xl font-semibold text-[#f5efe4]">
                      {lawyer.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#c9a961]">{lawyer.role}</p>

                    <div className="my-3 h-px w-14 bg-[#c9a961]" />

                    <ul className="space-y-2 text-sm text-[#ece6da]/90">
                      {lawyer.descriptionLines.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
