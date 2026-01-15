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
                {scienceTopics.map((topic) => (
                  <Link
                    key={topic.id}
                    href={topic.link}
                    className="group"
                  >
                    <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-all hover:scale-105">
                      <h4 className={`text-xl font-bold mb-3 bg-gradient-to-r ${topic.color} bg-clip-text text-transparent`}>
                        {topic.title} {topic.subtitle}
                      </h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {topic.description}
                      </p>
                      <div className="mt-4 flex items-center text-sm text-slate-500 group-hover:text-slate-400 transition-colors">
                        <span>Explore</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
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
