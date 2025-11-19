// components/ui/ContactForm.jsx

'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/data';

export default function ContactForm() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      whileInView={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl shadow-sm border border-blue-100 p-8"
    >
      <h3 className="text-2xl font-bold mb-6 text-blue-800">Demande de consultation gratuite</h3>
      
      <form className="space-y-6">
        <input 
          type="text" 
          placeholder="Nom complet" 
          required 
          className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition text-base" 
        />
        
        <div className="grid sm:grid-cols-2 gap-6">
          <input 
            type="email" 
            placeholder="Email" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition text-base" 
          />
          <input 
            type="tel" 
            placeholder="Téléphone" 
            required 
            className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition text-base" 
          />
        </div>
        
        <select className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition text-base">
          <option>Service souhaité</option>
          {services.map(s => (
            <option key={s.title}>{s.title}</option>
          ))}
        </select>
        
        <textarea 
          rows={5} 
          placeholder="Votre message..." 
          className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition text-base resize-none"
        ></textarea>
        
        <motion.button 
          whileHover={{ scale: 1.01 }} 
          whileTap={{ scale: 0.99 }} 
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-orange-500 text-white py-4 rounded-lg font-semibold text-lg shadow-sm hover:shadow-md transition-shadow"
        >
          Envoyer ma demande
        </motion.button>
      </form>
    </motion.div>
  );
}