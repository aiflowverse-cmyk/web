import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, User, Phone, MessageCircle, Send, CheckCircle2, Star, ShieldCheck } from 'lucide-react';

export const Booking = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-xs mb-4">
            <Star size={14} fill="currentColor" />
            خدمة حجز التجهيزات الملكية
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-dark">ابدأ التخطيط لمناسبتك</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            املأ البيانات التالية وسيتواصل معك أحد مستشارينا لتأكيد التفاصيل وضمان جاهزية كل شيء لمناسبتكم السعيدة.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-brand-gold/5 text-right relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-[5rem]" />
              
              <form className="space-y-12 relative z-10">
                {/* Personal Info */}
                <div className="space-y-8">
                  <div className="flex items-center justify-end gap-3 border-b border-gray-100 pb-4">
                    <h3 className="text-2xl font-serif font-bold text-brand-dark">المعلومات الشخصية</h3>
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      <User size={20} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700">الاسم الكامل</label>
                      <input type="text" placeholder="أدخل اسمك الثلاثي" className="w-full p-5 rounded-2xl bg-brand-beige/30 border border-gray-100 focus:border-brand-gold focus:bg-white outline-none transition-all text-right" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700">رقم الجوال</label>
                      <input type="tel" placeholder="05xxxxxxxx" className="w-full p-5 rounded-2xl bg-brand-beige/30 border border-gray-100 focus:border-brand-gold focus:bg-white outline-none transition-all text-right" dir="ltr" />
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-8">
                  <div className="flex items-center justify-end gap-3 border-b border-gray-100 pb-4">
                    <h3 className="text-2xl font-serif font-bold text-brand-dark">تفاصيل المناسبة</h3>
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                      <Calendar size={20} />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700">تاريخ المناسبة</label>
                      <input type="date" className="w-full p-5 rounded-2xl bg-brand-beige/30 border border-gray-100 focus:border-brand-gold focus:bg-white outline-none transition-all text-right" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-gray-700">وقت التجهيز المفضل</label>
                      <input type="time" className="w-full p-5 rounded-2xl bg-brand-beige/30 border border-gray-100 focus:border-brand-gold focus:bg-white outline-none transition-all text-right" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-gray-700">موقع المناسبة (الحي / المدينة)</label>
                    <div className="relative">
                      <input type="text" placeholder="مثلاً: حي الملقا، الرياض" className="w-full p-5 rounded-2xl bg-brand-beige/30 border border-gray-100 focus:border-brand-gold focus:bg-white outline-none transition-all text-right pr-14" />
                      <MapPin className="absolute top-1/2 right-5 -translate-y-1/2 text-brand-gold" size={24} />
                    </div>
                  </div>
                </div>

                {/* Requirements */}
                <div className="space-y-4">
                  <label className="text-sm font-bold text-gray-700">متطلبات إضافية أو ملاحظات خاصة</label>
                  <textarea rows={4} placeholder="اذكر أي تفاصيل إضافية تهمنا (مثلاً: عدد الضيوف، نوع الكراسي المفضل...)" className="w-full p-6 rounded-2xl bg-brand-beige/30 border border-gray-100 focus:border-brand-gold focus:bg-white outline-none transition-all text-right"></textarea>
                </div>

                <div className="flex flex-col gap-6 pt-6">
                  <button type="submit" className="btn-gold w-full py-6 text-xl shadow-2xl shadow-brand-gold/30">
                    إرسال طلب الحجز الملكي
                    <Send size={24} />
                  </button>
                  <button type="button" className="w-full py-6 bg-emerald-500 text-white rounded-2xl font-bold text-xl shadow-xl shadow-emerald-500/20 hover:bg-emerald-600 transition-all flex items-center justify-center gap-4">
                    تواصل سريع عبر واتساب
                    <MessageCircle size={24} />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-10">
            <div className="bg-brand-dark text-white p-10 rounded-[2rem] text-right relative overflow-hidden">
              <div className="absolute top-0 left-0 w-24 h-24 bg-white/5 rounded-br-[3rem]" />
              <h4 className="text-2xl font-serif font-bold mb-8 text-brand-gold">لماذا تختارنا؟</h4>
              <ul className="space-y-8">
                {[
                  { title: 'معدات ملكية', desc: 'نضمن لك نظافة وجودة كافة المعدات المستأجرة بأعلى المعايير.', icon: Star },
                  { title: 'دقة في المواعيد', desc: 'نصل قبل موعدك بوقت كافٍ لضمان جاهزية كل شيء.', icon: Clock },
                  { title: 'فريق محترف', desc: 'عمالة مدربة على أرقى أساليب التعامل والتركيب السريع.', icon: ShieldCheck },
                ].map((item, i) => (
                  <li key={i} className="flex items-start justify-end gap-4">
                    <div className="text-right">
                      <div className="font-bold mb-1 text-white text-lg">{item.title}</div>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-brand-gold shrink-0">
                      <item.icon size={20} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-10 rounded-[2rem] border border-brand-gold/10 text-right shadow-xl">
              <h4 className="text-xl font-serif font-bold mb-4 text-brand-dark">تحتاج استشارة؟</h4>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                إذا كنت غير متأكد من التجهيزات المناسبة، يمكنك ترتيب زيارة ميدانية لموقعك ليقوم خبراؤنا بتقديم المشورة الفنية مجاناً.
              </p>
              <a href="tel:+966579391600" className="flex items-center justify-center gap-3 py-4 border-2 border-brand-gold text-brand-gold rounded-xl font-bold hover:bg-brand-gold hover:text-white transition-all">
                <Phone size={20} />
                تحدث مع خبير الآن
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
