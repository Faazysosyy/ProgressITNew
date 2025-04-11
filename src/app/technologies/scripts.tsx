"use client";

import React, { useEffect } from 'react';

export default function TechPageScripts() {
  useEffect(() => {
    // First, load anime.js
    const animeScript = document.createElement('script');
    animeScript.src = '/js/anime.min.js';
    animeScript.async = false;
    document.head.appendChild(animeScript);

    // After anime.js loads, load the animation script
    animeScript.onload = () => {
      const techScript = document.createElement('script');
      techScript.src = '/js/techAnimations.js';
      document.head.appendChild(techScript);
    };

    // Clean up
    return () => {
      document.head.removeChild(animeScript);
      // techScript may not exist yet when cleanup runs
      const techScript = document.querySelector('script[src="/js/techAnimations.js"]');
      if (techScript) {
        document.head.removeChild(techScript);
      }
    };
  }, []);

  return null;
} 