import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, Wand2, Lock } from "lucide-react";
import { words } from "@/lib/kitContent";
import FlowerThumbnail from "@/components/thumbnails/FlowerThumbnail";

function FloatingBrick({ className, color, delay, size = 44 }) {
  return (
    <motion.div
      className={`pointer-events-none absolute ${className}`}
      initial={{ y: 0, rotate: -8 }}
      animate={{ y: [0, -14, 0], rotate: [-8, 8, -8] }}
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

function Sparkle({ className, delay, size = 14 }) {
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

// PDF cover pages for each kit (page 1 = cover image from official PDF)
const kitPdfCovers = {
  frog: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/84a6796fa_FROG.pdf", page: 1, image: "https://media.base44.com/images/public/6a5d71598673d49d12916a74/f41e4b630_Screenshot2026-08-04at43518PM.png" },
  milo: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/9e8c0065e_MILO.pdf", page: 1, image: "https://media.base44.com/images/public/6a5d71598673d49d12916a74/8147b05c9_MILO.png" },
  flower: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/0a5c538e7_Flower.pdf", page: 1, image: "https://media.base44.com/images/public/6a5d71598673d49d12916a74/0fa40d952_Flower.png" },
  helicopter: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/3494b9c36_Helicopter_compressed.pdf", page: 1, image: "https://media.base44.com/images/public/6a5d71598673d49d12916a74/a90769fb0_Helicopter.png" },
  pulling: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/a44ba99f6_Pulling.pdf", page: 1, image: "https://media.base44.com/images/public/6a5d71598673d49d12916a74/b1aeac276_PULLING.png" },
  racecar: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/174cbe326_RaceCar.pdf", page: 1, image: "https://media.base44.com/images/public/6a5d71598673d49d12916a74/47f436bdb_RACECAR.png" },
  recyclingtruck: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/2e13d78f9_RecyclingTruck.pdf", page: 1, image: "https://media.base44.com/images/public/6a5d71598673d49d12916a74/6016800a8_RECYCLINGTRUCK.png" },
  drivingbase1: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/f73ac5493_DrivingBase1_compressed.pdf", page: 1, image: "https://media.base44.com/images/public/6a5d71598673d49d12916a74/71bbe0eae_Screenshot2026-08-27at62652PM.png" },
  hopper: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/b30483e86_Hopper_compressed.pdf", page: 1, image: "https://media.base44.com/images/public/6a5d71598673d49d12916a74/40f4ab1cf_HOPPERSPIKE.png" },
  rhino: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/bb6c06960_Rhino_compressed.pdf", page: 1, image: "https://media.base44.com/images/public/6a5d71598673d49d12916a74/2dce939b5_Screenshot2026-08-27at61601PM.png", eraseIcon: true },
  grabber: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/f0bb3797f_Grabber1_compressed.pdf", page: 1 },
  grabber2: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/53f4c4b21_Grabber2.pdf", page: 1 },
  grabbers: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/e9b2c6d95_Grabbers_compressed.pdf", page: 1 },
  kikithedog: { url: "https://media.base44.com/files/public/6a5d71598673d49d12916a74/2373dc299_KikiTheDog_compressed.pdf", page: 1 },
};

const kitDescriptions = {
  frog: { en: "A hopping frog with gears and a motor!", es: "¡Una rana que salta con engranajes y motor!" },
  flower: { en: "A flower robot with spinning leaves!", es: "¡Una flor robot con hojas giratorias!" },
  helicopter: { en: "A helicopter with spinning rotors!", es: "¡Un helicóptero con rotores giratorios!" },
  milo: { en: "A science rover with a sensor eye!", es: "¡Un rover científico con un ojo sensor!" },
  pulling: { en: "A robot that pulls a cart!", es: "¡Un robot que jala un carrito!" },
  racecar: { en: "A fast race car with a motor!", es: "¡Un auto de carreras con motor!" },
  recyclingtruck: { en: "A truck that dumps recycling!", es: "¡Un camión que vuelca reciclaje!" },
  hopper: { en: "A SPIKE Prime robot that hops!", es: "¡Un robot SPIKE Prime que salta!" },
  rhino: { en: "A rhino robot with drive wheels!", es: "¡Un robot rinoceronte con ruedas!" },
  grabber: { en: "A motorized claw that opens and closes!", es: "¡Una garra motorizada que abre y cierra!" },
  grabber2: { en: "A vertical grabber arm with a drive wheel!", es: "¡Un brazo pinza vertical con rueda motriz!" },
  grabbers: { en: "A big double-arm claw that opens and closes!", es: "¡Una gran garra de dos brazos que abre y cierra!" },
  kikithedog: { en: "A cute dog robot with a color sensor nose!", es: "¡Un lindo robot perro con nariz sensora de color!" },
};

function KitCard({ kit, cover, language, index, onChoose }) {
  return (
    <motion.button
      key={kit.id}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => onChoose(kit)}
      className="group overflow-hidden rounded-[2rem] bg-white text-left shadow-xl"
    >
      <div className={`relative flex w-full items-center justify-center overflow-hidden bg-white ${cover ? 'aspect-[1306/896]' : 'aspect-[3/4]'}`}>
        {cover?.image ? (
          <img src={cover.image} alt={kit.model[language]} className={`h-full w-full ${cover.eraseIcon ? 'object-contain' : 'object-cover'}`} style={{ transform: cover.zoom ? `scale(${cover.zoom})` : undefined, objectPosition: cover.objectPosition || 'center', transformOrigin: cover.objectPosition || 'center' }} />
        ) : cover ? (
          <>
            <iframe
              src={`${cover.url}#page=${cover.page}&toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              className="h-full w-full border-0"
              scrolling="no"
              style={{ touchAction: 'none', overflow: 'hidden' }}
              title={kit.model[language]}
            />
            <div className="absolute inset-0 bg-transparent" />
          </>
        ) : kit.id === "flower" ? (
          <FlowerThumbnail className="h-full w-full p-4 drop-shadow-lg" />
        ) : null}
        {cover?.eraseIcon && <div className="pointer-events-none absolute bg-white" style={cover.eraseBox ? { left: cover.eraseBox.left, top: cover.eraseBox.top, width: cover.eraseBox.width, height: cover.eraseBox.height } : { left: 0, top: 0, width: '15%', height: '18%' }} />}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-white to-transparent" />
      </div>
      <span className="flex items-center gap-4 p-5">
        <span className="min-w-0 flex-1">
          <small className="block font-bold text-slate-500">{kit.name}</small>
          <strong className="block truncate text-2xl text-[#17324D]">{kit.model[language]}</strong>
          {kitDescriptions[kit.id] && <span className="mt-1 block text-sm font-semibold text-slate-500">{kitDescriptions[kit.id][language]}</span>}
        </span>
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="shrink-0 text-purple-500"
        >
          <ChevronRight size={36} />
        </motion.span>
      </span>
    </motion.button>
  );
}

export default function KitPicker({ language, kits, onChoose, onAICreate, onBack }) {
  const t = words[language];
  const wedoKits = kits.filter(k => k.category === "wedo");
  const spikeKits = kits.filter(k => k.category === "spike");

  return (
    <main className="relative min-h-screen overflow-hidden p-4 sm:p-8" style={{ background: "linear-gradient(135deg, #E11D48 0%, #9333EA 50%, #2563EB 100%)" }}>
      {/* Soft decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full blur-3xl" style={{ background: "rgba(56,189,248,0.25)" }} />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl" style={{ background: "rgba(250,204,21,0.15)" }} />

      {/* Floating LEGO bricks */}
      <FloatingBrick className="left-[5%] top-[8%]" color="#FCD34D" delay={0} size={40} />
      <FloatingBrick className="right-[6%] top-[12%]" color="#34D399" delay={0.6} size={36} />
      <FloatingBrick className="left-[8%] bottom-[10%]" color="#60A5FA" delay={1.2} size={44} />
      <FloatingBrick className="right-[8%] bottom-[14%]" color="#F472B6" delay={0.3} size={38} />

      {/* Sparkles */}
      <Sparkle className="left-[18%] top-[18%]" delay={0.2} size={16} />
      <Sparkle className="right-[20%] top-[22%]" delay={1} size={12} />
      <Sparkle className="left-[24%] bottom-[16%]" delay={0.5} size={14} />
      <Sparkle className="right-[26%] bottom-[20%]" delay={1.4} size={18} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          whileTap={{ scale: 0.92 }}
          onClick={onBack}
          className="round-button"
          aria-label={t.back}
        >
          <ArrowLeft size={30} />
        </motion.button>

        <motion.h1
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 mt-4 text-center text-3xl font-black text-white drop-shadow-[0_4px_0_rgba(0,0,0,0.2)] sm:text-5xl"
        >
          {t.chooseKit}
        </motion.h1>

        {/* Create with AI — top-level, peer to the sections */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -4, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={onAICreate}
          className="group mb-8 flex w-full items-center gap-5 overflow-hidden rounded-[2rem] border-4 border-white/40 bg-white/15 p-6 text-left backdrop-blur-md transition hover:bg-white/25"
        >
          <motion.span
            animate={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-purple-600 text-white shadow-lg"
          >
            <Wand2 size={40} />
          </motion.span>
          <span className="min-w-0 flex-1">
            <strong className="block text-2xl text-white sm:text-3xl">{t.createMode}</strong>
            <small className="mt-1 block font-semibold text-white/80">{language === "es" ? "Describe tu idea" : "Describe your idea"}</small>
          </span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronRight size={36} className="shrink-0 text-white/80" />
          </motion.span>
        </motion.button>

        {/* WeDo 2.0 section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8"
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-xl font-black text-white backdrop-blur-md sm:text-2xl"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="h-3 w-3 rounded-full bg-amber-300"
            />
            {t.wedoSection}
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {wedoKits.map((kit, i) => (
              <KitCard key={kit.id} kit={kit} cover={kitPdfCovers[kit.id]} language={language} index={i} onChoose={onChoose} />
            ))}
          </div>
        </motion.section>

        {/* Spike Prime section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2 text-xl font-black text-white backdrop-blur-md sm:text-2xl"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="h-3 w-3 rounded-full bg-sky-300"
            />
            {t.spikeSection}
          </motion.h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {spikeKits.map((kit, i) => (
              <KitCard key={kit.id} kit={kit} cover={kitPdfCovers[kit.id]} language={language} index={i} onChoose={onChoose} />
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + spikeKits.length * 0.08 }}
              className="flex flex-col items-center justify-center gap-3 rounded-[2rem] border-4 border-dashed border-white/40 bg-white/10 p-10 text-center backdrop-blur-md"
            >
              <motion.span
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="grid h-16 w-16 place-items-center rounded-2xl bg-white/20 text-white"
              >
                <Lock size={32} />
              </motion.span>
              <strong className="text-xl text-white">{t.comingSoon}</strong>
              <small className="font-semibold text-white/70">{t.comingSoonDesc}</small>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}