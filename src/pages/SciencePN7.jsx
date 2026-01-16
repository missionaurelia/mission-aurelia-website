import { Link } from 'wouter';

export default function SciencePN7() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1MSwxNDYsNjAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
              <span className="text-orange-400 text-sm font-mono">ASTEROID IMPACT EVENT</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 bg-clip-text text-transparent">
              PN7 — Asteroid Impact
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          
          {/* The Real Science */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-orange-400">The Real Science</h2>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4">
                2025 PN7 is a near-Earth asteroid first detected on August 2, 2025 by the Pan-STARRS telescope in Hawaii. At roughly 19-30 meters wide, it belongs to the Arjuna asteroid group — space rocks with orbits remarkably similar to Earth's.
              </p>
              
              <p className="text-slate-300 leading-relaxed">
                In reality, 2025 PN7 poses no threat. It's a quasi-moon, silently accompanying our planet since the 1960s, expected to drift away around 2083.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-slate-950 text-orange-400 text-sm font-mono">IN MISSION: AURELIA</span>
            </div>
          </div>

          {/* In Mission: Aurelia */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-to-b from-red-400 to-orange-600 rounded-full"></div>
              <h2 className="text-3xl font-bold text-red-400">In Mission: Aurelia</h2>
            </div>
            
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-slate-300 leading-relaxed mb-4 italic">
                But what if its trajectory were different?
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-4">
                In the world of Mission: Aurelia, PN7 follows a collision course with Earth. First mentioned as a distant warning in the 2030s, its approach becomes the defining event of the 2050s.
              </p>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                The impact doesn't end humanity — but it forces a question no one expected to ask.
              </p>
              
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-8 text-center">
                <p className="text-2xl font-bold text-orange-400 mb-2">
                  What happens next?
                </p>
                <p className="text-slate-400 text-lg">
                  Watch and find out.
                </p>
              </div>
            </div>
          </div>

          {/* Back Link */}
          <div className="mt-16 text-center">
            <Link href="/science" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Science Overview
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
