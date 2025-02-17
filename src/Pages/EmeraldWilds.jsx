import React from 'react';
import { useNavigate } from 'react-router-dom';
import usePreventZoom from "../Components/PreventZoom";
const EmeraldWilds = () => {
  usePreventZoom(); 
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center py-12 px-4"
      style={{ backgroundImage: "url('/forest theme.svg')" , backgroundSize: "cover",  backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed", width: "100vw", height: "100vh", overflow: "hidden", position: "absolute", top: 0, left: 0, }}
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-white font-press-start">Emerald Wilds</h1>
          <p className="text-xl text-white/90">Venture through forest preservation</p>
        </div>

        <div className="bg-green-900/70 backdrop-blur-sm p-8 rounded-lg text-white">
          <p className="text-lg leading-relaxed">
            This land was once lush and full of life. But greed has scarred it—trees felled, 
            rivers poisoned, creatures displaced. Show me you understand nature's balance.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate('/end')}
            className="bg-green-500 hover:bg-green-600 text-white font-press-start 
                     py-4 px-8 rounded-lg transition-all duration-300 
                     hover:scale-105 hover:shadow-xl"
          >
            Begin Challenge
          </button>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate('/home')}
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

export default EmeraldWilds;