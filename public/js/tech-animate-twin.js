// Digital Twin Engineering animation implementation
function initDigitalTwinEngineering() {
  const card = document.querySelector('[data-card="727"]');
  if (!card) {
    console.warn('Card [data-card="727"] not found');
    return;
  }
  
  console.log('Initializing Digital Twin Engineering animation');
  
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

  // Create small sensor indicators around physical object
  const sensors = [];
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * Math.PI * 2;
    const sensorX = 35 + 12 * Math.cos(angle);
    const sensorY = 50 + 12 * Math.sin(angle);
    
    const sensor = createSvgElement('circle', {
      cx: sensorX,
      cy: sensorY,
      r: 1,
      fill: '#8B5CF6',
      opacity: 0.5
    }, svg);
    
    // Connecting lines to physical object
    const sensorLine = createSvgElement('line', {
      x1: sensorX,
      y1: sensorY,
      x2: 35,
      y2: 50,
      stroke: '#8B5CF6',
      'stroke-width': 0.5,
      'stroke-dasharray': '1,1',
      opacity: 0.3
    }, svg);
    
    sensors.push({ sensor, sensorLine });
  }
  
  // Animate sensors
  sensors.forEach((item, i) => {
    anime({
      targets: item.sensor,
      r: [1, 2, 1],
      opacity: [0.3, 0.8, 0.3],
      easing: 'easeInOutSine',
      duration: 2000,
      loop: true,
      delay: i * 500
    });
    
    anime({
      targets: item.sensorLine,
      opacity: [0.2, 0.5, 0.2],
      easing: 'easeInOutSine',
      duration: 2000,
      loop: true,
      delay: i * 500
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
window.initDigitalTwinEngineering = initDigitalTwinEngineering; 