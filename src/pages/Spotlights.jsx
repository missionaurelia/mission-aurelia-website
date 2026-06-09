import { useState, useRef, useEffect } from 'react';
import { Link } from 'wouter';
import { Play, Pause, Volume2, VolumeX, Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { getAllSpotlights } from '../data/spotlightsData';
import Comments from '../components/Comments';
import SocialShare from '../components/SocialShare';

export default function Spotlights() {
  const spotlights = getAllSpotlights();
  const [selectedSpotlight, setSelectedSpotlight] = useState(spotlights[0]);
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

  const handleSpotlightChange = (spotlight) => {
    setSelectedSpotlight(spotlight);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1917]">
      {/* Header */}
      <section className="section-padding bg-gradient-to-b from-[#0f0e0d] to-[#1a1917]">
        <div className="container">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-gray-400 hover:text-[#FF6B35] transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient-orange">Henry's Character Spotlight</span>
            </h1>
            <p className="text-xl text-gray-300">
              Join Henry and Ryu as they introduce you to the characters of Mission: Aurelia. 
              New spotlight every month - discover the stories behind the stars.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Video Player - Main Column */}
            <div className="lg:col-span-2">
              {/* Mobile: YouTube Short Embed */}
              <div className="lg:hidden mb-8">
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
                      src={`https://www.youtube.com/embed/${selectedSpotlight.youtubeShortId}`}
                      title={`Henry's Spotlight - ${selectedSpotlight.character}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>
              </div>

              {/* Desktop: Local Video + YouTube Promo Card in Grid */}
              <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-8">
                {/* Local Video */}
                <div className="lg:col-span-2">
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
                      key={selectedSpotlight.id}
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      poster={selectedSpotlight.poster}
                      onTimeUpdate={handleTimeUpdate}
                      onLoadedMetadata={handleLoadedMetadata}
                      onEnded={handleVideoEnd}
                      muted={isMuted}
                      playsInline
                      controls
                      controlsList="nodownload noremoteplayback"
                      disablePictureInPicture
                    >
                      <source src={selectedSpotlight.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>

                {/* YouTube Promo Card */}
                <div>
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
                        <span className="text-white font-bold">208.8K</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Likes:</span>
                        <span className="text-white font-bold">842</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Shares:</span>
                        <span className="text-white font-bold">18</span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3 mt-auto">
                      <a 
                        href={selectedSpotlight.youtubeShortUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium text-center"
                      >
                        Watch Now
                      </a>

                    </div>
                  </div>
                </div>
              </div>
              {/* Video Info - Display Board Style */}
              <div className="bg-gradient-to-br from-[#0f0e0d] to-[#1a1917] rounded-2xl p-6 md:p-8 border border-[#FF6B35]/20 shadow-2xl">
                <h2 className="text-3xl font-bold mb-3 text-white">
                  Who is {selectedSpotlight.character}?
                </h2>
                
                <div className="flex flex-wrap gap-4 mb-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedSpotlight.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedSpotlight.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Featuring: {selectedSpotlight.featuring.join(' & ')}</span>
                  </div>
                </div>

                {/* Next Spotlight Info */}
                {selectedSpotlight.nextSpotlight && (
                  <div className="bg-black/30 rounded-lg p-4 mb-6 border border-[#00D9FF]/20">
                    <p className="text-[#00D9FF] font-mono text-sm">
                      Next Spotlight: <span className="text-white font-bold">{selectedSpotlight.nextSpotlight}</span>
                    </p>
                  </div>
                )}

                {/* Social Share */}
                <div className="mb-6">
                  <SocialShare 
                    title={`${selectedSpotlight.title} - Mission: Aurelia Character Spotlight`}
                    description={selectedSpotlight.description}
                    url={`https://missionaurelia.com/spotlights`}
                  />
                </div>

                {/* Action Button */}
                <Link href="/characters">
                  <a className="inline-block px-8 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/90 transition-colors font-medium">
                    Characters
                  </a>
                </Link>
              </div>
              {/* Comments Section - Temporarily hidden until backend is implemented */}
              {/* <Comments spotlightId={selectedSpotlight.id} /> */}
            </div>

            {/* Sidebar - Archive List */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">All Spotlights</h3>
              <div className="space-y-4">
                {spotlights.map((spotlight) => (
                  <button
                    key={spotlight.id}
                    onClick={() => handleSpotlightChange(spotlight)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      selectedSpotlight.id === spotlight.id
                        ? 'bg-[#FF6B35]/20 border-2 border-[#FF6B35]'
                        : 'bg-white/5 border-2 border-transparent hover:bg-white/10'
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-black">
                        <img 
                          src={spotlight.thumbnailUrl} 
                          alt={spotlight.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white mb-1 truncate">
                          {spotlight.title}
                        </h4>
                        <p className="text-sm text-gray-400 mb-1">
                          {spotlight.featuring.join(' & ')}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(spotlight.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            year: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}

                {/* Coming Soon Placeholder */}
                <div className="p-4 rounded-lg bg-white/5 border-2 border-dashed border-white/10">
                  <div className="text-center text-gray-500">
                    <p className="text-sm font-medium mb-1">More Coming Soon</p>
                    <p className="text-xs">New spotlight every month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
