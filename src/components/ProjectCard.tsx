"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Tag, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  category?: string;
  link?: string;
  className?: string;
  index?: number;
}

const ProjectCard = ({
  title = "E-Commerce Redesign",
  description = "Complete overhaul of an online retail platform with improved UX and conversion optimization.",
  imageUrl = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  category = "Web Design",
  link = "#",
  className,
  index = 0,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-gray-900 border border-gray-800 transition-all duration-300 hover:border-gray-700",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

        <div className="absolute left-4 top-4 rounded-md bg-blue-600 px-3 py-1 text-xs font-medium text-white z-10">
          <div className="flex items-center gap-1">
            <Tag size={12} />
            <span>{category}</span>
          </div>
        </div>

        {/* Content always visible but transforms on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10 transition-all duration-300">
          <motion.h3
            initial={{ y: 0 }}
            animate={isHovered ? { y: -10 } : { y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-bold text-white mb-2"
          >
            {title}
          </motion.h3>
          <motion.p
            initial={{ y: 0, opacity: 0.7 }}
            animate={isHovered ? { y: -5, opacity: 1 } : { y: 0, opacity: 0.7 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="text-sm text-gray-300 mb-4"
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Button
              variant="outline"
              size="sm"
              className="group border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
              asChild
            >
              <a href={link}>
                View Case Study
                <ExternalLink
                  size={14}
                  className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
