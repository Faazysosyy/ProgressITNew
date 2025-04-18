"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const router = useRouter();

  // Redirect to home page after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 4000);
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />
      
      <div className="h-screen flex flex-col items-center justify-center relative">
        {/* Tech grid background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
              style={{ top: `${(i + 1) * 5}%` }}
            />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
              style={{ left: `${(i + 1) * 5}%` }}
            />
          ))}
        </div>
        
        <div className="max-w-2xl mx-auto text-center px-6 relative z-10">
          {/* Status indicator */}
          <div className="flex justify-center space-x-6 text-xs tracking-widest mb-4">
            <span className="text-red-500">ERROR.404</span>
            <span className="text-gray-500">ACCESS.DENIED</span>
            <span className="text-gray-500">SYS.2050</span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-md border border-red-500/20 rounded-lg p-10 mb-6"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400"
            >
              Access Restricted
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8"
            >
              This page is currently unavailable or under maintenance.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-sm text-gray-500 font-mono"
            >
              Redirecting to home page in 4 seconds...
            </motion.div>
          </motion.div>
          
          {/* System status */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center items-center"
          >
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
              <motion.div 
                className="w-1.5 h-1.5 bg-red-500 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span>CONTACT.SYSTEM: OFFLINE</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer companyName="Progress IT" />
    </main>
  );
} 