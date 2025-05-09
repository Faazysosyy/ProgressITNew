"use client";

import React, { useEffect, useRef } from 'react';
import { ArrowRight, Bot, BarChart3, RefreshCw, MessageSquare, Zap, LineChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Script from 'next/script';
import { useTranslation } from "@/lib/useTranslation";

// Add type declaration for window.initCreatureAnimation
declare global {
  interface Window {
    initCreatureAnimation?: (element: HTMLDivElement) => void;
  }
}

interface AIServiceItem {
  id: string;
  title: string;
  subtitle: string;
  features: string[];
  icon: React.ReactNode;
  color: string;
}

const AISection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const creatureWrapperRef = useRef<HTMLDivElement>(null);
  const creatureRef = useRef<HTMLDivElement>(null);
  
  // Initialize creature animation when component mounts
  useEffect(() => {
    if (creatureRef.current && typeof window !== 'undefined' && window.initCreatureAnimation) {
      window.initCreatureAnimation(creatureRef.current);
    }
  }, []);
  
  // AI service items with translations
  const aiServices: AIServiceItem[] = [
    {
      id: "ai-agents",
      title: t('aiSolutions.services.aiAgents.title'),
      subtitle: t('aiSolutions.services.aiAgents.subtitle'),
      features: t('aiSolutions.services.aiAgents.features', { returnObjects: true }) as string[],
      icon: <Bot className="w-6 h-6 text-blue-400" />,
      color: "blue-400"
    },
    {
      id: "predictive-analytics",
      title: t('aiSolutions.services.predictiveAnalytics.title'),
      subtitle: t('aiSolutions.services.predictiveAnalytics.subtitle'),
      features: t('aiSolutions.services.predictiveAnalytics.features', { returnObjects: true }) as string[],
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      color: "purple-400"
    },
    {
      id: "seamless-integration",
      title: t('aiSolutions.services.seamlessIntegration.title'),
      subtitle: t('aiSolutions.services.seamlessIntegration.subtitle'),
      features: t('aiSolutions.services.seamlessIntegration.features', { returnObjects: true }) as string[],
      icon: <RefreshCw className="w-6 h-6 text-cyan-400" />,
      color: "cyan-400"
    },
    {
      id: "llm-solutions",
      title: t('aiSolutions.services.industryLLM.title'),
      subtitle: t('aiSolutions.services.industryLLM.subtitle'),
      features: t('aiSolutions.services.industryLLM.features', { returnObjects: true }) as string[],
      icon: <MessageSquare className="w-6 h-6 text-indigo-400" />,
      color: "indigo-400"
    },
    {
      id: "workflow-optimization",
      title: t('aiSolutions.services.workflowOptimization.title'),
      subtitle: t('aiSolutions.services.workflowOptimization.subtitle'),
      features: t('aiSolutions.services.workflowOptimization.features', { returnObjects: true }) as string[],
      icon: <Zap className="w-6 h-6 text-pink-400" />,
      color: "pink-400"
    },
    {
      id: "decision-support",
      title: t('aiSolutions.services.decisionSupport.title'),
      subtitle: t('aiSolutions.services.decisionSupport.subtitle'),
      features: t('aiSolutions.services.decisionSupport.features', { returnObjects: true }) as string[],
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
              {t('aiSolutions.title')}
            </span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {t('aiSolutions.subtitle')}
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl">
            {t('aiSolutions.description')}
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
                    {t('aiSolutions.commonDescription')}
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
              {t('aiSolutions.exploreButton')}
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
      <Script id="creature-script" src="/js/creature.js" strategy="afterInteractive" />
    </section>
  );
};

export default AISection; 