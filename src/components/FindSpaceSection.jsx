import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  Home,
  Briefcase,
  Sparkles,
  CheckCircle2,
  Send,
  User,
  Phone,
  Building,
  MessageSquare,
  Navigation
} from 'lucide-react';

export default function FindSpaceSection({ initialSpace = 'Premium Office' }) {
  const [selectedSpace, setSelectedSpace] = useState(initialSpace);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    company: '',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const spaceOptions = [
    {
      id: 'premium',
      label: 'Premium Office',
      value: 'Premium Office',
      icon: Building2,
      desc: 'For established teams',
    },
    {
      id: 'soho',
      label: 'SOHO Duplex',
      value: 'SOHO Duplex',
      icon: Home,
      desc: 'Flexible work-live space',
    },
    {
      id: 'serviced',
      label: 'Serviced Office',
      value: 'Serviced Office',
      icon: Briefcase,
      desc: 'Turnkey private suites',
    },
    {
      id: 'virtual',
      label: 'Virtual Office',
      value: 'Virtual Office',
      icon: Sparkles,
      desc: 'Prestige CBD address',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.whatsapp) {
      setSubmitted(true);
    }
  };

  return (
    <section id="find-space" className="py-12 sm:py-20 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-slate-200/60">
          
          {/* Left Column - Image & Info */}
          <div className="lg:w-2/5 relative min-h-[400px] lg:min-h-auto bg-slate-900 flex flex-col justify-end p-6 sm:p-10">
            <img
              src="/SPACES/PREMIUM OFFICE/Premium Office 06.png"
              alt="HQuarters Workspace"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            
            <div className="relative z-10 bg-[#161a25] rounded-2xl p-6 sm:p-8 shadow-xl border border-white/5 mt-auto">
              <span className="bg-[#EA8E18] text-white px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-md mb-4 inline-block shadow-sm">
                EXPERT CONSULTATION
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white leading-tight mb-3">
                Find the space that fits your ambition.
              </h2>
              
              <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                Our workspace advisors will help you configure the perfect layout, explain leasing terms, and guide your transition into Bandung's most prestigious CBD.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#EA8E18]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  </div>
                  <span className="text-sm font-medium text-slate-200">Priority viewing schedule</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#EA8E18]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  </div>
                  <span className="text-sm font-medium text-slate-200">Custom floorplan consultation</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-[#EA8E18]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
                  </div>
                  <span className="text-sm font-medium text-slate-200">Direct negotiation assistance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Form */}
          <div className="lg:w-3/5 p-8 sm:p-12 lg:p-14">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold font-heading text-slate-900">Request Received</h3>
                <p className="text-slate-600 max-w-sm mx-auto">
                  Thank you, {formData.name}. Our advisors will reach out via WhatsApp shortly to schedule your tour for the <strong>{selectedSpace}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <div className="space-y-10">
                
                {/* Step 1: Space Type */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900">1. What type of space do you need?</h3>
                    <p className="text-sm text-slate-500 mt-1">Select the primary workspace type you are interested in.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {spaceOptions.map((opt) => {
                      const Icon = opt.icon;
                      const isSelected = selectedSpace === opt.value;
                      return (
                        <div
                          key={opt.id}
                          onClick={() => setSelectedSpace(opt.value)}
                          className={`relative p-4 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-4 ${
                            isSelected 
                              ? 'border-[#EA8E18] bg-[#FEF3E2] shadow-sm' 
                              : 'border-slate-100 bg-white hover:border-[#EA8E18]/30 hover:bg-slate-50'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-white text-[#EA8E18] shadow-sm' : 'bg-slate-100 text-slate-400'
                          }`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className={`font-bold text-sm font-heading ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>
                              {opt.label}
                            </div>
                            <div className={`text-[11px] font-medium mt-0.5 ${isSelected ? 'text-[#EA8E18]' : 'text-slate-500'}`}>
                              {opt.desc}
                            </div>
                          </div>
                          
                          {isSelected && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                              <CheckCircle2 className="w-5 h-5 text-[#EA8E18]" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Contact Details */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-slate-900">2. Your Contact Details</h3>
                    <p className="text-sm text-slate-500 mt-1">We'll reach out to schedule your private tour.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                          <User className="w-3 h-3 text-[#EA8E18]" /> FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#EA8E18] focus:ring-1 focus:ring-[#EA8E18] transition-all"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                          <Phone className="w-3 h-3 text-[#EA8E18]" /> WHATSAPP *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+62 812 3456 7890"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#EA8E18] focus:ring-1 focus:ring-[#EA8E18] transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                        <Building className="w-3 h-3 text-slate-400" /> COMPANY NAME (OPTIONAL)
                      </label>
                      <input
                        type="text"
                        placeholder="Your Enterprise PT"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#EA8E18] focus:ring-1 focus:ring-[#EA8E18] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-extrabold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                        <MessageSquare className="w-3 h-3 text-slate-400" /> ADDITIONAL NOTES (OPTIONAL)
                      </label>
                      <textarea
                        rows="2"
                        placeholder="Specific requirements, move-in date, team size..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:border-[#EA8E18] focus:ring-1 focus:ring-[#EA8E18] transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 mt-2 rounded-xl bg-[#151a27] hover:bg-black text-white font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
                    >
                      <span>REQUEST SPACE TOUR</span>
                      <Navigation className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    
                    <p className="text-center text-[10px] text-slate-400 mt-3 font-medium">
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
  );
}
