'use client';

import { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import ContactSection from '@/components/layout/ContactSection';
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
      <ContactSection />
    </>
  );
}