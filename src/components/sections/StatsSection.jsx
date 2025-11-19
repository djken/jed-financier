// components/sections/StatsSection.jsx

'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/data';

export default function StatsSection() {
  return (
    <section className="py-16 bg-white border-t border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.Icon className="text-white" size={28} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-800 mb-2">{stat.value}</div>
              <div className="text-blue-600 font-medium text-sm lg:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}