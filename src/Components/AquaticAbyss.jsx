import React from 'react';
import { useNavigate } from 'react-router-dom';

const AquaticAbyss = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center py-12 px-4"
      style={{ backgroundImage: "url('/assets/ocean_theme.svg')" }}
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-white font-press-start">Aquatic Abyss</h1>
          <p className="text-xl text-white/90">Explore the depths of ocean conservation</p>
        </div>

        {/* Theme Introduction */}
        <div className="bg-blue-900/70 backdrop-blur-sm p-8 rounded-lg text-white">
          <p className="text-lg leading-relaxed">
            The ocean… vast, deep, and full of wonders. But it is fading. 
            Plastic islands drift in the currents, coral reefs bleach, and marine life suffers. 
            You must prove your wisdom to save it.
          </p>
        </div>

        {/* Start Quiz Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/aquaticquiz')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-press-start 
                     py-4 px-8 rounded-lg transition-all duration-300 
                     hover:scale-105 hover:shadow-xl"
          >
            Begin Challenge
          </button>
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate('/')}
            className="text-white/80 hover:text-white font-press-start 
                     py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Return to Realms
          </button>
        </div>
      </div>
    </div>
  );
};

export default AquaticAbyss;