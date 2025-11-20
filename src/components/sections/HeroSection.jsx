// components/sections/HeroSection.jsx

'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Award } from 'lucide-react';
import { heroFeatures } from '@/lib/data';
import { scrollToSection } from '@/lib/utils';

export default function HeroSection({ heroY, heroOpacity }) {
  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-32 pb-24 bg-gradient-to-br from-blue-50 to-white">
      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }} 
        className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-medium border border-blue-200 shadow-sm"
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span>CPA certifié • Service partout au Québec</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-800 leading-tight"
          >
            Prenez contrôle{' '}
            <span className="text-orange-500 block">de vos finances</span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-blue-600 leading-relaxed max-w-2xl"
          >
            Faites faire vos impôts par une professionnelle certifiée CPA pour maximiser vos gains dès aujourd’hui!
          </motion.p>

          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
          >
            {heroFeatures.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 bg-white p-5 rounded-xl shadow-sm border border-blue-100"
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <feature.Icon className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-blue-700 text-base">{feature.title}</div>
                  <div className="text-sm text-blue-600">{feature.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 pt-8"
          >
            <motion.button 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }} 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-base shadow-sm hover:shadow-md flex items-center justify-center space-x-2 transition-all"
            >
              <span>Prendre rendez-vous gratuit</span>
              <ArrowRight size={18} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }} 
              onClick={() => scrollToSection('services')}
              className="border border-blue-300 text-blue-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:border-orange-400 hover:text-orange-500 transition-colors"
            >
              <span>Nos services</span>
              <ChevronDown size={18} className="animate-bounce" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Trust Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.8, delay: 0.4 }} 
          className="hidden lg:block"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-orange-50 rounded-2xl blur-sm -z-10" />
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100">
              <Award size={80} className="mx-auto text-orange-500 mb-6" />
              <h3 className="text-2xl font-bold text-center mb-4 text-blue-700">Excellence & Confiance</h3>
              <p className="text-blue-600 text-center text-lg mb-6">Un service pensé pour votre réussite financière</p>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-sm text-blue-700 text-center italic">
                  « Service professionnel et personnalisé qui a dépassé mes attentes »
                </p>
                <p className="text-xs text-blue-600 text-center mt-2">- Client satisfait</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}