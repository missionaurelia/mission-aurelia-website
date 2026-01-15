export default function Technology() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 to-transparent"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technology
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              From artificial intelligence to human augmentation—explore the technological foundations that shape the Mission: Aurelia universe.
            </p>
          </div>
        </div>
      </section>

      {/* Content Placeholder */}
      <section className="py-16">
        <div className="container max-w-5xl">
          <div className="p-12 bg-slate-900/50 border border-slate-800 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4 text-cyan-400">Content Coming Soon</h2>
            <p className="text-slate-400 text-lg">
              Technology deep dives will be added here.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
