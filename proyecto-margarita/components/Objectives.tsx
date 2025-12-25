
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Objectives: React.FC = () => {
  const { t } = useLanguage();
  
  const objectives = [
    {
      icon: "📈",
      title: t.objectives.obj1_title,
      metric: t.objectives.obj1_metric,
      desc: t.objectives.obj1_desc
    },
    {
      icon: "🛡️",
      title: t.objectives.obj2_title,
      metric: t.objectives.obj2_metric,
      desc: t.objectives.obj2_desc
    },
    {
      icon: "🤝",
      title: t.objectives.obj3_title,
      metric: t.objectives.obj3_metric,
      desc: t.objectives.obj3_desc
    }
  ];

  return (
    <section id="objectives" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 italic">{t.objectives.title} <span className="text-[#d97706]">{t.objectives.subtitle}</span></h2>
          <div className="w-24 h-1 bg-[#d97706] mx-auto rounded-full opacity-30"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {objectives.map((obj, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all group border border-slate-100">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{obj.icon}</div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">{obj.title}</h4>
              <div className="text-3xl font-black text-[#d97706] mb-4">{obj.metric}</div>
              <p className="text-slate-500 text-sm leading-relaxed">{obj.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
