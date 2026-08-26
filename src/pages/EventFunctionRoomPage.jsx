import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Users,
  Maximize2,
  X,
  ChevronRight,
  ChevronLeft,
  Home,
  Sparkles,
  Volume2,
  Projector,
  Wifi,
  SunMedium,
  Wind,
  ShieldCheck,
  Armchair,
  Shield,
  Car,
  MapPin,
  Phone,
  Layers,
  LayoutGrid,
  Clock,
  Coffee,
  Utensils,
  Check,
  Send,
  Building,
  Info
} from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function EventFunctionRoomPage({ setCurrentPage }) {
  
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    eventType: '',
    eventDate: '',
    guests: '',
    selectedPackage: '',
    selectedRoom: 'Room 1 & Room 2 (Combined)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeLayout, setActiveLayout] = useState('theatre');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  
  const [galleryImgIndex, setGalleryImgIndex] = useState(0);
  const [galleryLightboxOpen, setGalleryLightboxOpen] = useState(false);

  const functionRoomFacilities = [
    {
      id: 'theatre',
      src: '/Function Room/Theatre.webp?v=20260825',
      title: 'Theatre Layout',
    },
    {
      id: 'classroom',
      src: '/Function Room/Class Room.webp?v=20260825',
      title: 'Classroom Layout',
    },
    {
      id: 'ushape',
      src: '/Function Room/U SHape.webp?v=20260823',
      title: 'U-Shape Layout',
    },
    {
      id: 'roundtable',
      src: '/Function Room/Ron Table.webp?v=20260825',
      title: 'Round Table Banquet',
    },
  ];

  
  const functionRoomSlides = [
    {
      src: '/BUILDING/FR 01.webp?v=20260825',
      title: 'Grand Function Room',
      category: 'Events & Corporate Seminars',
      tag: 'Capacity: Up to 140 Pax',
      desc: 'Versatile corporate event hall with complete audiovisual facilities in Bandung CBD.',
    },
    {
      src: '/BUILDING/FR 02.webp?v=20260825',
      title: 'Executive Function Hall',
      category: 'Seminars & Conferences',
      tag: 'Capacity: Up to 100 Pax',
      desc: 'Modern climate-controlled function room equipped for high-impact presentations and gatherings.',
    },
    {
      src: '/BUILDING/FR 03.webp?v=20260825',
      title: 'Multi-Purpose Event Space',
      category: 'Private Banquets & Gatherings',
      tag: 'Capacity: Up to 140 Pax',
      desc: 'Flexible layout setups designed to accommodate keynotes, workshops, and banquet celebrations.',
    },
  ];

  const nextSlide = () => {
    setSlideDirection(1);
    setCurrentSlide((prev) => (prev === functionRoomSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlideDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? functionRoomSlides.length - 1 : prev - 1));
  };

  const goToSlide = (idx) => {
    setSlideDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
  };

  
  useEffect(() => {
    if (isPaused || isLightboxOpen) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [currentSlide, isPaused, isLightboxOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isLightboxOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, currentSlide]);

  
  const occasionPills = [
    'Corporate Seminars',
    'Product Launches',
    'Training & Workshops',
    'Board Meetings',
    'Private Celebrations',
    'Community Gatherings',
  ];

  
  const roomDetails = [
    {
      id: 'capacity',
      title: 'Capacity',
      desc: 'Up to 150 guests, theatre-style',
      icon: Users,
    },
    {
      id: 'layouts',
      title: 'Layouts',
      desc: 'Theatre, classroom, banquet, cocktail',
      icon: LayoutGrid,
    },
    {
      id: 'divisible',
      title: 'Divisible Space',
      desc: 'Partition into smaller rooms as needed',
      icon: Layers,
    },
    {
      id: 'light',
      title: 'Natural Light',
      desc: 'Floor-to-ceiling windows, blackout drapes',
      icon: SunMedium,
    },
  ];

  
  const seatingLayouts = [
    {
      id: 'theatre',
      title: 'Theatre',
      desc: 'Rows of chairs facing the front — best for presentations.',
      icon: 'theatre',
      r1Capacity: 140,
      r2Capacity: 100,
    },
    {
      id: 'classroom',
      title: 'Classroom',
      desc: 'Rows of tables and chairs — best for training and note-taking.',
      icon: 'classroom',
      r1Capacity: 100,
      r2Capacity: 60,
    },
    {
      id: 'reception',
      title: 'Reception',
      desc: 'Open standing space — best for mingling and cocktail events.',
      icon: 'reception',
      r1Capacity: 180,
      r2Capacity: 130,
    },
    {
      id: 'u-shape',
      title: 'U-Shape',
      desc: 'Tables arranged in a U — best for discussion-style meetings.',
      icon: 'ushape',
      r1Capacity: 100,
      r2Capacity: 60,
    },
    {
      id: 'round-table',
      title: 'Round Table',
      desc: 'Guests seated around round tables — best for banquets and dining.',
      icon: 'roundtable',
      r1Capacity: 70,
      r2Capacity: 50,
    },
  ];

  
  const packages = [
    {
      id: 'fullboard',
      name: 'Fullboard',
      price: 'Rp 550,000',
      unit: '/ pax',
      inclusions: '3× Coffee Break, 1× Lunch',
      duration: '*Max 12 hours',
    },
    {
      id: 'fullday',
      name: 'Full Day',
      price: 'Rp 450,000',
      unit: '/ pax',
      inclusions: '2× Coffee Break, 1× Lunch or Dinner',
      duration: '*Max 8 hours',
    },
    {
      id: 'halfday',
      name: 'Half Day',
      price: 'Rp 350,000',
      unit: '/ pax',
      inclusions: '1× Coffee Break, 1× Lunch or Dinner',
      duration: '*Max 6 hours',
    },
    {
      id: 'lunch-dinner',
      name: 'Lunch / Dinner',
      price: 'Rp 200,000',
      unit: '/ pax',
      inclusions: '1× Lunch or Dinner',
      duration: '',
    },
    {
      id: 'coffee-break',
      name: 'Coffee Break',
      price: 'Rp 200,000',
      unit: '/ pax',
      inclusions: '1× Coffee Break',
      duration: '*Min 6 hours',
    },
    {
      id: 'room-only',
      name: 'Room Only',
      price: 'Rp 1,500,000',
      unit: '/ room / hr',
      inclusions: '',
      duration: '*Min 4 hours / day',
    },
  ];

  
  const includedAmenities = [
    { name: 'Sound System & Microphones', icon: Volume2, desc: 'Crystal-clear acoustic system with wireless handheld & lapel mics.' },
    { name: 'Projector & Screen', icon: Projector, desc: 'High-lumen digital projector and wide motorised motorized presentation screens.' },
    { name: 'High-Speed Wi-Fi', icon: Wifi, desc: 'Dedicated high-bandwidth connectivity for presenters and attendees.' },
    { name: 'Adjustable Lighting', icon: SunMedium, desc: 'Customisable dimmable lighting presets from presentation to banquet.' },
    { name: 'Air Conditioning', icon: Wind, desc: 'Centralised climate control ensuring optimal comfort throughout the event.' },
    { name: 'On-Site Event Staff', icon: ShieldCheck, desc: 'Professional technical support and guest hospitality team on standby.' },
    { name: 'Tables & Seating', icon: Armchair, desc: 'Ergonomic conference chairs and modular banquet/classroom tables.' },
    { name: 'Building Security', icon: Shield, desc: '24/7 building access security, CCTV monitoring, and safe lobby access.' },
    { name: 'Dedicated Parking Access', icon: Car, desc: 'Direct access to automated mechanical parking and VIP drop-off zone.' },
  ];

  const handleSelectPackage = (pkg) => {
    const packageValue = `${pkg.name} (${pkg.price} ${pkg.unit})`;
    setFormData((prev) => ({
      ...prev,
      selectedPackage: packageValue,
    }));
    const formElem = document.getElementById('book-room');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCheckAvailabilityClick = () => {
    const formElem = document.getElementById('book-room');
    if (formElem) {
      formElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) return;

    setSubmitted(true);

    
    const textMessage = encodeURIComponent(
      `Hello HQuarters Event Team, I would like to inquire about the Function Room.\n\n` +
      `*Name:* ${formData.name}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*Event Type:* ${formData.eventType || 'General Event'}\n` +
      `*Date:* ${formData.eventDate || 'TBD'}\n` +
      `*Guests:* ${formData.guests || 'TBD'}\n` +
      `*Selected Package:* ${formData.selectedPackage || 'Not specified'}\n` +
      `*Room Preference:* ${formData.selectedRoom}\n` +
      (formData.notes ? `*Notes:* ${formData.notes}\n` : '')
    );

    
    setTimeout(() => {
      window.open(`https://wa.me/628111908319?text=${textMessage}`, '_blank');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar currentPage="event" setCurrentPage={setCurrentPage} />

      <main className="pt-24 sm:pt-28 pb-0 space-y-20 sm:space-y-28">

        
        
        
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#FAF8F5] rounded-2xl sm:rounded-[44px] p-8 sm:p-12 lg:p-14 border border-slate-200/80 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch relative overflow-hidden">

            
            <div className="lg:col-span-6 space-y-6 z-10 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2">
                <span className="px-2 py-1 rounded-full text-[#EA8E18] text-lg font-bold uppercase tracking-wider inline-block self-start">
                  FUNCTION ROOM
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-medium font-heading text-slate-900 tracking-tight leading-[1.08]">
                A Space Built For <br />
                <span className="text-[#EA8E18] font-medium">Your Next Event.</span>
              </h1>

              <p className="text-[#3a3836] text-base sm:text-[18px] leading-[1.6] max-w-xl font-normal">
                From corporate seminars to private celebrations, HQuarters' function room offers a flexible, professional setting in the heart of Bandung's CBD.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleCheckAvailabilityClick}
                  className="px-8 py-4 rounded-full bg-[#EA8E18] hover:bg-[#d88010] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#EA8E18]/25 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2 group"
                >
                  <span>Check Availability</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    const specs = document.getElementById('room-specs');
                    if (specs) specs.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm sm:text-base border border-slate-200 shadow-sm transition-all duration-200 cursor-pointer flex items-center gap-2"
                >
                  <span>View Specifications</span>
                </button>
              </div>
            </div>

            
            <div className="lg:col-span-6 relative z-10 flex items-stretch">
              <div className="rounded-xl overflow-hidden border border-slate-200/80 w-full h-full min-h-[280px] group bg-slate-100">
                <img
                  src="/Function%20Room/Theatre.webp?v=20260826"
                  alt="HQuarters Function Room — Theatre Setup"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

          </div>
        </section>

        
        
        
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#EA8E18]">
                ROOM DETAILS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-heading text-slate-900 tracking-tight">
              Built To Adapt To Your Event.
            </h2>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roomDetails.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-[#EA8E18]/40 hover:shadow-md transition-all group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FEF3E2] text-[#EA8E18] flex items-center justify-center shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-lg sm:text-xl font-medium font-heading text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-[#3a3836] text-sm leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        
        
        
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium font-heading text-slate-900 tracking-tight">
              Function Room <span className="text-[#EA8E18]">Details</span>
            </h2>
          </div>

          
          <div className="relative">
            
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[640px] rounded-[24px] sm:rounded-2xl overflow-hidden bg-slate-900 shadow-xl group">
              <img
                src={functionRoomFacilities[galleryImgIndex]?.src}
                alt={functionRoomFacilities[galleryImgIndex]?.title}
                className="w-full h-full object-cover object-center transition-opacity duration-500 cursor-pointer"
                onClick={() => setGalleryLightboxOpen(true)}
              />

              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setGalleryImgIndex((prev) =>
                    prev === 0 ? functionRoomFacilities.length - 1 : prev - 1
                  );
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/40 hover:bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-900 transition-all z-10 cursor-pointer shadow-md hover:scale-105"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setGalleryImgIndex((prev) =>
                    prev === functionRoomFacilities.length - 1 ? 0 : prev + 1
                  );
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white/40 hover:bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-900 transition-all z-10 cursor-pointer shadow-md hover:scale-105"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              
              <div className="absolute bottom-4 inset-x-0 flex items-center justify-center gap-2 z-10">
                {functionRoomFacilities.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setGalleryImgIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      idx === galleryImgIndex
                        ? 'bg-white w-6 shadow-md'
                        : 'bg-white/50 hover:bg-white/80 w-2'
                    }`}
                  />
                ))}
              </div>
            </div>

            
            <div className="flex items-center justify-start gap-3 sm:gap-4 mt-4 overflow-x-auto scrollbar-none pb-2 sm:pb-0 max-w-full">
              {functionRoomFacilities.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setGalleryImgIndex(idx)}
                  className={`relative shrink-0 w-24 h-16 sm:w-32 sm:h-22 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    idx === galleryImgIndex
                      ? 'border-[#EA8E18] opacity-100 scale-105 shadow-md'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt={img.title} className="w-full h-full object-cover object-center" />
                </button>
              ))}
            </div>
          </div>
        </section>

        
        
        
        <section id="room-specs" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#EA8E18]">
                ROOM SPECIFICATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-heading text-slate-900 tracking-tight">
              Room 1 & Room 2.
            </h2>
          </div>

          
          <div className="overflow-hidden rounded-[20px] sm:rounded-xl border border-slate-200/80 shadow-md bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#1c1a19] text-white text-xs sm:text-sm font-medium font-heading">
                    <th className="py-4 px-6 font-medium">Room</th>
                    <th className="py-4 px-6 font-medium">Size</th>
                    <th className="py-4 px-6 font-medium">Dimensions</th>
                    <th className="py-4 px-6 font-medium text-center">Theatre</th>
                    <th className="py-4 px-6 font-medium text-center">Classroom</th>
                    <th className="py-4 px-6 font-medium text-center">Reception</th>
                    <th className="py-4 px-6 font-medium text-center">U-Shape</th>
                    <th className="py-4 px-6 font-medium text-center">Round Table</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  
                  <tr className="hover:bg-amber-50/20 transition-colors">
                    <td className="py-4.5 px-6 font-medium text-slate-900 font-heading text-sm sm:text-base">
                      Room 1
                    </td>
                    <td className="py-4.5 px-6 text-[#3a3836] font-normal">140.4 m²</td>
                    <td className="py-4.5 px-6 text-[#3a3836] font-normal">10.58 — 15 m</td>
                    <td className="py-4.5 px-6 text-center font-medium text-[#EA8E18] text-sm sm:text-base">140</td>
                    <td className="py-4.5 px-6 text-center font-medium text-[#EA8E18] text-sm sm:text-base">100</td>
                    <td className="py-4.5 px-6 text-center font-medium text-[#EA8E18] text-sm sm:text-base">180</td>
                    <td className="py-4.5 px-6 text-center font-medium text-[#EA8E18] text-sm sm:text-base">100</td>
                    <td className="py-4.5 px-6 text-center font-medium text-[#EA8E18] text-sm sm:text-base">70</td>
                  </tr>

                  
                  <tr className="hover:bg-amber-50/20 transition-colors">
                    <td className="py-4.5 px-6 font-medium text-slate-900 font-heading text-sm sm:text-base">
                      Room 2
                    </td>
                    <td className="py-4.5 px-6 text-[#3a3836] font-normal">157.5 m²</td>
                    <td className="py-4.5 px-6 text-[#3a3836] font-normal">9 — 15.6 m</td>
                    <td className="py-4.5 px-6 text-center font-medium text-[#EA8E18] text-sm sm:text-base">100</td>
                    <td className="py-4.5 px-6 text-center font-medium text-[#EA8E18] text-sm sm:text-base">60</td>
                    <td className="py-4.5 px-6 text-center font-medium text-[#EA8E18] text-sm sm:text-base">130</td>
                    <td className="py-4.5 px-6 text-center font-medium text-[#EA8E18] text-sm sm:text-base">60</td>
                    <td className="py-4.5 px-6 text-center font-medium text-[#EA8E18] text-sm sm:text-base">50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          
          <div className="text-center text-xs sm:text-sm font-normal text-[#3a3836] pt-1">
            Rooms can be combined or divided by movable partition to fit your event size.
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 pt-2">
            {seatingLayouts.map((layout) => (
              <div
                key={layout.id}
                className="bg-white rounded-xl p-6 sm:p-7 text-center border border-slate-100/90 shadow-sm flex flex-col items-center justify-center min-h-[210px] space-y-4 hover:border-[#EA8E18]/40 hover:shadow-md transition-all group"
              >
                
                <div className="h-12 flex items-center justify-center text-[#EA8E18]">
                  {layout.id === 'theatre' && (
                    <svg className="w-9 h-9" viewBox="0 0 30 26" fill="currentColor">
                      
                      <rect x="2" y="2" width="4.5" height="4.5" rx="1.2" />
                      <rect x="9.5" y="2" width="4.5" height="4.5" rx="1.2" />
                      <rect x="17" y="2" width="4.5" height="4.5" rx="1.2" />
                      <rect x="24.5" y="2" width="4.5" height="4.5" rx="1.2" />
                      
                      <rect x="2" y="10.5" width="4.5" height="4.5" rx="1.2" />
                      <rect x="9.5" y="10.5" width="4.5" height="4.5" rx="1.2" />
                      <rect x="17" y="10.5" width="4.5" height="4.5" rx="1.2" />
                      <rect x="24.5" y="10.5" width="4.5" height="4.5" rx="1.2" />
                      
                      <rect x="2" y="19" width="4.5" height="4.5" rx="1.2" />
                      <rect x="9.5" y="19" width="4.5" height="4.5" rx="1.2" />
                      <rect x="17" y="19" width="4.5" height="4.5" rx="1.2" />
                      <rect x="24.5" y="19" width="4.5" height="4.5" rx="1.2" />
                    </svg>
                  )}

                  {layout.id === 'classroom' && (
                    <svg className="w-9 h-9" viewBox="0 0 30 26" fill="currentColor">
                      
                      <rect x="2" y="3" width="26" height="4.5" rx="2.2" />
                      <rect x="2" y="11" width="26" height="4.5" rx="2.2" />
                      <rect x="2" y="19" width="26" height="4.5" rx="2.2" />
                    </svg>
                  )}

                  {layout.id === 'reception' && (
                    <svg className="w-14 h-6" viewBox="0 0 54 20" fill="currentColor">
                      
                      
                      <circle cx="6" cy="5.5" r="2.6" />
                      <circle cx="6" cy="14.5" r="2.6" />
                      
                      <circle cx="27" cy="5.5" r="2.6" />
                      <circle cx="27" cy="14.5" r="2.6" />
                      
                      <circle cx="48" cy="5.5" r="2.6" />
                      <circle cx="48" cy="14.5" r="2.6" />
                    </svg>
                  )}

                  {layout.id === 'u-shape' && (
                    <svg className="w-9 h-9" viewBox="0 0 30 26" fill="currentColor">
                      
                      
                      <rect x="4" y="4" width="4.5" height="4.5" rx="1" />
                      <rect x="4" y="11.5" width="4.5" height="4.5" rx="1" />
                      <rect x="4" y="19" width="4.5" height="4.5" rx="1" />
                      
                      <rect x="11" y="19" width="4.5" height="4.5" rx="1" />
                      <rect x="18" y="19" width="4.5" height="4.5" rx="1" />
                      <rect x="25" y="19" width="4.5" height="4.5" rx="1" />
                      
                      <rect x="25" y="11.5" width="4.5" height="4.5" rx="1" />
                      <rect x="25" y="4" width="4.5" height="4.5" rx="1" />
                    </svg>
                  )}

                  {layout.id === 'round-table' && (
                    <svg className="w-9 h-9" viewBox="0 0 30 30" fill="none">
                      
                      <circle cx="15" cy="15" r="9" className="stroke-[#EA8E18]" strokeWidth="2.2" />
                      
                      <circle cx="8.64" cy="8.64" r="2.2" className="fill-[#EA8E18]" />
                      <circle cx="21.36" cy="8.64" r="2.2" className="fill-[#EA8E18]" />
                      <circle cx="21.36" cy="21.36" r="2.2" className="fill-[#EA8E18]" />
                      <circle cx="8.64" cy="21.36" r="2.2" className="fill-[#EA8E18]" />
                    </svg>
                  )}
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-medium text-slate-900 text-base sm:text-[17px] font-heading">
                    {layout.title}
                  </h4>
                  <p className="text-[#3a3836] text-xs sm:text-[13px] leading-relaxed font-normal max-w-[210px] mx-auto">
                    {layout.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        
        
        <section id="meeting-packages" className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#EA8E18]">
                MEETING PACKAGES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-heading text-slate-900 tracking-tight">
              Pricing Per Package.
            </h2>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                onClick={() => handleSelectPackage(pkg)}
                className="bg-white hover:bg-[#EA8E18] rounded-xl sm:rounded-2xl p-7 sm:p-8 text-left border border-slate-200/90 hover:border-[#EA8E18] shadow-sm hover:shadow-2xl hover:shadow-[#EA8E18]/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between min-h-[220px] cursor-pointer group relative overflow-hidden"
              >
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl sm:text-2xl font-medium font-heading text-slate-900 group-hover:text-white transition-colors duration-300">
                      {pkg.name}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-slate-100/80 group-hover:bg-white text-slate-500 group-hover:text-[#EA8E18] flex items-center justify-center transition-all duration-300 shrink-0 shadow-sm group-hover:scale-110">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                  
                  <div className="flex items-baseline gap-1.5 pb-2 border-b border-slate-100 group-hover:border-white/25 transition-colors duration-300">
                    <span className="text-2xl sm:text-3xl font-medium font-heading text-[#EA8E18] group-hover:text-white transition-colors duration-300">
                      {pkg.price}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-400 group-hover:text-white/80 font-normal italic transition-colors duration-300">
                      {pkg.unit}
                    </span>
                  </div>

                  
                  {pkg.inclusions ? (
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-slate-900 group-hover:text-white font-normal leading-relaxed transition-colors duration-300">
                      <Coffee className="w-4 h-4 text-[#EA8E18] group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" />
                      <span>{pkg.inclusions}</span>
                    </div>
                  ) : (
                    <div className="text-xs text-transparent select-none py-1">
                      &nbsp;
                    </div>
                  )}
                </div>

                
                <div className="pt-4 mt-4 border-t border-slate-100 group-hover:border-white/25 flex items-center justify-between text-xs text-slate-500 group-hover:text-white/90 font-normal transition-colors duration-300">
                  <span>{pkg.duration || ''}</span>
                  <span className="text-[#EA8E18] group-hover:text-white font-semibold text-[11px] uppercase tracking-wider group-hover:underline transition-colors duration-300">
                    Inquire
                  </span>
                </div>
              </div>
            ))}
          </div>

          
          <div className="space-y-2.5 text-center text-xs sm:text-[13px] font-normal text-[#3a3836] max-w-5xl mx-auto pt-4 leading-relaxed">
            <p className="text-[#3a3836]">
              All rates are nett. Includes LCD & screen, whiteboard, standard sound system, free Wi-Fi, and meeting amenities (pencil, notepad, mineral water).
            </p>
            <p className="text-slate-500 italic">
              Prices are subject to change without prior notice. Please contact us for the latest <br />
              pricing and package details.
            </p>
          </div>
        </section>

        
        
        
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="flex items-center justify-center">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#EA8E18]">
                INCLUDED
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-heading text-slate-900 tracking-tight">
              Everything You Need To Host.
            </h2>
            <p className="text-[#3a3836] text-sm sm:text-base font-normal">
              State-of-the-art infrastructure ready to power high-impact presentations, banquets, and executive gatherings.
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {includedAmenities.map((amenity, idx) => {
              const IconComp = amenity.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[20px] sm:rounded-xl p-5 sm:p-6 border border-slate-200/90 shadow-sm flex items-center gap-4 hover:border-[#EA8E18]/40 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#FEF3E2] text-[#EA8E18] flex items-center justify-center shrink-0 shadow-sm">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium font-heading text-slate-900">
                    {amenity.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </section>

        
        
        
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#161a25] rounded-2xl sm:rounded-[40px] p-8 sm:p-14 lg:p-16 text-center text-white border border-slate-800 shadow-xl space-y-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium font-heading tracking-tight text-white">
                Perfect For Any Occasion.
              </h2>
            </div>

            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {occasionPills.map((pill, idx) => (
                <div
                  key={idx}
                  className="w-full py-3.5 px-4 rounded-full bg-white/10 hover:bg-[#EA8E18] hover:text-white border border-white/10 hover:border-[#EA8E18] text-slate-200 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-sm cursor-default flex items-center justify-center text-center"
                >
                  {pill}
                </div>
              ))}
            </div>
          </div>
        </section>

        
        
        
        <section id="book-room" className="py-12 sm:py-20 bg-slate-50">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl sm:rounded-[40px] shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-slate-200/60">

              
              <div className="lg:w-2/5 relative min-h-[420px] lg:min-h-auto bg-slate-900 flex flex-col justify-end p-6 sm:p-10">
                <img
                  src="/ballroom.webp?v=20260825"
                  alt="HQuarters Function Room"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                />

                <div className="relative z-10 bg-[#161a25] rounded-2xl p-6 sm:p-8 shadow-xl border border-white/5 mt-auto space-y-4">
                  <span className="bg-[#EA8E18] text-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-md inline-block shadow-sm">
                    BOOK THE ROOM
                  </span>

                  <h2 className="text-2xl sm:text-3xl font-medium font-heading text-white leading-tight">
                    Tell Us About Your Event.
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Share your event details and our team will confirm availability and pricing for your date.
                  </p>

                  <div className="pt-3 border-t border-white/10 space-y-2.5 text-xs text-slate-300 font-normal">
                    <div className="font-medium text-white text-xs">
                      Function Room HQuarters — Upper Ground Floor (UG)
                    </div>
                    <div className="flex items-start gap-2 text-slate-400 font-normal">
                      <MapPin className="w-3.5 h-3.5 text-[#EA8E18] shrink-0 mt-0.5" />
                      <span>Jl. Asia Afrika No. 158, Bandung, Jawa Barat — 40261</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 font-normal">
                      <Phone className="w-3.5 h-3.5 text-[#EA8E18] shrink-0" />
                      <span>022-4205077 / 0821-2200-2268</span>
                    </div>
                  </div>
                </div>
              </div>

              
              <div className="lg:w-3/5 p-8 sm:p-12 lg:p-14">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-2 shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-medium font-heading text-[#231f20]">
                      Inquiry Received
                    </h3>
                    <p className="text-[#3a3836] max-w-sm mx-auto text-sm leading-relaxed font-normal">
                      Thank you, <strong className="font-semibold">{formData.name}</strong>. Our event management concierge has received your request and will reach out via WhatsApp shortly to confirm availability.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs uppercase tracking-wider transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-8">

                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-medium font-heading text-[#231f20]">
                          1. Select Package & Room
                        </h3>
                        <p className="text-sm text-[#3a3836] mt-1 font-normal">
                          Choose the package format and room size for your event.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <Coffee className="w-3 h-3 text-[#EA8E18]" /> PACKAGE (OPTIONAL)
                          </label>
                          <select
                            id="package-select"
                            value={formData.selectedPackage}
                            onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#EA8E18] focus:ring-1 focus:ring-[#EA8E18] transition-all cursor-pointer text-slate-800 font-normal"
                          >
                            <option value="">Choose Package</option>
                            {packages.map((pkg) => {
                              const val = `${pkg.name} (${pkg.price} ${pkg.unit})`;
                              return (
                                <option key={pkg.id} value={val}>
                                  {val}
                                </option>
                              );
                            })}
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <Layers className="w-3 h-3 text-[#EA8E18]" /> PREFERRED ROOM
                          </label>
                          <select
                            value={formData.selectedRoom}
                            onChange={(e) => setFormData({ ...formData, selectedRoom: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#EA8E18] focus:ring-1 focus:ring-[#EA8E18] transition-all cursor-pointer text-slate-800 font-normal"
                          >
                            <option value="Room 1 & Room 2 (Combined)">Room 1 & Room 2 (Combined)</option>
                            <option value="Room 1 (140.4 m²)">Room 1 (140.4 m²)</option>
                            <option value="Room 2 (157.5 m²)">Room 2 (157.5 m²)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-medium font-heading text-[#231f20]">
                          2. Event & Contact Details
                        </h3>
                        <p className="text-sm text-[#3a3836] mt-1 font-normal">
                          We'll check availability and confirm pricing for your date.
                        </p>
                      </div>

                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                              <Users className="w-3 h-3 text-[#EA8E18]" /> NAME *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#EA8E18] focus:ring-1 focus:ring-[#EA8E18] transition-all font-normal"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                              <Phone className="w-3 h-3 text-[#EA8E18]" /> WHATSAPP *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="+62 812 3456 7890"
                              value={formData.whatsapp}
                              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                              className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#EA8E18] focus:ring-1 focus:ring-[#EA8E18] transition-all font-normal"
                            />
                          </div>
                        </div>

                        
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3 text-slate-400" /> EVENT TYPE
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. Seminar, Product Launch, Wedding"
                            value={formData.eventType}
                            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#EA8E18] focus:ring-1 focus:ring-[#EA8E18] transition-all font-normal"
                          />
                        </div>

                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                              <Calendar className="w-3 h-3 text-slate-400" /> EVENT DATE
                            </label>
                            <input
                              type="date"
                              value={formData.eventDate}
                              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                              className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#EA8E18] focus:ring-1 focus:ring-[#EA8E18] transition-all text-slate-700 font-normal"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                              <Users className="w-3 h-3 text-slate-400" /> NUMBER OF GUESTS
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. 50 — 150 pax"
                              value={formData.guests}
                              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                              className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#EA8E18] focus:ring-1 focus:ring-[#EA8E18] transition-all font-normal"
                            />
                          </div>
                        </div>

                        
                        <button
                          type="submit"
                          className="w-full py-4 mt-2 rounded-xl bg-[#151a27] hover:bg-black text-white font-semibold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                        >
                          <span>SEND INQUIRY</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>

                        <p className="text-center text-[10px] text-slate-400 mt-3 font-normal">
                          Your information is secure and will only be used by HQuarters management.
                        </p>
                      </form>
                    </div>

                  </div>
                )}
              </div>

            </div>
          </div>
        </section>

        
        <section className="pt-20 sm:pt-28 pb-12 sm:pb-16 bg-[#231F20] text-white text-center relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-medium font-heading text-white tracking-tight">
              A Space Built For <span className="text-[#EA8E18]">Your Next Event.</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto font-normal">
              Function Room HQuarters — Upper Ground Floor (UG), Asia Afrika Bandung
            </p>
          </div>
        </section>

      </main>

      
      {isLightboxOpen && createPortal(
        <div className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8">
          <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full">
            <div>
              <h4 className="text-lg sm:text-xl font-medium font-heading">{functionRoomSlides[currentSlide].title}</h4>
              <p className="text-xs sm:text-sm text-[#EA8E18] font-semibold">{functionRoomSlides[currentSlide].category}</p>
            </div>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center my-4 max-w-6xl mx-auto w-full relative">
            <img
              src={functionRoomSlides[currentSlide].src}
              alt={functionRoomSlides[currentSlide].title}
              className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl"
            />

            {functionRoomSlides.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevSlide();
                  }}
                  className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-[#EA8E18] text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextSlide();
                  }}
                  className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-[#EA8E18] text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          <div className="text-center text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto font-normal">
            <p>{functionRoomSlides[currentSlide].desc}</p>
          </div>
        </div>,
        document.body
      )}

      
      {galleryLightboxOpen && createPortal(
        <div className="fixed inset-0 z-[9999] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8">
          <div className="flex items-center justify-between text-white max-w-7xl mx-auto w-full">
            <div>
              <h4 className="text-lg sm:text-xl font-medium font-heading">{functionRoomFacilities[galleryImgIndex]?.title}</h4>
            </div>
            <button
              onClick={() => setGalleryLightboxOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center my-4 max-w-6xl mx-auto w-full relative">
            <img
              src={functionRoomFacilities[galleryImgIndex]?.src}
              alt={functionRoomFacilities[galleryImgIndex]?.title}
              className="max-h-[75vh] w-auto object-contain rounded-2xl shadow-2xl"
            />

            {functionRoomFacilities.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryImgIndex((prev) => (prev === 0 ? functionRoomFacilities.length - 1 : prev - 1));
                  }}
                  className="absolute left-2 sm:left-4 p-3 rounded-full bg-black/60 hover:bg-[#EA8E18] text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryImgIndex((prev) => (prev === functionRoomFacilities.length - 1 ? 0 : prev + 1));
                  }}
                  className="absolute right-2 sm:right-4 p-3 rounded-full bg-black/60 hover:bg-[#EA8E18] text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>,
        document.body
      )}

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
