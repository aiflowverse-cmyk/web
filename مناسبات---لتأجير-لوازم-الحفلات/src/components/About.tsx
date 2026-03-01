import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Users, Award, Clock, ShieldCheck, Star, Sparkles, Target, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-xs mb-6">
              <Star size={14} fill="currentColor" />
              قصتنا ورؤيتنا
            </div>
            <h1 className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-[1.1] text-brand-dark">
              نحن نصنع <br />
              <span className="gold-text italic">اللحظات الخالدة</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              انطلقت "مناسبات" من رؤية طموحة تهدف إلى الارتقاء بمعايير تجهيز الحفلات في المملكة العربية السعودية. نحن نؤمن أن كل مناسبة هي قصة فريدة تستحق أن تُروى بأجمل التفاصيل وأرقى التجهيزات.
            </p>
            <p className="text-lg text-gray-500 mb-12 leading-relaxed">
              على مدار سنوات، نجحنا في تجهيز آلاف المناسبات، من حفلات الزفاف الأسطورية إلى الاجتماعات العائلية الدافئة، واضعين الجودة والفخامة نصب أعيننا دائماً كشعار لا نقبل عنه بديلاً.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {[
                { label: 'سنة من الخبرة', value: '+15' },
                { label: 'عميل سعيد', value: '+12k' },
                { label: 'مناسبة مجهزة', value: '+8k' },
              ].map((stat, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white border border-brand-gold/10 shadow-xl shadow-brand-gold/5 text-center">
                  <div className="text-3xl font-serif font-bold text-brand-gold mb-1">{stat.value}</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://hafalh.kaeef.com/storage/app/uploads/public/671/fb2/902/671fb2902777c959313831.jpg" 
                alt="تجهيزات فاخرة" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-dark text-white p-8 rounded-[2rem] shadow-2xl border border-brand-gold/20 flex items-center gap-5 z-20 hidden md:flex">
              <div className="w-14 h-14 bg-brand-gold rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-gold/20">
                <Award size={32} />
              </div>
              <div className="text-right">
                <div className="font-serif font-bold text-xl text-brand-gold">جودة ملكية</div>
                <div className="text-xs text-gray-400">معايير عالمية في كل تفصيل</div>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl border border-brand-gold/5 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-bl-full" />
          <div className="text-center mb-20 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-[10px] mb-4 uppercase tracking-widest">
              <Sparkles size={12} />
              ما نؤمن به
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark">قيمنا الجوهرية</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16 relative z-10">
            {[
              { title: 'الموثوقية التامة', desc: 'نلتزم بمواعيدنا وبجودة معداتنا لنكون الشريك الموثوق لنجاح مناسبتك.', icon: ShieldCheck },
              { title: 'الاحترافية العالية', desc: 'فريق عمل مدرب على أرقى المستويات لتقديم خدمة تليق بضيوفكم الكرام.', icon: Users },
              { title: 'التميز والابتكار', desc: 'نسعى دائماً لتقديم أحدث التصاميم وأرقى التجهيزات التي تبهر الحضور.', icon: Sparkles },
            ].map((value, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-brand-beige rounded-3xl shadow-lg flex items-center justify-center mx-auto text-brand-gold mb-8 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                  <value.icon size={36} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-brand-dark">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 mb-32">
          <div className="bg-brand-dark text-white p-12 md:p-16 rounded-[3rem] text-right relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-br-full" />
            <Target className="text-brand-gold mb-8" size={48} />
            <h3 className="text-3xl font-serif font-bold mb-6 text-brand-gold">رسالتنا</h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              توفير حلول متكاملة وراقية لتجهيز الحفلات والمناسبات، تجمع بين الفخامة والاحترافية، لضمان راحة عملائنا ونجاح فعالياتهم بأعلى المعايير العالمية.
            </p>
          </div>
          <div className="bg-white p-12 md:p-16 rounded-[3rem] border border-brand-gold/10 text-right shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-bl-full" />
            <Heart className="text-brand-gold mb-8" size={48} />
            <h3 className="text-3xl font-serif font-bold mb-6 text-brand-dark">رؤيتنا</h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              أن نكون الخيار الأول والاسم الأكثر ثقة في عالم تجهيز المناسبات الفاخرة في المملكة، من خلال الابتكار المستمر والالتزام المطلق بالجودة والتميز.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-right">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div className="order-2 md:order-1">
              <button className="btn-gold">تواصل معنا الآن</button>
            </div>
            <div className="text-right order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark">لماذا "مناسبات"؟</h2>
              <p className="text-gray-500 mt-4">ما يميزنا عن الآخرين ويجعلنا شركاء نجاحكم</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "أكبر تشكيلة من الأثاث الملكي والحديث في الرياض.",
              "معدات نظيفة ومعقمة قبل وبعد كل استخدام.",
              "أسعار تنافسية وباقات مرنة تناسب الجميع.",
              "فريق تركيب متخصص يراعي أدق التفاصيل.",
              "دعم فني متواجد على مدار الساعة خلال مناسبتك.",
              "تغطية شاملة لكافة أحياء الرياض والمدن المجاورة."
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-end gap-5 p-8 rounded-3xl bg-white border border-gray-50 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-500 group">
                <span className="font-bold text-gray-700 group-hover:text-brand-dark transition-colors">{item}</span>
                <div className="w-8 h-8 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                  <CheckCircle2 size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
