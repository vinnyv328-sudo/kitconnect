import { Package } from "lucide-react";
import { words } from "@/lib/kitContent";

export default function PartsCallout({ parts, language, color }) {
  if (!parts || parts.length === 0) return null;
  const t = words[language];
  return <div className="mb-4 rounded-2xl border-2 border-dashed p-3" style={{ borderColor: color, background: "#FFFDF5" }}>
    <div className="mb-2 flex items-center gap-2 text-sm font-black" style={{ color }}><Package size={18} />{t.parts}</div>
    <div className="flex flex-wrap gap-3">
      {parts.map((part, i) => (
        <div key={i} className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-sm">
          <span className="text-3xl" aria-hidden>{part.emoji}</span>
          <span className="grid h-7 min-w-7 place-items-center rounded-full px-1.5 text-sm font-black text-white" style={{ background: color }}>{part.count}</span>
          <span className="text-sm font-bold text-[#17324D]">{part[language]}</span>
        </div>
      ))}
    </div>
  </div>;
}