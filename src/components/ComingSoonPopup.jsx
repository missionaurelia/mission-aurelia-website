import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ComingSoonPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const STORAGE_KEY = 'lunaSpotlightPopupShown';

  useEffect(() => {
    const wasShown = sessionStorage.getItem(STORAGE_KEY);
    if (!wasShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem(STORAGE_KEY, 'true');
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 animate-fadeIn"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative rounded-2xl shadow-2xl overflow-hidden pointer-events-auto animate-scaleIn"
          style={{
            maxWidth: '680px',
            width: '100%',
            border: '1px solid rgba(255,107,53,0.35)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Main Image - fills the popup */}
          <div className="relative w-full">
            <img
              src="/images/announcements/henry-spotlight-luna-coming-soon.png"
              alt="Henry's Character Spotlight - Luna Veyra coming May 29th"
              className="w-full h-auto block"
              style={{ display: 'block' }}
            />
          </div>

          {/* Bottom bar - slim menu band */}
          <div
            className="flex items-center justify-between px-5 py-3"
            style={{
              background: 'linear-gradient(90deg, #0a0a0a 0%, #1a0a00 50%, #0a0a0a 100%)',
              borderTop: '1px solid rgba(255,107,53,0.25)',
            }}
          >
            {/* Luna thumbnail + label */}
            <div className="flex items-center gap-3">
              <img
                src="/images/characters/luna-thumbnail.jpg"
                alt="Luna Veyra"
                className="rounded-full object-cover flex-shrink-0"
                style={{
                  width: '40px',
                  height: '40px',
                  border: '2px solid #ff6b35',
                }}
              />
              <div>
                <p className="text-xs text-gray-400 leading-none mb-0.5">Next Spotlight</p>
                <p className="text-sm font-bold leading-none" style={{ color: '#ff6b35' }}>
                  Luna Veyra &mdash; May 29th
                </p>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex-shrink-0"
              style={{
                background: 'rgba(255,107,53,0.15)',
                border: '1px solid rgba(255,107,53,0.4)',
                color: '#ff6b35',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,107,53,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,107,53,0.15)';
              }}
              aria-label="Close popup"
            >
              <X className="w-4 h-4" />
              Close
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.4s ease-out; }
      `}</style>
    </>
  );
};

export default ComingSoonPopup;
