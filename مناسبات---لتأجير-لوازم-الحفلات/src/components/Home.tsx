import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, CheckCircle2, Calendar, Users, MapPin, Phone, MessageCircle, ShoppingBag, X, ArrowRight, Play, Sparkles, ShieldCheck, Clock, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS, REVIEWS, BLOG_POSTS } from '../constants';
import { EventCalculator } from './EventCalculator';
import { cn } from '../lib/utils';

export const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="overflow-hidden bg-brand-beige">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-brand-gold/5 z-0" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-right"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-xs mb-8 uppercase tracking-widest">
                <Sparkles size={14} fill="currentColor" />
                التميز في كل تفصيلة
              </div>
              <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[1.1] mb-8 text-brand-dark">
                نصنع من مناسباتكم <br />
                <span className="gold-text italic">تحفة فنية</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-xl ms-auto font-medium">
                نقدم لكم أرقى تشكيلة من لوازم الحفلات والمناسبات في المملكة، حيث تجتمع الفخامة مع الاحترافية لتجهيز ليلة العمر.
              </p>
              <div className="flex flex-wrap justify-end gap-6">
                <Link to="/booking" className="btn-gold px-12 py-5 text-xl shadow-2xl shadow-brand-gold/20">
                  احجز مناسبتك الآن
                  <ArrowLeft size={24} />
                </Link>
                <Link to="/products" className="btn-outline-gold px-12 py-5 text-xl bg-white/50 backdrop-blur">
                  استكشف الكتالوج
                </Link>
              </div>
              
              <div className="mt-16 flex items-center justify-end gap-12 border-t border-brand-gold/10 pt-10">
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-brand-dark">+500</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">مناسبة ملكية</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-brand-dark">+2000</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">قطعة فاخرة</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-brand-dark">4.9/5</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">تقييم العملاء</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-[4rem] overflow-hidden shadow-2xl border-[16px] border-white group">
                <img 
                  src="https://hafalh.kaeef.com/storage/app/uploads/public/693/37e/3ee/69337e3eed68f592258035.jpg" 
                  alt="Luxury Party Setup" 
                  className="w-full h-[650px] object-cover group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
                <div className="absolute bottom-12 right-12 text-right text-white">
                  <h3 className="text-3xl font-serif font-bold mb-2">تجهيزات ملكية</h3>
                  <p className="text-gray-200">نعتني بأدق التفاصيل لتليق بمقامكم</p>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/95 rounded-full flex items-center justify-center text-brand-gold shadow-2xl z-20"
                >
                  <Play fill="currentColor" size={36} className="ms-1" />
                </motion.button>
              </div>
              
              {/* Floating Badges */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-8 -right-8 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-brand-gold/10 hidden md:block"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <ShieldCheck size={28} />
                  </div>
                  <div className="text-right">
                    <div className="font-serif font-bold text-brand-dark text-lg">ضمان الجودة</div>
                    <div className="text-xs text-gray-400 font-bold uppercase tracking-widest">معدات فاخرة دائماً</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute top-12 -left-12 bg-brand-dark p-6 rounded-[2rem] shadow-2xl hidden lg:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                    <Clock size={24} />
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-sm">التزام بالمواعيد</div>
                    <div className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">دقة متناهية</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white border-y border-brand-gold/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <img src="https://hafalh.kaeef.com/storage/app/media/maroof.png" alt="Maroof" className="h-14 object-contain" />
            <div className="flex items-center gap-3 font-serif font-bold text-2xl text-brand-dark">
              <Star fill="#D4AF37" size={24} className="text-brand-gold" />
              <span>تقييم 4.9 على قوقل</span>
            </div>
            <div className="text-brand-dark font-serif font-bold text-2xl">سجل تجاري معتمد</div>
            <div className="text-brand-dark font-serif font-bold text-2xl">دفع آمن وموثوق</div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding bg-brand-beige relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-[10px] mb-4 uppercase tracking-widest">
              <Sparkles size={12} />
              خدماتنا المختارة
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-dark">استكشف <span className="gold-text italic">عالم الفخامة</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">نقدم لكم خدمات متكاملة لتجهيز كافة أنواع المناسبات بأعلى معايير الجودة العالمية.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'كراسي وكنبات ملكية', img: 'https://hafalh.kaeef.com/storage/app/uploads/public/66f/6e3/abd/thumb_507_350_280_0_0_crop.jpg', link: '/products?cat=كراسي', desc: 'تشكيلة فاخرة تناسب القصور والقاعات.' },
              { title: 'خيام أوروبية حديثة', img: 'https://hafalh.kaeef.com/storage/app/uploads/public/671/fbb/fb0/thumb_557_250_180_0_0_crop.jpg', link: '/products?cat=خيام', desc: 'مساحات واسعة ومكيفة لكافة الفعاليات.' },
              { title: 'ديكور وكوش فنية', img: 'https://hafalh.kaeef.com/storage/app/uploads/public/66f/6d4/d08/thumb_487_350_280_0_0_crop.jpg', link: '/products?cat=ديكور', desc: 'تصاميم حصرية تضفي سحراً على ليلتكم.' },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={cat.link} className="block group relative rounded-[3rem] overflow-hidden shadow-2xl bg-white border border-brand-gold/5">
                  <div className="h-96 overflow-hidden">
                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
                  <div className="absolute bottom-10 right-10 left-10 text-right">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:text-brand-gold transition-colors">{cat.title}</h3>
                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">{cat.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div className="order-2 md:order-1">
              <Link to="/products" className="btn-outline-gold px-8 py-3">عرض الكتالوج الكامل</Link>
            </div>
            <div className="text-right order-1 md:order-2">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-dark mb-4">قطع مختارة <span className="gold-text italic">لمناسبتكم</span></h2>
              <p className="text-gray-500">أرقى المنتجات الأكثر طلباً لهذا الموسم</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-brand-beige rounded-[2.5rem] overflow-hidden border border-brand-gold/5 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                    {product.category}
                  </div>
                </div>
                <div className="p-8 text-right">
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-2 group-hover:text-brand-gold transition-colors">{product.name}</h3>
                  <div className="text-brand-gold font-bold text-lg mb-6">{product.price} ر.س / يوم</div>
                  <Link to="/booking" className="w-full py-3 rounded-xl border border-brand-gold text-brand-gold font-bold text-sm hover:bg-brand-gold hover:text-white transition-all block text-center">
                    أضف للطلب
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calculator Section */}
      <section className="section-padding bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-right text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/20 text-brand-gold font-bold text-[10px] mb-6 uppercase tracking-widest">
                <Sparkles size={12} />
                أداة التخطيط الذكية
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">احسب تكلفة <br /> مناسبتك <span className="gold-text italic">في ثوانٍ</span></h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-xl ms-auto">
                استخدم أداتنا الذكية للحصول على تقدير فوري ودقيق لتكلفة تجهيز مناسبتك بناءً على نوع الفعالية وعدد الضيوف.
              </p>
              <div className="space-y-6">
                {[
                  { title: 'تقدير فوري ودقيق', desc: 'نتائج فورية بناءً على أسعار السوق الحالية.' },
                  { title: 'خيارات مخصصة', desc: 'باقات تناسب كافة الميزانيات والتطلعات.' },
                  { title: 'معاينة ميدانية', desc: 'إمكانية طلب زيارة للموقع مجاناً للتأكد من القياسات.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start justify-end gap-5">
                    <div className="text-right">
                      <div className="text-white font-bold mb-1">{item.title}</div>
                      <div className="text-gray-500 text-sm">{item.desc}</div>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold flex-shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-2xl z-20">
                <div className="text-center">
                  <div className="text-xs font-bold uppercase tracking-widest">مجاني</div>
                  <div className="text-2xl font-serif font-bold">100%</div>
                </div>
              </div>
              <EventCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-padding bg-brand-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-dark">رحلتك نحو <span className="gold-text italic">التميز</span></h2>
            <p className="text-gray-500">خطوات بسيطة ومدروسة لضمان نجاح مناسبتكم</p>
          </div>
          <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            {[
              { step: '01', title: 'اختر معداتك', desc: 'تصفح الكتالوج الفاخر واختر ما يناسب ذوقك الرفيع.', icon: ShoppingBag },
              { step: '02', title: 'حدد الموعد', desc: 'اختر تاريخ ووقت المناسبة والموقع بدقة متناهية.', icon: Calendar },
              { step: '03', title: 'التوصيل والتركيب', desc: 'فريقنا المتخصص يتولى المهمة بأعلى معايير الاحترافية.', icon: Truck },
              { step: '04', title: 'استمتع باللحظة', desc: 'نحن نهتم بكافة التفاصيل لتتفرغ أنت لضيوفك الكرام.', icon: Sparkles },
            ].map((item, i) => (
              <div key={i} className="text-center group relative">
                {i < 3 && (
                  <div className="hidden lg:block absolute top-12 -left-6 w-12 h-0.5 bg-brand-gold/20" />
                )}
                <div className="w-24 h-24 bg-white rounded-[2rem] shadow-xl flex items-center justify-center text-brand-gold mx-auto mb-8 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 border border-brand-gold/5">
                  <item.icon size={36} />
                </div>
                <div className="text-4xl font-serif font-bold text-brand-gold/10 mb-2">{item.step}</div>
                <h3 className="text-xl font-serif font-bold mb-3 text-brand-dark">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full translate-x-1/2 translate-y-1/2" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="flex justify-center gap-1 text-brand-gold mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} fill="#D4AF37" size={24} />)}
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-dark">شهادات <span className="gold-text italic">نعتز بها</span></h2>
            <p className="text-gray-500">ثقة عملائنا هي سر نجاحنا واستمرارنا في العطاء</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15 }}
                className="bg-brand-beige p-10 rounded-[3rem] text-right border border-brand-gold/5 shadow-xl hover:shadow-2xl transition-all duration-500 relative"
              >
                <div className="absolute top-10 left-10 text-brand-gold/20">
                  <MessageCircle size={48} fill="currentColor" />
                </div>
                <div className="flex items-center justify-end gap-5 mb-8">
                  <div className="text-right">
                    <h4 className="font-serif font-bold text-brand-dark text-lg">{review.name}</h4>
                    <p className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">{review.event} - {review.city}</p>
                  </div>
                  <img src={review.image} alt={review.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-brand-gold/20 shadow-lg" />
                </div>
                <p className="text-gray-600 italic leading-relaxed text-lg">"{review.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="https://hafalh.kaeef.com/storage/app/uploads/public/671/fb3/81a/671fb381aa48a329491916.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/80 to-brand-dark" />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-gold/20 text-brand-gold font-bold text-xs mb-8 uppercase tracking-widest">
              <Sparkles size={16} />
              ابدأ رحلتك معنا
            </div>
            <h2 className="text-4xl md:text-7xl font-serif font-bold mb-10 leading-tight">هل أنت مستعد <br /> لمناسبتك <span className="gold-text italic">القادمة؟</span></h2>
            <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed">
              فريقنا المتخصص جاهز لتحويل رؤيتك إلى واقع ملموس بأعلى معايير الفخامة والاحترافية.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/booking" className="btn-gold px-16 py-6 text-2xl w-full sm:w-auto shadow-2xl shadow-brand-gold/20">
                احجز الآن
                <ArrowLeft size={28} />
              </Link>
              <a href="tel:+966579391600" className="px-16 py-6 rounded-2xl border-2 border-white/20 text-white font-bold text-2xl hover:bg-white/10 transition-all w-full sm:w-auto flex items-center justify-center gap-3">
                تحدث مع خبير
                <Phone size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
