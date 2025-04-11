(function() {
  console.log('load-anime.js executing...');
  
  if (typeof anime === 'undefined') {
    console.log('Loading anime.js from CDN...');
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
    script.onload = function() {
      console.log('anime.js loaded successfully!');
      
      // Now load techAnimations.js
      const techScript = document.createElement('script');
      techScript.src = '/js/techAnimations.js';
      document.head.appendChild(techScript);
    };
    document.head.appendChild(script);
  } else {
    console.log('anime.js already loaded!');
  }
})(); 