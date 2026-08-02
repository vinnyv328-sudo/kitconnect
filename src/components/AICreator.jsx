import { useState } from "react";
import { Wand2, ArrowLeft, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { words } from "@/lib/kitContent";

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
      const result = await base44.integrations.Core.InvokeLLM({
        prompt: `You are a LEGO Education build instructor for children ages 6-10. 
A child describes their LEGO idea: "${prompt}"

Create a complete, fun LEGO build with 6-10 clear steps. Each step adds one type of piece at a time, just like official LEGO manuals.

Respond with JSON only in this exact format:
{
  "model": { "en": "English model name", "es": "Spanish model name" },
  "color": "#hexcolor",
  "steps": [
    {
      "icon": "LayoutGrid",
      "caption": { "en": "Short English caption", "es": "Short Spanish caption" },
      "parts": [
        { "emoji": "🟦", "count": 2, "en": "Piece name in English", "es": "Piece name in Spanish" }
      ],
      "attach": [
        {
          "x": 50, "y": 50,
          "en": "Short location label", "es": "Short Spanish label",
          "detail": {
            "en": "Precise placement instruction in English",
            "es": "Precise placement instruction in Spanish"
          }
        }
      ],
      "help": {
        "en": "Detailed 2-3 sentence help text in English for a child who is stuck",
        "es": "Detailed 2-3 sentence help text in Spanish for a child who is stuck"
      }
    }
  ]
}

Use only standard LEGO pieces (plates, bricks, beams, axles, wheels, slopes). Icon must be one of: LayoutGrid, RectangleHorizontal, Circle, Box, Shapes, Zap, Sparkles, Users, Pin, Minus, Cpu.`,
        response_json_schema: {
          type: "object",
          properties: {
            model: { type: "object", properties: { en: { type: "string" }, es: { type: "string" } } },
            color: { type: "string" },
            steps: { type: "array" }
          }
        }
      });

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