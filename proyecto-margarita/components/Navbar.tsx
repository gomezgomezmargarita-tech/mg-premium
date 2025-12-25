
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#020617]/90 backdrop-blur-md shadow-2xl py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-white">
          MG <span className="text-[#f59e0b] italic">PREMIUM</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-10 text-[11px] uppercase tracking-[0.2em] font-bold">
          <a href="#why-me" className="text-white/80 hover:text-[#f59e0b] transition-colors">{t.nav.experience}</a>
          <a href="#services" className="text-white/80 hover:text-[#f59e0b] transition-colors">{t.nav.services}</a>
          <a href="#faq" className="text-white/80 hover:text-[#f59e0b] transition-colors">{t.nav.faq}</a>
          
          <div className="flex items-center gap-4 border-l border-white/20 pl-10">
            <button 
              onClick={() => setLanguage('es')}
              className={`transition-colors ${language === 'es' ? 'text-[#f59e0b]' : 'text-white/40'}`}
            >
              ES
            </button>
            <span className="text-white/20">|</span>
            <button 
              onClick={() => setLanguage('en')}
              className={`transition-colors ${language === 'en' ? 'text-[#f59e0b]' : 'text-white/40'}`}
            >
              EN
            </button>
          </div>

          <a 
            href="#contact" 
            className="bg-[#d97706] hover:bg-[#b45309] text-white px-7 py-2.5 rounded-full shadow-lg transition-all transform hover:scale-105"
          >
            {t.nav.contact}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
