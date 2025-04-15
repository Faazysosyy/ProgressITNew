"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Code, Clock, Users, DollarSign, Calendar, Server } from 'lucide-react';
import BigBangAnimation from "@/components/BigBangAnimation";
import MatrixAnimation from '@/components/BigBangAnimation';

interface FeatureOption {
  id: string;
  name: string;
  cost: number;
  time: number;
  category: string;
}

interface ProjectType {
  id: string;
  name: string;
  multiplier: number;
}

interface CalculationResults {
  cost: number;
  time: number;
  team: number;
  maintenance: number;
}

const CalculatorPage = () => {
  const [projectType, setProjectType] = useState<string>('');
  const [complexity, setComplexity] = useState<'low' | 'medium' | 'high' | 'insane'>('medium');
  const [teamSize, setTeamSize] = useState<number>(5);
  const [features, setFeatures] = useState<string[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);
  
  const [showExplosion, setShowExplosion] = useState<boolean>(false);
  
  const featureOptions: FeatureOption[] = [
    // Core Features
    { id: 'auth', name: 'User Authentication', cost: 2000, time: 5, category: 'core' },
    { id: 'api', name: 'API Integration', cost: 3000, time: 7, category: 'core' },
    { id: 'db', name: 'Database Design', cost: 2500, time: 6, category: 'core' },
    { id: 'cloud', name: 'Cloud Deployment', cost: 1800, time: 4, category: 'core' },
    { id: 'ui', name: 'UI/UX Design', cost: 4000, time: 10, category: 'core' },
    { id: 'admin', name: 'Admin Dashboard', cost: 3500, time: 8, category: 'core' },
    { id: 'search', name: 'Search Functionality', cost: 2200, time: 5, category: 'core' },
    { id: 'notifications', name: 'User Notifications', cost: 1500, time: 4, category: 'core' },
    
    // Security Features
    { id: 'security', name: 'Security Assessment', cost: 3500, time: 8, category: 'security' },
    { id: 'encryption', name: 'Data Encryption', cost: 2800, time: 6, category: 'security' },
    { id: 'oauth', name: 'OAuth/SSO', cost: 2200, time: 5, category: 'security' },
    { id: 'compliance', name: 'Compliance (GDPR/HIPAA)', cost: 4500, time: 12, category: 'security' },
    { id: 'audit', name: 'Audit Logging', cost: 2000, time: 5, category: 'security' },
    { id: 'rbac', name: 'Role-based Access Control', cost: 2800, time: 7, category: 'security' },
    { id: 'pentest', name: 'Penetration Testing', cost: 5000, time: 10, category: 'security' },
    { id: 'mfa', name: 'Multi-factor Authentication', cost: 1800, time: 4, category: 'security' },
    
    // Advanced Features
    { id: 'ml', name: 'Machine Learning', cost: 6000, time: 15, category: 'advanced' },
    { id: 'analytics', name: 'Analytics Dashboard', cost: 3800, time: 9, category: 'advanced' },
    { id: 'realtime', name: 'Real-time Features', cost: 4200, time: 10, category: 'advanced' },
    { id: 'payments', name: 'Payment Processing', cost: 3500, time: 8, category: 'advanced' },
    { id: 'recommender', name: 'Recommendation Engine', cost: 5500, time: 12, category: 'advanced' },
    { id: 'nlp', name: 'Natural Language Processing', cost: 7000, time: 18, category: 'advanced' },
    { id: 'vision', name: 'Computer Vision', cost: 8000, time: 20, category: 'advanced' },
    { id: 'chatbot', name: 'AI Chatbot/Assistant', cost: 6500, time: 15, category: 'advanced' },
    
    // Quality Assurance
    { id: 'test', name: 'Automated Testing', cost: 2200, time: 6, category: 'qa' },
    { id: 'performance', name: 'Performance Optimization', cost: 3000, time: 7, category: 'qa' },
    { id: 'localization', name: 'Localization/i18n', cost: 2500, time: 6, category: 'qa' },
    { id: 'accessibility', name: 'Accessibility (WCAG)', cost: 2700, time: 7, category: 'qa' },
    { id: 'usability', name: 'Usability Testing', cost: 3200, time: 8, category: 'qa' },
    { id: 'stresstest', name: 'Load/Stress Testing', cost: 2800, time: 7, category: 'qa' },
    { id: 'crossbrowser', name: 'Cross-browser Testing', cost: 2000, time: 5, category: 'qa' },
    { id: 'e2e', name: 'End-to-End Testing', cost: 3500, time: 9, category: 'qa' },
    
    // Infrastructure
    { id: 'cicd', name: 'CI/CD Pipeline', cost: 3200, time: 8, category: 'infra' },
    { id: 'containers', name: 'Containerization', cost: 2800, time: 7, category: 'infra' },
    { id: 'monitoring', name: 'Monitoring/Logging', cost: 2400, time: 6, category: 'infra' },
    { id: 'backup', name: 'Backup & Recovery', cost: 2000, time: 5, category: 'infra' },
    { id: 'scaling', name: 'Auto-scaling', cost: 3500, time: 8, category: 'infra' },
    { id: 'cdn', name: 'CDN Integration', cost: 1500, time: 3, category: 'infra' },
    { id: 'serverless', name: 'Serverless Architecture', cost: 4000, time: 10, category: 'infra' },
    { id: 'microservices', name: 'Microservices', cost: 5500, time: 14, category: 'infra' },
    
    // Mobile Specific
    { id: 'push', name: 'Push Notifications', cost: 1800, time: 4, category: 'mobile' },
    { id: 'offline', name: 'Offline Mode', cost: 2500, time: 6, category: 'mobile' },
    { id: 'biometric', name: 'Biometric Auth', cost: 2200, time: 5, category: 'mobile' },
    { id: 'geolocation', name: 'Geolocation Features', cost: 2000, time: 5, category: 'mobile' },
    { id: 'camera', name: 'Camera Integration', cost: 1800, time: 4, category: 'mobile' },
    { id: 'ar-mobile', name: 'AR Features', cost: 4500, time: 12, category: 'mobile' },
    { id: 'appstore', name: 'App Store Optimization', cost: 1500, time: 4, category: 'mobile' },
    { id: 'crossplatform', name: 'Cross-platform Support', cost: 3000, time: 8, category: 'mobile' }
  ];
  
  const projectTypes: ProjectType[] = [
    { id: 'web', name: 'Web Application', multiplier: 1 },
    { id: 'mobile', name: 'Mobile App', multiplier: 1.2 },
    { id: 'saas', name: 'SaaS Product', multiplier: 1.5 },
    { id: 'ecommerce', name: 'E-commerce Platform', multiplier: 1.3 },
    { id: 'crm', name: 'CRM System', multiplier: 1.4 },
    { id: 'erp', name: 'ERP Solution', multiplier: 1.6 },
    { id: 'iot', name: 'IoT System', multiplier: 1.7 },
    { id: 'ai', name: 'AI/ML Solution', multiplier: 1.8 },
    { id: 'blockchain', name: 'Blockchain Application', multiplier: 1.9 },
    { id: 'devops', name: 'DevOps Automation', multiplier: 1.4 },
    { id: 'datawarehouse', name: 'Data Warehouse', multiplier: 1.5 },
    { id: 'analytics', name: 'Analytics Platform', multiplier: 1.6 },
    { id: 'cybersecurity', name: 'Cybersecurity Solution', multiplier: 1.7 },
    { id: 'ar', name: 'AR/VR Application', multiplier: 2.0 },
    { id: 'legacy', name: 'Legacy System Migration', multiplier: 1.5 },
    { id: 'other', name: 'Other (I have the Next Facebook idea)', multiplier: 2.5 }
  ];
  
  const complexityMultipliers: Record<'low' | 'medium' | 'high' | 'insane', number> = {
    low: 0.7,
    medium: 1,
    high: 1.5,
    insane: 2.2
  };
  
  const [tooManyFeatures, setTooManyFeatures] = useState<boolean>(false);
  const [showNoThankYou, setShowNoThankYou] = useState<boolean>(false);
  const [showAreYouSure, setShowAreYouSure] = useState<boolean>(false);
  const [showFinalMessage, setShowFinalMessage] = useState<boolean>(false);
  
  const handleFeatureToggle = (featureId: string) => {
    let newFeatures: string[];
    if (features.includes(featureId)) {
      newFeatures = features.filter(id => id !== featureId);
    } else {
      newFeatures = [...features, featureId];
    }
    
    // Check if we've gone from >10 features to ≤10 features
    if (features.length > 10 && newFeatures.length <= 10) {
      // Reset all the UI states if user reduced features below threshold
      setShowNoThankYou(false);
      setShowAreYouSure(false);
      setShowFinalMessage(false);
    }
    
    setFeatures(newFeatures);
    setTooManyFeatures(newFeatures.length > 10);
  };
  
  const calculateResults = (): CalculationResults => {
    const selectedProject = projectTypes.find(p => p.id === projectType);
    const projectMultiplier = selectedProject ? selectedProject.multiplier : 1;
    const complexityMultiplier = complexityMultipliers[complexity];
    
    let baseCost = 5000;
    let baseTime = 35; // Minimum 35 days as baseline
    
    const selectedFeatures = featureOptions.filter(f => features.includes(f.id));
    const featureCost = selectedFeatures.reduce((sum, feature) => sum + feature.cost, 0);
    const featureTime = selectedFeatures.reduce((sum, feature) => sum + feature.time, 0);
    
    // Calculate base time and cost without team size consideration
    const baseTotalCost = Math.round((baseCost + featureCost) * projectMultiplier * complexityMultiplier);
    const baseTotalTime = Math.round((baseTime + featureTime) * complexityMultiplier);
    
    // Adjust time based on team size - only increasing time when team is smaller than standard
    // Using a standard team of 5 as baseline
    // If team size is less than 5, timeline increases non-linearly
    // If team size is 5 or more, timeline stays standard
    const standardTeamSize = 5;
    let timeMultiplier = 1;
    
    if (teamSize < standardTeamSize) {
      timeMultiplier = Math.pow(standardTeamSize/teamSize, 0.7); // Non-linear increase for smaller teams
    }
    
    const adjustedTime = Math.round(baseTotalTime * timeMultiplier);
    
    // Total cost still increases with team size (due to coordination overhead)
    // but is related to the total developer-days
    const totalCost = Math.round(baseTotalCost * (0.9 + (teamSize * 0.05)));
    
    return {
      cost: totalCost,
      time: adjustedTime,
      team: teamSize,
      maintenance: Math.round(totalCost * 0.2)
    };
  };
  
  const results = showResults ? calculateResults() : null;

  const handleTeamSizeChange = (newSize: number) => {
    const newTeamSize = Math.min(40, Math.max(0, newSize));
    setTeamSize(newTeamSize);
    
    if (newTeamSize === 40 && complexity === 'insane') {
      setShowExplosion(true);
    }
  };

  const handleComplexityChange = (newComplexity: 'low' | 'medium' | 'high' | 'insane') => {
    setComplexity(newComplexity);
    
    if (teamSize === 40 && newComplexity === 'insane') {
      setShowExplosion(true);
    }
  };

  const handleExplosionComplete = () => {
    setShowExplosion(false);
  };

  // Big Bang animation show/hide control
  const [showBigBang, setShowBigBang] = useState(false);

  // Function to close the Big Bang animation
  const handleCloseBigBang = () => {
    setShowBigBang(false);
  };

  // Function to trigger Big Bang animation when conditions are met
  useEffect(() => {
    if (teamSize === 40 && complexity === 'insane') {
      setShowBigBang(true);
    }
  }, [teamSize, complexity]);

  // Function to handle hover animation on feature options
  const handleFeatureHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    (target as HTMLElement).style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(25, 130, 196, 0.3), transparent 50%)`;
    (target as HTMLElement).style.borderImage = 'linear-gradient(45deg, #007bff, #00d2ff) 1';
    (target as HTMLElement).style.borderImageSlice = '1';
  };

  // Function to handle mouse leave on feature options
  const handleFeatureLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    (target as HTMLElement).style.background = 'transparent';
    (target as HTMLElement).style.borderImage = 'none';
    (target as HTMLElement).style.border = '1px solid rgba(255, 255, 255, 0.1)';
  };

  return (
    <section className="w-full pt-0 pb-28 bg-black text-white relative overflow-hidden">
      {/* Big Bang Animation for 40 developers + Insane complexity */}
      {showBigBang && <MatrixAnimation onAnimationComplete={handleCloseBigBang} />}

      {/* Cyberpunk Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01NC44MjcgNDUuNDk2YTE1Ljc5IDE1Ljc5IDAgMCAxLTIuNzY5IDMuNzg4Yy0xOC40NTQgMTguODUyLTQ5Ljk4OSA4LjI0NC01My41MjMtMjAuNjIxYTExLjc2IDExLjc2IDAgMCAxIDEuMjg1LTcuMzM4QzEuMzM0IDkuOTUyIDcuOTA1IDAgMTUgMGM0LjQ2NCAwIDYuOTQyIDIuOTc5IDEwLjAzOSA2LjIxbDEuNTQ0IDEuNTY3YTI0IDI0IDAgMCAxIDcuMjk3IDEyLjcwM2wuMTgzLjk2OHYuMjA1YTE1LjQxIDE1LjQxIDAgMCAxLTEuNzcgOC40MzQgNC42NSA0LjY1IDAgMCAwLS41MTMgMi4xNTRjLjA2IDEuMjUyLjUxMyAyLjUwMyAxLjM2NiAzLjY2N2E3LjA2IDcuMDYgMCAwIDAgMy4wNSAyLjQzNmMzLjQ0NyAxLjI5NyA3LjUwOC0uNTM2IDkuNTg2LTMuMDlhMTEuMjIgMTEuMjIgMCAwIDAgMi4xMi02LjA2NCAyNC45NiAyNC45NiAwIDAgMC0xLjA5NS03LjQ0MyAxNC42OSAxNC42OSAwIDAgMSAuODU4LTkuOTA1QTEyLjAyIDEyLjAyIDAgMCAxIDUxLjIzIDYuNDlhMTYuMjYgMTYuMjYgMCAwIDEgOC40OS0yLjgxIDExLjYyIDExLjYyIDAgMCAxIDUuNDggMTMuMjlhMzIuNjYgMzIuNjYgMCAwIDAtNS4wNzYgNC43NDFBMjguODEgMjguODEgMCAwIDAgNTQuODI3IDQ1LjQ5NnoiIGZpbGw9IiMwMGIzZmYiIGZpbGwtb3BhY2l0eT0iLjAzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/20 to-transparent"></div>
      <div className="absolute -left-20 top-1/3 w-40 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -right-20 top-2/3 w-40 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Introduction Section */}
      <div className="progress-it-container relative z-10 max-w-4xl mx-auto px-4 pt-24 pb-16">
        <div className="text-center relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-60 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
            Project Cost Estimator
          </h1>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 mb-6">
              Instantly calculate the cost, timeline, and resource requirements for your next technology project with our advanced estimation tool.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-[#121a29]/60 p-5 rounded-lg border border-cyan-500/10 relative group">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-cyan-500/30 rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-500/30 rounded-full"></div>
                <div className="text-cyan-400 text-3xl mb-3 flex justify-center">🔍</div>
                <h3 className="text-lg font-semibold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Define Your Project</h3>
                <p className="text-gray-400 text-sm text-center">Select your project type, complexity level, and team size to start building your estimate.</p>
              </div>
              <div className="bg-[#121a29]/60 p-5 rounded-lg border border-purple-500/10 relative group">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-500/30 rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-500/30 rounded-full"></div>
                <div className="text-purple-400 text-3xl mb-3 flex justify-center">⚙️</div>
                <h3 className="text-lg font-semibold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">Select Features</h3>
                <p className="text-gray-400 text-sm text-center">Choose from core, security, infrastructure, and advanced features to customize your project scope.</p>
              </div>
              <div className="bg-[#121a29]/60 p-5 rounded-lg border border-blue-500/10 relative group">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-blue-500/30 rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500/30 rounded-full"></div>
                <div className="text-blue-400 text-3xl mb-3 flex justify-center">📊</div>
                <h3 className="text-lg font-semibold mb-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Get Detailed Estimate</h3>
                <p className="text-gray-400 text-sm text-center">Receive instant calculation of cost, timeline, team size, and annual maintenance requirements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="progress-it-container relative z-10 max-w-3xl mx-auto px-4">
        {/* Calculator Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-[#0f1623]/80 backdrop-blur-sm rounded-2xl shadow-[0_0_15px_rgba(5,230,255,0.15)] p-6 md:p-8 border border-cyan-500/20 mt-16"
        >
          {/* Project Calculator */}
          <div className="text-white">
            <div className="flex items-center justify-center mb-8 relative">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
              <Calculator className="w-8 h-8 text-cyan-400 mr-3" />
              <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">IT Project Calculator</h1>
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-28 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
            </div>
            
            <div className="space-y-8">
              {/* Project Details Section */}
              <div className="bg-[#121a29]/80 p-6 rounded-lg border border-[#1e2c45] relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-500/5 rounded-bl-3xl"></div>
                <div className="absolute -top-1 -left-1 w-3 h-3 bg-cyan-500/30 rounded-full"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-500/30 rounded-full"></div>
                
                <h2 className="text-lg font-semibold mb-6 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-cyan-400" />
                  <span className="relative">
                    Project Details
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent"></span>
                  </span>
                </h2>
                
                <div className={`mb-6 relative ${!projectType ? 'pt-3 pb-3 px-3 -mx-3' : ''}`}>
                  <label className="block mb-2 text-gray-300">Project Type</label>
                  
                  {!projectType && (
                    <>
                      {/* Animated highlight border when no project type selected */}
                      <div className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden">
                        {/* Top border animation */}
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500/70 via-purple-500/70 to-cyan-500/70 animate-[pulse_3s_ease-in-out_infinite]"></div>
                        
                        {/* Bottom border animation */}
                        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-500/70 via-purple-500/70 to-blue-500/70 animate-[pulse_3s_ease-in-out_infinite]"></div>
                        
                        {/* Left border animation */}
                        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-gradient-to-b from-cyan-500/70 via-blue-500/70 to-purple-500/70 animate-[pulse_3s_ease-in-out_infinite]"></div>
                        
                        {/* Right border animation */}
                        <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-gradient-to-b from-purple-500/70 via-blue-500/70 to-cyan-500/70 animate-[pulse_3s_ease-in-out_infinite]"></div>
                        
                        {/* Corner highlights */}
                        <div className="absolute top-0 left-0 w-2 h-2 bg-blue-500/30 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
                        <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500/30 rounded-full animate-[pulse_2s_ease-in-out_infinite_0.5s]"></div>
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-500/30 rounded-full animate-[pulse_2s_ease-in-out_infinite_0.7s]"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-500/30 rounded-full animate-[pulse_2s_ease-in-out_infinite_1s]"></div>
                      </div>
                      
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 rounded-lg pointer-events-none"></div>
                    </>
                  )}
                  
                  <select 
                    className={`w-full bg-[#0a101c] p-3 rounded text-white border transition-all duration-300 ${!projectType ? 'border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.2)]' : 'border-[#2a3a55]'} focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/30`}
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map(type => (
                      <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block mb-2 text-gray-300">Complexity Level</label>
                  <p className="text-gray-400 italic mb-3 text-sm">Please choose complexity: 'Low' is like building a cardboard house for outdoor cats, 'Medium' is standard app development, and 'High' is implementing SpaceX rocket landing logic.</p>
                  <div className="flex gap-6 flex-wrap">
                    {(['low', 'medium', 'high', 'insane'] as const).map(level => (
                      <label key={level} className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="complexity"
                          value={level}
                          checked={complexity === level}
                          onChange={() => handleComplexityChange(level)}
                          className="sr-only"
                        />
                        <span className={`w-4 h-4 rounded-full border inline-block mr-2 ${complexity === level ? 'border-cyan-400 shadow-[0_0_5px_rgba(5,230,255,0.5)] bg-cyan-400' : 'border-gray-500'}`}></span>
                        {level.charAt(0).toUpperCase() + level.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mb-2">
                  <label className="block mb-2 text-gray-300">Team Size</label>
                  <div className="flex items-center">
                    <button 
                      className="bg-[#0a101c] px-4 py-2 rounded-l border border-[#2a3a55] hover:bg-[#121a29] transition-colors"
                      onClick={() => handleTeamSizeChange(teamSize - 1)}
                    >-</button>
                    <span className="bg-[#0a101c] px-6 py-2 border-t border-b border-[#2a3a55]">{teamSize} developers</span>
                    <button 
                      className="bg-[#0a101c] px-4 py-2 rounded-r border border-[#2a3a55] hover:bg-[#121a29] transition-colors"
                      onClick={() => handleTeamSizeChange(teamSize + 1)}
                    >+</button>
                  </div>
                </div>
              </div>
              
              {teamSize === 0 ? (
                <div className="bg-[#121a29]/80 p-6 rounded-lg flex flex-col items-center justify-center border border-[#1e2c45] relative">
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-amber-500/30 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-500/30 rounded-full"></div>
                  <h2 className="text-xl font-semibold mb-4 text-amber-400">DIY Developer?</h2>
                  <p className="text-center mb-6">We appreciate that you are ready to make this project by yourself, but in case you need consultation feel free to book a call with our experts.</p>
                  <a 
                    href="https://calendly.com/artjom-lupjak" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-lg flex items-center shadow-[0_0_10px_rgba(5,230,255,0.3)]"
                  >
                    Book a Call
                    <span className="ml-2">→</span>
                  </a>
                </div>
              ) : complexity === 'insane' ? (
                <div className="bg-[#121a29]/80 p-6 rounded-lg flex flex-col items-center justify-center border border-[#1e2c45] relative">
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-red-500/30 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-500/30 rounded-full"></div>
                  <h2 className="text-xl font-semibold mb-4 text-red-400">This project sounds... complex 🤯</h2>
                  <p className="text-center mb-6">For projects of insane complexity, we recommend having a detailed conversation to understand your specific requirements better.</p>
                  <a 
                    href="https://calendly.com/artjom-lupjak" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-lg flex items-center shadow-[0_0_10px_rgba(5,230,255,0.3)]"
                  >
                    Book a Call
                    <span className="ml-2">→</span>
                  </a>
                </div>
              ) : (
                <div className="bg-[#121a29]/80 p-6 rounded-lg border border-[#1e2c45] relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/5 rounded-bl-3xl"></div>
                  <div className="absolute -top-1 -left-1 w-3 h-3 bg-purple-500/30 rounded-full"></div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-500/30 rounded-full"></div>
                  
                  <h2 className="text-lg font-semibold mb-6 flex items-center">
                    <Server className="w-5 h-5 mr-2 text-purple-400" />
                    <span className="relative">
                      Features Required
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></span>
                    </span>
                  </h2>
                  
                  <div className="space-y-6 max-h-80 overflow-y-auto custom-scrollbar pr-2">
                    <div>
                      <h3 className="text-cyan-400 font-medium mb-3">Core Features</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {featureOptions.filter(f => f.category === 'core').map(feature => (
                          <label key={feature.id} className="flex items-center cursor-pointer p-2 hover:bg-[#0f1623]/80 rounded transition-colors">
                            <input
                              type="checkbox"
                              checked={features.includes(feature.id)}
                              onChange={() => handleFeatureToggle(feature.id)}
                              className="mr-2"
                            />
                            {feature.name}
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-red-400 font-medium mb-3">Security</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {featureOptions.filter(f => f.category === 'security').map(feature => (
                          <label key={feature.id} className="flex items-center cursor-pointer p-2 hover:bg-[#0f1623]/80 rounded transition-colors">
                            <input
                              type="checkbox"
                              checked={features.includes(feature.id)}
                              onChange={() => handleFeatureToggle(feature.id)}
                              className="mr-2"
                            />
                            {feature.name}
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-purple-400 font-medium mb-3">Advanced Features</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {featureOptions.filter(f => f.category === 'advanced').map(feature => (
                          <label key={feature.id} className="flex items-center cursor-pointer p-2 hover:bg-[#0f1623]/80 rounded transition-colors">
                            <input
                              type="checkbox"
                              checked={features.includes(feature.id)}
                              onChange={() => handleFeatureToggle(feature.id)}
                              className="mr-2"
                            />
                            {feature.name}
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-green-400 font-medium mb-3">Quality Assurance</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {featureOptions.filter(f => f.category === 'qa').map(feature => (
                          <label key={feature.id} className="flex items-center cursor-pointer p-2 hover:bg-[#0f1623]/80 rounded transition-colors">
                            <input
                              type="checkbox"
                              checked={features.includes(feature.id)}
                              onChange={() => handleFeatureToggle(feature.id)}
                              className="mr-2"
                            />
                            {feature.name}
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-yellow-400 font-medium mb-3">Infrastructure</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {featureOptions.filter(f => f.category === 'infra').map(feature => (
                          <label key={feature.id} className="flex items-center cursor-pointer p-2 hover:bg-[#0f1623]/80 rounded transition-colors">
                            <input
                              type="checkbox"
                              checked={features.includes(feature.id)}
                              onChange={() => handleFeatureToggle(feature.id)}
                              className="mr-2"
                            />
                            {feature.name}
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-orange-400 font-medium mb-3">Mobile Specific</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {featureOptions.filter(f => f.category === 'mobile').map(feature => (
                          <label key={feature.id} className="flex items-center cursor-pointer p-2 hover:bg-[#0f1623]/80 rounded transition-colors">
                            <input
                              type="checkbox"
                              checked={features.includes(feature.id)}
                              onChange={() => handleFeatureToggle(feature.id)}
                              className="mr-2"
                            />
                            {feature.name}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex justify-center">
                {showFinalMessage ? (
                  <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-6 rounded-lg text-center max-w-lg border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <h3 className="font-semibold text-xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">We got your back! 🦄</h3>
                    <p className="mb-4">It's hard to build a unicorn without a strong team. Feel free to book a call when you're ready.</p>
                    <a
                      href="https://calendly.com/artjom-lupjak"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-lg flex items-center mx-auto inline-flex shadow-[0_0_10px_rgba(5,230,255,0.3)]"
                    >
                      Book a Call
                      <span className="ml-2">→</span>
                    </a>
                  </div>
                ) : showAreYouSure ? (
                  <div className="bg-gradient-to-br from-red-900/50 to-purple-900/50 p-6 pb-16 rounded-lg text-center max-w-lg relative border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    <h3 className="font-semibold text-xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-400">Are you sure?</h3>
                    <p className="mb-10">This project might be more complex than you think...</p>
                    <div className="flex justify-center gap-4">
                      <button 
                        className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-2 px-6 rounded-lg font-semibold absolute shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                        style={{ 
                          transition: "all 0.2s ease",
                          left: "30%",
                          transform: "translateX(-50%)",
                          top: "65%"
                        }}
                        onClick={() => setShowFinalMessage(true)}
                        onMouseEnter={(e) => {
                          // In a real interactive app, this would move the button away from the cursor
                          const button = e.target;
                          const rect = button.getBoundingClientRect();
                          const x = Math.random() > 0.5 ? rect.left - 150 : rect.left + 150;
                          const y = Math.random() > 0.5 ? rect.top - 80 : rect.top + 80;
                          
                          // Keep button within viewport bounds
                          const viewportWidth = window.innerWidth;
                          const viewportHeight = window.innerHeight;
                          const newX = Math.max(50, Math.min(viewportWidth - 100, x));
                          const newY = Math.max(50, Math.min(viewportHeight - 50, y));
                          
                          button.style.left = `${newX}px`;
                          button.style.top = `${newY}px`;
                          button.style.position = 'fixed';
                        }}
                      >
                        Yes
                      </button>
                      <button 
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-6 rounded-lg font-semibold absolute shadow-[0_0_10px_rgba(5,230,255,0.3)]"
                        style={{ 
                          left: "70%",
                          transform: "translateX(-50%)",
                          top: "65%"
                        }}
                        onClick={() => setShowFinalMessage(true)}
                      >
                        No
                      </button>
                    </div>
                  </div>
                ) : teamSize === 0 ? (
                  <div></div> /* Hide any message here because we're already showing DIY Developer message above */
                ) : tooManyFeatures && !showNoThankYou ? (
                  <div className="bg-gradient-to-br from-amber-900/50 to-red-900/50 p-4 rounded-lg text-center max-w-lg border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                    <h3 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400">Whoa, that's feature-packed! 🚀</h3>
                    <p className="mb-4">Yes, we can build this thing, but maybe you need help to understand your project deeply and prioritize features.</p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <a
                        href="https://calendly.com/artjom-lupjak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-lg flex items-center shadow-[0_0_10px_rgba(5,230,255,0.3)]"
                      >
                        Book a Call
                        <span className="ml-2">→</span>
                      </a>
                      <button 
                        className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center border border-gray-600"
                        onClick={() => setShowNoThankYou(true)}
                      >
                        No Thank You
                      </button>
                    </div>
                  </div>
                ) : showNoThankYou ? (
                  <div className="bg-gradient-to-br from-orange-900/50 to-red-900/50 p-4 rounded-lg text-center max-w-lg border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.2)]">
                    <h3 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-amber-400">Going solo on a complex project?</h3>
                    <p className="mb-4">That's ambitious! Are you sure you want to handle all these features without some guidance?</p>
                    <button 
                      className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-lg font-semibold flex items-center mx-auto border border-gray-700"
                      onClick={() => setShowAreYouSure(true)}
                    >
                      I'm Sure
                    </button>
                  </div>
                ) : complexity === 'insane' ? (
                  <div></div> /* Hide message here because we're already showing Insane Complexity message above */
                ) : (
                  <div className="flex flex-col items-center">
                    <button 
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg font-semibold text-lg flex items-center shadow-[0_0_15px_rgba(5,230,255,0.3)] relative overflow-hidden group"
                      onClick={() => setShowResults(true)}
                      disabled={!projectType}
                    >
                      <span className="absolute -top-10 -left-10 w-10 h-40 bg-white/10 rotate-12 transform transition-transform duration-700 group-hover:translate-x-60"></span>
                      Calculate Estimate
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                    
                    {!projectType && (
                      <div className="mt-3 text-sm text-amber-400 animate-pulse">
                        Please select a project type first
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            
            {showResults && (
              <div className="mt-8 bg-[#121a29]/80 p-6 rounded-lg border border-[#1e2c45] shadow-[0_0_15px_rgba(5,230,255,0.1)] relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20"></div>
                
                <h2 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500">Project Estimate</h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0a101c]/90 backdrop-blur-sm p-5 rounded-lg text-center border border-[#2a3a55] relative group hover:border-cyan-500/50 transition-colors duration-300">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex justify-center mb-2">
                      <span className="text-cyan-400 text-4xl font-bold relative">
                        $
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 animate-ping opacity-75"></span>
                      </span>
                    </div>
                    <div className="text-sm opacity-75 mb-1">Estimated Cost</div>
                    <div className="text-2xl font-bold">${results?.cost.toLocaleString()}</div>
                  </div>
                  
                  <div className="bg-[#0a101c]/90 backdrop-blur-sm p-5 rounded-lg text-center border border-[#2a3a55] relative group hover:border-yellow-500/50 transition-colors duration-300">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex justify-center mb-2">
                      <span className="text-yellow-400 text-4xl relative">
                        ⏱
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-400 animate-ping opacity-75"></span>
                      </span>
                    </div>
                    <div className="text-sm opacity-75 mb-1">Timeline</div>
                    <div className="text-2xl font-bold">{results?.time} days</div>
                  </div>
                  
                  <div className="bg-[#0a101c]/90 backdrop-blur-sm p-5 rounded-lg text-center border border-[#2a3a55] relative group hover:border-blue-500/50 transition-colors duration-300">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex justify-center mb-2">
                      <span className="text-blue-400 text-4xl relative">
                        👥
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-400 animate-ping opacity-75"></span>
                      </span>
                    </div>
                    <div className="text-sm opacity-75 mb-1">Team Size</div>
                    <div className="text-2xl font-bold">{results?.team} devs</div>
                  </div>
                  
                  <div className="bg-[#0a101c]/90 backdrop-blur-sm p-5 rounded-lg text-center border border-[#2a3a55] relative group hover:border-purple-500/50 transition-colors duration-300">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="flex justify-center mb-2">
                      <span className="text-purple-400 text-4xl relative">
                        📆
                        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-purple-400 animate-ping opacity-75"></span>
                      </span>
                    </div>
                    <div className="text-sm opacity-75 mb-1">Maintenance/yr</div>
                    <div className="text-2xl font-bold">${results?.maintenance.toLocaleString()}</div>
                  </div>
                </div>
                
                <div className="mt-6 text-center relative">
                  <p className="opacity-75 text-sm mb-4">This estimate includes development, testing, and deployment costs. Additional costs may apply based on specific requirements.</p>
                  <button 
                    className="bg-[#1a2638] hover:bg-[#243854] text-white py-2 px-6 rounded-lg text-sm border border-[#2a3a55] relative overflow-hidden group"
                    onClick={() => setShowResults(false)}
                  >
                    <span className="absolute -top-10 -left-10 w-5 h-20 bg-white/5 rotate-12 transform transition-transform duration-700 group-hover:translate-x-32"></span>
                    Adjust Parameters
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      
      {/* Circuit board pattern */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4OCIgaGVpZ2h0PSI4OCIgdmlld0JveD0iMCAwIDg4IDg4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNTVjZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTAgMGg0NHY0NEgwVjB6bTQ0IDQ0aDQ0djQ0SDQ0Vjc3em0wLTQ0aDQ0djQ0SDQ0VjB6TTAgNDRoNDR2NDRIMFY0NHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-5"></div>
    </section>
  );
};

export default CalculatorPage; 