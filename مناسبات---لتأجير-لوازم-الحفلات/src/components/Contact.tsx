import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Star, Sparkles, ShieldCheck } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-xs mb-4">
            <Star size={14} fill="currentColor" />
            تواصل معنا
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-dark">نحن دائماً في خدمتك</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            نحن هنا للإجابة على استفساراتكم ومساعدتكم في تنظيم مناسباتكم بأعلى معايير الفخامة والاحترافية.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Info Sidebar */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-brand-gold/5 text-right relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-[4rem]" />
              <h3 className="text-2xl font-serif font-bold mb-10 text-brand-dark relative z-10">معلومات الاتصال</h3>
              <div className="space-y-10 relative z-10">
                {[
                  { label: 'الموقع الرئيسي', value: 'الرياض، حي الملقا، طريق الملك فهد', icon: MapPin },
                  { label: 'رقم الجوال', value: '+966 57 939 1600', icon: Phone, dir: 'ltr' },
                  { label: 'البريد الإلكتروني', value: 'info@monasabat.sa', icon: Mail },
                  { label: 'ساعات العمل', value: 'يومياً من 9 صباحاً حتى 10 مساءً', icon: Clock },
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-end gap-5 group">
                    <div className="text-right">
                      <div className="font-bold text-xs text-brand-gold uppercase tracking-widest mb-1">{item.label}</div>
                      <p className="text-gray-600 font-medium" dir={item.dir}>{item.value}</p>
                    </div>
                    <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center text-brand-gold shrink-0 group-hover:bg-brand-gold group-hover:text-white transition-all duration-300">
                      <item.icon size={24} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-brand-dark text-white p-10 rounded-[2.5rem] shadow-2xl border border-brand-gold/20 text-right flex flex-col items-center relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-brand-gold/10 rounded-br-[4rem]" />
              <div className="w-20 h-20 bg-brand-gold/20 rounded-3xl flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-500">
                <MessageCircle size={48} />
              </div>
              <h4 className="text-2xl font-serif font-bold mb-3 text-brand-gold">تحدث معنا مباشرة</h4>
              <p className="text-gray-400 text-sm mb-8 text-center leading-relaxed">أسرع وسيلة للحصول على رد فوري وتحديد المواعيد عبر الواتساب</p>
              <a 
                href="https://wa.me/966579391600" 
                target="_blank" 
                rel="noreferrer" 
                className="w-full py-4 bg-brand-gold text-white rounded-2xl font-bold text-center hover:bg-white hover:text-brand-gold transition-all shadow-xl shadow-brand-gold/20"
              >
                ابدأ المحادثة الآن
              </a>
            </div>

            {/* Trust Badge */}
            <div className="bg-white p-8 rounded-[2rem] border border-brand-gold/10 flex items-center justify-end gap-4 shadow-xl">
              <div className="text-right">
                <div className="font-bold text-brand-dark">خدمة مضمونة</div>
                <div className="text-xs text-gray-400">نحن نضمن رضاكم التام</div>
              </div>
              <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
                <ShieldCheck size={24} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-brand-gold/5 text-right relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-brand-gold/5 rounded-br-[6rem]" />
              <div className="relative z-10">
                <div className="flex items-center justify-end gap-4 mb-12">
                  <h3 className="text-3xl font-serif font-bold text-brand-dark">أرسل لنا رسالة</h3>
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <Sparkles size={24} />
                  </div>
                </div>
                <form className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">الاسم الكريم</label>
                    <input type="text" placeholder="مثال: محمد السعد" className="w-full p-5 rounded-2xl bg-brand-beige border border-brand-gold/10 focus:border-brand-gold focus:bg-white outline-none transition-all text-right" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">رقم الجوال</label>
                    <input type="tel" placeholder="05xxxxxxxx" className="w-full p-5 rounded-2xl bg-brand-beige border border-brand-gold/10 focus:border-brand-gold focus:bg-white outline-none transition-all text-right" dir="ltr" />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">الموضوع</label>
                    <input type="text" placeholder="كيف يمكننا مساعدتك اليوم؟" className="w-full p-5 rounded-2xl bg-brand-beige border border-brand-gold/10 focus:border-brand-gold focus:bg-white outline-none transition-all text-right" />
                  </div>
                  <div className="md:col-span-2 space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mr-2">تفاصيل الرسالة</label>
                    <textarea rows={6} placeholder="اكتب استفسارك أو طلبك هنا بالتفصيل..." className="w-full p-5 rounded-2xl bg-brand-beige border border-brand-gold/10 focus:border-brand-gold focus:bg-white outline-none transition-all text-right resize-none"></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button type="submit" className="w-full py-5 bg-brand-dark text-white rounded-2xl font-bold text-xl hover:bg-brand-gold transition-all shadow-2xl flex items-center justify-center gap-3 group">
                      <span>إرسال الرسالة الآن</span>
                      <Send size={22} className="group-hover:translate-x-[-5px] group-hover:translate-y-[-5px] transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-24 relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-full shadow-2xl border border-brand-gold/20 z-10 font-bold text-brand-dark flex items-center gap-3">
            <MapPin size={20} className="text-brand-gold" />
            <span>تفضل بزيارة معرضنا في الرياض</span>
          </div>
          <div className="rounded-[4rem] overflow-hidden shadow-2xl h-[600px] relative border-[12px] border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115911.68244170864!2d46.6333056!3d24.774265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48939b%3A0x60a9644137fcfb94!2z2KfZhNix2YrYp9m2!5e0!3m2!1sar!2ssa!4v1710000000000!5m2!1sar!2ssa" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
