import { useState, useRef } from 'react';
import { Link } from 'wouter';
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import { getLatestSpotlight } from '../data/spotlightsData';

export default function CharacterSpotlight() {
  const spotlight = getLatestSpotlight();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroPlay = () => {
    setShowIntro(false);
    // Delay video start slightly to ensure smooth transition
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }, 300);
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && !isDragging) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const time = pos * duration;
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#1a1917] to-[#0f0e0d]">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-orange">Henry's Character Spotlight</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join Henry and Ryu as they introduce you to the characters of Mission: Aurelia. 
            New spotlight every month.
          </p>
        </div>

        {/* Video Player Section */}
        <div className="max-w-4xl mx-auto">
          {/* Video Container */}
          <div className="relative aspect-video bg-black rounded-t-2xl overflow-hidden shadow-2xl mx-auto">
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-full object-contain"
              src={spotlight.videoUrl}
              muted={isMuted}
              playsInline
              controlsList="nodownload nofullscreen noremoteplayback"
              disablePictureInPicture
              onEnded={handleVideoEnd}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              poster={spotlight.thumbnailUrl}
            />

            {/* UNAUTHORIZED BROADCAST Intro Overlay */}
            {showIntro && (
              <div className="absolute inset-0 bg-black flex items-center justify-center z-20 animate-fade-in overflow-y-auto py-8">
                <div className="max-w-2xl px-6 md:px-8 text-center my-auto">
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-[#FF6B35] font-mono text-xs md:text-base tracking-wider animate-pulse">
                      [UNAUTHORIZED BROADCAST]
                    </h3>
                    
                    <div className="text-white font-mono text-[10px] md:text-sm leading-relaxed space-y-2 md:space-y-4">
                      <p>This footage was not approved by the Nova Ventis crew.</p>
                      
                      <p>
                        While engineering was busy with "important calibrations," two crew members 
                        borrowed the prototype CCM-01 Collar from the workshop.
                      </p>
                    </div>
                    
                    <button
                      onClick={handleIntroPlay}
                      className="mt-6 md:mt-8 text-[#FF6B35] font-mono text-xs md:text-base tracking-wider animate-pulse hover:text-white transition-colors"
                    >
                      [Press Play]
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Play/Pause Overlay */}
            {!showIntro && (
              <div 
                className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/30 transition-colors"
                onClick={togglePlay}
              >
                {!isPlaying && (
                  <div className="w-20 h-20 rounded-full bg-[#FF6B35] flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Video Controls - Below Video, Always Visible (Hidden during intro) */}
          {!showIntro && (
            <div className="bg-[#0f0e0d] rounded-b-2xl p-4 shadow-2xl">
            {/* Timeline Seekbar */}
            <div className="mb-3">
              <div 
                className="relative h-1 bg-white/20 rounded-full cursor-pointer group"
                onClick={handleSeek}
              >
                <div 
                  className="absolute h-full bg-[#FF6B35] rounded-full transition-all"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
                <div 
                  className="absolute w-3 h-3 bg-white rounded-full -top-1 -ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                  style={{ left: `${(currentTime / duration) * 100}%` }}
                />
              </div>
            </div>
            
            {/* Controls Row */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-[#FF6B35] transition-colors p-1"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="text-white hover:text-[#FF6B35] transition-colors p-1"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
              </div>
              
              {/* Time Display */}
              <div className="text-white text-sm font-medium">
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
            </div>
          </div>
          )}

          {/* Video Info - Display Board Style */}
          <div className="mt-8">
            <div className="bg-gradient-to-br from-[#0f0e0d] to-[#1a1917] rounded-2xl p-6 md:p-8 border border-[#FF6B35]/20 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-3 text-white">
                  Who is {spotlight.character}?
                </h3>
                <p className="text-lg text-gray-300">
                  Featuring: {spotlight.featuring.join(' & ')}
                </p>
              </div>
              
              {/* Next Spotlight Info */}
              <div className="bg-black/30 rounded-lg p-4 mb-6 border border-[#00D9FF]/20">
                <p className="text-[#00D9FF] font-mono text-sm text-center">
                  Next Spotlight: <span className="text-white font-bold">27.02.2026 - Levin</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/spotlights">
                  <a className="px-8 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/90 transition-colors font-medium w-full sm:w-auto text-center">
                    View All Spotlights
                  </a>
                </Link>
                <Link href="/characters">
                  <a className="px-8 py-3 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/10 w-full sm:w-auto text-center">
                    Characters
                  </a>
                </Link>
              </div>
            </div>
          </div>


        </div>

        {/* Subscribe CTA */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#00D9FF]/10 rounded-2xl p-8 border border-[#FF6B35]/20">
            <h3 className="text-2xl font-bold mb-3 text-white">
              Never Miss a Spotlight
            </h3>
            <p className="text-gray-300 mb-6">
              Get notified when Henry introduces a new character. Monthly updates delivered to your inbox.
            </p>
            <Link href="/spotlights#subscribe">
              <a className="inline-block px-8 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/90 transition-colors font-medium">
                Subscribe for Updates
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
