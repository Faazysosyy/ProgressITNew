"use client";

import React from "react";
import { ArrowRight, Code, Palette, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  index?: number;
}

const ServiceCard = ({
  title = "Web Development",
  description = "Custom websites built with cutting-edge technology and optimized for performance and user experience.",
  icon = <Code className="w-10 h-10" />,
  className,
  index = 0,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={cn(
        "bg-white dark:bg-gray-900 p-8 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl group cursor-pointer h-full flex flex-col border border-transparent hover:border-blue-500/20",
        className,
      )}
    >
      <div className="mb-6 text-blue-600 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-md inline-block">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
        {description}
      </p>

      <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
        <span className="mr-2">Learn more</span>
        <ArrowRight className="w-4 h-4" />
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md pointer-events-none"></div>
    </motion.div>
  );
};

export default ServiceCard;
