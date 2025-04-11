"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FilterBarProps {
  categories?: string[];
  onFilterChange?: (category: string) => void;
  activeFilter?: string;
}

const FilterBar = ({
  categories = [
    "All",
    "Web Design",
    "Mobile Apps",
    "Branding",
    "E-Commerce",
    "UI/UX",
  ],
  onFilterChange = () => {},
  activeFilter = "All",
}: FilterBarProps) => {
  const [selectedFilter, setSelectedFilter] = useState(activeFilter);

  const handleFilterClick = (category: string) => {
    setSelectedFilter(category);
    onFilterChange(category);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 py-4 px-6 rounded-lg border border-gray-800">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => handleFilterClick(category)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
              selectedFilter === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700",
            )}
          >
            {category}
            {selectedFilter === category && (
              <motion.span
                layoutId="activeFilterIndicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
