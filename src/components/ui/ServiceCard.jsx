// components/ui/ServiceCard.jsx

'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100"
    >
      <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center mb-5 group-hover:scale-105 transition">
        <service.Icon className="text-white" size={28} />
      </div>
      
      <h3 className="text-xl font-bold text-blue-800 mb-3">{service.title}</h3>
      
      {service.price && (
        <p className="text-2xl font-bold text-orange-600 mb-3">À partir de {service.price}</p>
      )}
      
      {service.partner && (
        <p className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
          {service.partner}
        </p>
      )}
      
      {service.products && (
        <p className="text-sm font-medium text-blue-600 mb-3">{service.products}</p>
      )}
      
      <p className="text-blue-600 mb-4 leading-relaxed">{service.desc}</p>
      
      <p className="text-sm font-medium text-orange-600 mb-4 flex items-center">
        <CheckCircle size={16} className="mr-2" />
        {service.highlight}
      </p>
      
      <button 
        onClick={() => scrollToSection('contact')}
        className="w-full bg-blue-100 py-3 rounded-lg font-medium text-blue-800 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-orange-500 group-hover:text-white transition-all flex items-center justify-center space-x-2"
      >
        <span>En savoir plus</span>
        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
      </button>
    </motion.div>
  );
}