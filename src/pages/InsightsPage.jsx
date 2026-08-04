import React, { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import InsightsSection from '../components/InsightsSection.jsx';
import Footer from '../components/Footer.jsx';

export default function InsightsPage({ setCurrentPage, setSelectedArticleId }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar currentPage="insights" setCurrentPage={setCurrentPage} />
      <main className="pt-24 sm:pt-28">
        <InsightsSection setCurrentPage={setCurrentPage} setSelectedArticleId={setSelectedArticleId} />
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
