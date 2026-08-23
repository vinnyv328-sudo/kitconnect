import { useState } from "react";
import { Wand2, ArrowLeft, Loader2 } from "lucide-react";
import { words } from "@/lib/kitContent";

const buildAiResponse = async (prompt, language) => {
  const response = await fetch('/api/ai/build', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, language }),
  });

  if (!response.ok) {
    throw new Error('AI request failed');
  }

  return response.json();
};

export default function AICreator({ language, onStartBuild, onBack }) {
  const t = words[language];
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError("");
    try {
      const result = await buildAiResponse(prompt, language);

      const kit = {
        id: "ai-" + Date.now(),
        name: language === "es" ? "Creación con IA" : "AI Creation",
        model: result.model,
        color: result.color || "#6C63FF",
        steps: result.steps
      };
      onStartBuild(kit);
    } catch {
      setError(language === "es" ? "Algo salió mal. ¡Intenta de nuevo!" : "Something went wrong. Try again!");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen p-4 sm:p-8" style={{ background: "linear-gradient(135deg, #E11D48 0%, #9333EA 50%, #2563EB 100%)" }}>
      <div className="mx-auto max-w-2xl">
        <button onClick={onBack} className="round-button mb-6" aria-label={t.back}><ArrowLeft size={28} /></button>
        <div className="rounded-[2rem] bg-white p-6 shadow-[0_10px_0_#9333EA] sm:p-8">
          <div className="mb-6 flex items-center gap-4">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-rose-500 to-purple-600 text-white"><Wand2 size={34} /></span>
            <div>
              <h1 className="text-2xl font-black text-[#17324D] sm:text-3xl">{t.createMode}</h1>
              <p className="mt-1 font-semibold text-slate-500">
                {language === "es"
                  ? "Describe tu idea y la IA creará instrucciones originales para construirla."
                  : "Describe your idea and AI will create original LEGO instructions to build it."}
              </p>
            </div>
          </div>

          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder={t.createPrompt}
            rows={4}
            className="w-full rounded-2xl border-4 border-purple-200 bg-purple-50 p-4 text-lg font-semibold text-[#17324D] outline-none focus:border-purple-500 resize-none"
            disabled={loading}
          />

          {error && <p className="mt-3 text-center font-bold text-red-500">{error}</p>}

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl py-5 text-xl font-black text-white disabled:opacity-40"
            style={{ background: "linear-gradient(135deg, #E11D48, #9333EA)" }}
          >
            {loading ? <><Loader2 size={26} className="animate-spin" />{t.creating}</> : <><Wand2 size={26} />{t.createBtn}</>}
          </button>

          <div className="mt-6 rounded-2xl bg-gradient-to-r from-rose-50 to-purple-50 p-4">
            <p className="text-sm font-bold text-purple-600">
              {language === "es"
                ? "💡 Ejemplos: \"un coche de carreras rojo\", \"un cohete espacial\", \"una granja con animales\""
                : "💡 Examples: \"a red race car\", \"a space rocket\", \"a farm with animals\""}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}