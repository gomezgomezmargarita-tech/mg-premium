
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const faqs = [
    {
      question: t.faq.q1,
      answer: t.faq.a1
    },
    {
      question: t.faq.q2,
      answer: t.faq.a2
    },
    {
      question: t.faq.q3,
      answer: t.faq.a3
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#020617] text-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-center uppercase tracking-tight">{t.faq.title} <span className="text-[#f59e0b]">{t.faq.subtitle}</span></h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10 pb-4">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-4 flex justify-between items-center group"
              >
                <span className={`text-lg font-semibold transition-colors ${openIndex === i ? 'text-[#f59e0b]' : 'text-white group-hover:text-amber-200'}`}>{faq.question}</span>
                <span className="text-[#f59e0b] text-2xl">{openIndex === i ? '−' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="pb-4 text-slate-400 font-normal leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
