import { LayoutGrid, Box, Minus, RectangleHorizontal, Circle, Zap, Cpu, Sparkles, Check } from "lucide-react";
const icons = { LayoutGrid, Box, Minus, RectangleHorizontal, Circle, Zap, Cpu, Sparkles };

export default function StepPath({ steps, current, color, onSelect }) {
  return <nav className="mx-auto flex max-w-2xl items-center px-2" aria-label="Build steps">
    {steps.map((step, i) => {
      const Icon = i < current ? Check : (icons[step.icon] || Circle);
      return <div key={i} className="flex flex-1 items-center last:flex-none">
        <button onClick={() => i <= current && onSelect(i)} className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-4 bg-white transition sm:h-16 sm:w-16" style={{ borderColor: i <= current ? color : "#E9D5FF", color: i <= current ? color : "#C4B5FD" }} aria-label={`Step ${i + 1}`}><Icon size={i === current ? 30 : 24} /></button>
        {i < steps.length - 1 && <span className="h-2 flex-1 bg-purple-200"><span className="block h-full transition-all" style={{ background: color, width: i < current ? "100%" : "0%" }} /></span>}
      </div>;
    })}
  </nav>;
}