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
    <section 
      id="contact" 
      className="pt-20 sm:pt-28 pb-12 sm:pb-16 bg-[#231F20] text-white text-center relative overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          
          <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-medium font-heading tracking-tight leading-[1.15] text-white">
            <span>{titlePrefix}</span>
            {titlePrefix && titleHighlight && <br />}
            <span className="text-[#EA8E18] font-medium">{titleHighlight}</span>
          </h2>

          
          {description && (
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
              {description}
            </p>
          )}

          
          {buttonText && (
            <div className="pt-2 sm:pt-4">
              <button
                onClick={handleClick}
                className="px-9 py-4 rounded-full bg-[#EA8E18] hover:bg-[#d88010] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#EA8E18]/25 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer inline-flex items-center gap-2.5 group"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

        </motion.div>

      </div>
    </section>
  );
}
