import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ComingSoonPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const STORAGE_KEY = 'nicholasSpotlightPopupShown';

  useEffect(() => {
    // Check if popup was already shown in this session
    const wasShown = sessionStorage.getItem(STORAGE_KEY);
    
    if (!wasShown) {
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
        // Mark as shown in session storage
        sessionStorage.setItem(STORAGE_KEY, 'true');
      }, 10000); // 10 seconds

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
          className="relative bg-gradient-to-br from-gray-900 to-black border border-orange-500/30 rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden pointer-events-auto animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors group"
            aria-label="Close popup"
          >
            <X className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors" />
          </button>

          {/* Image */}
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src="/images/announcements/nicholas-veyra-coming-soon.jpg"
              alt="Nicholas Veyra – Coming April 24th"
              className="w-full h-full object-cover"
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient-orange">Henry's Spotlight</span>
            </h2>
            
            <div className="space-y-2 text-lg text-gray-300">
              <p className="text-gray-300 mb-3">
                This time Henry tells us about Nicholas Veyra 🪇
              </p>
              <p className="font-semibold text-orange-400">
                Starting April 24th
              </p>
              <p>
                New spotlight every last Friday of the month
              </p>
            </div>

            {/* Optional: CTA Button */}
            <button
              onClick={handleClose}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Can't Wait!
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default ComingSoonPopup;
