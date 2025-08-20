import React from 'react';
import HeroSection from './components/HeroSection';
import OfferDetails from './components/OfferDetails';
import PricingSection from './components/PricingSection';
import LeadFormSection from './components/LeadFormSection';
import Footer from './components/Footer';
import PreFooterCTA from './components/PreFooterCTA';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <OfferDetails />
      <PricingSection />
      <PreFooterCTA />
      <Footer />
    </div>
  );
}

export default App;
