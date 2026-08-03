import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 sm:pt-28 pb-8 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Container with #E8860B Color */}
        <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden min-h-[450px] sm:min-h-[490px] lg:min-h-[510px] flex items-center shadow-xl bg-[#E8860B]">
          
          {/* Architectural Background Image */}
          <img
            src="/architectural_hero_bg.png"
            alt="Modern architectural structure"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center"
          />

          {/* Left #E8860B Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8860B] via-[#E8860B]/95 to-transparent w-full md:w-[75%] lg:w-[62%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#E8860B]/80 via-transparent to-transparent md:hidden" />

          {/* Hero Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-2xl">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block mb-4"
            >
              <span className="px-3.5 py-1 rounded-full border border-white/30 bg-white/10 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                AWARD-WINNING FIRM
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white font-heading leading-[1.1] tracking-tight mb-4"
            >
              Creating <span className="text-amber-200">Spaces That Inspire</span> Modern World
            </motion.h1>

            {/* Description Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-amber-50/90 text-sm sm:text-base leading-relaxed font-normal mb-6 max-w-lg"
            >
              Award-winning architectural design firm specializing in creating innovative and sustainable spaces that transform how people live, work, and play.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3.5 mb-6"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-white hover:bg-amber-50 text-slate-900 font-semibold text-sm shadow-md transition-all duration-200"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all duration-200 shadow-md"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Rating / Review Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="flex items-center gap-3 text-xs sm:text-sm text-amber-50 font-medium"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                ))}
              </div>
              <span className="text-white/40">|</span>
              <span className="font-semibold text-white">Rated by loving Clients</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
