"use client";

import "./PracticeAreasSection.css";
import { motion } from "framer-motion";
import {
  Scale,
  Users,
  Briefcase,
  BadgeDollarSign,
  FileText,
  Building2,
  Landmark,
} from "lucide-react";

const practiceAreas = [
  { title: "Derecho Civil", icon: Scale },
  { title: "Derecho Penal", icon: Scale },
  { title: "Derecho Familiar", icon: Users },
  { title: "Derecho Laboral", icon: Briefcase },
  { title: "Derecho Comercial", icon: BadgeDollarSign },
  { title: "Derecho Contractual", icon: FileText },
  { title: "Derecho Corporativo", icon: Building2 },
  { title: "Derecho Inmobiliario", icon: Landmark },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
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

export default function PracticeAreasSection() {
  return (
    <section className="practice-section py-10 ">
      <div className="section-bg py-10">
        <div className="section-content mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#c6a46c] sm:text-xs">
              Servicios Legales
            </p>

            <h2 className="mt-3 text-2xl font-medium tracking-[-0.02em] text-white sm:text-3xl lg:text-4xl">
              Áreas de Especialización
            </h2>

            <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#c6a46c]/70 to-transparent sm:mt-5 sm:w-28" />

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/62 sm:mt-5 sm:text-[15px] sm:leading-7">
              Acompañamos cada caso con un enfoque estratégico, análisis preciso
              y atención personalizada en distintas áreas del derecho.
            </p>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-10 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
          >
            {practiceAreas.map((area) => {
              const Icon = area.icon;

              return (
                <motion.article
                  key={area.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.22, ease: "easeOut" },
                  }}
                  className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-md"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(198,164,108,0.12),transparent_45%)]" />
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5" />

                  <div className="relative flex min-h-[108px] flex-col items-center justify-center px-4 py-6 text-center sm:min-h-[118px] sm:px-5 sm:py-7 lg:min-h-[122px]">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.22 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c6a46c]/25 bg-[#c6a46c]/10 text-[#d2b07a] shadow-[0_0_24px_rgba(198,164,108,0.08)] sm:h-14 sm:w-14"
                    >
                      <Icon
                        className="h-5 w-5 sm:h-6 sm:w-6"
                        strokeWidth={1.8}
                      />
                    </motion.div>

                    <h3 className="mt-3 text-sm font-medium leading-snug text-white sm:mt-4 sm:text-[15px] lg:text-base">
                      {area.title}
                    </h3>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
