"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowRight, Bot, BarChart3, RefreshCw, MessageSquare, Zap, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Script from 'next/script';

interface AIServiceItem {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
}

const AISection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const creatureWrapperRef = useRef<HTMLDivElement>(null);
  const creatureRef = useRef<HTMLDivElement>(null);
  
  // AI service items with new content and icons
  const aiServices: AIServiceItem[] = [
    {
      id: "ai-agents",
      title: "AI Agents for Business",
      subtitle: "Advanced automation for your company.",
      features: [
        "24/7 automated task handling",
        "40% reduction in operational costs",
        "Seamless integration with existing systems",
        "Free consultation to assess your specific needs"
      ],
      icon: <Bot className="w-6 h-6 text-blue-400" />,
      color: "blue-400"
    },
    {
      id: "predictive-analytics",
      title: "Predictive Analytics",
      subtitle: "Turn data into actionable business insights.",
      features: [
        "35% improved forecasting accuracy",
        "28% reduced inventory costs",
        "Stay ahead of market changes",
        "Data-driven decision making"
      ],
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      color: "purple-400"
    },
    {
      id: "seamless-integration",
      title: "Seamless AI Integration",
      subtitle: "No disruption to current operations.",
      features: [
        "Works with your existing infrastructure",
        "Phased implementation approach",
        "Measurable ROI within first 3 months",
        "Continuous support and optimization"
      ],
      icon: <RefreshCw className="w-6 h-6 text-cyan-400" />,
      color: "cyan-400"
    },
    {
      id: "llm-solutions",
      title: "Industry-Specific LLM Solutions",
      subtitle: "Custom-trained for your industry.",
      features: [
        "Compliance with sector-specific regulations",
        "65% faster document processing",
        "Personalized demo available",
        "Continuous model improvement"
      ],
      icon: <MessageSquare className="w-6 h-6 text-indigo-400" />,
      color: "indigo-400"
    },
    {
      id: "workflow-optimization",
      title: "AI Workflow Optimization",
      subtitle: "Streamlined processes for maximum efficiency.",
      features: [
        "Identify and eliminate process bottlenecks",
        "30% faster processing times",
        "75% reduction in manual errors",
        "Custom solutions for your unique challenges"
      ],
      icon: <Zap className="w-6 h-6 text-pink-400" />,
      color: "pink-400"
    },
    {
      id: "decision-support",
      title: "AI-Powered Decision Support",
      subtitle: "Strategic insights for smarter business choices.",
      features: [
        "Real-time data analysis for better decisions",
        "42% faster strategic planning cycles",
        "Risk assessment with 87% accuracy",
        "Custom dashboards for executive insights"
      ],
      icon: <LineChart className="w-6 h-6 text-emerald-400" />,
      color: "emerald-400"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="ai-solutions" 
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Creature animation container - exactly as provided in the code */}
      <div id="creature-wrapper" ref={creatureWrapperRef}>
        <div id="creature" ref={creatureRef}></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="mb-6 text-6xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text animate-gradient-x">
              AI Solutions
            </span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Advanced AI Development & Integration
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl">
            Our team of AI specialists develops cutting-edge artificial intelligence solutions designed to transform your business operations. From custom models to seamless integration, we bring the power of AI to your organization.
          </p>
        </div>
        
        {/* Services cards with the updated design */}
        <div className="relative my-20 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto z-10">
            {aiServices.map((service) => (
              <div
                key={service.id}
                className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-xl p-8 transform transition-all hover:scale-102 hover:shadow-xl hover:shadow-blue-500/10 relative overflow-hidden"
              >
                <div className="flex items-center mb-4">
                  {/* Icon with background */}
                  <div className="p-3 mr-4 rounded-lg bg-gray-800/80 flex-shrink-0">
                    {service.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-2xl font-bold text-white">
                    {service.title}
                  </h4>
                </div>
                
                {/* Subtitle */}
                <p className={`text-${service.color} mb-5`}>
                  {service.subtitle}
                </p>
                
                {/* Description text */}
                <div className="text-gray-300 mb-6">
                  <p className="mb-4">
                    Strategic AI solutions that improve your business operations and drive qualified results.
                  </p>
                </div>
                
                {/* Feature list with bullet points */}
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full bg-${service.color} mt-2 mr-3 flex-shrink-0`}></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            asChild
          >
            <a href="/services#ai-development">
              Explore AI Solutions
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
      
      {/* CSS for the creature animation - with gradient colors instead of red */}
      <style jsx global>{`
        #ai-solutions #creature-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }
        #ai-solutions #creature {
          font-size: .2vh;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 150em;
          height: 150em;
          flex-wrap: wrap;
        }
        #ai-solutions #creature div {
          transform-style: preserve-3d;
          position: relative;
          width: 4em;
          height: 4em;
          margin: 3em;
          border-radius: 2em;
          will-change: transform;
          mix-blend-mode: plus-lighter;
        }
      `}</style>
      
      {/* Load the animation as separate scripts */}
      <Script id="anime-script" src="https://assets.codepen.io/1137/anime.esm.min.js" type="module" strategy="afterInteractive" />
      <Script id="creature-init" strategy="afterInteractive">
        {`
        document.addEventListener('DOMContentLoaded', function() {
          const initAnimation = async () => {
            try {
              // Dynamically import the animation library
              const { animate, createTimeline, createTimer, stagger, utils } = await import('https://assets.codepen.io/1137/anime.esm.min.js');
              
              // Get the creature element in this specific section
              const creatureEl = document.querySelector('#ai-solutions #creature');
              
              if (!creatureEl) {
                console.error('Creature element not found');
                return;
              }
              
              // Clear any existing content
              creatureEl.innerHTML = '';
              
              const viewport = { w: window.innerWidth * .5, h: window.innerHeight * .5 };
              const cursor = { x: 0, y: 0 };
              const rows = 13;
              const grid = [rows, rows];
              const from = 'center';
              const scaleStagger = stagger([2, 5], { ease: 'inQuad', grid, from });
              const opacityStagger = stagger([1, .1], { grid, from });

              // Define an array of gradient colors from our AI services
              const colors = [
                ['#3b82f6', '#60a5fa'], // blue
                ['#8b5cf6', '#a78bfa'], // purple
                ['#06b6d4', '#22d3ee'], // cyan
                ['#6366f1', '#818cf8'], // indigo
                ['#ec4899', '#f472b6'], // pink
                ['#10b981', '#34d399']  // emerald
              ];

              // Define gradient colors from the AI Solutions title
              const titleGradientColors = [
                '#3b82f6', // blue-500
                '#6366f1', // indigo-500
                '#8b5cf6'  // purple-600
              ];

              for (let i = 0; i < (rows * rows); i++) {
                creatureEl.appendChild(document.createElement('div'));
              }

              const particuleEls = creatureEl.querySelectorAll('div');

              utils.set(creatureEl, {
                width: rows * 10 + 'em',
                height: rows * 10 + 'em'
              });

              utils.set(particuleEls, {
                x: 0,
                y: 0,
                scale: scaleStagger,
                opacity: opacityStagger,
                background: stagger([0, particuleEls.length - 1], { grid, from,
                  modifier: (v) => {
                    // Use title gradient colors for a consistent theme with the title
                    // Calculate position in the gradient based on particle position
                    const startIndex = Math.floor((v / particuleEls.length) * (titleGradientColors.length - 1));
                    const endIndex = (startIndex + 1) % titleGradientColors.length;
                    // Create a gradient matching the title's gradient direction
                    return \`linear-gradient(to right, \${titleGradientColors[startIndex]}, \${titleGradientColors[endIndex]})\`;
                  },
                }),
                boxShadow: stagger([8, 1], { grid, from,
                  modifier: v => {
                    // Use matching title gradient color for glow
                    const colorIndex = Math.floor((v / 8) * titleGradientColors.length);
                    const color = titleGradientColors[colorIndex % titleGradientColors.length];
                    return \`0px 0px \${utils.round(v, 0)}em 0px \${color}\`;
                  },
                }),
                zIndex: stagger([rows * rows, 1], { grid, from, modifier: utils.round(0) }),
              });

              const pulse = () => {
                animate(particuleEls, {
                  keyframes: [
                    {
                      scale: 5,
                      opacity: 1,
                      delay: stagger(90, { start: 1650, grid, from }),
                      duration: 150,
                    }, {
                      scale: scaleStagger,
                      opacity: opacityStagger,
                      ease: 'inOutQuad',
                      duration: 600
                    }
                  ],
                });
              }

              const mainLoop = createTimer({
                frameRate: 15, // Animate to the new cursor position every 250ms
                onUpdate: () => {
                  animate(particuleEls, {
                    x: cursor.x,
                    y: cursor.y,
                    delay: stagger(40, { grid, from }),
                    duration: stagger(120, { start: 750, ease: 'inQuad', grid, from }),
                    ease: 'inOut',
                    composition: 'blend', // This allows the animations to overlap nicely
                  });
                }
              });

              const autoMove = createTimeline()
              .add(cursor, {
                x: [-viewport.w * .45, viewport.w * .45],
                modifier: x => x + Math.sin(mainLoop.currentTime * .0007) * viewport.w * .5,
                duration: 3000,
                ease: 'inOutExpo',
                alternate: true,
                loop: true,
                onBegin: pulse,
                onLoop: pulse,
              }, 0)
              .add(cursor, {
                y: [-viewport.h * .45, viewport.h * .45],
                modifier: y => y + Math.cos(mainLoop.currentTime * .00012) * viewport.h * .5,
                duration: 1000,
                ease: 'inOutQuad',
                alternate: true,
                loop: true,
              }, 0);

              // Start the animations
              mainLoop.start();
              autoMove.play();
              
              // Handle window resize
              window.addEventListener('resize', () => {
                viewport.w = window.innerWidth * .5;
                viewport.h = window.innerHeight * .5;
              });
              
              console.log('AI Section animation initialized successfully');
            } catch (error) {
              console.error('Error initializing animation:', error);
            }
          };
          
          // Initialize the animation
          initAnimation();
        });
        
        // Trigger DOMContentLoaded if it already happened
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
          setTimeout(() => {
            document.dispatchEvent(new Event('DOMContentLoaded'));
          }, 500);
        }
        `}
      </Script>
    </section>
  );
};

export default AISection; 