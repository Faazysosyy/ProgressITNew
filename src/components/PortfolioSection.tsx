"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Play,
  ChevronDown,
  Plus,
} from "lucide-react";
import TestimonialSlider from "./TestimonialSlider";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";
import FilterBar from "./FilterBar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PortfolioSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  projects?: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
    link: string;
  }[];
}

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
}

const PortfolioSection = ({
  title = "Blockchain Solutions",
  subtitle = "BLOCKCHAIN PORTFOLIO",
  description = "Explore our comprehensive suite of Web3 and blockchain development services designed to help businesses innovate and thrive in the decentralized economy. From concept to deployment, we build secure, scalable digital solutions for the future.",
  projects = [
    {
      id: "1",
      title: "DeFi Exchange Platform",
      description:
        "Next-gen decentralized exchange with cross-chain liquidity pools and AI-powered trading insights.",
      imageUrl:
        "https://images.unsplash.com/photo-1639762681057-408e52192e55?w=800&q=80",
      category: "DeFi",
      link: "#",
    },
    {
      id: "2",
      title: "NFT Marketplace",
      description:
        "Immersive NFT platform with virtual gallery, fractional ownership, and creator royalty system.",
      imageUrl:
        "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&q=80",
      category: "NFTs",
      link: "#",
    },
    {
      id: "3",
      title: "DAO Governance System",
      description:
        "Comprehensive decentralized governance framework with quadratic voting and proposal execution.",
      imageUrl:
        "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
      category: "DAOs",
      link: "#",
    },
    {
      id: "4",
      title: "Layer 2 Scaling Solution",
      description:
        "High-performance Layer 2 protocol with 100,000+ TPS and near-zero gas fees for enterprise use.",
      imageUrl:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
      category: "Infrastructure",
      link: "#",
    },
    {
      id: "5",
      title: "Metaverse Integration",
      description:
        "Seamless blockchain integration for metaverse platforms with digital identity and asset portability.",
      imageUrl:
        "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=800&q=80",
      category: "Metaverse",
      link: "#",
    },
    {
      id: "6",
      title: "Zero-Knowledge Identity",
      description:
        "Privacy-preserving identity solution using zero-knowledge proofs for selective disclosure.",
      imageUrl:
        "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&q=80",
      category: "Privacy",
      link: "#",
    },
  ],
}: PortfolioSectionProps) => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeStep, setActiveStep] = useState("2");
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const processSteps: ProcessStep[] = [
    {
      id: "1",
      number: "01",
      title: "Strategic Blockchain Consulting",
      description:
        "We begin with in-depth blockchain strategy consultation, helping you identify the right technology stack and approach for your business needs. Our experts analyze use cases, regulatory requirements, and market opportunities to create a customized roadmap that positions your project for long-term success and adoption.",
    },
    {
      id: "2",
      number: "02",
      title: "Smart Contract Development",
      description:
        "Our engineers develop secure, auditable smart contracts tailored to your specific business requirements. Using Solidity, Rust, and other leading languages, we create automated business logic that reduces costs, eliminates intermediaries, and ensures transparent transactions across multiple blockchain platforms.",
    },
    {
      id: "3",
      number: "03",
      title: "DApp Development",
      description:
        "We build intuitive decentralized applications that connect seamlessly with blockchain networks. Our full-stack development team creates responsive, user-friendly interfaces that abstract blockchain complexity while delivering the security and transparency benefits of decentralized systems to your users.",
    },
    {
      id: "4",
      number: "04",
      title: "Tokenization Solutions",
      description:
        "From utility tokens to NFTs and security tokens, we design and implement comprehensive tokenization solutions. Our economic modeling ensures sustainable token economies with proper incentive mechanisms, governance structures, and regulatory compliance built into every project.",
    },
    {
      id: "5",
      number: "05",
      title: "Web3 Integration",
      description:
        "We bridge traditional systems with decentralized technologies, enabling smooth transitions to Web3 capabilities. Our integration services connect existing infrastructure with cryptocurrency payments, decentralized identity systems, and blockchain-based data verification solutions.",
    },
    {
      id: "6",
      number: "06",
      title: "Blockchain Security & Auditing",
      description:
        "Our security experts perform comprehensive audits and implement robust safeguards for your blockchain applications. We identify vulnerabilities, optimize gas usage, and ensure your smart contracts and decentralized systems are protected against common attack vectors and exploits.",
    },
  ];

  const serviceCategories: ServiceCategory[] = [
    {
      id: "strategy",
      title: "Tokenomics & Ecosystem Design",
      description:
        "Comprehensive token economy modeling with AI-powered simulation and incentive alignment.",
    },
    {
      id: "websites",
      title: "DApp Development",
      description:
        "Full-stack decentralized application development with seamless Web2-to-Web3 user experiences.",
    },
    {
      id: "mobile",
      title: "Smart Contract Engineering",
      description:
        "Secure, audited smart contract development across multiple blockchain ecosystems.",
    },
    {
      id: "cms",
      title: "DAO & Governance Systems",
      description:
        "Custom DAO frameworks with advanced voting mechanisms and treasury management.",
    },
    {
      id: "marketing",
      title: "Metaverse & NFT Solutions",
      description:
        "Immersive digital asset platforms with interoperable metaverse integration.",
    },
  ];

  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === category),
      );
    }
  };

  const handleStepChange = (stepId: string) => {
    setActiveStep(stepId);
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  // Extract unique categories from projects
  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  // Find the active step
  const currentStep =
    processSteps.find((step) => step.id === activeStep) || processSteps[0];

  // Get projects for a specific category
  const getProjectsByCategory = (category: string) => {
    return projects.filter((project) => {
      if (category === "strategy")
        return project.category === "DeFi" || project.category === "DAOs";
      if (category === "websites")
        return project.category === "DeFi" || project.category === "NFTs";
      if (category === "mobile") return project.category === "Infrastructure";
      if (category === "cms") return project.category === "DAOs";
      if (category === "marketing")
        return project.category === "Metaverse" || project.category === "NFTs";
      return false;
    });
  };

  return (
    <section id="portfolio" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <h2 className="mb-6 text-6xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text animate-gradient-x">
              Blockchain Solutions
            </span>
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {description}
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl">
            Our team specializes in enterprise-grade blockchain development, creating innovative solutions across multiple platforms including Ethereum, Polkadot, Solana, and custom networks. We combine technical expertise with strategic insights to deliver Web3 applications that drive real business value.
          </p>

          {/* Video button removed */}
        </motion.div>

        {/* Mobile Accordion View */}
        <div className="md:hidden mt-12">
          <dl className="w-full">
            {processSteps.map((step) => (
              <div key={step.id}>
                <dt
                  className={`border border-gray-800 border-b-0 p-6 cursor-pointer ${activeStep === step.id ? "bg-gray-900" : ""}`}
                  onClick={() => handleStepChange(step.id)}
                >
                  <a className="flex justify-between items-center w-full text-white text-xl font-semibold">
                    <div className="flex items-center">
                      <span className="text-gray-500 mr-2">{step.number}</span>
                      <span>{step.title}</span>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${activeStep === step.id ? "rotate-180" : ""}`}
                    />
                  </a>
                </dt>
                {activeStep === step.id && (
                  <dd
                    className="bg-white text-black p-6 border border-gray-800 border-t-0 last:border-b"
                    style={{ height: "200px", overflowY: "auto" }}
                  >
                    <p className="text-gray-700">{step.description}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>

        {/* Desktop Process Steps Display */}
        <div className="hidden md:block mt-20 relative">
          {/* Decorative elements */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-7 gap-0 border border-gray-800 rounded-lg overflow-hidden">
            {/* White content area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="col-span-1 lg:col-span-3 bg-white text-black p-8 lg:p-12"
                style={{ height: "350px", overflowY: "auto" }}
              >
                <div className="h-full flex flex-col">
                  <h4 className="text-2xl font-bold mb-4">
                    {currentStep.title}
                  </h4>
                  <p className="text-gray-700 mb-6">
                    {currentStep.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Process steps tabs */}
            <div className="col-span-1 lg:col-span-4 grid grid-cols-6 border-t lg:border-t-0 lg:border-l border-gray-800">
              {processSteps.map((step) => (
                <div
                  key={step.id}
                  className={`border-r border-b border-gray-800 flex flex-col items-center justify-center p-4 lg:p-8 cursor-pointer transition-all duration-300 ${activeStep === step.id ? "bg-gray-900" : "hover:bg-gray-900/50"}`}
                  onClick={() => handleStepChange(step.id)}
                >
                  <div className="flex flex-col items-center h-full justify-center">
                    <span className="text-xs text-gray-500 mb-1">
                      {step.number}
                    </span>
                    <span
                      className={`text-sm lg:text-base font-medium ${activeStep === step.id ? "text-white" : "text-gray-400"} text-center vertical-text`}
                    >
                      {step.title}
                    </span>
                    <motion.div
                      animate={{ rotate: activeStep === step.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 opacity-50"
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section - Hidden by default, can be toggled */}
        <div className="hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 mt-24"
          >
            <FilterBar
              categories={categories}
              onFilterChange={handleFilterChange}
              activeFilter={activeFilter}
            />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  category={project.category}
                  link={project.link}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button
              size="lg"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
              asChild
            >
              <a href="#">
                View All Projects
                <ExternalLink className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <TestimonialSlider />

        {/* Featured client logos - Hidden */}
        <div className="hidden mt-24 pt-12 border-t border-gray-800">
          <div className="text-center mb-8">
            <span className="text-gray-400">
              Trusted by innovative companies
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-12 items-center opacity-60">
            {["Client 1", "Client 2", "Client 3", "Client 4", "Client 5"].map(
              (client, index) => (
                <div key={index} className="text-gray-500 font-bold text-xl">
                  {client}
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
