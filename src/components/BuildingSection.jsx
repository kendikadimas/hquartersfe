import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, Dumbbell, Flame, Waves, Sparkles } from 'lucide-react';

export default function BuildingSection({ setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'gym' | 'sauna' | 'pool'
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const wellnessGallery = [
    {
      src: '/FASILITAS/GYM/gym 01.png',
      title: 'State-of-the-Art Fitness Center',
      category: 'gym',
      categoryLabel: 'Gym',
      desc: 'Modern cardio machines, free weights, and strength training equipment for daily wellness.',
    },
    {
      src: '/FASILITAS/GYM/Gym 02.png',
      title: 'Executive Strength & Cardio Hub',
      category: 'gym',
      categoryLabel: 'Gym',
      desc: 'Spacious, climate-controlled gym environment for pre-work or post-work workouts.',
    },
    {
      src: '/FASILITAS/GYM/GYM 03.png',
      title: 'Fitness Zone & Conditioning',
      category: 'gym',
      categoryLabel: 'Gym',
      desc: 'Ergonomic fitness floor designed for high performance and physical health.',
    },
    {
      src: '/FASILITAS/SAUNA/sauna 01.png',
      title: 'Luxury Cedar Sauna Suite',
      category: 'sauna',
      categoryLabel: 'Sauna',
      desc: 'Natural cedar wood dry sauna for deep relaxation, detoxification, and stress relief.',
    },
    {
      src: '/FASILITAS/SAUNA/sauna 02.png',
      title: 'Thermal Wellness Chamber',
      category: 'sauna',
      categoryLabel: 'Sauna',
      desc: 'Controlled thermal environment designed to restore vitality after a busy day.',
    },
    {
      src: '/FASILITAS/SAUNA/sauna 03.png',
      title: 'Private Spa & Sauna Lounge',
      category: 'sauna',
      categoryLabel: 'Sauna',
      desc: 'Serene spa ambience equipped with modern temperature controls.',
    },
    {
      src: '/LOGO/pool.jpg',
      title: 'Heated Rooftop Swimming Pool',
      category: 'pool',
      categoryLabel: 'Rooftop Pool',
      desc: 'Panoramic infinity pool over Asia Afrika CBD with heated water for evening swims.',
    },
  ];

  const filteredGallery = activeTab === 'all'
    ? wellnessGallery
    : wellnessGallery.filter(item => item.category === activeTab);

  useEffect(() => {
    if (!isLightboxOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setActiveImgIndex((prev) => (prev === 0 ? filteredGallery.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveImgIndex((prev) => (prev === filteredGallery.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, filteredGallery.length]);

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
      image: '/ballroom.png',
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
      image: '/security.png',
      imageLeft: true,
    },
    {
      id: 'parking',
      title: 'Arrive Without The Hassle.',
      titleAccented: <>Arrive Without <span className="text-[#EA8E18]">The Hassle.</span></>,
      description: 'Large parking capacity supported by mechanical parking systems.',
      items: [],
      image: '/LOGO/parking-lift.png',
      imageLeft: false,
    },
    {
      id: 'wellness',
      title: 'Work Better. Recharge Better.',
      titleAccented: <>Work Better. <span className="text-[#EA8E18]">Recharge Better.</span></>,
      description: 'Exclusive in-house wellness facilities designed to rejuvenate executives and staff.',
      items: [
        'Gym & Fitness Center',
        'Cedar Dry Sauna',
        'Heated Rooftop Pool',
        'Rooftop Executive Deck',
      ],
      image: '/FASILITAS/GYM/gym 01.png',
      imageLeft: true,
    },
  ];

  return (
    <section id="building" className="pt-4 sm:pt-6 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. HEADER SECTION */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 font-heading tracking-tight leading-[1.12]">
            Built for Business. <br className="hidden sm:inline" />
            <span className="text-[#EA8E18]">Designed for Life.</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
            HQuarters combines professional infrastructure, security and lifestyle amenities for a modern business environment.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. ALTERNATING FEATURE SHOWCASE BLOCKS */}
        {/* ========================================================================= */}
        <div className="space-y-16">
          {buildingFeatures.map((block) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50/70 hover:bg-white rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 lg:p-14 border border-slate-200/80 hover:border-[#EA8E18]/40 shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center group/card"
            >
              {/* Left or Right Image */}
              <div className={`lg:col-span-6 ${block.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-md border border-slate-200/80 aspect-[16/11]">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Left or Right Text Content */}
              <div className={`lg:col-span-6 space-y-6 ${block.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-heading text-slate-900 leading-[1.16] tracking-tight">
                    {block.titleAccented}
                  </h2>
                  {block.description && (
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                      {block.description}
                    </p>
                  )}
                </div>

                {/* Enhanced Bullet List with Custom Orange Accent Dash */}
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

                {/* Enhanced Footnote Callout */}
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

        {/* ========================================================================= */}
        {/* 3. IN-HOUSE WELLNESS FACILITIES PHOTO GALLERY */}
        {/* ========================================================================= */}
        <div className="bg-[#FAF8F5] rounded-[36px] sm:rounded-[44px] p-8 sm:p-12 lg:p-14 border border-slate-200/80 space-y-8 shadow-sm">
          
          {/* Header & Category Filter Tabs */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200/80 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EA8E18]">
                <span className="w-5 h-[2px] bg-[#EA8E18] inline-block" />
                <span>IN-HOUSE LIFESTYLE AMENITIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                Wellness Facilities <span className="text-[#EA8E18]">Gallery</span>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: 'all', label: 'All Facilities', icon: Sparkles },
                { id: 'gym', label: 'Gym & Fitness', icon: Dumbbell },
                { id: 'sauna', label: 'Sauna Suite', icon: Flame },
                { id: 'pool', label: 'Rooftop Pool', icon: Waves },
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#EA8E18] text-white shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
                    }`}
                  >
                    <TabIcon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Compact Photo Slider Grid */}
          <div className="relative">
            <div
              id="wellness-facility-slider"
              className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 px-1"
            >
              {filteredGallery.map((img, idx) => (
                <div
                  key={img.src}
                  onClick={() => {
                    setActiveImgIndex(idx);
                    setIsLightboxOpen(true);
                  }}
                  className="w-[260px] sm:w-[310px] shrink-0 snap-start bg-white rounded-[24px] border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  {/* Photo Header */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white font-bold text-[10px] uppercase tracking-wider shadow">
                        {img.categoryLabel}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="p-2 rounded-full bg-slate-900/80 backdrop-blur-md text-white block shadow">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-1.5">
                    <h4 className="text-base font-bold text-slate-900 font-heading group-hover:text-[#EA8E18] transition-colors leading-snug line-clamp-1">
                      {img.title}
                    </h4>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 font-normal">
                      {img.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* FULLSCREEN LIGHTBOX MODAL */}
        {isLightboxOpen && createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] bg-slate-950/98 backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-8 text-white h-screen w-screen overflow-hidden"
            >
              {/* Top Modal Controls */}
              <div className="flex items-center justify-between max-w-[1440px] w-full mx-auto">
                <div className="space-y-0.5">
                  <span className="text-xs text-[#EA8E18] font-bold uppercase tracking-wider">
                    HQuarters Building Facilities
                  </span>
                  <div className="text-sm font-semibold text-slate-300">
                    {activeImgIndex + 1} / {filteredGallery.length} — {filteredGallery[activeImgIndex].title}
                  </div>
                </div>

                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-3 rounded-full bg-white/10 hover:bg-[#EA8E18] text-white transition-colors cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Image Display */}
              <div className="relative max-w-[1200px] w-full mx-auto my-auto flex items-center justify-center h-[72vh]">
                <img
                  src={filteredGallery[activeImgIndex].src}
                  alt={filteredGallery[activeImgIndex].title}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                />

                {/* Modal Nav Arrows */}
                <button
                  onClick={() => setActiveImgIndex((prev) => (prev === 0 ? filteredGallery.length - 1 : prev - 1))}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#EA8E18] text-white transition-all cursor-pointer shadow-2xl border border-white/10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => setActiveImgIndex((prev) => (prev === filteredGallery.length - 1 ? 0 : prev + 1))}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#EA8E18] text-white transition-all cursor-pointer shadow-2xl border border-white/10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="max-w-xl mx-auto text-center space-y-1 pb-2">
                <h4 className="text-lg font-bold font-heading text-white">
                  {filteredGallery[activeImgIndex].title}
                </h4>
                <p className="text-xs text-slate-400 font-normal">
                  {filteredGallery[activeImgIndex].desc}
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
