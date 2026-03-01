import React from 'react';
import { motion } from 'motion/react';
import { Armchair, Tent, Utensils, Lightbulb, Volume2, Flower2, Home as HomeIcon, Gamepad2, Waves, Rocket, ArrowLeft, Star, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  const services = [
    { title: 'تأجير كراسي وكنبات', icon: Armchair, desc: 'تشكيلة واسعة من الكراسي الملكية والكنبات الفاخرة التي تضفي لمسة من الرقي على مناسبتكم.' },
    { title: 'تجهيز خيام ملكية', icon: Tent, desc: 'خيام أوروبية وعربية مكيفة ومجهزة بالكامل بأحدث التقنيات لضمان راحة ضيوفكم.' },
    { title: 'بوفيه وضيافة فاخرة', icon: Utensils, desc: 'خدمات ضيافة متكاملة مع أرقى أنواع السخانات وأدوات المائدة الفاخرة.' },
    { title: 'إضاءات وديكور فني', icon: Lightbulb, desc: 'أنظمة إضاءة احترافية وتنسيق ديكورات مبهرة تحول المكان إلى لوحة فنية.' },
    { title: 'أنظمة صوتية متطورة', icon: Volume2, desc: 'أجهزة صوتية عالية الجودة وتوزيع احترافي للصوت يناسب كافة المساحات.' },
    { title: 'كوش وتنسيق ورود', icon: Flower2, desc: 'تصاميم كوش فريدة وتنسيق ورود طبيعية وصناعية بأيدي خبراء التنسيق.' },
    { title: 'أثاث داخلي وخارجي', icon: HomeIcon, desc: 'حلول متكاملة للأثاث تناسب كافة الأجواء والمساحات مع ضمان الجودة.' },
    { title: 'ترفيه وألعاب أطفال', icon: Gamepad2, desc: 'ترفيه آمن وممتع للأطفال في مناسباتكم مع نطيطات وألعاب متنوعة.' },
    { title: 'معدات مائية وشاليهات', icon: Waves, desc: 'ألعاب مائية وتجهيزات للمسابح والشاليهات تضفي جواً من المرح والانتعاش.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-xs mb-4">
            <Star size={14} fill="currentColor" />
            خدماتنا المتكاملة
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-dark">نحن نجهز لك <span className="gold-text italic">المستحيل</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            نقدم حلولاً متكاملة وراقية لتجهيز كافة أنواع المناسبات، من الاجتماعات الصغيرة إلى الاحتفالات الكبرى.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto mb-32">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[2.5rem] text-right bg-white border border-brand-gold/5 shadow-xl shadow-brand-gold/5 transition-all duration-500 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-[3rem] group-hover:bg-brand-gold/10 transition-colors" />
              <div className="w-20 h-20 bg-brand-beige rounded-3xl flex items-center justify-center text-brand-gold mb-8 mr-0 ml-auto group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shadow-lg shadow-brand-gold/10">
                <service.icon size={36} />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-brand-dark group-hover:text-brand-gold transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{service.desc}</p>
              <Link to="/products" className="inline-flex items-center justify-end gap-3 text-brand-gold font-bold text-sm hover:gap-5 transition-all">
                <span>استكشف الكتالوج</span>
                <ArrowLeft size={18} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Special Occasions Section */}
        <div className="bg-brand-dark rounded-[4rem] p-12 md:p-24 text-right relative overflow-hidden mb-32">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-br-full" />
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
              <div className="order-2 md:order-1">
                <Link to="/booking" className="btn-gold px-12 py-5 text-xl">احجز مناسبتك الآن</Link>
              </div>
              <div className="text-right order-1 md:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold font-bold text-[10px] mb-4 uppercase tracking-widest">
                  <Sparkles size={12} />
                  تجهيزات خاصة
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">باقات حسب نوع المناسبة</h2>
                <p className="text-gray-400 mt-4 max-w-xl">لقد صممنا باقات متكاملة تناسب طابع كل مناسبة لتسهيل عملية الاختيار وضمان التناسق التام.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'حفلات الأعراس', img: 'https://picsum.photos/seed/wedding/800/1000', desc: 'باقات ملكية تليق بليلة العمر.' },
                { title: 'الاجتماعات العائلية', img: 'https://picsum.photos/seed/family/800/1000', desc: 'أجواء دافئة ومريحة لجمعاتكم الخاصة.' },
                { title: 'حفلات الأطفال', img: 'https://picsum.photos/seed/kids/800/1000', desc: 'ترفيه آمن وممتع لأطفالكم.' },
              ].map((item, i) => (
                <Link key={i} to="/products" className="relative h-[500px] rounded-[3rem] overflow-hidden group shadow-2xl">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent flex flex-col justify-end p-10 text-right">
                    <h3 className="text-white text-3xl font-serif font-bold mb-2 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-brand-gold/5 text-right relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/5 rounded-bl-[6rem]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-grow">
              <div className="flex items-center justify-end gap-4 mb-6">
                <h2 className="text-3xl font-serif font-bold text-brand-dark">ضمان الجودة والفخامة</h2>
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <p className="text-gray-500 leading-relaxed mb-8">
                نحن نضمن لك أن جميع المعدات والأثاث يتم فحصها وتعقيمها بدقة قبل كل مناسبة. فريقنا المتخصص يراعي أدق التفاصيل في التركيب والتجهيز لضمان خروج مناسبتكم بأبهى صورة.
              </p>
              <div className="flex flex-wrap justify-end gap-6">
                <div className="flex items-center gap-2 text-sm font-bold text-brand-dark">
                  <span>تعقيم شامل</span>
                  <CheckCircle2 size={16} className="text-brand-gold" />
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-brand-dark">
                  <span>تركيب احترافي</span>
                  <CheckCircle2 size={16} className="text-brand-gold" />
                </div>
                <div className="flex items-center gap-2 text-sm font-bold text-brand-dark">
                  <span>دعم فني 24/7</span>
                  <CheckCircle2 size={16} className="text-brand-gold" />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-brand-beige p-8 rounded-3xl border border-brand-gold/10 text-center">
                <div className="text-4xl font-serif font-bold text-brand-gold mb-2">+15</div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">سنة من التميز</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
