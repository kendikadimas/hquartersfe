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
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export default function FindSpacePageSection() {
  const [selectedSpace, setSelectedSpace] = useState('Premium Office');
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    whatsapp: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.whatsapp) {
      setSubmitted(true);
    }
  };

  return (
    <section id="find-space" className="pt-4 sm:pt-6 pb-16 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ========================================================================= */}
        {/* 1. HEADER SECTION */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block mb-3">
            SPACE MATCHMAKING
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 font-heading tracking-tight">
            Tell Us <span className="text-[#E8860B]">What You Need.</span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            We'll help you find the right space.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. MAIN CONTENT: CARDS & FORM */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-[1200px] mx-auto items-stretch">
          
          {/* Left Column - 4 Selection Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 h-full">
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
                  className={`p-6 rounded-2xl border text-left transition-all duration-300 relative flex flex-col justify-between group flex-1 ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-[1.02] lg:scale-[1.03] z-10'
                      : 'bg-slate-50/80 text-slate-900 border-slate-200/80 hover:bg-white hover:border-[#E8860B]/40 hover:shadow-lg'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute top-4 right-4">
                      <CheckCircle2 className="w-5 h-5 text-[#E8860B]" />
                    </div>
                  )}

                  <div className="space-y-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#E8860B] text-white'
                          : 'bg-white border border-slate-200 text-slate-800 group-hover:bg-[#FEF3E2] group-hover:text-[#B86807]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="font-extrabold text-base font-heading leading-snug">
                      {opt.label}
                    </div>
                  </div>

                  <div className={`text-xs mt-4 ${isSelected ? 'text-amber-200/90' : 'text-slate-500'}`}>
                    {opt.desc}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column - Interactive Form Container Card */}
          <div className="lg:col-span-7 w-full h-full">
            <motion.div
              layout
              className="bg-white rounded-[32px] p-8 sm:p-12 border border-slate-200/80 shadow-2xl relative overflow-hidden h-full flex flex-col"
            >
              {/* Dynamic Selected Space Badge */}
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Selected Space Option:
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
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200 shadow-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our HQuarters workplace advisors will contact you on WhatsApp (<strong className="text-slate-900">{formData.whatsapp}</strong>) regarding <strong className="text-[#E8860B]">{selectedSpace}</strong> pricing & site tour availability within 15 minutes.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-all mt-4"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-1">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#E8860B]" />
                        <span>Name *</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-2 focus:ring-[#E8860B]/20 transition-all"
                      />
                    </div>

                    {/* Company (optional) */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>Company (optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your company / business name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-2 focus:ring-[#E8860B]/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#E8860B]" />
                      <span>WhatsApp *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 812 3456 7890"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-2 focus:ring-[#E8860B]/20 transition-all"
                    />
                  </div>

                  {/* Anything else we should know? */}
                  <div className="space-y-2 flex-1 flex flex-col">
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5 shrink-0">
                      <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                      <span>Anything else we should know?</span>
                    </label>
                    <textarea
                      placeholder="Tell us about your team size, move-in target date, or specific requirements..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-2 focus:ring-[#E8860B]/20 transition-all resize-none flex-1"
                    />
                  </div>

                  {/* Submit Action Button */}
                  <div className="pt-2 shrink-0">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#E8860B] hover:bg-[#d67a0a] text-white font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#E8860B]/20 hover:shadow-xl flex items-center justify-center gap-2 group"
                    >
                      <span>Find My Space</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
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
