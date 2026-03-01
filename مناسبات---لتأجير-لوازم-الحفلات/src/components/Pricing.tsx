import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, X, Star, ShieldCheck, Crown, Info } from 'lucide-react';
import { PACKAGES } from '../constants';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-xs mb-4">
            <Star size={14} fill="currentColor" />
            باقاتنا الحصرية
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-dark">استثمر في ذكرياتك</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            اختر الباقة التي تناسب حجم مناسبتك وتطلعاتك. نحن نضمن لك أعلى معايير الجودة والفخامة في كل تفصيل.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-24">
          {PACKAGES.map((pkg) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              className={cn(
                "p-10 rounded-[2.5rem] border-2 transition-all duration-500 text-right flex flex-col relative overflow-hidden",
                pkg.type === 'vip' 
                  ? "bg-brand-dark text-white border-brand-gold shadow-2xl scale-105 z-10" 
                  : "bg-white border-brand-gold/5 shadow-xl"
              )}
            >
              {pkg.type === 'vip' && (
                <>
                  <div className="absolute top-0 left-0 w-32 h-32 bg-brand-gold/10 rounded-br-[5rem]" />
                  <div className="bg-brand-gold text-white text-[10px] font-bold px-4 py-1.5 rounded-full self-start mb-8 uppercase tracking-widest flex items-center gap-2">
                    <Crown size={12} />
                    الأكثر فخامة وتميزاً
                  </div>
                </>
              )}
              
              <h3 className={cn(
                "text-3xl font-serif font-bold mb-4",
                pkg.type === 'vip' ? "text-brand-gold" : "text-brand-dark"
              )}>{pkg.name}</h3>
              
              <div className="flex items-baseline justify-end gap-2 mb-10">
                <span className="text-sm font-bold opacity-50">ر.س / يوم</span>
                <span className={cn(
                  "text-5xl font-serif font-bold",
                  pkg.type === 'vip' ? "text-white" : "text-brand-gold"
                )}>{pkg.price}</span>
              </div>
              
              <div className="space-y-8 mb-12 flex-grow">
                <div>
                  <div className={cn(
                    "font-bold text-xs uppercase tracking-widest mb-6 border-b pb-3",
                    pkg.type === 'vip' ? "text-brand-gold border-white/10" : "text-gray-400 border-gray-50"
                  )}>تشمل الباقة الملكية:</div>
                  <ul className="space-y-5">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-end gap-3 text-sm">
                        <span className={pkg.type === 'vip' ? "text-gray-200" : "text-gray-600"}>{feature}</span>
                        <CheckCircle2 size={18} className="text-brand-gold shrink-0" />
                      </li>
                    ))}
                  </ul>
                </div>

                {pkg.notIncluded.length > 0 && (
                  <div>
                    <div className={cn(
                      "font-bold text-xs uppercase tracking-widest mb-6 border-b pb-3",
                      pkg.type === 'vip' ? "text-brand-gold/50 border-white/10" : "text-gray-300 border-gray-50"
                    )}>خدمات إضافية:</div>
                    <ul className="space-y-5">
                      {pkg.notIncluded.map((item, i) => (
                        <li key={i} className="flex items-center justify-end gap-3 text-sm opacity-40">
                          <span className="line-through">{item}</span>
                          <X size={18} className="shrink-0" />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <Link 
                to="/booking" 
                className={cn(
                  "w-full py-5 rounded-2xl font-bold text-center transition-all text-lg shadow-xl",
                  pkg.type === 'vip' 
                    ? "bg-brand-gold text-white shadow-brand-gold/20 hover:bg-white hover:text-brand-gold" 
                    : "bg-brand-dark text-white hover:bg-brand-gold"
                )}
              >
                احجز هذه الباقة الآن
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-brand-gold/5 text-right relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/5 rounded-bl-[6rem]" />
          <div className="relative z-10">
            <div className="flex items-center justify-end gap-4 mb-10">
              <h2 className="text-3xl font-serif font-bold text-brand-dark">ملاحظات وشروط الخدمة</h2>
              <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                <ShieldCheck size={24} />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <ul className="space-y-6">
                {[
                  'الأسعار الموضحة أعلاه هي لليوم الواحد (24 ساعة) شاملة التجهيز.',
                  'يتم دفع عربون بنسبة 30% من إجمالي القيمة لتأكيد الحجز النهائي.',
                  'خدمة التوصيل والتركيب مجانية داخل مدينة الرياض للباقات الذهبية و VIP.',
                ].map((note, i) => (
                  <li key={i} className="flex items-start justify-end gap-4">
                    <p className="text-gray-600 leading-relaxed text-sm">{note}</p>
                    <div className="w-6 h-6 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0 mt-1">
                      <CheckCircle2 size={14} />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-brand-beige p-8 rounded-3xl border border-brand-gold/10">
                <div className="flex items-center justify-end gap-2 mb-4 text-brand-gold font-bold">
                  <span>تحتاج تعديل خاص؟</span>
                  <Info size={18} />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">
                  يمكننا تفصيل باقة خاصة تناسب احتياجاتك المحددة تماماً. تواصل مع فريق المبيعات لدينا للحصول على عرض سعر مخصص.
                </p>
                <Link to="/contact" className="text-brand-gold font-bold underline hover:text-brand-dark transition-colors">تحدث معنا اليوم</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
