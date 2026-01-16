import { Link } from 'wouter';

export default function ScienceLysithea() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e1a] to-[#1a1f35]">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE5MiwxMzIsMjUyLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6">
              <span className="text-purple-400 text-sm font-mono">RESEARCH OUTPOST • 2041</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Lysithea Institute
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Research & Expansion on Jupiter's Moon
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* The Real Science */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-transparent"></div>
              <h2 className="text-3xl font-bold text-purple-400">The Real Science</h2>
            </div>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Lysithea is one of Jupiter's 95 known moons — a small, irregular satellite roughly 36 kilometers in diameter, discovered in 1938. In reality, its distant orbit and harsh conditions make it an unlikely candidate for human settlement.
              </p>
              <p className="italic text-purple-300">
                But science fiction asks: What if we tried anyway?
              </p>
            </div>
          </section>

          {/* Divider */}
          <div className="flex items-center justify-center">
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-full max-w-md"></div>
            <span className="px-4 text-purple-400 text-sm font-mono whitespace-nowrap">IN MISSION: AURELIA</span>
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent w-full max-w-md"></div>
          </div>

          {/* In Mission: Aurelia */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-transparent"></div>
              <h2 className="text-3xl font-bold text-red-400">In Mission: Aurelia</h2>
            </div>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Founded in <span className="text-purple-400 font-semibold">2041</span>, the Lysithea Institute begins as a modest research outpost — humanity's first permanent foothold among Jupiter's moons.
              </p>

              {/* Early Divisions */}
              <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-purple-300 mb-4">Early Divisions:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>
                      <span className="text-purple-300 font-semibold">Astrobiology & Ecosystems</span>
                      <span className="text-gray-400"> — understanding how life can thrive beyond Earth</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>
                      <span className="text-purple-300 font-semibold">Space Medicine & Human Adaptation</span>
                      <span className="text-gray-400"> — preparing bodies for the void</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <div>
                      <span className="text-purple-300 font-semibold">Resource Engineering</span>
                      <span className="text-gray-400"> — turning ice and rock into survival</span>
                    </div>
                  </li>
                </ul>
              </div>

              <p>
                As the decades pass, the Institute grows. New divisions emerge:
              </p>

              {/* New Divisions */}
              <div className="bg-violet-500/5 border border-violet-500/20 rounded-lg p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 mt-1">•</span>
                    <div>
                      <span className="text-violet-300 font-semibold">MIRIDA Research</span>
                      <span className="text-gray-400"> — pushing the boundaries of consciousness and interstellar ambition</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 mt-1">•</span>
                    <div>
                      <span className="text-violet-300 font-semibold">Interplanetary Logistics</span>
                      <span className="text-gray-400"> — building the supply lines between worlds</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 mt-1">•</span>
                    <div>
                      <span className="text-violet-300 font-semibold">Botanical Cultivation</span>
                      <span className="text-gray-400"> — coaxing green life from alien soil</span>
                    </div>
                  </li>
                </ul>
              </div>

              <p className="text-lg">
                And then... <span className="text-red-400 font-semibold">everything changes.</span>
              </p>

              <p>
                What was once a distant outpost becomes essential. What began as curiosity becomes necessity. The Institute's role shifts in ways no one predicted.
              </p>

              <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-6">
                <p className="text-red-300 font-semibold">
                  Further research areas remain classified.
                </p>
              </div>

              <p className="italic text-gray-400">
                Some things must be witnessed, not summarized.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-900/20 via-violet-900/20 to-purple-900/20 border border-purple-500/30 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-purple-300 mb-2">What happens at the Institute?</h3>
            <p className="text-gray-400">Watch and find out.</p>
          </div>

          {/* Back Link */}
          <div className="text-center pt-8">
            <Link href="/science" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Science Overview
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
