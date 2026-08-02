import { ArrowLeft, ChevronRight, Wand2, Lock } from "lucide-react";
import { words } from "@/lib/kitContent";
import FrogThumbnail from "@/components/thumbnails/FrogThumbnail";
import MiloThumbnail from "@/components/thumbnails/MiloThumbnail";

const thumbnails = { frog: FrogThumbnail, milo: MiloThumbnail };

export default function KitPicker({ language, kits, onChoose, onAICreate, onBack }) {
  const t = words[language];
  const wedoKits = kits.filter(k => k.category === "wedo");

  return (
    <main className="min-h-screen p-4 sm:p-8" style={{ background: "linear-gradient(135deg, #E11D48 0%, #9333EA 50%, #2563EB 100%)" }}>
      <div className="mx-auto max-w-5xl">
        <button onClick={onBack} className="round-button" aria-label={t.back}><ArrowLeft size={30} /></button>
        <h1 className="mb-8 mt-4 text-center text-3xl font-black text-white drop-shadow-lg sm:text-5xl">{t.chooseKit}</h1>

        {/* Create with AI — top-level, peer to the sections */}
        <button onClick={onAICreate} className="group mb-8 flex w-full items-center gap-5 overflow-hidden rounded-[2rem] border-4 border-white/40 bg-white/15 p-6 text-left backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/25">
          <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-lg"><Wand2 size={40} /></span>
          <span className="min-w-0 flex-1">
            <strong className="block text-2xl text-white sm:text-3xl">{t.createMode}</strong>
            <small className="mt-1 block font-semibold text-white/80">{language === "es" ? "Describe tu idea" : "Describe your idea"}</small>
          </span>
          <ChevronRight size={36} className="shrink-0 text-white/80" />
        </button>

        {/* WeDo 2.0 section */}
        <section className="mb-8">
          <h2 className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-xl font-black text-white backdrop-blur-md sm:text-2xl">
            <span className="h-3 w-3 rounded-full bg-amber-300" />{t.wedoSection}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {wedoKits.map(kit => {
              const Thumb = thumbnails[kit.id];
              return (
                <button key={kit.id} onClick={() => onChoose(kit)} className="group overflow-hidden rounded-[2rem] border-4 border-white/40 bg-white text-left shadow-xl transition hover:-translate-y-1">
                  <div className="grid aspect-[4/3] w-full place-items-center bg-gradient-to-br from-purple-100 to-rose-100 p-6">
                    {Thumb ? <Thumb className="h-full w-full drop-shadow-lg" /> : null}
                  </div>
                  <span className="flex items-center gap-4 p-5">
                    <span className="min-w-0 flex-1">
                      <small className="block font-bold text-slate-500">{kit.name}</small>
                      <strong className="block truncate text-2xl text-[#17324D]">{kit.model[language]}</strong>
                    </span>
                    <ChevronRight size={36} className="shrink-0 text-purple-500" />
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Spike Prime section */}
        <section>
          <h2 className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-xl font-black text-white backdrop-blur-md sm:text-2xl">
            <span className="h-3 w-3 rounded-full bg-sky-300" />{t.spikeSection}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col items-center justify-center gap-3 rounded-[2rem] border-4 border-dashed border-white/40 bg-white/10 p-10 text-center backdrop-blur-md">
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/20 text-white"><Lock size={32} /></span>
              <strong className="text-xl text-white">{t.comingSoon}</strong>
              <small className="font-semibold text-white/70">{t.comingSoonDesc}</small>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}