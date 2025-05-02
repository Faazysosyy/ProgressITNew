import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AISection from "@/components/AISection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LoopingWords from "@/components/LoopingWords";
import CreativeAlliance from "@/components/CreativeAlliance";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="Driving Digital Evolution For Forward-Thinking Businesses"
        subtitle="We engineer powerful digital ecosystems that connect brands with their audiences through innovative technology, strategic design, and results-driven development."
        ctaText="Get Price!"
        ctaLink="#contact"
      />

      {/* Services Section */}
      <ServicesSection
        title="Our Services & Capabilities"
        subtitle="We deliver exceptional digital experiences through our comprehensive range of services."
      />

      {/* Portfolio Section */}
      <PortfolioSection
        title="Our Work"
        subtitle="PORTFOLIO"
        description="Explore our diverse portfolio of digital solutions that have helped businesses transform and grow in the digital landscape."
      />
      
      {/* AI Section */}
      <AISection />

      {/* Creative Alliance Section */}
      <CreativeAlliance />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
