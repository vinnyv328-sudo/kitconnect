import { useEffect } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

// Splash / loading screen shown before the language picker.
// The gradient background renders immediately (no opacity gate) so there is never a blank screen.
export default function SplashPage({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => onDone(), 2600);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <main
      onClick={onDone}
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(135deg, #E11D48 0%, #9333EA 50%, #2563EB 100%)" }}
    >
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full blur-3xl" style={{ background: "rgba(56,189,248,0.25)" }} />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="drop-shadow-2xl"
        >
          <Image
            src="https://media.base44.com/images/public/6a5d71598673d49d12916a74/83de87f6c_generated_image.png"
            alt="Kit Connect logo"
            fittingType="fit"
            className="h-40 w-40 rounded-3xl bg-white/90 object-contain shadow-2xl sm:h-48 sm:w-48"
          />
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-4xl font-black tracking-tight text-white drop-shadow-lg sm:text-5xl">Kit Connect</h1>
          <p className="mt-2 text-lg font-semibold text-white/80 sm:text-xl">Build · Learn · Explore</p>
        </motion.div>

        {/* Loading spinner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 flex items-center gap-3 text-white/90"
        >
          <div className="h-7 w-7 animate-spin rounded-full border-4 border-white/30 border-t-white" />
          <span className="text-sm font-bold">Loading…</span>
        </motion.div>
      </div>
    </main>
  );
}