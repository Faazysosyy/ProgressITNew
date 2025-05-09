// Animation Loader
(function() {
  console.log('Animation loader starting...');
  
  // First load anime.js from CDN
  function loadAnimeJS() {
    return new Promise((resolve, reject) => {
      if (typeof anime !== 'undefined') {
        console.log('anime.js already loaded');
        resolve();
        return;
      }
      
      console.log('Loading anime.js from CDN...');
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';
      script.onload = () => {
        console.log('anime.js loaded successfully');
        resolve();
      };
      script.onerror = () => {
        console.error('Failed to load anime.js');
        reject(new Error('Failed to load anime.js'));
      };
      document.head.appendChild(script);
    });
  }
  
  // Load specialized animation scripts
  function loadSpecializedAnimations() {
    const scripts = [
      '/js/tech-animate-neural.js',
      '/js/tech-animate-datamesh.js',
      '/js/tech-animate-cybernetic.js',
      '/js/tech-animate-twin.js',
      '/js/tech-animate-holographic.js',
      '/js/tech-animate-edge.js',
      '/js/tech-animate-adaptive.js',
      '/js/tech-animate-quantum.js'
    ];
    
    const promises = scripts.map(src => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
          console.log(`Loaded ${src}`);
          resolve();
        };
        script.onerror = () => {
          console.error(`Failed to load ${src}`);
          reject(new Error(`Failed to load ${src}`));
        };
        document.head.appendChild(script);
      });
    });
    
    return Promise.all(promises);
  }
  
  // Load basic animations for other cards
  function initializeBasicAnimations() {
    // Helper to create SVG element
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
    
    // Digital Twin Engineering animation
    function initDigitalTwinEngineering() {
      const card = document.querySelector('[data-card="727"]');
      if (!card) {
        console.warn('Card [data-card="727"] not found');
        return;
      }
      // Check if animation container already exists
      if (card.querySelector('.animation-container')) {
        console.log('Animation for card [data-card="727"] already initialized by a specialized script.');
        return;
      }
      
      console.log('Initializing Digital Twin Engineering animation via basic loader');
      
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
      
      // Create two connected cubes - real and digital twin
      const cubeLeft = createSvgElement('rect', {
        x: 25,
        y: 40,
        width: 20,
        height: 20,
        fill: 'rgba(139, 92, 246, 0.2)',
        stroke: '#8B5CF6',
        'stroke-width': 1
      }, svg);
      
      const cubeRight = createSvgElement('rect', {
        x: 55,
        y: 40,
        width: 20,
        height: 20,
        fill: 'rgba(139, 92, 246, 0.2)',
        stroke: '#8B5CF6',
        'stroke-width': 1,
        'stroke-dasharray': '3,2'
      }, svg);
      
      // Create connection line between cubes
      const connection = createSvgElement('line', {
        x1: 45,
        y1: 50,
        x2: 55,
        y2: 50,
        stroke: '#8B5CF6',
        'stroke-width': 1,
        'stroke-dasharray': '2,2'
      }, svg);
      
      // Data points traveling along connection
      const dataPoint1 = createSvgElement('circle', {
        cx: 45,
        cy: 50,
        r: 1.5,
        fill: '#8B5CF6'
      }, svg);
      
      const dataPoint2 = createSvgElement('circle', {
        cx: 55,
        cy: 50,
        r: 1.5,
        fill: '#8B5CF6'
      }, svg);
      
      // Animate cubes
      anime({
        targets: cubeLeft,
        y: [40, 38, 40],
        height: [20, 24, 20],
        easing: 'easeInOutSine',
        duration: 3000,
        loop: true
      });
      
      anime({
        targets: cubeRight,
        y: [40, 38, 40],
        height: [20, 24, 20],
        easing: 'easeInOutSine',
        duration: 3000,
        loop: true,
        delay: 500 // Slight delay to show replication effect
      });
      
      // Animate data points
      anime({
        targets: dataPoint1,
        cx: [45, 55],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000,
        loop: true
      });
      
      anime({
        targets: dataPoint2,
        cx: [55, 45],
        opacity: [1, 0],
        easing: 'linear',
        duration: 1000,
        loop: true,
        delay: 500
      });
    }
    
    // Holographic Interfaces animation
    function initHolographicInterfaces() {
      const card = document.querySelector('[data-card="889"]');
      if (!card) {
        console.warn('Card [data-card="889"] not found');
        return;
      }
      // Check if animation container already exists
      if (card.querySelector('.animation-container')) {
        console.log('Animation for card [data-card="889"] already initialized by a specialized script.');
        return;
      }
      
      console.log('Initializing Holographic Interfaces animation via basic loader');
      
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
      
      // Create holographic projection lines
      const projectionLines = [];
      const centerX = 50;
      const centerY = 60;
      const baseY = 80;
      const projectionCount = 8;
      
      for (let i = 0; i < projectionCount; i++) {
        const angle = (i / projectionCount) * Math.PI * 2;
        const topX = centerX + 15 * Math.cos(angle);
        const topY = centerY + 15 * Math.sin(angle);
        
        const line = createSvgElement('line', {
          x1: centerX,
          y1: baseY,
          x2: topX,
          y2: topY,
          stroke: 'rgba(216, 180, 254, 0.4)',
          'stroke-width': 0.5
        }, svg);
        
        projectionLines.push(line);
      }
      
      // Create holographic object (simple cube in 2D)
      const holoObject = createSvgElement('g', {}, svg);
      
      // Cube faces
      createSvgElement('rect', {
        x: centerX - 10,
        y: centerY - 10,
        width: 20,
        height: 20,
        fill: 'rgba(216, 180, 254, 0.2)',
        stroke: 'rgba(216, 180, 254, 0.8)',
        'stroke-width': 0.5
      }, holoObject);
      
      // Scanlines over hologram
      const scanLine = createSvgElement('line', {
        x1: centerX - 15,
        y1: centerY,
        x2: centerX + 15,
        y2: centerY,
        stroke: 'rgba(216, 180, 254, 0.8)',
        'stroke-width': 0.5
      }, svg);
      
      // Base platform
      createSvgElement('ellipse', {
        cx: centerX,
        cy: baseY,
        rx: 15,
        ry: 3,
        fill: 'rgba(216, 180, 254, 0.3)',
        stroke: 'rgba(216, 180, 254, 0.5)',
        'stroke-width': 0.5
      }, svg);
      
      // Animate hologram
      anime({
        targets: holoObject,
        rotate: 360,
        duration: 8000,
        loop: true,
        easing: 'linear',
        transformOrigin: `${centerX}px ${centerY}px`
      });
      
      // Animate scan line
      anime({
        targets: scanLine,
        y1: [centerY - 15, centerY + 15, centerY - 15],
        y2: [centerY - 15, centerY + 15, centerY - 15],
        opacity: [0.3, 0.8, 0.3],
        easing: 'easeInOutSine',
        duration: 2000,
        loop: true
      });
      
      // Animate projection lines
      projectionLines.forEach((line, i) => {
        anime({
          targets: line,
          opacity: [0.2, 0.6, 0.2],
          'stroke-width': [0.5, 1, 0.5],
          easing: 'easeInOutSine',
          duration: 2000,
          loop: true,
          delay: i * 200
        });
      });
    }
    
    // Initialize remaining animations
    function initEdgeComputingSolutions() {
      const card = document.querySelector('[data-card="646"]');
      if (!card) return;
      // Check if animation container already exists or a pulse-container for this specific basic animation
      if (card.querySelector('.animation-container') || card.querySelector('.pulse-container')) {
        console.log('Animation for card [data-card="646"] already initialized.');
        return;
      }
      console.log('Initializing Edge Computing Solutions animation via basic loader');
      
      // Basic pulse animation
      const container = document.createElement('div');
      container.className = 'pulse-container';
      Object.assign(container.style, {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'rgba(251, 146, 60, 0.2)',
        zIndex: 0
      });
      
      card.style.position = 'relative';
      card.insertBefore(container, card.firstChild);
      
      anime({
        targets: container,
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
        easing: 'easeInOutSine',
        duration: 3000,
        loop: true
      });
    }
    
    function initSyntheticMediaCreation() {
      const card = document.querySelector('[data-card="739"]');
      if (!card) return;
      // Check if animation container already exists
      if (card.querySelector('.animation-container')) {
        console.log('Animation for card [data-card="739"] already initialized by a specialized script.');
        return;
      }
      console.log('Initializing Synthetic Media Creation animation via basic loader');
      
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
      
      // Create media elements - images, videos, audio, text
      const mediaSymbols = [];
      
      // Image symbol
      const imageFrame = createSvgElement('rect', {
        x: 30,
        y: 30,
        width: 15,
        height: 12,
        rx: 1,
        fill: 'rgba(52, 211, 153, 0.2)',
        stroke: '#34D399',
        'stroke-width': 0.8
      }, svg);
      
      const imageMountain = createSvgElement('polyline', {
        points: '30,42 35,36 38,39 45,30',
        fill: 'none',
        stroke: '#34D399',
        'stroke-width': 0.8
      }, svg);
      
      const imageSun = createSvgElement('circle', {
        cx: 40,
        cy: 34,
        r: 2,
        fill: 'rgba(52, 211, 153, 0.6)'
      }, svg);
      
      mediaSymbols.push({ elements: [imageFrame, imageMountain, imageSun], x: 38, y: 36 });
      
      // Video symbol
      const videoFrame = createSvgElement('rect', {
        x: 55,
        y: 30,
        width: 15,
        height: 12,
        rx: 1,
        fill: 'rgba(52, 211, 153, 0.2)',
        stroke: '#34D399',
        'stroke-width': 0.8
      }, svg);
      
      const playButton = createSvgElement('polygon', {
        points: '61,36 66,41 61,46',
        fill: 'rgba(52, 211, 153, 0.6)',
        stroke: '#34D399',
        'stroke-width': 0.5
      }, svg);
      
      mediaSymbols.push({ elements: [videoFrame, playButton], x: 63, y: 36 });
      
      // Text symbol
      const textFrame = createSvgElement('rect', {
        x: 30,
        y: 54,
        width: 15,
        height: 12,
        rx: 1,
        fill: 'rgba(52, 211, 153, 0.2)',
        stroke: '#34D399',
        'stroke-width': 0.8
      }, svg);
      
      // Text lines
      const textLine1 = createSvgElement('line', {
        x1: 33,
        y1: 58,
        x2: 42,
        y2: 58,
        stroke: '#34D399',
        'stroke-width': 0.8
      }, svg);
      
      const textLine2 = createSvgElement('line', {
        x1: 33,
        y1: 61,
        x2: 40,
        y2: 61,
        stroke: '#34D399',
        'stroke-width': 0.8
      }, svg);
      
      const textLine3 = createSvgElement('line', {
        x1: 33,
        y1: 64,
        x2: 38,
        y2: 64,
        stroke: '#34D399',
        'stroke-width': 0.8
      }, svg);
      
      mediaSymbols.push({ elements: [textFrame, textLine1, textLine2, textLine3], x: 38, y: 60 });
      
      // Audio symbol
      const audioFrame = createSvgElement('rect', {
        x: 55,
        y: 54,
        width: 15,
        height: 12,
        rx: 1,
        fill: 'rgba(52, 211, 153, 0.2)',
        stroke: '#34D399',
        'stroke-width': 0.8
      }, svg);
      
      // Audio waves
      const audioWave1 = createSvgElement('path', {
        d: 'M58,60 Q60,56 62,60 Q64,64 66,60',
        fill: 'none',
        stroke: '#34D399',
        'stroke-width': 0.8
      }, svg);
      
      const audioWave2 = createSvgElement('path', {
        d: 'M56,60 Q59,54 62,60 Q65,66 68,60',
        fill: 'none',
        stroke: '#34D399',
        'stroke-width': 0.5,
        'stroke-opacity': 0.7
      }, svg);
      
      mediaSymbols.push({ elements: [audioFrame, audioWave1, audioWave2], x: 63, y: 60 });
      
      // Central AI node - generates all media
      const aiNode = createSvgElement('circle', {
        cx: 50,
        cy: 50,
        r: 5,
        fill: 'rgba(52, 211, 153, 0.3)',
        stroke: '#34D399',
        'stroke-width': 1
      }, svg);
      
      // Connecting lines from AI to media
      const connections = mediaSymbols.map(media => {
        return createSvgElement('line', {
          x1: 50,
          y1: 50,
          x2: media.x,
          y2: media.y,
          stroke: 'rgba(52, 211, 153, 0.4)',
          'stroke-width': 0.5,
          'stroke-dasharray': '2,1'
        }, svg);
      });
      
      // Animate AI node
      anime({
        targets: aiNode,
        r: [5, 6, 5],
        opacity: [0.8, 1, 0.8],
        easing: 'easeInOutSine',
        duration: 2000,
        loop: true
      });
      
      // Animate media elements
      mediaSymbols.forEach((media, i) => {
        anime({
          targets: media.elements,
          opacity: [0.7, 1, 0.7],
          scale: [1, 1.05, 1],
          easing: 'easeInOutSine',
          duration: 3000,
          loop: true,
          delay: i * 300
        });
      });
      
      // Animate connections - data flow visualization
      connections.forEach((conn, i) => {
        // Create data particles
        const particles = [];
        for (let j = 0; j < 2; j++) {
          const particle = createSvgElement('circle', {
            r: 1,
            fill: '#34D399',
            opacity: 0
          }, svg);
          
          particles.push(particle);
        }
        
        // Line coordinates
        const x1 = parseFloat(conn.getAttribute('x1'));
        const y1 = parseFloat(conn.getAttribute('y1'));
        const x2 = parseFloat(conn.getAttribute('x2'));
        const y2 = parseFloat(conn.getAttribute('y2'));
        
        // Animate particles along the connection
        particles.forEach((particle, j) => {
          function animateParticle() {
            // Random direction (AI to media or media to AI)
            const reverse = Math.random() > 0.7;
            
            anime({
              targets: particle,
              cx: reverse ? [x2, x1] : [x1, x2],
              cy: reverse ? [y2, y1] : [y1, y2],
              opacity: [0, 0.8, 0],
              easing: 'easeInOutSine',
              duration: 1500,
              complete: function() {
                setTimeout(animateParticle, 2000 + Math.random() * 4000);
              }
            });
          }
          
          // Start animation with delay
          setTimeout(animateParticle, 1000 + i * 500 + j * 1500);
        });
      });
    }
    
    function initQuantumEncryption() {
      const card = document.querySelector('[data-card="738"]');
      if (!card) return;
      // Check if animation container already exists
      if (card.querySelector('.animation-container')) {
        console.log('Animation for card [data-card="738"] already initialized by a specialized script.');
        return;
      }
      console.log('Initializing Quantum Encryption animation via basic loader');
      
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
      
      // Create lock symbol
      const lockBody = createSvgElement('rect', {
        x: 40,
        y: 45,
        width: 20,
        height: 15,
        rx: 2,
        fill: 'rgba(124, 58, 237, 0.3)',
        stroke: '#7C3AED',
        'stroke-width': 1
      }, svg);
      
      const lockShackle = createSvgElement('path', {
        d: 'M45,45 L45,35 C45,30 55,30 55,35 L55,45',
        fill: 'none',
        stroke: '#7C3AED',
        'stroke-width': 1
      }, svg);
      
      // Create quantum particles
      const particles = [];
      const particleCount = 8;
      
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = 15 + Math.random() * 10;
        const x = 50 + distance * Math.cos(angle);
        const y = 50 + distance * Math.sin(angle);
        
        const particle = createSvgElement('circle', {
          cx: x,
          cy: y,
          r: 1 + Math.random(),
          fill: 'rgba(124, 58, 237, 0.5)',
          stroke: '#7C3AED',
          'stroke-width': 0.3
        }, svg);
        
        particles.push({ element: particle, x, y, angle, distance });
      }
      
      // Create entanglement lines
      const entanglements = [];
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          if (Math.random() < 0.3) {
            const line = createSvgElement('line', {
              x1: particles[i].x,
              y1: particles[i].y,
              x2: particles[j].x,
              y2: particles[j].y,
              stroke: 'rgba(124, 58, 237, 0.3)',
              'stroke-width': 0.5,
              'stroke-dasharray': '2,2'
            }, svg);
            
            entanglements.push({ line, from: i, to: j });
          }
        }
      }
      
      // Create key elements
      const keyPoints = [40, 42, 45, 47, 50, 53, 55, 58, 60];
      const keyElements = keyPoints.map(x => {
        return createSvgElement('rect', {
          x: x,
          y: 52,
          width: 1.5,
          height: Math.random() * 4 + 2,
          fill: 'rgba(124, 58, 237, 0.6)',
          opacity: 0.6
        }, svg);
      });
      
      // Animate lock
      anime({
        targets: [lockBody, lockShackle],
        opacity: [0.7, 1, 0.7],
        easing: 'easeInOutSine',
        duration: 3000,
        loop: true
      });
      
      // Animate quantum particles
      particles.forEach((particle, i) => {
        // Orbit animation
        anime({
          targets: particle.element,
          translateX: function() {
            return [0, Math.cos(particle.angle) * 3, 0];
          },
          translateY: function() {
            return [0, Math.sin(particle.angle) * 3, 0];
          },
          r: [particle.element.getAttribute('r'), parseFloat(particle.element.getAttribute('r')) * 1.5, particle.element.getAttribute('r')],
          opacity: [0.5, 0.8, 0.5],
          easing: 'easeInOutSine',
          duration: 2000 + Math.random() * 1000,
          loop: true,
          delay: i * 200
        });
      });
      
      // Animate entanglement lines
      entanglements.forEach((entanglement, i) => {
        anime({
          targets: entanglement.line,
          opacity: [0.3, 0.6, 0.3],
          strokeDashoffset: [0, 10],
          easing: 'easeInOutSine',
          duration: 3000,
          loop: true,
          delay: i * 100
        });
      });
      
      // Animate key - scrambling effect
      keyElements.forEach((element, i) => {
        function scrambleKey() {
          anime({
            targets: element,
            height: Math.random() * 4 + 2,
            opacity: [0.6, 1, 0.6],
            easing: 'easeInOutSine',
            duration: 500,
            complete: function() {
              setTimeout(scrambleKey, 3000 + Math.random() * 2000);
            }
          });
        }
        
        // Start scrambling with staggered delays
        setTimeout(scrambleKey, 1000 + i * 300);
      });
    }
    
    function initAugmentedDevelopment() {
      const card = document.querySelector('[data-card="574"]');
      if (!card) return;
      // Check if animation container already exists
      if (card.querySelector('.animation-container')) {
        console.log('Animation for card [data-card="574"] already initialized by a specialized script.');
        return;
      }
      console.log('Initializing Augmented Development animation via basic loader');
      
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
      
      // Create code window
      const codeWindow = createSvgElement('rect', {
        x: 20,
        y: 30,
        width: 30,
        height: 40,
        rx: 2,
        fill: 'rgba(59, 130, 246, 0.2)',
        stroke: '#3B82F6',
        'stroke-width': 1
      }, svg);
      
      // Create titlebar
      const titlebar = createSvgElement('rect', {
        x: 20,
        y: 30,
        width: 30,
        height: 4,
        rx: 2,
        fill: 'rgba(59, 130, 246, 0.4)',
        stroke: '#3B82F6',
        'stroke-width': 0.5
      }, svg);
      
      // Create code lines
      const codeLines = [];
      for (let i = 0; i < 8; i++) {
        const indent = Math.min(i % 3, 1) * 4;
        const line = createSvgElement('line', {
          x1: 23 + indent,
          y1: 39 + i * 4,
          x2: 23 + indent + 15 + Math.random() * 5,
          y2: 39 + i * 4,
          stroke: 'rgba(59, 130, 246, 0.8)',
          'stroke-width': 0.8
        }, svg);
        
        codeLines.push(line);
      }
      
      // Create AI assistant
      const aiAssistant = createSvgElement('rect', {
        x: 60,
        y: 35,
        width: 20,
        height: 30,
        rx: 2,
        fill: 'rgba(59, 130, 246, 0.2)',
        stroke: '#3B82F6',
        'stroke-width': 1
      }, svg);
      
      // Create AI connection to code
      const aiConnection = createSvgElement('path', {
        d: 'M50,40 C55,40 55,45 60,45',
        fill: 'none',
        stroke: '#3B82F6',
        'stroke-width': 0.8,
        'stroke-dasharray': '2,2'
      }, svg);
      
      // Create AI suggestion boxes
      const suggestions = [];
      for (let i = 0; i < 3; i++) {
        const suggestion = createSvgElement('rect', {
          x: 62,
          y: 40 + i * 8,
          width: 16,
          height: 5,
          rx: 1,
          fill: 'rgba(59, 130, 246, 0.3)',
          stroke: '#3B82F6',
          'stroke-width': 0.5
        }, svg);
        
        // Suggestion text lines
        const line1 = createSvgElement('line', {
          x1: 64,
          y1: 42 + i * 8,
          x2: 76,
          y2: 42 + i * 8,
          stroke: '#3B82F6',
          'stroke-width': 0.5
        }, svg);
        
        const line2 = createSvgElement('line', {
          x1: 64,
          y1: 44 + i * 8,
          x2: 72,
          y2: 44 + i * 8,
          stroke: '#3B82F6',
          'stroke-width': 0.5
        }, svg);
        
        suggestions.push({ box: suggestion, lines: [line1, line2] });
      }
      
      // Create data points that flow between code and AI
      const dataPoints = [];
      for (let i = 0; i < 3; i++) {
        const dataPoint = createSvgElement('circle', {
          r: 1,
          fill: '#3B82F6',
          opacity: 0
        }, svg);
        
        dataPoints.push(dataPoint);
      }
      
      // Animate code lines - simulating typing
      codeLines.forEach((line, i) => {
        const originalWidth = parseFloat(line.getAttribute('x2')) - parseFloat(line.getAttribute('x1'));
        
        anime({
          targets: line,
          x2: [
            { value: parseFloat(line.getAttribute('x1')), duration: 0 },
            { value: parseFloat(line.getAttribute('x1')) + originalWidth, duration: 1000 }
          ],
          opacity: [0, 1],
          easing: 'easeInOutSine',
          delay: 2000 + i * 300,
          loop: true,
          loopDelay: 8000
        });
      });
      
      // Animate AI suggestions
      suggestions.forEach((suggestion, i) => {
        anime({
          targets: [suggestion.box, ...suggestion.lines],
          opacity: [0, 1, 0],
          translateY: [5, 0, -5],
          easing: 'easeInOutSine',
          duration: 3000,
          delay: 3000 + i * 1000,
          loop: true,
          loopDelay: 5000
        });
      });
      
      // Animate data flow
      dataPoints.forEach((point, i) => {
        function animateDataFlow() {
          const toAI = i % 2 === 0;
          
          // Bezier curve path animation
          const bezierPoints = {
            x1: toAI ? 50 : 60,
            y1: toAI ? 40 + i * 5 : 45 + i * 2,
            cp1x: toAI ? 55 : 55,
            cp1y: toAI ? 40 + i * 5 : 45 + i * 2,
            cp2x: toAI ? 55 : 55,
            cp2y: toAI ? 45 + i * 2 : 40 + i * 5,
            x2: toAI ? 60 : 50,
            y2: toAI ? 45 + i * 2 : 40 + i * 5
          };
          
          // Animate along bezier curve
          anime({
            targets: point,
            cx: [bezierPoints.x1, bezierPoints.x2],
            cy: [bezierPoints.y1, bezierPoints.y2],
            opacity: [0, 1, 0],
            easing: 'linear',
            duration: 1500,
            complete: function() {
              setTimeout(animateDataFlow, 3000 + Math.random() * 2000);
            }
          });
        }
        
        // Start animation with staggered delays
        setTimeout(animateDataFlow, 1000 + i * 1500);
      });
    }
    
    function initBiodigitalInterfaces() {
      const card = document.querySelector('[data-card="136"]');
      if (!card) return;
      // Check if animation container already exists
      if (card.querySelector('.animation-container')) {
        console.log('Animation for card [data-card="136"] already initialized by a specialized script.');
        return;
      }
      console.log('Initializing Biodigital Interfaces animation via basic loader');
      
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
      
      // Create biological element (DNA helix)
      const dnaGroup = createSvgElement('g', {
        transform: 'translate(30, 50)'
      }, svg);
      
      const dnaHeight = 40;
      const dnaWidth = 10;
      const rungs = 8;
      
      // Create DNA strands
      const leftStrand = createSvgElement('path', {
        d: `M0,${-dnaHeight/2} Q${-dnaWidth},${-dnaHeight/4} 0,0 Q${-dnaWidth},${dnaHeight/4} 0,${dnaHeight/2}`,
        fill: 'none',
        stroke: '#10B981',
        'stroke-width': 1
      }, dnaGroup);
      
      const rightStrand = createSvgElement('path', {
        d: `M0,${-dnaHeight/2} Q${dnaWidth},${-dnaHeight/4} 0,0 Q${dnaWidth},${dnaHeight/4} 0,${dnaHeight/2}`,
        fill: 'none',
        stroke: '#10B981',
        'stroke-width': 1
      }, dnaGroup);
      
      // Create DNA rungs
      const dnaRungs = [];
      for (let i = 0; i < rungs; i++) {
        const y = -dnaHeight/2 + dnaHeight * (i / (rungs - 1));
        const x = dnaWidth * Math.sin((i / (rungs - 1)) * Math.PI);
        
        const rung = createSvgElement('line', {
          x1: -x,
          y1: y,
          x2: x,
          y2: y,
          stroke: 'rgba(16, 185, 129, 0.7)',
          'stroke-width': 0.8
        }, dnaGroup);
        
        dnaRungs.push(rung);
      }
      
      // Create digital element (circuit board)
      const circuitGroup = createSvgElement('g', {
        transform: 'translate(70, 50)'
      }, svg);
      
      // Create circuit base
      const circuit = createSvgElement('rect', {
        x: -15,
        y: -20,
        width: 30,
        height: 40,
        rx: 2,
        fill: 'rgba(16, 185, 129, 0.2)',
        stroke: '#10B981',
        'stroke-width': 1
      }, circuitGroup);
      
      // Create circuit paths
      const circuitPaths = [];
      
      // Horizontal paths
      for (let i = 0; i < 5; i++) {
        const y = -15 + i * 8;
        const path = createSvgElement('line', {
          x1: -12,
          y1: y,
          x2: 12,
          y2: y,
          stroke: '#10B981',
          'stroke-width': 0.8
        }, circuitGroup);
        
        circuitPaths.push(path);
      }
      
      // Vertical paths
      for (let i = 0; i < 4; i++) {
        const x = -9 + i * 6;
        const path = createSvgElement('line', {
          x1: x,
          y1: -18,
          x2: x,
          y2: 18,
          stroke: '#10B981',
          'stroke-width': 0.8
        }, circuitGroup);
        
        circuitPaths.push(path);
      }
      
      // Create interface connection (between bio and digital)
      const connectionPath = createSvgElement('path', {
        d: 'M40,50 C45,50 45,50 50,45 S55,40 60,40 Q62,40 65,40 L70,40',
        fill: 'none',
        stroke: '#10B981',
        'stroke-width': 1,
        'stroke-dasharray': '3,2'
      }, svg);
      
      // Create data points flowing through connection
      const dataPoints = [];
      for (let i = 0; i < 3; i++) {
        const dataPoint = createSvgElement('circle', {
          r: 1.2,
          fill: '#10B981',
          opacity: 0
        }, svg);
        
        dataPoints.push(dataPoint);
      }
      
      // Create interface nodes on both sides
      const bioNode = createSvgElement('circle', {
        cx: 35,
        cy: 50,
        r: 2.5,
        fill: 'rgba(16, 185, 129, 0.3)',
        stroke: '#10B981',
        'stroke-width': 0.8
      }, svg);
      
      const digitalNode = createSvgElement('circle', {
        cx: 65,
        cy: 40,
        r: 2.5,
        fill: 'rgba(16, 185, 129, 0.3)',
        stroke: '#10B981',
        'stroke-width': 0.8
      }, svg);
      
      // Animate DNA helix (rotate)
      anime({
        targets: dnaGroup,
        rotateZ: 360,
        duration: 20000,
        easing: 'linear',
        loop: true
      });
      
      // Animate DNA rungs
      dnaRungs.forEach((rung, i) => {
        anime({
          targets: rung,
          opacity: [0.5, 1, 0.5],
          easing: 'easeInOutSine',
          duration: 3000,
          loop: true,
          delay: i * 300
        });
      });
      
      // Animate circuit paths (pulsing)
      circuitPaths.forEach((path, i) => {
        anime({
          targets: path,
          opacity: [0.5, 1, 0.5],
          'stroke-width': [0.8, 1.2, 0.8],
          easing: 'easeInOutSine',
          duration: 2000,
          loop: true,
          delay: i * 100
        });
      });
      
      // Animate nodes
      anime({
        targets: [bioNode, digitalNode],
        r: [2.5, 3, 2.5],
        opacity: [0.7, 1, 0.7],
        easing: 'easeInOutSine',
        duration: 2000,
        loop: true,
        delay: function(el, i) {
          return i * 1000;
        }
      });
      
      // Animate data flow
      dataPoints.forEach((point, i) => {
        function animateDataFlow() {
          // Path animation along the curve
          anime({
            targets: point,
            cx: [35, 50, 65],
            cy: [50, 45, 40],
            opacity: [0, 1, 0],
            easing: 'easeInOutSine',
            duration: 2000,
            complete: function() {
              setTimeout(animateDataFlow, 3000 + Math.random() * 3000);
            }
          });
        }
        
        // Start with staggered delays
        setTimeout(animateDataFlow, 1000 + i * 1000);
      });
    }
    
    // Initialize all basic animations
    initDigitalTwinEngineering();
    initHolographicInterfaces();
    initEdgeComputingSolutions();
    initSyntheticMediaCreation();
    initQuantumEncryption();
    initAugmentedDevelopment();
    initBiodigitalInterfaces();
  }

  // Main initialization function - ensures animations work in Adaptive Interfaces and Quantum Architecture
  function initExistingAnimations() {
    // Initialize Adaptive Interfaces animation
    const initAdaptiveInterfaces = window.initAdaptiveInterfaces;
    if (typeof initAdaptiveInterfaces === 'function') {
      initAdaptiveInterfaces();
    } else {
      console.warn('initAdaptiveInterfaces function not found');
    }

    // Initialize Quantum Architecture animation
    const initQuantumArchitecture = window.initQuantumArchitecture;
    if (typeof initQuantumArchitecture === 'function') {
      initQuantumArchitecture();
    } else {
      console.warn('initQuantumArchitecture function not found');
    }
  }
  
  // Main initialization function - ensures animations work
  function initializeAllAnimations() {
    console.log('Initializing all animations...');
    
    // Initialize our specialized animations from window object
    const specializedAnimationInitializers = [
      // These names should match global functions defined by specialized scripts
      { name: 'Adaptive Interfaces', fnName: 'initAdaptiveInterfaces', cardSelector: '[data-card="242"]' },
      { name: 'Quantum Architecture', fnName: 'initQuantumArchitecture', cardSelector: '[data-card="627"]' },
      { name: 'Neural Integration', fnName: 'initNeuralIntegration', cardSelector: '[data-card="675"]' },
      { name: 'Data Mesh Systems', fnName: 'initDataMeshSystems', cardSelector: '[data-card="937"]' },
      { name: 'Cybernetic Security', fnName: 'initCyberneticSecurity', cardSelector: '[data-card="886"]' },
      // The following are also in basic, so specialized should take precedence
      { name: 'Digital Twin Engineering', fnName: 'initDigitalTwinEngineeringSpecialized', cardSelector: '[data-card="727"]' }, // Assuming specialized script defines this
      { name: 'Holographic Interfaces', fnName: 'initHolographicInterfacesSpecialized', cardSelector: '[data-card="889"]' }, // Assuming specialized script defines this
      { name: 'Edge Computing Solutions', fnName: 'initEdgeComputingSolutionsSpecialized', cardSelector: '[data-card="646"]' }  // Assuming specialized script defines this
    ];
    
    specializedAnimationInitializers.forEach(anim => {
      const cardElement = document.querySelector(anim.cardSelector);
      if (cardElement) {
        if (typeof window[anim.fnName] === 'function') {
          console.log(`Initializing ${anim.name} animation via specialized script (${anim.fnName})`);
          try {
            window[anim.fnName](cardElement); // Pass card element if needed by specialized function
             // Mark as initialized by specialized script
            cardElement.setAttribute('data-specialized-animation-init', 'true');
          } catch (error) {
            console.error(`Error initializing ${anim.name} (specialized) animation:`, error);
          }
        } else {
          console.warn(`${anim.name} specialized animation function ${anim.fnName} not found on window.`);
        }
      } else {
        console.warn(`Card for ${anim.name} (${anim.cardSelector}) not found.`);
      }
    });
    
    // Initialize basic animations for cards not handled by specialized scripts
    // The internal checks in these functions will prevent re-initialization
    console.log('Proceeding to initialize basic animations (will skip if already handled by specialized scripts)...');
    initializeBasicAnimations();
  }
  
  // Start the loading process
  loadAnimeJS()
    .then(() => {
      console.log('Starting specialized animations load (for non-grid elements if any)');
      return loadSpecializedAnimations(); // This loads scripts like tech-animate-neural.js etc.
    })
    .then(() => {
      console.log('Initializing existing page animations (e.g., for elements outside the main grid)');
      // This calls functions like window.initAdaptiveInterfaces if they exist from specialized scripts
      // It also calls initializeBasicAnimations which has its own internal checks now.
      initializeAllAnimations(); 

      // Now, load and initialize the new tech grid card animations
      console.log('Attempting to load tech-grid-animations.js');
      const techGridAnimScript = document.createElement('script');
      techGridAnimScript.src = '/js/tech-grid-animations.js';
      techGridAnimScript.onload = () => {
        if (typeof window.initAllTechGridAnimations === 'function') {
          console.log('Initializing new tech grid card animations via tech-grid-animations.js');
          window.initAllTechGridAnimations();
        } else {
          console.error('initAllTechGridAnimations function not found after loading script.');
        }
      };
      techGridAnimScript.onerror = () => {
        console.error('Failed to load tech-grid-animations.js');
      };
      document.head.appendChild(techGridAnimScript);
    })
    .catch(error => {
      console.error('Main animation initialization failed:', error);
    });
})(); 