"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import BlackHole from "./BlackHole";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  scrollText?: string;
}

const HeroSection = ({
  title = "Driving Digital Evolution For Forward-Thinking Businesses",
  subtitle = "We engineer  powerful digital ecosystems that connect brands with their audiences through innovative technology, strategic design, and results-driven development.",
  ctaText = "Let's Create",
  ctaLink = "#contact",
  scrollText = "Scroll to explore",
}: HeroSectionProps) => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  
  // Minimal scroll handler
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          // Only update on significant scroll changes
          if (Math.abs(currentScrollY - lastScrollY) > 10) {
            setScrollY(currentScrollY);
            lastScrollY = currentScrollY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simple button animation
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;
    
    const animateButton = (e: MouseEvent) => {
      e.preventDefault();
      button.classList.add('animate');
      setTimeout(() => button.classList.remove('animate'), 700);
    };
    
    button.addEventListener('click', animateButton as any);
    return () => button.removeEventListener('click', animateButton as any);
  }, []);

  // Minimal transform calculations
  const getContentOpacity = () => {
    const maxScroll = 800;
    const opacity = 1 - Math.min(scrollY / maxScroll, 0.9);
    return opacity > 0.1 ? Math.round(opacity * 10) / 10 : 0;
  };
  
  const getContentTransform = () => {
    const translateY = Math.round(scrollY * 0.3); // Reduced from 0.4
    return `translateY(-${translateY}px)`;
  };
  
  const getBlackHoleScale = () => {
    const minScale = 1;
    const maxScale = 1.05; // Further reduced from 1.1
    const scaleRange = maxScale - minScale;
    const maxScroll = 1000;
    const scale = minScale + (Math.min(scrollY, maxScroll) / maxScroll) * scaleRange;
    return Math.round(scale * 100) / 100;
  };
  
  const getGridOpacity = () => {
    // Grid fades out as user scrolls
    const maxScroll = 500;
    const opacity = 0.3 - Math.min(scrollY / maxScroll, 0.3);
    return Math.max(opacity, 0);
  };
  
  // Particle movement speeds up with scroll
  const getParticleSpeed = () => {
    const baseSpeed = 1;
    const maxSpeedMultiplier = 5;
    const maxScroll = 800;
    const speedMultiplier = 1 + (Math.min(scrollY, maxScroll) / maxScroll) * maxSpeedMultiplier;
    return speedMultiplier;
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full bg-black text-white overflow-hidden"
    >
      {/* Static background with minimal scale */}
      <div 
        className="absolute inset-0 z-0 bg-black transform-gpu"
        style={{ 
          transform: `scale(${getBlackHoleScale()})`,
          transition: 'transform 0.5s ease-out'
        }}
      >
        <BlackHole />
      </div>

      {/* Static gradient overlay */}
      <div className="absolute inset-0 z-1">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent"></div>
      </div>

      {/* Content container with minimal transforms */}
      <motion.div
        ref={contentRef}
        style={{ 
          opacity: getContentOpacity(),
          transform: getContentTransform(),
        }}
        className="relative z-10 progress-it-container flex flex-col justify-center items-start h-screen pt-20 px-4 sm:px-6 md:px-8 transition-all duration-500"
      >
        <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-block"
          >
            <span className="text-blue-500 font-semibold uppercase tracking-widest text-xs sm:text-sm md:text-base">
              Innovation Lab
            </span>
          </motion.div>

          <motion.h1
            className="progress-it-heading mb-6 leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-['Martian_Mono']"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block mr-2 sm:mr-3 mb-2 text-white"
            >
              We
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="inline-block mr-2 sm:mr-3 mb-2 text-white"
            >
              are
            </motion.span>
            {title.split(" ").slice(2).map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.5, duration: 0.5 }}
                className="inline-block mr-2 sm:mr-3 mb-2 text-white"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-full sm:max-w-2xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 border-0 text-white hover:opacity-90 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-medium group w-full sm:w-auto btn-gradient-hover"
              asChild
              style={{
                height: "var(--button-height)"
              }}
            >
              <a href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            {/* Bubbly Button */}
            <a 
              ref={buttonRef}
              href="#services" 
              className="bubbly-button px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-base sm:text-lg font-medium w-full sm:w-auto mt-2 sm:mt-0 inline-flex items-center justify-center min-h-[40px] sm:min-h-[44px] md:min-h-[48px]"
              style={{
                height: "var(--button-height)"
              }}
            >
              See Our Success
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator with fade out based on scroll */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{ 
            opacity: Math.max(0, 1 - scrollY / 200) 
          }}
        >
          <span className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
            {scrollText}
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Static bottom gradient */}
      <div 
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"
        style={{ 
          height: `${24 + Math.round(scrollY / 40)}px`,
          opacity: Math.min(0.3 + scrollY / 1000, 1),
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
