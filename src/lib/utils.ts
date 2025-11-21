import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

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