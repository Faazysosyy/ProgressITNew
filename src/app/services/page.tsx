"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Code, Globe, Smartphone, Palette, Lightbulb, Rocket, Brain, Shuffle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/useTranslation";

export default function Services() {
  const { t } = useTranslation();
  
  const handleScrollAndSetTab = (e: React.MouseEvent<HTMLElement>, tab: 'quote' | 'contact') => {
    e.preventDefault(); 
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

  const serviceSections = [
    {
      id: "website-development",
      icon: <Code className="w-12 h-12 mb-6" style={{ color: 'hsl(210, 70%, 65%)' }} />,
      baseKey: "services.detailed.webDevelopment"
    },
    {
      id: "seo",
      icon: <Globe className="w-12 h-12 mb-6" style={{ color: 'hsl(160, 70%, 65%)' }} />,
      baseKey: "services.detailed.seo"
    },
    {
      id: "mobile-app-development",
      icon: <Smartphone className="w-12 h-12 mb-6" style={{ color: 'hsl(120, 70%, 65%)' }} />,
      baseKey: "services.detailed.mobileAppDevelopment"
    },
    {
      id: "uiux-design",
      icon: <Palette className="w-12 h-12 mb-6" style={{ color: 'hsl(280, 70%, 65%)' }} />,
      baseKey: "services.detailed.uiuxDesign"
    },
    {
      id: "brand-identity",
      icon: <Lightbulb className="w-12 h-12 mb-6" style={{ color: 'hsl(330, 70%, 65%)' }} />,
      baseKey: "services.detailed.brandIdentity"
    },
    {
      id: "custom-web-applications",
      icon: <Rocket className="w-12 h-12 mb-6" style={{ color: 'hsl(0, 70%, 65%)' }} />,
      baseKey: "services.detailed.customWebApplications"
    },
    {
      id: "ai-development",
      icon: <Brain className="w-12 h-12 mb-6" style={{ color: 'hsl(230, 70%, 65%)' }} />,
      baseKey: "services.detailed.aiDevelopment"
    },
    {
      id: "gambling-solutions",
      icon: <Shuffle className="w-12 h-12 mb-6" style={{ color: 'hsl(200, 70%, 65%)' }} />,
      baseKey: "services.detailed.gamblingSolutions"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-10">
        <div className="progress-it-container">
          <div className="max-w-4xl mb-8">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-blue-500 mb-6 transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              {t('services.backToHome')}
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text animate-gradient-x">
                {t('services.ourServices')}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-6"
            >
              {t('services.ourServicesDescription')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-500 mb-10"
            >
              {t('services.ourServicesDetail')}
            </motion.p>
          </div>
        </div>
      </section>

      <ServicesSection 
        title={t('services.completeServiceOfferings')} 
        subtitle={t('services.completeServiceDescription')}
        showAll={true}
      />

      {/* Detailed Service Descriptions for SEO */}
      <section className="py-20 bg-black">
        <div className="progress-it-container">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center"
          >
            <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              {t('services.comprehensiveDigitalSolutions')}
            </span>
          </motion.h2>
          
          {serviceSections.map((service, serviceIndex) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-24"
              id={service.id}
            >
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/3">
                  <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center h-full">
                    {service.icon}
                    <h3 className="text-2xl font-bold mb-4">{t(`${service.baseKey}.cardTitle`)}</h3>
                    <p className="text-gray-400">{t(`${service.baseKey}.cardSubtext`)}</p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">{t(`${service.baseKey}.sectionTitle`)}</h3>
                  <p className="text-gray-300 mb-6">
                    {t(`${service.baseKey}.sectionDescription`)}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(t(`${service.baseKey}.categories`, { returnObjects: true }) as Record<string, {title: string, items: string[]}>).map(([categoryKey, categoryData], catIndex) => (
                      <div key={categoryKey} className="bg-gray-950 p-6 rounded-xl border border-gray-800 mb-6">
                        <h4 className="text-xl font-semibold mb-3">{categoryData.title}</h4>
                        <ul className="space-y-2 text-gray-400">
                          {categoryData.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
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
              {t('industries.letsWorkTogether')}
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span>{t('services.readyToStartProject').split('Project?')[0].split('Проект?')[0]}</span>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
                {t('services.readyToStartProject').includes('Project?') ? 'Project' : 'Проект'}
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 mb-10 mx-auto max-w-3xl">
              {t('services.readyToStartDescription')}
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-none text-lg px-8 py-6 h-auto"
            >
              <Link href="/#contact?tab=contact">
                {t('buttons.exploreServices')}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      
      <Footer companyName={t('navbar.home')} /> 
    </main>
  );
} 