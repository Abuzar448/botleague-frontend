import React from 'react';
import { FaMedal, FaGavel, FaBriefcase, FaBolt } from 'react-icons/fa6';

import leaderboardImg from '../assets/lastiimage.png'; 

export default function LeagueAdvantage() {
  const advantages = [
    {
      icon: <FaMedal className="w-8 h-8 sm:w-10 sm:h-10 text-[#E63946]" />,
      title: "NATIONAL RECOGNITION",
      desc: "“Benchmark your skills on India's official robotics leaderboard.”"
    },
    {
      icon: <FaGavel className="w-8 h-8 sm:w-10 sm:h-10 text-[#E63946]" />,
      title: "FAIR JUDGING",
      desc: "“Compete with confidence under standardized, expert-led evaluation.”"
    },
    {
      icon: <FaBriefcase className="w-8 h-8 sm:w-10 sm:h-10 text-[#E63946]" />,
      title: "CAREER OPS",
      desc: "“Bridge the gap between arena victories and top-tier tech placements.”"
    },
    {
      icon: <FaBolt className="w-8 h-8 sm:w-10 sm:h-10 text-[#E63946]" />,
      title: "HIGH - ENERGY ECO",
      desc: "“Join a nationwide community of elite innovators and robotics athletes.”"
    }
  ];

  return (
    <section className="w-full bg-[#030303] text-white py-24 px-6 sm:px-10 lg:px-12 font-sans border-b border-zinc-900 select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* items-stretch forces both columns to dynamically share the exact same height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          
          {/* ================= LEFT COLUMN: ADVANTAGES LIST ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            
            {/* Header Titles (Strictly Big Scaling) */}
            <div className="mb-14">
              <span className="text-[#E63946] font-bold tracking-widest text-[30px] uppercase block mb-3">
                WHY REGISTER ?
              </span>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
                THE LEAGUE ADVANTAGE
              </h2>
            </div>

            {/* Content Rows Matrix */}
            <div className="flex flex-col space-y-10">
              {advantages.map((item, index) => (
                <div key={index} className="flex items-start space-x-6 group">
                  
                  {/* Icon Container with fixed dimension scaling */}
                  <div className="flex-shrink-0 p-1 mt-1">
                    {item.icon}
                  </div>
                  
                  {/* Metadata Text Flow */}
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-2xl font-black text-white tracking-wide uppercase transition-colors group-hover:text-red-400">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-base sm:text-lg leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                </div>
              ))}
            </div>

          </div>

          {/* ================= RIGHT COLUMN: MATCHED HEIGHT IMAGE WRAPPER ================= */}
          <div className="lg:col-span-5 flex flex-col h-full w-full">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-zinc-800/60 bg-[#0d0d0f]/40 p-4 shadow-2xl shadow-blue-900/10 transition-all duration-300 hover:border-zinc-700 flex">
              <img 
                src={leaderboardImg} 
                alt="Botleague Leaderboard Showcase" 
                className="w-full h-full object-cover rounded-xl" 
                style={{ minHeight: "100%" }}
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}