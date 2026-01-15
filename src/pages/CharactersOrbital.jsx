import React, { useEffect, useRef } from 'react';

export default function CharactersOrbital() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size to full viewport
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars with random positions and properties
    const stars = [];
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleDirection: Math.random() > 0.5 ? 1 : -1
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(star => {
        // Update opacity for twinkling effect
        star.opacity += star.twinkleSpeed * star.twinkleDirection;
        
        if (star.opacity >= 1) {
          star.opacity = 1;
          star.twinkleDirection = -1;
        } else if (star.opacity <= 0.2) {
          star.opacity = 0.2;
          star.twinkleDirection = 1;
        }

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Character bubble positions with colors and images
  // RED (Inner Circle), ORANGE (Middle Circle), YELLOW (Outer Circle)
  const bubbles = [
    // RED - Inner Circle (5 characters)
    { id: 1, left: '49.92%', top: '43.33%', color: '#EF4444', name: 'June', image: '/images/characters/June_augmented.jpg' },
    { id: 2, left: '45.27%', top: '44.70%', color: '#EF4444', name: 'Nicholas', image: '/images/characters/Nicholas_Mission.png' },
    { id: 3, left: '43.20%', top: '49.68%', color: '#EF4444', name: 'Ryu', image: '/images/characters/Ryu_portrait1.png' },
    { id: 4, left: '54.73%', top: '43.58%', color: '#EF4444', name: 'Levin', image: '/images/characters/Levin3.png' },
    { id: 5, left: '57.71%', top: '48.18%', color: '#EF4444', name: 'Luna', image: '/images/characters/Luna.jpg' },
    
    // ORANGE - Middle Circle (4 characters)
    { id: 6, left: '44.78%', top: '35.87%', color: '#F97316', name: 'Henry', image: '/images/characters/Henry_CCM-01.jpg' },
    { id: 7, left: '53.40%', top: '35.62%', color: '#F97316', name: 'Edward & Amelia', image: '/images/characters/Amelia_Edward_Veyra.jpg' },
    { id: 8, left: '62.19%', top: '40.10%', color: '#F97316', name: 'Auren', image: '/images/characters/Auren.png' },
    { id: 9, left: '37.73%', top: '37.74%', color: '#F97316', name: 'Elara Lysi', image: '/images/characters/Elara_Lysi_1.jpg' },
    
    // YELLOW - Outer Circle (4 characters)
    { id: 10, left: '29.60%', top: '42.09%', color: '#EAB308', name: 'Dr. Anna Singh', image: '/images/characters/Dr_Anna_Singh.jpg' },
    { id: 11, left: '44.36%', top: '19.95%', color: '#EAB308', name: 'Elara Nox', image: '/images/characters/ElaraNox.png' },
    { id: 12, left: '55.31%', top: '22.19%', color: '#EAB308', name: 'Kael Sorely', image: '/images/characters/Kael1_small.png' },
    { id: 13, left: '70.48%', top: '46.57%', color: '#EAB308', name: 'Luisa Singh', image: '/images/characters/Luisa_Singh.jpg' },
  ];

  return (
    <div className="min-h-screen relative" style={{ background: '#000000' }}>
      {/* Animated starfield canvas */}
      <canvas 
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#FF8C42]">
            The Aurelia Constellation
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Thirteen souls forming the tree of consciousness - each a star in the Aurelia universe.
          </p>
        </div>

        {/* Aurelia Stars Image with Character Bubbles */}
        <div className="container mx-auto px-4 pb-16">
          <div className="flex justify-center items-center relative">
            <img 
              src="/images/Aurelia_Stars.png" 
              alt="Aurelia Constellation Tree" 
              className="max-w-full h-auto"
              style={{ mixBlendMode: 'lighten' }}
            />
            
            {/* Character Bubbles with Portraits */}
            {bubbles.map((bubble) => (
              <div
                key={bubble.id}
                className="absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-50"
                style={{
                  left: bubble.left,
                  top: bubble.top,
                  transform: 'translate(-50%, -50%)'
                }}
                title={bubble.name}
              >
                {/* Character portrait with colored border */}
                <div 
                  className="w-12 h-12 rounded-full border-3 overflow-hidden"
                  style={{ 
                    borderColor: bubble.color,
                    borderWidth: '3px',
                    borderStyle: 'solid',
                    boxShadow: `0 0 15px ${bubble.color}80, 0 0 30px ${bubble.color}40`
                  }}
                >
                  <img 
                    src={bubble.image} 
                    alt={bubble.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
