import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CTA({
  setCurrentPage,
  titlePrefix = 'Where Will Your Business ',
  titleHighlight = 'Go Next?',
  description = 'Start from an address. Build your team. Own your space. Or move your company to its next headquarters. Whatever comes next, start at HQuarters.',
  buttonText = 'Find My Space',
  pageTarget = 'find-space'
}) {
  const handleClick = (e) => {
    e.preventDefault();
    if (setCurrentPage) {
      setCurrentPage(pageTarget);
      window.scrollTo(0, 0);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[32px] sm:rounded-[44px] lg:rounded-[48px] overflow-hidden bg-slate-900 text-white text-center p-8 sm:p-14 lg:p-20 shadow-xl border border-slate-800/80"
        >
          {/* Content Wrapper */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            
            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-bold font-heading tracking-tight leading-[1.15] text-white">
              <span>{titlePrefix}</span>
              <br className="hidden sm:inline" />
              <span className="text-[#EA8E18]">{titleHighlight}</span>
            </h2>

            {/* Description Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              {description}
            </p>

            {/* Action Button */}
            <div className="pt-4">
              <button
                onClick={handleClick}
                className="px-9 py-4 rounded-full bg-[#EA8E18] hover:bg-[#d88010] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#EA8E18]/25 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center gap-2.5 group"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
