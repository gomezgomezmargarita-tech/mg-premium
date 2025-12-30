
import React from 'react';
import { useLanguage } from '../LanguageContext';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const testimonials = [
    {
      quote: t.testimonials.t1_quote,
      author: t.testimonials.t1_author,
      company: t.testimonials.t1_company
    },
    {
      quote: t.testimonials.t2_quote,
      author: t.testimonials.t2_author,
      company: t.testimonials.t2_company
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-[#f59e0b] font-bold text-xs uppercase tracking-[0.5em] mb-12 text-center">{t.testimonials.tag}</h2>
            <div className="grid gap-12">
                {testimonials.map((test, i) => (
                    <div key={i} className="relative pl-12 border-l-2 border-amber-500/20">
                        <span className="absolute left-0 top-0 text-6xl text-amber-500/10 -mt-4 -ml-4 font-serif">“</span>
                        <p className="text-2xl md:text-3xl font-medium text-slate-800 mb-8 leading-snug tracking-tight">
                            {test.quote}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-[#020617] rounded-full flex items-center justify-center text-[#f59e0b] font-bold text-xs">
                                {test.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 leading-none">{test.author}</h4>
                                <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-1 font-bold">{test.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
