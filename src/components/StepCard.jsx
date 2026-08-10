import { useState } from "react";
import { ArrowLeft, ArrowRight, LifeBuoy, Volume2, Square } from "lucide-react";
import { words } from "@/lib/kitContent";
import AttachmentOverlay from "@/components/AttachmentOverlay";
import PartsCallout from "@/components/PartsCallout";
import FullscreenViewer from "@/components/FullscreenViewer";

export default function StepCard({ step, index, total, language, color, pdfUrl, onHelp, onNext, onPrevious }) {
  const t = words[language];
  const [speaking, setSpeaking] = useState(false);
  const buildScript = () => {
    const isEs = language === "es";
    const partsLine = step.parts.length > 0
      ? `${t.parts}: ${step.parts.map(p => `${p.count} ${p[language]}`).join(", ")}. `
      : "";
    const caption = step.caption[language];
    const helpText = step.help[language];
    const stepLabel = isEs ? `Paso ${index + 1} de ${total}` : `Step ${index + 1} of ${total}`;
    return `${stepLabel}. ... ${caption}. ... ${partsLine}${helpText}`;
  };
  const speak = () => {
    if (speaking) { speechSynthesis.cancel(); setSpeaking(false); return; }
    speechSynthesis.cancel();
    const isEs = language === "es";
    const utter = new SpeechSynthesisUtterance(buildScript());
    utter.lang = isEs ? "es-MX" : "en-US";
    utter.rate = 0.88;
    utter.pitch = 1.05;

    // Try to pick a natural-sounding voice
    const voices = speechSynthesis.getVoices();
    const preferred = isEs
      ? voices.find(v => v.lang.startsWith("es") && !v.name.includes("compact"))
      : voices.find(v => v.lang.startsWith("en") && (v.name.includes("Samantha") || v.name.includes("Karen") || v.name.includes("Daniel") || v.name.includes("Google")));
    if (preferred) utter.voice = preferred;

    utter.onend = () => setSpeaking(false);
    utter.onerror = () => setSpeaking(false);
    setSpeaking(true);
    speechSynthesis.speak(utter);
  };
  return <section className="mx-auto mt-6 max-w-3xl rounded-[2rem] bg-white p-4 shadow-[0_10px_0_#9333EA] sm:p-6">
    <div className="mb-3 flex items-center justify-between"><strong className="text-lg text-slate-500">{t.step} {index + 1} {t.of} {total}</strong><button onClick={speak} className="flex min-h-12 items-center gap-2 rounded-full bg-purple-100 px-5 font-black text-purple-700">{speaking ? <><Square /> {t.stop}</> : <><Volume2 /> {t.listen}</>}</button></div>
    <PartsCallout parts={step.parts} language={language} color={color} />
    {step.pdfPage && pdfUrl ? (
      <div className="relative w-full overflow-hidden rounded-2xl bg-white" style={{ height: '400px' }}>
        <FullscreenViewer pdfUrl={pdfUrl} pdfPage={step.pdfPage} title={step.caption[language]} language={language} />
        <iframe
          src={`${pdfUrl}#page=${step.pdfPage}&toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
          className="w-full h-full border-0 rounded-2xl"
          scrolling="no"
          style={{ touchAction: 'none', overflow: 'hidden' }}
          title={step.caption[language]}
        />
        <div className="pointer-events-none absolute inset-0" />
        <AttachmentOverlay points={step.attach} color={color} language={language} />
      </div>
    ) : step.image ? (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-slate-50">
        <FullscreenViewer image={step.image} title={step.caption[language]} language={language} />
        <img src={step.image} alt={step.caption[language]} className="h-full w-full object-contain" />
        <AttachmentOverlay points={step.attach} color={color} language={language} />
      </div>
    ) : (
      <div className="grid place-items-center rounded-2xl bg-[#FFF8EB] p-8 text-center" style={{ minHeight: '120px' }}>
        <p className="text-lg font-bold text-[#34506A]">{language === "es" ? "Revisa las piezas de arriba y sigue las instrucciones" : "Check the parts above and follow along"}</p>
      </div>
    )}
    <p className="my-5 text-center text-2xl font-black text-[#17324D] sm:text-3xl">{step.caption[language]}</p>
    <button onClick={onHelp} className="mb-4 flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl border-4 border-purple-500 bg-purple-50 text-xl font-black text-purple-800"><LifeBuoy size={30} />{t.stuck}</button>
    <div className="grid grid-cols-2 gap-3"><button onClick={onPrevious} disabled={index === 0} className="nav-button bg-slate-100 text-[#17324D] disabled:opacity-30"><ArrowLeft />{t.previous}</button><button onClick={onNext} className="nav-button text-white" style={{ background: color }}>{index === total - 1 ? t.finish : t.next}<ArrowRight /></button></div>
  </section>;
}