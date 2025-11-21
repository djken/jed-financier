"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface SubService {
  id: string;
  title: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  description?: string;
  subServices?: SubService[];
  icon?: string;
}

const services: Service[] = [
  {
    id: "tax",
    title: "Services d'Impôts",
    icon: "📊",
    subServices: [
      {
        id: "individual",
        title: "Particuliers",
        description: `Nous offrons un service complet de préparation et de soumission des déclarations d'impôts provinciales et fédérales pour les particuliers, à partir de 25 $. Nos experts vous accompagnent pour garantir la conformité de vos déclarations et optimiser vos économies fiscales. Avec notre aide, vous pouvez réduire le stress lié aux impôts et vous concentrer sur ce qui compte vraiment pour vous.`,
      },
      {
        id: "business",
        title: "Entreprises",
        description: `Notre service fiscal pour les entreprises couvre les impôts provinciaux et fédéraux, que vous soyez une petite entreprise ou une grande corporation. Nous vous aidons à simplifier vos obligations fiscales et à maximiser vos économies, tout en assurant la conformité avec la législation en vigueur. Confiez-nous vos impôts et concentrez-vous sur la croissance et le succès de votre entreprise.`,
      },
    ],
  },
  {
    id: "planning",
    title: "Planification Fiscale et Financière",
    icon: "📈",
    description: `Nous proposons un accompagnement personnalisé pour gérer et sécuriser votre avenir financier. Nos conseillers expérimentés vous aident à : 

• Élaborer un plan financier sur mesure adapté à vos objectifs à long terme.
• Identifier les opportunités et minimiser les risques financiers.
• Prendre des décisions éclairées pour bâtir un avenir solide et prospère.`,
  },
  {
    id: "insurance",
    title: "Assurance Habitation",
    icon: "🏠",
    description: `En partenariat avec Industrielle Alliance, nous proposons des solutions d'assurance habitation complètes pour propriétaires et locataires. Nos services incluent : 

• Protection de votre résidence, de ses occupants et de vos biens précieux.
• Assistance personnalisée pour choisir la couverture optimale.
• Devis clair et détaillé, avec des économies potentielles et des rabais exclusifs.

Protégez votre maison tout en bénéficiant d'un service fiable et d'un tarif compétitif.`,
  },
  {
    id: "investments",
    title: "Épargne et Investissements",
    icon: "💰",
    description: `Nous vous aidons à atteindre vos objectifs financiers à long terme grâce à une gamme complète de produits d'épargne et d'investissement :

• REER : Préparez votre retraite tout en profitant d'avantages fiscaux immédiats.
• REEE : Épargnez pour l'éducation de vos enfants avec les subventions gouvernementales.
• CELI : Faites fructifier vos économies à l'abri de l'impôt.

Nos conseillers vous accompagnent à chaque étape, que vous soyez novice ou investisseur expérimenté, pour construire une stratégie adaptée à votre situation et à vos objectifs.`,
  },
];

// Animation variants with proper TypeScript types
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const accordionVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.55, 0.085, 0.68, 0.53]
    }
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const rotateVariants: Variants = {
  closed: { rotate: 0 },
  open: { rotate: 180 }
};

