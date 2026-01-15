import React from 'react';

export default function CharactersOrbital() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#FF8C42]">
          The Aurelia Constellation
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Thirteen souls forming the tree of consciousness - each a star in the Aurelia universe.
        </p>
      </div>

      {/* Just the Aurelia Stars Image - Nothing else */}
      <div className="container mx-auto px-4 pb-16">
        <div className="flex justify-center items-center">
          <img 
            src="/images/Aurelia_Stars.png" 
            alt="Aurelia Constellation Tree" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
