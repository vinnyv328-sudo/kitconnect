import { motion } from "framer-motion";

// Kid-style animated drawing of a catapult, slightly LEGO-inspired.
// Wobbly outlines, bright colors, bouncy animation, hand places the last brick.
export default function CatapultThumbnail({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Catapult">
      <defs>
        <linearGradient id="cBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>
        <linearGradient id="cArm" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDBA74" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
        <linearGradient id="cHub" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAFAFA" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="cBucket" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="cSleeve" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A5B4FC" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
      </defs>

      {/* Wobbly ground line */}
      <motion.path
        d="M20 182 Q60 178 100 182 T180 182"
        stroke="#94A3B8" strokeWidth="3" fill="none" strokeLinecap="round"
        animate={{ d: ["M20 182 Q60 178 100 182 T180 182", "M20 182 Q60 186 100 182 T180 182", "M20 182 Q60 178 100 182 T180 182"] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />

      {/* Bouncy shadow */}
      <motion.ellipse
        cx="100" cy="184" rx="68" ry="5" fill="#000" opacity="0.07"
        animate={{ rx: [68, 62, 68] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
      />

      {/* Whole catapult bounces gently */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 2.8, ease: "easeInOut" }}
      >
        {/* Wheels */}
        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          style={{ transformOrigin: "52px 162px" }}
        >
          <circle cx="52" cy="162" r="16" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <circle cx="52" cy="162" r="8" fill="#64748B" />
          <line x1="52" y1="150" x2="52" y2="174" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="40" y1="162" x2="64" y2="162" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="52" cy="162" r="3" fill="#1E293B" />
        </motion.g>
        <motion.g
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
          style={{ transformOrigin: "148px 162px" }}
        >
          <circle cx="148" cy="162" r="16" fill="#1E293B" stroke="#0F172A" strokeWidth="3" />
          <circle cx="148" cy="162" r="8" fill="#64748B" />
          <line x1="148" y1="150" x2="148" y2="174" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="136" y1="162" x2="160" y2="162" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="148" cy="162" r="3" fill="#1E293B" />
        </motion.g>

        {/* Base plate (rounded, kid-drawn) */}
        <rect x="30" y="140" width="140" height="14" rx="7" fill="url(#cBody)" stroke="#16A34A" strokeWidth="3" />
        {[
          [40, 140], [54, 140], [68, 140], [82, 140], [96, 140],
          [110, 140], [124, 140], [138, 140], [152, 140]
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.5" fill="#22C55E" stroke="#16A34A" strokeWidth="1.5" />
        ))}

        {/* Smart Hub (rounded box with face) */}
        <rect x="66" y="94" width="68" height="46" rx="10" fill="url(#cHub)" stroke="#94A3B8" strokeWidth="3" />
        <rect x="73" y="100" width="54" height="12" rx="6" fill="#22C55E" stroke="#16A34A" strokeWidth="2" />
        <circle cx="80" cy="106" r="2.5" fill="#FFFFFF" opacity="0.8" />
        {/* Cute face on hub */}
        <circle cx="84" cy="124" r="3" fill="#17324D" />
        <circle cx="116" cy="124" r="3" fill="#17324D" />
        <motion.path
          d="M88 130 Q100 136 112 130"
          stroke="#17324D" strokeWidth="2.5" fill="none" strokeLinecap="round"
          animate={{ d: ["M88 130 Q100 136 112 130", "M88 132 Q100 128 112 132", "M88 130 Q100 136 112 130"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />

        {/* Motor (left, blobby) */}
        <rect x="34" y="106" width="30" height="28" rx="8" fill="#94A3B8" stroke="#475569" strokeWidth="3" />
        <circle cx="49" cy="120" r="9" fill="#475569" stroke="#1E293B" strokeWidth="2" />
        <circle cx="49" cy="120" r="4" fill="#1E293B" />
        <path d="M64 120 Q70 98 74 102" stroke="#1E293B" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Fulcrum (chunky triangle) */}
        <polygon points="100,94 84,140 116,140" fill="#FB923C" stroke="#EA580C" strokeWidth="3" strokeLinejoin="round" />
        <polygon points="100,100 91,136 109,136" fill="#FDBA74" />

        {/* Throwing arm (rocks with a bounce) */}
        <motion.g
          style={{ transformOrigin: "100px 136px" }}
          animate={{ rotate: [0, -16, 2, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
        >
          <rect x="94" y="48" width="12" height="92" rx="6" fill="url(#cArm)" stroke="#EA580C" strokeWidth="3" />
          <circle cx="100" cy="58" r="3" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
          <circle cx="100" cy="74" r="3" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
          <circle cx="100" cy="90" r="3" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />
          {/* Bucket */}
          <rect x="84" y="38" width="32" height="16" rx="5" fill="url(#cBucket)" stroke="#1D4ED8" strokeWidth="3" />
          <rect x="87" y="40" width="26" height="4" rx="2" fill="#93C5FD" />
          {/* Projectile (bouncy ball) */}
          <motion.g
            animate={{ y: [0, -2, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          >
            <circle cx="100" cy="34" r="8" fill="#FBBF24" stroke="#F59E0B" strokeWidth="2.5" />
            <circle cx="97" cy="31" r="2.5" fill="#FEF3C7" />
          </motion.g>
        </motion.g>
      </motion.g>

      {/* Placed brick (appears after hand places it) */}
      <motion.g
        animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.1, 1, 1] }}
        style={{ transformOrigin: "133px 82px" }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeOut", times: [0, 0.35, 0.42, 0.5, 1] }}
      >
        <rect x="124" y="76" width="18" height="14" rx="4" fill="#EF4444" stroke="#DC2626" strokeWidth="2.5" />
        <circle cx="128.5" cy="76" r="3" fill="#FCA5A5" stroke="#DC2626" strokeWidth="1.5" />
        <circle cx="137.5" cy="76" r="3" fill="#FCA5A5" stroke="#DC2626" strokeWidth="1.5" />
      </motion.g>

      {/* Hand reaching in to place the brick */}
      <motion.g
        animate={{ x: [160, 0, 0, 160], opacity: [0, 1, 1, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", times: [0, 0.3, 0.35, 0.5] }}
      >
        {/* Sleeve */}
        <rect x="170" y="62" width="50" height="22" rx="10" fill="url(#cSleeve)" stroke="#4F46E5" strokeWidth="2.5" />
        <rect x="170" y="62" width="50" height="8" rx="4" fill="#C7D2FE" />
        {/* Wrist cuff */}
        <rect x="164" y="60" width="10" height="26" rx="4" fill="#4F46E5" stroke="#3730A3" strokeWidth="2" />
        {/* Hand (puffy cartoon style) */}
        <ellipse cx="156" cy="76" rx="15" ry="13" fill="#FDE0C4" stroke="#E8A87C" strokeWidth="2.5" />
        {/* Thumb */}
        <ellipse cx="148" cy="64" rx="5" ry="7" fill="#FDE0C4" stroke="#E8A87C" strokeWidth="2.5" />
        {/* Fingers gripping brick */}
        <rect x="144" y="70" width="6" height="13" rx="3" fill="#FDE0C4" stroke="#E8A87C" strokeWidth="2" />
        <rect x="137" y="72" width="6" height="12" rx="3" fill="#FDE0C4" stroke="#E8A87C" strokeWidth="2" />
        {/* Brick in hand */}
        <rect x="124" y="76" width="18" height="14" rx="4" fill="#EF4444" stroke="#DC2626" strokeWidth="2.5" />
        <circle cx="128.5" cy="76" r="3" fill="#FCA5A5" stroke="#DC2626" strokeWidth="1.5" />
        <circle cx="137.5" cy="76" r="3" fill="#FCA5A5" stroke="#DC2626" strokeWidth="1.5" />
      </motion.g>

      {/* Sparkle stars */}
      <motion.g
        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
        style={{ transformOrigin: "60px 50px" }}
      >
        <path d="M60 44 L62 50 L68 52 L62 54 L60 60 L58 54 L52 52 L58 50 Z" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1.5" />
      </motion.g>
      <motion.g
        animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.5 }}
        style={{ transformOrigin: "150px 30px" }}
      >
        <path d="M150 25 L151 29 L155 30 L151 31 L150 35 L149 31 L145 30 L149 29 Z" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1" />
      </motion.g>
    </svg>
  );
}