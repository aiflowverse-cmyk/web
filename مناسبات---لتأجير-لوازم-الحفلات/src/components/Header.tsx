import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle, Menu, X, ShoppingBag, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'الخدمات', path: '/services' },
    { name: 'المنتجات', path: '/products' },
    { name: 'الباقات', path: '/pricing' },
    { name: 'المعرض', path: '/gallery' },
    { name: 'المدونة', path: '/blog' },
    { name: 'من نحن', path: '/about' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-dark"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={28} />
          </button>

          {/* Contact Actions (Left on RTL) */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+966579391600" 
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-gold/20 text-brand-dark hover:bg-brand-gold hover:text-white transition-all text-sm font-bold"
            >
              <Phone size={16} />
              <span>اتصل بنا</span>
            </a>
            <a 
              href="https://wa.me/966579391600" 
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20 text-sm font-bold"
            >
              <MessageCircle size={16} />
              <span>واتساب</span>
            </a>
            <Link to="/booking" className="btn-gold px-6 py-2.5 text-sm">
              احجز الآن
            </Link>
          </div>

          {/* Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-bold transition-all relative group",
                  location.pathname === link.path ? "text-brand-gold" : "text-brand-dark hover:text-brand-gold"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 right-0 h-0.5 bg-brand-gold transition-all duration-300",
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            ))}
          </nav>

          {/* Logo (Right on RTL) */}
          <Link to="/" className="flex items-center gap-3">
            <div className="text-right">
              <span className="block text-2xl font-serif font-bold gold-text leading-none">مناسبات</span>
              <span className="block text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">Luxury Rentals</span>
            </div>
            <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-gold/20 rotate-3 group-hover:rotate-0 transition-transform">
              <Star size={24} fill="currentColor" />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-brand-dark transition-colors"
                >
                  <X size={32} />
                </button>
                <div className="text-right">
                  <span className="block text-2xl font-serif font-bold gold-text">مناسبات</span>
                </div>
              </div>

              <nav className="flex flex-col gap-6 text-right">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-xl font-bold transition-colors",
                      location.pathname === link.path ? "text-brand-gold" : "text-brand-dark"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-8 border-t border-gray-100">
                <div className="flex flex-col gap-4">
                  <a href="tel:+966579391600" className="btn-outline-gold w-full text-center">اتصل بنا</a>
                  <a href="https://wa.me/966579391600" className="btn-gold w-full bg-emerald-500 border-emerald-500 text-center">واتساب</a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
