"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Code, Globe, Smartphone, Palette, Lightbulb, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";

export default function Services() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-10">
        <div className="progress-it-container">
          <div className="max-w-4xl mb-8">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-blue-500 mb-6 transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text animate-gradient-x">
                Our Services
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-6"
            >
              At Progress IT, we deliver comprehensive digital solutions tailored to your unique business needs. Our expert team combines technical expertise with creative innovation to help you achieve your digital goals.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-500 mb-10"
            >
              From building stunning websites to developing powerful applications, crafting engaging brand identities to implementing robust cybersecurity measures, we provide end-to-end services that drive results and create exceptional digital experiences.
            </motion.p>
          </div>
        </div>
      </section>

      <ServicesSection 
        title="Complete Service Offerings" 
        subtitle="Each service is tailored to meet your specific needs, ensuring exceptional results that exceed expectations."
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
              Our Comprehensive Digital Solutions
            </span>
          </motion.h2>
          
          {/* Website Development & Maintenance */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-24"
            id="website-development"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center">
                  <Code className="w-12 h-12 mb-6" style={{ color: 'hsl(210, 70%, 65%)' }} />
                  <h3 className="text-2xl font-bold mb-4">Website Development & Maintenance Services</h3>
                  <p className="text-gray-400">Custom websites with ongoing support to keep your digital presence operating at peak performance.</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Elevate Your Digital Presence with Expert Web Solutions</h3>
                <p className="text-gray-300 mb-6">
                  At Progress IT, we craft exceptional websites that not only look stunning but also deliver measurable business results. Our comprehensive website development and maintenance services ensure your site remains secure, up-to-date, and optimized for both users and search engines.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Custom Web Development</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Responsive, mobile-first design principles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Performance-optimized code architecture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Intuitive user interfaces and seamless UX</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">CMS Solutions</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>WordPress, Shopify, and custom CMS development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>User-friendly admin interfaces</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Content management training and support</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Ongoing Maintenance</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Regular security updates and monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Performance optimization and speed improvements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Backup management and disaster recovery</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Technical Support</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Dedicated support team for quick issue resolution</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Regular performance reporting and analytics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Proactive monitoring to prevent downtime</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* SEO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-24"
            id="seo"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center">
                  <Globe className="w-12 h-12 mb-6" style={{ color: 'hsl(160, 70%, 65%)' }} />
                  <h3 className="text-2xl font-bold mb-4">Search Engine Optimization</h3>
                  <p className="text-gray-400">Strategic SEO solutions to improve visibility and drive qualified organic traffic to your website.</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Amplify Your Online Visibility with Strategic SEO</h3>
                <p className="text-gray-300 mb-6">
                  Our comprehensive SEO services are designed to elevate your digital presence, improve search rankings, and drive targeted organic traffic to your website. We employ data-driven strategies and cutting-edge techniques to ensure your business stands out in an increasingly competitive digital landscape.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Technical SEO</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Site architecture optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Page speed enhancement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Mobile optimization & structured data</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">On-Page SEO</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Keyword research & content strategy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Meta tag optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Content enhancement for search intent</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Off-Page Optimization</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>High-quality backlink acquisition</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Digital PR & brand mentions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Social signals & online reputation management</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Analytics & Reporting</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Custom KPI tracking dashboards</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Comprehensive performance reports</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Competitor analysis & market insights</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Mobile App Development */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-24"
            id="mobile-app-development"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center">
                  <Smartphone className="w-12 h-12 mb-6" style={{ color: 'hsl(120, 70%, 65%)' }} />
                  <h3 className="text-2xl font-bold mb-4">Mobile Application Development</h3>
                  <p className="text-gray-400">Native and cross-platform mobile apps that deliver seamless experiences across all devices.</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Powerful Mobile Solutions for the Modern World</h3>
                <p className="text-gray-300 mb-6">
                  Our expert mobile development team creates innovative, user-focused applications that drive engagement and deliver exceptional experiences. Whether you need a native app for maximum performance or a cross-platform solution for broader reach, we deliver mobile products that exceed expectations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Native App Development</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>iOS development with Swift</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Android development with Kotlin</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Platform-specific optimizations</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Cross-Platform Solutions</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>React Native for consistent UI/UX</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Flutter for beautiful interfaces</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Single codebase efficiency</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Progressive Web Apps</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Offline functionality</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>App-like experience with web technology</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Fast loading and responsive design</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">App Lifecycle Management</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Ongoing maintenance and updates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Performance monitoring and optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Feature enhancements and scaling</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* UI/UX Design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-24"
            id="uiux-design"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center">
                  <Palette className="w-12 h-12 mb-6" style={{ color: 'hsl(280, 70%, 65%)' }} />
                  <h3 className="text-2xl font-bold mb-4">UI/UX Design & Optimization</h3>
                  <p className="text-gray-400">Intuitive and engaging user interfaces that create memorable digital experiences and drive conversions.</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Transform User Experiences with Exceptional Design</h3>
                <p className="text-gray-300 mb-6">
                  Our UI/UX design team creates intuitive, visually stunning interfaces that enhance user satisfaction and drive business results. We combine aesthetic excellence with deep user research to craft digital experiences that delight users and achieve your business objectives.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">User Research & Strategy</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>User personas & journey mapping</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Competitive analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Information architecture design</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Interface Design</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Wireframing & prototyping</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Visual design & brand integration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Responsive & mobile-first design</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Usability & Accessibility</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>WCAG compliance implementation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Usability testing & analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Inclusive design principles</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Optimization & Improvement</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Conversion rate optimization (CRO)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>A/B testing & data-driven refinement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>User satisfaction measurement</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Brand Identity */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-24"
            id="brand-identity"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center">
                  <Lightbulb className="w-12 h-12 mb-6" style={{ color: 'hsl(330, 70%, 65%)' }} />
                  <h3 className="text-2xl font-bold mb-4">Brand Identity Development</h3>
                  <p className="text-gray-400">Strategic brand development that establishes a strong market presence and connects with your target audience.</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Create a Distinctive Brand that Resonates</h3>
                <p className="text-gray-300 mb-6">
                  Our brand identity services help you develop a cohesive, memorable brand that captivates your audience and differentiates your business. From visual elements to voice and messaging, we craft comprehensive brand systems that build recognition and foster customer loyalty.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Brand Strategy</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Market positioning & differentiation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Brand architecture & naming</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Value proposition development</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Visual Identity</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Logo design & variations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Color palette & typography system</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Iconography & image style guidelines</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Voice & Messaging</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Brand voice & tone development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Messaging framework & key narratives</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Content strategy alignment</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Brand Implementation</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Comprehensive brand guidelines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Digital & print collateral design</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Brand launch & activation strategy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Custom Web Applications */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
            id="custom-web-applications"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center">
                  <Rocket className="w-12 h-12 mb-6" style={{ color: 'hsl(0, 70%, 65%)' }} />
                  <h3 className="text-2xl font-bold mb-4">Custom Web Application Development</h3>
                  <p className="text-gray-400">Bespoke web applications designed to solve specific business challenges and streamline operations.</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Tailored Solutions for Complex Business Needs</h3>
                <p className="text-gray-300 mb-6">
                  Our custom web application development services deliver powerful, scalable solutions that address your unique business requirements. From enterprise systems to SaaS platforms, we build robust applications that optimize workflows, enhance productivity, and drive growth.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Enterprise Applications</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Workflow & process automation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Business intelligence dashboards</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Custom CRM & ERP solutions</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">SaaS Platforms</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Multi-tenant architecture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Subscription & billing management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Scalable cloud infrastructure</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">API Development</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>RESTful & GraphQL API design</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Third-party integration services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Microservices architecture</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Performance & Security</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Load testing & performance optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Security audit & vulnerability testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Continuous integration/deployment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* AI Development & Implementation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-24"
            id="ai-development"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-12 h-12 mb-6" 
                    style={{ color: 'hsl(230, 70%, 65%)' }}
                  >
                    <path d="M12 2c1.7 0 3 1.3 3 3 0 1.3-.8 2.4-2 2.8v.2c0 .6.4 1 1 1h1c1.7 0 3 1.3 3 3 0 1.3-.8 2.4-2 2.8v.2c0 .6.4 1 1 1h1c1.7 0 3 1.3 3 3s-1.3 3-3 3h-8c-3.4 0-5.9-1.2-7-2.6C1.8 18.6 2 16.6 3 15l1-2-1-1c-1-1-1-3 0-4l1-1-1-1c-1.3-1.3-1.3-3.3 0-4.6C4.1 .1 6.2 0 9 0h3Z"/>
                    <path d="M16 19h-.3c-.5 0-1-.1-1.5-.4l-3-1.5c-.4-.2-.7-.6-.7-1.1"/>
                    <path d="M13 7c0 1.5.8 2.8 2 3.5 1.3.6 2.3 1.5 3 2.5"/>
                  </svg>
                  <h3 className="text-2xl font-bold mb-4">Enterprise AI Development & Implementation</h3>
                  <p className="text-gray-400">Advanced artificial intelligence solutions that transform business operations and create competitive advantages.</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Harnessing the Power of Artificial Intelligence for Business Transformation</h3>
                <p className="text-gray-300 mb-6">
                  Our comprehensive AI development services help organizations leverage cutting-edge artificial intelligence technologies to solve complex business challenges, automate processes, and gain valuable insights from data. With a focus on practical implementation and measurable results, we deliver AI solutions that drive real business value.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Machine Learning Development</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Custom ML model development and training</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Supervised and unsupervised learning solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Predictive analytics implementation</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Natural Language Processing</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Domain-specific LLM fine-tuning and deployment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Sentiment analysis and text classification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Multilingual content processing capabilities</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Computer Vision Solutions</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Object detection and image recognition</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Automated visual inspection systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Video analytics and surveillance enhancement</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Intelligent Automation</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Robotic Process Automation (RPA) with AI</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Intelligent document processing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Cognitive workflow optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">AI Strategy & Consulting</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>AI readiness assessment and roadmap development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Data strategy and governance frameworks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Ethical AI implementation guidance</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Custom AI Application Development</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>AI-powered recommendation engines</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Conversational AI and virtual assistants</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Decision support systems with explainable AI</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add new section for Gambling & Sportbetting Solutions */}
      <section className="py-20 bg-black" id="gambling-solutions">
        <div className="progress-it-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3">
                <div className="bg-gray-950 p-8 rounded-2xl border border-gray-800 flex flex-col items-center text-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-12 h-12 mb-6" 
                    style={{ color: 'hsl(200, 70%, 65%)' }}
                  >
                    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z"/>
                    <path d="M9 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    <path d="M15 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    <path d="M9 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    <path d="M5 15h14"/>
                    <path d="M12 5v14"/>
                  </svg>
                  <h3 className="text-2xl font-bold mb-4">Custom Gambling & Sportbetting Solutions</h3>
                  <p className="text-gray-400">Advanced iGaming platforms and custom casino solutions designed for compliance, security, and player engagement.</p>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Custom Gambling & Sportbetting Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Our specialized team develops cutting-edge gambling and betting software solutions that combine security, performance, and engaging user experiences. From online casinos to sportsbooks, we deliver customized platforms that comply with regulatory requirements while maximizing player engagement and operator revenue.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Casino Game Development</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Custom slot game development with unique themes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Table games and live dealer integration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Progressive jackpot systems and gamification</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Sportsbetting Platforms</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Real-time odds management systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Live betting and match streaming integration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Custom betting markets and prop bets creation</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">Gambling Platform Operations</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Payment gateway and cryptocurrency integration</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>KYC/AML compliance and responsible gambling tools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Admin panels and real-time reporting dashboards</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-950 p-6 rounded-xl border border-gray-800">
                    <h4 className="text-xl font-semibold mb-3">iGaming Innovation</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>AI-powered personalized player experiences</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>VR/AR casino environments and games</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0"></span>
                        <span>Blockchain-based provably fair gaming solutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="progress-it-container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Our team of experts is ready to help you achieve your goals. Let's discuss your project and create a solution that's perfect for your business.
            </p>
            <Link 
              href="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-md inline-flex items-center transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      
      <Footer companyName="Progress IT" />
    </main>
  );
} 