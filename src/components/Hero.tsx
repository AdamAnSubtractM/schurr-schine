import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen bg-navy overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-navy to-navy/50 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundPosition: 'center 30%'
        }}
      ></div>
      <div className="relative h-full flex items-center z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-4">
              Restore Your <span className="text-amber">Vision</span>
            </h1>
            <p className="text-silver text-xl mb-8">
              Professional headlight restoration that brings clarity, safety, and pride back to your vehicle.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber hover:bg-amber/90 text-navy font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Our Services
              </button>
              <button 
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                See Our Work
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy to-transparent z-10"></div>
    </section>
  );
};

export default Hero;