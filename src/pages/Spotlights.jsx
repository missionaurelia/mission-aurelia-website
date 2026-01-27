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

  // Scroll to subscribe section if hash is present
  useEffect(() => {
    if (window.location.hash === '#subscribe') {
      setTimeout(() => {
        document.getElementById('subscribe')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

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
              New spotlight every month — discover the stories behind the stars.
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
              {/* Video Container */}
              <div className="relative aspect-video bg-black rounded-t-2xl overflow-hidden shadow-2xl mb-2 mx-auto lg:mx-0">
                {/* Video Element */}
                <video
                  ref={videoRef}
                  key={selectedSpotlight.id}
                  className="w-full h-full object-contain"
                  src={selectedSpotlight.videoUrl}
                  muted={isMuted}
                  playsInline
                  controlsList="nodownload nofullscreen noremoteplayback"
                  disablePictureInPicture
                  onEnded={handleVideoEnd}
                  onTimeUpdate={handleTimeUpdate}
                  onLoadedMetadata={handleLoadedMetadata}
                  poster={selectedSpotlight.thumbnailUrl}
                />

                {/* UNAUTHORIZED BROADCAST Intro Overlay */}
                {showIntro && (
                  <div className="absolute inset-0 bg-black flex items-center justify-center z-20 animate-fade-in">
                    <div className="max-w-2xl px-6 md:px-8 text-center">
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
                          
                          <p>
                            Henry (Jack Russell, self-proclaimed journalist) and Ryu (Akita, moral support & lookout) 
                            decided it was time to spill some secrets.
                          </p>
                          
                          <p>The crew has reviewed this footage.</p>
                          <p>They're not happy.</p>
                          <p>But they can't say it's wrong.</p>
                        </div>
                        
                        <button
                          onClick={handleIntroPlay}
                          className="mt-6 md:mt-8 text-[#FF6B35] font-mono text-xs md:text-base tracking-wider animate-pulse hover:text-white transition-colors"
                        >
                          [PRESS PLAY]
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

              {/* Video Controls - Below Video, Always Visible */}
              <div className="bg-[#0f0e0d] rounded-b-2xl p-4 shadow-2xl mb-8">
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

              {/* Video Info */}
              <div>
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

                {/* Comments Section */}
                <Comments spotlightId={selectedSpotlight.id} />
              </div>
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

      {/* Subscribe Section */}
      <section id="subscribe" className="section-padding bg-gradient-to-b from-[#1a1917] to-[#0f0e0d]">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-[#FF6B35]/10 to-[#00D9FF]/10 rounded-2xl p-12 border border-[#FF6B35]/20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Never Miss a Spotlight
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get notified when Henry introduces a new character. Monthly updates delivered to your inbox.
              </p>
              
              {/* Tally Form Embed Placeholder */}
              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <p className="text-gray-400 mb-4">
                  Subscribe to "Henry's Character Spotlight"
                </p>
                {/* Tally form will be embedded here */}
                <div className="max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 mb-4 focus:outline-none focus:border-[#FF6B35]"
                  />
                  <button className="w-full px-8 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/90 transition-colors font-medium">
                    Subscribe
                  </button>
                  <p className="text-xs text-gray-500 mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
