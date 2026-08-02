// Clean SVG illustration of the Young Frog — not AI-generated, hand-built vector art.
export default function FrogThumbnail({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Young Frog">
      <defs>
        <linearGradient id="frogBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7ED957" />
          <stop offset="100%" stopColor="#4CAF50" />
        </linearGradient>
        <linearGradient id="frogBelly" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#D7F9C4" />
          <stop offset="100%" stopColor="#A5D97F" />
        </linearGradient>
        <radialGradient id="frogEye" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E8F5E0" />
        </radialGradient>
      </defs>

      {/* Legs behind body */}
      <ellipse cx="48" cy="140" rx="26" ry="18" fill="url(#frogBody)" />
      <ellipse cx="152" cy="140" rx="26" ry="18" fill="url(#frogBody)" />

      {/* Toes */}
      <circle cx="34" cy="148" r="6" fill="#4CAF50" />
      <circle cx="44" cy="152" r="6" fill="#4CAF50" />
      <circle cx="54" cy="150" r="6" fill="#4CAF50" />
      <circle cx="146" cy="150" r="6" fill="#4CAF50" />
      <circle cx="156" cy="152" r="6" fill="#4CAF50" />
      <circle cx="166" cy="148" r="6" fill="#4CAF50" />

      {/* Body */}
      <ellipse cx="100" cy="120" rx="62" ry="52" fill="url(#frogBody)" />

      {/* Belly */}
      <ellipse cx="100" cy="135" rx="40" ry="32" fill="url(#frogBelly)" />

      {/* Eye sockets */}
      <circle cx="72" cy="72" r="26" fill="url(#frogBody)" />
      <circle cx="128" cy="72" r="26" fill="url(#frogBody)" />

      {/* Eyes */}
      <circle cx="72" cy="70" r="20" fill="url(#frogEye)" />
      <circle cx="128" cy="70" r="20" fill="url(#frogEye)" />

      {/* Pupils */}
      <circle cx="76" cy="72" r="9" fill="#17324D" />
      <circle cx="124" cy="72" r="9" fill="#17324D" />
      <circle cx="79" cy="69" r="3" fill="#FFFFFF" />
      <circle cx="127" cy="69" r="3" fill="#FFFFFF" />

      {/* Smile */}
      <path d="M82 128 Q100 142 118 128" stroke="#2E7D32" strokeWidth="4" fill="none" strokeLinecap="round" />

      {/* Cheeks */}
      <circle cx="58" cy="108" r="7" fill="#FF8FA3" opacity="0.55" />
      <circle cx="142" cy="108" r="7" fill="#FF8FA3" opacity="0.55" />
    </svg>
  );
}