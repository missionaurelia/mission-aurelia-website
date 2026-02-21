import { Link } from 'wouter';

export default function Story() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B35]/10 to-transparent"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient-orange">
            The Story
          </h1>
          <p className="text-xl md:text-2xl text-[#F5F5F5]/80 max-w-3xl mx-auto leading-relaxed">
            Dive into Season 1 of Mission: Aurelia—a journey of connection, transformation, and what it means to be human in a world where technology and consciousness intertwine.
          </p>
        </div>
      </section>

      {/* Season 1 Trailer Section */}
      <section className="py-12 px-6 mb-16">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#FF6B35]">
              Season 1 Trailer
            </h2>
            <p className="text-lg text-[#F5F5F5]/70 mb-2">
              Manifestation
            </p>
            <p className="text-sm text-[#F5F5F5]/50">
              Music: Massive Attack - Angel
            </p>
          </div>

          {/* Video Player - YouTube Embed */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl mb-6">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/-YK5jWdxLmA"
                title="Mission: Aurelia - Season 1 Trailer: Manifestation"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://youtu.be/-YK5jWdxLmA?si=6FQF3i4k1vURehW5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch on YouTube
            </a>
            <Link href="/contact">
              <a className="inline-block px-8 py-3 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white font-semibold rounded-lg transition-colors duration-200">
                Looking for Producer
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider Text */}
      <div className="text-center mb-12 px-6">
        <p className="text-xl text-[#F5F5F5]/70">
          Dive into the full story below
        </p>
      </div>

      {/* PDF Viewer Section */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          {/* PDF Container */}
          <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="/MissionAurelia_Summary_S1.pdf"
              className="w-full h-[80vh] md:h-[90vh]"
              title="Mission: Aurelia - Season 1 Summary"
              style={{ border: 'none' }}
            />
          </div>

          {/* Download Option */}
          <div className="mt-8 text-center">
            <a
              href="/MissionAurelia_Summary_S1.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/90 transition-colors font-medium"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Explore the Universe
          </h2>
          <p className="text-lg text-[#F5F5F5]/70 mb-8">
            Discover the characters, locations, and philosophy behind Mission: Aurelia
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/characters">
              <a className="px-8 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/90 transition-colors font-medium">
                Meet the Characters
              </a>
            </Link>
            <Link href="/universe">
              <a className="px-8 py-3 bg-[#1A1A1A] text-white rounded-lg hover:bg-[#1A1A1A]/80 transition-colors font-medium border border-[#FF6B35]/30">
                Explore the Universe
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
