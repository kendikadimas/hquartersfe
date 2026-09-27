import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
} from 'lucide-react';

export default function FindSpacePageSection() {
  const [selectedSpace, setSelectedSpace] = useState('Premium Office');
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    company: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);

  const validateForm = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    else if (formData.name.trim().length < 2) errs.name = "Name must be at least 2 characters";
    const digits = formData.whatsapp.replace(/\D/g, "");
    if (!digits) errs.whatsapp = "WhatsApp number is required";
    else if (!/^(62|0)[0-9]{8,13}$/.test(digits)) errs.whatsapp = "Enter a valid Indonesian number (e.g. 08123456789)";
    return errs;
  };

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
    const errs = validateForm();
    setTouched(true);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});

    const lines = [`Halo HQuarters! Saya ingin tahu lebih lanjut tentang *${selectedSpace}*.`];
    lines.push(`Nama: ${formData.name}`);
    lines.push(`WhatsApp: ${formData.whatsapp}`);
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
            Share your details and our team will get back to you shortly.
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
                        {touched && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
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
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value.replace(/\D/g, '') })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                        />
                        {touched && errors.whatsapp && <p className="text-red-500 text-xs mt-1">{errors.whatsapp}</p>}
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <Building className="w-3.5 h-3.5 text-slate-400" />
                        <span>Company Name (Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. PT Enterprise Nusantara"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-slate-900 placeholder:text-slate-400 text-sm focus:bg-white focus:outline-none focus:border-[#E8860B] focus:ring-1 focus:ring-[#E8860B] transition-all"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-slate-400" />
                        <span>Additional Requirements (Optional)</span>
                      </label>
                      <textarea
                        rows="3"
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
