import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaLightbulb, FaUserGear, FaBrain } from 'react-icons/fa6';

import featuresDiagram from '../assets/sectionrightImage.png'; 

export default function AboutAndCategories() {
  const features = [
    {
      num: "1.",
      title: "STRUCTURED EVENTS",
      desc: "“From one-off events to a year-round competitive season.”"
    },
    {
      num: "2.",
      title: "DIGITAL IDENTITY",
      desc: "“Your professional robotics legacy, tracked and verified.”"
    },
    {
      num: "3.",
      title: "NATIONAL RANKING",
      desc: "“Benchmark your skills against the best engineers in India.”"
    },
    {
      num: "4.",
      title: "CAREER PATHWAY",
      desc: "“Turning arena victories into real-world industry opportunities.”"
    }
  ];

  const categories = [
    {
      icon: <div className="w-16 h-16 rounded-full border-4 border-[#F4D03F] flex items-center justify-center text-[#F4D03F] text-3xl font-black">M</div>,
      title: "MINI MAKERS",
      desc: "Where Creativity Meets Logic."
    },
    {
      icon: <FaLightbulb className="w-14 h-14 text-[#F4D03F]" />,
      title: "JUNIOR INNOVATORS",
      desc: "Engineering & Strategy Fundamentals."
    },
    {
      icon: <FaUserGear className="w-14 h-14 text-[#F4D03F]" />,
      title: "YOUNG ENGINEERS",
      desc: "Advanced Wireless & Autonomous Control."
    },
    {
      icon: <FaBrain className="w-14 h-14 text-[#F4D03F]" />,
      title: "ROBO MINDS",
      desc: "Elite Professional Sports & Robotics."
    }
  ];

  return (
    <section className="w-full bg-[#111111] text-white py-24 px-6 sm:px-10 lg:px-12 font-sans border-b border-zinc-900 select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* ================= UPPER PART: WHAT IS BOTLEAGUE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Column: Text Grid */}
          <div className="lg:col-span-8 flex flex-col justify-start">
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16 text-white">
              WHAT IS BOTLEAGUE?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {features.map((item, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <span className="text-[#E63946] font-bold text-xl">{item.num}</span>
                  <h3 className="text-2xl font-black text-white tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-base leading-relaxed font-medium italic">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Technical Diagram Vector Art */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[360px] aspect-square flex items-center justify-center p-2">
              <img 
                src={featuresDiagram} 
                alt="Botleague Vector Diagram" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>

        </div>

        {/* ================= LOWER PART: CATEGORIES ================= */}
        <div className="mt-20">
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-16 text-white">
            CATEGORIES
          </h2>

          {/* Responsive 4-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((card, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl flex flex-col justify-between min-h-[380px] transition-all duration-300 group bg-[#161619] border border-zinc-800 hover:border-[#F4D03F]/60 hover:shadow-xl hover:shadow-[#F4D03F]/5"
              >
                {/* Icon Wrapper Slot */}
                <div className="mb-6 flex justify-start items-center h-16">
                  {card.icon}
                </div>

                {/* Content Layout */}
                <div className="flex-grow flex flex-col justify-end mb-6">
                  <h3 className="text-2xl font-black tracking-wide text-white mb-3 uppercase">
                    {card.title}
                  </h3>
                  <p className="text-zinc-400 text-sm font-medium leading-relaxed max-w-[220px]">
                    {card.desc}
                  </p>
                </div>

                {/* Action CTA Button */}
                <button className="flex items-center space-x-2 text-[#E63946] group-hover:text-red-400 font-black text-sm uppercase tracking-widest cursor-pointer self-start transition-colors bg-transparent border-none p-0">
                  <span>LEARN MORE</span>
                  <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}