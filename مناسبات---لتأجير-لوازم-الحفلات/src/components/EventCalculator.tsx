import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowLeft, ArrowRight, CheckCircle2, Star, Users, MapPin, Tent } from 'lucide-react';
import { cn } from '../lib/utils';

type Step = 1 | 2 | 3 | 4;

export const EventCalculator = () => {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState({
    type: '',
    guests: 50,
    location: 'indoor',
    needsTent: false,
  });

  const calculateEstimate = () => {
    let base = data.type === 'زواج' ? 2000 : 1000;
    let perGuest = data.location === 'outdoor' ? 25 : 15;
    let tentPrice = data.needsTent ? 1500 : 0;
    return base + (data.guests * perGuest) + tentPrice;
  };

  return (
    <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-brand-gold/10 text-right relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-br-full -translate-x-1/2 -translate-y-1/2" />
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4 order-2 md:order-1">
            <div className="flex gap-1.5 justify-end">
              {[4, 3, 2, 1].map((s) => (
                <div 
                  key={s} 
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-500", 
                    step >= s ? "w-10 bg-brand-gold" : "w-4 bg-gray-100"
                  )} 
                />
              ))}
            </div>
          </div>
          <div className="text-center md:text-right order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-[10px] mb-2 uppercase tracking-wider">
              <Calculator size={12} />
              تقدير التكلفة الذكي
            </div>
            <h2 className="text-3xl font-serif font-bold text-brand-dark">خطط لميزانيتك بدقة</h2>
          </div>
        </div>

        <div className="min-h-[300px] flex flex-col justify-center">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="flex items-center justify-end gap-3">
                <h3 className="text-2xl font-bold text-brand-dark">ما هو نوع مناسبتك القادمة؟</h3>
                <Star className="text-brand-gold" size={24} />
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {['زواج', 'تخرج', 'اجتماع عائلي', 'افتتاح محل'].map((type) => (
                  <button
                    key={type}
                    onClick={() => { setData({ ...data, type }); setStep(2); }}
                    className={cn(
                      "p-8 rounded-[2rem] border-2 transition-all duration-300 flex flex-col items-center gap-4 group",
                      data.type === type 
                        ? "border-brand-gold bg-brand-gold/5 shadow-xl shadow-brand-gold/10" 
                        : "border-gray-50 hover:border-brand-gold/30 hover:bg-white"
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center transition-colors",
                      data.type === type ? "bg-brand-gold text-white" : "bg-brand-beige text-brand-gold group-hover:bg-brand-gold group-hover:text-white"
                    )}>
                      <Star size={24} />
                    </div>
                    <span className="font-bold text-lg">{type}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
              <div className="flex items-center justify-end gap-3">
                <h3 className="text-2xl font-bold text-brand-dark">كم عدد الحضور المتوقع؟</h3>
                <Users className="text-brand-gold" size={24} />
              </div>
              <div className="space-y-6">
                <input 
                  type="range" 
                  min="10" 
                  max="1000" 
                  step="10"
                  value={data.guests}
                  onChange={(e) => setData({ ...data, guests: parseInt(e.target.value) })}
                  className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
                <div className="flex justify-between text-xs text-gray-400 font-bold">
                  <span>1000 شخص</span>
                  <span>10 أشخاص</span>
                </div>
                <div className="text-center">
                  <span className="text-6xl font-serif font-bold text-brand-gold">{data.guests}</span>
                  <span className="text-xl font-bold text-gray-400 mr-4">شخص</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-8">
                <button onClick={() => setStep(1)} className="text-gray-400 font-bold flex items-center gap-2 hover:text-brand-dark transition-colors">السابق <ArrowRight size={20} /></button>
                <button onClick={() => setStep(3)} className="btn-gold px-12">التالي</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="flex items-center justify-end gap-3">
                <h3 className="text-2xl font-bold text-brand-dark">أين ستقام المناسبة؟</h3>
                <MapPin className="text-brand-gold" size={24} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                  onClick={() => setData({ ...data, location: 'indoor', needsTent: false })}
                  className={cn(
                    "p-10 rounded-[2rem] border-2 transition-all duration-300 flex items-center justify-between group",
                    data.location === 'indoor' ? "border-brand-gold bg-brand-gold/5 shadow-xl" : "border-gray-50 hover:border-brand-gold/30"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center",
                    data.location === 'indoor' ? "bg-brand-gold text-white" : "bg-brand-beige text-brand-gold"
                  )}>
                    <MapPin size={24} />
                  </div>
                  <span className="font-bold text-xl">داخل قاعة أو منزل</span>
                </button>
                <button
                  onClick={() => setData({ ...data, location: 'outdoor' })}
                  className={cn(
                    "p-10 rounded-[2rem] border-2 transition-all duration-300 flex items-center justify-between group",
                    data.location === 'outdoor' ? "border-brand-gold bg-brand-gold/5 shadow-xl" : "border-gray-50 hover:border-brand-gold/30"
                  )}
                >
                  <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center",
                    data.location === 'outdoor' ? "bg-brand-gold text-white" : "bg-brand-beige text-brand-gold"
                  )}>
                    <Tent size={24} />
                  </div>
                  <span className="font-bold text-xl">في الهواء الطلق</span>
                </button>
              </div>
              
              {data.location === 'outdoor' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-end gap-4 p-6 bg-brand-beige/50 rounded-2xl border border-brand-gold/10">
                  <span className="font-bold text-brand-dark">هل تحتاج لتجهيز خيمة فاخرة؟</span>
                  <input 
                    type="checkbox" 
                    checked={data.needsTent}
                    onChange={(e) => setData({ ...data, needsTent: e.target.checked })}
                    className="w-6 h-6 accent-brand-gold rounded-lg cursor-pointer"
                  />
                </motion.div>
              )}
              
              <div className="flex justify-between items-center pt-8">
                <button onClick={() => setStep(2)} className="text-gray-400 font-bold flex items-center gap-2 hover:text-brand-dark transition-colors">السابق <ArrowRight size={20} /></button>
                <button onClick={() => setStep(4)} className="btn-gold px-12">عرض التقدير</button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-8">
              <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/10">
                <CheckCircle2 size={48} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-serif font-bold text-brand-dark">التقدير الأولي لمناسبتكم</h3>
                <p className="text-gray-500">بناءً على اختياراتكم، التكلفة المتوقعة هي:</p>
              </div>
              <div className="py-8 bg-brand-beige/50 rounded-[2rem] border border-brand-gold/10">
                <span className="text-7xl font-serif font-bold text-brand-gold">{calculateEstimate()}</span>
                <span className="text-2xl font-bold text-brand-gold mr-4">ر.س</span>
              </div>
              <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
                هذا السعر تقديري ويشمل التجهيزات الأساسية. للحصول على عرض سعر دقيق ومفصل، يرجى حجز موعد للمعاينة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <button className="btn-gold px-12">احجز موعداً للمعاينة</button>
                <button 
                  onClick={() => setStep(1)} 
                  className="px-12 py-4 border-2 border-gray-100 text-gray-400 rounded-full font-bold hover:border-brand-gold hover:text-brand-gold transition-all"
                >
                  إعادة الحساب
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
