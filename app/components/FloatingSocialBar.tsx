"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Importaciones desde react-icons
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import {
  IoClose,
  IoChevronUpOutline,
  IoChevronDownOutline,
} from "react-icons/io5";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://facebook.com/",
    icon: FaFacebookF,
    isWhatsapp: false,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/estudiolyv/",
    icon: FaInstagram,
    isWhatsapp: false,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: FaLinkedinIn,
    isWhatsapp: false,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@estudio.lyv?is_from_webapp=1&sender_device=pc",
    icon: FaTiktok,
    isWhatsapp: false,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/56927217616",
    icon: FaWhatsapp,
    isWhatsapp: true,
  },
];

export default function FloatingSocialBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <div className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <div className="rounded-[22px] border border-[#c9a961]/12 bg-[#0a0a0a]/88 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.38)] backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: -3, scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className={`group flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 ${
                    item.isWhatsapp
                      ? "border-[#25D366]/30 bg-[#25D366]/12 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-[0_10px_24px_rgba(37,211,102,0.18)]"
                      : "border-white/8 bg-white/[0.03] text-[#f5efe4] hover:border-[#c9a961]/28 hover:bg-[#c9a961]/10 hover:text-[#f5efe4]"
                  }`}
                  aria-label={item.name}
                  title={item.name}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="fixed bottom-5 right-5 z-50 lg:hidden">
        <AnimatePresence mode="wait">
          {!open ? (
            <motion.button
              key="open-button"
              initial={{ opacity: 0, y: 18, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.94 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(true)}
              className="flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a961]/18 bg-[#0a0a0a]/90 text-[#f5efe4] shadow-[0_14px_35px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <IoChevronUpOutline size={24} />
            </motion.button>
          ) : (
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 18, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              className="w-[74px] rounded-[24px] border border-[#c9a961]/14 bg-[#0a0a0a]/92 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.42)] backdrop-blur-xl"
            >
              <div className="mb-2 flex justify-center">
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] text-[#f5efe4]"
                >
                  <IoClose size={20} />
                </button>
              </div>

              <div className="flex flex-col items-center gap-2">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 * index }}
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl border transition-all duration-300 ${
                        item.isWhatsapp
                          ? "border-[#25D366]/30 bg-[#25D366]/12 text-[#25D366] hover:bg-[#25D366] hover:text-white"
                          : "border-white/8 bg-white/[0.03] text-[#f5efe4] hover:border-[#c9a961]/28 hover:bg-[#c9a961]/10"
                      }`}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-2 flex justify-center">
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-[#a8a29e] transition hover:text-[#f5efe4]"
                >
                  <IoChevronDownOutline size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
