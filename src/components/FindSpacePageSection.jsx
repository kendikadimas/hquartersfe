import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Home,
  Briefcase,
  Sparkles,
  CheckCircle2,
  Send,
  MessageSquare,
  User,
  Phone,
  Building,
  ShieldCheck,
  Calendar,
  Layers,
  Users,
  Clock,
  BriefcaseBusiness,
  LayoutGrid
} from 'lucide-react';

export default function FindSpacePageSection() {
  const [selectedSpace, setSelectedSpace] = useState('Premium Office');
  const [selectedVoPackage, setSelectedVoPackage] = useState('Virtual Office Standard');
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    company: '',
    profession: '',
    
    purpose: 'Work + Live',
    budget: '',
    timeline: '',
    
    workstations: '3 - 5 Workstations',
    duration: '6 Months',
    startDate: '',
    
    areaRequirement: '250 - 500 m²',
    leaseTerm: '3 Years Lease',
    fitoutPreference: 'Fitted / Partitioned',
    
    eventType: 'Corporate Seminar / Training',
    attendees: '30 - 60 Guests',
    eventDate: '',
    
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const voPackageOptions = [
    { id: 'business-address', label: 'Business Address', price: 'Rp 413,000 / mo' },
    { id: 'phone-answering', label: 'Phone Answering', price: 'Rp 530,000 / mo' },
    { id: 'vo-standard', label: 'Virtual Office Standard', price: 'Rp 883,000 / mo', popular: true },
    { id: 'vo-plus', label: 'Virtual Office Plus', price: 'Rp 1,354,000 / mo' },
  ];

  const spaceOptions = [
    {
      id: 'premium',
      label: 'I need a Premium Office',
      value: 'Premium Office',
      icon: Building2,
      desc: 'For established teams & corporate headquarters',
    },
    {
      id: 'soho',
      label: 'I want to Own a SOHO',
      value: 'SOHO',
      icon: Home,
      desc: 'Flexible fusion of living & working space',
    },
    {
      id: 'serviced',
      label: 'I need a Serviced Office',
      value: 'Serviced Office',
      icon: Briefcase,
      desc: 'Fully equipped turnkey office for fast teams',
    },
    {
      id: 'virtual',
      label: 'I need a Virtual Office',
      value: 'Virtual Office',
      icon: Sparkles,
      desc: 'Prestige CBD business address & mail service',
    },
    {
      id: 'event',
      label: 'I want to book Function Room',
      value: 'Function Room',
      icon: Calendar,
      desc: 'Flexible hall for corporate events, seminars & banquets',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) return;

    
    const normalizedWA = formData.whatsapp.replace(/^\+/, '').replace(/^08/, '628').replace(/^8/, '628');

    
    const lines = [`Halo HQuarters! Saya ingin tahu lebih lanjut tentang *${selectedSpace}*.`];
    if (selectedSpace === 'SOHO') {
      lines.push(`Tujuan: ${formData.purpose}`, `Budget: ${formData.budget || '-'}`, `Timeline: ${formData.timeline || '-'}`);
    } else if (selectedSpace === 'Serviced Office') {
      lines.push(`Workstations: ${formData.workstations}`, `Durasi: ${formData.duration}`, `Mulai: ${formData.startDate || '-'}`);
    } else if (selectedSpace === 'Premium Office') {
      lines.push(`Luas: ${formData.areaRequirement}`, `Lease: ${formData.leaseTerm}`, `Fitout: ${formData.fitoutPreference}`);
    } else if (selectedSpace === 'Virtual Office') {
      lines.push(`Paket: ${selectedVoPackage}`);
    } else if (selectedSpace === 'Function Room') {
      lines.push(`Acara: ${formData.eventType}`, `Tamu: ${formData.attendees}`, `Tanggal: ${formData.eventDate || '-'}`);
    }
    if (formData.company) lines.push(`Perusahaan: ${formData.company}`);
    if (formData.notes) lines.push(`Catatan: ${formData.notes}`);

    
    const gtmFormName = { 'SOHO': 'soho', 'Premium Office': 'premium_office', 'Serviced Office': 'serviced_office', 'Virtual Office': 'virtual_office', 'Function Room': 'function_room' }[selectedSpace];
    if (gtmFormName) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'lead_form_success', form_name: gtmFormName });
    }

    window.open(`https://wa.me/628111908319?text=${encodeURIComponent(lines.join('\n'))}`, '_blank');

    setSubmitted(true);
  };

  const getSubmitButtonLabel = () => {
    switch (selectedSpace) {
      case 'SOHO': return 'Find My SOHO Unit';
      case 'Serviced Office': return 'Request Serviced Office Tour';
      case 'Virtual Office': return 'Inquire Virtual Office Package';
      case 'Function Room': return 'Inquire Function Room Booking';
      default: return 'Request Proposal & Floorplan';
    }
  };

  return (
    <section id="find-space" className="pt-4 sm:pt-6 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        
        
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-6xl font-medium text-slate-900 font-heading tracking-tight">
            Tell Us <span className="text-[#E8860B]">What You Need.</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Select a workspace category on the left to see tailored configuration options.
          </p>
        </div>

        
        
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-[1200px] mx-auto items-stretch">
          
          
          <div className="lg:col-span-5 flex flex-col gap-3.5 h-full">
            {spaceOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = selectedSpace === opt.value;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => {
                    setSelectedSpace(opt.value);
                    setSubmitted(false);
                  }}
                  className={`p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between group cursor-pointer flex-1 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02] z-10'
                      : 'bg-slate-50/80 text-slate-900 border-slate-200/80 hover:bg-white hover:border-[#E8860B]/40 hover:shadow-md'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle2 className="w-5 h-5 text-[#E8860B]" />
                    </div>
                  )}

                  <div className="space-y-2">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#E8860B] text-white'
                          : 'bg-white border border-slate-200 text-slate-800 group-hover:bg-[#FEF3E2] group-hover:text-[#B86807]'
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5" />
                    </div>

                    <div className="font-bold text-base font-heading leading-snug">
                      {opt.label}
                    </div>
                    <p className={`text-xs ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {opt.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          
          <div className="lg:col-span-7 w-full h-full">
            <motion.div
              layout
              className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200/80 shadow-2xl relative overflow-hidden h-full flex flex-col justify-between"
            >
              
              <div className="flex items-center justify-between pb-5 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Selected Space:
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] font-extrabold text-xs">
                    {selectedSpace}
                  </span>
                </div>
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4 my-auto"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-medium font-heading text-slate-900">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our HQuarters workplace advisors will contact you on WhatsApp (<strong className="text-slate-900">{formData.whatsapp}</strong>) regarding <strong className="text-[#E8860B]">{selectedSpace}</strong> pricing & site tour availability within 15 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all mt-4 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col flex-1 justify-between">
                  <div className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1">
                        <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-3.5 h-3.5 text-[#E8860B]" />
                          <span>Full Name *</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                        />
                      </div>

                      
                      <div className="space-y-1">
                        <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                          <Phone className="w-3.5 h-3.5 text-[#E8860B]" />
                          <span>WhatsApp *</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+62 812 3456 7890"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                        />
                      </div>
                    </div>

                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>{selectedSpace === 'SOHO' ? 'Profession / Company' : 'Company Name (Optional)'}</span>
                      </label>
                      <input
                        type="text"
                        placeholder={selectedSpace === 'SOHO' ? 'e.g. Architect, Founder, Studio' : 'e.g. PT Enterprise Nusantara'}
                        value={selectedSpace === 'SOHO' ? formData.profession : formData.company}
                        onChange={(e) => setFormData({ 
                          ...formData, 
                          company: e.target.value,
                          profession: e.target.value 
                        })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                      />
                    </div>

                    
                    
                    
                    {selectedSpace === 'SOHO' && (
                      <>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider">
                            Primary Purpose
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {['Work', 'Live', 'Work + Live', 'Investment'].map((p) => {
                              const isSelected = formData.purpose === p;
                              return (
                                <button
                                  key={p}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, purpose: p })}
                                  className={`py-2 px-2.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                                    isSelected
                                      ? 'border-[#E8860B] bg-[#FEF3E2] text-slate-900 font-bold'
                                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                                  }`}
                                >
                                  {p}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div className="space-y-1">
                            <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider">
                              Estimated Budget
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. IDR 2 - 3 M"
                              value={formData.budget}
                              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider">
                              Purchase Timeline
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Ready immediately"
                              value={formData.timeline}
                              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    
                    
                    
                    {selectedSpace === 'Serviced Office' && (
                      <>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                            <Users className="w-3 h-3 text-[#E8860B]" /> Team Size / Workstations
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {['1 - 2 Workstations', '3 - 5 Workstations', '6 - 10 Workstations', '10+ Workstations'].map((ws) => {
                              const isSelected = formData.workstations === ws;
                              return (
                                <button
                                  key={ws}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, workstations: ws })}
                                  className={`py-2 px-2 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                                    isSelected
                                      ? 'border-[#E8860B] bg-[#FEF3E2] text-slate-900 font-bold'
                                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                                  }`}
                                >
                                  {ws}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div className="space-y-1">
                            <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                              <Clock className="w-3 h-3 text-slate-400" /> Lease Duration
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. 6 months / 1 year"
                              value={formData.duration}
                              onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                              <Calendar className="w-3 h-3 text-slate-400" /> Start Date
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Immediately / Next Month"
                              value={formData.startDate}
                              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    
                    
                    
                    {selectedSpace === 'Virtual Office' && (
                      <div className="space-y-2">
                        <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-[#E8860B]" />
                          <span>Select Package *</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {voPackageOptions.map((pkg) => {
                            const isSelected = selectedVoPackage === pkg.label;
                            return (
                              <div
                                key={pkg.label}
                                onClick={() => {
                                  setSelectedVoPackage(pkg.label);
                                  setFormData((prev) => ({
                                    ...prev,
                                    notes: `Virtual Office Package: ${pkg.label} (${pkg.price})`
                                  }));
                                }}
                                className={`p-3 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                                  isSelected
                                    ? 'border-[#E8860B] bg-[#FEF3E2] shadow-sm'
                                    : 'border-slate-200 bg-white hover:border-[#E8860B]/40 hover:bg-slate-50'
                                }`}
                              >
                                <div className="flex items-center justify-between gap-1">
                                  <span className={`font-semibold text-xs ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                                    {pkg.label}
                                  </span>
                                  {isSelected && <CheckCircle2 className="w-4 h-4 text-[#E8860B] shrink-0" />}
                                </div>
                                <div className="text-[11px] font-bold text-[#E8860B] mt-1">
                                  {pkg.price}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    
                    
                    
                    {selectedSpace === 'Premium Office' && (
                      <>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                            <LayoutGrid className="w-3 h-3 text-[#E8860B]" /> Area Requirement
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {['100 - 250 m²', '250 - 500 m²', '500 - 1,000 m²', 'Full Floorplate'].map((ar) => {
                              const isSelected = formData.areaRequirement === ar;
                              return (
                                <button
                                  key={ar}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, areaRequirement: ar })}
                                  className={`py-2 px-2 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${
                                    isSelected
                                      ? 'border-[#E8860B] bg-[#FEF3E2] text-slate-900 font-bold'
                                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                                  }`}
                                >
                                  {ar}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div className="space-y-1">
                            <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                              <Clock className="w-3 h-3 text-slate-400" /> Target Move-in / Lease Term
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. Q1 2027, 3-5 Years"
                              value={formData.leaseTerm}
                              onChange={(e) => setFormData({ ...formData, leaseTerm: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                              <Layers className="w-3 h-3 text-slate-400" /> Fit-out Condition
                            </label>
                            <select
                              value={formData.fitoutPreference}
                              onChange={(e) => setFormData({ ...formData, fitoutPreference: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                            >
                              <option value="Fitted / Partitioned">Fitted / Partitioned</option>
                              <option value="Bare Shell (Custom Interior)">Bare Shell (Custom Interior)</option>
                              <option value="Semi-Fitted">Semi-Fitted</option>
                            </select>
                          </div>
                        </div>
                      </>
                    )}

                    
                    
                    
                    {selectedSpace === 'Function Room' && (
                      <>
                        <div className="space-y-1.5">
                          <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                            <BriefcaseBusiness className="w-3 h-3 text-[#E8860B]" /> Event Type
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {[
                              'Corporate Seminar / Training',
                              'Boardroom / Executive Meeting',
                              'Banquet / Gala Dinner',
                              'Product Launch / Showcase'
                            ].map((et) => {
                              const isSelected = formData.eventType === et;
                              return (
                                <button
                                  key={et}
                                  type="button"
                                  onClick={() => setFormData({ ...formData, eventType: et })}
                                  className={`py-2 px-2.5 rounded-lg border text-xs font-semibold text-left truncate transition-all cursor-pointer ${
                                    isSelected
                                      ? 'border-[#E8860B] bg-[#FEF3E2] text-slate-900 font-bold'
                                      : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                                  }`}
                                >
                                  {et}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div className="space-y-1">
                            <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                              <Users className="w-3 h-3 text-slate-400" /> Estimated Attendees
                            </label>
                            <select
                              value={formData.attendees}
                              onChange={(e) => setFormData({ ...formData, attendees: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                            >
                              <option value="Up to 30 Guests">Up to 30 Guests</option>
                              <option value="30 - 60 Guests">30 - 60 Guests</option>
                              <option value="60 - 100 Guests">60 - 100 Guests</option>
                              <option value="100+ Guests">100+ Guests</option>
                            </select>
                          </div>
                          <div className="space-y-1">
                            <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                              <Calendar className="w-3 h-3 text-slate-400" /> Target Event Date
                            </label>
                            <input
                              type="text"
                              placeholder="e.g. 25 October 2026"
                              value={formData.eventDate}
                              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                        <span>Additional Notes / Specific Requests</span>
                      </label>
                      <textarea
                        rows="2"
                        placeholder="Tell us any specific requirements, timing, or questions..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all resize-none"
                      />
                    </div>
                  </div>

                  
                  <div className="pt-2 shrink-0">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#E8860B] hover:bg-[#d67a0a] text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#E8860B]/20 hover:shadow-xl flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>{getSubmitButtonLabel()}</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-center text-[10px] text-slate-400 mt-2 font-medium">
                      Your information is secure and will only be used by HQuarters management.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
