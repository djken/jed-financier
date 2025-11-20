import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// lib/data.js - All application constants and data

// import {
//   FileText, Building2, TrendingUp, Home, PiggyBank,
//   Users, Award, Star, Shield, Clock, MessageCircle
// } from 'lucide-react';

// export const services = [
//   { 
//     Icon: FileText, 
//     title: "Assurance vie", 
//     price: "25 $", 
//     desc: "Déclarations provinciales et fédérales", 
//     highlight: "500+ déclarations/an" 
//   },
//   { 
//     Icon: Building2, 
//     title: "Impôts Entreprises", 
//     desc: "Optimisation fiscale TPE/PME", 
//     highlight: "Économies garanties" 
//   },
//   { 
//     Icon: TrendingUp, 
//     title: "Planification Financière", 
//     desc: "Stratégies sur mesure à long terme", 
//     highlight: "Objectifs atteints" 
//   },
//   { 
//     Icon: Home, 
//     title: "Assurance Habitation", 
//     partner: "Industrielle Alliance", 
//     desc: "Protection complète + rabais exclusifs", 
//     highlight: "Meilleure couverture" 
//   },
//   { 
//     Icon: PiggyBank, 
//     title: "Épargne & Investissements", 
//     products: "REER • REEE • CELI", 
//     desc: "Croissance optimisée avec avantages fiscaux", 
//     highlight: "Rendements supérieurs" 
//   }
// ];

// export const stats = [
//   { value: "500+", label: "Clients satisfaits", Icon: Users },
//   { value: "10+", label: "Ans d'expérience", Icon: Award },
//   { value: "99%", label: "Satisfaction client", Icon: Star },
//   { value: "25$", label: "À partir de", Icon: TrendingUp }
// ];

// export const navItems = [
//   { id: 'hero', label: 'Accueil' },
//   { id: 'services', label: 'Services' },
//   { id: 'contact', label: 'Contact' }
// ];

// export const heroFeatures = [
//   { 
//     Icon: Award, 
//     title: "CPA Certifiés", 
//     desc: "Expertise reconnue", 
//     bgColor: "bg-blue-500" 
//   },
//   { 
//     Icon: Shield, 
//     title: "Confidentialité absolue", 
//     desc: "Données 100% sécurisées", 
//     bgColor: "bg-blue-500" 
//   },
//   { 
//     Icon: Clock, 
//     title: "Consultation gratuite", 
//     desc: "Sans engagement", 
//     bgColor: "bg-orange-500" 
//   },
//   { 
//     Icon: MessageCircle, 
//     title: "Consultations en ligne", 
//     desc: "Partout au Québec", 
//     bgColor: "bg-orange-500" 
//   }
// ];

// export const contactInfo = {
//   phone: "5147466986",
//   phoneDisplay: "(514) 746-6986",
//   email: "Estherdesir@yahoo.ca",
//   hours: [
//     { day: "Lun - Ven", time: "9h00 - 17h00" },
//     { day: "Samedi", time: "10h00 - 14h00" },
//     { day: "Dimanche", time: "Fermé" }
//   ]
// };

// Utility functions (browser-only). Add TypeScript-safe guards for SSR.
export function scrollToSection(id: string) {
  if (typeof document === "undefined") return;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export function getActiveSection(sectionIds: string[], offset = 100): string | null {
  if (typeof document === "undefined" || typeof window === "undefined") return null;
  return (
    sectionIds.find((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= offset && rect.bottom >= offset;
      }
      return false;
    }) || null
  );
}

export function hasScrolled(threshold = 60): boolean {
  if (typeof window === "undefined") return false;
  return window.scrollY > threshold;
}