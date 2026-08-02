import { Globe2 } from "lucide-react";

export default function LanguagePicker({ onChoose }) {
  return <main className="min-h-screen grid place-items-center p-5" style={{ background: "linear-gradient(135deg, #E11D48 0%, #9333EA 50%, #2563EB 100%)" }}>
    <section className="w-full max-w-3xl text-center">
      <div className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-[2rem] bg-white/20 text-white shadow-lg backdrop-blur-md"><Globe2 size={44} /></div>
      <h1 className="text-3xl font-black text-white drop-shadow-lg sm:text-5xl">Choose · Elige</h1>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <button onClick={() => onChoose("en")} className="choice-card" aria-label="English"><span className="text-7xl" aria-hidden>🇺🇸</span><strong>English</strong></button>
        <button onClick={() => onChoose("es")} className="choice-card" aria-label="Español"><span className="text-7xl" aria-hidden>🇲🇽</span><strong>Español</strong></button>
      </div>
    </section>
  </main>;
}