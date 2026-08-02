import { useState } from "react";
import { X, Maximize2 } from "lucide-react";

export default function FullscreenViewer({ pdfUrl, pdfPage, image, title, language }) {
  const [open, setOpen] = useState(false);
  const t = language === "es" ? { close: "Cerrar", expand: "Pantalla completa" } : { close: "Close", expand: "Fullscreen" };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-[#17324D] shadow-lg transition active:scale-95 hover:bg-white"
        aria-label={t.expand}
        title={t.expand}
      >
        <Maximize2 size={22} />
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black/95" onClick={() => setOpen(false)}>
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 z-10 grid h-14 w-14 place-items-center rounded-full bg-white text-[#17324D] shadow-lg transition active:scale-95"
            aria-label={t.close}
          >
            <X size={28} />
          </button>
          <div className="flex flex-1 items-center justify-center p-2 sm:p-6" onClick={e => e.stopPropagation()}>
            {pdfUrl && pdfPage ? (
              <iframe
                src={`${pdfUrl}#page=${pdfPage}&toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
                className="h-full w-full max-w-4xl rounded-2xl border-0 bg-white"
                title={title}
              />
            ) : image ? (
              <img src={image} alt={title} className="h-full w-full max-w-4xl rounded-2xl object-contain" />
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}