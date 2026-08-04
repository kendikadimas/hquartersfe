import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Hero({ setCurrentPage }) {
  return (
    <section className="pt-20 sm:pt-24 pb-4 bg-white min-h-[calc(100vh-1rem)] flex flex-col justify-center">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Full-Screen Viewport Hero Container Card */}
        <div className="relative rounded-[32px] sm:rounded-[44px] lg:rounded-[48px] overflow-hidden h-[calc(100vh-6.5rem)] min-h-[520px] max-h-[780px] flex items-center border border-slate-200/60 bg-white">
          
          {/* Full Background Image */}
          <img
            src="/BUILDING/ChatGPT%20Image%20Jul%2029,%202026,%2003_09_51%20PM.png"
            alt="HQuarters Building"
            className="absolute inset-0 w-full h-full object-cover object-top scale-125 translate-x-[16%] sm:translate-x-[20%] md:translate-x-[24%] translate-y-[2%] sm:translate-y-[3%]"
          />

          {/* Ultra-Smooth White Alpha Gradient Overlay */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[70%] lg:w-[60%] bg-gradient-to-r from-white via-white/95 via-35% via-white/30 via-65% to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white via-white/70 to-transparent pointer-events-none md:hidden z-10" />

          {/* Hero Content */}
          <div className="relative z-20 p-6 sm:p-10 lg:p-14 xl:p-16 max-w-2xl lg:max-w-3xl">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-4xl sm:text-6xl lg:text-[66px] font-semibold text-slate-900 font-heading leading-[1.08] tracking-tight mb-6"
            >
              Space for Every <span className="text-[#EA8E18]"><br/>Stage of Business.</span>
            </motion.h1>

            {/* Description Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal mb-8 max-w-xl"
            >
              From your first business address to your corporate headquarters, HQuarters gives you the space to start, work, own and grow — <br/>in the heart of Asia Afrika, Bandung.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <button
                onClick={() => {
                  if (setCurrentPage) setCurrentPage('spaces');
                  window.scrollTo(0, 0);
                }}
                className="px-7 py-3.5 rounded-xl bg-[#EA8E18] hover:bg-[#d88010] text-white font-semibold text-sm sm:text-base shadow-lg transition-all duration-200 cursor-pointer"
              >
                Explore Your Space
              </button>
              <button
                onClick={() => {
                  if (setCurrentPage) setCurrentPage('find-space');
                  window.scrollTo(0, 0);
                }}
                className="px-7 py-3.5 rounded-xl border border-slate-300 hover:border-slate-800 text-slate-800 hover:bg-slate-100 font-semibold text-sm sm:text-base transition-all duration-200 cursor-pointer"
              >
                Visit HQuarters
              </button>
            </motion.div>

            {/* Rating / Review Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 font-medium"
            >
              <div className="flex items-center gap-1 text-[#EA8E18]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>Bandung's Premier Business Residence & Domicile</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
