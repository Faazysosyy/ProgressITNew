"use client";

import React, { useState } from "react";
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
  const [activeTab, setActiveTab] = useState<"quote" | "contact">("contact");
  const [hoverButton, setHoverButton] = useState<string | null>(null);

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
              className="bg-gray-900 p-8 md:p-12 rounded-2xl shadow-xl mb-16 relative overflow-hidden border border-gray-800"
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto relative z-10">
                <motion.div
                  onMouseEnter={() => setHoverButton("calculator")}
                  onMouseLeave={() => setHoverButton(null)}
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="w-full bg-gray-800 rounded-xl overflow-hidden shadow-md group border border-gray-700"
                >
                  <div className="p-6 flex flex-col items-center text-center h-full">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${hoverButton === "calculator" ? "bg-blue-600 text-white" : "bg-gray-700 text-blue-400"}`}
                    >
                      <Calculator className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                      Project Calculator
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Get an instant estimate for your project based on your
                      requirements
                    </p>
                    <div className="mt-auto">
                      <Button className="group-hover:bg-blue-700 bg-blue-600 transition-all duration-300 flex items-center gap-2">
                        <a href="/calculator" className="flex items-center gap-2">
                          Calculate Now
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setHoverButton("project")}
                  onMouseLeave={() => setHoverButton(null)}
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="w-full bg-gray-800 rounded-xl overflow-hidden shadow-md group border border-gray-700"
                >
                  <div className="p-6 flex flex-col items-center text-center h-full">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${hoverButton === "project" ? "bg-indigo-600 text-white" : "bg-gray-700 text-indigo-400"}`}
                    >
                      <MessageSquare className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                      Project Details
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Tell us about your project needs and get a personalized
                      quote
                    </p>
                    <div className="mt-auto">
                      <Button className="group-hover:bg-indigo-700 bg-indigo-600 transition-all duration-300 flex items-center gap-2">
                        <a href="https://t.me/SlavoSS" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Start Now
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  onMouseEnter={() => setHoverButton("call")}
                  onMouseLeave={() => setHoverButton(null)}
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="w-full bg-gray-800 rounded-xl overflow-hidden shadow-md group border border-gray-700"
                >
                  <div className="p-6 flex flex-col items-center text-center h-full">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${hoverButton === "call" ? "bg-teal-600 text-white" : "bg-gray-700 text-teal-400"}`}
                    >
                      <Calendar className="w-8 h-8" />
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                      Schedule a Call
                    </h4>
                    <p className="text-gray-400 text-sm mb-4">
                      Book a consultation with our experts to discuss your
                      project in detail
                    </p>
                    <div className="mt-auto">
                      <Button className="group-hover:bg-teal-700 bg-teal-600 transition-all duration-300 flex items-center gap-2">
                        <a href="https://calendly.com/artjom-lupjak" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          Book Now
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
                    y: -10,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-gray-900 p-8 rounded-xl shadow-lg text-center relative overflow-hidden group border border-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-900 rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors duration-300">
                    <MapPin className="w-8 h-8 text-blue-400" />
                  </div>

                  <h4 className="text-2xl font-bold mb-2 text-white">
                    Riga, Latvia
                  </h4>
                  <a href="mailto:info@progressit.online" className="text-blue-400 mb-1 font-medium hover:underline">
                    info@progressit.online
                  </a>
                  <p className="text-gray-400 mt-1">+371 28674827</p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-4 pt-4 border-t border-gray-800"
                  >
                    <a href="https://maps.google.com/?q=Riga,Latvia" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="text-blue-400 border-gray-700 hover:bg-gray-800 hover:text-blue-300 hover:border-gray-600"
                      >
                        Get Directions
                      </Button>
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-gray-900 p-8 rounded-xl shadow-lg text-center relative overflow-hidden group border border-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-900 rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors duration-300">
                    <MapPin className="w-8 h-8 text-indigo-400" />
                  </div>

                  <h4 className="text-2xl font-bold mb-2 text-white">
                    Heidelberg, Germany
                  </h4>
                  <a href="mailto:v.popp@progressit.online" className="text-indigo-400 mb-1 font-medium hover:underline">
                    v.popp@progressit.online
                  </a>
                  <p className="text-gray-400 mt-1">+49 1781378688</p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-4 pt-4 border-t border-gray-800"
                  >
                    <a href="https://maps.google.com/?q=Heidelberg,Germany" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="text-indigo-400 border-gray-700 hover:bg-gray-800 hover:text-indigo-300 hover:border-gray-600"
                      >
                        Get Directions
                      </Button>
                    </a>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className="bg-gray-900 p-8 rounded-xl shadow-lg text-center relative overflow-hidden group border border-gray-800"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-transparent to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-teal-900 rounded-bl-full opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>

                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors duration-300">
                    <MapPin className="w-8 h-8 text-teal-400" />
                  </div>

                  <h4 className="text-2xl font-bold mb-2 text-white">
                    London, UK
                  </h4>
                  <a href="mailto:info@progressit.online" className="text-teal-400 mb-1 font-medium hover:underline">
                    info@progressit.online
                  </a>
                  <p className="text-gray-400 mt-1">+44 7440965458</p>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="mt-4 pt-4 border-t border-gray-800"
                  >
                    <a href="https://maps.google.com/?q=London,UK" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        className="text-teal-400 border-gray-700 hover:bg-gray-800 hover:text-teal-300 hover:border-gray-600"
                      >
                        Get Directions
                      </Button>
                    </a>
                  </motion.div>
                </motion.div>
              </div>

              {/* Direct contact methods */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-12 bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-800"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">
                        Email Us
                      </h4>
                      <a href="mailto:hello@progressit.online" className="text-blue-400 hover:underline">hello@progressit.online</a>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1 text-white">
                        Call Us
                      </h4>
                      <a href="tel:+12345678910" className="text-indigo-400 hover:underline">+12345678910</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;
