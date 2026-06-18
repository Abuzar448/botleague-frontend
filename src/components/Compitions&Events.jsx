import React from 'react';

export default function Competitions() {
  return (
    <section id="events" className="w-full bg-[#030303] text-white py-24 px-6 sm:px-10 lg:px-12 font-sans border-b border-zinc-900">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Main Title */}
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16 text-white">
          Competitions & Events
        </h2>

        {/* 3-Column Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* ================= COLUMN 1: LIVE NOW ================= */}
          <div className="flex flex-col gap-4">
            <span className="text-red-500 font-bold tracking-widest text-sm uppercase">
              LIVE NOW
            </span>
            
            {/* Live Bracket Main Card */}
            <div className="bg-[#121214] border border-zinc-800 rounded-lg p-6 min-h-[520px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-2xl font-black text-white tracking-wide">Bengaluru Regionals</h3>
                  <span className="bg-red-600/20 text-red-500 border border-red-600/30 text-[10px] font-black uppercase px-2 py-0.5 rounded-sm animate-pulse">
                    Ongoing
                  </span>
                </div>
                <p className="text-zinc-500 text-sm mb-6">Lorem Ipsum</p>
                <div className="w-full h-[1px] bg-zinc-800 mb-6" />
              </div>

              {/* ABSOLUTE COORDINATE CANVAS SYSTEM (No shifting possible) */}
              <div className="relative w-full h-[320px] bg-transparent select-none mt-auto">
                
                {/* ---------------- ROUND 1 BOXES (LEFT) ---------------- */}
                {/* Team 1 Box */}
                <div className="absolute left-0 top-[0%] w-[28%] h-9 bg-[#1c1c1f] rounded-sm border border-zinc-800 hover:border-zinc-700 transition-colors" />
                {/* Team 2 Box */}
                <div className="absolute left-0 top-[18%] w-[28%] h-9 bg-[#1c1c1f] rounded-sm border border-zinc-800 hover:border-zinc-700 transition-colors" />
                
                {/* Team 3 Box */}
                <div className="absolute left-0 top-[55%] w-[28%] h-9 bg-[#1c1c1f] rounded-sm border border-zinc-800 hover:border-zinc-700 transition-colors" />
                {/* Team 4 Box */}
                <div className="absolute left-0 top-[73%] w-[28%] h-9 bg-[#1c1c1f] rounded-sm border border-zinc-800 hover:border-zinc-700 transition-colors" />


                {/* ---------------- FIRST LEVEL RED LINES ---------------- */}
                {/* Upper Fork Line: Connects Team 1 & Team 2 precisely at their middle points */}
                <div className="absolute left-[28%] top-[5.5%] w-[8%] h-[58px] border-t border-b border-r border-[#E63946] rounded-r-sm opacity-80" />
                {/* Extension to Semi Final 1 */}
                <div className="absolute left-[36%] top-[14.5%] w-[4%] h-[1px] bg-[#E63946] opacity-80" />

                {/* Lower Fork Line: Connects Team 3 & Team 4 precisely at their middle points */}
                <div className="absolute left-[28%] top-[60.5%] w-[8%] h-[58px] border-t border-b border-r border-[#E63946] rounded-r-sm opacity-80" />
                {/* Extension to Semi Final 2 */}
                <div className="absolute left-[36%] top-[69.5%] w-[4%] h-[1px] bg-[#E63946] opacity-80" />


                {/* ---------------- ROUND 2 BOXES (MIDDLE) ---------------- */}
                {/* Semi Final 1 Box */}
                <div className="absolute left-[40%] top-[9%] w-[28%] h-9 bg-[#1c1c1f] rounded-sm border border-zinc-800 hover:border-zinc-700 transition-colors" />
                {/* Semi Final 2 Box */}
                <div className="absolute left-[40%] top-[64%] w-[28%] h-9 bg-[#1c1c1f] rounded-sm border border-zinc-800 hover:border-zinc-700 transition-colors" />


                {/* ---------------- SECOND LEVEL RED LINES ---------------- */}
                {/* Grand Final Center Fork: Connects Semi Final 1 & 2 perfectly from their center lines */}
                <div className="absolute left-[68%] top-[14.5%] w-[8%] h-[177px] border-t border-b border-r border-[#E63946] rounded-r-sm opacity-80" />
                {/* Final Extension into Winner Slot */}
                <div className="absolute left-[76%] top-[42%] w-[4%] h-[1px] bg-[#E63946] opacity-80" />


                {/* ---------------- ROUND 3 BOX (RIGHT WINNER) ---------------- */}
                {/* Grand Winner Box Slot */}
                <div className="absolute right-0 top-[36.5%] w-[20%] h-9 bg-[#1c1c1f] rounded-sm border border-zinc-800 shadow-xl shadow-red-600/10 hover:border-zinc-700 transition-colors" />

              </div>
            </div>
          </div>

          {/* ================= COLUMN 2: UPCOMING ================= */}
          <div className="flex flex-col gap-6">
            <span className="text-zinc-400 font-bold tracking-widest text-sm uppercase">
              UPCOMING
            </span>

            {/* Upcoming Event Box 1 */}
            <div className="bg-[#121214] border border-zinc-800 rounded-lg p-6 flex flex-col justify-between min-h-[238px]">
              <div>
                <h3 className="text-2xl font-black text-white tracking-wide mb-5">Event in Mumbai</h3>
                <div className="grid grid-cols-3 gap-4 text-left mb-6">
                  <div>
                    <p className="text-zinc-500 text-[11px] uppercase font-bold tracking-wider">Date</p>
                    <p className="text-zinc-200 text-sm font-bold mt-1.5">11/11/25</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[11px] uppercase font-bold tracking-wider">Location</p>
                    <p className="text-zinc-200 text-sm font-bold mt-1.5">BKC</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[11px] uppercase font-bold tracking-wider">Category</p>
                    <p className="text-zinc-200 text-sm font-bold mt-1.5">Lorem</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#E63946] hover:bg-red-700 transition-colors text-white text-xs font-black uppercase py-3.5 rounded-sm tracking-widest cursor-pointer">
                REGISTER
              </button>
            </div>

            {/* Upcoming Event Box 2 */}
            <div className="bg-[#121214] border border-zinc-800 rounded-lg p-6 flex flex-col justify-between min-h-[238px]">
              <div>
                <h3 className="text-2xl font-black text-white tracking-wide mb-5">Event in Delhi</h3>
                <div className="grid grid-cols-3 gap-4 text-left mb-6">
                  <div>
                    <p className="text-zinc-500 text-[11px] uppercase font-bold tracking-wider">Date</p>
                    <p className="text-zinc-200 text-sm font-bold mt-1.5">11/11/25</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[11px] uppercase font-bold tracking-wider">Location</p>
                    <p className="text-zinc-200 text-sm font-bold mt-1.5">BKC</p>
                  </div>
                  <div>
                    <p className="text-zinc-500 text-[11px] uppercase font-bold tracking-wider">Category</p>
                    <p className="text-zinc-200 text-sm font-bold mt-1.5">Lorem</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#E63946] hover:bg-red-700 transition-colors text-white text-xs font-black uppercase py-3.5 rounded-sm tracking-widest cursor-pointer">
                REGISTER
              </button>
            </div>
          </div>

          {/* ================= COLUMN 3: PAST RESULTS ================= */}
          <div className="flex flex-col gap-4">
            <span className="text-zinc-400 font-bold tracking-widest text-sm uppercase">
              PAST RESULTS
            </span>

            {/* Past Results Container Card */}
            <div className="bg-[#121214] border border-zinc-800 rounded-lg p-6 min-h-[500px] flex flex-col justify-start">
              
              {/* Row 1 */}
              <div className="py-5 first:pt-0 border-b border-zinc-800">
                <h3 className="text-xl font-bold text-white tracking-wide">Bengaluru Regionals</h3>
                <p className="text-zinc-500 text-sm mt-1.5">Lorem Ipsum</p>
              </div>

              {/* Row 2 */}
              <div className="py-6 border-b border-zinc-800">
                <h3 className="text-xl font-bold text-white tracking-wide">Bengaluru Regionals</h3>
                <p className="text-zinc-200 text-sm mt-1.5">Lorem Ipsum</p>
              </div>

              {/* Row 3 */}
              <div className="py-6">
                <h3 className="text-xl font-bold text-white tracking-wide">Bengaluru Regionals</h3>
                <p className="text-zinc-200 text-sm mt-1.5">Lorem Ipsum</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}