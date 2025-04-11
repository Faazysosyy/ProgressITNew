"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, Play, Pause } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code,
  Palette,
  Smartphone,
  Megaphone,
  BarChart,
  Lightbulb,
  Globe,
  Shield,
  Rocket
} from "lucide-react";
import gsap from "gsap";

// Define service type locally until data module is available
interface Service {
  title: string;
  tagline: string;
  description: string;
  bulletPoints: string[];
  icon: React.ReactElement;
  hue: number;
}

// Services data (to be replaced with import when fixed)
const allServices: Service[] = [
  {
    title: "Web Development",
    tagline: "Code that performs, designs that inspire.",
    description: "Custom websites built with cutting-edge technology and optimized for performance and user experience.",
    bulletPoints: [
      "Custom CMS development (WordPress, Shopify, Webflow)",
      "AI-powered chatbots & automation",
      "Progressive Web Apps (PWAs) for app-like speed",
      "Blockchain integration & Web3 solutions"
    ],
    icon: <Code className="w-6 h-6" />,
    hue: 210
  },
  {
    title: "Mobile Development",
    tagline: "Seamless experiences in every pocket.",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across all devices.",
    bulletPoints: [
      "iOS & Android native apps with Swift/Kotlin",
      "Flutter & React Native cross-platform apps",
      "AR/VR integration for immersive experiences",
      "IoT-connected mobile solutions"
    ],
    icon: <Smartphone className="w-6 h-6" />,
    hue: 120
  },
  {
    title: "AI & Data Analytics",
    tagline: "Your data, weaponized.",
    description: "Comprehensive data analysis that provides actionable insights to optimize your digital strategy and ROI.",
    bulletPoints: [
      "Predictive analytics & machine learning models",
      "Real-time dashboards with Tableau/Power BI",
      "Customer behavior segmentation",
      "AI-driven A/B testing for hyper-optimization"
    ],
    icon: <BarChart className="w-6 h-6" />,
    hue: 30
  },
  {
    title: "UI/UX Design",
    tagline: "Where psychology meets pixels.",
    description: "Intuitive and engaging user interfaces that create memorable digital experiences and drive conversions.",
    bulletPoints: [
      "User journey mapping & wireframing",
      "Micro-interaction design for delight",
      "Accessibility-first WCAG compliance",
      "Voice UI & conversational design"
    ],
    icon: <Palette className="w-6 h-6" />,
    hue: 280
  },
  {
    title: "Digital Marketing",
    tagline: "Algorithms meet artistry.",
    description: "Strategic marketing campaigns that increase brand visibility and drive qualified traffic to your digital platforms.",
    bulletPoints: [
      "Programmatic advertising with AI bidding",
      "Viral TikTok/Reels content engineering",
      "Neuromarketing-driven ad campaigns",
      "Meta (Facebook/Instagram) & Google Performance Max"
    ],
    icon: <Megaphone className="w-6 h-6" />,
    hue: 60
  },
  {
    title: "Brand Strategy",
    tagline: "From logos to legacy.",
    description: "Strategic brand development that establishes a strong market presence and connects with your target audience.",
    bulletPoints: [
      "Sonic branding (audio logos, jingles)",
      "Brand persona development",
      "Guerrilla marketing concepting",
      "Crisis reputation management"
    ],
    icon: <Lightbulb className="w-6 h-6" />,
    hue: 330
  },
  {
    title: "Emerging Tech",
    tagline: "Tomorrow's tools, today.",
    description: "Cutting-edge solutions using the latest technology trends to keep your business ahead of the competition.",
    bulletPoints: [
      "Generative AI integration (ChatGPT, Midjourney APIs)",
      "Metaverse space design (VR showrooms, virtual land)",
      "NFT strategy & token-gated experiences"
    ],
    icon: <Globe className="w-6 h-6" />,
    hue: 180
  },
  {
    title: "Cyber Resilience",
    tagline: "Security as a priority.",
    description: "Protect your digital assets and ensure business continuity with comprehensive cybersecurity solutions.",
    bulletPoints: [
      "Penetration testing & vulnerability audits",
      "GDPR/CCPA compliance consulting",
      "Ransomware response planning"
    ],
    icon: <Shield className="w-6 h-6" />,
    hue: 240
  },
  {
    title: "Growth Labs",
    tagline: "Your innovation incubator.",
    description: "Strategic innovation and rapid development services to accelerate your business growth.",
    bulletPoints: [
      "3-month digital transformation sprints",
      "Startup MVP launch packages",
      "Corporate venture prototyping"
    ],
    icon: <Rocket className="w-6 h-6" />,
    hue: 0
  }
];

