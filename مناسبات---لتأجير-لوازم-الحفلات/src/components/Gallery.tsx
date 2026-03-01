import React from 'react';
import { motion } from 'motion/react';
import { Star, Sparkles, MapPin, Camera, ArrowLeft, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Gallery = () => {
  const portfolio = [
    { id: 1, title: 'تجهيز حفل زفاف ملكي', city: 'الرياض', type: 'زواج', image: 'https://hafalh.kaeef.com/storage/app/uploads/public/66f/6e3/abd/thumb_507_350_280_0_0_crop.jpg' },
    { id: 2, title: 'اجتماع عائلي في استراحة', city: 'جدة', type: 'عائلي', image: 'https://hafalh.kaeef.com/storage/app/uploads/public/66f/704/79a/thumb_518_350_280_0_0_crop.jpg' },
    { id: 3, title: 'حفل تخرج مودرن', city: 'الدمام', type: 'تخرج', image: 'https://hafalh.kaeef.com/storage/app/uploads/public/66f/704/805/thumb_521_350_280_0_0_crop.jpg' },
    { id: 4, title: 'تنسيق جلسات خارجية', city: 'الرياض', type: 'خارجي', image: 'https://hafalh.kaeef.com/storage/app/uploads/public/66f/5f6/fe3/thumb_446_250_180_0_0_crop.jpg' },
    { id: 5, title: 'افتتاح معرض تجاري', city: 'الخبر', type: 'تجاري', image: 'https://hafalh.kaeef.com/storage/app/uploads/public/66f/704/88d/thumb_525_350_280_0_0_crop.jpg' },
    { id: 6, title: 'تجهيز خيمة أوروبية', city: 'الرياض', type: 'خيام', image: 'https://hafalh.kaeef.com/storage/app/uploads/public/671/fbb/fb0/thumb_557_250_180_0_0_crop.jpg' },
  ];

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-xs mb-4">
            <Star size={14} fill="currentColor" />
            معرض التميز
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-dark">لمساتنا في <span className="gold-text italic">كل زاوية</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            شاهد كيف نحول المساحات العادية إلى قاعات ملكية مبهرة. كل صورة تحكي قصة نجاح وتفانٍ في العمل.
          </p>
        </div>

        {/* Before/After Section */}
        <div className="mb-32">
          <div className="flex items-center justify-end gap-4 mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-dark">سحر التحول (قبل وبعد)</h2>
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              <Sparkles size={24} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { 
                title: 'تجهيز قاعة زفاف بالكامل', 
                location: 'الرياض - حي النخيل', 
                before: 'https://hafalh.kaeef.com/storage/app/uploads/public/66f/704/844/thumb_523_350_280_0_0_crop.jpg',
                after: 'https://hafalh.kaeef.com/storage/app/uploads/public/66f/704/88d/thumb_525_350_280_0_0_crop.jpg'
              },
              { 
                title: 'تنسيق جلسة خارجية فاخرة', 
                location: 'جدة - حي أبحر', 
                before: 'https://hafalh.kaeef.com/storage/app/uploads/public/66f/6e2/af9/thumb_504_350_280_0_0_crop.jpg',
                after: 'https://hafalh.kaeef.com/storage/app/uploads/public/66f/6e3/29a/thumb_505_350_280_0_0_crop.jpg'
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative group rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white bg-white"
              >
                <div className="grid grid-cols-2 h-[400px] md:h-[550px]">
                  <div className="relative overflow-hidden">
                    <img src={item.before} alt="Before" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute top-6 right-6 bg-brand-dark/80 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest z-10">قبل التجهيز</div>
                  </div>
                  <div className="relative overflow-hidden border-r-2 border-white">
                    <img src={item.after} alt="After" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
                    <div className="absolute top-6 left-6 bg-brand-gold text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest z-10 shadow-lg shadow-brand-gold/20">بعد التجهيز</div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent text-white text-right">
                  <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-brand-gold transition-colors">{item.title}</h3>
                  <div className="flex items-center justify-end gap-2 text-gray-300 text-sm">
                    <span>{item.location}</span>
                    <MapPin size={14} className="text-brand-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="mb-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div className="order-2 md:order-1">
              <Link to="/booking" className="btn-gold px-10 py-4">احجز مناسبتك الآن</Link>
            </div>
            <div className="text-right order-1 md:order-2">
              <div className="flex items-center justify-end gap-4 mb-2">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark">بورتفوليو المناسبات</h2>
                <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                  <Camera size={24} />
                </div>
              </div>
              <p className="text-gray-500">مجموعة مختارة من أرقى التجهيزات التي قمنا بها مؤخراً</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolio.map((item) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -15 }}
                className="group relative rounded-[2.5rem] overflow-hidden shadow-xl h-[450px] bg-white border border-brand-gold/5"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 right-8 left-8 text-white text-right translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-3 py-1 bg-brand-gold text-white text-[10px] font-bold rounded-full mb-4 uppercase tracking-widest shadow-lg shadow-brand-gold/20">
                    {item.type}
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center justify-end gap-2 text-gray-300 text-sm">
                    <span>{item.city}</span>
                    <MapPin size={14} className="text-brand-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-5xl mx-auto bg-brand-dark rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-br-full" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-8">هل أنت مستعد لمناسبتك القادمة؟</h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
              دعنا نساعدك في تحويل رؤيتك إلى واقع ملموس. فريقنا المتخصص جاهز لتجهيز كل ما تحتاجه بأعلى معايير الفخامة.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/booking" className="btn-gold px-12 py-5 text-xl w-full sm:w-auto">ابدأ التخطيط الآن</Link>
              <Link to="/contact" className="px-12 py-5 rounded-2xl border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-all w-full sm:w-auto">تحدث مع خبير</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
