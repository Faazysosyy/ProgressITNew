"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
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

export default function Test() {
  // Using full service data with bullet points
  const services = [
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
    }
  ];
  
  return (
    <main className="min-h-screen bg-[#eee]">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="progress-it-container">
          <div className="max-w-4xl mb-16 text-black">
            <Link href="/" className="inline-flex items-center text-gray-600 hover:text-blue-500 mb-6 transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to home
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black">
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text animate-gradient-x">
                Card Layout Test
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-10">
              Showing service cards with leaning effect
            </p>
          </div>
          
          {/* Top Display - Regular Cards */}
          <div className="images-basic mb-32">
            {services.map((service, index) => (
              <div key={index}>
                <div 
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                >
                  <div className="p-6">
                    <div 
                      className="mb-4"
                      style={{ color: `hsl(${service.hue}, 70%, 50%)` }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p 
                      className="text-sm font-medium mb-3"
                      style={{ color: `hsl(${service.hue}, 70%, 50%)` }}
                    >
                      {service.tagline}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    {service.bulletPoints && (
                      <ul className="mt-3 space-y-2">
                        {service.bulletPoints.map((point, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start text-gray-600 text-xs"
                          >
                            <span 
                              className="mr-2 mt-1 h-1.5 w-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: `hsl(${service.hue}, 70%, 50%)` }}
                            ></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Leaning Cards Layout */}
          <div className="images-leaning">
            {services.map((service, index) => (
              <div key={index}>
                <div 
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                >
                  <div className="p-6 flex flex-col h-full">
                    <div 
                      className="mb-3"
                      style={{ color: `hsl(${service.hue}, 70%, 50%)` }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {service.title}
                    </h3>
                    <p 
                      className="text-sm font-medium mb-2"
                      style={{ color: `hsl(${service.hue}, 70%, 50%)` }}
                    >
                      {service.tagline}
                    </p>
                    <p className="text-gray-600 text-xs mb-3">
                      {service.description}
                    </p>
                    {service.bulletPoints && (
                      <ul className="mt-1 space-y-1.5">
                        {service.bulletPoints.slice(0, 3).map((point, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start text-gray-600 text-xs"
                          >
                            <span 
                              className="mr-1.5 mt-1 h-1 w-1 rounded-full flex-shrink-0"
                              style={{ backgroundColor: `hsl(${service.hue}, 70%, 50%)` }}
                            ></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer companyName="Progress IT" />
      
      <style jsx global>{`
        /* Base styles */
        .images-basic {
          width: 100%;
          max-width: 800px;
          padding: 2rem 0;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
        }
        
        .images-basic > div {
          width: 22%;
        }
        
        /* Leaning cards effect - Exactly matching the example image but with white card design */
        html, body {
          min-height: 100vh;
          min-width: 800px;
        }
        
        body {
          margin: 0 auto;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: #eee;
          font-size: 10px;
        }
        
        .images-leaning {
          box-sizing: border-box;
          width: 100%;
          min-width: 800px;
          margin: 10em auto 0;
          min-height: 380px;
          position: relative;
          background-repeat: no-repeat;
          background-image: linear-gradient(352deg, transparent 45.2%,
                                                  #bbb        45.5%,
                                                  #bbb        45.6%,
                                                  #ccc        45.8%,
                                                  #eee   60.0%),
                          linear-gradient(30deg, #ccc, #eee 90%);
          background-size: 100% 32.4em;
          background-position: 50% 100%;
        }

        .images-leaning > div {
          width: 280px;
          position: absolute;
          left: 50%;
          bottom: 7.8em;
          z-index: 0;
          display: flex;
          justify-content: flex-end;
        }
        
        /* shadows */
        .images-leaning > div:before {
          content: '';
          width: 70%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 7%;
          z-index: 1;
          background-repeat: no-repeat;
          background-image: linear-gradient(120deg, transparent 42%,
                                                  rgba(0,0,0,.15) 45%,
                                                  rgba(0,0,0,.35) 65%),
                          linear-gradient(20deg, transparent 38%,
                                                rgba(0,0,0,.25) 45%,
                                                rgba(0,0,0,.23) 55%,
                                                rgba(0,0,0,.13) 75%),
                          radial-gradient(ellipse at 50% 100%, rgba(0,0,0,.15) 3%, transparent 40%);
          transform: rotate(-8deg);
        }
        
        /* shading on image */
        .images-leaning > div:after {
          content: '';
          width: 70%;
          height: 100%;
          position: absolute;
          z-index: 3;
          background-image: linear-gradient(45deg, rgba(0,0,0,.3), transparent 70%),
                          linear-gradient(45deg, rgba(255,255,255,0) 60%, rgba(255,255,255,.3) 80%);
          transform: perspective(20em) rotateY(1deg) rotateZ(-5deg) skewY(-2deg) skewX(-1deg) scaleX(var(--resize));
        }

        .images-leaning > div > div {
          width: 70%;
          height: 100%;
          display: block;
          position: relative;
          z-index: 2;
          border-left: .2em solid;
          border-image: linear-gradient(105deg, transparent .5%, #bbb .7%) 1;
          box-shadow: .1em .2em 0 -.1em #aaa;
          transform: perspective(20em) rotateY(1deg) rotateZ(-5deg) skewY(-2deg) skewX(-1deg) scaleX(var(--resize));
        }

        .images-leaning > div:nth-of-type(4) {
          --resize: .99;
          margin-left: -40.4em;
        }
        
        .images-leaning > div:nth-of-type(4):before {
          background-size: 100% 85%, 100% 15%, 100% 10%;
          background-position: .1em 0, 0 100%, -3em 83%;
        }
        
        .images-leaning > div:nth-of-type(3) {
          --resize: .96;
          margin-left: -15.3em;
          transform: scaleY(.98) translate(-8em,-2.1em);
        }
        
        .images-leaning > div:nth-of-type(3):before {
          background-size: 100% 84%, 100% 16%, 100% 10%;
          background-position: .4em 0, 0 100%, -3em 81%;
        }
        
        .images-leaning > div:nth-of-type(2) {
          --resize: .925;
          margin-left: 10em;
          transform: scaleY(.965) translate(-17em,-4.2em);
        }
        
        .images-leaning > div:nth-of-type(2):before {
          background-size: 100% 83%, 100% 17%, 100% 10%;
          background-position: .6em 0, .1em 100%, -3em 81%;
        }
        
        .images-leaning > div:nth-of-type(1) {
          --resize: .895;
          margin-left: 35.2em;
          transform: scaleY(.94) translate(-26.6em,-6.2em);
        }
        
        .images-leaning > div:nth-of-type(1):before {
          background-size: 100% 82%, 100% 18%, 100% 10%;
          background-position: .8em 0, .1em 100%, -3em 80%;
        }
      `}</style>
    </main>
  );
} 