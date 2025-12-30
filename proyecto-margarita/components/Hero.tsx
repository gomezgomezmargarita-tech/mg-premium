
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const [profileImage, setProfileImage] = useState<string>(t.config?.officialPhotoUrl || "");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedLocalImage = localStorage.getItem('mg_premium_photo_final');
    if (savedLocalImage) {
      setProfileImage(savedLocalImage);
    } else {
      setProfileImage(t.config?.officialPhotoUrl || "");
    }
    
    const params = new URLSearchParams(window.location.search);
    if (params.get('admin') === 'true') {
      setIsAdmin(true);
    }
  }, [t.config?.officialPhotoUrl]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isAdmin) return;
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setProfileImage(base64String);
        localStorage.setItem('mg_premium_photo_final', base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[#020617] text-white overflow-hidden pt-20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full -mr-64 -mt-64"></div>
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 animate-fadeIn">
          <h2 className="text-[#f59e0b] font-extrabold tracking-[0.4em] uppercase mb-4 text-[10px]">{t.hero.tag}</h2>
          <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.95] mb-8 tracking-tighter">
            {t.hero.title_part1} <br />
            <span className="text-[#f59e0b]">{t.hero.title_part2}</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 max-w-xl font-normal leading-relaxed">
            {t.hero.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="#contact" className="bg-[#d97706] hover:bg-[#b45309] text-white px-10 py-5 rounded-xl font-bold text-center transition-all transform hover:-translate-y-1 shadow-lg shadow-amber-900/20 uppercase tracking-widest text-xs">
              {t.hero.cta}
            </a>
            <div className="flex items-center gap-3 px-6 py-5 bg-white/5 rounded-xl border border-white/10">
              <span className="text-[#f59e0b] font-extrabold text-3xl">85%</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 leading-tight">
                {t.hero.metric}
              </span>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 flex flex-col items-center">
          {isAdmin && (
            <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
          )}
          
          <div 
            onClick={() => isAdmin && fileInputRef.current?.click()}
            className={`relative group ${isAdmin ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <div className={`absolute -inset-4 border border-amber-500/20 rounded-3xl transition-colors ${isAdmin ? 'group-hover:border-amber-500/50' : ''}`}></div>
            
            <div className="relative w-80 h-[480px] bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(245,158,11,0.15)] flex items-center justify-center z-10">
              {profileImage ? (
                <img 
                  src={profileImage} 
                  alt="Margarita G." 
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700" 
                  onError={() => setProfileImage("")}
                />
              ) : (
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-gradient-to-b from-amber-500/20 to-transparent rounded-full flex items-center justify-center mx-auto mb-6 border border-amber-500/30">
                    <span className="text-3xl text-[#f59e0b] font-bold">MG</span>
                  </div>
                  <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">{t.hero.specialist}</h3>
                  <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em]">Intake Solutions</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
