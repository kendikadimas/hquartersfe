import React, { useEffect } from 'react';
import Navbar from '../components/Navbar.jsx';
import SpacesSection from '../components/SpacesSection.jsx';
import CTA from '../components/CTA.jsx';
import Footer from '../components/Footer.jsx';

export default function SpacesPage({ setCurrentPage }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-500/20 selection:text-amber-900">
      <Navbar currentPage="spaces" setCurrentPage={setCurrentPage} />
      <main className="pt-24 sm:pt-28">
        <SpacesSection setCurrentPage={setCurrentPage} />
        <CTA
          setCurrentPage={setCurrentPage}
          titlePrefix="Ready to Claim Your "
          titleHighlight="Ideal Workspace?"
          description="Whether you need a prestigious virtual address, a turnkey serviced desk, a SOHO, or a premium corporate floor — our team is ready to guide your selection."
          buttonText="Schedule a Private Tour"
          pageTarget="find-space"
        />
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}
