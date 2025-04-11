"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-24">
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
                Contact Us
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10"
            >
              Have a question or ready to start your next project? Reach out to our team and let's discuss how we can help bring your vision to life.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-950 rounded-xl p-8 border border-gray-800"
              >
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="How can we help?"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full bg-gray-900 border border-gray-700 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your project..."
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-950 rounded-xl p-8 border border-gray-800 mb-8"
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mt-1 mr-4 text-blue-400" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Email</h3>
                      <p className="text-white">info@progressit.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mt-1 mr-4 text-blue-400" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Phone</h3>
                      <p className="text-white">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mt-1 mr-4 text-blue-400" />
                    <div>
                      <h3 className="text-sm font-medium text-gray-400">Address</h3>
                      <p className="text-white">
                        123 Tech Plaza, Suite 200<br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gray-950 rounded-xl p-8 border border-gray-800"
              >
                <h2 className="text-2xl font-bold mb-6">Office Hours</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday</span>
                    <span className="text-white">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Saturday</span>
                    <span className="text-white">10:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Sunday</span>
                    <span className="text-white">Closed</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer companyName="Progress IT" />
    </main>
  );
} 