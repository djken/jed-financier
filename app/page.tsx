// import { ModeToggle } from "@/components/theme-toggle";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center h-screen">
//         <h1>Learn Build</h1>
//         < ModeToggle />
//     </div>
//   );
// }
// app/page.js - Main page component

'use client';

import { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import AnimatedBackground from '@/components/layout/AnimatedBackground';
import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import { getActiveSection } from '@/lib/utils';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.6]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      
      const sections = ['hero', 'services', 'contact'];
      const currentSection = getActiveSection(sections, 100);
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatedBackground />
      
      <Header 
        scrolled={scrolled} 
        activeSection={activeSection} 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <HeroSection 
        heroY={heroY} 
        heroOpacity={heroOpacity} 
      />
      
      <StatsSection />
      
      <ServicesSection />
      
      <ContactSection />
      
      <Footer />
    </>
  );
}