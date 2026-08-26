import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function BuildingSection({ setCurrentPage }) {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const thumbContainerRef = useRef(null);

  const wellnessGallery = [
    {
      src: '/BUILDING/gym 5_4.webp',
      title: 'Fitness & Conditioning Studio',
      category: 'gym',
      categoryLabel: 'Gym & Fitness',
      desc: 'Dedicated conditioning space with a complete lineup of strength and cardio equipment.',
    },
    {
      src: '/BUILDING/sauna 5_4 new.webp?v=20260824',
      title: 'Recovery & Relaxation Suite',
      category: 'sauna',
      categoryLabel: 'Sauna',
      desc: 'Warm, calming sauna atmosphere designed for post-workout recovery and quiet unwinding.',
    },
    {
      src: '/BUILDING/kolam renang 5_4 new.webp?v=20260824',
      title: 'Swimming Pool & Leisure Area',
      category: 'pool',
      categoryLabel: 'Rooftop Pool',
      desc: 'Rooftop pool and leisure area with open views for swimming, soaking, and social time.',
    },
    {
      src: '/BUILDING/lounge.webp?v=20260824',
      title: 'Lounge Area',
      category: 'lounge',
      categoryLabel: 'Lounge',
      desc: 'Comfortable lounge space for relaxation and informal meetings.',
    },
    {
      src: '/BUILDING/teras-g.webp?v=20260824',
      title: 'Ground Floor Terrace',
      category: 'terrace',
      categoryLabel: 'Terrace',
      desc: 'Open-air terrace at ground level for casual breaks and outdoor work.',
    },
    {
      src: '/BUILDING/teras-ug.webp?v=20260824',
      title: 'Upper Ground Terrace',
      category: 'terrace',
      categoryLabel: 'Terrace',
      desc: 'Elevated terrace with open views, ideal for breaks and informal gatherings.',
    },
  ];

  useEffect(() => {
    if (!isLightboxOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setActiveImgIndex((prev) => (prev === 0 ? wellnessGallery.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveImgIndex((prev) => (prev === wellnessGallery.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, wellnessGallery.length]);

  
  useEffect(() => {
    if (isLightboxOpen) return;
    const timer = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % wellnessGallery.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [isLightboxOpen, wellnessGallery.length]);

  
  useEffect(() => {
    if (thumbContainerRef.current) {
      const container = thumbContainerRef.current;
      const activeThumb = container.children[activeImgIndex];
      if (activeThumb) {
        const leftPos = activeThumb.offsetLeft - (container.clientWidth / 2) + (activeThumb.clientWidth / 2);
        container.scrollTo({ left: leftPos, behavior: 'smooth' });
      }
    }
  }, [activeImgIndex]);

  const buildingFeatures = [
    {
      id: 'infrastructure',
      title: 'Everything Business Needs.',
      titleAccented: <>Everything <span className="text-[#EA8E18]">Business Needs.</span></>,
      description: null,
      items: [
        'Lobby & Concierge',
        'Meeting Facilities',
        'KONE Destination Control Elevators',
        'Fiber Connectivity',
        'Professional Building Management',
      ],
      image: '/BUILDING/lobby-utama.webp?v=20260824',
      imageLeft: false,
    },
    {
      id: 'security',
      title: 'Confidence Comes From Feeling Secure.',
      titleAccented: <>Confidence Comes From <span className="text-[#EA8E18]">Feeling Secure.</span></>,
      description: null,
      items: [
        '24-Hour Security',
        'CCTV',
        'Controlled Access',
        'Fire Safety Systems',
        'Building Engineering',
      ],
      footnote: 'Designed and constructed in accordance with applicable structural and seismic building standards.',
      image: '/BUILDING/security-new.webp?v=20260824',
      imageLeft: true,
    },
    {
      id: 'parking',
      title: 'Arrive Without The Hassle.',
      titleAccented: <>Arrive Without <span className="text-[#EA8E18]">The Hassle.</span></>,
      description: 'Large parking capacity supported by mechanical parking systems.',
      items: [],
      image: '/LOGO/parking-lift.webp?v=20260825',
      imageLeft: false,
    },
    {
      id: 'wellness',
      title: 'Work Better. Recharge Better.',
      titleAccented: <>Work Better. <span className="text-[#EA8E18]">Recharge Better.</span></>,
      description: '',
      items: [
        'Gym',
        'Sauna',
        'Heated Swimming Pool',
        'Rooftop Amenities',
      ],
      image: '/BUILDING/teras-ug.webp?v=20260824',
      imageLeft: true,
    },
  ];

  return (
    <section id="building" className="pt-4 sm:pt-6 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        
        
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 font-heading tracking-tight leading-[1.12]">
            Built for Business. <br />
            <span className="text-[#EA8E18]">Designed for Life.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
HQuarters combines professional infrastructure, security and lifestyle facilities in one modern business environment.

          </p>
        </div>

        
        
        
        <div className="space-y-16">
          {buildingFeatures.map((block) => (
            <motion.div
              key={block.id}
              id={block.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50/70 hover:bg-white rounded-2xl sm:rounded-[44px] p-8 sm:p-12 lg:p-14 border border-slate-200/80 hover:border-[#EA8E18]/40 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group/card scroll-mt-28"
            >
              
              <div className={`lg:col-span-6 ${block.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-[24px] sm:rounded-2xl overflow-hidden shadow-md border border-slate-200/80 aspect-[16/11] bg-slate-900">
                  <img loading="lazy"
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover object-bottom group-hover/card:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              
              <div className={`lg:col-span-6 space-y-6 ${block.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium font-heading text-slate-900 leading-[1.16] tracking-tight">
                    {block.titleAccented}
                  </h2>
                  {block.description && (
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                      {block.description}
                    </p>
                  )}
                </div>

                
                {block.items.length > 0 && (
                  <ul className="space-y-3.5 pt-4 border-t border-slate-200/60">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-3.5 group/item cursor-default">
                        <span className="w-5 h-[2px] bg-[#EA8E18] rounded-full shrink-0 mt-3 inline-block group-hover/item:w-7 transition-all duration-300" />
                        <span className="text-base sm:text-lg font-semibold text-slate-800 group-hover/item:text-[#EA8E18] transition-colors leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                
                {block.footnote && (
                  <div className="pt-4 border-t border-slate-200/60">
                    <div className="bg-white/90 backdrop-blur-sm p-4.5 rounded-2xl border border-slate-200/80 flex items-start gap-3 shadow-sm">
                      <span className="w-1.5 h-10 bg-[#EA8E18] rounded-full shrink-0 inline-block" />
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        {block.footnote}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        
        
        
        <div id="building-amenities" className="bg-[#FAF8F5] rounded-2xl sm:rounded-[44px] p-8 sm:p-12 lg:p-14 border border-slate-200/80 space-y-8 shadow-sm scroll-mt-28">
          
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
            <div className="space-y-1.5">
              
                
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium font-heading text-slate-900 tracking-tight">
                Facilities
              </h2>
            </div>
          </div>

          
          <div className="relative">
            
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[640px] rounded-[24px] sm:rounded-2xl overflow-hidden bg-slate-900 group shadow-xl">
              <img loading="lazy"
                src={wellnessGallery[activeImgIndex]?.src}
                alt={wellnessGallery[activeImgIndex]?.title}
                className="w-full h-full object-cover object-center transition-opacity duration-500"
              />

              
              <button
                onClick={() => setActiveImgIndex((prev) => (prev === 0 ? wellnessGallery.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded bg-white/40 hover:bg-white/70 backdrop-blur-sm flex items-center justify-center text-slate-900 transition-all z-10 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setActiveImgIndex((prev) => (prev === wellnessGallery.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded bg-white/40 hover:bg-white/70 backdrop-blur-sm flex items-center justify-center text-slate-900 transition-all z-10 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              
              <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2 z-10">
                {wellnessGallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === activeImgIndex ? 'bg-white w-6 shadow-md' : 'bg-white/50 hover:bg-white/80 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            
            <div className="flex items-center justify-start mt-6">
              <div ref={thumbContainerRef} className="flex items-center gap-3 overflow-x-auto scroll-smooth scrollbar-none no-scrollbar pb-2 pt-1 max-w-full">
                {wellnessGallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative shrink-0 w-20 h-16 sm:w-28 sm:h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === activeImgIndex
                        ? 'border-[#EA8E18] opacity-100 scale-105 shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img loading="lazy" src={img.src} alt={img.title} className="w-full h-full object-cover object-center" />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        
        {isLightboxOpen && createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 text-white h-screen w-screen overflow-hidden"
            >
              
              <div className="flex items-center justify-between max-w-[1440px] w-full mx-auto">
                <div className="space-y-0.5">
                  <span className="text-xs text-[#EA8E18] font-bold uppercase tracking-wider">
                    HQuarters Building Facilities
                  </span>
                  <div className="text-sm font-semibold text-slate-300">
                    {activeImgIndex + 1} / {wellnessGallery.length} — {wellnessGallery[activeImgIndex].title}
                  </div>
                </div>

                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-3 rounded-full bg-white/10 hover:bg-[#EA8E18] text-white transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              
              <div className="relative max-w-[1200px] w-full mx-auto my-auto flex items-center justify-center h-[72vh]">
                <img loading="lazy"
                  src={wellnessGallery[activeImgIndex].src}
                  alt={wellnessGallery[activeImgIndex].title}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                />

                
                <button
                  onClick={() => setActiveImgIndex((prev) => (prev === 0 ? wellnessGallery.length - 1 : prev - 1))}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#EA8E18] text-white transition-all cursor-pointer shadow-2xl border border-white/10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => setActiveImgIndex((prev) => (prev === wellnessGallery.length - 1 ? 0 : prev + 1))}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#EA8E18] text-white transition-all cursor-pointer shadow-2xl border border-white/10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              
              <div className="max-w-xl mx-auto text-center space-y-1 pb-2">
                <h4 className="text-lg font-medium font-heading text-white">
                  {wellnessGallery[activeImgIndex].title}
                </h4>
                <p className="text-xs text-slate-400 font-normal">
                  {wellnessGallery[activeImgIndex].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}

      </div>
    </section>
  );
}
