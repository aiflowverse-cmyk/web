import React from 'react';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Search, Mail, Star, Sparkles, TrendingUp } from 'lucide-react';

export const Blog = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-xs mb-4">
            <Star size={14} fill="currentColor" />
            مدونة الفخامة
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-dark">أسرار <span className="gold-text italic">المناسبات الراقية</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            نشارككم خبراتنا ونصائحنا لتنظيم حفلات ومناسبات تترك انطباعاً لا يُنسى لدى ضيوفكم.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {BLOG_POSTS.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-brand-gold/5 border border-brand-gold/5 group"
              >
                <div className="relative h-[450px] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-8 right-8 bg-brand-gold text-white px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg shadow-brand-gold/20 z-10">
                    نصائح وتوجيهات
                  </div>
                </div>
                <div className="p-10 md:p-16 text-right relative">
                  <div className="absolute -top-12 left-12 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-brand-gold border border-brand-gold/5 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                    <Sparkles size={32} />
                  </div>
                  <div className="flex items-center justify-end gap-8 text-[10px] font-bold text-gray-400 mb-8 uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                      <span>بواسطة: فريق مناسبات</span>
                      <User size={14} className="text-brand-gold" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{post.date}</span>
                      <Calendar size={14} className="text-brand-gold" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-brand-dark hover:text-brand-gold transition-colors leading-tight">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-500 text-lg leading-relaxed mb-10">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center justify-end gap-3 text-brand-gold font-bold text-sm hover:gap-6 transition-all group-hover:text-brand-gold"
                  >
                    <span>اقرأ المقال كاملاً</span>
                    <ArrowLeft size={20} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-12">
            {/* Search */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-brand-gold/5 text-right relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/5 rounded-bl-[3rem]" />
              <h3 className="text-xl font-serif font-bold mb-8 text-brand-dark flex items-center justify-end gap-3">
                ابحث في المدونة
                <Search size={20} className="text-brand-gold" />
              </h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="ماذا تبحث عنه؟" 
                  className="w-full p-5 pr-12 rounded-2xl bg-brand-beige border border-transparent focus:border-brand-gold focus:bg-white outline-none transition-all text-right" 
                />
                <Search size={18} className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-brand-gold/5 text-right relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/5 rounded-bl-[3rem]" />
              <h3 className="text-xl font-serif font-bold mb-8 text-brand-dark flex items-center justify-end gap-3">
                الأقسام المختارة
                <TrendingUp size={20} className="text-brand-gold" />
              </h3>
              <ul className="space-y-4">
                {['تنسيق حفلات', 'دليل العروس', 'أفكار ديكور', 'تجهيزات خارجية', 'أخبار مناسبات'].map((cat) => (
                  <li key={cat}>
                    <a href="#" className="flex items-center justify-between group hover:text-brand-gold transition-colors p-3 rounded-xl hover:bg-brand-gold/5">
                      <span className="text-[10px] font-bold bg-brand-beige px-3 py-1 rounded-full text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">12</span>
                      <span className="font-bold text-gray-600 group-hover:text-brand-dark">{cat}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="bg-brand-dark text-white p-10 rounded-[2.5rem] text-right relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-br-full" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold mb-8 mr-0 ml-auto">
                  <Mail size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4">اشترك في النشرة</h3>
                <p className="text-sm text-gray-400 mb-8 leading-relaxed">احصل على أحدث الأفكار والعروض الحصرية مباشرة في بريدك الإلكتروني.</p>
                <form className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="بريدك الإلكتروني" 
                    className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 focus:border-brand-gold outline-none text-white text-right" 
                  />
                  <button className="btn-gold w-full py-5 text-lg">اشترك الآن</button>
                </form>
                <p className="text-[10px] text-gray-500 mt-6 text-center">نحن نحترم خصوصيتك، لا نرسل رسائل مزعجة.</p>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-brand-gold/5 text-right relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-gold/5 rounded-bl-[3rem]" />
              <h3 className="text-xl font-serif font-bold mb-8 text-brand-dark">الأكثر قراءة</h3>
              <div className="space-y-8">
                {BLOG_POSTS.slice(0, 3).map((post) => (
                  <Link key={post.id} to={`/blog/${post.id}`} className="flex items-center gap-4 group">
                    <div className="flex-grow">
                      <h4 className="text-sm font-bold text-brand-dark group-hover:text-brand-gold transition-colors leading-snug">{post.title}</h4>
                      <span className="text-[10px] text-gray-400">{post.date}</span>
                    </div>
                    <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
