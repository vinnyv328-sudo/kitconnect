import { useState } from "react";
import { ArrowLeft, PartyPopper } from "lucide-react";
import StepPath from "@/components/StepPath";
import StepCard from "@/components/StepCard";
import HelpPanel from "@/components/HelpPanel";
import { words } from "@/lib/kitContent";

export default function BuildGuide({ kit, language, onBack }) {
  const [current, setCurrent] = useState(0), [help, setHelp] = useState(false), [done, setDone] = useState(false);
  const t = words[language], step = kit.steps[current];
  if (done) return <main className="min-h-screen grid place-items-center p-5 text-center" style={{ background: "linear-gradient(135deg, #E11D48 0%, #9333EA 50%, #2563EB 100%)" }}><section><PartyPopper className="mx-auto text-white drop-shadow-lg" size={96} /><h1 className="mt-5 text-4xl font-black text-white drop-shadow-lg sm:text-6xl">{t.done}</h1><p className="mt-3 text-2xl font-bold text-white/90">{kit.model[language]}</p><button onClick={onBack} className="mt-8 rounded-2xl bg-white px-7 py-5 text-xl font-black text-[#9333EA] shadow-lg">{t.another}</button></section></main>;
  return <main className="min-h-screen p-3 pb-10 sm:p-6" style={{ background: "linear-gradient(135deg, #E11D48 0%, #9333EA 50%, #2563EB 100%)" }}>
    <header className="mx-auto mb-5 flex max-w-5xl items-center gap-4"><button onClick={onBack} className="round-button" aria-label={t.back}><ArrowLeft size={28} /></button><div><small className="font-bold text-white/80">{kit.name}</small><h1 className="text-xl font-black text-white drop-shadow sm:text-3xl">{kit.model[language]}</h1></div></header>
    <StepPath steps={kit.steps} current={current} color={kit.color} onSelect={setCurrent} />
    <StepCard step={step} index={current} total={kit.steps.length} language={language} color={kit.color} pdfUrl={kit.pdfUrl} onHelp={() => setHelp(true)} onPrevious={() => setCurrent(v => Math.max(0, v - 1))} onNext={() => current === kit.steps.length - 1 ? setDone(true) : setCurrent(v => v + 1)} />
    {help && <HelpPanel language={language} text={step.help[language]} step={step} kitName={kit.model[language]} onClose={() => setHelp(false)} />}
  </main>;
}