"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AboutSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  stats?: {
    years?: number;
    clients?: number;
    awards?: number;
  };
  className?: string;
}

const AboutSection = ({
  title = "About Our Agency",
  subtitle = "Digital Excellence Since 2008",
  description = "We are a full-service digital agency specializing in crafting innovative web solutions that drive results. Our team of experts combines creativity with technical expertise to deliver exceptional digital experiences that help businesses grow and succeed in the digital landscape.",
  stats = {
    years: 15,
    clients: 200,
    awards: 30,
  },
  className,
}: AboutSectionProps) => {
  const features = [
    {
      title: "Longevity",
      description:
        "Established in 2008, ProgressIT has built a stellar reputation for delivering cutting-edge solutions across industries. Our extensive experience positions us at the forefront of both traditional and blockchain development.",
    },
    {
      title: "Web Dev & Design Focus",
      description:
        "ProgressIT delivers exceptional web development services with innovative design principles. Our development approach creates distinctive digital presences that outperform competitors and capture audience attention effectively.",
    },
    {
      title: "Breathtaking Design",
      description:
        "Our unique design philosophy sets us apart in the digital landscape. We craft interfaces that are not only visually striking but also intuitive, adaptable, and performance-optimized across all devices and platforms.",
    },
    {
      title: "On-Brand Experiences",
      description:
        "At ProgressIT, we understand the critical importance of brand alignment. We've helped countless organizations enhance their digital identity through carefully crafted design elements that reinforce brand values and messaging strategies.",
    },
    {
      title: "One-Of-A-Kind Solutions",
      description:
        "Our development team specializes in creating bespoke solutions tailored precisely to each client's specific requirements. We don't believe in template approaches—every project receives customized attention and strategic development.",
    },
    {
      title: "Partnership & Collaboration",
      description:
        "We maintain consistent, transparent communication throughout your project journey. Our collaborative approach ensures you're informed at every stage, and our relationship continues with dedicated support long after launch.",
    },
  ];

  return (
    <section id="about" className={cn("py-24", className)}>
      <div className="progress-it-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              className="about-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative min-h-[400px] md:min-h-[600px] bg-gradient-to-br from-blue-900 to-indigo-900 rounded-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-3xl text-white font-bold">Progress IT</p>
                </div>
                <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
                  About Progress IT
                </span>
              </h2>
              
              <div className="space-y-4 mb-8 text-lg">
                <p>
                  At Progress IT, we combine cutting-edge technology with creative design to build powerful digital experiences that deliver results. Located in Los Angeles, our team of designers, developers, and digital marketers work collaboratively to create custom solutions for businesses of all sizes.
                </p>
                <p>
                  Our focus is on creating digital solutions that not only look amazing but also perform exceptionally well. We believe in a strategic approach that aligns your digital presence with your business goals, ensuring that every project we undertake contributes directly to your success.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  View Our Work
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
