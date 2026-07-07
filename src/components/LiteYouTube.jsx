import { useState } from 'react';
import { Play } from 'lucide-react';

// Facade/lite-embed for YouTube: renders a thumbnail + play button and only
// injects the iframe (privacy-enhanced youtube-nocookie.com) once the user
// actually clicks play - so a page full of videos stays fast.
// IDs beginning with TODO_ render as a clearly marked placeholder tile.
export default function LiteYouTube({
  videoId,
  title,
  aspect = '16:9',
  thumbnail,
  className = '',
}) {
  const [active, setActive] = useState(false);
  const pending = !videoId || videoId.startsWith('TODO_');
  const aspectClass = aspect === '9:16' ? 'aspect-[9/16]' : 'aspect-video';

  if (pending) {
    return (
      <div
        className={`${aspectClass} ${className} flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-[var(--color-primary)]/40 bg-white/5 px-4 text-center`}
      >
        <Play size={28} className="text-[var(--color-primary)]/60" aria-hidden="true" />
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]/70">
          Video slot
        </p>
        <p className="text-sm text-[var(--color-text)]/50">Link follows</p>
      </div>
    );
  }

  if (active) {
    return (
      <div className={`${aspectClass} ${className} overflow-hidden rounded-2xl bg-black`}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="h-full w-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Play video: ${title}`}
      className={`${aspectClass} ${className} group relative block w-full overflow-hidden rounded-2xl bg-black text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]`}
    >
      <img
        src={thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
      <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--color-primary)] shadow-xl transition-transform duration-300 group-hover:scale-110">
        <Play size={24} className="ml-1 text-white" fill="currentColor" aria-hidden="true" />
      </span>
    </button>
  );
}
