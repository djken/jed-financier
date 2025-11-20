// components/layout/GlobalHeader.jsx - Header that works on all pages

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '../ui/Logo';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Nos Services' },
  { href: '/#contact', label: 'Contact' }
];

export default function GlobalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                isActive(item.href)
                  ? 'text-orange-600 bg-orange-50 border border-orange-100' 
                  : 'text-blue-800 hover:text-orange-600 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <a 
            href="tel:5147466986" 
            className="flex items-center space-x-2 text-blue-800 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-gray-50 text-sm"
          >
            <Phone size={16} />
            <span className="font-medium">(514) 746-6986</span>
          </a>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-4 py-2.5 rounded-lg font-medium shadow-sm hover:shadow-md flex items-center space-x-2 transition-all border border-transparent"
          >
            <Calendar size={16} />
            <span>Consultation gratuite</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-full left-4 right-4 bg-white/95 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200 mt-1 overflow-hidden"
          >
            <div className="p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left p-3 rounded-lg font-medium text-sm transition-colors ${
                    isActive(item.href)
                      ? 'text-orange-600 bg-orange-50' 
                      : 'text-blue-800 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <a 
                  href="tel:5147466986" 
                  className="flex items-center space-x-3 p-3 text-blue-800 hover:text-orange-600 transition-colors text-sm"
                >
                  <Phone size={16} />
                  <span className="font-medium">(514) 746-6986</span>
                </a>
                <a
                  href="/#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-3 rounded-lg font-medium text-sm mt-2 text-center"
                >
                  Consultation gratuite
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}