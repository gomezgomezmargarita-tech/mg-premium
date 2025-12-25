
import React from 'react';
import { LanguageProvider } from './LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MissionVision from './components/MissionVision';
import Objectives from './components/Objectives';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import WhyMe from './components/WhyMe';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <MissionVision />
          <Objectives />
          <Services />
          <WhyMe />
          <Testimonials />
          <FAQ />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default App;