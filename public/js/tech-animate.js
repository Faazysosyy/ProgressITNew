// First load anime.js from CDN
(function() {
  console.log('Loading animations...');
  
  // Create and append anime.js script
  const animeScript = document.createElement('script');
  animeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
  animeScript.onload = initAnimations;
  document.head.appendChild(animeScript);
  
  function initAnimations() {
    console.log('anime.js loaded, starting animations');
    
    // Initialize each card with its specific animation
    initAdaptiveInterfaces();
    initQuantumArchitecture();
    initNeuralIntegration();
    initDataMeshSystems();
    initCyberneticSecurity();
    initDigitalTwinEngineering();
    initHolographicInterfaces();
    initEdgeComputingSolutions();
    initSyntheticMediaCreation();
    initQuantumEncryption();
    initAugmentedDevelopment();
    initBiodigitalInterfaces();
  }
  
  // Common utility functions for all animations
  function createTimeline(options) {
    return anime.timeline({
      easing: 'easeInOutSine',
      duration: 3000,
      loop: true,
      ...options
    });
  }
  
  function createKeyframes(values) {
    // If values is a function, use it with keyframes getter
    if (typeof values === 'function') {
      return values;
    }
    // Otherwise return an array of values
    return values;
  }
  
  // Helper to create element
  function createSvgElement(type, attributes, parent) {
    const element = document.createElementNS("http://www.w3.org/2000/svg", type);
    
    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }
    
    if (parent) {
      parent.appendChild(element);
    }
    
    return element;
  }
  
  // Adaptive Interfaces animation
  function initAdaptiveInterfaces() {
    const card = document.querySelector('[data-card="242"]');
    if (!card) {
      console.warn('Card [data-card="242"] not found');
      return;
    }
    
    console.log('Initializing Adaptive Interfaces animation');
    
    const container = document.createElement('div');
    container.className = 'animation-container';
    Object.assign(container.style, {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      zIndex: '0',
      opacity: '0.3',
      pointerEvents: 'none',
      overflow: 'hidden'
    });
    
    card.style.position = 'relative';
    card.insertBefore(container, card.firstChild);
    
    // Create SVG container
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.style.position = 'absolute';
    svg.style.width = '100%';
    svg.style.height = '100%';
    container.appendChild(svg);
    
    // Create 4 responsive rectangles
    const rects = [];
    const colors = ['#06B6D4', '#22D3EE', '#67E8F9', '#A5F3FC'];
    
    for (let i = 0; i < 4; i++) {
      const rect = createSvgElement('rect', {
        x: 20 + i * 5,
        y: 20 + i * 5,
        width: 20 - i * 2,
        height: 15 - i * 1,
        rx: 2,
        fill: 'transparent',
        stroke: colors[i],
        'stroke-width': 1,
        'stroke-dasharray': '3,2'
      }, svg);
      
      rects.push(rect);
    }
    
    // Animate rectangles to simulate responsive layouts
    rects.forEach((rect, i) => {
      anime({
        targets: rect,
        x: [
          { value: 20 + i * 5, duration: 1000 },
          { value: 15 + i * 3, duration: 1000 },
          { value: 25 + i * 4, duration: 1000 },
          { value: 20 + i * 5, duration: 1000 }
        ],
        y: [
          { value: 20 + i * 5, duration: 1000 },
          { value: 25 + i * 3, duration: 1000 },
          { value: 15 + i * 4, duration: 1000 },
          { value: 20 + i * 5, duration: 1000 }
        ],
        width: [
          { value: 20 - i * 2, duration: 1000 },
          { value: 30 - i * 3, duration: 1000 },
          { value: 25 - i * 2, duration: 1000 },
          { value: 20 - i * 2, duration: 1000 }
        ],
        height: [
          { value: 15 - i * 1, duration: 1000 },
          { value: 20 - i * 1.5, duration: 1000 },
          { value: 18 - i * 1, duration: 1000 },
          { value: 15 - i * 1, duration: 1000 }
        ],
        strokeDashoffset: [
          { value: 0, duration: 1000 },
          { value: 20, duration: 3000 },
          { value: 0, duration: 1000 }
        ],
        easing: 'easeInOutSine',
        duration: 4000,
        loop: true,
        delay: i * 200
      });
    });
  }
  
  // Quantum-Ready Architecture animation
  function initQuantumArchitecture() {
    const card = document.querySelector('[data-card="627"]');
    if (!card) {
      console.warn('Card [data-card="627"] not found');
      return;
    }
    
    console.log('Initializing Quantum Architecture animation');
    
    const container = document.createElement('div');
    container.className = 'animation-container';
    Object.assign(container.style, {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      zIndex: '0',
      opacity: '0.3',
      pointerEvents: 'none',
      overflow: 'hidden'
    });
    
    card.style.position = 'relative';
    card.insertBefore(container, card.firstChild);
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 100 100');
    svg.style.position = 'absolute';
    svg.style.width = '100%';
    svg.style.height = '100%';
    container.appendChild(svg);
    
    // Create quantum particles
    const particles = [];
    const particleCount = 5;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = createSvgElement('circle', {
        cx: 50,
        cy: 50,
        r: 3 + Math.random() * 2,
        fill: 'rgba(168, 85, 247, 0.3)',
        stroke: '#A855F7',
        'stroke-width': 1
      }, svg);
      
      // Add orbital circles
      const orbit = createSvgElement('circle', {
        cx: 50,
        cy: 50,
        r: 8 + i * 5,
        fill: 'none',
        stroke: 'rgba(168, 85, 247, 0.2)',
        'stroke-width': 0.5,
        'stroke-dasharray': '2,2'
      }, svg);
      
      particles.push({ particle, orbit });
    }
    
    // Create connecting lines
    const lines = [];
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        if (Math.random() > 0.5) continue; // Only connect some particles
        
        const line = createSvgElement('line', {
          x1: 50,
          y1: 50,
          x2: 50,
          y2: 50,
          stroke: 'rgba(168, 85, 247, 0.4)',
          'stroke-width': 0.5,
          'stroke-dasharray': '2,2'
        }, svg);
        
        lines.push({ line, from: i, to: j });
      }
    }
    
    // Animate quantum particles
    particles.forEach((particle, i) => {
      // Orbital animation
      const radius = 8 + i * 5;
      const speed = 3 + i;
      const startAngle = Math.random() * Math.PI * 2;
      
      anime({
        targets: particle.particle,
        cx: function(el, i, l) {
          return 50 + radius * Math.cos(startAngle + anime.get(el, 'progress', 0) * Math.PI * 2);
        },
        cy: function(el, i, l) {
          return 50 + radius * Math.sin(startAngle + anime.get(el, 'progress', 0) * Math.PI * 2);
        },
        r: [
          { value: 2, duration: 1000, delay: 0 },
          { value: 3.5, duration: 1000, delay: 1000 },
          { value: 2, duration: 1000, delay: 2000 }
        ],
        easing: 'linear',
        duration: speed * 1000,
        loop: true
      });
      
      // Orbit rotation and pulsing
      anime({
        targets: particle.orbit,
        r: [
          { value: radius - 1, duration: 2000 },
          { value: radius + 1, duration: 2000 }
        ],
        opacity: [
          { value: 0.2, duration: 1000 },
          { value: 0.5, duration: 1000 },
          { value: 0.2, duration: 1000 }
        ],
        easing: 'easeInOutSine',
        duration: 4000,
        loop: true
      });
    });
    
    // Update connecting lines
    function updateLines() {
      lines.forEach(line => {
        const p1 = particles[line.from].particle;
        const p2 = particles[line.to].particle;
        
        line.line.setAttribute('x1', p1.getAttribute('cx'));
        line.line.setAttribute('y1', p1.getAttribute('cy'));
        line.line.setAttribute('x2', p2.getAttribute('cx'));
        line.line.setAttribute('y2', p2.getAttribute('cy'));
      });
      
      requestAnimationFrame(updateLines);
    }
    
    updateLines();
  }
  
  // Neural Integration animation
  function initNeuralIntegration() {
    const card = document.querySelector('[data-card="675"]');
    if (!card) {
      console.warn('Card [data-card="675"] not found');
      return;
    }
    
    console.log('Initializing Neural Integration animation');
    
    // Simplified implementation for brevity
    const container = document.createElement('div');
    container.className = 'animation-container';
    Object.assign(container.style, {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      zIndex: '0',
      opacity: '0.3',
      pointerEvents: 'none',
      overflow: 'hidden'
    });
    
    card.style.position = 'relative';
    card.insertBefore(container, card.firstChild);
    
    // Add neural network visualization here
  }
  
  // Data Mesh Systems animation
  function initDataMeshSystems() {
    const card = document.querySelector('[data-card="937"]');
    if (!card) {
      console.warn('Card [data-card="937"] not found');
      return;
    }
    
    console.log('Initializing Data Mesh Systems animation');
    
    // Simplified implementation for brevity
    const container = document.createElement('div');
    container.className = 'animation-container';
    Object.assign(container.style, {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0',
      left: '0',
      zIndex: '0',
      opacity: '0.3',
      pointerEvents: 'none',
      overflow: 'hidden'
    });
    
    card.style.position = 'relative';
    card.insertBefore(container, card.firstChild);
    
    // Add data mesh visualization here
  }
  
  // Simplified placeholder implementations for other animations
  function initCyberneticSecurity() {
    const card = document.querySelector('[data-card="886"]');
    if (!card) {
      console.warn('Card [data-card="886"] not found');
      return;
    }
    console.log('Initializing Cybernetic Security animation');
  }
  
  function initDigitalTwinEngineering() {
    const card = document.querySelector('[data-card="727"]');
    if (!card) {
      console.warn('Card [data-card="727"] not found');
      return;
    }
    console.log('Initializing Digital Twin Engineering animation');
  }
  
  function initHolographicInterfaces() {
    const card = document.querySelector('[data-card="889"]');
    if (!card) {
      console.warn('Card [data-card="889"] not found');
      return;
    }
    console.log('Initializing Holographic Interfaces animation');
  }
  
  function initEdgeComputingSolutions() {
    const card = document.querySelector('[data-card="646"]');
    if (!card) {
      console.warn('Card [data-card="646"] not found');
      return;
    }
    console.log('Initializing Edge Computing Solutions animation');
  }
  
  function initSyntheticMediaCreation() {
    const card = document.querySelector('[data-card="739"]');
    if (!card) {
      console.warn('Card [data-card="739"] not found');
      return;
    }
    console.log('Initializing Synthetic Media Creation animation');
  }
  
  function initQuantumEncryption() {
    const card = document.querySelector('[data-card="738"]');
    if (!card) {
      console.warn('Card [data-card="738"] not found');
      return;
    }
    console.log('Initializing Quantum Encryption animation');
  }
  
  function initAugmentedDevelopment() {
    const card = document.querySelector('[data-card="574"]');
    if (!card) {
      console.warn('Card [data-card="574"] not found');
      return;
    }
    console.log('Initializing Augmented Development animation');
  }
  
  function initBiodigitalInterfaces() {
    const card = document.querySelector('[data-card="136"]');
    if (!card) {
      console.warn('Card [data-card="136"] not found');
      return;
    }
    console.log('Initializing Biodigital Interfaces animation');
  }
  
  // Add CSS for animations
  const style = document.createElement('style');
  style.textContent = `
    .animation-container {
      pointer-events: none;
      overflow: hidden;
    }
    
    .shape {
      position: absolute;
      overflow: visible;
    }
  `;
  document.head.appendChild(style);
})(); 