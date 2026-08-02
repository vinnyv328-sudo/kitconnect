import { useState } from "react";
import { MapPin, X } from "lucide-react";
import { words } from "@/lib/kitContent";

export default function AttachmentOverlay({ points, color, language }) {
  const [active, setActive] = useState(null);
  if (!points || points.length === 0) return null;
  const t = words[language];
  return <>
    <div className="absolute inset-0">
      {points.map((point, i) => (
        <button key={i} onClick={() => setActive(point)} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${point.x}%`, top: `${point.y}%` }} aria-label={point[language]}>
          <span className="flex flex-col items-center gap-1">
            <span className="grid h-11 w-11 animate-bounce place-items-center rounded-full border-4 border-white shadow-lg transition active:scale-90" style={{ background: color }}>
              <MapPin size={22} className="text-white" />
            </span>
            <span className="rounded-full bg-white px-2 py-0.5 text-sm font-black shadow" style={{ color }}>{point[language]}</span>
          </span>
        </button>
      ))}
    </div>
    {active && (
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#17324D]/40 p-4" onClick={() => setActive(null)}>
        <div className="max-w-xs rounded-2xl bg-white p-5 shadow-2xl" onClick={e => e.stopPropagation()}>
          <div className="flex items-start gap-3">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full" style={{ background: color }}><MapPin size={24} className="text-white" /></span>
            <div className="flex-1"><strong className="block text-lg font-black" style={{ color }}>{active[language]}</strong><p className="mt-1 text-base font-semibold text-[#34506A]">{active.detail[language]}</p></div>
            <button onClick={() => setActive(null)} aria-label={t.close}><X size={22} /></button>
          </div>
          <button onClick={() => setActive(null)} className="mt-4 w-full rounded-xl py-3 font-black text-white" style={{ background: color }}>{t.close}</button>
        </div>
      </div>
    )}
  </>;
}