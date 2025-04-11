// Data Mesh Systems animation implementation
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
window.initDataMeshSystems = initDataMeshSystems; 