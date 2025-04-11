"use client";

import React from "react";

interface Feature {
  title: string;
  description?: string;
  tagline?: string;
  bulletPoints?: string[];
  icon: React.ReactNode;
  hue?: number;
}

interface FeatureGridProps {
  features?: Feature[];
  className?: string;
  detailed?: boolean;
  showTaglines?: boolean;
}

export default function FeatureGrid({ 
  features = [], 
  className = "", 
  detailed = false,
  showTaglines = false
}: FeatureGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="group relative bg-gray-950 rounded-xl overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300"
        >
          <div className="p-6 h-full flex flex-col">
            {/* Icon */}
            <div 
              className="mb-4"
              style={{ color: `hsl(${feature.hue || 210}, 70%, 75%)` }}
            >
              {feature.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-1">
              {feature.title}
            </h3>
            
            {/* Tagline */}
            {showTaglines && feature.tagline && (
              <p 
                className="text-sm font-medium mb-3"
                style={{ color: `hsl(${feature.hue || 210}, 70%, 65%)` }}
              >
                {feature.tagline}
              </p>
            )}
            
            {/* Description */}
            {feature.description && (
              <p className="text-gray-400 mb-4 text-sm">
                {feature.description}
              </p>
            )}
            
            {/* Bullet Points */}
            {detailed && feature.bulletPoints && feature.bulletPoints.length > 0 && (
              <ul className="mt-auto space-y-3">
                {feature.bulletPoints.map((point, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start text-gray-400 text-sm"
                  >
                    <span 
                      className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: `hsl(${feature.hue || 210}, 70%, 65%)` }}
                    ></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 