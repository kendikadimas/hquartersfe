import React, { useState } from 'react';
import HomePage from './pages/HomePage.jsx';
import SpacesPage from './pages/SpacesPage.jsx';
import BuildingPage from './pages/BuildingPage.jsx';
import LocationPage from './pages/LocationPage.jsx';
import CompaniesPage from './pages/CompaniesPage.jsx';
import InsightsPage from './pages/InsightsPage.jsx';
import FindSpacePage from './pages/FindSpacePage.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      {currentPage === 'find-space' ? (
        <FindSpacePage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'insights' ? (
        <InsightsPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'companies' ? (
        <CompaniesPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'location' ? (
        <LocationPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'building' ? (
        <BuildingPage setCurrentPage={setCurrentPage} />
      ) : currentPage === 'spaces' ? (
        <SpacesPage setCurrentPage={setCurrentPage} />
      ) : (
        <HomePage setCurrentPage={setCurrentPage} />
      )}
    </>
  );
}
