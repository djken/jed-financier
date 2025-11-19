// lib/utils.js - Utility functions

/**
 * Smoothly scrolls to a section by ID
 * @param {string} id - The ID of the element to scroll to
 */
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

/**
 * Detects which section is currently visible in viewport
 * @param {string[]} sectionIds - Array of section IDs to check
 * @param {number} offset - Offset from top in pixels
 * @returns {string|null} - ID of the active section or null
 */
export const getActiveSection = (sectionIds, offset = 100) => {
  return sectionIds.find(sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      const rect = element.getBoundingClientRect();
      return rect.top <= offset && rect.bottom >= offset;
    }
    return false;
  }) || null;
};

/**
 * Checks if window has scrolled past threshold
 * @param {number} threshold - Scroll threshold in pixels
 * @returns {boolean}
 */
export const hasScrolled = (threshold = 60) => {
  return typeof window !== 'undefined' && window.scrollY > threshold;
};

