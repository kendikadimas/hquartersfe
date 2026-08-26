import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Hero({ setCurrentPage }) {
  return (
    <section className="pt-20 sm:pt-24 pb-4 bg-white min-h-[calc(100vh-1rem)] flex flex-col justify-center">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="relative rounded-xl sm:rounded-[44px] lg:rounded-[48px] overflow-hidden min-h-[580px] sm:min-h-[620px] md:h-[calc(100vh-6rem)] md:max-h-[780px] flex flex-col justify-end md:flex-row md:items-center md:justify-start border border-slate-200/60 bg-slate-900 md:bg-white shadow-xl md:shadow-none">
          
          
          <img
              src="/BUILDING/ChatGPT%20Image%20Jul%2029,%202026,%2003_09_51%20PM-800.webp?v=20260825"
              srcSet="/BUILDING/ChatGPT%20Image%20Jul%2029,%202026,%2003_09_51%20PM-640.webp?v=20260825 640w, /BUILDING/ChatGPT%20Image%20Jul%2029,%202026,%2003_09_51%20PM-800.webp?v=20260825 800w, /BUILDING/ChatGPT%20Image%20Jul%2029,%202026,%2003_09_51%20PM-1536.webp?v=20260825 1536w"
              sizes="100vw"
              alt="HQuarters Building"
              fetchPriority="high"
              className="absolute inset-0 w-full h-full object-cover object-top scale-100 md:scale-125 md:translate-x-[24%] md:translate-y-[3%]"
            />

          
          <div className="hidden md:block absolute inset-y-0 left-0 w-full md:w-[70%] lg:w-[60%] bg-gradient-to-r from-white via-white/95 via-35% via-white/40 via-65% to-transparent pointer-events-none z-10" />

          
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 via-65% to-slate-950/20 pointer-events-none z-10" />

          
          <div className="relative z-20 p-5 sm:p-8 md:p-10 lg:p-14 xl:p-16 max-w-2xl lg:max-w-3xl pt-24 sm:pt-28 md:pt-10 lg:pt-14 xl:pt-16">
            
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-3xl sm:text-5xl lg:text-[66px] font-medium text-white md:text-slate-900 font-heading leading-[1.1] tracking-tight mb-4 sm:mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] md:drop-shadow-none"
            >
              Space for Every <span className="text-[#FBA93C] md:text-[#EA8E18]"><br/>Stage of Business.</span>
            </motion.h1>

            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-slate-100 md:text-slate-600 text-sm sm:text-lg leading-relaxed font-normal mb-6 sm:mb-8 max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] md:drop-shadow-none"
            >
              From your first business address to your corporate headquarters, HQuarters gives you the space to start, work, own and grow — <br className="hidden sm:inline" />in the heart of Asia Afrika, Bandung.
            </motion.p>

            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8"
            >
              <button
                onClick={() => {
                  if (setCurrentPage) setCurrentPage('spaces');
                  window.scrollTo(0, 0);
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#EA8E18] hover:bg-[#d88010] text-white font-semibold text-sm sm:text-base shadow-lg transition-all duration-200 cursor-pointer text-center"
              >
                Explore Your Space
              </button>
              <button
                onClick={() => {
                  if (setCurrentPage) setCurrentPage('find-space');
                  window.scrollTo(0, 0);
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/15 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/30 md:border-slate-300 hover:border-white md:hover:border-slate-800 text-white md:text-slate-800 hover:bg-white/25 md:hover:bg-slate-100 font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer text-center"
              >
                Visit HQuarters
              </button>
            </motion.div>

            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 md:text-slate-600 font-medium"
            >
              <div className="flex items-center gap-1 text-[#EA8E18]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>Trusted by Leading National & Multinational Companies</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