// Debounce function to limit update frequency
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout | null = null;
  return function(...args: any[]) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Define types for card position data
interface CardPosition {
  x: number;
  z: number;
  scale: number;
  opacity: number;
  visible: boolean;
}

export default function Gallery() {
  // References and state
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLUListElement | null>(null);
  const cardRefs = useRef<HTMLElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [centerOffset, setCenterOffset] = useState({ x: 0, y: 0 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isAnimatingRef = useRef(false);
  const gsapContextRef = useRef<gsap.Context | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const visibleCards = 7; // Number of cards visible at once (centered card + 3 on each side)

  // Effect for calculating center offset
  useEffect(() => {
    const handleResize = debounce(() => {
      if (carouselRef.current) {
        const rect = carouselRef.current.getBoundingClientRect();
        setCenterOffset({
          x: rect.width / 2,
          y: rect.height / 2
        });
      }
    }, 100);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create GSAP context for better performance
  useEffect(() => {
    if (!cardsRef.current) return;
    
    // Create GSAP context
    gsapContextRef.current = gsap.context(() => {}, cardsRef.current);
    
    // Clean up context on unmount
    return () => {
      if (gsapContextRef.current) {
        gsapContextRef.current.revert();
      }
    };
  }, []);

  // Update card positions when cards reference changes (once on mount)
  useEffect(() => {
    if (!cardsRef.current) return;
    cardRefs.current = Array.from(cardsRef.current.children) as HTMLElement[];
  }, []);

  // Pre-calculate positions for better performance
  const cardPositions = useMemo(() => {
    return allServices.map((_: Service, i: number) => {
      const positions: CardPosition[] = [];
      
      for (let j = 0; j < allServices.length; j++) {
        const offset = (i - j + allServices.length) % allServices.length;
        // Calculate how far this card is from the center position (0 is center)
        let distanceFromCenter = offset;
        if (offset > allServices.length / 2) {
          distanceFromCenter = allServices.length - offset;
        }
        
        // Horizontal position based on distance from center
        const xOffset = distanceFromCenter * 120; // Horizontal spacing between cards
        const xDirection = offset <= allServices.length / 2 ? -1 : 1; 
        const x = xDirection * xOffset;
        
        // Z position (depth) - center is closest to viewer (0 is furthest away)
        const z = -Math.abs(distanceFromCenter) * 60;
        
        // Scale and opacity based on distance from center
        const scale = distanceFromCenter === 0 ? 1 : 
                     distanceFromCenter === 1 ? 0.85 : 
                     distanceFromCenter === 2 ? 0.7 : 
                     distanceFromCenter === 3 ? 0.55 : 0.4;
        
        const opacity = distanceFromCenter === 0 ? 1 : 
                       distanceFromCenter === 1 ? 0.9 : 
                       distanceFromCenter === 2 ? 0.7 : 
                       distanceFromCenter === 3 ? 0.5 : 0.3;
        
        // Determine if this card should be visible based on distance
        const visible = distanceFromCenter < Math.ceil(visibleCards / 2);
        
        positions.push({ x, z, scale, opacity, visible });
      }
      
      return positions;
    });
  }, []);

  // Effect for positioning cards using pre-calculated positions with a timeline
  useEffect(() => {
    if (!cardsRef.current || !cardRefs.current.length || isAnimatingRef.current || !gsapContextRef.current) return;
    
    isAnimatingRef.current = true;
    
    // Kill previous timeline if it exists
    if (timelineRef.current) {
      timelineRef.current.kill();
    }
    
    // Create a new timeline for smoother sequence animation
    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        isAnimatingRef.current = false;
        // Reset willChange to improve memory usage after animation completes
        gsapContextRef.current?.add(() => {
          gsap.set(cardRefs.current, { willChange: "auto" });
        });
      }
    });
    
    timelineRef.current = tl;
    
    // Use the GSAP context for better performance
    gsapContextRef.current.add(() => {
      // Set initial state with willChange for better performance during animation
      gsap.set(cardRefs.current, { 
        willChange: "transform, opacity",
        force3D: true
      });
      
      // Add animations for each card to the timeline
      cardRefs.current.forEach((card, i) => {
        const position = cardPositions[i][currentIndex];
        
        // Use directional movement for more natural flow depending on navigation direction
        tl.to(card, {
          x: position.x,
          z: position.z,
          scale: position.scale,
          autoAlpha: position.visible ? position.opacity : 0,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto"
        }, 0); // Start all animations at the same time
      });
    });
    
    // Play the timeline
    tl.play();
  }, [currentIndex, cardPositions]);

  // Navigation functions with animation blocking and smoother transitions
  const goToNext = () => {
    if (isAnimatingRef.current) return;
    setCurrentIndex((prev) => (prev + 1) % allServices.length);
  };

  const goToPrev = () => {
    if (isAnimatingRef.current) return;
    setCurrentIndex((prev) => (prev - 1 + allServices.length) % allServices.length);
  };

  // Auto-play controls with smoother transitions
  const toggleAutoPlay = () => {
    if (isPlaying) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    } else {
      intervalRef.current = setInterval(goToNext, 3000);
    }
    setIsPlaying(!isPlaying);
  };

  // Set up auto-play
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(goToNext, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="progress-it-container">
          <div className="max-w-4xl mb-8 text-white">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-blue-500 mb-6 transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to home
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text animate-gradient-x">
                Service Gallery
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10">
              Explore our services with this interactive gallery
            </p>
          </div>
          
          <div className="carousel-container" ref={carouselRef}>
            <div className="perspective-container">
              <ul className="cards" ref={cardsRef}>
                {allServices.map((service: Service, index: number) => (
                  <li key={index} className="service-card">
                    <div 
                      className="card-inner"
                      style={{ 
                        backgroundColor: `hsl(${service.hue}, 60%, ${index === currentIndex ? 65 : 40}%)` 
                      }}
                    >
                      <div className="card-content">
                        <h3 className="card-title">{service.title}</h3>
                        <p className="card-tagline">{service.tagline}</p>
                      </div>
                      <div className="card-icon">
                        {service.icon}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="controls">
              <button 
                className="control-btn prev" 
                onClick={goToPrev}
                aria-label="Previous card"
              >
                Prev
              </button>
              
              <button 
                className="control-btn play-pause" 
                onClick={toggleAutoPlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              
              <button 
                className="control-btn next" 
                onClick={goToNext}
                aria-label="Next card"
              >
                Next
              </button>
            </div>
            
            <div className="pagination">
              {allServices.map((_: Service, idx: number) => (
                <span 
                  key={idx} 
                  className={`dot ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => !isAnimatingRef.current && setCurrentIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer companyName="Progress IT" />
      
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        body {
          background: #111;
          min-height: 100vh;
          padding: 0;
          margin: 0;
        }
        
        .carousel-container {
          position: relative;
          width: 100%;
          height: 50vh;
          margin-bottom: 8rem;
        }
        
        .perspective-container {
          perspective: 1200px;
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: visible;
        }

        .cards {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1;
        }

        .service-card {
          position: absolute;
          width: 240px;
          height: 340px;
          transform-style: preserve-3d;
          list-style: none;
          padding: 0;
          margin: 0;
          transform: translateZ(0);
          will-change: transform, opacity;
          backface-visibility: hidden;
          filter: drop-shadow(0 15px 15px rgba(0,0,0,0.3));
          transition: filter 0.3s ease;
        }
        
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          transform-style: preserve-3d;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 1.5rem;
          transition: background-color 0.6s ease;
        }
        
        .card-content {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        
        .card-icon {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          font-size: 2rem;
          color: rgba(255, 255, 255, 0.5);
          z-index: 1;
        }
        
        .card-icon svg {
          width: 2rem;
          height: 2rem;
          filter: drop-shadow(0 2px 3px rgba(0,0,0,0.2));
        }
        
        .card-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 0 0.5rem 0;
          color: white;
          text-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }
        
        .card-tagline {
          font-size: 0.875rem;
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          max-width: 80%;
          margin: 0 auto;
        }

        .controls {
          position: absolute;
          bottom: -4rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 1rem;
          z-index: 10;
        }

        .control-btn {
          display: inline-block;
          outline: none;
          border: none;
          background: #414141;
          background-image: linear-gradient(to bottom, #575757, #414141);
          text-shadow: 0px 1px 0px #414141;
          box-shadow: 0px 1px 0px #414141;
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
          padding: 12px 25px;
          font-weight: 600;
          cursor: pointer;
          font-size: 16px;
          line-height: 18px;
          text-transform: uppercase;
          transition: all 0.2s ease;
        }

        .play-pause {
          padding: 12px 15px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .control-btn:hover {
          background: #57a818;
          background-image: linear-gradient(to bottom, #57a818, #4d9916);
          text-shadow: 0px 1px 0px #32610e;
          box-shadow: 0px 1px 0px #fefefe;
          transform: translateY(-1px);
        }
        
        .control-btn:active {
          transform: translateY(1px);
        }
        
        .pagination {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
          position: absolute;
          bottom: -7rem;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #555;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }
        
        .dot.active {
          background-color: #4d9916;
          transform: scale(1.3);
        }
        
        .dot:hover {
          background-color: #777;
        }
      `}</style>
    </main>
  );
} 