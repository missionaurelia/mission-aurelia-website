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
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mobile: YouTube Short Embed */}
            <div className="md:hidden">
              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16' }}>
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

                {/* YouTube Short Embed */}
                {!showIntro && (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${spotlight.youtubeShortId}`}
                    title={`Henry's Spotlight - ${spotlight.character}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            {/* Desktop: Local Video + YouTube Promo Card */}
            <div className="hidden md:block md:col-span-2">
              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl aspect-video">
                {/* UNAUTHORIZED BROADCAST Intro Overlay */}
                {showIntro && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center z-20 animate-fade-in">
                    <div className="max-w-2xl px-8 text-center">
                      <div className="space-y-6">
                        <h3 className="text-[#FF6B35] font-mono text-base tracking-wider animate-pulse">
                          [UNAUTHORIZED BROADCAST]
                        </h3>
                        
                        <div className="text-white font-mono text-sm leading-relaxed space-y-4">
                          <p>This footage was not approved by the Nova Ventis crew.</p>
                          
                          <p>
                            While engineering was busy with "important calibrations," two crew members 
                            borrowed the prototype CCM-01 Collar from the workshop.
                          </p>
                        </div>
                        
                        <button
                          onClick={handleIntroPlay}
                          className="mt-8 text-[#FF6B35] font-mono text-base tracking-wider animate-pulse hover:text-white transition-colors"
                        >
                          [Press Play]
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Local Video */}
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={spotlight.poster}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  onEnded={handleVideoEnd}
                  muted={isMuted}
                  playsInline
                  controls
                  controlsList="nodownload noremoteplayback"
                  disablePictureInPicture
                >
                  <source src={spotlight.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Desktop: YouTube Promo Card */}
            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-[#0f0e0d] to-[#1a1917] rounded-2xl p-6 border border-[#FF6B35]/20 shadow-2xl h-full flex flex-col">
                {/* YouTube Logo */}
                <div className="text-center mb-4">
                  <svg className="w-16 h-16 mx-auto text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>

                {/* Heading */}
                <h3 className="text-xl font-bold text-white text-center mb-4">
                  WATCH ON<br/>YOUTUBE
                </h3>

                {/* Stats */}
                <div className="bg-black/30 rounded-lg p-4 mb-6 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Views:</span>
                    <span className="text-white font-bold">17.8K</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Likes:</span>
                    <span className="text-white font-bold">782</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Shares:</span>
                    <span className="text-white font-bold">13</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3 mt-auto">
                  <a 
                    href={spotlight.youtubeShortUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-center"
                  >
                    Watch Now
                  </a>
                  <a 
                    href="https://youtube.com/@missionaurelia?si=BAbcorMHfhsMvs1J" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full px-6 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/90 transition-colors font-medium text-center"
                  >
                    Subscribe
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Video Info - Display Board Style */}
          <div className="mt-8 max-w-6xl mx-auto">
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
                  Next Spotlight: <span className="text-white font-bold">{spotlight.nextSpotlight || '24.04.2026 - Nicholas Veyra'}</span>
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
      </div>
    </section>
  );
}
