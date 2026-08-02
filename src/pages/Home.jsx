import { useState, useEffect } from "react";
import LanguagePicker from "@/components/LanguagePicker";
import KitPicker from "@/components/KitPicker";
import BuildGuide from "@/components/BuildGuide";
import InstallButton from "@/components/InstallButton";
import AICreator from "@/components/AICreator";
import SplashPage from "@/components/SplashPage";
import { kits } from "@/lib/kitContent";

export default function Home() {
  const [language, setLanguage] = useState(() => localStorage.getItem("kitconnect-language") || "");
  const [kit, setKit] = useState(null);
  const [aiMode, setAiMode] = useState(false);
  const [splashDone, setSplashDone] = useState(() => sessionStorage.getItem("kitconnect-splash") === "1");

  const finishSplash = () => { sessionStorage.setItem("kitconnect-splash", "1"); setSplashDone(true); };

  // Clean up any previously registered service workers to prevent blank screens from stale caches
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.getRegistrations()
      .then(regs => Promise.all(regs.map(r => r.unregister().catch(() => {}))))
      .catch(() => {});
    if (typeof caches !== "undefined") {
      caches.keys()
        .then(keys => Promise.all(keys.filter(k => k.startsWith("kitconnect")).map(k => caches.delete(k))))
        .catch(() => {});
    }
  }, []);

  const chooseLanguage = value => { localStorage.setItem("kitconnect-language", value); setLanguage(value); };

  if (!splashDone) return <SplashPage onDone={finishSplash} />;
  if (!language) return <LanguagePicker onChoose={chooseLanguage} />;
  if (aiMode) return <AICreator language={language} onStartBuild={k => { setAiMode(false); setKit(k); }} onBack={() => setAiMode(false)} />;
  return <><InstallButton language={language} />{kit ? <BuildGuide kit={kit} language={language} onBack={() => setKit(null)} /> : <KitPicker language={language} kits={kits} onChoose={setKit} onAICreate={() => setAiMode(true)} onBack={() => { localStorage.removeItem("kitconnect-language"); setLanguage(""); }} />}</>;
}