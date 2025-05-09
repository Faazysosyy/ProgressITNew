"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';
import { useTranslation } from "@/lib/useTranslation";

// Mapping of category keys to their values to be used with translations
const categoryKeys: Record<string, string> = {
  'All': 'all',
  'UX/UI Design': 'uxui',
  'Mobile App': 'mobile',
  'Design Strategy': 'design',
  'Prototyping': 'prototyping',
  'Animation': 'animation',
  'Backend Development': 'backend'
};

// Sample project data with more fields for creative display
const showcaseProjects = [
  {
    id: 1,
    title: "Elevate Inc.",
    category: "UX/UI Design",
    year: "2022",
    tags: ["UX/UI", "Prototyping", "Design"],
    image: "/img/1.png",
    highlight: true,
    color: "#3b63f8", // Blue to match the image
    position: { x: -20, y: 10 },
    description: "Elevate provides a modern consumer-directed benefits platform that prioritizes the needs of both partners and employees.",
    technologies: ["PROTOTYPING", "UX/UI DESIGN", "GRAPHIC DESIGN"],
    team: [
      "1 Project Manager",
      "4 UX/UI Designers"
    ]
  },
  {
    id: 2,
    title: "Woosh Air",
    category: "Design Strategy",
    year: "2022",
    tags: ["Design", "UX/UI", "Animation"],
    image: "/img/2.png",
    highlight: true,
    color: "#2eb69a", // Teal to match the image
    position: { x: 30, y: -15 },
    description: "Woosh combines an innovative smart filter frame and 3M™ Filtration Technology to elevate the air quality in your home.",
    technologies: ["DESIGN STRATEGY", "MOBILE APP UX/UI", "3D ANIMATION DESIGN"],
    team: [
      "1 Project Manager",
      "2 UX/UI Designers",
      "1 Motion Designer"
    ]
  },
  {
    id: 3,
    title: "GastroGuide App",
    category: "Mobile App",
    year: "2023",
    tags: ["Mobile App", "Food", "Discovery"],
    image: "/img/3.png",
    highlight: true,
    color: "#3d3467", // Dark purple to match the image
    position: { x: 10, y: 30 },
    description: "Personal guide to gastronomy that helps to discover restaurants, cafes With all the important information at a glance: addresses, photos, opening hours, menus, and much more.",
    technologies: ["MOBILE APP DEVELOPMENT", "BACKOFFICE UPGRADE"],
    team: [
      "1 Project Manager",
      "1 UX/UI Designer",
      "1 QA Engineer",
      "1 Developer"
    ]
  },
  {
    id: 4,
    title: "CHMedic App",
    category: "Backend Development",
    year: "2023",
    tags: ["Web App", "Mobile App", "UX/UI", "Security", "Healthcare"],
    image: "/img/4.png",
    highlight: true,
    color: "#d94d7e", // Pink-red to match the image
    position: { x: -25, y: -20 },
    description: "The CHMedic app is the frontend of the CHMedic world, which provides patients or doctors with central and mobile access to applications in the healthcare sector.",
    technologies: ["WEB APP DEVELOPMENT", "MOBILE APP UX/UI", "MOBILE APP DEVELOPMENT", "BACK OFFICE DEVELOPMENT", "DATA ENCRYPTION", "SECURITY LAYER"],
    team: [
      "1 Project Manager",
      "1 UX/UI Designer",
      "1 QA Engineer",
      "3 Developers",
      "QA Automation"
    ]
  },
  {
    id: 5,
    title: "Care AI (Air Canada)",
    category: "Prototyping",
    year: "2023",
    tags: ["AI", "Chatbot", "Customer Support"],
    image: "/img/5.png",
    highlight: true,
    color: "#8557d3", // Purple to match the image
    position: { x: 20, y: 5 },
    description: "The AI-powered platform is dedicated to transforming the chatbot and customer support experience.",
    technologies: ["DESIGN STRATEGY", "PROTOTYPING", "UX/UI DESIGN"],
    team: [
      "1 Project Manager",
      "2 UX/UI Designers",
      "1 Motion Designer"
    ]
  },
  {
    id: 6,
    title: "Leafsy",
    category: "UX/UI Design",
    year: "2023",
    tags: ["SaaS", "Real Estate", "Rental"],
    image: "/img/6.png",
    highlight: true,
    color: "#6d442e", // Brown to match the image
    position: { x: -5, y: -30 },
    description: "Leafsy offers a worldwide Airbnb-like service for renting commercial spaces for work, events, seminars, and more.",
    technologies: ["RESEARCH", "SAAS UX/UI"],
    team: [
      "1 Project Manager",
      "3 UX/UI Designers"
    ]
  },
];

