import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronRight,
  Home,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles
} from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';
import { fetchArticle, fetchArticles, stripHtml } from '../lib/wp.js';
import { FALLBACK_ARTICLE_DETAILS, FALLBACK_ARTICLES } from '../lib/archivePlaceholderData.js';

export default function ArticleDetailPage({ setCurrentPage, articleId = 'art-1', setSelectedArticleId }) {
  const [copied, setCopied] = useState(false);
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    const isFallbackId = String(articleId).startsWith('art-') || String(articleId) === 'featured';

    if (isFallbackId) {
      const fallback = FALLBACK_ARTICLE_DETAILS[articleId] || FALLBACK_ARTICLE_DETAILS['art-1'];
      setArticle(fallback);
      setRelated(FALLBACK_ARTICLES.filter((a) => a.id !== fallback.id).slice(0, 3));
      setLoading(false);
      return;
    }

    fetchArticle(articleId)
      .then((data) => {
        setArticle(data);
        return fetchArticles();
      })
      .then((all) => {
        setRelated(all.filter((a) => a.id !== articleId).slice(0, 3));
      })
      .catch(() => {
        setArticle(FALLBACK_ARTICLE_DETAILS['art-1']);
        setRelated(FALLBACK_ARTICLES.slice(0, 3));
      })
      .finally(() => setLoading(false));
  }, [articleId]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (loading || !article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-slate-500 font-semibold">Loading article...</p>
      </div>
    );
  }

  const subtitle = stripHtml(article.subtitle || article.excerpt || '');
  const authorRole = article.role || 'HQuarters Team';

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar currentPage="insights" setCurrentPage={setCurrentPage} />

      <main className="pt-24 sm:pt-28 space-y-16">
        
        
        
        
        <section className="max-w-[1040px] mx-auto px-4 sm:px-6 space-y-6">
          
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
            <span className="font-bold text-slate-900 line-clamp-1">{article.title}</span>
          </nav>

          
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

          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium font-heading text-slate-900 tracking-tight leading-[1.14]">
            {article.title}
          </h1>

          
          <p className="text-slate-600 text-lg sm:text-xl leading-relaxed font-normal">
            {subtitle}
          </p>

        </section>

        
        
        
        <section className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200/80 aspect-[16/9] shadow-2xl bg-slate-900">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover object-bottom"
            />
          </div>
          {article.imageCaption && (
            <p className="text-center text-xs text-slate-500 mt-3 font-normal">
              {article.imageCaption}
            </p>
          )}
        </section>

        
        
        
        <section className="max-w-[800px] mx-auto px-4 sm:px-6 space-y-10 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
          
          
          {article.contentHtml ? (
            <div className="article-body wp-article-content space-y-6" dangerouslySetInnerHTML={{ __html: article.contentHtml }} />
          ) : (
          <>
          
          <div className="bg-[#FAF8F5] rounded-xl p-6 sm:p-8 border border-slate-200/80 space-y-3 shadow-sm">
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

          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-medium font-heading text-slate-900 tracking-tight">
              1. The Strategic Shift in Commercial Real Estate
            </h2>
            <p>
              In today's evolving business landscape, office selection has transcended simple square footage calculations. Modern enterprise leaders recognize that physical space is a direct reflection of corporate culture, executive vision, and operational excellence.
            </p>
            <p>
              At Bandung's historic financial center along Jalan Asia Afrika, commercial real estate is undergoing a rapid renaissance. Corporations are seeking spaces that combine high-density digital infrastructure with human-centered architectural design.
            </p>
          </div>

          
          <div className="my-8 bg-slate-950 text-white rounded-xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-1.5 h-12 bg-[#EA8E18] rounded-full absolute left-0 top-1/2 -translate-y-1/2" />
            <blockquote className="text-xl sm:text-2xl font-bold font-heading text-white leading-snug italic">
              "An office is no longer just a place where work happens — it is the physical manifesto of a company's vision and executive culture."
            </blockquote>
            <cite className="block text-xs font-semibold text-[#EA8E18] not-italic uppercase tracking-wider">
              — HQuarters Architectural & Real Estate Advisory
            </cite>
          </div>

          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-medium font-heading text-slate-900 tracking-tight">
              2. Balancing Acoustic Focus & Collaborative Hubs
            </h2>
            <p>
              One of the primary challenges in contemporary office design is managing noise and cognitive fatigue. While open layouts encourage spontaneous idea exchange, they frequently compromise deep focus.
            </p>
            <p>
              The solution lies in progressive spatial zoning: separating high-vibrancy collaboration zones from acoustically insulated focus suites. By pairing double-glazed glass partitions with sound-absorbing ceiling geometries, executives can switch effortlessly between team workshops and high-stakes client calls.
            </p>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2">
              <h4 className="font-medium text-slate-900 font-heading text-base">
                Biophilic Lighting & Air Filtration
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integrated floor-to-ceiling glass paneling maximizes natural daylighting while advanced HVAC filters purify indoor air.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-2">
              <h4 className="font-medium text-slate-900 font-heading text-base">
                Hospitality-Grade Amenities
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct access to rooftop heated pools, dry cedar saunas, and concierge services elevates the daily work experience.
              </p>
            </div>
          </div>

          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-medium font-heading text-slate-900 tracking-tight">
              3. Long-Term Value Creation for Enterprise Tenants
            </h2>
            <p>
              Establishing a presence at HQuarters Business Residence positions your company among top financial institutions, legal consultancies, and tech innovators. The power of proximity creates organic business opportunities and elevates your brand status in the eyes of clients and stakeholders alike.
            </p>
          </div>

          </>
          )}

        </section>

        
        
        
        <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pt-8 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200/80 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#EA8E18] uppercase tracking-wider">
                CONTINUE READING
              </span>
              <h2 className="text-2xl sm:text-3xl font-medium font-heading text-slate-900 tracking-tight">
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
            {related.map((rel) => (
              <div
                key={rel.id}
                onClick={() => {
                  if (setSelectedArticleId) setSelectedArticleId(rel.id);
                  if (setCurrentPage) setCurrentPage('article-detail');
                  window.scrollTo(0, 0);
                }}
                className="bg-white rounded-xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6 space-y-2">
                    <h3 className="text-lg font-medium text-slate-900 font-heading leading-snug group-hover:text-[#EA8E18] transition-colors line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {rel.subtitle || rel.excerpt}
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

        <CTA
          setCurrentPage={setCurrentPage}
          titlePrefix="Ready to Upgrade Your "
          titleHighlight="Business Space?"
          description="Schedule a private building tour or consult directly with our space specialists for your organization."
          buttonText="Explore Spaces"
          pageTarget="spaces"
        />
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
