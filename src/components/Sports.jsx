import React from 'react';


import sport1 from '../assets/sport1.jpg'; 
import sport2 from '../assets/sport2.jpg'; 
import sport3 from '../assets/sport3.jpg'; 
import sport4 from '../assets/sport4.jpg'; 
import sport5 from '../assets/sport5.jpg'; 
import sport6 from '../assets/sport2.jpg'; 

export default function Sports() {
  const disciplines = [
    {
      title: "Robo Race",
      image: sport1
    },
    {
      title: "Line Follower",
      image: sport2
    },
    {
      title: "RC Racing",
      image: sport3
    },
    {
      title: "FPV Drone Racing & Aeromodelling",
      image: sport4
    },
    {
      title: "Robo Hockey",
      image: sport5
    },
    {
      title: "Robo War",
      image: sport6
    }
  ];

  return (
    <section className="w-full bg-[#09090b] text-white py-24 px-6 sm:px-10 lg:px-12 font-sans border-b border-zinc-900 select-none">
      <div className="max-w-[1440px] mx-auto">

        <div className="mb-16">
          <span className="text-[#E63946] font-bold tracking-widest text-[30px] uppercase block mb-3">
            SPORTS
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            COMPETITION DISCIPLINES
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {disciplines.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-[#121214] border border-zinc-800/80 rounded-xl overflow-hidden aspect-[4/5] flex flex-col justify-end transition-all duration-300 hover:border-zinc-600 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
              </div>

              <div className="relative z-10 p-6 w-full bg-black/60 backdrop-blur-[2px] border-t border-zinc-800/40">
                <h3 className="text-white font-black text-lg sm:text-xl tracking-wide uppercase transition-colors group-hover:text-red-400 line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

          <div className="hidden lg:flex relative bg-[#0c0c0e] border border-dashed border-zinc-800/60 rounded-xl aspect-[4/5] items-center justify-center overflow-hidden p-6 opacity-30 select-none">
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-20 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-600 text-xs font-mono">
              SYS
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}