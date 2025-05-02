"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Calendar,
  Calculator,
  MessageSquare,
} from "lucide-react";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const ContactSection = ({
  title = "Let's Create Together",
  subtitle = "Ready to transform your digital presence? Reach out and let's build something extraordinary.",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
}: ContactSectionProps) => {
  const [activeTab, setActiveTab] = useState<"quote" | "contact">("quote");
  const [hoverButton, setHoverButton] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    console.log("ContactSection mounted or hash changed. Hash:", hash);
    let shouldScroll = false;

    if (hash.startsWith("#contact")) {
      shouldScroll = true; // Mark that we should scroll
      const params = new URLSearchParams(hash.split('?')[1]);
      const tab = params.get("tab");
      console.log("Found #contact hash. Tab parameter:", tab);
      if (tab === "contact") {
        setActiveTab("contact");
        console.log("Setting active tab to: contact");
      } else {
        setActiveTab("quote");
        console.log("Setting active tab to: quote (default or explicit)");
      }
    } else {
      // If the component renders without the #contact hash, default to quote
      setActiveTab("quote");
      console.log("No #contact hash found. Setting active tab to: quote (default)");
    }

    // Perform scrolling if the hash matched #contact
    if (shouldScroll) {
      const targetElement = document.getElementById('contact');
      if (targetElement) {
        // Use a small timeout to ensure the DOM is ready and tab switch has rendered
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          console.log("Scrolling to #contact section.");
        }, 100); // 100ms delay might be adjusted
      }
    }

    // Add listener for hash changes for dynamic updates
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      console.log("Hash changed to:", currentHash);
      let shouldScrollOnHashChange = false;
      if (currentHash.startsWith("#contact")) {
        shouldScrollOnHashChange = true;
        const params = new URLSearchParams(currentHash.split('?')[1]);
        const tab = params.get("tab");
        console.log("Hash changed - Tab parameter:", tab);
        if (tab === "contact") {
          setActiveTab("contact");
          console.log("Hash changed - Setting active tab to: contact");
        } else {
          setActiveTab("quote");
          console.log("Hash changed - Setting active tab to: quote");
        }
      } else {
        // Optional: handle cases where hash changes to something else
      }

      // Scroll if the new hash matches #contact
      if (shouldScrollOnHashChange) {
        const targetElement = document.getElementById('contact');
        if (targetElement) {
          // Use a small timeout
          setTimeout(() => {
             targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
             console.log("Hash changed - Scrolling to #contact section.");
          }, 100);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);

  }, []); // Empty dependency array means this runs on mount and cleans up on unmount

  return (
    <section
      id="contact"
      className="w-full py-24 bg-black text-white relative overflow-hidden"
    >
      {/* Main content */}
      <div className="progress-it-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20 max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-blue-600 text-white font-medium text-sm mb-4"
          >
            CONNECT WITH US
          </motion.span>
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text animate-gradient-x">
              Let's Create
            </span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Together and Build Something Extraordinary
          </h3>
          <p className="text-xl text-gray-400 mt-6">{subtitle}</p>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-800 p-1 rounded-xl shadow-md inline-flex">
            <button
              onClick={() => setActiveTab("quote")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === "quote" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
            >
              Get a Quote
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === "contact" ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
            >
              Contact Info
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "quote" ? (
            <motion.div
              key="quote"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0f1623]/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl mb-16 relative overflow-hidden border border-cyan-500/20"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-900 to-transparent rounded-bl-full opacity-30"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-900 to-transparent rounded-tr-full opacity-30"></div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent relative z-10"
              >
                How can we help you?
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-lg text-center text-gray-400 mb-12 max-w-3xl mx-auto relative z-10"
              >
                Our award-winning team has helped businesses of all sizes
                achieve digital excellence through custom solutions tailored to
                your specific needs.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto relative z-10">
                <motion.div
                  onMouseEnter={() => setHoverButton("calculator")}
                  onMouseLeave={() => setHoverButton(null)}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
                  }}
                  className="contact-card w-full bg-[#121a29]/90 rounded-lg overflow-hidden group border border-blue-900/30 relative hover:border-cyan-500/70 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300"></div>
                  <div className="p-6 flex flex-col items-center text-center h-full relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 relative overflow-hidden ${hoverButton === "calculator" ? "bg-blue-900/50 text-white shadow-lg shadow-blue-500/40" : "bg-gray-800/70 text-blue-400"}`}
                    >
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-lg`}></div>
                      <Calculator className="w-8 h-8 relative z-10" />
                    </div>
                    <h4 className="font-mono font-bold text-xl mb-2 text-white tracking-wide">
                      Project Calculator
                    </h4>
                    <p className="text-gray-400 text-sm mb-auto pb-6">
                      Get an instant estimate for your project based on your
                      requirements
                    </p>
                    <div className="mt-auto w-full">
                      <Button 
                        size="sm"
                        className="w-full group/btn bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 flex items-center gap-2 relative overflow-hidden py-2.5"
                      >
                        Calculate Now
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setHoverButton("project")}
                  onMouseLeave={() => setHoverButton(null)}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
                  }}
                  className="contact-card w-full bg-[#121a29]/90 rounded-lg overflow-hidden shadow-md group border border-indigo-900/30 relative hover:border-indigo-500/70 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300"></div>
                  <div className="p-6 flex flex-col items-center text-center h-full relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 relative overflow-hidden ${hoverButton === "project" ? "bg-indigo-900/50 text-white shadow-lg shadow-indigo-500/40" : "bg-gray-800/70 text-indigo-400"}`}
                    >
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-lg`}></div>
                      <MessageSquare className="w-8 h-8 relative z-10" />
                    </div>
                    <h4 className="font-mono font-bold text-xl mb-2 text-white tracking-wide">
                      Project Details
                    </h4>
                    <p className="text-gray-400 text-sm mb-auto pb-6">
                      Tell us about your project needs and get a personalized quote
                    </p>
                    <div className="mt-auto w-full">
                      <Button 
                        size="sm"
                        className="w-full group/btn bg-indigo-600 hover:bg-indigo-700 text-white transition-all duration-300 flex items-center gap-2 relative overflow-hidden py-2.5"
                      >
                        <a href="https://t.me/SlavoSS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Start Now
                          <Send className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setHoverButton("call")}
                  onMouseLeave={() => setHoverButton(null)}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(20, 184, 166, 0.3)",
                  }}
                  className="contact-card w-full bg-[#121a29]/90 rounded-lg overflow-hidden shadow-md group border border-teal-900/30 relative hover:border-teal-500/70 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300"></div>
                  <div className="p-6 flex flex-col items-center text-center h-full relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-500 relative overflow-hidden ${hoverButton === "call" ? "bg-teal-900/50 text-white shadow-lg shadow-teal-500/40" : "bg-gray-800/70 text-teal-400"}`}
                    >
                      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-lg`}></div>
                      <Calendar className="w-8 h-8 relative z-10" />
                    </div>
                    <h4 className="font-mono font-bold text-xl mb-2 text-white tracking-wide">
                      Schedule a Call
                    </h4>
                    <p className="text-gray-400 text-sm mb-auto pb-6">
                      Book a consultation with our experts to discuss your project in detail
                    </p>
                    <div className="mt-auto w-full">
                      <Button 
                        size="sm"
                        className="w-full group/btn bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300 flex items-center gap-2 relative overflow-hidden py-2.5"
                      >
                        <a href="https://calendly.com/artjom-lupjak" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Book Now
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              {/* Office Locations with enhanced design */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 0 25px rgba(59, 130, 246, 0.25)",
                  }}
                  className="contact-card w-full bg-[#121a29]/90 rounded-lg overflow-hidden shadow-md group border border-blue-900/40 relative hover:border-blue-500/70 transition-all duration-300 p-8 text-center"
                >
                  <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gray-800/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-900/50 transition-colors duration-300 relative overflow-hidden">
                       <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md`}></div>
                      <MapPin className="w-8 h-8 text-blue-400 relative z-10" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2 text-white font-mono tracking-wide">
                      Riga, Latvia
                    </h4>
                    <a href="mailto:info@progressit.online" className="text-blue-300 mb-1 font-medium hover:text-blue-200 hover:underline transition-colors">
                      info@progressit.online
                    </a>
                    <p className="text-gray-400 mt-1 font-mono">+371 28674827</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 0 25px rgba(168, 85, 247, 0.25)",
                  }}
                   className="contact-card w-full bg-[#121a29]/90 rounded-lg overflow-hidden shadow-md group border border-purple-900/40 relative hover:border-purple-500/70 transition-all duration-300 p-8 text-center"
                >
                   <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gray-800/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-900/50 transition-colors duration-300 relative overflow-hidden">
                       <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md`}></div>
                      <MapPin className="w-8 h-8 text-purple-400 relative z-10" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2 text-white font-mono tracking-wide">
                      Heidelberg, Germany
                    </h4>
                    <a href="mailto:v.popp@progressit.online" className="text-purple-300 mb-1 font-medium hover:text-purple-200 hover:underline transition-colors">
                      v.popp@progressit.online
                    </a>
                    <p className="text-gray-400 mt-1 font-mono">+49 1781378688</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 0 25px rgba(20, 184, 166, 0.25)",
                  }}
                  className="contact-card w-full bg-[#121a29]/90 rounded-lg overflow-hidden shadow-md group border border-teal-900/40 relative hover:border-teal-500/70 transition-all duration-300 p-8 text-center"
                >
                   <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gray-800/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-900/50 transition-colors duration-300 relative overflow-hidden">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md`}></div>
                      <MapPin className="w-8 h-8 text-teal-400 relative z-10" />
                    </div>
                    <h4 className="text-2xl font-bold mb-2 text-white font-mono tracking-wide">
                      London, UK
                    </h4>
                    <a href="mailto:info@progressit.online" className="text-teal-300 mb-1 font-medium hover:text-teal-200 hover:underline transition-colors">
                      info@progressit.online
                    </a>
                    <p className="text-gray-400 mt-1 font-mono">+44 7440965458</p>
                  </div>
                </motion.div>
              </div>

              {/* Direct contact methods (Styled similarly) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-12 bg-[#121a29]/90 p-8 rounded-lg shadow-lg border border-gray-800/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="flex items-center group">
                    <div className="w-14 h-14 rounded-full bg-gray-800/70 flex items-center justify-center mr-4 relative overflow-hidden group-hover:bg-blue-900/50 transition-colors duration-300">
                       <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md`}></div>
                      <Mail className="w-6 h-6 text-blue-400 relative z-10" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white font-mono tracking-wide">
                        Email Us
                      </h4>
                      <a href="mailto:hello@progressit.online" className="text-blue-300 hover:text-blue-200 hover:underline transition-colors">hello@progressit.online</a>
                    </div>
                  </div>

                  <div className="flex items-center group">
                    <div className="w-14 h-14 rounded-full bg-gray-800/70 flex items-center justify-center mr-4 relative overflow-hidden group-hover:bg-indigo-900/50 transition-colors duration-300">
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md`}></div>
                      <Phone className="w-6 h-6 text-indigo-400 relative z-10" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white font-mono tracking-wide">
                        Call Us
                      </h4>
                      <a href="tel:+12345678910" className="text-indigo-300 hover:text-indigo-200 hover:underline transition-colors">+12345678910</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
       {/* Style block for corner brackets (Re-using from previous attempt) */}
       <style jsx>{`
        .contact-card::before, .contact-card::after {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          border-style: solid;
          border-color: rgba(6, 182, 212, 0.3); /* Default cyan, adjust if needed per card */
          transition: all 0.3s ease;
          opacity: 0;
          pointer-events: none; /* Prevent brackets from interfering with hover */
        }
        .contact-card::before {
          top: 10px;
          left: 10px;
          border-width: 2px 0 0 2px;
        }
        .contact-card::after {
          bottom: 10px;
          right: 10px;
          border-width: 0 2px 2px 0;
        }
        .contact-card:hover::before, .contact-card:hover::after {
          opacity: 1;
          /* Example: Make border match hover color */
          /* You might need more specific selectors if card colors differ */
           border-color: currentColor; /* Inherits text color, or set specific */
        }
       
        /* Example: Specific hover color for blue card */
        .contact-card:hover:nth-child(1)::before,
        .contact-card:hover:nth-child(1)::after {
            border-color: #3b82f6; /* Blue */
        }
        /* Add similar rules for other cards if needed */
        .contact-card:hover:nth-child(2)::before,
        .contact-card:hover:nth-child(2)::after {
            border-color: #a855f7; /* Purple */
        }
         .contact-card:hover:nth-child(3)::before,
        .contact-card:hover:nth-child(3)::after {
            border-color: #14b8a6; /* Teal */
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
