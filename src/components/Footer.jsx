import React from 'react';

import sponsor1 from '../assets/sponsor1.png';
import sponsor2 from '../assets/sponsor2.png';
import sponsor3 from '../assets/sponsor3.png';
import sponsor4 from '../assets/sponsor4.png';
import sponsor5 from '../assets/sponsor5.png';
import sponsor6 from '../assets/sponsor6.png';

export default function Footer() {
  const sponsors = [
    { name: "NIT DELHI", image: sponsor1 },
    { name: "INDIAN BIT", image: sponsor2 },
    { name: "NIT SILCHAR", image: sponsor3 },
    { name: "ROBO COMPANY", image: sponsor4 },
    { name: "IIT BOMBAY", image: sponsor5 },
    { name: "ROBO COMPANY", image: sponsor6 }
  ];

  return (
    <footer className="w-full bg-[#030303] text-white pt-24 pb-12 px-6 sm:px-10 lg:px-12 font-sans select-none">
      <div className="max-w-[1440px] mx-auto">
        
        <div className="mb-20">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white mb-16">
            SPONSORS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12 items-center">
            {sponsors.map((sponsor, idx) => (
              <div key={idx} className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-20 h-16 rounded-xl border border-zinc-800/80 flex items-center justify-center overflow-hidden p-2 transition-colors group-hover:border-zinc-700 bg-[#0d0d0f]">
                  <img 
                    src={sponsor.image} 
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-102"
                    loading="lazy"
                  />
                </div>
                <span className="text-zinc-400 font-black tracking-widest text-lg uppercase transition-colors group-hover:text-white">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <hr className="border-zinc-900 my-12" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          <div className="md:col-span-8 flex flex-col space-y-6">
            <h3 className="text-white font-black text-xl tracking-wider uppercase">
              QUICK LINKS
            </h3>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 max-w-[480px]">
              <a href="#arena" className="text-zinc-500 hover:text-[#E63946] text-base font-semibold transition-colors uppercase tracking-wide">The Arena</a>
              <a href="#join-team" className="text-zinc-500 hover:text-[#E63946] text-base font-semibold transition-colors uppercase tracking-wide">Join the Team</a>
              <a href="#episodes" className="text-zinc-500 hover:text-[#E63946] text-base font-semibold transition-colors uppercase tracking-wide">Episodes</a>
              <a href="#sponsorships" className="text-zinc-500 hover:text-[#E63946] text-base font-semibold transition-colors uppercase tracking-wide">Sponsorships</a>
              <a href="#rankings" className="text-zinc-500 hover:text-[#E63946] text-base font-semibold transition-colors uppercase tracking-wide">National Rankings</a>
              <a href="#help" className="text-zinc-500 hover:text-[#E63946] text-base font-semibold transition-colors uppercase tracking-wide">Help Center</a>
              <a href="#programs" className="text-zinc-500 hover:text-[#E63946] text-base font-semibold transition-colors uppercase tracking-wide">Programs</a>
              <a href="#contact" className="text-zinc-500 hover:text-[#E63946] text-base font-semibold transition-colors uppercase tracking-wide">Contact Us</a>
              <a href="#rulebooks" className="text-zinc-500 hover:text-[#E63946] text-base font-semibold transition-colors uppercase tracking-wide">Rulebooks</a>
              <a href="#legal" className="text-zinc-500 hover:text-[#E63946] text-base font-semibold transition-colors uppercase tracking-wide">Legal</a>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col space-y-6">
            <div className="w-full">
              <h3 className="text-white font-black text-xl tracking-wider uppercase mb-6">
                SOCIAL MEDIA
              </h3>
              
              <div className="flex space-x-6 items-center">
                {/* YouTube */}
                <a href="#youtube" className="text-zinc-500 hover:text-[#E63946] transition-colors" aria-label="Youtube">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 0 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                <a href="#instagram" className="text-zinc-500 hover:text-[#E63946] transition-colors" aria-label="Instagram">
                  <svg className="w-7 h-7 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                <a href="#facebook" className="text-zinc-500 hover:text-[#E63946] transition-colors" aria-label="Facebook">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a href="#twitter" className="text-zinc-500 hover:text-[#E63946] transition-colors" aria-label="Twitter">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}