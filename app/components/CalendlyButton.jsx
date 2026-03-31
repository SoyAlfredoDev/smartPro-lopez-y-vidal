"use client";

import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { PopupModal } from "react-calendly";

export default function CalendlyButton({
  title = "Agendar videollamada",
  style = "inline-flex items-center justify-center gap-2 rounded-full border border-[#d2b07a]/30 bg-[linear-gradient(135deg,#d1b07a,#a88652)] px-6 py-3 text-sm font-semibold text-black shadow-[0_12px_40px_rgba(198,164,108,0.18)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_16px_50px_rgba(198,164,108,0.24)]",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={style}>
        <Calendar className="h-4 w-4" />
        {title}
      </button>

      {rootElement && (
        <PopupModal
          url="https://calendly.com/estudiojuridicolyv/online"
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
          rootElement={rootElement}
        />
      )}
    </>
  );
}
