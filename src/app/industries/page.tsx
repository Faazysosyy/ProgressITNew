"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowRight, ChevronRight, Zap, Landmark, Home, Store, Boxes, Ticket, LineChart,
  Building, ShoppingCart, Binary, FilmIcon
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

export default function IndustriesPage() {
  const { t } = useTranslation();
  
  // Function copied from HeroSection.tsx
  const handleScrollAndSetTab = (e: React.MouseEvent<HTMLElement>, tab: 'quote' | 'contact') => {
    e.preventDefault(); // Prevent default anchor jump
    
    // Check if we are already on the home page or need to navigate first
    const targetPath = '/';
    const targetId = 'contact';
    const targetHash = `#${targetId}?tab=${tab}`;

    if (window.location.pathname === targetPath) {
      // Already on the home page, just scroll and update hash
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.location.hash !== targetHash) {
          window.location.hash = targetHash;
        }
      } else {
        // Fallback if element not found immediately (rare)
        window.location.href = targetPath + targetHash;
      }
    } else {
      // Navigate to the home page with the specific hash
      window.location.href = targetPath + targetHash;
    }
  };

  // Industry data
  const industries = [
    {
      id: "financial",
      title: t('industries.financialServices'),
      icon: <Landmark className="w-10 h-10 text-blue-500" />,
      color: "from-blue-500 to-indigo-500",
      description: t('industries.financialDescription'),
      features: [
        t('industries.financialFeatures.securePayment', "Secure payment processing systems"),
        t('industries.financialFeatures.mobileBanking', "Mobile banking applications"),
        t('industries.financialFeatures.investmentPortfolio', "Investment portfolio management"),
        t('industries.financialFeatures.regulatoryCompliance', "Regulatory compliance solutions"),
        t('industries.financialFeatures.customerData', "Customer data analytics")
      ],
      imageSrc: "/images/industries/financial.jpg"
    },
    {
      id: "realestate",
      title: t('industries.realEstate'),
      icon: <Home className="w-10 h-10 text-purple-500" />,
      color: "from-purple-500 to-pink-500",
      description: t('industries.realEstateDescription'),
      features: [
        t('industries.realEstateFeatures.virtualTours', "Virtual property tours"),
        t('industries.realEstateFeatures.listingWebsites', "Property listing websites"),
        t('industries.realEstateFeatures.leadGeneration', "Lead generation systems"),
        t('industries.realEstateFeatures.marketAnalysis', "Market analysis tools"),
        t('industries.realEstateFeatures.clientRelationship', "Client relationship management")
      ],
      imageSrc: "/images/industries/realestate.jpg"
    },
    {
      id: "ecommerce",
      title: t('industries.ecommerce'),
      icon: <Store className="w-10 h-10 text-emerald-500" />,
      color: "from-emerald-500 to-teal-500",
      description: t('industries.ecommerceDescription'),
      features: [
        t('industries.ecommerceFeatures.customStores', "Custom e-commerce stores"),
        t('industries.ecommerceFeatures.inventoryManagement', "Inventory management systems"),
        t('industries.ecommerceFeatures.paymentProcessing', "Payment processing integration"),
        t('industries.ecommerceFeatures.loyaltyPrograms', "Customer loyalty programs"),
        t('industries.ecommerceFeatures.recommendationEngines', "Product recommendation engines")
      ],
      imageSrc: "/images/industries/ecommerce.jpg"
    },
    {
      id: "blockchain",
      title: t('industries.blockchain'),
      icon: <Boxes className="w-10 h-10 text-amber-500" />,
      color: "from-amber-500 to-orange-500",
      description: t('industries.blockchainDescription'),
      features: [
        t('industries.blockchainFeatures.smartContract', "Smart contract development"),
        t('industries.blockchainFeatures.dapps', "Decentralized applications (DApps)"),
        t('industries.blockchainFeatures.tokenCreation', "Token creation and management"),
        t('industries.blockchainFeatures.integration', "Blockchain integration services"),
        t('industries.blockchainFeatures.walletDevelopment', "Crypto wallet development")
      ],
      imageSrc: "/images/industries/blockchain.jpg"
    },
    {
      id: "entertainment",
      title: t('industries.entertainment'),
      icon: <Ticket className="w-10 h-10 text-rose-500" />,
      color: "from-rose-500 to-red-500",
      description: t('industries.entertainmentDescription'),
      features: [
        t('industries.entertainmentFeatures.streamingPlatforms', "Content streaming platforms"),
        t('industries.entertainmentFeatures.rightsManagement', "Digital rights management"),
        t('industries.entertainmentFeatures.mediaAnalytics', "Media analytics solutions"),
        t('industries.entertainmentFeatures.audienceExperiences', "Interactive audience experiences"),
        t('industries.entertainmentFeatures.revenueOptimization', "Ad revenue optimization")
      ],
      imageSrc: "/images/industries/entertainment.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-black/95 z-10"></div>
          <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-black to-transparent z-20"></div>
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid-pattern.svg')] opacity-20 z-0"></div>
        </div>

        <div className="progress-it-container relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 max-w-4xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white font-medium text-sm mb-6"
            >
              {t('industries.expertise')}
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {t('industries.driveInnovation')}
            </h1>
            <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
              {t('industries.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-16">
            {industries.map((industry, index) => (
              <motion.a
                key={industry.id}
                href={`#${industry.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                className="bg-gray-900 hover:bg-gray-800 rounded-lg p-4 text-center transition-all duration-300 border border-gray-800 hover:border-gray-700 group"
              >
                <div className="mb-3 flex justify-center">
                  {industry.icon}
                </div>
                <p className="text-sm font-medium group-hover:text-indigo-400 transition-colors">
                  {industry.title.split(' ').slice(0, 2).join(' ')}
                </p>
                <div className="mt-2 inline-flex items-center text-indigo-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{t('industries.learnMore')}</span>
                  <ChevronRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* First two industry sections (Financial and Real Estate) */}
      {industries.slice(0, 2).map((industry, index) => (
        <section 
          id={industry.id}
          key={industry.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-black' : 'bg-gray-950'} relative overflow-hidden`}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute -top-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-r ${industry.color} opacity-5 blur-3xl`}></div>
            <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-l ${industry.color} opacity-5 blur-3xl`}></div>
          </div>

          <div className="progress-it-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${industry.color} mb-6`}>
                  {industry.icon}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{industry.title}</h2>
                <p className="text-xl text-gray-300 mb-8">{industry.description}</p>
                
                <div className="space-y-4 mb-8">
                  {industry.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.5 }}
                      className="flex items-start"
                    >
                      <div className={`p-1 rounded-full bg-gradient-to-r ${industry.color} mr-3 mt-1`}>
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {/* "Get Started" button removed */}
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative min-h-[24rem] order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10 rounded-2xl"></div>
                  <div className={`absolute inset-0 rounded-2xl border border-${industry.color.split(' ')[0]}/30 z-20`}></div>
                  <div className="p-4 absolute inset-0 z-0">
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                      <div className="absolute inset-0 z-0 bg-black/50"></div>
                      {/* Replace with actual images */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black z-10"></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20 z-0`}></div>
                    </div>
                  </div>
                </div>
                
                {/* Interactive elements inside frame - Redesigned */}
                <div className="absolute inset-0 z-30 p-4 sm:p-6 md:p-10 flex flex-col justify-start">
                  {/* Reimagined stats display */}
                  <div className="relative">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 p-3 sm:p-6"
                    >
                      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-900/40 to-transparent"></div>
                      <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-tl from-black via-gray-900 to-black z-0 blur-xl"></div>
                      <div className={`absolute -bottom-12 -left-4 w-20 h-20 rounded-full bg-gradient-to-r ${industry.color} opacity-30 blur-xl`}></div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10 mb-3 sm:mb-5">
                        <div className="relative group">
                          <div className={`absolute -inset-0.5 bg-gradient-to-r ${industry.color} rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000`}></div>
                          <div className="relative bg-black rounded-lg p-4">
                            <div className="flex justify-between items-start">
                              {industry.id === "financial" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>32</span>
                              ) : industry.id === "realestate" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>28</span>
                              ) : industry.id === "ecommerce" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>35</span>
                              ) : industry.id === "blockchain" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>18</span>
                              ) : (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>25</span>
                              )}
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br ${industry.color}`}>
                                <LineChart className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            <p className="mt-2 text-xs text-gray-400 uppercase tracking-wider font-medium">Enterprise Projects</p>
                            <p className="text-sm text-white/80 mt-1">
                              {industry.id === "financial" ? "Banking & FinTech" : 
                               industry.id === "realestate" ? "Property Solutions" : 
                               industry.id === "ecommerce" ? "Online Retail" : 
                               industry.id === "blockchain" ? "DeFi & Web3" : 
                               "Media Distribution"}
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative group">
                          <div className={`absolute -inset-0.5 bg-gradient-to-r ${industry.color} rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000`}></div>
                          <div className="relative bg-black rounded-lg p-4">
                            <div className="flex justify-between items-start">
                              {industry.id === "financial" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>98%</span>
                              ) : industry.id === "realestate" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>99%</span>
                              ) : industry.id === "ecommerce" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>97%</span>
                              ) : industry.id === "blockchain" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>94%</span>
                              ) : (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>96%</span>
                              )}
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br ${industry.color}`}>
                                <Zap className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            <p className="mt-2 text-xs text-gray-400 uppercase tracking-wider font-medium">Client Retention</p>
                            <p className="text-sm text-white/80 mt-1">Long-term partnerships</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative group h-full overflow-hidden">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${industry.color} rounded-xl blur opacity-15 group-hover:opacity-30 transition duration-1000`}></div>
                        <div className="relative bg-black rounded-lg p-4 sm:p-5 pb-4 sm:pb-8 h-full">
                          <h3 className={`text-sm sm:text-xl font-bold bg-gradient-to-r ${industry.color} text-transparent bg-clip-text mb-2 sm:mb-4`}>
                            {industry.title.split(' ')[0]} Industry Excellence
                          </h3>
                          
                          <div className="mt-2 sm:mt-4 space-y-2 sm:space-y-3">
                            {industry.id === "financial" ? 
                              ["Regulatory Compliance", "Fraud Detection", "Payment Security"].map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${75 + idx * 5}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8, ease: "easeOut" }}
                                  className="relative h-2 bg-gray-800 rounded-full overflow-hidden"
                                >
                                  <div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                                  <div className="flex justify-between items-center mt-0.5 sm:mt-1">
                                    <span className="text-[9px] sm:text-xs text-gray-400">{feature}</span>
                                    <span className={`text-[9px] sm:text-xs text-${industry.color.split(' ')[0]}`}>{75 + idx * 5}%</span>
                                  </div>
                                </motion.div>
                              ))
                            : industry.id === "realestate" ?
                              ["Virtual Tours", "Property Search", "Lead Generation"].map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${75 + idx * 5}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8, ease: "easeOut" }}
                                  className="relative h-2 bg-gray-800 rounded-full overflow-hidden"
                                >
                                  <div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                                  <div className="flex justify-between items-center mt-0.5 sm:mt-1">
                                    <span className="text-[9px] sm:text-xs text-gray-400">{feature}</span>
                                    <span className={`text-[9px] sm:text-xs text-${industry.color.split(' ')[0]}`}>{75 + idx * 5}%</span>
                                  </div>
                                </motion.div>
                              ))
                            : industry.id === "ecommerce" ?
                              ["Conversion Rate", "Cart Recovery", "Customer Loyalty"].map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${75 + idx * 5}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8, ease: "easeOut" }}
                                  className="relative h-2 bg-gray-800 rounded-full overflow-hidden"
                                >
                                  <div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                                  <div className="flex justify-between items-center mt-0.5 sm:mt-1">
                                    <span className="text-[9px] sm:text-xs text-gray-400">{feature}</span>
                                    <span className={`text-[9px] sm:text-xs text-${industry.color.split(' ')[0]}`}>{75 + idx * 5}%</span>
                                  </div>
                                </motion.div>
                              ))
                            : industry.id === "blockchain" ?
                              ["Smart Contracts", "Decentralization", "Token Economy"].map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${75 + idx * 5}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8, ease: "easeOut" }}
                                  className="relative h-2 bg-gray-800 rounded-full overflow-hidden"
                                >
                                  <div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                                  <div className="flex justify-between items-center mt-0.5 sm:mt-1">
                                    <span className="text-[9px] sm:text-xs text-gray-400">{feature}</span>
                                    <span className={`text-[9px] sm:text-xs text-${industry.color.split(' ')[0]}`}>{75 + idx * 5}%</span>
                                  </div>
                                </motion.div>
                              ))
                            :
                              ["Streaming Quality", "User Engagement", "Content Delivery"].map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${75 + idx * 5}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8, ease: "easeOut" }}
                                  className="relative h-2 bg-gray-800 rounded-full overflow-hidden"
                                >
                                  <div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                                  <div className="flex justify-between items-center mt-0.5 sm:mt-1">
                                    <span className="text-[9px] sm:text-xs text-gray-400">{feature}</span>
                                    <span className={`text-[9px] sm:text-xs text-${industry.color.split(' ')[0]}`}>{75 + idx * 5}%</span>
                                  </div>
                                </motion.div>
                              ))
                            }
                          </div>
                          
                          <div className="flex flex-wrap gap-1.5 sm:gap-3 mt-3 sm:mt-6">
                            {industry.id === "financial" ? 
                              ["Banking Software", "FinTech API", "Digital Payments"].map((tag, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                                  className={`inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full border border-${industry.color.split(' ')[0]}/30 bg-black/50`}
                                >
                                  <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${industry.color} mr-0.5 sm:mr-1`}></span>
                                  <span className="text-white/80 text-[8px] sm:text-xs">{tag}</span>
                                </motion.span>
                              ))
                            : industry.id === "realestate" ?
                              ["Property Search", "Virtual Tours", "CRM for Realtors"].map((tag, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                                  className={`inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full border border-${industry.color.split(' ')[0]}/30 bg-black/50`}
                                >
                                  <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${industry.color} mr-0.5 sm:mr-1`}></span>
                                  <span className="text-white/80 text-[8px] sm:text-xs">{tag}</span>
                                </motion.span>
                              ))
                            : industry.id === "ecommerce" ?
                              ["Shopping Cart", "Product Catalog", "Payment Gateway"].map((tag, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                                  className={`inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full border border-${industry.color.split(' ')[0]}/30 bg-black/50`}
                                >
                                  <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${industry.color} mr-0.5 sm:mr-1`}></span>
                                  <span className="text-white/80 text-[8px] sm:text-xs">{tag}</span>
                                </motion.span>
                              ))
                            : industry.id === "blockchain" ?
                              ["Web3 Development", "NFT Marketplace", "DAO Solutions"].map((tag, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                                  className={`inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full border border-${industry.color.split(' ')[0]}/30 bg-black/50`}
                                >
                                  <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${industry.color} mr-0.5 sm:mr-1`}></span>
                                  <span className="text-white/80 text-[8px] sm:text-xs">{tag}</span>
                                </motion.span>
                              ))
                            :
                              ["Video Streaming", "Content Management", "Media Analytics"].map((tag, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                                  className={`inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full border border-${industry.color.split(' ')[0]}/30 bg-black/50`}
                                >
                                  <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${industry.color} mr-0.5 sm:mr-1`}></span>
                                  <span className="text-white/80 text-[8px] sm:text-xs">{tag}</span>
                                </motion.span>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Remaining industry sections (E-commerce, Blockchain, Entertainment) */}
      {industries.slice(2).map((industry, index) => (
        <section 
          id={industry.id}
          key={industry.id}
          className={`py-16 ${(index + 2) % 2 === 0 ? 'bg-black' : 'bg-gray-950'} relative overflow-hidden`}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute -top-32 -left-32 w-64 h-64 rounded-full bg-gradient-to-r ${industry.color} opacity-5 blur-3xl`}></div>
            <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gradient-to-l ${industry.color} opacity-5 blur-3xl`}></div>
          </div>

          <div className="progress-it-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className={`inline-flex items-center justify-center p-3 rounded-lg bg-gradient-to-r ${industry.color} mb-6`}>
                  {industry.icon}
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{industry.title}</h2>
                <p className="text-xl text-gray-300 mb-8">{industry.description}</p>
                
                <div className="space-y-4 mb-8">
                  {industry.features.map((feature, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx, duration: 0.5 }}
                      className="flex items-start"
                    >
                      <div className={`p-1 rounded-full bg-gradient-to-r ${industry.color} mr-3 mt-1`}>
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {/* "Get Started" button removed */}
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative min-h-[24rem] order-1 ${(index + 2) % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10 rounded-2xl"></div>
                  <div className={`absolute inset-0 rounded-2xl border border-${industry.color.split(' ')[0]}/30 z-20`}></div>
                  <div className="p-4 absolute inset-0 z-0">
                    <div className="relative w-full h-full overflow-hidden rounded-xl">
                      <div className="absolute inset-0 z-0 bg-black/50"></div>
                      {/* Replace with actual images */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black z-10"></div>
                      <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-20 z-0`}></div>
                    </div>
                  </div>
                </div>
                
                {/* Interactive elements inside frame - Redesigned */}
                <div className="absolute inset-0 z-30 p-4 sm:p-6 md:p-10 flex flex-col justify-start">
                  {/* Reimagined stats display */}
                  <div className="relative">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="bg-black/40 backdrop-blur-md rounded-xl overflow-hidden border border-gray-800 p-3 sm:p-6"
                    >
                      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-gray-900/40 to-transparent"></div>
                      <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-tl from-black via-gray-900 to-black z-0 blur-xl"></div>
                      <div className={`absolute -bottom-12 -left-4 w-20 h-20 rounded-full bg-gradient-to-r ${industry.color} opacity-30 blur-xl`}></div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative z-10 mb-3 sm:mb-5">
                        <div className="relative group">
                          <div className={`absolute -inset-0.5 bg-gradient-to-r ${industry.color} rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000`}></div>
                          <div className="relative bg-black rounded-lg p-4">
                            <div className="flex justify-between items-start">
                              {industry.id === "financial" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>32</span>
                              ) : industry.id === "realestate" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>28</span>
                              ) : industry.id === "ecommerce" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>35</span>
                              ) : industry.id === "blockchain" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>18</span>
                              ) : (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>25</span>
                              )}
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br ${industry.color}`}>
                                <LineChart className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            <p className="mt-2 text-xs text-gray-400 uppercase tracking-wider font-medium">Enterprise Projects</p>
                            <p className="text-sm text-white/80 mt-1">
                              {industry.id === "financial" ? "Banking & FinTech" : 
                               industry.id === "realestate" ? "Property Solutions" : 
                               industry.id === "ecommerce" ? "Online Retail" : 
                               industry.id === "blockchain" ? "DeFi & Web3" : 
                               "Media Distribution"}
                            </p>
                          </div>
                        </div>
                        
                        <div className="relative group">
                          <div className={`absolute -inset-0.5 bg-gradient-to-r ${industry.color} rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000`}></div>
                          <div className="relative bg-black rounded-lg p-4">
                            <div className="flex justify-between items-start">
                              {industry.id === "financial" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>98%</span>
                              ) : industry.id === "realestate" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>99%</span>
                              ) : industry.id === "ecommerce" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>97%</span>
                              ) : industry.id === "blockchain" ? (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>94%</span>
                              ) : (
                                <span className={`text-4xl sm:text-5xl font-extrabold bg-gradient-to-br ${industry.color} text-transparent bg-clip-text group-hover:scale-105 transition-transform`}>96%</span>
                              )}
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br ${industry.color}`}>
                                <Zap className="w-4 h-4 text-white" />
                              </div>
                            </div>
                            <p className="mt-2 text-xs text-gray-400 uppercase tracking-wider font-medium">Client Retention</p>
                            <p className="text-sm text-white/80 mt-1">Long-term partnerships</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative group h-full overflow-hidden">
                        <div className={`absolute -inset-0.5 bg-gradient-to-r ${industry.color} rounded-xl blur opacity-15 group-hover:opacity-30 transition duration-1000`}></div>
                        <div className="relative bg-black rounded-lg p-4 sm:p-5 pb-4 sm:pb-8 h-full">
                          <h3 className={`text-sm sm:text-xl font-bold bg-gradient-to-r ${industry.color} text-transparent bg-clip-text mb-2 sm:mb-4`}>
                            {industry.title.split(' ')[0]} Industry Excellence
                          </h3>
                          
                          <div className="mt-2 sm:mt-4 space-y-2 sm:space-y-3">
                            {industry.id === "financial" ? 
                              ["Regulatory Compliance", "Fraud Detection", "Payment Security"].map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${75 + idx * 5}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8, ease: "easeOut" }}
                                  className="relative h-2 bg-gray-800 rounded-full overflow-hidden"
                                >
                                  <div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                                  <div className="flex justify-between items-center mt-0.5 sm:mt-1">
                                    <span className="text-[9px] sm:text-xs text-gray-400">{feature}</span>
                                    <span className={`text-[9px] sm:text-xs text-${industry.color.split(' ')[0]}`}>{75 + idx * 5}%</span>
                                  </div>
                                </motion.div>
                              ))
                            : industry.id === "realestate" ?
                              ["Virtual Tours", "Property Search", "Lead Generation"].map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${75 + idx * 5}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8, ease: "easeOut" }}
                                  className="relative h-2 bg-gray-800 rounded-full overflow-hidden"
                                >
                                  <div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                                  <div className="flex justify-between items-center mt-0.5 sm:mt-1">
                                    <span className="text-[9px] sm:text-xs text-gray-400">{feature}</span>
                                    <span className={`text-[9px] sm:text-xs text-${industry.color.split(' ')[0]}`}>{75 + idx * 5}%</span>
                                  </div>
                                </motion.div>
                              ))
                            : industry.id === "ecommerce" ?
                              ["Conversion Rate", "Cart Recovery", "Customer Loyalty"].map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${75 + idx * 5}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8, ease: "easeOut" }}
                                  className="relative h-2 bg-gray-800 rounded-full overflow-hidden"
                                >
                                  <div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                                  <div className="flex justify-between items-center mt-0.5 sm:mt-1">
                                    <span className="text-[9px] sm:text-xs text-gray-400">{feature}</span>
                                    <span className={`text-[9px] sm:text-xs text-${industry.color.split(' ')[0]}`}>{75 + idx * 5}%</span>
                                  </div>
                                </motion.div>
                              ))
                            : industry.id === "blockchain" ?
                              ["Smart Contracts", "Decentralization", "Token Economy"].map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${75 + idx * 5}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8, ease: "easeOut" }}
                                  className="relative h-2 bg-gray-800 rounded-full overflow-hidden"
                                >
                                  <div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                                  <div className="flex justify-between items-center mt-0.5 sm:mt-1">
                                    <span className="text-[9px] sm:text-xs text-gray-400">{feature}</span>
                                    <span className={`text-[9px] sm:text-xs text-${industry.color.split(' ')[0]}`}>{75 + idx * 5}%</span>
                                  </div>
                                </motion.div>
                              ))
                            :
                              ["Streaming Quality", "User Engagement", "Content Delivery"].map((feature, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${75 + idx * 5}%` }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.5 + (idx * 0.2), duration: 0.8, ease: "easeOut" }}
                                  className="relative h-2 bg-gray-800 rounded-full overflow-hidden"
                                >
                                  <div className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${industry.color}`}></div>
                                  <div className="flex justify-between items-center mt-0.5 sm:mt-1">
                                    <span className="text-[9px] sm:text-xs text-gray-400">{feature}</span>
                                    <span className={`text-[9px] sm:text-xs text-${industry.color.split(' ')[0]}`}>{75 + idx * 5}%</span>
                                  </div>
                                </motion.div>
                              ))
                            }
                          </div>
                          
                          <div className="flex flex-wrap gap-1.5 sm:gap-3 mt-3 sm:mt-6">
                            {industry.id === "financial" ? 
                              ["Banking Software", "FinTech API", "Digital Payments"].map((tag, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                                  className={`inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full border border-${industry.color.split(' ')[0]}/30 bg-black/50`}
                                >
                                  <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${industry.color} mr-0.5 sm:mr-1`}></span>
                                  <span className="text-white/80 text-[8px] sm:text-xs">{tag}</span>
                                </motion.span>
                              ))
                            : industry.id === "realestate" ?
                              ["Property Search", "Virtual Tours", "CRM for Realtors"].map((tag, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                                  className={`inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full border border-${industry.color.split(' ')[0]}/30 bg-black/50`}
                                >
                                  <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${industry.color} mr-0.5 sm:mr-1`}></span>
                                  <span className="text-white/80 text-[8px] sm:text-xs">{tag}</span>
                                </motion.span>
                              ))
                            : industry.id === "ecommerce" ?
                              ["Shopping Cart", "Product Catalog", "Payment Gateway"].map((tag, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                                  className={`inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full border border-${industry.color.split(' ')[0]}/30 bg-black/50`}
                                >
                                  <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${industry.color} mr-0.5 sm:mr-1`}></span>
                                  <span className="text-white/80 text-[8px] sm:text-xs">{tag}</span>
                                </motion.span>
                              ))
                            : industry.id === "blockchain" ?
                              ["Web3 Development", "NFT Marketplace", "DAO Solutions"].map((tag, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                                  className={`inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full border border-${industry.color.split(' ')[0]}/30 bg-black/50`}
                                >
                                  <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${industry.color} mr-0.5 sm:mr-1`}></span>
                                  <span className="text-white/80 text-[8px] sm:text-xs">{tag}</span>
                                </motion.span>
                              ))
                            :
                              ["Video Streaming", "Content Management", "Media Analytics"].map((tag, i) => (
                                <motion.span
                                  key={i}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: 0.7 + (i * 0.1), duration: 0.3 }}
                                  className={`inline-flex items-center px-1.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-xs rounded-full border border-${industry.color.split(' ')[0]}/30 bg-black/50`}
                                >
                                  <span className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gradient-to-r ${industry.color} mr-0.5 sm:mr-1`}></span>
                                  <span className="text-white/80 text-[8px] sm:text-xs">{tag}</span>
                                </motion.span>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
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
              {t('industries.readyToTransform')} <span className="bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">{t('industries.industry')}</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 mx-auto max-w-3xl">
              {t('industries.readyToTransformDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              {/* "Start Your Project" button removed */}
              <a
                href="/#contact?tab=contact" 
                onClick={(e) => handleScrollAndSetTab(e, 'contact')}
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gray-900 text-white font-medium transition-all hover:bg-gray-800 border border-gray-800"
              >
                <span>{t('hero.contact')}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 