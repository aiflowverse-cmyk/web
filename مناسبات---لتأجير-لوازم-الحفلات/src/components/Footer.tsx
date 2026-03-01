import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Star, MessageCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-right">
          {/* Brand & About */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center justify-end gap-3 group">
              <div className="text-right">
                <span className="block text-2xl font-serif font-bold text-white leading-none">مناسبات</span>
                <span className="block text-[10px] text-brand-gold font-bold tracking-[0.2em] uppercase">Luxury Rentals</span>
              </div>
              <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-gold/20 rotate-3 group-hover:rotate-0 transition-transform">
                <Star size={24} fill="currentColor" />
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs ms-auto">
              نحن متخصصون في تحويل مناسباتكم إلى ذكريات لا تُنسى من خلال توفير أرقى مستلزمات الحفلات وأكثرها فخامة في المملكة العربية السعودية.
            </p>
            <div className="flex items-center justify-end gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-all border border-white/10">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-8 border-b border-brand-gold/20 pb-4 inline-block">روابط سريعة</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products" className="hover:text-brand-gold transition-colors">كتالوج المنتجات</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-gold transition-colors">باقات الأسعار</Link></li>
              <li><Link to="/booking" className="hover:text-brand-gold transition-colors">احجز الآن</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-gold transition-colors">معرض الصور</Link></li>
              <li><Link to="/blog" className="hover:text-brand-gold transition-colors">المدونة</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-8 border-b border-brand-gold/20 pb-4 inline-block">خدماتنا</h4>
            <ul className="space-y-4 text-sm">
              <li>تأجير كراسي وكنبات ملكية</li>
              <li>تجهيز خيام أوروبية وملكيه</li>
              <li>أنظمة إضاءة وصوت احترافية</li>
              <li>كوش وتنسيق ورود طبيعية</li>
              <li>بوفيه وضيافة فاخرة</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif font-bold text-xl mb-8 border-b border-brand-gold/20 pb-4 inline-block">تواصل معنا</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start justify-end gap-4">
                <div className="text-right">
                  <div className="text-white font-bold mb-1">الموقع الرئيسي</div>
                  <p>الرياض، حي الملقا، طريق الملك فهد</p>
                </div>
                <MapPin size={20} className="text-brand-gold shrink-0" />
              </li>
              <li className="flex items-center justify-end gap-4">
                <div className="text-right">
                  <div className="text-white font-bold mb-1">اتصل بنا</div>
                  <p dir="ltr">+966 57 939 1600</p>
                </div>
                <Phone size={20} className="text-brand-gold shrink-0" />
              </li>
              <li className="flex items-center justify-end gap-4">
                <div className="text-right">
                  <div className="text-white font-bold mb-1">البريد الإلكتروني</div>
                  <p>info@monasabat.sa</p>
                </div>
                <Mail size={20} className="text-brand-gold shrink-0" />
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/10 pt-10 flex flex-wrap justify-center gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <img src="https://hafalh.kaeef.com/storage/app/media/maroof.png" alt="Maroof" className="h-10 object-contain" />
          <div className="flex items-center gap-2 font-bold">
            <Star fill="currentColor" size={16} className="text-brand-gold" />
            <span>تقييم 4.9 على قوقل</span>
          </div>
          <div className="font-bold">سجل تجاري: 1010XXXXXX</div>
          <div className="font-bold">دفع آمن ومدعوم</div>
        </div>

        <div className="mt-16 text-center text-xs border-t border-white/5 pt-10">
          <p className="mb-2">© {new Date().getFullYear()} مناسبات لتأجير لوازم الحفلات. جميع الحقوق محفوظة.</p>
          <p className="text-gray-600">صمم بكل حب لخدمة ضيوف الرحمن ومناسباتكم السعيدة</p>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/966579391600" 
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 left-8 w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform z-40"
      >
        <MessageCircle size={32} />
      </a>
    </footer>
  );
};
