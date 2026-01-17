export default function Datapad({ children, glowColor = 'emerald' }) {
  const glowColors = {
    emerald: 'shadow-emerald-500/50 border-emerald-500/30',
    violet: 'shadow-violet-500/50 border-violet-500/30',
    amber: 'shadow-amber-500/50 border-amber-500/30',
    blue: 'shadow-blue-500/50 border-blue-500/30',
    purple: 'shadow-purple-500/50 border-purple-500/30',
  };

  const selectedGlow = glowColors[glowColor] || glowColors.emerald;

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Outer Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-${glowColor}-500/5 to-transparent rounded-3xl blur-xl`}></div>
      
      {/* Datapad Frame */}
      <div className="relative">
        {/* Top Bezel */}
        <div className={`h-8 bg-gradient-to-b from-slate-800 to-slate-900 border-t-2 border-x-2 ${selectedGlow} rounded-t-3xl flex items-center justify-center`}>
          <div className="flex gap-2">
            <div className={`w-2 h-2 rounded-full bg-${glowColor}-400 animate-pulse`}></div>
            <div className={`w-2 h-2 rounded-full bg-${glowColor}-400/50`}></div>
            <div className={`w-2 h-2 rounded-full bg-${glowColor}-400/50`}></div>
          </div>
        </div>

        {/* Glass Display Area */}
        <div className={`
          relative
          bg-slate-950/80 backdrop-blur-md
          border-x-2 ${selectedGlow}
          shadow-2xl ${selectedGlow}
        `}>
          {/* Holographic Scan Lines */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent animate-scan"></div>
          </div>

          {/* Glass Reflection Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none"></div>

          {/* Scrollable Content Area */}
          <div className="relative overflow-y-auto max-h-[800px] p-8 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-900/50">
            {children}
          </div>
        </div>

        {/* Bottom Bezel */}
        <div className={`h-8 bg-gradient-to-t from-slate-800 to-slate-900 border-b-2 border-x-2 ${selectedGlow} rounded-b-3xl flex items-center justify-center`}>
          <div className={`text-xs text-${glowColor}-400/50 font-mono`}>
            DATAPAD v2.4 • SECURE CONNECTION
          </div>
        </div>
      </div>

      {/* Corner Accents */}
      <div className={`absolute top-6 left-6 w-4 h-4 border-t-2 border-l-2 border-${glowColor}-500/50`}></div>
      <div className={`absolute top-6 right-6 w-4 h-4 border-t-2 border-r-2 border-${glowColor}-500/50`}></div>
      <div className={`absolute bottom-6 left-6 w-4 h-4 border-b-2 border-l-2 border-${glowColor}-500/50`}></div>
      <div className={`absolute bottom-6 right-6 w-4 h-4 border-b-2 border-r-2 border-${glowColor}-500/50`}></div>
    </div>
  );
}
