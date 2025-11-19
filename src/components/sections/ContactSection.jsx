// components/sections/ContactSection.jsx

'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import ContactForm from '../ui/ContactForm';
import { contactInfo } from '@/lib/data';

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="text-orange-600 font-medium uppercase tracking-wider text-sm mb-3">Contactez-nous</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6">
            Parlons de votre{' '}
            <span className="text-orange-600">avenir financier</span>
          </h2>
          <p className="text-blue-600 text-lg mb-10">
            Consultations en ligne partout au Québec • Réponse sous 24h
          </p>

          {/* Contact Methods */}
          <div className="space-y-6 mb-12">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-blue-100 hover:border-orange-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <p className="font-bold text-xl text-blue-800">{contactInfo.phoneDisplay}</p>
                <p className="text-blue-600">Appel direct</p>
              </div>
            </a>
            
            <a 
              href={`mailto:${contactInfo.email}`}
              className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-blue-100 hover:border-orange-200"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <p className="font-bold text-xl text-blue-800">{contactInfo.email}</p>
                <p className="text-blue-600">Réponse sous 24h</p>
              </div>
            </a>
          </div>

          {/* Hours */}
          <div className="p-6 bg-orange-50 rounded-xl border border-orange-100">
            <h3 className="font-bold text-lg mb-4 text-blue-800">Nos horaires</h3>
            <div className="space-y-3 text-blue-600">
              {contactInfo.hours.map((schedule, index) => (
                <div key={index} className="flex justify-between">
                  <span>{schedule.day}:</span>
                  <span className="font-medium">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
}