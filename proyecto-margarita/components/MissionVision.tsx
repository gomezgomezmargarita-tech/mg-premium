
import React from 'react';
import { useLanguage } from '../LanguageContext';

const MissionVision: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="mission" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="group p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500">
            <div className="text-[#f59e0b] text-xs font-black uppercase tracking-[0.3em] mb-6">{t.mission.m_tag}</div>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tighter">{t.mission.m_title}</h3>
            <p className="text-slate-600 leading-relaxed text-lg font-normal">
              {t.mission.m_desc}
            </p>
          </div>

          <div className="group p-12 rounded-[2.5rem] bg-[#020617] text-white border border-white/5 hover:shadow-2xl transition-all duration-500">
            <div className="text-[#f59e0b] text-xs font-black uppercase tracking-[0.3em] mb-6">{t.mission.v_tag}</div>
            <h3 className="text-4xl font-extrabold mb-6 tracking-tighter">{t.mission.v_title}</h3>
            <p className="text-slate-300 leading-relaxed text-lg font-normal">
              {t.mission.v_desc}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
