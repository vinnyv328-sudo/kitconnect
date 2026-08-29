import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";

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
        <div className="absolute left-0 flex w-full justify-around px-1" style={{ top: -size * 0.12 }}>
          {[0, 1].map(i => (
            <div key={i} className="rounded-full" style={{ width: size * 0.22, height: size * 0.22, background: color, boxShadow: "inset 0 -2px 0 rgba(0,0,0,0.15)" }} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

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

export default function LanguagePicker({ onChoose }) {
  return (
    <main className="relative min-h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #E11D48 0%, #9333EA 50%, #2563EB 100%)" }}>
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full blur-3xl" style={{ background: "rgba(56,189,248,0.25)" }} />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl" style={{ background: "rgba(250,204,21,0.18)" }} />

      {/* Floating LEGO bricks */}
      <FloatingBrick className="left-[8%] top-[12%]" color="#FCD34D" delay={0} size={52} />
      <FloatingBrick className="right-[10%] top-[16%]" color="#34D399" delay={0.6} size={44} />
      <FloatingBrick className="left-[12%] bottom-[14%]" color="#60A5FA" delay={1.2} size={56} />
      <FloatingBrick className="right-[12%] bottom-[18%]" color="#F472B6" delay={0.3} size={48} />

      {/* Sparkles */}
      <Sparkle className="left-[22%] top-[28%]" delay={0.2} size={18} />
      <Sparkle className="right-[24%] top-[34%]" delay={1} size={14} />
      <Sparkle className="left-[30%] bottom-[26%]" delay={0.5} size={16} />
      <Sparkle className="right-[28%] bottom-[30%]" delay={1.4} size={20} />

      <section className="relative z-10 grid min-h-screen place-items-center p-5 text-center">
        <div className="w-full max-w-3xl">
          {/* Globe icon with pulse */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: "backOut" }}
            className="relative mx-auto mb-6 grid h-24 w-24 place-items-center rounded-[2rem] bg-white/20 text-white shadow-lg backdrop-blur-md"
          >
            <motion.div
              className="absolute inset-0 rounded-[2rem] bg-white/20 blur-lg"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Globe2 size={48} />
            </motion.div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-black text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.2)] sm:text-6xl"
          >
            Choose · Elige
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2 text-lg font-bold text-white/80 sm:text-xl"
          >
            Pick your language · Elige tu idioma
          </motion.p>

          {/* Language cards */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              { code: "en", flag: "🇺🇸", label: "English", sub: "Let's build!", color: "#FCD34D" },
              { code: "es", flag: "🇲🇽", label: "Español", sub: "¡A construir!", color: "#34D399" },
            ].map((lang, i) => (
              <motion.button
                key={lang.code}
                onClick={() => onChoose(lang.code)}
                aria-label={lang.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15, ease: "backOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="choice-card relative overflow-hidden"
                style={{ boxShadow: `0 10px 0 ${lang.color}` }}
              >
                {/* Decorative corner accent */}
                <div className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full opacity-30" style={{ background: lang.color }} />
                <motion.span
                  className="text-7xl"
                  animate={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                >
                  {lang.flag}
                </motion.span>
                <strong>{lang.label}</strong>
                <small className="block text-base font-bold text-slate-500">{lang.sub}</small>
              </motion.button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}