export default function ServicesPage() {
  const [openService, setOpenService] = useState<string | null>("tax");
  const [openSubService, setOpenSubService] = useState<string | null>("individual");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="bg-gradient-to-l from-indigo-200 text-white py-20 px-4"
      >
        {/* bg-gradient-to-br from-blue-50 to-white */}
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm font-semibold mb-4"
          >
            CPA certifié - Service partout au Québec
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-blue-800  mb-6"
          >
            Prenez contrôle de vos <span className="text-orange-500">finances</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-blue-600 max-w-3xl mx-auto"
          >
            Faites faire vos impôts par une professionnelle certifiée CPA pour maximiser vos gains dès aujourd'hui!
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: "✓", title: "CPA Certifiés", desc: "Expertise reconnue" },
              { icon: "💬", title: "Consultation gratuite", desc: "Sans engagement" },
              { icon: "🔒", title: "Confidentialité absolue", desc: "Données 100% sécurisées" },
              { icon: "💻", title: "Consultations en ligne", desc: "Partout au Québec" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <div className="bg-orange-500 rounded-full animate-pulse text-[#1e2a45] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-blue-700 text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-blue-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e2a45] mb-4">
              Nos Services Professionnels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions financières complètes pour particuliers et entreprises, 
              conçues pour optimiser votre situation fiscale et sécuriser votre avenir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Services List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    onClick={() =>
                      setOpenService(openService === service.id ? null : service.id)
                    }
                  >
                    <div className="flex items-center space-x-4">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="p-3 bg-[#1e2a45] rounded-xl text-2xl text-[#d4af37]"
                      >
                        {service.icon}
                      </motion.div>
                      <h2 className="text-2xl font-bold text-[#1e2a45]">
                        {service.title}
                      </h2>
                    </div>
                    <motion.div
                      variants={rotateVariants}
                      initial="closed"
                      animate={openService === service.id ? "open" : "closed"}
                      className="text-[#d4af37] font-bold text-xl"
                    >
                      ▼
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {openService === service.id && (
                      <motion.div
                        variants={accordionVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                          {service.description && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="prose prose-lg text-gray-700 leading-relaxed"
                            >
                              {service.description.split('\n').map((paragraph, index) => (
                                <p key={index} className="mb-4">
                                  {paragraph}
                                </p>
                              ))}
                            </motion.div>
                          )}

                          {service.subServices && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                              className="mt-6 space-y-4"
                            >
                              {service.subServices.map((sub) => (
                                <motion.div
                                  key={sub.id}
                                  whileHover={{ scale: 1.02 }}
                                  className="bg-gray-50 rounded-xl p-4 border border-gray-200 hover:border-[#FFAC1C] transition-all duration-300"
                                >
                                  <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex justify-between items-center text-left"
                                    onClick={() =>
                                      setOpenSubService(
                                        openSubService === sub.id ? null : sub.id
                                      )
                                    }
                                  >
                                    <h3 className="text-xl font-semibold text-[#1e2a45]">
                                      {sub.title}
                                    </h3>
                                    <motion.div
                                      variants={rotateVariants}
                                      initial="closed"
                                      animate={openSubService === sub.id ? "open" : "closed"}
                                      className="text-[#d4af37] font-bold text-lg"
                                    >
                                      ▼
                                    </motion.div>
                                  </motion.button>
                                  <AnimatePresence>
                                    {openSubService === sub.id && (
                                      <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-3 text-gray-600 leading-relaxed overflow-hidden"
                                      >
                                        {sub.description}
                                      </motion.p>
                                    )}
                                  </AnimatePresence>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* Sidebar - Contact & Features */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Excellence & Trust Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white-800 rounded-2xl shadow-lg p-8 text-white"
              >
                <h3 className="text-2xl font-bold mb-2 text-[#1e2a45]">Excellence & Confiance</h3>
                <p className="text-gray-900 mb-6">
                  Un service pensé pour votre réussite financière
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <p className="text-lg italic mb-4 text-gray-500">
                    « Service professionnel et personnalisé qui a dépassé mes attentes »
                  </p>
                  <p className="text-gray-800 font-semibold">- Client satisfait</p>
                </motion.div>
              </motion.div>

              {/* Contact Card */}
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-[#1e2a45] mb-4">
                  Consultation Gratuite
                </h3>
                <p className="text-gray-600 mb-6">
                  Discutons de vos besoins financiers sans engagement. Notre équipe 
                  d'experts CPA est à votre disposition pour vous accompagner.
                </p>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="p-2 bg-green-100 rounded-lg text-lg">
                      💻
                    </div>
                    <span className="text-gray-700">Consultations en ligne disponibles</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="p-2 bg-blue-100 rounded-lg text-lg">
                      🛡️
                    </div>
                    <span className="text-gray-700">Service partout au Québec</span>
                  </motion.div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl cursor-pointer"
                >
                  <p className="text-lg font-semibold text-white text-center">
                    📞 (514) 746-6986
                  </p>
                </motion.div>
              </motion.div>

              {/* Features Card */}
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-[#0000] to-[#ee7039] rounded-2xl shadow-lg p-8 text-[#1e2a45]"
              >
                <h3 className="text-2xl font-bold mb-6">Pourquoi Nous Choisir?</h3>
                <div className="space-y-4">
                  {[
                    "CPA Certifiés et Expérimentés",
                    "Confidentialité Absolue",
                    "Service Personnalisé",
                    "Tarifs Compétitifs"
                  ].map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <motion.span
                        whileHover={{ scale: 1.2, rotate: 180 }}
                        transition={{ duration: 0.2 }}
                        className="text-[#1e2a45] text-xl"
                      >
                        ✓
                      </motion.span>
                      <span className="font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}