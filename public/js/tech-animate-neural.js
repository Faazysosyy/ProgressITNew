// Neural Integration animation implementation
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
  
  // Create SVG container for neural network
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
window.initNeuralIntegration = initNeuralIntegration; 