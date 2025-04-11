// Cybernetic Security animation implementation
function initCyberneticSecurity() {
  const card = document.querySelector('[data-card="886"]');
  if (!card) {
    console.warn('Card [data-card="886"] not found');
    return;
  }
  
  console.log('Initializing Cybernetic Security animation');
  
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
  
  // Create shield element
  const shieldPath = createSvgElement('path', {
    d: 'M50,10 L80,25 L80,55 C80,70 65,85 50,90 C35,85 20,70 20,55 L20,25 L50,10 Z',
    fill: 'rgba(248, 113, 113, 0.1)',
    stroke: '#EF4444',
    'stroke-width': 1,
    'stroke-dasharray': '3,2'
  }, svg);
  
  // Create scan lines
  const scanLine = createSvgElement('line', {
    x1: 20,
    y1: 40,
    x2: 80,
    y2: 40,
    stroke: 'rgba(239, 68, 68, 0.6)',
    'stroke-width': 0.5
  }, svg);
  
  // Create threat dots - these will appear randomly
  const threats = [];
  for (let i = 0; i < 5; i++) {
    const threat = createSvgElement('circle', {
      r: 2,
      fill: 'rgba(239, 68, 68, 0.8)',
      opacity: 0
    }, svg);
    
    threats.push(threat);
  }
  
  // Create defense circles - these will intercept threats
  const defenses = [];
  for (let i = 0; i < 3; i++) {
    const defense = createSvgElement('circle', {
      cx: 50,
      cy: 50,
      r: 15 + i * 10,
      fill: 'none',
      stroke: 'rgba(52, 211, 153, 0.3)',
      'stroke-width': 0.5,
      'stroke-dasharray': '3,3'
    }, svg);
    
    defenses.push(defense);
  }
  
  // Animate the shield
  anime({
    targets: shieldPath,
    d: [
      { value: 'M50,12 L78,25 L78,55 C78,68 65,83 50,88 C35,83 22,68 22,55 L22,25 L50,12 Z', duration: 2000 },
      { value: 'M50,10 L80,25 L80,55 C80,70 65,85 50,90 C35,85 20,70 20,55 L20,25 L50,10 Z', duration: 2000 }
    ],
    fill: [
      { value: 'rgba(248, 113, 113, 0.1)', duration: 0 },
      { value: 'rgba(248, 113, 113, 0.2)', duration: 1000 },
      { value: 'rgba(248, 113, 113, 0.1)', duration: 1000 }
    ],
    easing: 'easeInOutSine',
    duration: 4000,
    loop: true
  });
  
  // Animate the scan line
  anime({
    targets: scanLine,
    y1: [30, 70, 30],
    y2: [30, 70, 30],
    opacity: [0.2, 0.8, 0.2],
    easing: 'easeInOutSine',
    duration: 3000,
    loop: true
  });
  
  // Animate defense rings
  defenses.forEach((defense, i) => {
    anime({
      targets: defense,
      r: [15 + i * 10, 18 + i * 10, 15 + i * 10],
      opacity: [0.3, 0.6, 0.3],
      easing: 'easeInOutSine',
      duration: 2000,
      loop: true,
      delay: i * 400
    });
  });
  
  // Create threat detection animation
  function animateThreats() {
    if (Math.random() < 0.3) {
      // Choose a random threat
      const threatIndex = Math.floor(Math.random() * threats.length);
      const threat = threats[threatIndex];
      
      // Choose a random point on the outer perimeter
      const angle = Math.random() * Math.PI * 2;
      const startX = 50 + 45 * Math.cos(angle);
      const startY = 50 + 45 * Math.sin(angle);
      
      // Set threat at starting position
      threat.setAttribute('cx', startX);
      threat.setAttribute('cy', startY);
      
      // Animate threat moving toward the center
      anime({
        targets: threat,
        cx: [startX, 50],
        cy: [startY, 50],
        opacity: [0, 1, 0],
        easing: 'easeInOutQuad',
        duration: 2000
      });
      
      // Intercept with a defense pulse
      setTimeout(() => {
        const defenseIndex = Math.floor(Math.random() * defenses.length);
        const defense = defenses[defenseIndex];
        
        anime({
          targets: defense,
          stroke: [
            { value: 'rgba(52, 211, 153, 0.3)', duration: 0 },
            { value: 'rgba(52, 211, 153, 0.8)', duration: 400 },
            { value: 'rgba(52, 211, 153, 0.3)', duration: 600 }
          ],
          'stroke-width': [0.5, 1.5, 0.5],
          easing: 'easeOutElastic',
          duration: 1000
        });
      }, 1000);
    }
    
    setTimeout(animateThreats, 1000 + Math.random() * 2000);
  }
  
  animateThreats();

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
window.initCyberneticSecurity = initCyberneticSecurity; 