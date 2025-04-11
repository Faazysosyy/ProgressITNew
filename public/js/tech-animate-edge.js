// Edge Computing Solutions animation implementation
function initEdgeComputingSolutions() {
  let card = document.querySelector('[data-card="646"]');
  if (!card) {
    console.warn('Card [data-card="646"] not found');
    // Try fallback with alternative ID or search by text
    card = document.querySelector('[data-card="464"]') || document.querySelector('[data-card="504"]');
    
    if (!card) {
      // Try to find by content
      const possibleCards = document.querySelectorAll('.card');
      for (const possibleCard of possibleCards) {
        if (possibleCard.textContent.includes('Edge Computing') || 
            possibleCard.innerHTML.includes('Edge Computing Solutions')) {
          console.log('Found Edge Computing Solutions card by text content');
          card = possibleCard;
          break;
        }
      }
    }
    
    if (!card) return;
  }
  
  console.log('Initializing Edge Computing Solutions animation');
  
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
  
  // Create central cloud
  const cloud = createSvgElement('ellipse', {
    cx: 50,
    cy: 50,
    rx: 12,
    ry: 8,
    fill: 'rgba(251, 146, 60, 0.3)',
    stroke: '#FB923C',
    'stroke-width': 1
  }, svg);
  
  // Create edge devices
  const edgeDevices = [];
  const deviceCount = 8;
  
  for (let i = 0; i < deviceCount; i++) {
    const angle = (i / deviceCount) * Math.PI * 2;
    const distance = 25 + Math.random() * 10;
    const x = 50 + distance * Math.cos(angle);
    const y = 50 + distance * Math.sin(angle);
    
    // Each device is a small rectangle
    const device = createSvgElement('rect', {
      x: x - 3,
      y: y - 2,
      width: 6,
      height: 4,
      rx: 1,
      fill: 'rgba(251, 146, 60, 0.2)',
      stroke: '#FB923C',
      'stroke-width': 0.8
    }, svg);
    
    // Connection line to cloud
    const connection = createSvgElement('line', {
      x1: 50,
      y1: 50,
      x2: x,
      y2: y,
      stroke: 'rgba(251, 146, 60, 0.3)',
      'stroke-width': 0.5,
      'stroke-dasharray': '3,2'
    }, svg);
    
    // Data packet
    const packet = createSvgElement('circle', {
      cx: 50,
      cy: 50,
      r: 1.2,
      fill: '#FB923C',
      opacity: 0
    }, svg);
    
    edgeDevices.push({ device, connection, packet, x, y });
  }
  
  // Animate cloud
  anime({
    targets: cloud,
    rx: [12, 13, 12],
    ry: [8, 9, 8],
    opacity: [0.3, 0.5, 0.3],
    easing: 'easeInOutSine',
    duration: 3000,
    loop: true
  });
  
  // Animate edge devices and data flow
  edgeDevices.forEach((edge, i) => {
    // Occasionally pulse the device
    anime({
      targets: edge.device,
      fill: [
        { value: 'rgba(251, 146, 60, 0.2)', duration: 0 },
        { value: 'rgba(251, 146, 60, 0.5)', duration: 500 },
        { value: 'rgba(251, 146, 60, 0.2)', duration: 500 }
      ],
      width: [6, 7, 6],
      height: [4, 5, 4],
      easing: 'easeInOutQuad',
      duration: 2000,
      loop: true,
      delay: i * 500
    });
    
    // Animate data packets
    function animateDataFlow() {
      const isDeviceToCloud = Math.random() < 0.5;
      
      anime({
        targets: edge.packet,
        cx: isDeviceToCloud ? [edge.x, 50] : [50, edge.x],
        cy: isDeviceToCloud ? [edge.y, 50] : [50, edge.y],
        opacity: [0, 0.8, 0],
        r: [1, 1.5, 1],
        easing: 'easeInOutQuad',
        duration: 1000,
        complete: function() {
          // Schedule next data flow after random delay
          setTimeout(animateDataFlow, 2000 + Math.random() * 3000);
        }
      });
    }
    
    // Start animation with staggered delays
    setTimeout(animateDataFlow, 500 + i * 500);
  });
  
  // Create processing indicators at random positions
  const processors = [];
  for (let i = 0; i < 3; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = 5 + Math.random() * 5;
    const x = 50 + distance * Math.cos(angle);
    const y = 50 + distance * Math.sin(angle);
    
    const processor = createSvgElement('circle', {
      cx: x,
      cy: y,
      r: 1.5,
      fill: 'rgba(251, 146, 60, 0.5)',
      stroke: '#FB923C',
      'stroke-width': 0.3
    }, svg);
    
    processors.push(processor);
  }
  
  // Animate processors
  processors.forEach((processor, i) => {
    anime({
      targets: processor,
      r: [1.5, 2.5, 1.5],
      opacity: [0.5, 0.8, 0.5],
      easing: 'easeInOutSine',
      duration: 1500,
      loop: true,
      delay: i * 300
    });
  });
  
  // Create speed lines around the cloud to indicate processing
  const speedLines = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const startX = 50 + 14 * Math.cos(angle);
    const startY = 50 + 10 * Math.sin(angle);
    const endX = 50 + 16 * Math.cos(angle);
    const endY = 50 + 12 * Math.sin(angle);
    
    const speedLine = createSvgElement('line', {
      x1: startX,
      y1: startY,
      x2: endX,
      y2: endY,
      stroke: '#FB923C',
      'stroke-width': 0.8,
      opacity: 0.3
    }, svg);
    
    speedLines.push(speedLine);
  }
  
  // Animate speed lines
  speedLines.forEach((line, i) => {
    anime({
      targets: line,
      opacity: [0.3, 0.7, 0.3],
      'stroke-width': [0.8, 1.2, 0.8],
      easing: 'easeInOutSine',
      duration: 1000,
      loop: true,
      delay: i * 200
    });
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
window.initEdgeComputingSolutions = initEdgeComputingSolutions; 