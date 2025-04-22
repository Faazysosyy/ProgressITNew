"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const CreativeAlliance = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [animating, setAnimating] = useState(true);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const timer = setTimeout(() => {
      setAnimating(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Team members data for the dimensional team visualization
  const teamMembers = [
    {
      id: "node-1",
      name: "Elara V.",
      role: "Neural Architect",
      bio: "Pioneering brain-machine interfaces and consciousness mapping",
      planePosition: { x: -40, y: -40, z: 20 },
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "node-2",
      name: "Kai Zenith",
      role: "Quantum Developer",
      bio: "Creating algorithms that operate across multiple dimensions",
      planePosition: { x: 40, y: -20, z: -30 },
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "node-3",
      name: "Nova Chen",
      role: "System Designer",
      bio: "Crafting interfaces between human perception and digital realms",
      planePosition: { x: 20, y: 50, z: 10 },
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "node-4",
      name: "Aria Flux",
      role: "Data Sculptor",
      bio: "Transforming complex datasets into intuitive visual experiences",
      planePosition: { x: -30, y: 30, z: -20 },
      avatar: "/api/placeholder/400/400"
    },
    {
      id: "node-5",
      name: "Orion J.",
      role: "Creative Director",
      bio: "Unifying technological innovation with human-centered design",
      planePosition: { x: 10, y: -50, z: 40 },
      avatar: "/api/placeholder/400/400"
    }
  ];
  
  // Create connection lines between nodes
  const connections = [
    { from: "node-1", to: "node-3" },
    { from: "node-1", to: "node-5" },
    { from: "node-2", to: "node-4" },
    { from: "node-3", to: "node-5" },
    { from: "node-4", to: "node-5" }
  ];
  
  return (
    <section className="w-full bg-black overflow-hidden relative">
      {/* Combined section with both Creative Alliance and Dimensional Team */}
      <div className="min-h-screen py-10 relative flex flex-col">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Circuit Board Grid Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`h-${i}`} 
              className="absolute h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"
              style={{ top: `${(i + 1) * 5}%` }}
            />
          ))}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-purple-500/40 to-transparent"
              style={{ left: `${(i + 1) * 5}%` }}
            />
          ))}
        </div>
        
        <div className="container relative mx-auto z-20 flex flex-col px-6">
          {/* Creative Alliance Section - Top Part */}
          <div className="mb-12 pt-10">
            {/* Section Title with Futuristic Elements */}
            <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="mb-12 text-center"
            >
              <div className="relative inline-block">
                <div className="absolute -top-8 left-0 w-full">
                  <div className="flex justify-between text-xs text-cyan-400/70 uppercase tracking-[0.2em]">
                    <span>SYS.2050</span>
                    <span>ALLIANCE.PROTOCOL</span>
                    <span>V.3.4.2</span>
                  </div>
                  <div className="h-px w-full bg-gradient-to-r from-blue-500/0 via-cyan-400 to-blue-500/0 mt-1"></div>
                </div>
                
                <h2 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-500 to-purple-600 tracking-tight">
                  CREATIVE ALLIANCE
                </h2>
                
                <div className="absolute -bottom-8 left-0 w-full">
                  <div className="h-px w-full bg-gradient-to-r from-purple-500/0 via-fuchsia-500 to-purple-500/0 mb-1"></div>
                  <div className="flex justify-between text-xs text-fuchsia-400/70 uppercase tracking-[0.2em]">
                    <span>HYPERLINK</span>
                    <span>NEURAL.CONNECT</span>
                    <span>ACTIVE</span>
                  </div>
                </div>
              </div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-gray-300/80 mt-16 max-w-3xl mx-auto text-lg"
              >
                Forging next-generation technological alliances that transcend traditional boundaries
              </motion.p>
            </motion.div>
            
            {/* UVIO Logo Display */}
            <div className="flex flex-col md:flex-row justify-between w-full gap-16 md:gap-6 max-w-6xl mx-auto">
              {/* Left Logo */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex-1"
              >
                <div className="relative w-full p-6">
                  <div className="relative h-36 md:h-44 w-full flex items-center justify-center">
                    <div className="absolute -top-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                    <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                    
                    <Image 
                      src="/img/uvio.png" 
                      alt="UVIO Logo" 
                      width={240} 
                      height={80}
                      className="object-contain"
                    />
                    
                    <div className="absolute top-0 left-0">
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Right Logo */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="flex-1"
              >
                <div className="relative w-full p-6">
                  <div className="relative h-36 md:h-44 w-full flex items-center justify-center">
                    <div className="absolute -top-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
                    <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
                    
                    <Image 
                      src="/img/uvio.png" 
                      alt="UVIO Logo" 
                      width={240} 
                      height={80}
                      className="object-contain"
                    />
                    
                    <div className="absolute top-0 left-0">
                      <div className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Dimensional Team Section - Bottom Part */}
          <div className="pt-4 pb-16 flex flex-col items-center justify-center">
            {/* Dimensional Team Header */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-8 text-center relative"
            >
              <div className="flex justify-center space-x-6 text-xs tracking-widest mb-2">
                <span className="text-cyan-400">SYS.2050</span>
                <span className="text-blue-400">ALLIANCE.PROTOCOL</span>
                <span className="text-purple-400">V.3.4.2</span>
              </div>
              
              <h2 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                DIMENSIONAL TEAM
              </h2>
              
              <div className="flex justify-center space-x-8 text-xs tracking-widest opacity-80 mt-2">
                <span className="text-cyan-500">HYPERLINK</span>
                <span className="text-blue-400">NEURAL CONNECT</span>
                <span className="text-purple-500">ACTIVE</span>
              </div>
              
              <p className="max-w-lg mx-auto text-gray-400 text-sm mt-4">
                Forging next-generation technological alliances that transcend traditional boundaries
              </p>
            </motion.div>
            
            {/* Main Dimensional Plane */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className="relative w-full max-w-3xl h-80 mb-6"
            >
              {/* Background Grid */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 border border-gray-800"></div>
                <div className="absolute inset-0 rotate-45 border border-gray-800"></div>
                
                {/* Horizontal Lines */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={`h-${i}`} 
                    className="absolute w-full h-px bg-gray-800"
                    style={{ top: `${(i + 1) * 12.5}%` }}
                  ></div>
                ))}
                
                {/* Vertical Lines */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={`v-${i}`} 
                    className="absolute h-full w-px bg-gray-800"
                    style={{ left: `${(i + 1) * 12.5}%` }}
                  ></div>
                ))}
              </div>
              
              {/* Connection Lines with Moving Particles */}
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                  
                  {connections.map((connection, index) => (
                    <marker 
                      key={`arrow-${index}`}
                      id={`arrowhead-${index}`} 
                      markerWidth="10" 
                      markerHeight="7" 
                      refX="0" 
                      refY="3.5" 
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="url(#lineGradient)" />
                    </marker>
                  ))}
                </defs>
                
                {connections.map((connection, index) => {
                  const fromNode = teamMembers.find(m => m.id === connection.from);
                  const toNode = teamMembers.find(m => m.id === connection.to);
                  
                  if (!fromNode || !toNode) return null;
                  
                  // Calculate positions in viewport coordinates
                  const fromX = 50 + fromNode.planePosition.x;
                  const fromY = 50 + fromNode.planePosition.y;
                  const toX = 50 + toNode.planePosition.x;
                  const toY = 50 + toNode.planePosition.y;
                  
                  const isActive = activeNode === fromNode.id || activeNode === toNode.id;
                  
                  return (
                    <g key={`connection-${index}`}>
                      {/* Base connection line */}
                      <line 
                        x1={`${fromX}%`} 
                        y1={`${fromY}%`} 
                        x2={`${toX}%`} 
                        y2={`${toY}%`} 
                        className={`stroke-1 ${isActive ? 'stroke-cyan-400/40' : 'stroke-gray-700/60'} transition-colors duration-300`}
                      />
                      
                      {/* Animated gradient line */}
                      <line 
                        x1={`${fromX}%`} 
                        y1={`${fromY}%`} 
                        x2={`${toX}%`} 
                        y2={`${toY}%`} 
                        stroke="url(#lineGradient)"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        className={`${isActive ? 'opacity-100' : 'opacity-40'} transition-opacity duration-300`}
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          from="0"
                          to="24"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                      
                      {/* Moving data particles */}
                      {isActive && (
                        <circle 
                          r="3" 
                          fill="url(#lineGradient)" 
                          filter="drop-shadow(0 0 2px #06b6d4)"
                        >
                          <animateMotion
                            path={`M${fromX},${fromY} L${toX},${toY}`}
                            dur={`${1 + Math.random()}s`}
                            repeatCount="indefinite"
                            rotate="auto"
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}
              </svg>
              
              {/* Team Member Nodes */}
              {teamMembers.map((member) => {
                const { x, y, z } = member.planePosition;
                const isActive = activeNode === member.id;
                
                // Use constant scale instead of z-based scale
                const zOpacity = (z + 50) / 100; // Map -50 to 50 range to 0 to 1
                
                return (
                  <div 
                    key={member.id}
                    className={`absolute transition-all duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}
                    style={{ 
                      left: `${50 + x}%`, 
                      top: `${50 + y}%`, 
                      transform: `translate(-50%, -50%) scale(1.4)`, /* Fixed scale for all nodes */
                      transitionDelay: `${Math.random() * 300}ms`,
                      zIndex: member.id === "node-1" ? 10 : Math.round(z + 50)
                    }}
                  >
                    {/* Node */}
                    <button
                      className={`relative w-14 h-14 flex items-center justify-center focus:outline-none group`}
                      onClick={() => setActiveNode(isActive ? null : member.id)}
                    >
                      {/* Background Pulse */}
                      <div className={`absolute inset-0 rounded-full ${isActive ? 'animate-ping opacity-30 bg-blue-500' : 'opacity-0'}`}></div>
                      
                      {/* Photo Container */}
                      <div 
                        className={`w-full h-full rounded-full overflow-hidden transition-all duration-300 border-2 ${
                          isActive 
                            ? 'border-cyan-400 shadow-lg shadow-cyan-500/40' 
                            : 'border-gray-700 hover:border-cyan-900'
                        }`}
                      >
                        <div className="w-full h-full relative">
                          <Image 
                            src={`/img/team_${member.id === "node-2" 
                              ? 5 
                              : (parseInt(member.id.split('-')[1]) <= 4) 
                                ? parseInt(member.id.split('-')[1]) 
                                : (parseInt(member.id.split('-')[1]) % 4) + 1}.png`} 
                            alt={member.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                      </div>
                      
                      {/* Glowing Ring */}
                      <div 
                        className={`absolute -inset-1 rounded-full ${
                          isActive ? 'border border-cyan-400 animate-pulse opacity-70' : 'border border-gray-700 opacity-30'
                        }`}
                      ></div>

                      {/* Only show a small cyan indicator when active */}
                      {isActive && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 flex flex-col items-center">
                          <div className="w-1.5 h-1.5 bg-cyan-400"></div>
                          <div className="w-px h-4 bg-cyan-400/30"></div>
                        </div>
                      )}
                    </button>
                  </div>
                );
              })}

              {/* Central Information Display - Only visible when a team member is selected */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: activeNode ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
              >
                {activeNode && (() => {
                  const activeMember = teamMembers.find(m => m.id === activeNode);
                  if (!activeMember) return null;
                  const { x, y, z } = activeMember.planePosition;
                  
                  return (
                    <motion.div 
                      className="flex flex-col items-center"
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.4, type: "spring" }}
                    >
                      {/* Tech hexagon frame */}
                      <div className="absolute -inset-6 border border-cyan-500/30 rounded-lg"></div>
                      <div className="absolute -inset-6 border border-cyan-500/10 rounded-lg rotate-45"></div>
                      
                      {/* Animated tech lines */}
                      <motion.div 
                        className="absolute -top-8 left-1/2 w-px h-8 bg-gradient-to-b from-cyan-500/0 to-cyan-500"
                        animate={{ height: [0, 8], opacity: [0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                      />
                      <motion.div 
                        className="absolute -bottom-8 left-1/2 w-px h-8 bg-gradient-to-t from-cyan-500/0 to-cyan-500"
                        animate={{ height: [0, 8], opacity: [0, 1] }}
                        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                      />
                      
                      {/* Glowing background */}
                      <div className="absolute inset-0 bg-cyan-900/5 blur-xl rounded-full"></div>
                      
                      {/* Upper status bar */}
                      <div className="mb-4 bg-black/40 px-6 py-1 rounded-full border border-cyan-500/20 backdrop-blur-sm flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                        <span className="text-xs text-cyan-300 font-mono tracking-widest">NODE.ACTIVE</span>
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      </div>

                      {/* Name with tech style */}
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 mr-2"></div>
                        <motion.div 
                          className="text-2xl font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold tracking-wider mb-1"
                          animate={{ opacity: [0.8, 1, 0.8] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          {activeMember.name.split(' ')[0]}
                        </motion.div>
                      </div>
                      
                      {/* Role with smaller tech style */}
                      <div className="text-lg font-mono text-blue-300/90 tracking-wide mb-3">
                        {activeMember.role}
                      </div>
                      
                      {/* Tech line under text */}
                      <div className="w-48 h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500 to-cyan-500/0 mb-3"></div>
                      
                      {/* Dimensional Coordinates with tech styling */}
                      <div className="flex justify-between w-48 text-xs font-mono mt-2 px-2 py-1 border border-cyan-800/30 bg-black/30 rounded-sm">
                        <div className="flex flex-col items-center">
                          <span className="text-cyan-500">X</span>
                          <span className="text-gray-400">{x}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-cyan-500">Y</span>
                          <span className="text-gray-400">{y}</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-cyan-500">Z</span>
                          <span className="text-gray-400">{z}</span>
                        </div>
                      </div>
                      
                      {/* Connection status */}
                      <div className="mt-4 text-xs font-mono text-gray-500 flex items-center">
                        <motion.div 
                          className="w-1 h-1 bg-cyan-400 mr-1.5 rounded-full"
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span>CONNECTION.ESTABLISHED</span>
                      </div>
                    </motion.div>
                  );
                })()}
              </motion.div>
            </motion.div>
            
            {/* Dimensional Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="max-w-xl w-full flex justify-between items-center p-4 border-t border-gray-800 text-xs font-mono text-gray-500"
            >
              <div>NODES: {teamMembers.length}</div>
              <div>CONNECTIONS: {connections.length}</div>
              <div>DIMENSION: {activeNode ? 'ACTIVE' : 'STABLE'}</div>
              <div className="text-cyan-400">SYS.STATUS: OPERATIONAL</div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        div[style*="animation-delay"] {
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scaleY(1) }
          50% { transform: scaleY(1.5) }
        }
      `}</style>
    </section>
  );
};

export default CreativeAlliance; 