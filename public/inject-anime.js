// This script will inject both anime.js and our tech animations
(function() {
  console.log("Injecting anime.js and tech animations...");
  
  // Create a script element for anime.js
  const animeScript = document.createElement('script');
  animeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
  
  // Add it to the document
  document.head.appendChild(animeScript);
  
  // When anime.js loads, load our tech animations
  animeScript.onload = function() {
    console.log("Anime.js loaded, loading tech animations...");
    
    // Create a script element for tech animations
    const techScript = document.createElement('script');
    techScript.src = '/js/tech-animate.js';
    
    // Add it to the document
    document.head.appendChild(techScript);
  };
})(); 