import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowDown, CheckCircle2, Check, X, ChevronRight, ChevronLeft, Home, Maximize2, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FindSpaceSection from '../components/FindSpaceSection.jsx';

export default function SpaceSohoDuplexPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: '',
    whatsApp: '',
    profession: '',
    purpose: 'Work + Live',
    budget: '',
    timeline: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isLightboxOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setActiveImgIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveImgIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  const galleryImages = [
    {
      src: '/SPACES/SOHO/1. unit soho ruang kerja.png',
      title: 'Primary Workspace',
      category: 'Work Area',
      desc: 'Ergonomic team setup designed for focus, high productivity, and natural daylight.',
    },
    {
      src: '/SPACES/SOHO/1. unit soho ruang meeting.png',
      title: 'Executive Meeting Corner',
      category: 'Client Reception',
      desc: 'Private conference and presentation space to host clients and team huddles.',
    },
    {
      src: '/SPACES/SOHO/1. unit soho ruang istirahat.png',
      title: 'Private Living Quarters',
      category: 'Living Space',
      desc: 'Seamless transition to rest and unwind without leaving your unit.',
    },
    {
      src: '/SPACES/SOHO/1. unit soho ruang santai.png',
      title: 'Executive Lounge & Pantry',
      category: 'Lounge Area',
      desc: 'Relaxed setting for informal discussions, coffee breaks, and creative huddles.',
    },
    {
      src: '/SPACES/SOHO/1. unit soho ruang arsip.png',
      title: 'Dedicated Archive & Storage',
      category: 'Storage Zone',
      desc: 'Organized filing and storage solutions for business documents and supplies.',
    },
    {
      src: '/SPACES/SOHO/SOHO 01.png',
      title: 'Duplex Mezzanine View',
      category: 'Architecture',
      desc: 'High-ceiling architectural split between professional work deck and private living.',
    },
    {
      src: '/SPACES/SOHO/SOHO 08.png',
      title: 'Modern SOHO Interior',
      category: 'Design & Finishes',
      desc: 'Premium material finishes, acoustic privacy, and executive interior styling.',
    },
    {
      src: '/SPACES/SOHO/SOHO 09.png',
      title: 'Flexible Studio Layout',
      category: 'Spatial Flow',
      desc: 'Open-plan environment easily configured for growing teams or personal use.',
    },
    {
      src: '/SPACES/SOHO/ChatGPT Image Jul 29, 2026, 02_01_14 PM.png',
      title: 'Daylight Work Desk',
      category: 'Workspace',
      desc: 'Panoramic window views providing inspiring natural light throughout the day.',
    },
    {
      src: '/SPACES/SOHO/ChatGPT Image Jul 29, 2026, 02_03_29 PM.png',
      title: 'Creative Studio Corner',
      category: 'Creative Hub',
      desc: 'Dedicated zone for designers, consultants, and digital agency teams.',
    },
    {
      src: '/SPACES/SOHO/ChatGPT Image Jul 29, 2026, 02_24_47 PM.png',
      title: 'Executive Suite View',
      category: 'Executive Living',
      desc: 'Refined aesthetic designed to project a strong corporate image.',
    },
    {
      src: '/SPACES/SOHO/ChatGPT Image Jul 29, 2026, 02_32_57 PM.png',
      title: 'Night Work & Ambient Lighting',
      category: 'Atmosphere',
      desc: 'Warm ambient lighting for late-night focus sessions and evening relaxation.',
    },
  ];

  const handlePrevImg = () => {
    setActiveImgIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImg = () => {
    setActiveImgIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const sohoLives = [
    { title: 'STARTUP MODE', desc: 'Workspace, meeting corner, pantry — for a small team.' },
    { title: 'HOME OFFICE MODE', desc: 'Professional workspace in front, private living behind.' },
    { title: 'PROFESSIONAL MODE', desc: 'Reception, meeting room, private office.' },
    { title: 'LIVING MODE', desc: 'Transform into a private living environment as needed.*' },
  ];

  const targetPills = [
    'Entrepreneurs', 'Micro-teams', 'Consultants', 'Designers',
    'Architects', 'Lawyers', 'Creative Agencies', 'Digital Nomads', 'Executive Owners'
  ];

  const comparisonRows = [
    { feature: 'Living', apt: '✓', office: '—', soho: '✓' },
    { feature: 'Professional Workspace', apt: 'Limited', office: '✓', soho: '✓' },
    { feature: 'Business Environment', apt: '—', office: '✓', soho: '✓' },
    { feature: 'Business Address*', apt: 'Limited', office: '✓', soho: '✓' },
    { feature: 'Lifestyle Facilities', apt: '✓', office: 'Limited', soho: '✓' },
    { feature: '24/7 Access & Flexibility', apt: '✓', office: '—', soho: '✓' },
    { feature: 'Ownership', apt: '✓', office: 'Varies', soho: '✓' },
    { feature: 'Work + Live', apt: 'Limited', office: '—', soho: '✓' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar currentPage="spaces" setCurrentPage={setCurrentPage} />

      <main className="pt-24 sm:pt-28 pb-28 space-y-28 sm:space-y-36">
        
        {/* BREADCRUMBS & HERO SECTION */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500">
            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage('home');
                window.scrollTo(0, 0);
              }}
              className="flex items-center gap-1.5 hover:text-[#EA8E18] transition-colors cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage('spaces');
                window.scrollTo(0, 0);
              }}
              className="hover:text-[#EA8E18] transition-colors cursor-pointer"
            >
              Spaces
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-900">SOHO</span>
          </nav>

          {/* Hero Card */}
          <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
              <span className="px-2 py-1 rounded-full text-[#EA8E18] text-xs font-bold uppercase tracking-wider inline-block self-start">
                SOHO
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-slate-900 tracking-tight leading-[1.12]">
                Work? Live? <br className="hidden sm:inline" />
                <span className="text-[#EA8E18]">Why Choose?</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                One space to work, live, own and grow your business.
              </p>

              <div className="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white font-bold text-xs tracking-wide self-start">
                Work. Live. Own. — #FleksibelAja
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    const formElem = document.getElementById('soho-inquiry');
                    if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 rounded-full bg-[#EA8E18] hover:bg-[#d88010] text-white font-bold text-sm sm:text-base shadow-lg transition-all flex items-center gap-2 group"
                >
                  <span>See SOHO Availability</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 relative flex items-stretch">
              <div className="rounded-[28px] overflow-hidden border border-slate-200/80 w-full h-full min-h-[280px] shadow-xl group bg-slate-100">
                <img
                  src="/SPACES/SOHO/SOHO 01.png"
                  alt="HQuarters SOHO Unit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* COMPACT SOHO PHOTO GALLERY SLIDER */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EA8E18]">
                <span className="w-5 h-[2px] bg-[#EA8E18] inline-block" />
                <span>SOHO GALLERY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                Inside <span className="text-[#EA8E18]">HQuarters SOHO</span>
              </h2>
            </div>

            {/* Hint & Nav Arrows */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                Click "View Facilities" to enlarge photos
              </span>
            </div>
          </div>

          {/* Carousel Featured Image Area */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[460px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-slate-900 group">
              <img
                src={galleryImages[activeImgIndex]?.src}
                alt={galleryImages[activeImgIndex]?.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />

              {/* Left/Right Navigation Arrows */}
              <button
                onClick={() => setActiveImgIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded bg-white/40 hover:bg-white/70 backdrop-blur-sm flex items-center justify-center text-slate-900 transition-all z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => setActiveImgIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded bg-white/40 hover:bg-white/70 backdrop-blur-sm flex items-center justify-center text-slate-900 transition-all z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Floating Dots Pagination Overlay */}
              <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2 z-10">
                {galleryImages.map((_, idx) => (
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

            {/* Bottom Row: Thumbnails */}
            <div className="flex items-center justify-start mt-6">
              {/* Thumbnails */}
              <div className="flex items-center gap-3 overflow-x-auto scrollbar-none pb-2 sm:pb-0 max-w-full">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative shrink-0 w-20 h-16 sm:w-28 sm:h-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      idx === activeImgIndex
                        ? 'border-[#EA8E18] opacity-100 scale-105 shadow-md'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

        </section>

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
                    HQuarters SOHO Lightbox
                  </span>
                  <div className="text-sm font-semibold text-slate-300">
                    {activeImgIndex + 1} / {galleryImages.length} — {galleryImages[activeImgIndex].title}
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
                  src={galleryImages[activeImgIndex].src}
                  alt={galleryImages[activeImgIndex].title}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                />

                {/* Modal Nav Arrows */}
                <button
                  onClick={handlePrevImg}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#EA8E18] text-white transition-all cursor-pointer shadow-2xl border border-white/10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={handleNextImg}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#EA8E18] text-white transition-all cursor-pointer shadow-2xl border border-white/10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption */}
              <div className="max-w-xl mx-auto text-center space-y-1 pb-2">
                <h4 className="text-lg font-bold font-heading text-white">
                  {galleryImages[activeImgIndex].title}
                </h4>
                <p className="text-xs text-slate-400 font-normal">
                  {galleryImages[activeImgIndex].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>,
          document.body
        )}

        {/* STATEMENT 1: LIFE CHANGES */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
            Life Changes. Business Changes. <br className="hidden sm:inline" />
            <span className="text-[#EA8E18]">Your Space Should Change Too.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Today is the day office. Tomorrow is a home office. Later, a private living space. Or live in a SOHO space property that can truly do both.
          </p>
          <div className="font-bold text-[#EA8E18] text-lg font-heading pt-2">
            One Space. Many Possibilities.
          </div>
        </section>

        {/* ONE SOHO. DIFFERENT LIVES. */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#EA8E18] uppercase tracking-widest inline-block">
              — SIGNATURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              One SOHO. Different Lives.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sohoLives.map((item) => (
              <div
                key={item.title}
                className="bg-white p-7 rounded-[24px] border border-slate-200/80 shadow-sm hover:border-[#EA8E18]/40 hover:shadow-xl transition-all space-y-3"
              >
                <div className="text-xs font-bold text-[#B86807] uppercase tracking-wider">
                  {item.title}
                </div>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* STATEMENT 2: START SMALL */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center border border-slate-200/80 max-w-4xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              Start Small. Look Professional.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
              Your company may be just starting out. Or perhaps it's a team that doesn't need a corporate floor. But you still need an address and space to host clients and team members.
            </p>
            <div className="font-bold text-slate-900 text-base font-heading">
              Big company presence, small footprint.
            </div>
          </div>
        </section>

        {/* NOT JUST A HOME ADDRESS */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                Not Just A Home Address. <br className="hidden sm:inline" />
                <span className="text-[#EA8E18]">This Can Be Your Business Address.</span>
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
One thing that sets SOHO apart from a regular apartment: the unit can be used as a business address, workspace, home office, and private base, subject to applicable regulations.

              </p>
              <button
                onClick={() => {
                  const formElem = document.getElementById('find-space') || document.getElementById('soho-inquiry');
                  if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 font-bold text-[#EA8E18] hover:text-[#d88010] text-base font-heading group cursor-pointer transition-colors pt-1"
              >
                <span>Ask About Business Domicile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:col-span-6 bg-[#FAF8F5] p-8 sm:p-10 rounded-[32px] border border-slate-200/80 space-y-5 text-center shadow-sm">
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
                Why Pay For Two Places?
              </h3>
              
              <p className="text-slate-600 text-sm sm:text-base font-normal max-w-lg mx-auto">
                Office (rent, utilities, commute) + Home (rent/mortgage, utilities, commute)
              </p>

              <div className="py-1">
                <ArrowDown className="w-5 h-5 text-[#EA8E18] mx-auto animate-bounce" />
              </div>

              <div className="space-y-1">
                <h4 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
                  HQuarters SOHO — Work + Live
                </h4>
                <p className="text-slate-600 text-sm sm:text-base font-normal">
                  One space. One location. One asset. #FleksibelAja
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY KEEP RENTING YOUR SPACE */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center border border-slate-800 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Why Keep Renting Your Space?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
              HQuarters SOHO gives you the chance to own a space that works for both your life and your business.
            </p>
          </div>
        </section>

        {/* COMPARISON TABLE: APARTMENT? OFFICE? SOHO? */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              Apartment? Office? SOHO?
            </h2>
          </div>

          <div className="bg-white rounded-[24px] border border-slate-200/80 shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[550px]">
                <thead>
                  <tr className="bg-[#FAF8F5] border-b border-slate-200/80 text-xs sm:text-sm font-bold text-slate-800">
                    <th className="py-3 px-4 sm:py-3.5 sm:px-5 font-normal"></th>
                    <th className="py-3 px-4 sm:py-3.5 sm:px-5 text-center font-bold text-slate-800">Apartment</th>
                    <th className="py-3 px-4 sm:py-3.5 sm:px-5 text-center font-bold text-slate-800">Conventional Office</th>
                    <th className="py-3 px-4 sm:py-3.5 sm:px-5 text-center font-bold text-[#EA8E18] bg-[#FEF3E2]/40">HQuarters SOHO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm font-medium">
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="hover:bg-slate-50/50">
                      <td className="py-3 px-4 sm:py-3.5 sm:px-5 text-slate-900 font-normal">{row.feature}</td>
                      
                      {/* Apartment Column */}
                      <td className="py-3 px-4 sm:py-3.5 sm:px-5 text-center">
                        {row.apt === '✓' ? (
                          <Check className="w-4 h-4 text-slate-700 mx-auto" />
                        ) : row.apt === '—' ? (
                          <span className="text-slate-400 font-normal">—</span>
                        ) : (
                          <span className="text-slate-600 font-normal">{row.apt}</span>
                        )}
                      </td>

                      {/* Conventional Office Column */}
                      <td className="py-3 px-4 sm:py-3.5 sm:px-5 text-center">
                        {row.office === '✓' ? (
                          <Check className="w-4 h-4 text-slate-700 mx-auto" />
                        ) : row.office === '—' ? (
                          <span className="text-slate-400 font-normal">—</span>
                        ) : (
                          <span className="text-slate-600 font-normal">{row.office}</span>
                        )}
                      </td>

                      {/* HQuarters SOHO Column */}
                      <td className="py-3 px-4 sm:py-3.5 sm:px-5 text-center bg-[#FEF3E2]/30 font-bold text-[#EA8E18]">
                        {row.soho === '✓' ? (
                          <Check className="w-4 h-4 text-[#EA8E18] mx-auto stroke-[2.5]" />
                        ) : (
                          <span className="text-[#EA8E18] font-bold">{row.soho}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="py-4 px-6 bg-[#FAF8F5] text-center border-t border-slate-200/80 font-bold text-slate-900 text-sm sm:text-base font-heading">
              Why fit your life into one category?
            </div>
          </div>
        </section>

        {/* BUILT FOR PEOPLE BUILDING SOMETHING */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
            Built For People Building Something.
          </h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {targetPills.map((pill) => (
              <span
                key={pill}
                className="px-5 py-2.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 font-bold text-xs sm:text-sm hover:bg-[#EA8E18] hover:text-white transition-colors"
              >
                {pill}
              </span>
            ))}
          </div>
        </section>

        {/* INQUIRY FORM */}
        <FindSpaceSection initialSpace="SOHO Duplex" />

        {/* BOTTOM DARK BANNER */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center border border-slate-800 space-y-3 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Work Here. Live Here. Own Here.
            </h2>
            <p className="text-slate-400 text-sm font-medium">
              HQuarters SOHO — #FleksibelAja
            </p>
          </div>
        </section>

      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}