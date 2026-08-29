import { useEffect } from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

// Floating decorative LEGO-style brick
function FloatingBrick({ className, color, delay, size = 48 }) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      initial={{ y: 0, rotate: -8 }}
      animate={{ y: [0, -18, 0], rotate: [-8, 8, -8] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="relative" style={{ width: size, height: size * 0.6 }}>
        <div className="absolute inset-0 rounded-md shadow-lg" style={{ background: color }} />
        {/* Studs */}
        <div className="absolute top-0 left-0 flex w-full justify-around px-1" style={{ top: -size * 0.12 }}>
          {[0, 1].map(i => (
            <div key={i} className="rounded-full" style={{ width: size * 0.22, height: size * 0.22, background: color, boxShadow: "inset 0 -2px 0 rgba(0,0,0,0.15)" }} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Twinkling sparkle
function Sparkle({ className, delay, size = 16 }) {
  return (
    <motion.svg
      className={`pointer-events-none absolute ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0], rotate: [0, 90, 180] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" />
    </motion.svg>
  );
}

// Splash / loading screen shown before the language picker.
export default function SplashPage({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => onDone(), 2800);
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
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl" style={{ background: "rgba(250,204,21,0.18)" }} />

      {/* Floating LEGO bricks */}
      <FloatingBrick className="left-[8%] top-[18%]" color="#FCD34D" delay={0} size={56} />
      <FloatingBrick className="right-[10%] top-[22%]" color="#34D399" delay={0.6} size={48} />
      <FloatingBrick className="left-[14%] bottom-[16%]" color="#60A5FA" delay={1.2} size={64} />
      <FloatingBrick className="right-[12%] bottom-[20%]" color="#F472B6" delay={0.3} size={52} />
      <FloatingBrick className="left-[44%] top-[10%]" color="#FB923C" delay={0.9} size={40} />

      {/* Sparkles */}
      <Sparkle className="left-[22%] top-[30%]" delay={0.2} size={20} />
      <Sparkle className="right-[24%] top-[36%]" delay={1} size={14} />
      <Sparkle className="left-[30%] bottom-[28%]" delay={0.5} size={18} />
      <Sparkle className="right-[28%] bottom-[32%]" delay={1.4} size={22} />
      <Sparkle className="left-[60%] top-[16%]" delay={0.8} size={16} />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-5 p-8 text-center">
        {/* Logo with bouncy entrance */}
        <motion.div
          initial={{ scale: 0.4, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "backOut" }}
          className="relative"
        >
          {/* Pulsing ring behind logo */}
          <motion.div
            className="absolute inset-0 rounded-[2rem] bg-white/30 blur-xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="relative drop-shadow-2xl"
          >
            <Image
              src="https://media.base44.com/images/public/6a5d71598673d49d12916a74/83de87f6c_generated_image.png"
              alt="Kit Connect logo"
              fittingType="fit"
              className="h-40 w-40 rounded-3xl bg-white/90 object-contain shadow-2xl sm:h-48 sm:w-48"
            />
          </motion.div>
        </motion.div>

        {/* Wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
        >
          <h1 className="text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.2)] sm:text-6xl">
            Kit Connect
          </h1>
          <motion.p
            className="mt-3 text-xl font-bold tracking-wide text-white/90 sm:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Build · Learn · Explore
          </motion.p>
        </motion.div>

        {/* Fun tagline chips */}
        <motion.div
          className="mt-2 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, staggerChildren: 0.1 }}
        >
          {["🧱 STEM Builds", "🤖 Robotics", "📚 Bilingual"].map((chip, i) => (
            <motion.span
              key={chip}
              className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold text-white backdrop-blur-md shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.12 }}
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>

        {/* Loading spinner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 flex items-center gap-3 text-white/90"
        >
          <div className="h-7 w-7 animate-spin rounded-full border-4 border-white/30 border-t-white" />
          <span className="text-sm font-bold">Loading…</span>
        </motion.div>

        {/* Tap to skip hint */}
        <motion.p
          className="absolute bottom-6 text-xs font-semibold text-white/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        >
          tap to start
        </motion.p>
      </div>
    </main>
  );
}