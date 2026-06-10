import { Link } from 'wouter';

// Launch links - Julie delivers the final URLs after the June 11 launch.
// Replace the TODO_ values; everything below renders live automatically.
const SPOTIFY_EMBED_URL = 'TODO_SPOTIFY_EMBED_URL';
const APPLE_PODCASTS_URL = 'TODO_APPLE_PODCASTS_URL';
const YOUTUBE_PLAYLIST_URL = 'TODO_YOUTUBE_PLAYLIST_URL';

const isPending = (url) => url.startsWith('TODO_');

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
            Dive into Season 1 of Mission: Aurelia-a journey of connection, transformation, and what it means to be human in a world where technology and consciousness intertwine.
          </p>
        </div>
      </section>

      {/* Listen Now Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Listen Now
          </h2>
          <p className="text-lg text-[#F5F5F5]/70 mb-8 max-w-2xl mx-auto">
            Season 1 is available as an audiobook - six episodes and a two-part finale, told by Fergus MacTavish.
          </p>

          {/* Spotify Player */}
          <div className="mx-auto w-full max-w-[720px]">
            {isPending(SPOTIFY_EMBED_URL) ? (
              <div className="h-[352px] rounded-2xl border-2 border-dashed border-[#FF6B35]/40 bg-[#1A1A1A] flex flex-col items-center justify-center gap-3 px-6">
                <p className="text-sm uppercase tracking-[0.25em] text-[#FF6B35]/80">
                  Spotify player slot
                </p>
                <p className="text-[#F5F5F5]/60">
                  Goes live on June 11 - embed URL follows after launch.
                </p>
              </div>
            ) : (
              <iframe
                src={SPOTIFY_EMBED_URL}
                className="w-full rounded-2xl"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Mission: Aurelia - Season 1 Audiobook on Spotify"
              />
            )}
            <p className="mt-3 text-sm text-[#F5F5F5]/50">
              Also available on Apple Podcasts and YouTube.
            </p>
          </div>

          {/* Secondary platform buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href={isPending(APPLE_PODCASTS_URL) ? undefined : APPLE_PODCASTS_URL}
              target="_blank"
              rel="noopener"
              aria-disabled={isPending(APPLE_PODCASTS_URL)}
              title={isPending(APPLE_PODCASTS_URL) ? 'Link goes live on June 11' : undefined}
              className={`px-8 py-3 bg-[#FF6B35] text-white rounded-lg transition-colors font-medium ${
                isPending(APPLE_PODCASTS_URL)
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-[#FF6B35]/90'
              }`}
            >
              Listen on Apple Podcasts
            </a>
            <a
              href={isPending(YOUTUBE_PLAYLIST_URL) ? undefined : YOUTUBE_PLAYLIST_URL}
              target="_blank"
              rel="noopener"
              aria-disabled={isPending(YOUTUBE_PLAYLIST_URL)}
              title={isPending(YOUTUBE_PLAYLIST_URL) ? 'Link goes live on June 11' : undefined}
              className={`px-8 py-3 bg-[#1A1A1A] text-white rounded-lg transition-colors font-medium border border-[#FF6B35]/30 ${
                isPending(YOUTUBE_PLAYLIST_URL)
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-[#1A1A1A]/80'
              }`}
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
            Read More
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Audiobook Supplemental - first in DOM so it leads on mobile;
                md:order-2 keeps it on the right on desktop */}
            <div className="bg-[#1A1A1A] rounded-2xl border border-white/10 overflow-hidden flex flex-col md:order-2">
              <div className="h-72 bg-[#0d0d0d] p-4 flex items-center justify-center">
                <img
                  src="/images/story/supplemental-cover.webp"
                  alt="Audiobook Supplemental - cover with the Aurelia tree"
                  loading="lazy"
                  className="h-full w-auto object-contain rounded shadow-lg"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Audiobook Supplemental</h3>
                <p className="text-[#F5F5F5]/70 mb-6 flex-1">
                  Characters, narrators, and casting visions - the companion to the audiobook.
                </p>
                <a
                  href="/supplementalone"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/90 transition-colors font-medium"
                >
                  Download PDF
                </a>
              </div>
            </div>

            {/* Season 1 Summary */}
            <div className="bg-[#1A1A1A] rounded-2xl border border-white/10 overflow-hidden flex flex-col md:order-1">
              <div className="h-72 bg-[#0d0d0d] p-4 flex items-center justify-center">
                <img
                  src="/images/story/summary-cover.webp"
                  alt="Season 1 Summary - first page"
                  loading="lazy"
                  className="h-full w-auto object-contain rounded shadow-lg"
                />
              </div>
              <div className="p-6 flex flex-col flex-1 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Season 1 Summary</h3>
                <p className="text-[#F5F5F5]/70 mb-6 flex-1">
                  The complete Season 1 story at a glance.
                </p>
                <a
                  href="/MissionAurelia_Summary_S1.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/90 transition-colors font-medium"
                >
                  Download PDF
                </a>
              </div>
            </div>
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
