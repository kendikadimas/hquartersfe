import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Home,
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Copy,
  Check,
  Building2,
  Sparkles,
  ShieldCheck,
  Share
} from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function ArticleDetailPage({ setCurrentPage, articleId = 'art-1', setSelectedArticleId }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [articleId]);

  const articlesData = {
    'art-1': {
      id: 'art-1',
      categoryLabel: 'Bandung CBD Market',
      title: 'Why Asia Afrika Remains Bandung’s Preeminent Business Address',
      subtitle: 'Exploring the historical significance, infrastructure density, and psychological advantage of establishing a corporate presence in Bandung’s financial heart.',
      author: 'Hendrik Wijaya',
      role: 'Lead Market Analyst, HQuarters Research',
      date: 'July 28, 2026',
      readTime: '4 min read',
      image: '/location_map.png',
      imageCaption: 'Historical & modern financial corridor at Jl. Asia Afrika No. 158, Bandung CBD.',
    },
    'art-2': {
      id: 'art-2',
      categoryLabel: 'Sustainability',
      title: 'Net-Zero Energy Buildings: Integrating Solar Membranes & Passive Cooling',
      subtitle: 'How modern architectural engineering reduces thermal load, lowers HVAC power consumption, and achieves LEED Platinum standards in tropical urban centers.',
      author: 'Dr. Sarah Lin',
      role: 'Principal Environmental Engineer',
      date: 'July 22, 2026',
      readTime: '6 min read',
      image: '/architectural_hero_bg.png',
      imageCaption: 'Energy-efficient facade system designed for maximum thermal dissipation.',
    },
    'art-3': {
      id: 'art-3',
      categoryLabel: 'Architecture & Design',
      title: 'The SOHO Revolution: Blending Private Residence & Corporate Office',
      subtitle: 'A deep dive into dual-purpose spatial planning, acoustics, and zoning strategies for modern entrepreneurs who live and work under one roof.',
      author: 'Marcus Vance',
      role: 'Senior Architect & Spatial Planner',
      date: 'July 15, 2026',
      readTime: '5 min read',
      image: '/soho_office.png',
      imageCaption: 'Dual-volume duplex SOHO layout balancing executive workspace with residence.',
    },
    'art-4': {
      id: 'art-4',
      categoryLabel: 'Workplace Trends',
      title: 'Acoustic Ergonomics: Designing Noise-Controlled Executive Spaces',
      subtitle: 'Balancing collaborative open layouts with private acoustic focus pods to maximize cognitive focus and eliminate workplace fatigue.',
      author: 'Elena Rostova',
      role: 'Workplace Ergonomist',
      date: 'July 08, 2026',
      readTime: '4 min read',
      image: '/serviced_office.png',
      imageCaption: 'Acoustically dampened meeting and focus rooms engineered for concentration.',
    },
    'art-5': {
      id: 'art-5',
      categoryLabel: 'Architecture & Design',
      title: 'Smart Automated Parking: The Future of High-Density Commercial Real Estate',
      subtitle: 'How vertical mechanical car lifts increase parking capacity by 300% while offering smooth, contactless vehicle delivery for tenants.',
      author: 'Ir. Budi Santoso',
      role: 'Infrastructure & Mechanical Lead',
      date: 'June 30, 2026',
      readTime: '3 min read',
      image: '/LOGO/parking-lift.png',
      imageCaption: 'Mechanical automated parking lift installed at HQuarters Business Residence.',
    },
    'art-6': {
      id: 'art-6',
      categoryLabel: 'Bandung CBD Market',
      title: 'Tenant Ecosystem Dynamics: How Shared Corporate Neighbors Drive Value',
      subtitle: 'Analyzing how co-locating near multinational financial institutions, tech firms, and legal advisories boosts brand credibility and referral networks.',
      author: 'Hendrik Wijaya',
      role: 'Lead Market Analyst',
      date: 'June 20, 2026',
      readTime: '5 min read',
      image: '/premium_office.png',
      imageCaption: 'Enterprise office floor hosting global financial and professional institutions.',
    },
    'featured': {
      id: 'featured',
      categoryLabel: 'Workplace Trends',
      title: 'The Evolution of Hybrid Headquarters: Designing Offices for the Next Decade',
      subtitle: 'How modern corporations are shifting from static workstations to dynamic, hospitality-driven hub offices that foster collaboration, high focus, and employee wellness.',
      author: 'Marcus Vance',
      role: 'Principal Architect & Urban Planner',
      date: 'August 2026',
      readTime: '5 min read',
      image: '/blog_hero.png',
      imageCaption: 'HQuarters executive atrium showcasing natural daylighting and biophilic elements.',
    }
  };

  const article = articlesData[articleId] || articlesData['art-1'];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const relatedArticles = Object.values(articlesData).filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar currentPage="insights" setCurrentPage={setCurrentPage} />

      <main className="pt-24 sm:pt-28 pb-28 space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. BREADCRUMBS & ARTICLE HEADER */}
        {/* ========================================================================= */}
        <section className="max-w-[1040px] mx-auto px-4 sm:px-6 space-y-6">
          {/* Breadcrumb Navigation */}
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
                if (setCurrentPage) setCurrentPage('insights');
                window.scrollTo(0, 0);
              }}
              className="hover:text-[#EA8E18] transition-colors cursor-pointer"
            >
              Insights
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="font-bold text-slate-900 line-clamp-1">{article.categoryLabel}</span>
          </nav>

          {/* Back Button */}
          <div>
            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage('insights');
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#EA8E18] transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Insights</span>
            </button>
          </div>

          {/* Category Pill */}
          <div>
            <span className="px-3.5 py-1 rounded-full bg-[#FEF3E2] text-[#B86807] text-xs font-bold uppercase tracking-wider inline-block">
              {article.categoryLabel}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-slate-900 tracking-tight leading-[1.14]">
            {article.title}
          </h1>

          {/* Subtitle / Excerpt */}
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-normal">
            {article.subtitle}
          </p>

          {/* Metadata & Author Bar */}
          <div className="pt-6 border-t border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-lg font-heading shadow">
                {article.author.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 font-heading">
                  {article.author}
                </h4>
                <p className="text-xs text-slate-500 font-normal">
                  {article.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#EA8E18]" />
                <span>{article.date}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#EA8E18]" />
                <span>{article.readTime}</span>
              </div>

              {/* Share & Copy Link */}
              <div className="flex items-center gap-2 pl-4 border-l border-slate-200">
                <button
                  onClick={handleCopyLink}
                  title="Copy Article Link"
                  className="p-2 rounded-full bg-slate-100 hover:bg-[#EA8E18] text-slate-600 hover:text-white transition-colors cursor-pointer relative"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + ' ' + window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on WhatsApp"
                  className="p-2 rounded-full bg-slate-100 hover:bg-[#EA8E18] text-slate-600 hover:text-white transition-colors cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. FEATURED COVER IMAGE */}
        {/* ========================================================================= */}
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="rounded-[32px] overflow-hidden border border-slate-200/80 aspect-[16/9] shadow-2xl bg-slate-900">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          {article.imageCaption && (
            <p className="text-center text-xs text-slate-500 mt-3 font-normal">
              {article.imageCaption}
            </p>
          )}
        </section>

        {/* ========================================================================= */}
        {/* 3. RICH ARTICLE BODY CONTENT */}
        {/* ========================================================================= */}
        <section className="max-w-[800px] mx-auto px-4 sm:px-6 space-y-10 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
          
          {/* Executive Summary Box */}
          <div className="bg-[#FAF8F5] rounded-[24px] p-6 sm:p-8 border border-slate-200/80 space-y-3 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-bold text-[#EA8E18] uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>EXECUTIVE SUMMARY & KEY TAKEAWAYS</span>
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-semibold">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#EA8E18] shrink-0 mt-2" />
                <span>Prime location in Asia Afrika CBD delivers instantaneous trust and brand equity for domestic & international partners.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#EA8E18] shrink-0 mt-2" />
                <span>Modern commercial spaces prioritize hybrid flexibility, acoustic insulation, and integrated lifestyle amenities.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#EA8E18] shrink-0 mt-2" />
                <span>Occupying Grade-A infrastructure reduces long-term operational friction and boosts high-caliber talent retention.</span>
              </li>
            </ul>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              1. The Strategic Shift in Commercial Real Estate
            </h2>
            <p>
              In today's evolving business landscape, office selection has transcended simple square footage calculations. Modern enterprise leaders recognize that physical space is a direct reflection of corporate culture, executive vision, and operational excellence.
            </p>
            <p>
              At Bandung's historic financial center along Jalan Asia Afrika, commercial real estate is undergoing a rapid renaissance. Corporations are seeking spaces that combine high-density digital infrastructure with human-centered architectural design.
            </p>
          </div>

          {/* Dark Pull Quote Banner */}
          <div className="my-8 bg-slate-950 text-white rounded-[28px] p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-1.5 h-12 bg-[#EA8E18] rounded-full absolute left-0 top-1/2 -translate-y-1/2" />
            <blockquote className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug italic">
              "An office is no longer just a place where work happens — it is the physical manifesto of a company's vision and executive culture."
            </blockquote>
            <cite className="block text-xs font-semibold text-[#EA8E18] not-italic uppercase tracking-wider">
              — HQuarters Architectural & Real Estate Advisory
            </cite>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              2. Balancing Acoustic Focus & Collaborative Hubs
            </h2>
            <p>
              One of the primary challenges in contemporary office design is managing noise and cognitive fatigue. While open layouts encourage spontaneous idea exchange, they frequently compromise deep focus.
            </p>
            <p>
              The solution lies in progressive spatial zoning: separating high-vibrancy collaboration zones from acoustically insulated focus suites. By pairing double-glazed glass partitions with sound-absorbing ceiling geometries, executives can switch effortlessly between team workshops and high-stakes client calls.
            </p>
          </div>

          {/* Feature Highlights Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2">
              <h4 className="font-bold text-slate-900 font-heading text-base">
                Biophilic Lighting & Air Filtration
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integrated floor-to-ceiling glass paneling maximizes natural daylighting while advanced HVAC filters purify indoor air.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2">
              <h4 className="font-bold text-slate-900 font-heading text-base">
                Hospitality-Grade Amenities
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct access to rooftop heated pools, dry cedar saunas, and concierge services elevates the daily work experience.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
              3. Long-Term Value Creation for Enterprise Tenants
            </h2>
            <p>
              Establishing a presence at HQuarters Business Residence positions your company among top financial institutions, legal consultancies, and tech innovators. The power of proximity creates organic business opportunities and elevates your brand status in the eyes of clients and stakeholders alike.
            </p>
          </div>

          {/* Author Bio Footer Box */}
          <div className="pt-8 border-t border-slate-200/80">
            <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-[24px] border border-slate-200/80 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-2xl font-heading shrink-0 shadow-md">
                {article.author.charAt(0)}
              </div>
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-lg font-bold font-heading text-slate-900">
                  Written by {article.author}
                </h4>
                <p className="text-xs text-[#EA8E18] font-bold uppercase tracking-wider">
                  {article.role}
                </p>
                <p className="text-xs text-slate-600 font-normal leading-relaxed pt-1">
                  Specializing in commercial real estate analysis, urban workspace architecture, and enterprise tenancy trends in Southeast Asian growth corridors.
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* ========================================================================= */}
        {/* 4. RELATED ARTICLES GRID */}
        {/* ========================================================================= */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#EA8E18] uppercase tracking-wider">
                CONTINUE READING
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 tracking-tight">
                Related Articles & Insights
              </h2>
            </div>

            <button
              onClick={() => {
                if (setCurrentPage) setCurrentPage('insights');
                window.scrollTo(0, 0);
              }}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#EA8E18] hover:text-[#d88010] transition-colors cursor-pointer group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  if (setSelectedArticleId) setSelectedArticleId(rel.id);
                  if (setCurrentPage) setCurrentPage('article-detail');
                  window.scrollTo(0, 0);
                }}
                className="bg-white rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-md bg-white/90 backdrop-blur-md text-slate-900 font-bold text-[10px] uppercase tracking-wider shadow">
                        {rel.categoryLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 font-heading leading-snug group-hover:text-[#EA8E18] transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {rel.subtitle}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#EA8E18]">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
