import { Link } from 'wouter';

export default function Science() {
  const scienceTopics = [
    {
      id: 'mirida',
      title: 'MIRIDA',
      subtitle: 'Protocol',
      description: 'Memory-Infused Relativistic Dimensional Architecture',
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30',
      hoverBorder: 'hover:border-blue-400',
      link: '/science/mirida'
    },
    {
      id: 'pn7',
      title: 'PN7',
      subtitle: 'Asteroid Impact',
      description: 'Meteorological changes and atmospheric consequences',
      color: 'from-orange-400 to-red-400',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30',
      hoverBorder: 'hover:border-orange-400',
      link: '/science/pn7'
    },
    {
      id: 'lysithea',
      title: 'Lysithea',
      subtitle: 'Institute',
      description: 'Research centers, studies, and risks on Jupiter\'s moon',
      color: 'from-purple-400 to-pink-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-400',
      link: '/science/lysithea'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LDEzMCwyNDYsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              Science
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Explore the scientific foundations of the Mission: Aurelia universe
            </p>
          </div>
        </div>
      </section>

      {/* File Tabs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="relative">
            {/* File Tabs Container */}
            <div className="flex justify-center items-end gap-4 mb-0">
              {scienceTopics.map((topic, index) => (
                <Link
                  key={topic.id}
                  href={topic.link}
                  className="group"
                >
                  {/* File Tab */}
                  <div className={`
                    relative w-64 h-32 
                    ${topic.bgColor} 
                    border-t-4 border-x-4 ${topic.borderColor} ${topic.hoverBorder}
                    rounded-t-2xl
                    transition-all duration-300
                    hover:scale-105 hover:-translate-y-2
                    cursor-pointer
                    shadow-lg hover:shadow-2xl
                  `}>
                    {/* Tab Content */}
                    <div className="p-6 h-full flex flex-col justify-center">
                      <h3 className={`text-2xl font-bold mb-1 bg-gradient-to-r ${topic.color} bg-clip-text text-transparent`}>
                        {topic.title}
                      </h3>
                      <p className="text-sm text-slate-400 font-mono">
                        {topic.subtitle}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </Link>
              ))}
            </div>

            {/* File Body - Shows descriptions */}
            <div className="bg-slate-800/50 border-4 border-slate-700 rounded-b-2xl rounded-tr-2xl p-12 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                {/* MIRIDA Card - Double Silhouette for Consciousness Transfer */}
                <Link href="/science/mirida" className="group">
                  <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-all hover:scale-105 flex items-center justify-center min-h-[300px]">
                    {/* Double Human Silhouette - Consciousness Transfer */}
                    <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full max-h-full">
                      {/* Back Silhouette - Slightly Offset and Transparent */}
                      <g opacity="0.4">
                        {/* Head */}
                        <ellipse cx="170" cy="100" rx="35" ry="40" stroke="#22d3ee" strokeWidth="3" fill="none"/>
                        {/* Neck */}
                        <line x1="155" y1="135" x2="150" y2="150" stroke="#22d3ee" strokeWidth="3"/>
                        <line x1="185" y1="135" x2="190" y2="150" stroke="#22d3ee" strokeWidth="3"/>
                        {/* Shoulders */}
                        <path d="M120 150 Q150 145, 170 150 Q190 145, 220 150" stroke="#22d3ee" strokeWidth="3" fill="none"/>
                        {/* Upper Body */}
                        <path d="M120 150 L110 200 Q170 210, 230 200 L220 150" stroke="#22d3ee" strokeWidth="3" fill="none"/>
                      </g>
                      
                      {/* Front Silhouette - Main Figure */}
                      <g opacity="1">
                        {/* Head */}
                        <ellipse cx="130" cy="100" rx="35" ry="40" stroke="#22d3ee" strokeWidth="4" fill="none"/>
                        {/* Neck */}
                        <line x1="115" y1="135" x2="110" y2="150" stroke="#22d3ee" strokeWidth="4"/>
                        <line x1="145" y1="135" x2="150" y2="150" stroke="#22d3ee" strokeWidth="4"/>
                        {/* Shoulders */}
                        <path d="M80 150 Q110 145, 130 150 Q150 145, 180 150" stroke="#22d3ee" strokeWidth="4" fill="none"/>
                        {/* Upper Body */}
                        <path d="M80 150 L70 200 Q130 210, 190 200 L180 150" stroke="#22d3ee" strokeWidth="4" fill="none"/>
                      </g>
                      
                      {/* Connection Lines - Symbolizing Transfer */}
                      <line x1="165" y1="100" x2="135" y2="100" stroke="#22d3ee" strokeWidth="2" opacity="0.6" strokeDasharray="5,5"/>
                      <line x1="165" y1="120" x2="135" y2="120" stroke="#22d3ee" strokeWidth="2" opacity="0.5" strokeDasharray="5,5"/>
                      <line x1="170" y1="170" x2="130" y2="170" stroke="#22d3ee" strokeWidth="2" opacity="0.4" strokeDasharray="5,5"/>
                    </svg>
                  </div>
                </Link>

                {/* PN7 Card - Large Asteroid Sticker Only */}
                <Link href="/science/pn7" className="group">
                  <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-all hover:scale-105 flex items-center justify-center min-h-[300px]">
                    {/* Large Dramatic Falling Asteroid - Fills Container */}
                    <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full max-h-full">
                      {/* Main Asteroid Body - Larger and More Dramatic */}
                      <path d="M180 60 L210 75 L225 100 L220 135 L195 155 L165 150 L140 130 L135 95 L150 70 Z" 
                            stroke="#fb923c" strokeWidth="4" fill="none"/>
                      
                      {/* Craters on Asteroid */}
                      <circle cx="175" cy="90" r="8" stroke="#fb923c" strokeWidth="3" fill="none"/>
                      <circle cx="195" cy="110" r="6" stroke="#fb923c" strokeWidth="2.5" fill="none"/>
                      <circle cx="160" cy="120" r="7" stroke="#fb923c" strokeWidth="2.5" fill="none"/>
                      <circle cx="185" cy="130" r="5" stroke="#fb923c" strokeWidth="2" fill="none"/>
                      
                      {/* Dramatic Motion Lines - Trailing Behind (Upper Left) */}
                      <path d="M120 45 L80 10" stroke="#fb923c" strokeWidth="5" strokeLinecap="round" opacity="0.9"/>
                      <path d="M125 55 L85 20" stroke="#fb923c" strokeWidth="4.5" strokeLinecap="round" opacity="0.8"/>
                      <path d="M115 60 L75 25" stroke="#fb923c" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
                      
                      <path d="M135 40 L100 5" stroke="#fb923c" strokeWidth="4" strokeLinecap="round" opacity="0.8"/>
                      <path d="M145 50 L110 15" stroke="#fb923c" strokeWidth="3.5" strokeLinecap="round" opacity="0.7"/>
                      <path d="M130 65 L95 30" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" opacity="0.6"/>
                      
                      {/* Longer Impact Trails */}
                      <path d="M105 80 L50 30" stroke="#fb923c" strokeWidth="5" strokeLinecap="round" opacity="0.8"/>
                      <path d="M110 90 L55 40" stroke="#fb923c" strokeWidth="4.5" strokeLinecap="round" opacity="0.7"/>
                      <path d="M100 95 L45 45" stroke="#fb923c" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
                      <path d="M115 100 L60 50" stroke="#fb923c" strokeWidth="3.5" strokeLinecap="round" opacity="0.5"/>
                      
                      {/* Additional Diagonal Trails */}
                      <path d="M95 70 L40 20" stroke="#fb923c" strokeWidth="4" strokeLinecap="round" opacity="0.7"/>
                      <path d="M105 75 L50 25" stroke="#fb923c" strokeWidth="3.5" strokeLinecap="round" opacity="0.6"/>
                      
                      {/* Debris Particles */}
                      <circle cx="110" cy="55" r="3" fill="#fb923c" opacity="0.7"/>
                      <circle cx="95" cy="65" r="2.5" fill="#fb923c" opacity="0.6"/>
                      <circle cx="85" cy="75" r="3.5" fill="#fb923c" opacity="0.5"/>
                      <circle cx="120" cy="70" r="2" fill="#fb923c" opacity="0.6"/>
                      <circle cx="75" cy="55" r="2.5" fill="#fb923c" opacity="0.5"/>
                      <circle cx="90" cy="50" r="2" fill="#fb923c" opacity="0.6"/>
                      
                      {/* Impact Waves at Bottom */}
                      <path d="M130 200 Q165 210, 200 200" stroke="#fb923c" strokeWidth="4" fill="none" opacity="0.7"/>
                      <path d="M120 220 Q165 232, 210 220" stroke="#fb923c" strokeWidth="4" fill="none" opacity="0.6"/>
                      <path d="M110 240 Q165 254, 220 240" stroke="#fb923c" strokeWidth="3.5" fill="none" opacity="0.5"/>
                      <path d="M100 260 Q165 276, 230 260" stroke="#fb923c" strokeWidth="3" fill="none" opacity="0.4"/>
                      
                      {/* Atmospheric Entry Glow */}
                      <path d="M140 155 Q165 175, 190 155" stroke="#fb923c" strokeWidth="3.5" fill="none" opacity="0.6"/>
                      <path d="M135 165 Q165 185, 195 165" stroke="#fb923c" strokeWidth="3" fill="none" opacity="0.5"/>
                      <path d="M130 175 Q165 195, 200 175" stroke="#fb923c" strokeWidth="2.5" fill="none" opacity="0.4"/>
                    </svg>
                  </div>
                </Link>

                {/* Lysithea Card - Research Building with Planet */}
                <Link href="/science/lysithea" className="group">
                  <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-all hover:scale-105 flex items-center justify-center min-h-[300px]">
                    {/* Research Building with Saturn in Background */}
                    <svg width="100%" height="100%" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-full max-h-full">
                      {/* Saturn/Planet in Background (Upper Left) */}
                      <g opacity="0.6">
                        <circle cx="70" cy="70" r="30" stroke="#c084fc" strokeWidth="3" fill="none"/>
                        {/* Saturn Rings */}
                        <ellipse cx="70" cy="70" rx="50" ry="12" stroke="#c084fc" strokeWidth="2.5" fill="none"/>
                        <ellipse cx="70" cy="70" rx="45" ry="10" stroke="#c084fc" strokeWidth="2" fill="none" opacity="0.7"/>
                      </g>
                      
                      {/* Main Research Building */}
                      <g>
                        {/* Building Base */}
                        <rect x="120" y="120" width="120" height="140" stroke="#c084fc" strokeWidth="4" fill="none"/>
                        
                        {/* Roof/Top Section */}
                        <path d="M115 120 L180 90 L245 120" stroke="#c084fc" strokeWidth="4" fill="none"/>
                        
                        {/* Windows - Row 1 */}
                        <rect x="135" y="140" width="20" height="25" stroke="#c084fc" strokeWidth="2.5" fill="none"/>
                        <rect x="165" y="140" width="20" height="25" stroke="#c084fc" strokeWidth="2.5" fill="none"/>
                        <rect x="195" y="140" width="20" height="25" stroke="#c084fc" strokeWidth="2.5" fill="none"/>
                        
                        {/* Windows - Row 2 */}
                        <rect x="135" y="175" width="20" height="25" stroke="#c084fc" strokeWidth="2.5" fill="none"/>
                        <rect x="165" y="175" width="20" height="25" stroke="#c084fc" strokeWidth="2.5" fill="none"/>
                        <rect x="195" y="175" width="20" height="25" stroke="#c084fc" strokeWidth="2.5" fill="none"/>
                        
                        {/* Windows - Row 3 */}
                        <rect x="135" y="210" width="20" height="25" stroke="#c084fc" strokeWidth="2.5" fill="none"/>
                        <rect x="165" y="210" width="20" height="25" stroke="#c084fc" strokeWidth="2.5" fill="none"/>
                        <rect x="195" y="210" width="20" height="25" stroke="#c084fc" strokeWidth="2.5" fill="none"/>
                        
                        {/* Entrance Door */}
                        <rect x="165" y="235" width="30" height="25" stroke="#c084fc" strokeWidth="3" fill="none"/>
                        
                        {/* Antenna/Communication Tower on Roof */}
                        <line x1="180" y1="90" x2="180" y2="60" stroke="#c084fc" strokeWidth="3"/>
                        <circle cx="180" cy="60" r="5" stroke="#c084fc" strokeWidth="2.5" fill="none"/>
                        <line x1="175" y1="65" x2="185" y2="65" stroke="#c084fc" strokeWidth="2"/>
                        <line x1="173" y1="70" x2="187" y2="70" stroke="#c084fc" strokeWidth="2"/>
                        
                        {/* Side Wing (Left) */}
                        <rect x="90" y="180" width="30" height="80" stroke="#c084fc" strokeWidth="3" fill="none"/>
                        <rect x="95" y="190" width="8" height="12" stroke="#c084fc" strokeWidth="2" fill="none"/>
                        <rect x="95" y="210" width="8" height="12" stroke="#c084fc" strokeWidth="2" fill="none"/>
                        <rect x="95" y="230" width="8" height="12" stroke="#c084fc" strokeWidth="2" fill="none"/>
                        <rect x="107" y="190" width="8" height="12" stroke="#c084fc" strokeWidth="2" fill="none"/>
                        <rect x="107" y="210" width="8" height="12" stroke="#c084fc" strokeWidth="2" fill="none"/>
                        <rect x="107" y="230" width="8" height="12" stroke="#c084fc" strokeWidth="2" fill="none"/>
                        
                        {/* Side Wing (Right) */}
                        <rect x="240" y="180" width="30" height="80" stroke="#c084fc" strokeWidth="3" fill="none"/>
                        <rect x="245" y="190" width="8" height="12" stroke="#c084fc" strokeWidth="2" fill="none"/>
                        <rect x="245" y="210" width="8" height="12" stroke="#c084fc" strokeWidth="2" fill="none"/>
                        <rect x="245" y="230" width="8" height="12" stroke="#c084fc" strokeWidth="2" fill="none"/>
                        <rect x="257" y="190" width="8" height="12" stroke="#c084fc" strokeWidth="2" fill="none"/>
                        <rect x="257" y="210" width="8" height="12" stroke="#c084fc" strokeWidth="2" fill="none"/>
                        <rect x="257" y="230" width="8" height="12" stroke="#c084fc" strokeWidth="2" fill="none"/>
                      </g>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Note for Kael */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              <span className="text-blue-400">MIRIDA</span> content is complete. <span className="text-orange-400">PN7</span> and <span className="text-purple-400">Lysithea</span> sections are ready for Kael's content.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
