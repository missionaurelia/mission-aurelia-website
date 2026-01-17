import { Link } from 'wouter';

export default function Technology() {
  const technologyTopics = [
    {
      id: 'ccm01',
      title: 'CCM-01',
      subtitle: 'Collar',
      description: 'Canine Communication Module - Henry\'s Voice',
      color: 'from-emerald-400 to-teal-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      hoverBorder: 'hover:border-emerald-400',
      link: '/technology/ccm01'
    },
    {
      id: 'elara-projection',
      title: 'Elara Lysi',
      subtitle: 'Projection',
      description: 'Luminous Presence Network - Holographic AI Director',
      color: 'from-violet-400 to-purple-400',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      hoverBorder: 'hover:border-violet-400',
      link: '/technology/elara-projection'
    },
    {
      id: 'nova-ventis',
      title: 'Nova Ventis',
      subtitle: 'Spacecraft',
      description: 'Family transport vessel - Home among the stars',
      color: 'from-amber-400 to-orange-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      hoverBorder: 'hover:border-amber-400',
      link: '/technology/nova-ventis'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE2LDE4NSwxMjksMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              Technology
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Discover the technological innovations that shape the Mission: Aurelia universe
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
              {technologyTopics.map((topic, index) => (
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
                    flex flex-col items-center justify-center
                    px-6 py-4
                  `}>
                    {/* Tab Label */}
                    <div className="text-center">
                      <h3 className={`text-2xl font-bold mb-1 bg-gradient-to-r ${topic.color} bg-clip-text text-transparent`}>
                        {topic.title}
                      </h3>
                      <p className="text-sm text-slate-400 font-medium">
                        {topic.subtitle}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* File Body - Shows descriptions */}
            <div className="bg-slate-800/50 border-4 border-slate-700 rounded-b-2xl rounded-tr-2xl p-12 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8">
                {technologyTopics.map((topic) => (
                  <Link
                    key={topic.id}
                    href={topic.link}
                    className="group"
                  >
                    <div className={`
                      relative h-64 
                      ${topic.bgColor} 
                      border ${topic.borderColor} ${topic.hoverBorder}
                      rounded-xl
                      transition-all duration-300
                      hover:scale-105
                      overflow-hidden
                      flex items-center justify-center
                      p-6
                    `}>
                      {/* Elara's outline images */}
                      <div className="relative w-full h-full flex flex-col items-center justify-center">
                        <img 
                          src={
                            topic.id === 'ccm01' ? '/images/tech-ccm01.png' :
                            topic.id === 'elara-projection' ? '/images/tech-elara-projection.png' :
                            '/images/tech-nova-ventis.png'
                          }
                          alt={topic.title}
                          className="w-full h-48 object-contain mb-4 transition-transform duration-300 group-hover:scale-110"
                        />
                        <p className="text-slate-300 text-sm text-center">
                          {topic.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Note for future content */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              All technology sections are ready for detailed specifications: <span className="text-emerald-400">CCM-01 Collar</span>, <span className="text-violet-400">Elara Lysi Projection</span>, and <span className="text-amber-400">Nova Ventis</span>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
