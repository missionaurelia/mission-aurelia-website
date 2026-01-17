import { Link } from 'wouter';

export default function Philosophy() {
  const philosophyTopics = [
    {
      id: 'identity',
      title: 'Identity',
      subtitle: '& Aging',
      description: 'June, Luna, Elara - exploring self through time',
      color: 'from-violet-400 to-purple-400',
      bgColor: 'bg-violet-500/10',
      borderColor: 'border-violet-500/30',
      hoverBorder: 'hover:border-violet-400',
      link: '/philosophy/identity'
    },
    {
      id: 'consciousness',
      title: 'Consciousness',
      subtitle: 'Emergent',
      description: 'Auren vs. Levin - when does awareness begin?',
      color: 'from-purple-400 to-pink-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      hoverBorder: 'hover:border-purple-400',
      link: '/philosophy/consciousness'
    },
    {
      id: 'ai-feelings',
      title: 'AI & Feelings',
      subtitle: 'Love',
      description: 'Can love emerge - or is it only simulated?',
      color: 'from-pink-400 to-rose-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      hoverBorder: 'hover:border-pink-400',
      link: '/philosophy/ai-feelings'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDE2NywxMzksMjUwLDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-400 via-purple-400 to-violet-500 bg-clip-text text-transparent">
              Philosophy
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Explore the philosophical questions at the heart of Mission: Aurelia
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
              {philosophyTopics.map((topic, index) => (
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
                {/* Identity & Aging Card */}
                <Link href="/philosophy/identity" className="group">
                  <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-all hover:scale-105 flex items-center justify-center min-h-[300px]">
                    <img 
                      src="/images/identity-aging.png" 
                      alt="Identity & Aging - Time and Transformation" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>

                {/* Consciousness Emergent Card */}
                <Link href="/philosophy/consciousness" className="group">
                  <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-all hover:scale-105 flex items-center justify-center min-h-[300px]">
                    <img 
                      src="/images/consciousness-emergent.png" 
                      alt="Consciousness Emergent - Neural Networks" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>

                {/* AI & Feelings Love Card */}
                <Link href="/philosophy/ai-feelings" className="group">
                  <div className="p-6 bg-slate-900/50 border border-slate-700 rounded-xl hover:border-slate-600 transition-all hover:scale-105 flex items-center justify-center min-h-[300px]">
                    <img 
                      src="/images/ai-feelings-love.png" 
                      alt="AI & Feelings Love - Human vs Digital Emotion" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>

              </div>
            </div>
          </di    </div>
      </section>
    </div>
  );
}
