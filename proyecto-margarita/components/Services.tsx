import React from 'react';
import { useLanguage } from '../LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="services" className="py-24 bg-[#020617] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full -mr-48 -mt-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-white/10 pb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.services.title} <span className="text-[#f59e0b] italic">{t.services.subtitle}</span></h2>
            <p className="text-slate-400 max-w-xl">{t.services.desc}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-white/5 px-4 py-1.5 rounded-full text-[10px] font-bold border border-white/10 tracking-widest uppercase">Legal Ops</span>
            <span className="bg-white/5 px-4 py-1.5 rounded-full text-[10px] font-bold border border-white/10 tracking-widest uppercase">Real Estate</span>
            <span className="bg-white/5 px-4 py-1.5 rounded-full text-[10px] font-bold border border-white/10 tracking-widest uppercase">High-Ticket</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-amber-500/50 transition-all flex flex-col group">
            <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">💎</div>
            <h3 className="text-2xl font-bold mb-6 text-[#f59e0b]">{t.services.s1_title}</h3>
            <ul className="space-y-4 text-slate-400 flex-grow text-sm">
              <li className="flex items-start gap-3 italic">
                <span className="text-[#f59e0b]">✓</span> {t.services.s1_item1}
              </li>
              <li className="flex items-start gap-3 italic">
                <span className="text-[#f59e0b]">✓</span> {t.services.s1_item2}
              </li>
              <li className="flex items-start gap-3 italic">
                <span className="text-[#f59e0b]">✓</span> {t.services.s1_item3}
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#d97706] to-[#b45309] p-10 rounded-3xl border-2 border-amber-400 transform lg:scale-105 shadow-2xl relative">
            <div className="absolute top-0 right-0 bg-white text-amber-800 px-4 py-1.5 rounded-bl-2xl font-black text-[10px] uppercase tracking-tighter">Máximo ROI</div>
            <div className="text-3xl mb-6">🚀</div>
            <h3 className="text-2xl font-bold mb-6 text-white">{t.services.s2_title}</h3>
            <p className="text-white/90 mb-8 text-sm font-medium">{t.services.s2_desc}</p>
            <ul className="space-y-4 text-white text-sm">
              <li className="flex items-start gap-3">
                <span className="bg-white/20 rounded-full px-2 text-xs">✓</span> {t.services.s2_item1}
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-white/20 rounded-full px-2 text-xs">✓</span> {t.services.s2_item2}
              </li>
              <li className="flex items-start gap-3 font-bold underline decoration-white/30">
                <span className="bg-white/20 rounded-full px-2 text-xs">✓</span> {t.services.s2_item3}
              </li>
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-amber-500/50 transition-all flex flex-col group">
            <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">⚙️</div>
            <h3 className="text-2xl font-bold mb-6 text-[#f59e0b]">{t.services.s3_title}</h3>
            <ul className="space-y-4 text-slate-400 flex-grow text-sm">
              <li className="flex items-start gap-3 italic">
                <span className="text-[#f59e0b]">✓</span> {t.services.s3_item1}
              </li>
              <li className="flex items-start gap-3 italic">
                <span className="text-[#f59e0b]">✓</span> {t.services.s3_item2}
              </li>
              <li className="flex items-start gap-3 italic">
                <span className="text-[#f59e0b]">✓</span> {t.services.s3_item3}
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
