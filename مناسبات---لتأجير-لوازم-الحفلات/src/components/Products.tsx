import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ShoppingBag, Info, Truck, Wrench, Star, ArrowLeft } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { cn } from '../lib/utils';

export const Products = () => {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const categories = ['الكل', 'كراسي', 'كنبات', 'طاولات', 'خيام', 'إضاءة', 'سماعات', 'ديكور'];

  const filteredProducts = activeCategory === 'الكل' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 bg-brand-beige min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-xs mb-4">
            <Star size={14} fill="currentColor" />
            كتالوج المنتجات الفاخرة
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-brand-dark">مجموعتنا المختارة</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            نقدم لكم أرقى تشكيلة من الأثاث والمعدات التي تضفي لمسة من الفخامة والتميز على مناسباتكم الخاصة.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 bg-white p-6 rounded-3xl shadow-xl border border-brand-gold/5">
          <div className="flex flex-wrap justify-center gap-3 order-2 lg:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all border",
                  activeCategory === cat 
                    ? "bg-brand-gold text-white border-brand-gold shadow-lg shadow-brand-gold/20" 
                    : "bg-white text-gray-500 border-gray-100 hover:border-brand-gold/30 hover:text-brand-gold"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full max-w-md order-1 lg:order-2">
            <input 
              type="text" 
              placeholder="ابحث عن منتج محدد..." 
              className="w-full p-4 pr-12 rounded-2xl bg-brand-beige/50 border border-gray-100 focus:border-brand-gold focus:bg-white outline-none text-right transition-all"
            />
            <Search className="absolute top-1/2 right-4 -translate-y-1/2 text-brand-gold" size={20} />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              className="luxury-card rounded-3xl overflow-hidden group flex flex-col bg-white"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.includesSetup && (
                    <div className="bg-emerald-500 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform" title="يشمل التركيب">
                      <Wrench size={16} />
                    </div>
                  )}
                  <div className="bg-brand-gold text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform" title="خدمة التوصيل">
                    <Truck size={16} />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-brand-gold uppercase tracking-wider">
                  {product.category}
                </div>
              </div>
              
              <div className="p-8 text-right flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-left">
                    <span className="text-brand-gold font-serif font-bold text-2xl">{product.price}</span>
                    <span className="text-xs text-gray-400 block">ر.س / يوم</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-gold transition-colors">{product.name}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-8 line-clamp-2 leading-relaxed">{product.description}</p>
                
                <div className="mt-auto space-y-6">
                  <div className="flex items-center justify-end gap-2 text-xs text-gray-400 border-t border-gray-50 pt-4">
                    <span>مدة الإيجار: {product.rentalDuration}</span>
                    <Info size={14} className="text-brand-gold" />
                  </div>
                  <div className="flex gap-3">
                    <button className="flex-grow py-4 bg-brand-dark text-white rounded-xl font-bold text-sm hover:bg-brand-gold transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-dark/10">
                      أضف للطلب
                      <ShoppingBag size={18} />
                    </button>
                    <button className="p-4 border border-brand-gold/20 rounded-xl text-brand-gold hover:bg-brand-gold hover:text-white transition-all">
                      <Info size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mx-auto mb-6">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-bold text-brand-dark mb-2">عذراً، لم نجد نتائج</h3>
            <p className="text-gray-500">حاول تغيير الفئة أو البحث عن كلمة أخرى</p>
            <button 
              onClick={() => setActiveCategory('الكل')}
              className="mt-6 text-brand-gold font-bold underline"
            >
              عرض جميع المنتجات
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
