"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface ScrollAnimationProps {
  text?: string;
}

const ScrollAnimation = ({
  text = "Creating innovative solutions for forward-thinking brands",
}: ScrollAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (container) {
        const { top, height } = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visiblePct = Math.max(0, Math.min(1, (windowHeight - top) / (windowHeight + height)));
        setScrollPosition(visiblePct);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Calculate transforms based on scroll position
  const getXTransform = () => {
    if (scrollPosition <= 0) return "0%";
    if (scrollPosition >= 1) return "-50%";
    return `${-50 * scrollPosition}%`;
  };

  return (
    <div ref={containerRef} className="w-full overflow-hidden py-16 md:py-24 bg-gray-950">
      <motion.div
        style={{
          x: getXTransform(),
        }}
        className="whitespace-nowrap text-8xl md:text-9xl font-bold text-white/5"
      >
        {Array(5).fill(text).join(" • ")}
      </motion.div>
    </div>
  );
};

export default ScrollAnimation;
