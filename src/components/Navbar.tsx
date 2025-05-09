"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
}

export default function Navbar({
  logo = "/logo.svg",
  navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Technologies", href: "/technologies" },
    { label: "Showcase", href: "/showcase" },
  ],
  ctaText = "Let's Talk",
  ctaHref = "#contact",
}: NavbarProps) {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Translation-enabled navigation items
  const translatedNavItems = [
    { label: t('navbar.home'), href: "/" },
    { label: t('navbar.services'), href: "/services" },
    { label: t('navbar.industries'), href: "/industries" },
    { label: t('navbar.technologies'), href: "/technologies" },
    { label: t('navbar.showcase'), href: "/showcase" },
  ];

  // CSS styles
  const gridPatternStyle = `
    .bg-grid-pattern {
      background-image: linear-gradient(to right, #1f2937 1px, transparent 1px),
                        linear-gradient(to bottom, #1f2937 1px, transparent 1px);
      background-size: 20px 20px;
    }
  `;

  // Function copied from other components
  const handleScrollAndSetTab = (e: React.MouseEvent<HTMLElement>, tab: 'quote' | 'contact') => {
    e.preventDefault(); // Prevent default anchor jump
    
    const targetPath = '/';
    const targetId = 'contact';
    const targetHash = `#${targetId}?tab=${tab}`;

    if (window.location.pathname === targetPath) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.location.hash !== targetHash) {
          window.location.hash = targetHash;
        }
      } else {
        window.location.href = targetPath + targetHash;
      }
    } else {
      window.location.href = targetPath + targetHash;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Lock/unlock body scroll when menu opens/closes
  useEffect(() => {
    if (isMenuOpen) {
      // Lock scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll
      document.body.style.overflow = 'auto';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-5 right-5 z-[9999] p-2"
        style={{ 
          pointerEvents: 'auto',
          zIndex: 9999,
          position: 'fixed',
          touchAction: 'auto'
        }}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="relative w-7 h-7">
          <motion.div
            animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
            className="absolute top-0 w-7 h-0.5 bg-white"
            style={{ borderRadius: 2 }}
          />
          <motion.div
            animate={{ opacity: isMenuOpen ? 0 : 1 }}
            className="absolute top-3 w-7 h-0.5 bg-white"
            style={{ borderRadius: 2 }}
          />
          <motion.div
            animate={{ 
              rotate: isMenuOpen ? -45 : 0, 
              y: isMenuOpen ? -8 : 0 
            }}
            className="absolute top-6 w-7 h-0.5 bg-white"
            style={{ borderRadius: 2 }}
          />
        </div>
      </button>
      
      {/* Navbar Area */}
      <div className="fixed top-0 left-0 w-full z-50">
        {/* Backdrop Layer - Only for visual effect, no interactive elements */}
        {scrolled && (
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-lg shadow-md"
            style={{ pointerEvents: 'none' }}
          />
        )}
        
        {/* Interactive Content Layer - All navbar content goes here */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "w-full transition-all duration-300",
            "py-5"
          )}
          style={{ pointerEvents: 'auto' }}
        >
          <div className="progress-it-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center z-50 relative">
                <div className="flex items-center">
                  <span
                    className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
                  >
                    Progress IT
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                {translatedNavItems.map((item) => (
                  <div key={item.label} className="relative group">
                    <Link
                      href={item.href}
                      className={cn(
                        "font-medium transition-colors relative",
                        "text-white",
                      )}
                    >
                      {item.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  </div>
                ))}
              </div>

              {/* CTA Button (Desktop) */}
              <div className="hidden lg:block">
                <div className="flex items-center space-x-2">
                  <div style={{ position: 'relative', zIndex: 100 }}>
                    <LanguageSwitcher />
                  </div>
                  <Button
                    asChild
                    className={cn(
                      "font-medium transition-all overflow-hidden relative group btn-gradient-hover",
                      "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:shadow-lg text-white border-none"
                    )}
                  >
                    <a 
                      href="/#contact?tab=contact"
                      onClick={(e) => handleScrollAndSetTab(e, 'contact')}
                    >
                      <span className="relative z-10">{t('navbar.letsTalk')}</span>
                      <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Empty div to maintain spacing where mobile menu button was */}
              <div className="w-7 lg:hidden"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fixed language switcher for blurred state on mobile */}
      <div className="lg:hidden fixed top-5 left-5 z-[9999]">
        <LanguageSwitcher />
      </div>
      
      {/* Futuristic Mobile Navigation - kept separate from navbar */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[90] lg:hidden overflow-hidden"
            style={{ backdropFilter: "blur(10px)" }}
          >
            {/* Tech grid background */}
            <div className="absolute inset-0 overflow-hidden opacity-20">
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={`h-${i}`} 
                  className="absolute h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
                  style={{ top: `${(i + 1) * 5}%` }}
                />
              ))}
              {Array.from({ length: 20 }).map((_, i) => (
                <div 
                  key={`v-${i}`} 
                  className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
                  style={{ left: `${(i + 1) * 5}%` }}
                />
              ))}
            </div>
            
            {/* Status bar header */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full py-3 border-b border-cyan-900/30 flex justify-center items-center absolute top-16"
            >
              <div className="flex items-center gap-4 text-xs tracking-widest">
                <span className="text-cyan-400">SYS.2050</span>
                <span className="text-blue-400">NAVIGATION.PROTOCOL</span>
                <span className="text-purple-400">V.3.4.2</span>
              </div>
            </motion.div>
            
            {/* Main menu container - properly positioned in viewport */}
            <div className="fixed inset-0 top-16 flex items-start justify-center overflow-y-auto pt-16">
              <div className="relative max-w-md w-full mx-auto px-6">
                {/* Navigation Links (Mobile) */}
                <div className="grid grid-cols-1 gap-6">
                  {translatedNavItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="w-full"
                    >
                      <Link
                        href={item.href}
                        onClick={toggleMenu}
                        className="group relative block w-full"
                      >
                        <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 h-full flex items-center">
                          <div className={`w-2 h-2 ${pathname === item.href ? 'bg-cyan-400' : 'bg-cyan-500 group-hover:bg-cyan-400'} transition-colors`}></div>
                        </div>
                        <div className="flex items-center w-full group-hover:translate-x-2 transition-transform duration-300">
                          <div className="w-full">
                            <div className={`text-xl sm:text-2xl font-mono ${pathname === item.href ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500' : 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500'} transition-all duration-300 mb-1`}>
                              {item.label}
                            </div>
                            <div className={`w-full h-px bg-gradient-to-r from-transparent ${pathname === item.href ? 'via-cyan-500' : 'via-gray-600 group-hover:via-cyan-500'} to-transparent transition-colors`}></div>
                            <div className="text-xs text-gray-500 mt-1 font-mono flex items-center">
                              <span className={`mr-1 w-1 h-1 ${pathname === item.href ? 'bg-cyan-500' : 'bg-cyan-900 group-hover:bg-cyan-500'} rounded-full transition-colors`}></span>
                              <span>ROUTE.{index + 1}</span>
                              <motion.span 
                                className={`ml-2 ${pathname === item.href ? 'text-cyan-500' : 'text-cyan-800 group-hover:text-cyan-500'}`}
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >READY</motion.span>
                            </div>
                          </div>
                          <motion.div
                            className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-cyan-500">
                              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </motion.div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Button (Mobile) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + translatedNavItems.length * 0.1 }}
                  className="mt-10"
                >
                  <div className="flex items-center justify-center mb-4">
                    <LanguageSwitcher />
                  </div>
                  <button 
                    onClick={(e) => {
                      handleScrollAndSetTab(e as any, 'contact');
                      toggleMenu();
                    }}
                    className="w-full relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-20"
                      animate={{ 
                        backgroundPosition: ["0% 0%", "100% 100%"] 
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }}
                      style={{ 
                        backgroundSize: "200% 200%",
                        backgroundImage: "linear-gradient(45deg, rgba(0,0,0,0) 45%, rgba(255,255,255,0.5) 50%, rgba(0,0,0,0) 55%)"
                      }}
                    />
                    
                    <div className="relative py-3 px-6 flex items-center justify-between">
                      <div className="text-white font-mono tracking-wide">{t('navbar.letsTalk')}</div>
                      <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
                            <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </button>
                </motion.div>
                
                {/* System status */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + translatedNavItems.length * 0.1 }}
                  className="absolute bottom-4 left-0 right-0 flex justify-center"
                >
                  <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
                    <motion.div 
                      className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span>SYS.STATUS: OPERATIONAL</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <style jsx>{`
        ${gridPatternStyle}
      `}</style>
    </>
  );
}
