// lib/data.js - All application constants and data

import {
  FileText, Building2, TrendingUp, Home, PiggyBank,
  Users, Award, Star, Shield, Clock, MessageCircle
} from 'lucide-react';

export const services = [
  { 
    Icon: Users, 
    title: "Assurance vie", 
    // price: "25 $", 
    desc: "Garantit un soutien économique à votre famille en cas d’imprévu.", 
    highlight: "Protection financière pour vos proches" 
  },
  { 
    Icon: Home, 
    title: "Assurance hypothécaire", 
    desc: "Protège votre hypothèque en cas de décès, maladie ou incapacité.", 
    highlight: "Sécurisez votre maison et votre prêt" 
  },
  { 
    Icon: Shield, 
    title: "Assurance maladie grave", 
    desc: "Versement forfaitaire en cas de diagnostic d’une maladie grave.", 
    highlight: "Un soutien lors des moments difficiles" 
  },
  { 
    Icon: Award, 
    title: "Assurance invalidité", 
    // partner: "Industrielle Alliance", 
    desc: "Vous aide à maintenir votre niveau de vie si vous ne pouvez plus travailler.", 
    highlight: "Revenu assuré en cas d’incapacité" 
  },
  { 
    Icon: Clock, 
    title: "Assurance auto et habitation", 
    // products: "REER • REEE • CELI", 
    desc: "Couverture personnalisée pour votre véhicule et votre résidence.", 
    highlight: "Protection adaptée à vos biens" 
  },
  { 
    Icon: PiggyBank, 
    title: "REER – CELI – CELIAPP", 
    // products: "REER • REEE • CELI", 
    desc: "Accompagnement pour sélectionner le meilleur produit selon vos objectifs.", 
    highlight: "Choix du bon compte d’épargne"
  },
   { 
    Icon: FileText, 
    title: "Préparation d’impôt", 
    // products: "REER • REEE • CELI", 
    desc: "Service complet pour particuliers afin de maximiser vos retours.", 
    highlight: "Déclarations optimisées et conformes" 
  },
  { 
    Icon: Building2, 
    title: "Impôts pour entreprises (TPS, TVQ, etc.)", 
    // products: "REER • REEE • CELI", 
    desc: "Optimisation et conformité pour sociétés, travailleurs autonomes et PME.", 
    highlight: "Gestion fiscale professionnelle" 
  },
   { 
    Icon: TrendingUp, 
    title: "Tenue de livres & Préparation des états financiers", 
    // products: "REER • REEE • CELI", 
    desc: "États financiers complets, clairs et conformes aux normes.", 
    highlight: "Rapports fiables pour de meilleures décisions" 
  }
];

export const stats = [
  { value: "500+", label: "Clients satisfaits", Icon: Users },
  { value: "10+", label: "Ans d'expérience", Icon: Award },
  { value: "99%", label: "Satisfaction client", Icon: Star },
  { value: "25$", label: "À partir de", Icon: TrendingUp }
];

export const navItems = [
  { id: 'hero', label: 'Accueil' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' }
];

export const heroFeatures = [
  { 
    Icon: Award, 
    title: "CPA Certifiés", 
    desc: "Expertise reconnue", 
    bgColor: "bg-blue-500" 
  },
  { 
    Icon: Shield, 
    title: "Confidentialité absolue", 
    desc: "Données 100% sécurisées", 
    bgColor: "bg-blue-500" 
  },
  { 
    Icon: Clock, 
    title: "Consultation gratuite", 
    desc: "Sans engagement", 
    bgColor: "bg-orange-500" 
  },
  { 
    Icon: MessageCircle, 
    title: "Consultations en ligne", 
    desc: "Partout au Québec", 
    bgColor: "bg-orange-500" 
  }
];

export const contactInfo = {
  phone: "5147466986",
  phoneDisplay: "(514) 746-6986",
  email: "Estherdesir@yahoo.ca",
  hours: [
    { day: "Lun - Ven", time: "9h00 - 17h00" },
    { day: "Samedi", time: "10h00 - 14h00" },
    { day: "Dimanche", time: "Fermé" }
  ]
};