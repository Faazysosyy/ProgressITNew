"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronLeft, Server, Code, Database, Globe, Cloud, Layout } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import { useTranslation } from "@/lib/useTranslation";

export default function Technologies() {
  const { t } = useTranslation();
  
  // Ref for the particle canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // State for animations
  const [shootingLines, setShootingLines] = useState(false);
  const [rocketLaunch, setRocketLaunch] = useState(false);
  const [startCompleted, setStartCompleted] = useState(false);
  const [roadmapRevealed, setRoadmapRevealed] = useState(false);
  const [activeLines, setActiveLines] = useState<{[key: string]: boolean}>({
    cyan: false,
    magenta: false,
    yellow: false,
    green: false,
    blue: false,
    orange: false
  });
  
  // Add style element to the document
  useEffect(() => {
    // Create style element for both rocket and card animations
    const styleElement = document.createElement('style');
    styleElement.id = 'tech-animations';
    
    // Combine styles for all animations
    const combinedStyles = `
      ${rocketStyles}
      
      /* Card animations */
      .scanlines {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: repeating-linear-gradient(
          to bottom,
          transparent 0%,
          rgba(255, 255, 255, 0.05) 0.5%,
          transparent 1%
        );
        background-size: 100% 8px;
        animation: scanlines 8s linear infinite;
        pointer-events: none;
        /* opacity: 0.1; */ /* Managed by JS or new CSS */
        /* transition: opacity 0.3s ease; */
      }
      
      /* @keyframes scanlines { ... } */ /* Keep if still used, or remove if new animations replace */
      
      /* .group:hover .scanlines { opacity: 0.3; } */
      
      .technology-card {
        transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
      }
      
      .technology-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.3); /* Existing hover */
      }
      
      .group:hover .border {
        opacity: 1 !important;
        box-shadow: 0 0 15px 2px rgba(124, 58, 237, 0.3) !important;
      }
      
      .group:hover .h-0\\.5 {
        width: 100% !important;
      }
      
      .group:hover .opacity-20 {
        opacity: 0.4 !important;
      }
      
      .drop-shadow-glow-sm {
        filter: drop-shadow(0 0 2px rgba(124, 58, 237, 0.5));
      }
      
      .drop-shadow-glow-lg {
        filter: drop-shadow(0 0 5px rgba(124, 58, 237, 0.8));
      }
      
      .text-transparent.bg-clip-text {
        -webkit-background-clip: text;
        background-clip: text;
      }
      
      @keyframes lightSweep {
        0% { transform: translateX(-100%); opacity: 0; }
        50% { transform: translateX(100%); opacity: 0.3; }
        100% { transform: translateX(100%); opacity: 0; }
      }
      
      .card-highlight {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.1), transparent);
        opacity: 0;
        transform: translateX(-100%);
      }
      
      .group:hover .card-highlight {
        animation: lightSweep 2s ease-in-out;
      }
      
      /* NEW CSS FOR 12 CIRCLE ANIMATIONS */
      .tech-grid-animation-host .dot {
        position: absolute;
        border-radius: 50%;
        /* Default background is set by JS per theme */
      }
      
      /* 1. Pulsating Circles */
      .tech-grid-animation-host .pulse-dot {
        opacity: 0;
        transform-origin: center;
        animation: pulseFadeIn 3s infinite ease-in-out;
      }
      @keyframes pulseFadeIn {
        0% {
          opacity: 0;
          transform: scale(0.2);
        }
        40%,
        60% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(0.2);
        }
      }
      
      /* 2. Rotating Orbits */
      .tech-grid-animation-host .orbit-container {
        position: absolute;
        width: 100%; /* Will be contained by host */
        height: 100%;
        border-radius: 50%;
        transform-style: preserve-3d;
        animation: rotateOrbitAnim 8s infinite linear; /* Renamed to avoid conflict */
      }
      @keyframes rotateOrbitAnim {
        to {
          transform: rotateZ(360deg);
        }
      }
      
      /* 3. Sequential Rings */
      /* .sequential-dot uses specific animation via JS style.animation */
      /* Keyframes for Sequential Rings (if .sequential-dot needs it directly) */
      @keyframes expandRing {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        20% {
          transform: scale(1);
          opacity: 1;
        }
        40%,
        100% {
          transform: scale(1.1);
          opacity: 0;
        }
      }
      .tech-grid-animation-host .sequential-dot {
          /* animation: expandRing 3s infinite; Applied by JS */ 
      }
      
      /* 4. Concentric Rotations */
      .tech-grid-animation-host .concentric-container {
        position: absolute;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
      }
      .tech-grid-animation-host .concentric-ring {
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transform-style: preserve-3d;
        animation: rotateRingAnim linear infinite; /* Renamed */
      }
      @keyframes rotateRingAnim {
        to {
          transform: rotate(360deg);
        }
      }
      
      /* 5. Circular Waves */
      .tech-grid-animation-host .circular-wave-dot {
        animation: circularWaveAnim 3s infinite ease-in-out; /* Renamed */
        transform-origin: center;
      }
      @keyframes circularWaveAnim {
        0% {
          transform: scale(0.7);
          opacity: 0.3;
        }
        50% {
          transform: scale(1.2);
          opacity: 1;
        }
        100% {
          transform: scale(0.7);
          opacity: 0.3;
        }
      }
      
      /* 6. Expanding Lines */
      .tech-grid-animation-host .line-container {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: rotateLinesAnim 8s infinite linear; /* Renamed */
        transform-origin: center;
      }
      @keyframes rotateLinesAnim {
        to {
          transform: rotate(360deg);
        }
      }
      .tech-grid-animation-host .expanding-line {
        position: absolute;
        height: 1px; /* Can be themed */
        left: 50%;
        top: 50%;
        transform-origin: left center;
        /* background: rgba(255, 255, 255, 0.3); themed by JS */
        animation: expandLineAnim 4s infinite ease-in-out; /* Renamed */
      }
      @keyframes expandLineAnim {
        0% {
          width: 0;
          opacity: 0;
        }
        20%,
        80% {
          width: 40%; /* Make width relative or smaller fixed */
          opacity: 1;
        }
        100% {
          width: 0;
          opacity: 0;
        }
      }
       .tech-grid-animation-host .expanding-line .dot {
          left: calc(100% - 3px); /* Position dot at the end of its parent line */
          top: calc(50% - 1.5px); /* Adjust based on dot size */
      }
      
      
      /* 7. Breathing Grid */
      .tech-grid-animation-host .breathing-dot {
        animation: breatheAnim 4s infinite cubic-bezier(0.4, 0, 0.2, 1); /* Renamed */
        transform-origin: center;
      }
      @keyframes breatheAnim {
        0% {
          transform: scale(0.8);
          opacity: 0.3;
        }
        50% {
          transform: scale(1.3);
          opacity: 1;
        }
        100% {
          transform: scale(0.8);
          opacity: 0.3;
        }
      }
      
      /* 8. Ripple Effect */
      .tech-grid-animation-host .ripple-container {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .tech-grid-animation-host .ripple-ring {
        position: absolute;
        /* border: 1px solid rgba(255, 255, 255, 0.3); themed by JS */
        border-width: 1px;
        border-style: solid;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        animation: rippleAnim 4s infinite cubic-bezier(0, 0.5, 0.5, 1); /* Renamed */
      }
      @keyframes rippleAnim {
        0% {
          width: 0;
          height: 0;
          opacity: 1;
        }
        100% {
          width: 100%; /* Expand to container size */
          height: 100%;
          opacity: 0;
        }
      }
      .tech-grid-animation-host .ripple-wave-dot {
        /* position: absolute; - already a .dot */
        /* border-radius: 50%; */
        /* background: #fff; */
        transform-origin: center;
        animation: rippleWaveAnim 1s infinite ease-in-out; /* Renamed */
      }
      @keyframes rippleWaveAnim {
        0%,
        100% {
          transform: scale(0.8);
          opacity: 0.3;
        }
        50% {
          transform: scale(1.8);
          opacity: 1;
        }
      }
      
      /* 9. Fibonacci Spiral */
      .tech-grid-animation-host .fibonacci-container {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: rotateSlowAnim 30s infinite linear; /* Renamed */
        transform-origin: center;
      }
      @keyframes rotateSlowAnim {
        to {
          transform: rotate(360deg);
        }
      }
      .tech-grid-animation-host .fibonacci-dot {
        /* position: absolute; .dot class */
        /* border-radius: 50%; */
        /* background: #fff; */
        animation: fibPulseAnim 3s infinite ease-in-out; /* Renamed */
      }
      @keyframes fibPulseAnim {
        0%,
        100% {
          opacity: 0.2;
          transform: scale(0.8);
        }
        50% {
          opacity: 1;
          transform: scale(1.2);
        }
      }
      
      /* 10. Halftone Gradient */
      .tech-grid-animation-host .halftone-container {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: rotateSlowHalftoneAnim 20s infinite linear; /* Renamed and distinct */
        transform-origin: center;
      }
      @keyframes rotateSlowHalftoneAnim {
        to {
          transform: rotate(360deg);
        }
      }
      .tech-grid-animation-host .halftone-dot {
        animation: halftoneFadeAnim 4s infinite ease-in-out; /* Renamed */
      }
      @keyframes halftoneFadeAnim {
        0%,
        100% {
          opacity: 0.3;
          transform: scale(0.5);
        }
        50% {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      /* 11. Silver Spiral */
      .tech-grid-animation-host .silver-container {
        position: absolute;
        width: 100%;
        height: 100%;
        animation: rotateSlowSilverAnim 25s infinite reverse linear; /* Renamed */
        transform-origin: center;
      }
      @keyframes rotateSlowSilverAnim { /* Distinct name if used by other rotateSlow types */
        to {
          transform: rotate(360deg);
        }
      }
      .tech-grid-animation-host .silver-dot {
        animation: silverPulseAnim 3s infinite ease-in-out; /* Renamed */
      }
      @keyframes silverPulseAnim {
        0%,
        100% {
          opacity: 0.2;
          transform: scale(0.7);
        }
        50% {
          opacity: 1;
          transform: scale(1.3);
        }
      }
      /* Sunflower Spiral (12) uses SMIL, no extra CSS needed beyond .dot if used for fallback */

      /* Ensure card text content remains visible */
      .tech-card-content-wrapper {
        opacity: 1 !important;
        visibility: visible !important;
        position: relative !important; /* Reinforce existing style */
        z-index: 10 !important; /* Reinforce existing style */
        overflow: visible !important; /* Prevent content clipping */
        background-color: transparent !important; /* Ensure no opaque background covers text */
      }
      .tech-card-content-wrapper > div {
        opacity: 1 !important;
        visibility: visible !important;
      }
      .tech-card-content-wrapper h3,
      .tech-card-content-wrapper p,
      .tech-card-content-wrapper span,
      .tech-card-content-wrapper div {
        opacity: 1 !important;
        visibility: visible !important;
        color: inherit !important; /* Ensure text color isn't made transparent or same as bg */
      }
    `;
    
    styleElement.innerHTML = combinedStyles;
    document.head.appendChild(styleElement);
    
    // Preload required images
    const preloadImages = [
      '/images/grid-pattern.svg',
      '/circuit-pattern.svg',
      '/data-pattern.png'
    ];

    preloadImages.forEach(imageSrc => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = imageSrc;
      link.as = 'image';
      document.head.appendChild(link);
    });
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(styleElement);
      
      // Remove preload links on unmount
      document.querySelectorAll('link[rel="preload"][as="image"]').forEach(link => {
        document.head.removeChild(link);
      });
    };
  }, []);
  
  // Frontend track items for roadmap
  const frontendTrack = [
    { id: 'strategicPlanning', name: 'Strategic Planning', duration: 'week 1-2' },
    { id: 'uxuiDesign', name: 'UX/UI Design', duration: 'week 3-4' },
    { id: 'frontendDevelopment', name: 'Frontend Development', duration: 'week 5-8' },
    { id: 'testing', name: 'Testing', duration: 'week 9' },
    { id: 'deployment', name: 'Deployment', duration: 'week 10' },
    { id: 'userSupport', name: 'User Support', duration: 'ongoing' }
  ];

  // Backend track items for roadmap
  const backendTrack = [
    { id: 'technicalArchitecture', name: 'Technical Architecture', duration: 'week 1-2' },
    { id: 'databaseDesign', name: 'Database Design', duration: 'week 3' },
    { id: 'backendDevelopment', name: 'Backend Development', duration: 'week 4-7' },
    { id: 'apiIntegration', name: 'API Integration', duration: 'week 8' },
    { id: 'securityImplementation', name: 'Security Implementation', duration: 'week 9' },
    { id: 'performanceOptimization', name: 'Performance Optimization', duration: 'week 10-12' }
  ];
  
  // Initialize controls for animations
  const roadmapControls = useAnimation();
  
  // Set up intersection observer for roadmap
  const [roadmapRef, roadmapInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Start animation when the roadmap comes into view
  useEffect(() => {
    if (roadmapInView) {
      roadmapControls.start('visible');
      setRoadmapRevealed(true);
    }
  }, [roadmapControls, roadmapInView]);

  // Animation variants for roadmap
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };
  
  useEffect(() => {
    // Particle animation setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas to full width/height
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Create particles
    const particles: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }[] = [];
    
    for (let i = 0; i < 100; i++) {
      const colors = ['rgba(59, 130, 246, 0.2)', 'rgba(139, 92, 246, 0.2)', 'rgba(6, 182, 212, 0.2)'];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Connect nearby particles with lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Our technologies data
  const technologies = [
    {
      name: "ASP.NET Development Services",
      description: "Enterprise-grade web applications built on Microsoft's robust .NET framework. Our ASP.NET solutions deliver exceptional performance, security, and scalability for businesses requiring mission-critical systems.",
      icon: <Server className="w-10 h-10" />,
      color: "from-blue-500 to-blue-400"
    },
    {
      name: "React.js",
      description: "Dynamic, responsive user interfaces that captivate and engage your audience. Our React expertise creates seamless, interactive experiences that optimize user engagement while maintaining blazing-fast performance.",
      icon: <Code className="w-10 h-10" />,
      color: "from-cyan-500 to-cyan-400"
    },
    {
      name: "Node.js",
      description: "Scalable, efficient backend systems that power modern web applications. Our Node.js implementations provide real-time capabilities, microservices architecture, and event-driven programming for optimal performance.",
      icon: <Server className="w-10 h-10" />,
      color: "from-green-500 to-green-400"
    },
    {
      name: "Angular",
      description: "Comprehensive enterprise-ready frontend solutions with TypeScript-powered reliability. Our Angular applications feature robust architecture, modular design, and comprehensive testing for bulletproof enterprise systems.",
      icon: <Layout className="w-10 h-10" />,
      color: "from-red-500 to-red-400"
    },
    {
      name: "AWS / Azure Cloud Solutions",
      description: "Optimized cloud infrastructure that scales with your business needs. Our cloud expertise ensures maximum uptime, cost efficiency, and security while leveraging cutting-edge services for competitive advantage.",
      icon: <Cloud className="w-10 h-10" />,
      color: "from-purple-500 to-purple-400"
    },
    {
      name: "Solana / ERC20 Development",
      description: "Cutting-edge blockchain solutions with high-performance smart contracts and decentralized applications. Our specialized Web3 team builds next-generation tokenized systems, NFT marketplaces, and DeFi platforms that define the future of digital assets.",
      icon: <Globe className="w-10 h-10" />,
      color: "from-indigo-500 via-purple-500 to-pink-500",
      featured: true
    }
  ];

  // Styles for rocket and animations
  const rocketStyles = `
    .rocket {
      position: absolute;
      bottom: -300px;
      width: 80px;
      left: calc(50% - 40px);
      z-index: 5;
      transition: transform 2s cubic-bezier(0.3, 0, 0.3, 1);
      transform: translateY(0);
      opacity: 0;
      pointer-events: none;
    }
    
    .rocket.launch {
      transform: translateY(-2000px);
      opacity: 1;
    }
    
    .rocket-body {
      width: 80px;
      left: calc(50% - 50px);
      animation: bounce 0.5s infinite;
    }
    
    .body {
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      height: 180px;
      width: 80px;
      position: relative;
      border-top-right-radius: 100%;
      border-top-left-radius: 100%;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
      border-top: 5px solid #4c6ef5;
      box-shadow: 0 0 15px #4c6ef5;
    }
    
    .rocket-body:before {
      content: '';
      position: absolute;
      left: calc(50% - 24px);
      width: 48px;
      height: 13px;
      background-color: #161b22;
      bottom: -13px;
      border-bottom-right-radius: 60%;
      border-bottom-left-radius: 60%;
    }
    
    .window {
      position: absolute;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: linear-gradient(135deg, #a742f5 0%, #5e60ce 100%);
      left: calc(50% - 20px);
      top: 40px;
      border: 5px solid #252538;
      box-shadow: 0 0 10px #a742f5;
    }
    
    .fin {
      position: absolute;
      z-index: -100;
      height: 55px;
      width: 50px;
      background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
      box-shadow: 0 0 10px #4361ee;
    }
    
    .fin-left {
      left: -30px;
      top: calc(100% - 55px);
      border-top-left-radius: 80%;
      border-bottom-left-radius: 20%;
    }
    
    .fin-right {
      right: -30px;
      top: calc(100% - 55px);
      border-top-right-radius: 80%;
      border-bottom-right-radius: 20%;
    }
    
    .exhaust-flame {
      position: absolute;
      top: 98%;
      width: 40px;
      background: linear-gradient(to bottom, transparent 0%, #4cc9f0 20%, #f72585 60%, #ff5e00 100%);
      height: 180px;
      left: calc(50% - 20px);
      animation: exhaust 0.2s infinite;
      box-shadow: 0 0 30px #f72585;
      border-radius: 0 0 20px 20px;
      filter: blur(2px);
      transform-origin: top;
      transform: scaleX(0.8);
      z-index: -1;
    }
    
    .rocket.launch .exhaust-flame {
      height: 280px;
      animation: exhaust 0.1s infinite, flame-stretch 1s ease-out forwards;
    }
    
    @keyframes flame-stretch {
      0% { height: 180px; }
      50% { height: 250px; }
      100% { height: 280px; }
    }
    
    .exhaust-fumes {
      position: relative;
      width: 120px;
      left: calc(50% - 60px);
      z-index: -2;
    }
    
    .exhaust-fumes li {
      width: 60px;
      height: 60px;
      background-color: #4cc9f0;
      list-style: none;
      position: absolute;
      border-radius: 100%;
      opacity: 0;
      animation: fumes 5s infinite;
      filter: blur(8px);
    }
    
    .rocket.launch .exhaust-fumes li {
      animation-duration: 3s;
    }
    
    .exhaust-fumes li:nth-child(odd) {
      background-color: #4361ee;
    }
    
    .exhaust-fumes li:nth-child(even) {
      background-color: #ff5e00;
    }
    
    .exhaust-fumes li:nth-child(3n) {
      background-color: #f72585;
    }
    
    .exhaust-fumes li:first-child {
      width: 200px;
      height: 200px;
      bottom: -300px;
      animation: fumes2 5s infinite;
    }
    
    .exhaust-fumes li:nth-child(2) {
      width: 150px;
      height: 150px;
      bottom: -300px;
      animation: fumes2 5s infinite;
    }
    
    .exhaust-fumes li:nth-child(3) {
      width: 120px;
      height: 120px;
      bottom: -100px;
      animation: fumes 5s infinite 1s;
    }
    
    .exhaust-fumes li:nth-child(4) {
      width: 100px;
      height: 100px;
      bottom: -50px;
      animation: fumes2 5s infinite 2s;
    }
    
    .exhaust-fumes li:nth-child(5) {
      width: 130px;
      height: 130px;
      bottom: -300px;
      animation: fumes 5s infinite 3s;
    }
    
    .exhaust-fumes li:nth-child(6) {
      width: 200px;
      height: 200px;
      bottom: -200px;
      animation: fumes2 5s infinite 4s;
    }
    
    .exhaust-fumes li:nth-child(7) {
      width: 100px;
      height: 100px;
      bottom: -200px;
      animation: fumes 5s infinite 5s;
    }
    
    .exhaust-fumes li:nth-child(8) {
      width: 100px;
      height: 100px;
      bottom: -200px;
      animation: fumes2 5s infinite 6s;
    }
    
    .exhaust-fumes li:nth-child(9) {
      width: 200px;
      height: 200px;
      bottom: -100px;
      left: -50px;
      animation: fumes 5s infinite 7s;
    }
    
    .star {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
      opacity: 0;
      transition: opacity 0.5s ease-out;
    }
    
    .star.show {
      opacity: 1;
    }
    
    .star li {
      list-style: none;
      position: absolute;
      border-radius: 50%;
      background-color: #4cc9f0;
      box-shadow: 0 0 10px 2px rgba(76, 201, 240, 0.8);
      animation: twinkle 5s infinite;
    }
    
    .star li:nth-child(even) {
      background-color: #a742f5;
      box-shadow: 0 0 10px 2px rgba(167, 66, 245, 0.8);
    }
    
    .star li:nth-child(1) {
      width: 6px;
      height: 6px;
      top: 10%;
      left: 20%;
      animation-delay: 0.5s;
    }
    
    .star li:nth-child(2) {
      width: 4px;
      height: 4px;
      top: 30%;
      left: 80%;
      animation-delay: 1s;
    }
    
    .star li:nth-child(3) {
      width: 7px;
      height: 7px;
      top: 40%;
      left: 25%;
      animation-delay: 1.5s;
    }
    
    .star li:nth-child(4) {
      width: 5px;
      height: 5px;
      top: 20%;
      left: 70%;
      animation-delay: 2s;
    }
    
    .star li:nth-child(5) {
      width: 3px;
      height: 3px;
      top: 60%;
      left: 15%;
      animation-delay: 2.5s;
    }
    
    .star li:nth-child(6) {
      width: 8px;
      height: 8px;
      top: 50%;
      left: 85%;
      animation-delay: 3s;
    }
    
    .star li:nth-child(7) {
      width: 5px;
      height: 5px;
      top: 75%;
      left: 60%;
      animation-delay: 3.5s;
    }
    
    .star li:nth-child(8) {
      width: 4px;
      height: 4px;
      top: 35%;
      left: 40%;
      animation-delay: 4s;
    }
    
    .shooting-line {
      position: absolute;
      left: 50%;
      top: 58px; /* Precise adjustment to match exactly at START button bottom */
      width: 1px; /* Thin line */
      height: 0;
      transform: translateX(-50%);
      z-index: 15; /* Increased from 11 to be above button content but below button clickable area */
      border-radius: 1px;
      opacity: 0;
      transition: height 1.5s cubic-bezier(0.22, 0.61, 0.36, 1), opacity 0.8s ease-in-out;
    }
    
    .shooting-line.active {
      height: calc(100% - 73px); /* Adjusted to reach LAUNCH button */
      opacity: 1;
    }
    
    .cyan { background-color: #06b6d4; box-shadow: 0 0 10px #06b6d4; }
    .magenta { background-color: #d946ef; box-shadow: 0 0 10px #d946ef; }
    .yellow { background-color: #facc15; box-shadow: 0 0 10px #facc15; }
    .green { background-color: #10b981; box-shadow: 0 0 10px #10b981; }
    .blue { background-color: #3b82f6; box-shadow: 0 0 10px #3b82f6; }
    .orange { background-color: #f97316; box-shadow: 0 0 10px #f97316; }
    
    @keyframes fumes {
      0% {
        opacity: 0;
        transform: translateY(0) scale(0.5);
      }
      25% {
        opacity: 0.6;
        transform: translateY(40px) scale(1);
      }
      50% {
        transform: translateY(80px) translateX(10px) scale(1.5);
        opacity: 0.4;
      }
      75% {
        transform: translateY(120px) translateX(-10px) scale(2);
        opacity: 0.2;
      }
      100% {
        background-color: transparent;
        transform: translateY(160px) scale(3);
        opacity: 0;
      }
    }
    
    @keyframes bounce {
      0% {
        transform: translate3d(0px, 0px, 0);
      }
      50% {
        transform: translate3d(0px, -5px, 0);
      }
      100% {
        transform: translate3d(0px, 0px, 0);
      }
    }
    
    @keyframes exhaust {
      0% {
        background-color: #4cc9f0;
        transform: scaleX(0.8) scaleY(0.9);
      }
      50% {
        background-color: #f72585;
        transform: scaleX(1) scaleY(1.1);
      }
      75% {
        background-color: #ff5e00;
        transform: scaleX(0.9) scaleY(1);
      }
    }
    
    @keyframes fumes2 {
      50% {
        transform: scale(1.1);
        background-color: transparent;
        opacity: 0.9;
      }
      51% {
        transform: scale(1.1);
        background-color: transparent;
        opacity: 0.9;
      }
      100% {
        background-color: transparent;
        transform: scale(3);
        opacity: 0;
        top: 100px;
      }
    }
    
    @keyframes twinkle {
      0% {
        opacity: 0.4;
        transform: scale(0.5);
      }
      50% {
        opacity: 1;
        transform: scale(1);
      }
      100% {
        opacity: 0.4;
        transform: scale(0.5);
      }
    }
    
    /* Grid card animations */
    .scanlines {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: repeating-linear-gradient(
        to bottom,
        transparent 0%,
        rgba(255, 255, 255, 0.05) 0.5%,
        transparent 1%
      );
      background-size: 100% 8px;
      animation: scanlines 8s linear infinite;
      pointer-events: none;
    }
    
    @keyframes scanlines {
      0% {
        background-position: 0 0;
      }
      100% {
        background-position: 0 100%;
      }
    }
    
    /* Ensure scanlines are visible on hover */
    .group:hover .scanlines {
      opacity: 0.4 !important;
    }
    
    .drop-shadow-glow-sm {
      filter: drop-shadow(0 0 2px rgba(124, 58, 237, 0.5));
    }
    
    .drop-shadow-glow-lg {
      filter: drop-shadow(0 0 5px rgba(124, 58, 237, 0.8));
    }
    
    .group:hover .group-hover\\:drop-shadow-glow-lg {
      filter: drop-shadow(0 0 5px rgba(124, 58, 237, 0.8));
    }
    
    .group:hover .group-hover\\:w-full {
      width: 100% !important;
    }

    /* Additional animation styles for grid cards */
    .technology-grid-card {
      transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    }
    
    .technology-grid-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px -5px rgba(6, 182, 212, 0.2);
    }
    
    .connector-line {
      transition: width 0.5s ease-out;
      width: 0;
    }
    
    .group:hover .connector-line {
      width: 100%;
    }
    
    .card-circuit {
      opacity: 0.2;
      transition: opacity 0.3s ease-out;
    }
    
    .group:hover .card-circuit {
      opacity: 0.4;
    }
  `;
  
  // Function to handle START button click
  const handleStartClick = () => {
    setShootingLines(true);
    
    // Show lines in sequence
    const lineColors = ['cyan', 'magenta', 'yellow', 'green', 'blue', 'orange'];
    const lineDelay = 200; // ms between each line appearing
    const lineDuration = 2000; // ms each line stays visible
    
    // Activate each line in sequence
    lineColors.forEach((color, index) => {
      // Show the line
      setTimeout(() => {
        setActiveLines(prev => ({ ...prev, [color]: true }));
        
        // Hide the line after duration
        setTimeout(() => {
          setActiveLines(prev => ({ ...prev, [color]: false }));
        }, lineDuration);
      }, index * lineDelay);
    });
    
    // Enable the LAUNCH button after the lines animation finishes
    setTimeout(() => {
      setStartCompleted(true);
    }, 3000);
    
    // Reset the animation after all lines are done
    setTimeout(() => {
      setShootingLines(false);
      setActiveLines({
        cyan: false,
        magenta: false,
        yellow: false,
        green: false,
        blue: false,
        orange: false
      });
    }, 5000);
  };
  
  // Function to handle LAUNCH button click
  const handleLaunchClick = () => {
    if (!startCompleted) return;
    
    setRocketLaunch(true);
    
    // Reset the button state immediately
    setStartCompleted(false);
    
    // Reset the rocket animation after it completes
    setTimeout(() => {
      setRocketLaunch(false);
    }, 8000);
  };

  // Function copied from other pages
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

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Particle background */}
      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 opacity-50"
        style={{ pointerEvents: 'none', zIndex: -10 }} /* Ensure it's behind interactive elements */
      />
      
      <section className="pt-32 pb-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mb-8">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-blue-500 mb-6 transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              {t('technologies.backToHome')}
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text animate-gradient-x">
                {t('technologies.pageTitle')}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-6"
            >
              {t('technologies.pageDescription')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Technologies Grid Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          {/* FRONTEND SECTION */}
          <div className="mb-20">
            <motion.h3 
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-cyan-400">{t('technologies.sections.frontend')}</span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* React/Next.js */}
              <motion.div 
                className="technology-card relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-800/90 border border-gray-800/50 p-6 group hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {/* Tag */}
                <div className="text-xs text-cyan-500/70 font-mono mb-2">&lt;/245&gt;</div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 rounded-full blur-xl transition-all duration-300 group-hover:scale-110"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative z-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.25L.75 8.4l1.95 16.95L12 19.5l9.3 5.85L23.25 8.4L12 2.25zM12 2.25L12 19.5l9.3 5.85L23.25 8.4L12 2.25z" fillOpacity="0.4" />
                      <path d="M12 5.85l-6.75 15.6h2.55l1.35-3.45h5.7l1.35 3.45h2.55L12 5.85zm1.95 9.9h-3.9l1.95-4.65 1.95 4.65z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">{t('technologies.cards.reactNextjs.title')}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('technologies.cards.reactNextjs.description')}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
              </motion.div>

              {/* Angular/TypeScript */}
              <motion.div 
                className="technology-card relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-800/90 border border-gray-800/50 p-6 group hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Tag */}
                <div className="text-xs text-cyan-500/70 font-mono mb-2">&lt;/326&gt;</div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 rounded-full blur-xl transition-all duration-300 group-hover:scale-110"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative z-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.25L.75 8.4l1.95 16.95L12 19.5l9.3 5.85L23.25 8.4L12 2.25z" />
                      <path d="M12 2.25L12 19.5l9.3 5.85L23.25 8.4L12 2.25z" fillOpacity="0.4" />
                      <path d="M12 5.85l-6.75 15.6h2.55l1.35-3.45h5.7l1.35 3.45h2.55L12 5.85zm1.95 9.9h-3.9l1.95-4.65 1.95 4.65z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">{t('technologies.cards.angularTypescript.title')}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('technologies.cards.angularTypescript.description')}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
              </motion.div>

              {/* Vue/Nuxt */}
              <motion.div 
                className="technology-card relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-800/90 border border-gray-800/50 p-6 group hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Tag */}
                <div className="text-xs text-cyan-500/70 font-mono mb-2">&lt;/189&gt;</div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 rounded-full blur-xl transition-all duration-300 group-hover:scale-110"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative z-10 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1.5l9 16h-18l9-16z" />
                      <path d="M12 8.5l4 9h-8l4-9z" fillOpacity="0.4" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">{t('technologies.cards.vueNuxt.title')}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('technologies.cards.vueNuxt.description')}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            </div>
          </div>

          {/* BACKEND & DATABASES SECTION */}
          <div className="mb-20">
            <motion.h3 
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-purple-400">{t('technologies.sections.backendDatabases')}</span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Backend Mastery */}
              <motion.div 
                className="technology-card relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-800/90 border border-gray-800/50 p-6 group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {/* Tag */}
                <div className="text-xs text-purple-500/70 font-mono mb-2">&lt;/572&gt;</div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 rounded-full blur-xl transition-all duration-300 group-hover:scale-110"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative z-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1.5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                      <path d="M9 9h6v2h-6z" />
                      <path d="M9 13h6v2h-6z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">{t('technologies.cards.backendMastery.title')}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('technologies.cards.backendMastery.description')}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-fuchsia-400 group-hover:w-full transition-all duration-500"></div>
              </motion.div>

              {/* Database Expertise */}
              <motion.div 
                className="technology-card relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-800/90 border border-gray-800/50 p-6 group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Tag */}
                <div className="text-xs text-purple-500/70 font-mono mb-2">&lt;/831&gt;</div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 rounded-full blur-xl transition-all duration-300 group-hover:scale-110"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative z-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2c-4.42 0-8 1.79-8 4v12c0 2.21 3.58 4 8 4s8-1.79 8-4V6c0-2.21-3.58-4-8-4z" />
                      <path d="M12 6c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4V2c0 2.21-3.58 4-8 4z" fillOpacity="0.4" />
                      <path d="M12 11c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4V7c0 2.21-3.58 4-8 4z" fillOpacity="0.4" />
                      <path d="M12 16c-4.42 0-8-1.79-8-4v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4z" fillOpacity="0.4" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">{t('technologies.cards.databaseExpertise.title')}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('technologies.cards.databaseExpertise.description')}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-fuchsia-400 group-hover:w-full transition-all duration-500"></div>
              </motion.div>

              {/* API Development */}
              <motion.div 
                className="technology-card relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-800/90 border border-gray-800/50 p-6 group hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Tag */}
                <div className="text-xs text-purple-500/70 font-mono mb-2">&lt;/418&gt;</div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/20 rounded-full blur-xl transition-all duration-300 group-hover:scale-110"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative z-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300">{t('technologies.cards.apiDevelopment.title')}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('technologies.cards.apiDevelopment.description')}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-fuchsia-400 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            </div>
          </div>

          {/* WEB3 & BLOCKCHAIN SECTION */}
          <div className="mb-20">
            <motion.h3 
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-pink-400">{t('technologies.sections.web3Blockchain')}</span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Smart Contract Development */}
              <motion.div 
                className="technology-card relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-800/90 border border-gray-800/50 p-6 group hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                {/* Tag */}
                <div className="text-xs text-pink-500/70 font-mono mb-2">&lt;/721&gt;</div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/20 rounded-full blur-xl transition-all duration-300 group-hover:scale-110"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative z-10 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fillOpacity="0.2" />
                      <path d="M12 19a7 7 0 100-14 7 7 0 000 14z" fillOpacity="0.3" />
                      <path d="M12 6v12M7.5 12h9" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-pink-400 group-hover:text-pink-300 transition-colors duration-300">{t('technologies.cards.smartContractDev.title')}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('technologies.cards.smartContractDev.description')}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
              </motion.div>

              {/* DApp Architecture */}
              <motion.div 
                className="technology-card relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-800/90 border border-gray-800/50 p-6 group hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Tag */}
                <div className="text-xs text-pink-500/70 font-mono mb-2">&lt;/512&gt;</div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/20 rounded-full blur-xl transition-all duration-300 group-hover:scale-110"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative z-10 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3 3H9V9H3V3Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M3 14H9V20H3V14Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 3H20V9H14V3Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M14 14H20V20H14V14Z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-pink-400 group-hover:text-pink-300 transition-colors duration-300">{t('technologies.cards.dappArchitecture.title')}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('technologies.cards.dappArchitecture.description')}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
              </motion.div>

              {/* Tokenomics & NFT Solutions */}
              <motion.div 
                className="technology-card relative overflow-hidden rounded-xl bg-gradient-to-b from-gray-900 to-gray-800/90 border border-gray-800/50 p-6 group hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Tag */}
                <div className="text-xs text-pink-500/70 font-mono mb-2">&lt;/1024&gt;</div>
                
                <div className="flex items-center justify-center mb-4">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/20 rounded-full blur-xl transition-all duration-300 group-hover:scale-110"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 relative z-10 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13 2.06v4.84c6.36.59 11.36 5.24 11.92 11.53h-5c-.53-4.04-3.87-7.17-7.92-7.28v5.15l-9-7.12 9-7.12z" />
                    </svg>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2 text-pink-400 group-hover:text-pink-300 transition-colors duration-300">{t('technologies.cards.tokenomicsNft.title')}</h4>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {t('technologies.cards.tokenomicsNft.description')}
                </p>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Roadmap Visualization - Futuristic Version */}
      <section className="py-20 relative z-10 overflow-visible bg-black">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.15),transparent_70%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-3/4 aspect-square rounded-full bg-purple-900/5 blur-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-full grid grid-cols-6 grid-rows-3 gap-1 opacity-10">
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="border-[0.5px] border-blue-500/20"></div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0 }}
            animate={roadmapRevealed ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            ref={roadmapRef}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
                {t('technologies.roadmap.title')}
              </span>
              <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-blue-500/0 via-indigo-500/50 to-purple-500/0"></div>
              <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-blue-500/40"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-purple-500/40"></div>
            </h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={roadmapRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-400 mb-16"
            >
              {t('technologies.roadmap.description')}
            </motion.p>
          </motion.div>
          
          {/* Interactive Roadmap Visualization */}
          <div className="relative cyberpunk-roadmap" style={{ position: 'relative', zIndex: 5 }}>
            {/* Shooting Lines */}
            <div className={`shooting-line cyan ${shootingLines && activeLines.cyan ? 'active' : ''}`} style={{ transitionDelay: '0s' }}></div>
            <div className={`shooting-line magenta ${shootingLines && activeLines.magenta ? 'active' : ''}`} style={{ transitionDelay: '0.1s' }}></div>
            <div className={`shooting-line yellow ${shootingLines && activeLines.yellow ? 'active' : ''}`} style={{ transitionDelay: '0.2s' }}></div>
            <div className={`shooting-line green ${shootingLines && activeLines.green ? 'active' : ''}`} style={{ transitionDelay: '0.3s' }}></div>
            <div className={`shooting-line blue ${shootingLines && activeLines.blue ? 'active' : ''}`} style={{ transitionDelay: '0.4s' }}></div>
            <div className={`shooting-line orange ${shootingLines && activeLines.orange ? 'active' : ''}`} style={{ transitionDelay: '0.5s' }}></div>
            
            {/* Rocket and Stars - Now positioned outside of the roadmap container */}
            <div className={`star ${rocketLaunch ? 'show' : ''}`} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 4 }}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            
            <div className={`rocket ${rocketLaunch ? 'launch' : ''}`} style={{ position: 'fixed', bottom: '-300px', left: 'calc(50% - 40px)', zIndex: 5 }}>
              <div className="rocket-body">
                <div className="body"></div>
                <div className="fin fin-left"></div>
                <div className="fin fin-right"></div>
                <div className="window"></div>
              </div>
              <div className="exhaust-flame"></div>
              <ul className="exhaust-fumes">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            
            {/* START marker */}
            <div
              className="roadmap-marker start-marker mx-auto mb-16 relative"
              // initial={{ opacity: 0, scale: 0.8 }}
              // animate={roadmapRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              // transition={{ duration: 0.5 }}
            >
              <div className="futuristic-button-wrapper relative z-20 mx-auto w-max">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl"></div>
                <button 
                  onClick={handleStartClick}
                  className="futuristic-button relative z-20 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-900/80 to-blue-900/80 text-cyan-300 font-bold tracking-wider border border-cyan-500/30 flex items-center justify-center gap-2 overflow-hidden shadow-lg shadow-cyan-500/20"
                >
                  <span className="relative z-20 uppercase tracking-widest text-sm">{t('technologies.roadmap.start')}</span>
                  <div className="absolute inset-0 w-full h-full bg-[url('/circuit-pattern.svg')] bg-cover opacity-10"></div>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                </button>
              </div>
              {/* Connection element - precise positioning to connect with shooting lines */}
              <div className="absolute left-1/2 top-full w-px h-16 bg-gradient-to-b from-cyan-400 to-transparent transform -translate-x-1/2"></div>
              <div className="absolute left-1/2 top-[calc(100%+2px)] w-6 h-6 rounded-full bg-cyan-400/30 transform -translate-x-1/2 -translate-y-1/2 blur-md"></div>
              <div className="absolute left-1/2 top-[calc(100%+2px)] w-2 h-2 rounded-full bg-cyan-400 transform -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-cyan-500/50"></div>
            </div>
            
            {/* Main timeline */}
            <div className="cyberpunk-timeline relative grid md:grid-cols-2 gap-8 md:gap-0">
              {/* Timeline center elements */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent transform -translate-x-1/2 z-10"></div>
              
              {/* Frontend Track */}
              <div className="frontend-track relative">
                <motion.h3 
                  className="mb-10 text-2xl font-bold text-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={roadmapRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="cyber-glitch-text relative">
                    <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                      {t('technologies.roadmap.frontendProcess')}
                    </span>
                    <span className="absolute -left-1 top-0 text-cyan-500/10">{t('technologies.roadmap.frontendProcess')}</span>
                    <span className="absolute -right-1 top-0 text-blue-500/10">{t('technologies.roadmap.frontendProcess')}</span>
                  </span>
                </motion.h3>
                
                <div className="space-y-16">
                  {frontendTrack.map((item, index) => (
                    <motion.div 
                      key={item.id}
                      className="relative"
                      initial={{ opacity: 0, x: -30 }}
                      animate={roadmapRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex md:justify-end items-center">
                        <div className="cyberpunk-card relative w-full md:w-4/5 rounded-lg overflow-hidden">
                          {/* Animated border */}
                          <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-lg z-0"></div>
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full z-0"></div>
                          
                          {/* Background elements */}
                          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-md z-0"></div>
                          <div className="absolute inset-0 w-full h-full bg-[url('/circuit-pattern.svg')] bg-cover opacity-5 z-0"></div>
                          
                          {/* Content */}
                          <div className="relative p-6 z-10">
                            {/* Title with decorative elements */}
                            <div className="flex items-center mb-3">
                              <div className="h-6 w-2 bg-cyan-500/70 mr-3"></div>
                              <h4 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 text-transparent bg-clip-text">
                                {t(`technologies.roadmap.stages.${item.id}.name`)}
                              </h4>
                              <div className="ml-auto text-xs font-mono text-cyan-500/70">#{index + 1}</div>
                            </div>
                            
                            {/* Timeline phase */}
                            <div className="flex items-center mb-3">
                              <div className="px-3 py-1 rounded-full bg-cyan-900/40 border border-cyan-700/30 text-sm text-cyan-300">
                                {t('technologies.roadmap.phaseLabel')} {t(`technologies.roadmap.stages.${item.id}.duration`)}
                              </div>
                            </div>
                            
                            {/* Decorative data visualization */}
                            <div className="mt-3 pt-3 border-t border-cyan-700/20">
                              <div className="flex h-1 space-x-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <div 
                                    key={i} 
                                    className="flex-1 h-full rounded-full" 
                                    style={{ 
                                      background: `rgba(6, 182, 212, ${0.1 + (i * 0.15)})`,
                                      width: `${15 + i * 5}%`
                                    }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Connector to timeline */}
                        <div className="hidden md:block absolute right-0 top-1/2 h-px w-[10%] bg-gradient-to-r from-transparent to-cyan-500/50 transform -translate-y-1/2"></div>
                        
                        {/* Timeline node */}
                        <div className="hidden md:flex absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 z-20">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 shadow-lg shadow-cyan-500/30"></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Backend Track */}
              <div className="backend-track relative">
                <motion.h3 
                  className="mb-10 text-2xl font-bold text-center"
                  initial={{ opacity: 0, x: 20 }}
                  animate={roadmapRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="cyber-glitch-text relative">
                    <span className="relative z-10 bg-gradient-to-r from-fuchsia-400 to-purple-400 text-transparent bg-clip-text">
                      {t('technologies.roadmap.backendProcess')}
                    </span>
                    <span className="absolute -left-1 top-0 text-fuchsia-500/10">{t('technologies.roadmap.backendProcess')}</span>
                    <span className="absolute -right-1 top-0 text-purple-500/10">{t('technologies.roadmap.backendProcess')}</span>
                  </span>
                </motion.h3>
                
                <div className="space-y-16">
                  {backendTrack.map((item, index) => (
                    <motion.div 
                      key={item.id}
                      className="relative"
                      initial={{ opacity: 0, x: 30 }}
                      animate={roadmapRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex md:justify-start items-center">
                        <div className="cyberpunk-card relative w-full md:w-4/5 rounded-lg overflow-hidden">
                          {/* Animated border */}
                          <div className="absolute inset-0 border-2 border-purple-500/20 rounded-lg z-0"></div>
                          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-br-full z-0"></div>
                          
                          {/* Background elements */}
                          <div className="absolute inset-0 bg-gradient-to-bl from-gray-900/90 to-gray-800/90 backdrop-blur-md z-0"></div>
                          <div className="absolute inset-0 w-full h-full bg-[url('/circuit-pattern.svg')] bg-cover opacity-5 z-0"></div>
                          
                          <div className="absolute inset-0 bg-[url('/data-pattern.png')] bg-cover opacity-5 z-0"></div>
                          
                          {/* Content */}
                          <div className="relative p-6 z-10">
                            {/* Title with decorative elements */}
                            <div className="flex items-center mb-3">
                              <div className="h-6 w-2 bg-purple-500/70 mr-3"></div>
                              <h4 className="text-xl font-bold bg-gradient-to-r from-fuchsia-300 to-purple-300 text-transparent bg-clip-text">
                                {t(`technologies.roadmap.stages.${item.id}.name`)}
                              </h4>
                              <div className="ml-auto text-xs font-mono text-purple-500/70">#{index + 1}</div>
                            </div>
                            
                            {/* Timeline phase */}
                            <div className="flex items-center mb-3">
                              <div className="px-3 py-1 rounded-full bg-purple-900/40 border border-purple-700/30 text-sm text-purple-300">
                                {t('technologies.roadmap.phaseLabel')} {t(`technologies.roadmap.stages.${item.id}.duration`)}
                              </div>
                            </div>
                            
                            {/* Decorative data visualization */}
                            <div className="mt-3 pt-3 border-t border-purple-700/20">
                              <div className="flex h-1 space-x-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <div 
                                    key={i} 
                                    className="flex-1 h-full rounded-full" 
                                    style={{ 
                                      background: `rgba(168, 85, 247, ${0.1 + (i * 0.15)})`,
                                      width: `${15 + i * 5}%`
                                    }}
                                  ></div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Connector to timeline */}
                        <div className="hidden md:block absolute left-0 top-1/2 h-px w-[10%] bg-gradient-to-l from-transparent to-purple-500/50 transform -translate-y-1/2"></div>
                        
                        {/* Timeline node */}
                        <div className="hidden md:flex absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-r from-fuchsia-400 to-purple-400 shadow-lg shadow-purple-500/30"></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Connection lines across tracks */}
              {Array.from({ length: Math.min(frontendTrack.length, backendTrack.length) }).map((_, i) => (
                <motion.div 
                  key={i}
                  className="hidden md:block absolute left-1/2 transform -translate-x-1/2 z-5"
                  style={{ top: `${205 + i * 160}px` }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={roadmapRevealed ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                >
                  <div className="h-px w-[30%] mx-auto bg-gradient-to-r from-cyan-500/40 to-purple-500/40"></div>
                </motion.div>
              ))}
            </div>
            
            {/* LAUNCH marker */}
            <div
              className="roadmap-marker end-marker mx-auto mt-16 relative"
              // initial={{ opacity: 0, scale: 0.8 }}
              // animate={roadmapRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              // transition={{ duration: 0.5, delay: 1.2 }}
            >
              <div className="absolute left-1/2 bottom-full w-px h-16 bg-gradient-to-t from-purple-400 to-transparent"></div>
              <div className="futuristic-button-wrapper relative z-20 mx-auto w-max">
                <div className={`absolute inset-0 bg-gradient-to-r ${startCompleted ? 'from-purple-500/30 to-fuchsia-500/30' : 'from-gray-500/10 to-gray-700/10'} rounded-full blur-xl transition-all duration-500`}></div>
                <button 
                  onClick={handleLaunchClick}
                  className={`futuristic-button relative z-20 px-8 py-3 rounded-full ${startCompleted ? 'bg-gradient-to-r from-purple-900/80 to-fuchsia-900/80 text-purple-300 border-purple-500/30' : 'bg-gradient-to-r from-gray-900/60 to-gray-800/60 text-gray-500 border-gray-700/20 cursor-not-allowed'} font-bold tracking-wider border flex items-center justify-center gap-2 overflow-hidden shadow-lg transition-all duration-500`}
                >
                  <span className="relative z-20 uppercase tracking-widest text-sm">{t('technologies.roadmap.launch')}</span>
                  <div className="absolute inset-0 w-full h-full bg-[url('/circuit-pattern.svg')] bg-cover opacity-10"></div>
                  <div className={`absolute top-0 left-0 h-1 w-full ${startCompleted ? 'bg-gradient-to-r from-purple-400 to-fuchsia-400' : 'bg-gray-700'}`}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Grid Section */}
      <section className="py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                {t('technologies.innovation.title')}
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-gray-400"
            >
              {t('technologies.innovation.description')}
            </motion.p>
          </div>
          
          {/* Cyberpunk-style grid */}
          <div className="relative">
            {/* Overlay Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full bg-indigo-500/10 blur-3xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 bg-transparent rounded-xl overflow-hidden">
              {[
                {
                  code: 242,
                  key: "adaptiveInterfaces",
                  icon: "🔄",
                  color: "from-blue-400 to-cyan-400",
                  borderColor: "border-cyan-500/50"
                },
                {
                  code: 627,
                  key: "quantumArchitecture",
                  icon: "⚛️",
                  color: "from-purple-400 to-fuchsia-400",
                  borderColor: "border-fuchsia-500/50"
                },
                {
                  code: 675,
                  key: "neuralIntegration",
                  icon: "🧠",
                  color: "from-teal-400 to-blue-400",
                  borderColor: "border-blue-500/50"
                },
                {
                  code: 937,
                  key: "dataMesh",
                  icon: "🌐",
                  color: "from-cyan-400 to-blue-400",
                  borderColor: "border-blue-500/50"
                },
                {
                  code: 886,
                  key: "cyberneticSecurity",
                  icon: "🛡️",
                  color: "from-red-400 to-purple-400",
                  borderColor: "border-purple-500/50"
                },
                {
                  code: 727,
                  key: "digitalTwin",
                  icon: "👥",
                  color: "from-blue-400 to-indigo-400",
                  borderColor: "border-indigo-500/50"
                },
                {
                  code: 889,
                  key: "holographicInterfaces",
                  icon: "🔮",
                  color: "from-fuchsia-400 to-pink-400",
                  borderColor: "border-pink-500/50"
                },
                {
                  code: 646,
                  key: "edgeComputing",
                  icon: "⚡",
                  color: "from-amber-400 to-orange-400",
                  borderColor: "border-orange-500/50"
                },
                {
                  code: 739,
                  key: "syntheticMedia",
                  icon: "🎭",
                  color: "from-green-400 to-teal-400",
                  borderColor: "border-teal-500/50"
                },
                {
                  code: 738,
                  key: "quantumEncryption",
                  icon: "🔒",
                  color: "from-indigo-400 to-violet-400",
                  borderColor: "border-violet-500/50"
                },
                {
                  code: 574,
                  key: "augmentedDevelopment",
                  icon: "🤖",
                  color: "from-blue-400 to-sky-400",
                  borderColor: "border-sky-500/50"
                },
                {
                  code: 136,
                  key: "biodigitalInterfaces",
                  icon: "🧬",
                  color: "from-emerald-400 to-green-400",
                  borderColor: "border-green-500/50"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-gray-900/80 aspect-square relative group overflow-hidden rounded-lg border border-gray-800 hover:border-indigo-500/50 transition-all duration-500 technology-card"
                  data-card={item.code}
                >
                  {/* Animation host is inserted here by JS as first child, with z-index: 0 */}
                  
                  {/* Cyberpunk grid background (visual, low z-index implicitly) */}
                  <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-repeat opacity-5"></div>
                  
                  {/* Neon border effect (visual) */}
                  <div className={`absolute inset-0 border ${item.borderColor} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg`} 
                    style={{ boxShadow: `0 0 15px 2px rgba(124, 58, 237, 0.3)` }}></div>
                  
                  {/* Scanline effect (visual, low z-index implicitly if animHost is 0) */}
                  <div className="absolute inset-0 overflow-hidden opacity-10">
                    <div className="scanlines"></div>
                  </div>
                  
                  {/* Light sweep effect (visual) */}
                  <div className="card-highlight"></div>
                  
                  {/* Content container - ADDING NEW CLASS HERE */}
                  <div className="relative z-10 h-full w-full p-5 flex flex-col justify-between tech-card-content-wrapper">
                    {/* Title with neon effect */}
                    <div className="space-y-2">
                      <div className="text-xs font-mono text-gray-500">{`</${item.code}>`}</div>
                      <div className="flex gap-2 items-center">
                        <span className="text-2xl">{item.icon}</span>
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${item.color} text-transparent bg-clip-text drop-shadow-glow-sm group-hover:drop-shadow-glow-lg transition-all duration-300`}>
                          {t(`technologies.innovation.cards.${item.key}.title`)}
                        </h3>
                      </div>
                      
                      {/* Connector lines - animated on hover */}
                      <div className="pt-2">
                        <div className={`h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${item.color} transition-all duration-500`}></div>
                      </div>
                    </div>
                    
                    {/* Description - appears on hover */}
                    <div className="mt-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {t(`technologies.innovation.cards.${item.key}.description`)}
                    </div>
                    
                    {/* Circuit pattern in corner */}
                    <div className="absolute bottom-0 right-0 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r rounded-tl-xl border-indigo-500/30"></div>
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r rounded-tl-xl border-indigo-500/50"></div>
                      <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-indigo-500/70"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- INSERTED CTA SECTION --- */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-900 opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-indigo-900 opacity-10 blur-3xl"></div>
        </div>
        
        <div className="progress-it-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-indigo-600 text-white font-medium text-sm mb-6"
            >
              {t('technologies.innovation.cta.tagline')}
            </motion.span>
            {/* Customized Title */}
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              {t('technologies.innovation.cta.title').split('?')[0]} <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">?</span>
            </h2>
            {/* Customized Subtitle */}
            <p className="text-xl text-gray-300 mb-10 mx-auto max-w-3xl">
              {t('technologies.innovation.cta.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
               {/* Button uses the handleScrollAndSetTab function */}
              <a
                href="/#contact?tab=contact" 
                onClick={(e) => handleScrollAndSetTab(e, 'contact')}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gray-900 text-white font-medium transition-all hover:bg-gray-800 border border-gray-800"
              >
                <span>{t('technologies.innovation.cta.button')}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- END OF INSERTED CTA SECTION --- */}

      <style jsx global>{rocketStyles}</style>
      
      {/* Script for animations (main loader) */}
      <Script src="/js/animation-loader.js" strategy="afterInteractive" />
      
      {/* Removed: <Script src="/js/animation-debug.js" strategy="afterInteractive" /> */}
      
      <Footer />
    </main>
  );
} 

