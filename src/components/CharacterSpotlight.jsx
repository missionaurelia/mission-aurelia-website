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
          <div className="inline-block mb-4">
            <span className="text-sm font-medium tracking-wider text-[#FF6B35] uppercase">
              Neuigkeiten von Henry
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-orange">Character Spotlights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join Henry and Ryu as they introduce you to the characters of Mission: Aurelia. 
            New spotlight every month.
          </p>
        </div>

        {/* Video Player Section */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="relative aspect-[9/16] md:aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl max-w-md md:max-w-2xl mx-auto"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
          >
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

            {/* Play/Pause Overlay */}
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

            {/* Video Controls - Always visible on mobile, hover on desktop */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 transition-opacity ${
              showControls ? 'opacity-100' : 'opacity-0 md:opacity-0'
            } md:hover:opacity-100`}>
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
          </div>

          {/* Video Info */}
          <div className="mt-8 text-center">
            <h3 className="text-3xl font-bold mb-3 text-white">
              {spotlight.title}
            </h3>
            <p className="text-lg text-gray-300 mb-2">
              Featuring: {spotlight.featuring.join(' & ')}
            </p>
            <p className="text-gray-400 mb-6">
              {spotlight.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {spotlight.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm bg-[#FF6B35]/10 text-[#FF6B35] rounded-full border border-[#FF6B35]/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/spotlights">
                <a className="px-8 py-3 bg-[#FF6B35] text-white rounded-lg hover:bg-[#FF6B35]/90 transition-colors font-medium">
                  View All Spotlights
                </a>
              </Link>
              <Link href={spotlight.characterBioLink}>
                <a className="px-8 py-3 bg-white/5 text-white rounded-lg hover:bg-white/10 transition-colors font-medium border border-white/10">
                  Meet {spotlight.character}
                </a>
              </Link>
            </div>
          </div>

          {/* Navigation Hint (for future spotlights) */}
          <div className="mt-12 flex justify-center items-center gap-8 text-gray-500">
            <button 
              disabled 
              className="flex items-center gap-2 opacity-30 cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>
            <span className="text-sm">1 of 1</span>
            <button 
              disabled 
              className="flex items-center gap-2 opacity-30 cursor-not-allowed"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
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
