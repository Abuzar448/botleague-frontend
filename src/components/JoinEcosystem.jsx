import React from 'react';

export default function JoinEcosystem() {
  const cards = [
    { id: "judge", title: "BECOME IN JUDGE" },
    { id: "volunteer", title: "VOLUNTEER" },
    { id: "community", title: "COMMUNITY MEMBER" }
  ];

  return (
    <section className="w-full bg-[#030303] text-white py-24 px-6 sm:px-10 lg:px-12 font-sans border-b border-zinc-900 select-none">
      <div className="max-w-[1440px] mx-auto">
        
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-16">
          JOIN THE ECOSYSTEM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div 
              key={card.id} 
              className="bg-[#0f0f11] border border-zinc-800/80 rounded-xl p-8 flex flex-col justify-between min-h-[460px] transition-all duration-300 hover:border-zinc-700"
            >
              <h3 className="text-2xl font-black text-white tracking-wide uppercase mb-8 leading-snug min-h-[64px]">
                {card.title}
              </h3>

              <form onSubmit={(e) => e.preventDefault()} className="flex-grow flex flex-col space-y-5">
                <div className="w-full">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="w-full bg-[#18181b] border border-zinc-800/80 rounded-lg px-4 py-4 text-base font-medium text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                    required
                  />
                </div>

                <div className="w-full">
                  <input 
                    type="text" 
                    placeholder="Location" 
                    className="w-full bg-[#18181b] border border-zinc-800/80 rounded-lg px-4 py-4 text-base font-medium text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                    required
                  />
                </div>

                <div className="w-full">
                  <input 
                    type="text" 
                    placeholder="Enroll" 
                    className="w-full bg-[#18181b] border border-zinc-800/80 rounded-lg px-4 py-4 text-base font-medium text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
                    required
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#FF4D4D] hover:bg-red-600 text-white font-black text-lg tracking-widest uppercase py-4 rounded-lg mt-4 transition-all duration-200 cursor-pointer border-none"
                >
                  SIGN UP
                </button>
              </form>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}