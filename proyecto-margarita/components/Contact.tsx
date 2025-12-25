
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const contactEmail = t.config?.email || "gomezgomezmargarita@gmail.com";
  
  return (
    <footer id="contact" className="bg-[#020617] text-white pt-24 pb-12 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-8 italic">{t.contact.title} <br/><span className="text-[#f59e0b]">{t.contact.subtitle}</span></h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">{t.contact.desc}</p>
            
            <a href={`mailto:${contactEmail}`} className="flex items-center gap-4 md:gap-6 bg-white/5 border border-white/10 p-6 md:p-8 rounded-3xl hover:border-[#f59e0b]/50 transition-all group shadow-xl overflow-hidden">
              <div className="bg-[#d97706] p-3 md:p-4 rounded-2xl group-hover:scale-110 transition-transform flex-shrink-0">
                <span className="text-xl md:text-2xl">📧</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mb-1">Email Directo</p>
                <p className="text-sm md:text-base lg:text-lg font-bold group-hover:text-[#f59e0b] transition-colors truncate">
                  {contactEmail}
                </p>
              </div>
            </a>

            <div className="mt-12 flex gap-10 opacity-40">
                <div className="text-center">
                    <p className="text-2xl font-bold text-white">{language === 'es' ? 'Bilingüe' : 'Bilingual'}</p>
                    <p className="text-[10px] uppercase tracking-widest text-gold">English/Spanish</p>
                </div>
                <div className="text-center">
                    <p className="text-2xl font-bold text-white">Elite</p>
                    <p className="text-[10px] uppercase tracking-widest text-gold">High-Ticket Ops</p>
                </div>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-white/10">
            <h4 className="text-slate-900 text-xl font-bold mb-6 italic">{t.contact.form_title}</h4>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert(t.contact.success); }}>
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder={t.contact.form_firm} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:border-[#d97706] outline-none transition-all" />
                <input type="email" placeholder="Email Corporate / Personal" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:border-[#d97706] outline-none transition-all" />
              </div>
              <input type="text" placeholder={t.contact.form_vol} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:border-[#d97706] outline-none transition-all" />
              <textarea placeholder={t.contact.form_area} rows={3} required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-900 focus:border-[#d97706] outline-none transition-all"></textarea>
              <button className="w-full bg-[#d97706] hover:bg-[#b45309] text-white font-bold py-5 rounded-xl shadow-xl shadow-amber-900/20 transition-all transform active:scale-95 uppercase tracking-widest text-xs">
                {t.contact.form_btn}
              </button>
            </form>
          </div>
        </div>
        
        <div className="relative flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-6">
          <div className="text-slate-600 text-[10px] uppercase tracking-[0.5em]">
            <p>MG PREMIUM INTAKE SOLUTIONS &copy; {new Date().getFullYear()} | High-Ticket Sales Operations</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
