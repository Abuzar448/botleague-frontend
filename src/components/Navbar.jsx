import React, { useState } from 'react';
import logoImg from '../assets/navbar_heading.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const navLinks = [
    { name: 'Events', href: '#events' },
    { name: 'Programs', href: '#programs' },
    { name: 'Community', href: '#community' },
    { name: 'Ranks', href: '#ranks' }
  ];

  return (
    <nav className="w-full bg-[#030303] border-b border-zinc-900 sticky top-0 z-50 font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <div className="flex items-center">
          <a href="#" className="flex items-center hover:opacity-90 transition-opacity">
            <img 
              src={logoImg} 
              alt="BotLeague Logo" 
              className="h-10 md:h-12 w-auto object-contain" 
            />
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-12 h-full">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-base font-semibold tracking-wide text-zinc-300 hover:text-white transition-colors relative flex items-center h-full group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <button className="border border-zinc-700 hover:border-zinc-400 text-sm font-bold uppercase tracking-wider px-6 py-2.5 rounded transition-all text-white bg-transparent cursor-pointer">
            LOGIN
          </button>
          <button className="bg-[#E63946] hover:bg-red-700 text-white text-sm font-bold uppercase tracking-wider px-6 py-2.5 rounded transition-all shadow-md shadow-red-600/10 cursor-pointer">
            REGISTER NOW
          </button>
        </div>

        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-zinc-400 hover:text-white focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={false}
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0A0A0C] border-b border-zinc-900" id="mobile-menu">
          <div className="px-4 pt-2 pb-6 space-y-2 text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="block px-3 py-3 rounded-md text-lg font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-6 pb-2 border-t border-zinc-800 flex flex-col gap-3 cursor-pointer">
              <button className="w-full border border-zinc-700 text-white text-base font-bold uppercase py-3 rounded bg-transparent cursor-pointer">
                LOGIN
              </button>
              <button className="w-full bg-[#E63946] text-white text-base font-bold uppercase py-3 rounded cursor-pointer">
                REGISTER NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}