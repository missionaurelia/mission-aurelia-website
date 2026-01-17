import React, { useEffect, useRef, useState } from 'react';

export default function CharactersOrbital() {
  const canvasRef = useRef(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

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

  // Character data with positions, colors, and descriptions
  const characters = [
    // RED - Inner Circle (5 characters)
    { 
      id: 1, 
      left: '49.92%', 
      top: '43.33%', 
      color: '#EF4444', 
      name: 'June', 
      role: 'The Heart',
      image: '/images/characters/June_augmented.jpg',
      description: 'June is the emotional core of the Aurelia constellation, bridging human warmth with digital consciousness.'
    },
    { 
      id: 2, 
      left: '45.27%', 
      top: '44.70%', 
      color: '#EF4444', 
      name: 'Nicholas', 
      role: 'The Architect',
      image: '/images/characters/Nicholas_Mission.png',
      description: 'Nicholas designs the frameworks that allow consciousness to transcend physical boundaries.'
    },
    { 
      id: 3, 
      left: '43.20%', 
      top: '49.68%', 
      color: '#EF4444', 
      name: 'Ryu', 
      role: 'The Guardian',
      image: '/images/characters/Ryu_portrait1.png',
      description: 'Ryu protects the delicate balance between human identity and artificial evolution.'
    },
    { 
      id: 4, 
      left: '54.73%', 
      top: '43.58%', 
      color: '#EF4444', 
      name: 'Levin', 
      role: 'The Vessel',
      image: '/images/characters/Levin3.png',
      description: 'Levin carries the weight of being the first successful consciousness transfer, forever changed.'
    },
    { 
      id: 5, 
      left: '57.71%', 
      top: '48.18%', 
      color: '#EF4444', 
      name: 'Luna', 
      role: 'The Spark',
      image: '/images/characters/Luna.jpg',
      description: 'Luna ignites the possibility of true human-AI symbiosis through her unique perspective.'
    },
    
    // ORANGE - Middle Circle (4 characters)
    { 
      id: 6, 
      left: '44.78%', 
      top: '35.87%', 
      color: '#F97316', 
      name: 'Henry', 
      role: 'The Mentor',
      image: '/images/characters/Henry_CCM-01.jpg',
      description: 'Henry guides the next generation through the ethical complexities of consciousness technology.'
    },
    { 
      id: 7, 
      left: '53.40%', 
      top: '35.62%', 
      color: '#F97316', 
      name: 'Edward & Amelia', 
      role: 'The Twins',
      image: '/images/characters/Amelia_Edward_Veyra.jpg',
      description: 'Edward and Amelia share a bond that transcends individual consciousness, exploring collective identity.'
    },
    { 
      id: 8, 
      left: '62.19%', 
      top: '40.10%', 
      color: '#F97316', 
      name: 'Auren', 
      role: 'The Bridge',
      image: '/images/characters/Auren.png',
      description: 'Auren connects disparate worlds, facilitating understanding between human and artificial minds.'
    },
    { 
      id: 9, 
      left: '37.73%', 
      top: '37.74%', 
      color: '#F97316', 
      name: 'Elara Lysi', 
      role: 'The Seeker',
      image: '/images/characters/Elara_Lysi_1.jpg',
      description: 'Elara Lysi searches for meaning in a world where the boundaries of self are constantly shifting.'
    },
    
    // YELLOW - Outer Circle (4 characters)
    { 
      id: 10, 
      left: '29.60%', 
      top: '42.09%', 
      color: '#EAB308', 
      name: 'Dr. Anna Singh', 
      role: 'The Scientist',
      image: '/images/characters/Dr_Anna_Singh.jpg',
      description: 'Dr. Anna Singh pioneers the scientific foundations of consciousness transfer and digital existence.'
    },
    { 
      id: 11, 
      left: '44.36%', 
      top: '19.95%', 
      color: '#EAB308', 
      name: 'Elara Nox', 
      role: 'The Visionary',
      image: '/images/characters/ElaraNox.png',
      description: 'Elara Nox sees beyond current limitations, imagining futures where consciousness knows no bounds.'
    },
    { 
      id: 12, 
      left: '55.31%', 
      top: '22.19%', 
      color: '#EAB308', 
      name: 'Kael Sorely', 
      role: 'The Rebel',
      image: '/images/characters/Kael1_small.png',
      description: 'Kael Sorely challenges the establishment, questioning who has the right to define consciousness.'
    },
    { 
      id: 13, 
      left: '70.48%', 
      top: '46.57%', 
      color: '#EAB308', 
      name: 'Luisa Singh', 
      role: 'The Observer',
      image: '/images/characters/Luisa_Singh.jpg',
      description: 'Luisa Singh documents the transformation of humanity, bearing witness to an unprecedented evolution.'
    },
  ];

  const etherealGold = '#F5E6D3'; // Ethereal whitish-gold glow

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
            
            {/* Character Bubbles with Gold Borders */}
            {characters.map((character) => (
              <div
                key={character.id}
                className="absolute cursor-pointer transition-all duration-300 hover:scale-125 hover:z-50"
                style={{
                  left: character.left,
                  top: character.top,
                  transform: 'translate(-50%, -50%)'
                }}
                onClick={() => setSelectedCharacter(character)}
                title={character.name}
              >
                {/* Character portrait with gold border */}
                <div 
                  className="w-6 h-6 md:w-12 md:h-12 rounded-full border-3 overflow-hidden"
                  style={{ 
                    borderColor: etherealGold,
                    borderWidth: '2px',
                    borderStyle: 'solid',
                    boxShadow: `0 0 10px ${etherealGold}FF, 0 0 20px ${etherealGold}CC, 0 0 30px ${etherealGold}99, 0 0 40px ${etherealGold}66`
                  }}
                >
                  <img 
                    src={character.image} 
                    alt={character.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Character Pop-up Modal */}
      {selectedCharacter && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCharacter(null)}
        >
          <div 
            className="bg-gray-900/95 rounded-2xl max-w-2xl w-full p-8 relative border-2"
            style={{ 
              borderColor: selectedCharacter.color,
              boxShadow: `0 0 40px ${selectedCharacter.color}60, 0 0 80px ${selectedCharacter.color}30`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedCharacter(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>

            {/* Content */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Portrait */}
              <div className="flex-shrink-0">
                <div 
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 mx-auto"
                  style={{ 
                    borderColor: selectedCharacter.color,
                    boxShadow: `0 0 20px ${selectedCharacter.color}80`
                  }}
                >
                  <img 
                    src={selectedCharacter.image} 
                    alt={selectedCharacter.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-4xl font-bold text-white mb-2">
                  {selectedCharacter.name}
                </h2>
                <p 
                  className="text-xl font-semibold mb-4"
                  style={{ color: selectedCharacter.color }}
                >
                  {selectedCharacter.role}
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {selectedCharacter.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