export default function Showcase() {
  const { t } = useTranslation();
  
  // Available filter categories - dynamically created from translation keys
  const categories = Object.keys(categoryKeys).map(cat => cat);
  
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(showcaseProjects);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isGridView, setIsGridView] = useState(false);
  const [showSpotlight, setShowSpotlight] = useState(false);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  
  // Parallax scrolling effect
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);
  
  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setVisibleProjects(showcaseProjects);
    } else {
      setVisibleProjects(showcaseProjects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  // Mouse spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        mousePosRef.current = { x: e.clientX, y: e.clientY };
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(6, 182, 212, 0.15), transparent 40%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    setShowSpotlight(true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Create floating animation for each project that updates position
  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -10, 0],
      x: [0, i % 2 === 0 ? 5 : -5, 0],
      transition: {
        duration: 4 + i,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      {/* Dynamic Spotlight Effect */}
      {showSpotlight && (
        <div
          ref={spotlightRef}
          className="fixed inset-0 z-10 pointer-events-none transition-opacity duration-500"
          style={{ opacity: 0.7 }}
        />
      )}
      
      {/* Header Section with Style Matching Image */}
      <section className="w-full pt-28 pb-16 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
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
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            style={{ y: y1, opacity }}
            className="max-w-5xl mx-auto"
          >
            {/* "Technology" text with gradient */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2 text-left"
            >
              {t('showcase.excellence.title').split(' ')[0]}
            </motion.h2>
            
            {/* "Excellence" text */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-8xl font-bold text-white mb-6 text-left"
            >
              {t('showcase.excellence.title').split(' ')[1]}
            </motion.h1>
            
            {/* Subtitle with services */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl font-medium text-gray-300 mb-12 text-left"
            >
              {t('showcase.excellence.subtitle')}
            </motion.h3>
            
            {/* Description text */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-gray-400 max-w-2xl text-lg"
            >
              {t('showcase.excellence.description')}
            </motion.p>
            
            {/* Futuristic tech dots pattern */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-80 opacity-30 hidden lg:block">
              <div className="relative w-full h-full">
                {Array.from({ length: 80 }).map((_, i) => {
                  const row = Math.floor(i / 10);
                  const col = i % 10;
                  return (
                    <motion.div
                      key={`dot-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{
                        duration: 2,
                        delay: (row + col) * 0.05,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
                      style={{
                        top: `${row * 10}%`,
                        left: `${col * 10}%`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Showcase Module Banner */}
      <section className="w-full py-6 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-purple-900/20 border-y border-gray-800 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-xs text-cyan-400/70 uppercase tracking-[0.2em]">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >SYS.2050</motion.span>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >SHOWCASE.MODULE</motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >V.4.5.3</motion.span>
          </div>
        </div>
      </section>
      
      {/* Controls Section */}
      <section className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-4"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-900/50 to-purple-900/50 border border-cyan-500/50 text-white'
                    : 'text-gray-400 border border-gray-800 hover:border-gray-700'
                } rounded-full relative overflow-hidden`}
              >
                {t(`showcase.categories.${categoryKeys[category]}`)}
                {activeCategory === category && (
                  <>
                    <span className="ml-2 inline-block w-2 h-2 bg-cyan-400 rounded-full"></span>
                    <motion.span 
                      className="absolute inset-0 bg-cyan-500/10"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
                    />
                  </>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </section>
      
      {/* Futuristic 3D Projects Showcase */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-24">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layoutId={`project-list-${project.id}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onClick={() => setActiveProject(project.id)}
              className="relative group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Project Image with Parallax Effect */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative w-full md:w-1/2 aspect-video overflow-hidden rounded-lg"
                  style={{ 
                    boxShadow: `0 20px 40px -10px ${project.color}30`,
                    border: `1px solid ${project.color}30` 
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Project year label */}
                  <div 
                    className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs backdrop-blur-sm"
                    style={{ backgroundColor: `${project.color}30`, color: project.color }}
                  >
                    {project.year}
                  </div>
                  
                  {/* Category & ID label */}
                  <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
                    <div 
                      className="px-3 py-1 rounded-full text-xs backdrop-blur-sm"
                      style={{ backgroundColor: `${project.color}30`, color: project.color }}
                    >
                      {project.category}
                    </div>
                    <div className="text-xs text-gray-400 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm">
                      ID-{String(project.id).padStart(3, '0')}
                    </div>
                  </div>
                </motion.div>
                
                {/* Project Info with Animated Elements */}
                <motion.div 
                  className="w-full md:w-1/2 relative"
                  whileHover={{ x: 10 }}
                >
                  {/* Project title with animated underline */}
                  <div className="mb-4 relative">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <motion.div 
                      className="h-[2px] w-24" 
                      style={{ backgroundColor: project.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: 100 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  
                  {/* Project description */}
                  <p className="text-gray-400 mb-6">
                    {t('showcase.projectCard.description')}
                  </p>
                  
                  {/* Tags with custom colors */}
                  <div className="flex gap-2 flex-wrap mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full transition-all duration-300 hover:scale-105"
                        style={{ 
                          backgroundColor: `${project.color}20`, 
                          color: project.color,
                          border: `1px solid ${project.color}40` 
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* View project button */}
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: `0 0 20px ${project.color}50`
                    }}
                    className="group relative px-6 py-2 rounded-full flex items-center gap-2 overflow-hidden"
                    style={{ 
                      backgroundColor: 'transparent',
                      border: `1px solid ${project.color}` 
                    }}
                  >
                    <motion.div 
                      className="absolute inset-0 opacity-20" 
                      style={{ backgroundColor: project.color }}
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span style={{ color: project.color }}>{t('showcase.viewProject')}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke={project.color} 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="transform transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </motion.button>
                </motion.div>
              </div>
              
              {/* Horizontal rule with animated effect */}
              {index < visibleProjects.length - 1 && (
                <div className="relative h-px w-full bg-gray-800 mt-20">
                  <motion.div 
                    className="absolute top-0 left-0 h-full"
                    style={{ backgroundColor: project.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Project Modal (when a project is clicked) */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-900/90 border border-gray-800 rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
              style={{ backdropFilter: 'blur(10px)' }}
            >
              {/* Find the active project */}
              {(() => {
                const project = showcaseProjects.find(p => p.id === activeProject);
                if (!project) return null;
                
                return (
                  <>
                    <div className="relative w-full aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <div 
                        className="absolute inset-0"
                        style={{ 
                          background: `linear-gradient(to bottom, transparent 30%, ${project.color}10 60%, ${project.color}30 80%, #111827 100%)` 
                        }}
                      />
                      
                      {/* Animated corner border effect */}
                      <div className="absolute top-0 left-0 w-16 h-16">
                        <motion.div 
                          className="absolute top-0 left-0 w-full h-0.5" 
                          style={{ backgroundColor: project.color }}
                          animate={{ width: ['0%', '100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', times: [0, 0.5, 1] }}
                        />
                        <motion.div 
                          className="absolute top-0 left-0 w-0.5 h-full" 
                          style={{ backgroundColor: project.color }}
                          animate={{ height: ['0%', '100%', '100%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', times: [0, 0.5, 1] }}
                        />
                      </div>
                      
                      <button
                        className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors duration-200 z-50"
                        onClick={() => setActiveProject(null)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      
                      <div className="absolute bottom-6 left-6 z-40">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2" style={{ backgroundColor: project.color }}></div>
                          <span className="text-xs" style={{ color: project.color }}>{project.category}</span>
                          <span className="text-xs text-gray-400">/ {project.year}</span>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-white">
                          {project.title}
                        </h2>
                      </div>
                    </div>
                    
                    <div className="p-6 relative">
                      {/* Animated tech pattern background */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="w-full h-full">
                          {Array.from({ length: 100 }).map((_, i) => {
                            const top = Math.random() * 100;
                            const left = Math.random() * 100;
                            const size = Math.random() * 3 + 1;
                            return (
                              <motion.div 
                                key={`dot-${i}`}
                                className="absolute rounded-full"
                                style={{ 
                                  top: `${top}%`, 
                                  left: `${left}%`,
                                  width: `${size}px`,
                                  height: `${size}px`,
                                  backgroundColor: project.color
                                }}
                                animate={{ 
                                  opacity: [0.2, 0.8, 0.2],
                                  scale: [1, 1.5, 1]
                                }}
                                transition={{
                                  duration: 2 + Math.random() * 2,
                                  repeat: Infinity,
                                  delay: Math.random() * 2
                                }}
                              />
                            );
                          })}
                        </div>
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3 }}
                              className="px-3 py-1 text-xs rounded-full"
                              style={{ 
                                backgroundColor: `${project.color}20`, 
                                color: project.color,
                                border: `1px solid ${project.color}40` 
                              }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                        
                        <div className="mb-8">
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                            <motion.div 
                              className="w-1 h-6 mr-3"
                              style={{ backgroundColor: project.color }}
                              initial={{ height: 0 }}
                              animate={{ height: 24 }}
                              transition={{ duration: 0.5 }}
                            />
                            {t('showcase.modal.projectOverview')}
                          </h3>
                          {project.description ? (
                            <p className="text-gray-300 mb-4">{project.description}</p>
                          ) : (
                            <>
                              <p className="text-gray-300 mb-4">
                                {t('showcase.modal.defaultDescription')}
                              </p>
                              <p className="text-gray-300">
                                {t('showcase.modal.defaultDescription2')}
                              </p>
                            </>
                          )}
                        </div>
                        
                        {/* Technologies section - only show if available */}
                        {project.technologies && (
                          <div className="mb-8">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                              <motion.div 
                                className="w-1 h-6 mr-3"
                                style={{ backgroundColor: project.color }}
                                initial={{ height: 0 }}
                                animate={{ height: 24 }}
                                transition={{ duration: 0.5 }}
                              />
                              {t('showcase.modal.technologiesUsed')}
                            </h3>
                            <div className="flex flex-wrap gap-3 mb-4">
                              {project.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-3 py-2 rounded-md text-sm font-medium"
                                  style={{ 
                                    backgroundColor: `${project.color}20`, 
                                    color: project.color,
                                    border: `1px solid ${project.color}40` 
                                  }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Team section - only show if available */}
                        {project.team && (
                          <div className="mb-8">
                            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                              <motion.div 
                                className="w-1 h-6 mr-3"
                                style={{ backgroundColor: project.color }}
                                initial={{ height: 0 }}
                                animate={{ height: 24 }}
                                transition={{ duration: 0.5 }}
                              />
                              {t('showcase.modal.teamComposition')}
                            </h3>
                            <ul className="list-disc list-inside text-gray-300 pl-4 space-y-2">
                              {project.team.map((member, idx) => (
                                <li key={idx}>{member}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="p-4 bg-black/50 rounded-lg border border-gray-800 backdrop-blur-sm"
                          >
                            <h4 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">{t('showcase.modal.category')}</h4>
                            <p className="text-white">{project.category}</p>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="p-4 bg-black/50 rounded-lg border border-gray-800 backdrop-blur-sm"
                          >
                            <h4 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">{t('showcase.modal.year')}</h4>
                            <p className="text-white">{project.year}</p>
                          </motion.div>
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="p-4 bg-black/50 rounded-lg border border-gray-800 backdrop-blur-sm"
                          >
                            <h4 className="text-sm text-gray-400 mb-2 uppercase tracking-wider">{t('showcase.modal.status')}</h4>
                            <p className="text-white">{t('showcase.modal.completed')}</p>
                          </motion.div>
                        </div>
                        
                        <div className="flex justify-center mt-8">
                          <motion.button 
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: `0 0 20px ${project.color}50`
                            }}
                            className="px-6 py-3 text-white font-semibold rounded-full flex items-center gap-2 relative overflow-hidden"
                            style={{ 
                              backgroundColor: project.color,
                            }}
                          >
                            <motion.span 
                              className="absolute inset-0 bg-white/20"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: '100%' }}
                              transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10">{t('showcase.modal.fullCaseStudy')}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="relative z-10">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Footer />
      
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes floating {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #1f2937 1px, transparent 1px),
                            linear-gradient(to bottom, #1f2937 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </main>
  );
} 