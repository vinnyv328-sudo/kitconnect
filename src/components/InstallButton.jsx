import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { words } from "@/lib/kitContent";

export default function InstallButton({ language }) {
  const [prompt, setPrompt] = useState(null);
  useEffect(() => { const save = e => { e.preventDefault(); setPrompt(e); }; window.addEventListener("beforeinstallprompt", save); return () => window.removeEventListener("beforeinstallprompt", save); }, []);
  if (!prompt) return null;
  return <button onClick={() => { prompt.prompt(); setPrompt(null); }} className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 px-5 py-3 font-black text-white shadow-lg"><Download size={20} />{words[language].install}</button>;
}