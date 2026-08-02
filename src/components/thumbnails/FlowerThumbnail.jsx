export default function FlowerThumbnail({ className }) {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="flBodyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6EE86E" />
          <stop offset="100%" stopColor="#3CAF3C" />
        </linearGradient>
        <linearGradient id="flPetalGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60C8F0" />
          <stop offset="100%" stopColor="#2589D0" />
        </linearGradient>
        <radialGradient id="flGearGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9E9E9E" />
          <stop offset="100%" stopColor="#555" />
        </radialGradient>
      </defs>

      {/* ── Base frame ── */}
      <rect x="10" y="90" width="145" height="18" rx="4" fill="url(#flBodyGrad)" />
      <rect x="10" y="104" width="145" height="8" rx="3" fill="#2D8A2D" />

      {/* White plates on frame */}
      <rect x="12" y="88" width="60" height="4" rx="2" fill="#E8E8E8" />
      <rect x="78" y="88" width="75" height="4" rx="2" fill="#E8E8E8" />

      {/* ── Smart Hub (white box) ── */}
      <rect x="48" y="68" width="65" height="24" rx="5" fill="#D8D8D8" stroke="#BBBBB" strokeWidth="1" />
      <rect x="52" y="72" width="57" height="16" rx="3" fill="#EEEEEE" />
      <circle cx="80" cy="80" r="5" fill="#4CAF50" />

      {/* ── Motor unit (right side) ── */}
      <rect x="132" y="62" width="30" height="30" rx="5" fill="#C0C0C0" stroke="#999" strokeWidth="1" />
      <circle cx="147" cy="77" r="10" fill="url(#flGearGrad)" />
      <circle cx="147" cy="77" r="5" fill="#333" />
      {/* Gear teeth */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 147 + Math.cos(rad) * 12;
        const y = 77 + Math.sin(rad) * 12;
        return <circle key={i} cx={x} cy={y} r="2.5" fill="#555" />;
      })}

      {/* Motor cable arc */}
      <path d="M 80 68 Q 80 45 100 50 Q 120 55 132 62" stroke="#333" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* ── Leaf / petal panel (left side, standing tall) ── */}
      <rect x="14" y="28" width="32" height="62" rx="4" fill="url(#flPetalGrad)" />
      <rect x="16" y="30" width="28" height="58" rx="3" fill="#F5A623" opacity="0.85" />
      {/* Stud rows on petal */}
      {[34,40,46,52,58,64,70,76,82].map((y, i) => (
        <circle key={i} cx="30" cy={y} r="3.5" fill="#E8941A" />
      ))}
      {[34,40,46,52,58,64,70,76,82].map((y, i) => (
        <circle key={i + 10} cx="38" cy={y} r="3.5" fill="#E8941A" />
      ))}

      {/* ── Green leaf arm (curved green slopes) ── */}
      <ellipse cx="22" cy="70" rx="12" ry="28" fill="#5DC85D" transform="rotate(-20 22 70)" />
      <ellipse cx="44" cy="73" rx="12" ry="24" fill="#5DC85D" transform="rotate(25 44 73)" />

      {/* Spinning joint / red gear */}
      <circle cx="28" cy="90" r="7" fill="#E53935" />
      <circle cx="28" cy="90" r="4" fill="#B71C1C" />
      {[0,60,120,180,240,300].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x = 28 + Math.cos(rad) * 8.5;
        const y = 90 + Math.sin(rad) * 8.5;
        return <circle key={i} cx={x} cy={y} r="2" fill="#D32F2F" />;
      })}

      {/* ── Little friend (bug-like figure on arm) ── */}
      {/* Arm rods */}
      <line x1="100" y1="62" x2="130" y2="40" stroke="#3CAF3C" strokeWidth="3" strokeLinecap="round" />
      <line x1="130" y1="40" x2="155" y2="55" stroke="#3CAF3C" strokeWidth="3" strokeLinecap="round" />
      {/* Friend body */}
      <rect x="148" y="28" width="26" height="16" rx="4" fill="#1565C0" />
      <rect x="150" y="22" width="22" height="8" rx="3" fill="#111" />
      {/* Eyes */}
      <circle cx="157" cy="36" r="5" fill="white" />
      <circle cx="157" cy="36" r="2.5" fill="#111" />
      {/* Antenna */}
      <line x1="165" y1="28" x2="170" y2="18" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="170" cy="17" r="2" fill="#555" />
      <line x1="155" y1="28" x2="150" y2="18" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="150" cy="17" r="2" fill="#555" />

      {/* Orange/turquoise colorful feet */}
      <rect x="148" y="90" width="22" height="10" rx="3" fill="#F5A623" />
      <rect x="150" y="84" width="8" height="8" rx="2" fill="#26C6DA" />
      <rect x="160" y="84" width="8" height="8" rx="2" fill="#26C6DA" />
    </svg>
  );
}