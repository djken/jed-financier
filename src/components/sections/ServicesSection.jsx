// components/sections/ServicesSection.jsx

'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import { services } from '@/lib/data';
import { scrollToSection } from '@/lib/utils';

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-blue-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="text-center mb-20"
        >
          <p className="text-orange-600 font-medium uppercase tracking-wider text-4xl mb-3">Nos Services</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
            Des solutions sur mesure{' '}
            <span className="text-orange-600">pour chaque besoin</span>
          </h2>
          <p className="text-blue-600 text-lg max-w-2xl mx-auto">
            Nous offrons des services de qualité pour la gestion des impôts des particuliers et des entreprises à des tarifs abordables. Avec nous, vous bénéficiez de l'expertise d'un professionnel compétent et vous réalisez des économies significatives sur vos impôts.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl p-10 text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-800/10" />
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Pas sûr du service qu'il vous faut ?</h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Profitez d'une consultation gratuite avec notre CPA pour identifier la meilleure solution.
            </p>
            <motion.button 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }} 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold text-lg shadow-sm hover:shadow-md inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Réserver maintenant (gratuit)</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}