import React from 'react';
import { FaWrench, FaBuildingColumns, FaRankingStar, FaUsersGear } from 'react-icons/fa6';

export default function UserJourney() {
  const steps = [
    {
      step: "STEP 1",
      title: "BUILD YOUR TEAM",
      icon: <FaWrench className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    },
    {
      step: "STEP 2",
      title: "COMPETE ACROSS INDIA",
      icon: <FaBuildingColumns className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    },
    {
      step: "STEP 3",
      title: "EARN NATIONAL RANKING & VALUE",
      icon: <FaRankingStar className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    },
    {
      step: "STEP 4",
      title: "JOIN THE LEAGUE",
      icon: <FaUsersGear className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
    }
  ];

  return (
    <section id="journey" className="w-full bg-[#030303] text-white py-24 px-6 sm:px-10 lg:px-12 font-sans border-b border-zinc-900 select-none">
      <div className="max-w-[1440px] mx-auto text-center">
        
        {/* Section Top Headers */}
        <span className="text-[#E63946] font-bold tracking-widest text-sm uppercase block mb-3">
          USER JOURNEY
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mb-4 text-white">
          YOUR PATH TO THE LEAGUE
        </h2>
        <p className="text-zinc-500 text-sm sm:text-base max-w-xl mx-auto font-medium mb-20">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>

        {/* Journey Timeline Wrapper */}
        <div className="relative w-full max-w-5xl mx-auto mt-12">
          
          {/* Horizontal Blue Connecting Line - Background Layer */}
          <div className="absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-blue-700/80 hidden md:block z-0 shadow-[0_0_12px_rgba(29,78,216,0.5)]" />

          {/* Steps Map Flex Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {steps.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                
                {/* Circular Outer Heavy Node ring */}
                <div className="w-24 h-24 rounded-full bg-[#121214] border-4 border-zinc-800 flex items-center justify-center relative transition-all duration-300 group-hover:border-zinc-700 shadow-md">
                  {/* Inside Concentric Blue Ring Circuit */}
                  <div className="absolute inset-2 rounded-full border-2 border-blue-600/70 flex items-center justify-center transition-all duration-300 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.6)] bg-[#0d0d0f]">
                    {item.icon}
                  </div>
                </div>

                {/* Vertical Tick Indicator Line directly matching the design layout */}
                <div className="w-[1px] h-6 bg-zinc-700 mt-5 mb-3 transition-colors group-hover:bg-zinc-500" />

                {/* Text Layout Metadata */}
                <span className="text-[#E63946] font-bold text-xs tracking-widest block mb-2">
                  {item.step}
                </span>
                
                <h3 className="text-white font-black text-sm sm:text-base tracking-wide max-w-[180px] uppercase leading-snug transition-colors group-hover:text-red-400">
                  {item.title}
                </h3>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}