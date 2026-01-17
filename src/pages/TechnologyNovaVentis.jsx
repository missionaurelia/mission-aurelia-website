export default function TechnologyNovaVentis() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1MSwxOTEsMzYsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <span className="text-amber-400 text-sm font-mono">FAMILY TRANSPORT VESSEL • VEYRA FAMILY</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Nova Ventis
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              "New Winds" Spacecraft
            </p>
            <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
              The Veyra family's private spacecraft—a home among the stars. Futuristic, but warm. Technological, but living.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Embed Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Technical Specification</h2>
                <p className="text-slate-400">Complete deck-by-deck documentation of the Nova Ventis</p>
              </div>
              <a
                href="/docs/nova-ventis-technical-specification.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 rounded-lg text-amber-400 hover:text-amber-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-slate-900/50 rounded-lg px-4 py-3 border border-slate-700">
                <div className="text-xs text-slate-400">Capacity</div>
                <div className="text-sm font-semibold text-white">4-6 humans + 2 dogs</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg px-4 py-3 border border-slate-700">
                <div className="text-xs text-slate-400">Autonomy</div>
                <div className="text-sm font-semibold text-white">3-4 months</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg px-4 py-3 border border-slate-700">
                <div className="text-xs text-slate-400">Travel Time</div>
                <div className="text-sm font-semibold text-white">~3 weeks (Earth ↔ Lysithea)</div>
              </div>
              <div className="bg-slate-900/50 rounded-lg px-4 py-3 border border-slate-700">
                <div className="text-xs text-slate-400">Total Area</div>
                <div className="text-sm font-semibold text-white">~380-460 m²</div>
              </div>
            </div>

            {/* PDF Embed */}
            <div className="bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700">
              <iframe
                src="/docs/nova-ventis-technical-specification.pdf"
                className="w-full h-[800px]"
                title="Nova Ventis Technical Specification"
              />
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center pt-8">
            <a
              href="/technology"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Technology
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
