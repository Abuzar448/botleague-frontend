import React from 'react';
import heroImg from '../assets/hero_BackgroundImage.png';

export default function Hero() {
  return (
    <section className="w-full bg-[#030303] text-white min-h-[calc(100vh-80px)] relative flex items-center font-sans overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/100 via-[#030303]/70 to-transparent hidden lg:block z-10 w-2/3" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#030303]/80 to-transparent lg:hidden z-10 h-1/2" />
        
        <img 
          src={heroImg} 
          alt="Robotics Combat Battle" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute top-6 right-6 sm:right-10 z-30 flex items-center gap-2.5 bg-black/80 backdrop-blur-md border border-zinc-800 px-4 py-2 rounded-full text-xs">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <span className="text-zinc-300 font-medium">
          <span className="text-red-500 font-black tracking-wider uppercase mr-1.5">• LIVE :</span> 
          Episode 14 . Bengaluru Regionals
        </span>
        <a href="#live" className="text-red-500 font-black hover:text-red-400 ml-2 uppercase tracking-widest text-[11px] transition-colors cursor-pointer">
          Watch Live
        </a>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-6 sm:px-10 lg:pl-12 py-12 z-20 pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[84px] font-black tracking-tight uppercase text-white leading-[0.9] mb-6 drop-shadow-2xl">
            India's Ultimate <br />
            <span className="tracking-wide">Robotics Arena</span>
          </h1>

          <p className="text-zinc-300 text-sm md:text-xl font-medium max-w-xl mb-10 leading-relaxed drop-shadow-md">
            Build.Compete.Rank.The National <br className="hidden md:inline" /> 
            Ecosystem for Robotics Arena
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#E63946] hover:bg-red-700 text-white font-bold uppercase tracking-wider text-xs px-10 py-4 rounded-sm transition-all shadow-lg shadow-red-600/30 border border-red-500 cursor-pointer">
              Create Account
            </button>
            <button className="border border-zinc-400 hover:border-white text-white font-bold uppercase tracking-wider text-xs px-10 py-4 rounded-sm transition-all bg-black/40 backdrop-blur-sm cursor-pointer">
              Explore Events
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}