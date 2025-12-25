import React from 'react';
import { useLanguage } from '../LanguageContext';

const WhyMe: React.FC = () => {
  const { t } = useLanguage();
  
  const benefits = [
    { 
        icon: "🏭", 
        title: t.why.item1_t, 
        text: t.why.item1_d
    },
    { 
        icon: "💎", 
        title: t.why.item2_t, 
        text: t.why.item2_d
    },
    { 
        icon: "🌎", 
        title: t.why.item3_t, 
        text: t.why.item3_d
    },
    { 
        icon: "⚙️", 
        title: t.why.item4_t, 
        text: t.why.item4_d
    }
  ];

  return (
    <section id="why-me" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-[#f59e0b] font-bold text-xs uppercase tracking-[0.5em] mb-4">{t.why.tag}</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 italic">{t.why.title}</h3>
          <p className="text-slate-600 text-lg font-light leading-relaxed">
            {t.why.desc.split('operadora de procesos').map((part, i, arr) => (
                <React.Fragment key={i}>
                    {part}
                    {i < arr.length - 1 && <span className="font-bold text-slate-900 underline decoration-amber-500/30">operadora de procesos</span>}
                </React.Fragment>
            ))}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group duration-500">
              <div className="text-4xl mb-8 group-hover:scale-125 transition-transform duration-500 inline-block">{b.icon}</div>
              <h4 className="font-bold text-lg text-slate-900 mb-4 uppercase tracking-tight italic">{b.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-light">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
