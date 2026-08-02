// Clean SVG illustration of Milo the Science Rover — not AI-generated, hand-built vector art.
export default function MiloThumbnail({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Milo the Science Rover">
      <defs>
        <linearGradient id="miloBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="miloAccent" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7ED957" />
          <stop offset="100%" stopColor="#4CAF50" />
        </linearGradient>
        <radialGradient id="miloEye" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#D7E8F5" />
        </radialGradient>
      </defs>

      {/* Antenna */}
      <line x1="150" y1="58" x2="150" y2="30" stroke="#475569" strokeWidth="4" strokeLinecap="round" />
      <circle cx="150" cy="28" r="7" fill="#FF5252" />

      {/* Body */}
      <rect x="40" y="70" width="120" height="58" rx="14" fill="url(#miloBody)" stroke="#CBD5E1" strokeWidth="2" />

      {/* Green Smart Hub accent strip */}
      <rect x="52" y="82" width="96" height="16" rx="8" fill="url(#miloAccent)" />
      <circle cx="62" cy="90" r="4" fill="#FFFFFF" opacity="0.7" />

      {/* Eye / sensor on front */}
      <circle cx="60" cy="112" r="14" fill="url(#miloEye)" stroke="#94A3B8" strokeWidth="2" />
      <circle cx="63" cy="114" r="6" fill="#17324D" />
      <circle cx="65" cy="112" r="2" fill="#FFFFFF" />

      {/* Hook / grabber on front-left */}
      <path d="M40 104 Q28 104 28 92" stroke="#475569" strokeWidth="5" fill="none" strokeLinecap="round" />

      {/* Wheels */}
      <circle cx="62" cy="132" r="20" fill="#1E293B" />
      <circle cx="62" cy="132" r="11" fill="#64748B" />
      <circle cx="62" cy="132" r="4" fill="#1E293B" />
      <circle cx="138" cy="132" r="20" fill="#1E293B" />
      <circle cx="138" cy="132" r="11" fill="#64748B" />
      <circle cx="138" cy="132" r="4" fill="#1E293B" />

      {/* Top detail dots */}
      <circle cx="120" cy="112" r="5" fill="#FF5252" />
      <circle cx="138" cy="112" r="5" fill="#4CAF50" />
    </svg>
  );
}