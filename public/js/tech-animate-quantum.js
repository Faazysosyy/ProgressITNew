// Quantum-Ready Architecture animation implementation
function initQuantumArchitecture() {
  // Original ID was incorrect, updating to the correct ID from the HTML
  let card = document.querySelector('[data-card="627"]');
  if (!card) {
    console.warn('Card [data-card="627"] not found');
    // Try fallback options in case the ID is something else
    const possibleCards = document.querySelectorAll('.card');
    for (const possibleCard of possibleCards) {
      if (possibleCard.textContent.includes('Quantum') || possibleCard.innerHTML.includes('Quantum-Ready Architecture')) {
        console.log('Found Quantum-Ready Architecture card by text content');
        card = possibleCard;
        break;
      }
    }
    
    if (!card) return;
  }
  
  console.log('Initializing Quantum-Ready Architecture animation');
  
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
  
  // Create quantum lattice structure
  const latticeGroup = createSvgElement('g', {}, svg);
  
  // Quantum particles (qubits)
  const particles = [];
  const particleCount = 12;
  const centerX = 50;
  const centerY = 50;
  const radius = 25;
  
  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    
    const particle = createSvgElement('circle', {
      cx: x,
      cy: y,
      r: 2,
      fill: 'rgba(168, 85, 247, 0.4)',
      stroke: '#A855F7',
      'stroke-width': 0.8
    }, latticeGroup);
    
    particles.push({ element: particle, x, y, angle, orbitRadius: radius });
  }
  
  // Create inner quantum core
  const quantumCore = createSvgElement('circle', {
    cx: centerX,
    cy: centerY,
    r: 8,
    fill: 'rgba(168, 85, 247, 0.2)',
    stroke: '#A855F7',
    'stroke-width': 1
  }, latticeGroup);
  
  // Quantum connections (entanglement)
  const connections = [];
  
  // Connect qubits in a circle
  for (let i = 0; i < particleCount; i++) {
    const nextIdx = (i + 1) % particleCount;
    
    const connection = createSvgElement('line', {
      x1: particles[i].x,
      y1: particles[i].y,
      x2: particles[nextIdx].x,
      y2: particles[nextIdx].y,
      stroke: 'rgba(168, 85, 247, 0.3)',
      'stroke-width': 0.5,
      'stroke-dasharray': '3,2'
    }, latticeGroup);
    
    connections.push({
      element: connection,
      from: i,
      to: nextIdx
    });
  }
  
  // Create connections to core
  const coreConnections = [];
  
  particles.forEach((particle, i) => {
    const connection = createSvgElement('line', {
      x1: particle.x,
      y1: particle.y,
      x2: centerX,
      y2: centerY,
      stroke: 'rgba(168, 85, 247, 0.2)',
      'stroke-width': 0.5,
      'stroke-dasharray': '2,3'
    }, latticeGroup);
    
    coreConnections.push({
      element: connection,
      particleIdx: i
    });
  });
  
  // Create classical architecture elements
  const classicalElements = [];
  
  // Create layered architecture blocks
  const layers = [
    { name: 'UI', y: 15, width: 40, height: 8 },
    { name: 'API', y: 25, width: 40, height: 8 },
    { name: 'Logic', y: 35, width: 40, height: 8 },
    { name: 'Data', y: 85, width: 40, height: 8 }
  ];
  
  layers.forEach(layer => {
    const layerBlock = createSvgElement('rect', {
      x: centerX - layer.width / 2,
      y: layer.y,
      width: layer.width,
      height: layer.height,
      rx: 2,
      fill: 'rgba(168, 85, 247, 0.15)',
      stroke: '#A855F7',
      'stroke-width': 0.8
    }, svg);
    
    // Layer label
    const layerText = createSvgElement('text', {
      x: centerX,
      y: layer.y + layer.height / 2 + 1,
      'text-anchor': 'middle',
      'alignment-baseline': 'middle',
      'font-size': '4px',
      fill: '#A855F7',
      opacity: 0.8
    }, svg);
    layerText.textContent = layer.name;
    
    classicalElements.push({
      block: layerBlock,
      text: layerText,
      layer
    });
  });
  
  // Create connections between classical and quantum systems
  const bridgeConnections = [];
  
  // Connect top and bottom classical layers to quantum core
  const topLayer = classicalElements[0];
  const bottomLayer = classicalElements[classicalElements.length - 1];
  
  const topConnection = createSvgElement('line', {
    x1: centerX,
    y1: topLayer.layer.y + topLayer.layer.height,
    x2: centerX,
    y2: centerY - 8,
    stroke: '#A855F7',
    'stroke-width': 1,
    'stroke-dasharray': '3,3'
  }, svg);
  
  const bottomConnection = createSvgElement('line', {
    x1: centerX,
    y1: centerY + 8,
    x2: centerX,
    y2: bottomLayer.layer.y,
    stroke: '#A855F7',
    'stroke-width': 1,
    'stroke-dasharray': '3,3'
  }, svg);
  
  bridgeConnections.push(topConnection, bottomConnection);
  
  // Create quantum data packets
  const dataPackets = [];
  for (let i = 0; i < 4; i++) {
    const packet = createSvgElement('circle', {
      r: 1.5,
      fill: '#A855F7',
      opacity: 0
    }, svg);
    
    dataPackets.push(packet);
  }
  
  // Create superposition indicators
  const superpositionElements = [];
  particles.forEach((particle, i) => {
    // Only add to some particles
    if (i % 3 !== 0) return;
    
    const superposition = createSvgElement('circle', {
      cx: particle.x,
      cy: particle.y,
      r: 4,
      fill: 'none',
      stroke: '#A855F7',
      'stroke-width': 0.5,
      opacity: 0,
      'stroke-dasharray': '1,1'
    }, svg);
    
    superpositionElements.push({
      element: superposition,
      particleIdx: i
    });
  });
  
  // Animate quantum particles (qubits)
  particles.forEach((particle, i) => {
    // Orbital animation around center
    anime({
      targets: particle.element,
      translateX: [
        0,
        Math.cos(particle.angle + Math.PI/4) * 5,
        Math.cos(particle.angle + Math.PI/2) * 5,
        Math.cos(particle.angle + Math.PI) * 5,
        0
      ],
      translateY: [
        0, 
        Math.sin(particle.angle + Math.PI/4) * 5,
        Math.sin(particle.angle + Math.PI/2) * 5,
        Math.sin(particle.angle + Math.PI) * 5,
        0
      ],
      r: [2, 3, 2],
      opacity: [0.7, 1, 0.7],
      easing: 'easeInOutSine',
      duration: 10000,
      loop: true,
      delay: i * 200
    });
  });
  
  // Animate quantum connections
  connections.forEach((connection, i) => {
    anime({
      targets: connection.element,
      opacity: [0.2, 0.6, 0.2],
      'stroke-width': [0.5, 1, 0.5],
      easing: 'easeInOutSine',
      duration: 4000,
      loop: true,
      delay: i * 150
    });
  });
  
  // Animate core connections
  coreConnections.forEach((connection, i) => {
    anime({
      targets: connection.element,
      opacity: [0.2, 0.5, 0.2],
      'stroke-dashoffset': [0, 10],
      easing: 'easeInOutSine',
      duration: 3000,
      loop: true,
      delay: i * 100
    });
  });
  
  // Animate quantum core
  anime({
    targets: quantumCore,
    r: [8, 9, 8],
    opacity: [0.7, 1, 0.7],
    easing: 'easeInOutSine',
    duration: 3000,
    loop: true
  });
  
  // Animate classical elements
  classicalElements.forEach((element, i) => {
    anime({
      targets: element.block,
      width: [element.layer.width, element.layer.width + 2, element.layer.width],
      x: [centerX - element.layer.width / 2, centerX - (element.layer.width + 2) / 2, centerX - element.layer.width / 2],
      opacity: [0.7, 0.9, 0.7],
      easing: 'easeInOutSine',
      duration: 3000,
      loop: true,
      delay: i * 300
    });
  });
  
  // Animate bridge connections
  bridgeConnections.forEach((connection, i) => {
    anime({
      targets: connection,
      'stroke-dashoffset': [0, 20],
      opacity: [0.5, 0.8, 0.5],
      easing: 'easeInOutSine',
      duration: 4000,
      loop: true,
      delay: i * 1000
    });
  });
  
  // Animate data packets traveling between classical and quantum
  dataPackets.forEach((packet, i) => {
    function animatePacket() {
      // Decide which path to take
      const isTopToBottom = i % 2 === 0;
      
      if (isTopToBottom) {
        // From UI to Data through quantum
        anime({
          targets: packet,
          cx: [centerX, centerX, centerX],
          cy: [
            topLayer.layer.y + topLayer.layer.height / 2,
            centerY,
            bottomLayer.layer.y + bottomLayer.layer.height / 2
          ],
          opacity: [0, 0.8, 0.8, 0],
          r: [1, 2, 2, 1],
          easing: 'easeInOutSine',
          duration: 3000,
          complete: function() {
            setTimeout(animatePacket, 3000 + Math.random() * 4000);
          }
        });
      } else {
        // From Data to UI through quantum
        anime({
          targets: packet,
          cx: [centerX, centerX, centerX],
          cy: [
            bottomLayer.layer.y + bottomLayer.layer.height / 2,
            centerY,
            topLayer.layer.y + topLayer.layer.height / 2
          ],
          opacity: [0, 0.8, 0.8, 0],
          r: [1, 2, 2, 1],
          easing: 'easeInOutSine',
          duration: 3000,
          complete: function() {
            setTimeout(animatePacket, 3000 + Math.random() * 4000);
          }
        });
      }
    }
    
    setTimeout(animatePacket, 1000 + i * 1500);
  });
  
  // Animate superposition indicators
  superpositionElements.forEach((superposition, i) => {
    function animateSuperposition() {
      anime({
        targets: superposition.element,
        r: [4, 6, 4],
        opacity: [0, 0.5, 0],
        easing: 'easeOutQuad',
        duration: 2000,
        complete: function() {
          setTimeout(animateSuperposition, 5000 + Math.random() * 5000);
        }
      });
    }
    
    setTimeout(animateSuperposition, 3000 + i * 2000);
  });
  
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
}

// Make the function available globally
window.initQuantumArchitecture = initQuantumArchitecture; 