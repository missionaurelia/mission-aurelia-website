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
          {/* Close button - top right corner */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200"
            style={{
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,107,53,0.5)',
              color: '#ff6b35',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,107,53,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0,0,0,0.6)';
            }}
            aria-label="Close popup"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Main Image - fills the popup */}
          <div className="relative w-full">
            <img
              src="/images/announcements/henry-spotlight-luna-coming-soon.png"
              alt="Henry's Character Spotlight - Luna Veyra coming May 29th"
              className="w-full h-auto block"
              style={{ display: 'block' }}
            />
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
