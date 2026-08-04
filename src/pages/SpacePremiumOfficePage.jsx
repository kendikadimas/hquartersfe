import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Building2, Shield, Wifi, MapPin, Users, HeartHandshake, ChevronRight, ChevronLeft, Home, Sparkles, Maximize2, X } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function SpacePremiumOfficePage({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    companyName: '',
    yourName: '',
    whatsApp: '',
    employees: '',
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
      src: '/SPACES/PREMIUM OFFICE/Premium Office.png',
      title: 'Executive Corporate Floor',
      category: 'HQ Layout',
      desc: 'Expansive open-plan floorplate designed for regional headquarters and growing corporate teams.',
    },
    {
      src: '/SPACES/PREMIUM OFFICE/Premium Office 02.png',
      title: 'Boardroom & Conference Suite',
      category: 'Meeting Suite',
      desc: 'High-tech conference environment equipped for executive board meetings and client presentations.',
    },
    {
      src: '/SPACES/PREMIUM OFFICE/Premium Office 03.png',
      title: 'Corner Executive Office',
      category: 'Private Suite',
      desc: 'Dedicated leadership suite with panoramic city skyline views of Asia Afrika CBD.',
    },
    {
      src: '/SPACES/PREMIUM OFFICE/Premium Office 04.png',
      title: 'Collaborative Team Hub',
      category: 'Workstation',
      desc: 'Acoustically tuned workspace fostering cross-department collaboration and high focus.',
    },
    {
      src: '/SPACES/PREMIUM OFFICE/Premium Office 05.png',
      title: 'Client Reception & Lobby',
      category: 'Arrival Experience',
      desc: 'Prestigious arrival experience reflecting dignity, trust, and corporate respectability.',
    },
    {
      src: '/SPACES/PREMIUM OFFICE/Premium Office 06.png',
      title: 'Executive Lounge & Pantry',
      category: 'Breakout Zone',
      desc: 'Modern breakout lounge for informal discussions, networking, and team refreshment.',
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const teamSizes = [
    { size: '10 – 20 People', desc: 'Compact corporate setup' },
    { size: '20 – 40 People', desc: 'Established team floor' },
    { size: '40 – 80 People', desc: 'Full floor or multi-unit option' },
    { size: '80 – 120+ People', desc: 'Custom multi-floor headquarters' },
  ];

  const features = [
    {
      title: 'Professional Image',
      desc: 'Premium common areas and business environment that reflect respectability.',
      icon: Building2,
    },
    {
      title: 'Space To Grow',
      desc: 'Unit and space models for organizations of all sizes.',
      icon: Users,
    },
    {
      title: 'Business Connectivity',
      desc: 'Fiber infrastructure and connectivity built for modern operations.',
      icon: Wifi,
    },
    {
      title: 'Accessibility',
      desc: 'Located in the centre of Bandung\'s activity.',
      icon: MapPin,
    },
    {
      title: 'Security',
      desc: '24-hour professional security and layered building access.',
      icon: Shield,
    },
    {
      title: 'Employee Experience',
      desc: 'Gym, sauna, and rooftop pool directly improve quality of life at work.',
      icon: HeartHandshake,
    },
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
            <span className="font-bold text-slate-900">Premium Office</span>
          </nav>

          {/* Hero Card */}
          <div className="bg-slate-900 text-white rounded-[32px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative overflow-hidden shadow-2xl">
            <div className="lg:col-span-7 space-y-6 z-10">
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-amber-400 text-xs font-bold uppercase tracking-wider inline-block border border-white/15">
                HQUARTERS PREMIUM OFFICE
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.12]">
                Your Next Headquarters <br className="hidden sm:inline" />
                <span className="text-[#EA8E18]">Is Ready.</span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                Premium office space in Bandung's CBD for companies ready for their next chapter.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    const formElem = document.getElementById('inquiry-form');
                    if (formElem) formElem.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-8 py-3.5 rounded-full bg-[#EA8E18] hover:bg-[#d88010] text-white font-bold text-sm sm:text-base shadow-lg transition-all flex items-center gap-2 group"
                >
                  <span>Find My Office</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium">
                <span>Flexibility of Floorplans</span>
                <span>•</span>
                <span>Premium Business Environment</span>
                <span>•</span>
                <span>Ready for Growth Companies</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative z-10">
              <div className="rounded-[24px] overflow-hidden border border-white/15 aspect-[4/3] shadow-2xl group bg-slate-800">
                <img
                  src="/SPACES/PREMIUM OFFICE/Premium Office.png"
                  alt="HQuarters Premium Office Suite"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* COMPACT PREMIUM OFFICE PHOTO GALLERY SLIDER */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Header & Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EA8E18]">
                <span className="w-5 h-[2px] bg-[#EA8E18] inline-block" />
                <span>PREMIUM OFFICE GALLERY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                Explore <span className="text-[#EA8E18]">Premium Office Suites</span>
              </h2>
            </div>

            {/* Hint & Nav Arrows */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium text-slate-500 hidden sm:inline">
                Click any photo to enlarge
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const container = document.getElementById('premium-office-slider');
                    if (container) container.scrollBy({ left: -320, behavior: 'smooth' });
                  }}
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-[#EA8E18] hover:text-white text-slate-700 transition-all cursor-pointer border border-slate-200"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const container = document.getElementById('premium-office-slider');
                    if (container) container.scrollBy({ left: 320, behavior: 'smooth' });
                  }}
                  className="p-2.5 rounded-full bg-slate-100 hover:bg-[#EA8E18] hover:text-[#EA8E18] hover:text-white text-slate-700 transition-all cursor-pointer border border-slate-200"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Compact Scrollable Slider Grid */}
          <div
            id="premium-office-slider"
            className="flex gap-4 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 px-1"
          >
            {galleryImages.map((img, idx) => (
              <div
                key={img.src}
                onClick={() => {
                  setActiveImgIndex(idx);
                  setIsLightboxOpen(true);
                }}
                className="w-[250px] sm:w-[300px] shrink-0 snap-start bg-white rounded-[22px] border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
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
                      {img.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-2 rounded-full bg-slate-900/80 backdrop-blur-md text-white block shadow">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 font-heading group-hover:text-[#EA8E18] transition-colors leading-snug line-clamp-1">
                    {img.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-1 font-normal">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
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
                    HQuarters Premium Office Gallery
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

        {/* STATEMENT 1: YOUR COMPANY HAS GROWN */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
            Your Company Has Grown. <br className="hidden sm:inline" />
            <span className="text-[#EA8E18]">Your Office Should Too.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
Every company reaches a point where the old office no longer reflects the business it has become. Teams grow. Clients grow. Expectations rise. The office becomes part of your corporate identity.

          </p>
        </section>

        {/* STATEMENT 2: BEFORE THE MEETING STARTS */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center border border-slate-200/80 max-w-4xl mx-auto space-y-4">
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              Before The Meeting Starts, Your Office Has Already Said Something.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
A representative lobby. A professional arrival experience. A credible business environment — the kind that tells clients and partners they're dealing with a serious company.

            </p>
            <div className="pt-2 font-bold text-[#EA8E18] text-lg sm:text-xl font-heading">
              Make sure it says the right thing.
            </div>
          </div>
        </section>

        {/* INCLUDED: EVERYTHING A MODERN COMPANY EXPECTS */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
              Everything a Modern Company Expects.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FEF3E2] text-[#B86807] group-hover:bg-[#EA8E18] group-hover:text-white flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-[#EA8E18] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* HOW BIG IS YOUR TEAM? */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 border border-slate-200/80 space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                How Big Is Your Team?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamSizes.map((item) => (
                <div
                  key={item.size}
                  className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-sm text-center space-y-2 hover:border-[#EA8E18]/40 hover:shadow-md transition-all"
                >
                  <div className="text-2xl font-extrabold text-slate-900 font-heading">
                    {item.size}
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CAPITAL & COMMUNITY SECTION */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F5] rounded-[36px] sm:rounded-[44px] p-8 sm:p-14 lg:p-16 border border-slate-200/80 space-y-10 shadow-sm relative overflow-hidden">
            
            {/* Top Text Content */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-slate-900 tracking-tight leading-tight">
                Lease The Space. <span className="text-[#EA8E18]"><br/>Keep Your Capital Working.</span>
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                Preserve your capital for business growth, expansion, and talent. Strategic leasing gives you prime address and space without locking away capital in real estate ownership.
              </p>
            </div>

            {/* 3 Capital Benefit Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2 text-center">
                <div className="text-xl font-bold text-[#EA8E18] font-heading">Reinvested Capital</div>
                <p className="text-xs text-slate-600 font-normal">Channel cashflow directly into core products and team growth.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2 text-center">
                <div className="text-xl font-bold text-[#EA8E18] font-heading">Operational Agility</div>
                <p className="text-xs text-slate-600 font-normal">Scale office footprint up seamlessly as headcount expands.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2 text-center">
                <div className="text-xl font-bold text-[#EA8E18] font-heading">Prime CBD Domicile</div>
                <p className="text-xs text-slate-600 font-normal">Instant corporate reputation on Asia Afrika CBD.</p>
              </div>
            </div>

            {/* Community Banner Callout */}
            <div className="bg-[#FEF3E2] rounded-2xl p-6 sm:p-8 text-center border border-[#EA8E18]/30 max-w-3xl mx-auto flex items-center justify-center gap-3">
              <Sparkles className="w-5 h-5 text-[#EA8E18] shrink-0 hidden sm:block" />
              <p className="text-base sm:text-lg font-bold text-[#965203] font-heading">
                Join a growing community of respected companies operating from HQuarters.
              </p>
            </div>

          </div>
        </section>

        {/* INQUIRY FORM CARD */}
        <section id="inquiry-form" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF8F5] rounded-[32px] sm:rounded-[44px] p-8 sm:p-12 lg:p-14 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 tracking-tight">
                Tell Us What Your Team Needs.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-normal">
                Tell us what you are looking for in a workspace. Team size, move-in timeline, or specific layout request. Get a quote or price list.
              </p>
            </div>

            <div className="lg:col-span-7 bg-white p-8 rounded-[28px] border border-slate-200/80 shadow-md">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">Inquiry Received!</h3>
                  <p className="text-slate-600 text-sm">
                    Our space consultants will get in touch with you shortly regarding Premium Office availability.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter company name..."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#EA8E18]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Full name..."
                        value={formData.yourName}
                        onChange={(e) => setFormData({ ...formData, yourName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#EA8E18]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp Number</label>
                      <input
                        type="text"
                        required
                        placeholder="0812..."
                        value={formData.whatsApp}
                        onChange={(e) => setFormData({ ...formData, whatsApp: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#EA8E18]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Number of Employees</label>
                      <input
                        type="text"
                        placeholder="e.g. 25 people"
                        value={formData.employees}
                        onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#EA8E18]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Move-in Timeline / Needs</label>
                      <input
                        type="text"
                        placeholder="e.g. Next month..."
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#EA8E18]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#EA8E18] hover:bg-[#d88010] text-white font-bold text-base shadow-lg transition-all"
                    >
                      Find My Office
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </section>

        {/* BOTTOM DARK BANNER */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 text-center border border-slate-800 space-y-3 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Your Next Chapter Deserves The Right Address.
            </h2>
            <p className="text-slate-400 text-sm font-medium">
              HQuarters Premium Office — Asia Afrika, Bandung
            </p>
          </div>
        </section>

      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
