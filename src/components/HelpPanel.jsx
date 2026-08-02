import { useState } from "react";
import { LifeBuoy, X, MessageCircle, Send, Loader2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { words } from "@/lib/kitContent";

export default function HelpPanel({ language, text, step, kitName, onClose }) {
  const t = words[language];
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question.trim() || loading) return;
    setLoading(true);
    setAnswer("");
    try {
      const partsList = (step?.parts || []).map(p => `${p.count} ${p[language]}`).join(", ");
      const context = `Kit: ${kitName}\nStep: ${step?.caption?.[language] || ""}\nParts: ${partsList}\nInstructions: ${text}`;
      const result = await base44.integrations.Core.InvokeLLM({
        prompt: `You are a friendly, patient LEGO build helper for children ages 6-10. A child is building a LEGO model and is stuck on a step. 

Answer their question in simple, encouraging words in ${language === "es" ? "Spanish" : "English"}. 
- Use short sentences and simple words a child can understand.
- Be warm, positive, and encouraging.
- If the child asks about a specific piece, describe what it looks like (color, shape, size).
- Keep your answer to 2-3 sentences maximum.

Context about the current step:
${context}

Child's question: ${question}`
      });
      setAnswer(typeof result === "string" ? result : String(result));
    } catch {
      setAnswer(language === "es" ? "Lo siento, no pude responder ahora. ¡Intenta de nuevo!" : "Sorry, I couldn't answer right now. Try again!");
    }
    setLoading(false);
  };

  return <div className="fixed inset-0 z-50 flex items-end justify-center bg-purple-900/50 p-3 sm:items-center" role="dialog" aria-modal="true">
    <section className="max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8">
      <div className="flex items-start gap-4">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-rose-500 to-purple-600 text-white"><LifeBuoy size={34} /></span>
        <div className="flex-1">
          <h2 className="text-2xl font-black text-[#17324D]">{t.help}</h2>
          <p className="mt-3 text-xl font-semibold leading-relaxed text-slate-700">{text}</p>
        </div>
        <button onClick={onClose} className="p-2" aria-label={t.close}><X size={30} /></button>
      </div>

      <div className="mt-5 rounded-2xl bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2 text-lg font-black text-purple-600"><MessageCircle size={24} /> {t.askAI}</div>
        {answer && <div className="mb-3 rounded-xl bg-gradient-to-r from-rose-50 to-purple-50 p-4 text-lg font-semibold leading-relaxed text-[#17324D]">{answer}</div>}
        <div className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            placeholder={t.askPlaceholder}
            className="min-h-12 flex-1 rounded-xl border-4 border-purple-200 bg-white p-3 text-lg font-semibold text-[#17324D] outline-none focus:border-purple-500"
            disabled={loading}
            onKeyDown={e => e.key === "Enter" && askAI()}
            autoFocus
          />
          <button onClick={askAI} disabled={loading || !question.trim()} className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-purple-600 text-white disabled:opacity-40 active:scale-95">
            {loading ? <Loader2 size={24} className="animate-spin" /> : <Send size={24} />}
          </button>
        </div>
      </div>

      <button onClick={onClose} className="mt-5 w-full rounded-2xl bg-gradient-to-r from-rose-500 to-purple-600 p-4 text-xl font-black text-white">{t.close}</button>
    </section>
  </div>;
}