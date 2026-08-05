import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, ChevronLeft, Home, Maximize2, X, User, Users, Building2, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FindSpaceSection from '../components/FindSpaceSection.jsx';

export default function SpaceServicedOfficePage({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: '',
    desks: '',
    whatsApp: '',
    email: '',
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

  const servicedSizes = [
    {
      title: 'Private Office',
      capacity: '1–2 people',
      icon: User,
      desc: 'Fully enclosed, move-in ready private suite for solo founders and key executives.',
    },
    {
      title: 'Small Team Office',
      capacity: '3–5 people',
      icon: Users,
      desc: 'Optimized desk layout for growing teams, boutique agencies, and startup pods.',
    },
    {
      title: 'Team Office',
      capacity: '6–10 people',
      icon: Building2,
      desc: 'Spacious workspace configuration for established regional teams & core divisions.',
    },
    {
      title: 'Custom Workspace',
      capacity: '10+ people',
      icon: Sparkles,
      desc: 'Tailored multi-desk suite or dedicated floor wing built to your exact headcount.',
    },
  ];

  const galleryImages = [
    {
      src: '/SPACES/SERVICED OFFICE/1.png',
      title: 'Turnkey Private Office',
      category: 'Private Desk Suite',
      desc: 'Fully furnished, high-speed connected office space ready for immediate occupancy.',
    },
    {
      src: '/SPACES/SERVICED OFFICE/2.png',
      title: 'Dedicated Team Desk Zone',
      category: 'Workstation',
      desc: 'Ergonomic workstation setup designed for team focus and seamless productivity.',
    },
    {
      src: '/SPACES/SERVICED OFFICE/3.png',
      title: 'Meeting Corner & Reception',
      category: 'Client Meeting',
      desc: 'Professional conference room setup for hosting client discussions and presentations.',
    },
    {
      src: '/SPACES/SERVICED OFFICE/4.png',
      title: 'Executive Suite Interior',
      category: 'Private Office',
      desc: 'Acoustically insulated private office for leaders, managers, and confidential work.',
    },
    {
      src: '/SPACES/SERVICED OFFICE/5.png',
      title: 'Modern Breakout Lounge',
      category: 'Pantry & Lounge',
      desc: 'Relaxed common area for coffee breaks, informal chats, and team refreshments.',
    },
    {
      src: '/SPACES/SERVICED OFFICE/6.png',
      title: 'Full Floor Suite Overview',
      category: 'Office Floor',
      desc: 'Expansive overview of fully serviced floor layout and natural daylighting.',
    },
    {
      src: '/SPACES/SERVICED OFFICE/7.png',
      title: 'Executive Desk & View',
      category: 'Executive Suite',
      desc: 'Inspiring desk setup with panoramic CBD city view.',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const amenities = [
    'Furnished Workspaces', 'High-Speed Internet', 'Reception Support',
    'Meeting Rooms', 'Daily Cleaning', 'All Utilities Included',
    'Building Security', 'Professional Address', 'Pantry & Common Areas'
  ];

  const useCases = [
    'New market entry', 'Project teams', 'Satellite office',
    'Startups', 'Consultants', 'Small companies', 'Temporary corporate office'
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
            <span className="font-bold text-slate-900">Serviced Office</span>
          </nav>

          {/* Hero Card */}
          <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block">
                HQUARTERS SERVICED OFFICE
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-slate-900 tracking-tight leading-[1.12]">
                Your Office. <br className="hidden sm:inline" />
                <span className="text-[#EA8E18]">Ready From Day One.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                No renovation. No furniture procurement. No waiting. Just bring your team and start working.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const formElem = document.getElementById('serviced-form');
                    if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 rounded-full bg-[#EA8E18] hover:bg-[#d88010] text-white font-bold text-sm sm:text-base shadow-lg transition-all flex items-center gap-2 group"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[24px] overflow-hidden border border-slate-200/80 aspect-[4/3] shadow-xl group bg-slate-100">
                <img
                  src="/SPACES/SERVICED OFFICE/1.png"
                  alt="HQuarters Serviced Office Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* COMPACT SERVICED OFFICE PHOTO GALLERY SLIDER */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EA8E18]">
                <span className="w-5 h-[2px] bg-[#EA8E18] inline-block" />
                <span>SERVICED OFFICE GALLERY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                Explore <span className="text-[#EA8E18]">Serviced Workspaces</span>
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

              {/* Bottom Dark Banner */}
              <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-slate-900/80 backdrop-blur-md flex items-center px-6 sm:px-10 justify-between">
                {/* Title */}
                <h3 className="text-white text-sm sm:text-lg font-bold tracking-wider uppercase truncate w-1/3">
                  {galleryImages[activeImgIndex]?.title}
                </h3>

                {/* Dots Pagination */}
                <div className="flex items-center justify-center gap-2 w-1/3">
                  {galleryImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImgIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === activeImgIndex ? 'bg-white w-5' : 'bg-white/50 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>

                {/* Empty spacer to balance the flex-between layout */}
                <div className="w-1/3" />
              </div>
            </div>

            {/* Bottom Row: Thumbnails and Button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
              {/* Thumbnails */}
              <div className="flex items-center gap-3 overflow-x-auto scrollbar-none pb-2 sm:pb-0 max-w-full">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative shrink-0 w-20 h-16 sm:w-28 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      idx === activeImgIndex
                        ? 'border-[#EA8E18] opacity-100 scale-105'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* View Facilities Button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="shrink-0 px-6 py-3 rounded bg-[#ea580c] hover:bg-[#c2410c] text-white font-bold text-sm sm:text-base shadow-md transition-all flex items-center gap-2 group"
              >
                <span>View Facilities</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
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
                    HQuarters Serviced Office Gallery
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
                  onClick={() => setActiveImgIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3.5 sm:p-4 rounded-full bg-black/70 hover:bg-[#EA8E18] text-white transition-all cursor-pointer shadow-2xl border border-white/10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={() => setActiveImgIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
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

        {/* STATEMENT 1: SKIP THE SETUP */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
            Skip The Setup. <br className="hidden sm:inline" />
            <span className="text-[#EA8E18]">Start The Business.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
Building an office means contractors, furniture, internet, utilities, maintenance, reception, meeting facilities. At HQuarters Serviced Office, it's already taken care of.

          </p>
          <div className="font-bold text-[#EA8E18] text-lg font-heading pt-2">
            You focus on the business. We handle the office.
          </div>
        </section>

        {/* CHOOSE THE SPACE YOUR TEAM NEEDS */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EA8E18]">
              <span className="w-5 h-[2px] bg-[#EA8E18] inline-block" />
              <span>CAPACITY OPTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-heading text-slate-900 tracking-tight">
              Choose The Space Your Team Needs.
            </h2>
            <p className="text-slate-600 text-base font-normal">
              Flexible layouts scaled to fit your team size from Day 1, with instant upgrade paths as you expand.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicedSizes.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  onClick={() => {
                    const formElem = document.getElementById('serviced-form');
                    if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-white p-8 rounded-[28px] border border-slate-200/80 shadow-sm hover:border-[#EA8E18] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between space-y-5"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FEF3E2] text-[#EA8E18] flex items-center justify-center group-hover:bg-[#EA8E18] group-hover:text-white transition-colors duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-[#EA8E18] transition-colors">
                        {item.title}
                      </h3>
                      <div className="inline-block px-3 py-1 rounded-full bg-slate-900 text-amber-400 font-bold text-xs tracking-wider uppercase">
                        {item.capacity}
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#EA8E18] group-hover:translate-x-1 transition-transform">
                    <span>Inquire This Size</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* EVERYTHING IS READY */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 border border-slate-200/80 space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                Everything Is Ready.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {amenities.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm">
                  <span className="w-5 h-[2px] bg-[#EA8E18] rounded-full shrink-0" />
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FLEXIBILITY SECTION */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
            Flexible When Your Business Needs To Be.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Team growing? Project ending? Setting up a temporary office? Opening a branch representation? A serviced office lets you scale up or down easily based on your business stage.
          </p>
        </section>

        {/* DARK CALLOUT */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center border border-slate-800 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Look Established From Day One.
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto font-normal">
              Even a two-person company can receive clients in a professional business environment.
            </p>
            <div className="font-bold text-[#EA8E18] text-base font-heading">
              Small team. Serious image.
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
            Use Cases
          </h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {useCases.map((useCase) => (
              <span
                key={useCase}
                className="px-5 py-2.5 rounded-full bg-slate-100 border border-slate-200/80 text-slate-800 font-bold text-xs sm:text-sm hover:bg-[#EA8E18] hover:text-white transition-colors"
              >
                {useCase}
              </span>
            ))}
          </div>
        </section>

        {/* INQUIRY FORM CARD */}
        <FindSpaceSection initialSpace="Serviced Office" />

        {/* BOTTOM DARK BANNER */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center border border-slate-800 space-y-4 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Your Team Could Be Working Here Tomorrow.
            </h2>
            <div>
              <button
                onClick={() => {
                  if (setCurrentPage) setCurrentPage('find-space');
                  window.scrollTo(0, 0);
                }}
                className="px-8 py-3.5 rounded-full bg-[#EA8E18] hover:bg-[#d88010] text-white font-bold text-sm sm:text-base shadow-lg transition-all inline-flex items-center gap-2 group"
              >
                <span>Book a Tour</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
