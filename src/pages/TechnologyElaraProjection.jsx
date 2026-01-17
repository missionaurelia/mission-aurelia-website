export default function TechnologyElaraProjection() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDEzOSw5MiwyNDYsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full mb-6">
              <span className="text-violet-400 text-sm font-mono">LUMINOUS PRESENCE NETWORK • SANCTUM SPA</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-300 to-violet-500 bg-clip-text text-transparent">
              Elara Lysi Projection
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Holographic Projection System
            </p>
            <p className="text-lg text-slate-400 mt-4 max-w-2xl mx-auto">
              A revolutionary integrated system that makes Elara not projected, but present—the most sophisticated holographic AI manifestation in the solar system.
            </p>
          </div>
        </div>
      </section>

      {/* PDF Embed Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Technical Specification</h2>
                <p className="text-slate-400">Complete documentation of the Luminous Presence Network</p>
              </div>
              <a
                href="/docs/elara-lysi-projection-system.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 hover:bg-violet-500/30 border border-violet-500/30 rounded-lg text-violet-400 hover:text-violet-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </div>

            {/* PDF Embed */}
            <div className="bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700">
              <iframe
                src="/docs/elara-lysi-projection-system.pdf"
                className="w-full h-[800px]"
                title="Elara Lysi Holographic Projection System Technical Specification"
              />
            </div>
          </div>

          {/* Back Link */}
          <div className="text-center pt-8">
            <a
              href="/technology"
              className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors"
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
