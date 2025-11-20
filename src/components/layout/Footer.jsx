// components/layout/Footer.jsx

'use client';

import { navItems, contactInfo } from '@/lib/data';
import { scrollToSection } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-950 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-800 font-bold text-lg">JED</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">JED Services Financiers inc.</h3>
            </div>
          </div>
          <p className="text-blue-200 mb-6 max-w-md text-base">
            Votre partenaire de confiance pour tous vos besoins financiers à Montréal et au Québec.
          </p>
        </div>
        
        {/* Navigation */}
        <div>
          <h4 className="font-bold text-lg mb-6">Navigation</h4>
          <ul className="space-y-3 text-blue-200 text-base">
            {navItems.map((item) => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollToSection(item.id)} 
                  className="hover:text-orange-300 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact */}
        <div>
          <h4 className="font-bold text-lg mb-6">Contact</h4>
          <div className="space-y-3 text-blue-200 text-base">
            <p>{contactInfo.phoneDisplay}</p>
            <p>{contactInfo.email}</p>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 mt-8 border-t border-blue-700 text-center text-blue-300 text-sm">
        © 2025 JED Services Financiers inc. Tous droits réservés.
      </div>
    </footer>
  );
}