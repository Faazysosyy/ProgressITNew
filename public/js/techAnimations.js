// Main initialization function
document.addEventListener('DOMContentLoaded', () => {
  // Check if anime.js is available
  if (typeof anime === 'undefined') {
    console.error('Anime.js is not loaded! Loading it dynamically...');
    
    // Dynamically load anime.js if it's not available
    const script = document.createElement('script');
    script.src = '/js/anime.min.js';
    script.onload = initAnimations;
    document.head.appendChild(script);
  } else {
    initAnimations();
  }
  
  function initAnimations() {
    console.log('Initializing animations with anime.js:', anime);
    
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
    
    // Create neural network nodes and connections
    const neurons = [];
    const connections = [];
    const neuronPositions = [
      {x: 30, y: 30}, {x: 70, y: 30}, 
      {x: 20, y: 50}, {x: 50, y: 50}, {x: 80, y: 50},
      {x: 30, y: 70}, {x: 70, y: 70}
    ];
    
    // Create neurons
    neuronPositions.forEach((pos, i) => {
      const neuron = createSvgElement('circle', {
        cx: pos.x,
        cy: pos.y,
        r: 3,
        fill: 'rgba(45, 212, 191, 0.3)',
        stroke: '#2DD4BF',
        'stroke-width': 1
      }, svg);
      
      neurons.push({ element: neuron, x: pos.x, y: pos.y, connections: [] });
    });
    
    // Create connections between neurons
    for (let i = 0; i < neurons.length; i++) {
      for (let j = i + 1; j < neurons.length; j++) {
        if (Math.random() > 0.4) continue; // Only connect some neurons
        
        const connection = createSvgElement('line', {
          x1: neurons[i].x,
          y1: neurons[i].y,
          x2: neurons[j].x,
          y2: neurons[j].y,
          stroke: 'rgba(45, 212, 191, 0.3)',
          'stroke-width': 0.5
        }, svg);
        
        // Pulse element that travels along the connection
        const pulse = createSvgElement('circle', {
          r: 1.5,
          fill: '#2DD4BF',
          opacity: 0
        }, svg);
        
        connections.push({
          element: connection,
          pulse,
          from: i,
          to: j
        });
        
        neurons[i].connections.push(connections.length - 1);
        neurons[j].connections.push(connections.length - 1);
      }
    }
    
    // Animate neural network
    function animateNetwork() {
      // Randomly activate neurons
      if (Math.random() < 0.2) {
        const i = Math.floor(Math.random() * neurons.length);
        
        // Neuron activation animation
        anime({
          targets: neurons[i].element,
          r: [3, 5, 3],
          fill: [
            { value: 'rgba(45, 212, 191, 0.3)', duration: 0 },
            { value: 'rgba(45, 212, 191, 0.7)', duration: 500 },
            { value: 'rgba(45, 212, 191, 0.3)', duration: 500 }
          ],
          easing: 'easeOutElastic',
          duration: 1000
        });
        
        // Activate outgoing connections
        neurons[i].connections.forEach(connIdx => {
          const conn = connections[connIdx];
          const fromNeuron = neurons[conn.from];
          const toNeuron = neurons[conn.to];
          
          // Determine which end is the current neuron
          const isFrom = conn.from === i;
          const startX = isFrom ? fromNeuron.x : toNeuron.x;
          const startY = isFrom ? fromNeuron.y : toNeuron.y;
          const endX = isFrom ? toNeuron.x : fromNeuron.x;
          const endY = isFrom ? toNeuron.y : fromNeuron.y;
          
          // Signal pulse animation
          anime({
            targets: conn.pulse,
            cx: [startX, endX],
            cy: [startY, endY],
            opacity: [0, 1, 0],
            easing: 'linear',
            duration: 1000
          });
          
          // Highlight connection
          anime({
            targets: conn.element,
            strokeOpacity: [0.3, 0.8, 0.3],
            easing: 'easeInOutSine',
            duration: 1000
          });
        });
      }
      
      requestAnimationFrame(animateNetwork);
    }
    
    animateNetwork();
  }
  
  // Data Mesh Systems animation
  function initDataMeshSystems() {
    const card = document.querySelector('[data-card="937"]');
    if (!card) {
      console.warn('Card [data-card="937"] not found');
      return;
    }
    
    console.log('Initializing Data Mesh Systems animation');
    
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
    
    // Create data mesh grid
    const nodes = [];
    const gridSize = 3;
    
    // Create nodes in a grid
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        const x = 30 + col * 20;
        const y = 30 + row * 20;
        
        const node = createSvgElement('rect', {
          x: x - 4,
          y: y - 4,
          width: 8,
          height: 8,
          rx: 1,
          fill: 'rgba(14, 165, 233, 0.3)',
          stroke: '#0EA5E9',
          'stroke-width': 1
        }, svg);
        
        nodes.push({ element: node, x, y, row, col });
        
        // Create horizontal connections
        if (col > 0) {
          const conn = createSvgElement('line', {
            x1: nodes[nodes.length - 2].x,
            y1: nodes[nodes.length - 2].y,
            x2: x,
            y2: y,
            stroke: 'rgba(14, 165, 233, 0.3)',
            'stroke-width': 0.7,
            'stroke-dasharray': '2,1'
          }, svg);
        }
        
        // Create vertical connections
        if (row > 0) {
          const conn = createSvgElement('line', {
            x1: x,
            y1: y - 20,
            x2: x,
            y2: y,
            stroke: 'rgba(14, 165, 233, 0.3)',
            'stroke-width': 0.7,
            'stroke-dasharray': '2,1'
          }, svg);
        }
      }
    }
    
    // Create data packets
    const packets = [];
    for (let i = 0; i < 3; i++) {
      const packet = createSvgElement('circle', {
        r: 2,
        fill: '#0EA5E9',
        opacity: 0
      }, svg);
      
      packets.push(packet);
    }
    
    // Animate data flow through the mesh
    function animateDataMesh() {
      if (Math.random() < 0.3) {
        const startNode = nodes[Math.floor(Math.random() * nodes.length)];
        let currentNode = startNode;
        
        // Activate the starting node
        anime({
          targets: startNode.element,
          fill: [
            { value: 'rgba(14, 165, 233, 0.3)', duration: 0 },
            { value: 'rgba(14, 165, 233, 0.7)', duration: 300 },
            { value: 'rgba(14, 165, 233, 0.3)', duration: 300 }
          ],
          easing: 'easeOutQuad',
          duration: 600
        });
        
        // Choose a random path through the grid
        const pathLength = 2 + Math.floor(Math.random() * 3);
        
        for (let i = 0; i < pathLength; i++) {
          // Find neighboring nodes
          const neighbors = nodes.filter(node => {
            return (
              (Math.abs(node.row - currentNode.row) === 1 && node.col === currentNode.col) ||
              (Math.abs(node.col - currentNode.col) === 1 && node.row === currentNode.row)
            );
          });
          
          if (neighbors.length === 0) break;
          
          // Pick a random neighbor
          const nextNode = neighbors[Math.floor(Math.random() * neighbors.length)];
          
          // Get a packet
          const packet = packets[i % packets.length];
          
          // Animate packet moving from current to next node
          anime({
            targets: packet,
            cx: [currentNode.x, nextNode.x],
            cy: [currentNode.y, nextNode.y],
            opacity: [0, 1, 0],
            easing: 'easeInOutSine',
            duration: 800,
            delay: i * 800
          });
          
          // Activate the next node when packet arrives
          anime({
            targets: nextNode.element,
            fill: [
              { value: 'rgba(14, 165, 233, 0.3)', duration: 0 },
              { value: 'rgba(14, 165, 233, 0.7)', duration: 300 },
              { value: 'rgba(14, 165, 233, 0.3)', duration: 300 }
            ],
            easing: 'easeOutQuad',
            duration: 600,
            delay: i * 800 + 400
          });
          
          currentNode = nextNode;
        }
      }
      
      setTimeout(animateDataMesh, 1000 + Math.random() * 1000);
    }
    
    animateDataMesh();
  }
  
  // Simplified placeholder implementations for other animations
  function initCyberneticSecurity() {
    const card = document.querySelector('[data-card="886"]');
    if (!card) {
      console.warn('Card [data-card="886"] not found');
      return;
    }
    console.log('Initializing Cybernetic Security animation (placeholder)');
  }
  
  function initDigitalTwinEngineering() {
    const card = document.querySelector('[data-card="727"]');
    if (!card) {
      console.warn('Card [data-card="727"] not found');
      return;
    }
    console.log('Initializing Digital Twin Engineering animation (placeholder)');
  }
  
  function initHolographicInterfaces() {
    const card = document.querySelector('[data-card="889"]');
    if (!card) {
      console.warn('Card [data-card="889"] not found');
      return;
    }
    console.log('Initializing Holographic Interfaces animation (placeholder)');
  }
  
  function initEdgeComputingSolutions() {
    const card = document.querySelector('[data-card="646"]');
    if (!card) {
      console.warn('Card [data-card="646"] not found');
      return;
    }
    console.log('Initializing Edge Computing Solutions animation (placeholder)');
  }
  
  function initSyntheticMediaCreation() {
    const card = document.querySelector('[data-card="739"]');
    if (!card) {
      console.warn('Card [data-card="739"] not found');
      return;
    }
    console.log('Initializing Synthetic Media Creation animation (placeholder)');
  }
  
  function initQuantumEncryption() {
    const card = document.querySelector('[data-card="738"]');
    if (!card) {
      console.warn('Card [data-card="738"] not found');
      return;
    }
    console.log('Initializing Quantum Encryption animation (placeholder)');
  }
  
  function initAugmentedDevelopment() {
    const card = document.querySelector('[data-card="574"]');
    if (!card) {
      console.warn('Card [data-card="574"] not found');
      return;
    }
    console.log('Initializing Augmented Development animation (placeholder)');
  }
  
  function initBiodigitalInterfaces() {
    const card = document.querySelector('[data-card="136"]');
    if (!card) {
      console.warn('Card [data-card="136"] not found');
      return;
    }
    console.log('Initializing Biodigital Interfaces animation (placeholder)');
  }
});

// Add CSS for animations
document.addEventListener('DOMContentLoaded', () => {
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
}); 