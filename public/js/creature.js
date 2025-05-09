// Creature animation for AI Section
(function() {
  console.log('Creature animation loaded');
  
  // This is a placeholder function that will be called when the component mounts
  window.initCreatureAnimation = function(creatureElement) {
    if (!creatureElement) {
      console.warn('Creature element not found');
      return;
    }
    
    console.log('Initializing creature animation');
    
    // Create some animated particles
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      
      // Random properties for diversity
      const hue = Math.floor(Math.random() * 120) + 180; // Blue to purple range
      const size = Math.random() * 3 + 1;
      
      // Apply styles
      particle.style.backgroundColor = `hsla(${hue}, 80%, 60%, 0.8)`;
      particle.style.boxShadow = `0 0 10px hsla(${hue}, 80%, 60%, 0.8)`;
      particle.style.width = `${size}em`;
      particle.style.height = `${size}em`;
      
      // Add to creature
      creatureElement.appendChild(particle);
    }
    
    // If anime.js is available, animate the particles
    if (typeof anime !== 'undefined') {
      anime({
        targets: '#creature div',
        translateX: () => anime.random(-50, 50) + 'em',
        translateY: () => anime.random(-50, 50) + 'em',
        scale: () => anime.random(0.2, 2),
        opacity: () => anime.random(0.3, 0.9),
        duration: () => anime.random(3000, 5000),
        delay: () => anime.random(0, 2000),
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine'
      });
    }
  };
})(); 