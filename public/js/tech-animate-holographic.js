// Holographic Interfaces animation implementation
function initHolographicInterfaces() {
  const card = document.querySelector('[data-card="889"]');
  if (!card) {
    console.warn('Card [data-card="889"] not found');
    return;
  }
  
  console.log('Initializing Holographic Interfaces animation');
  
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
  
  // Create holographic projection platform
  const platform = createSvgElement('ellipse', {
    cx: 50,
    cy: 75,
    rx: 20,
    ry: 5,
    fill: 'rgba(216, 180, 254, 0.3)',
    stroke: 'rgba(216, 180, 254, 0.5)',
    'stroke-width': 0.5
  }, svg);
  
  // Create projection lines
  const projectionLines = [];
  const lineCount = 12;
  
  for (let i = 0; i < lineCount; i++) {
    const angle = (i / lineCount) * Math.PI * 2;
    const startX = 50 + 15 * Math.cos(angle);
    const startY = 75 + 3 * Math.sin(angle);
    const endX = 50 + 12 * Math.cos(angle);
    const endY = 40 + 3 * Math.sin(angle);
    
    const line = createSvgElement('line', {
      x1: startX,
      y1: startY,
      x2: endX,
      y2: endY,
      stroke: 'rgba(216, 180, 254, 0.4)',
      'stroke-width': 0.5,
      'stroke-dasharray': '1,2'
    }, svg);
    
    projectionLines.push(line);
  }
  
  // Create holographic object - a 3D cube wireframe
  const holoGroup = createSvgElement('g', {}, svg);
  
  // Cube vertices
  const size = 12;
  const centerX = 50;
  const centerY = 40;
  const vertices = [
    { x: centerX - size/2, y: centerY - size/2, z: -size/2 }, // 0: front top left
    { x: centerX + size/2, y: centerY - size/2, z: -size/2 }, // 1: front top right
    { x: centerX + size/2, y: centerY + size/2, z: -size/2 }, // 2: front bottom right
    { x: centerX - size/2, y: centerY + size/2, z: -size/2 }, // 3: front bottom left
    { x: centerX - size/2, y: centerY - size/2, z: size/2 },  // 4: back top left
    { x: centerX + size/2, y: centerY - size/2, z: size/2 },  // 5: back top right
    { x: centerX + size/2, y: centerY + size/2, z: size/2 },  // 6: back bottom right
    { x: centerX - size/2, y: centerY + size/2, z: size/2 }   // 7: back bottom left
  ];
  
  // Edges - pairs of vertex indices
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 0], // front face
    [4, 5], [5, 6], [6, 7], [7, 4], // back face
    [0, 4], [1, 5], [2, 6], [3, 7]  // connecting edges
  ];
  
  // Create each edge line
  const edgeLines = edges.map(edge => {
    return createSvgElement('line', {
      x1: vertices[edge[0]].x,
      y1: vertices[edge[0]].y,
      x2: vertices[edge[1]].x,
      y2: vertices[edge[1]].y,
      stroke: 'rgba(216, 180, 254, 0.8)',
      'stroke-width': 0.8
    }, holoGroup);
  });
  
  // Create scanlines
  const scanLine = createSvgElement('line', {
    x1: centerX - size,
    y1: centerY,
    x2: centerX + size,
    y2: centerY,
    stroke: 'rgba(216, 180, 254, 0.7)',
    'stroke-width': 0.2
  }, svg);
  
  // Create glitch dots
  const glitchDots = [];
  for (let i = 0; i < 5; i++) {
    const dot = createSvgElement('circle', {
      cx: centerX + (Math.random() - 0.5) * size * 2,
      cy: centerY + (Math.random() - 0.5) * size * 2,
      r: 0.5 + Math.random(),
      fill: 'rgba(216, 180, 254, 0.8)',
      opacity: 0
    }, svg);
    
    glitchDots.push(dot);
  }
  
  // Animate hologram rotation
  let rotationX = 0;
  let rotationY = 0;
  let rotationZ = 0;
  
  function updateHologram() {
    // Update rotations
    rotationX += 0.01;
    rotationY += 0.02;
    rotationZ += 0.005;
    
    // Calculate 3D rotation
    const rotatedVertices = vertices.map(v => {
      // Apply 3D rotations (simplified perspective)
      let x = v.x - centerX;
      let y = v.y - centerY;
      let z = v.z;
      
      // Rotate around X axis
      let tempY = y;
      let tempZ = z;
      y = tempY * Math.cos(rotationX) - tempZ * Math.sin(rotationX);
      z = tempY * Math.sin(rotationX) + tempZ * Math.cos(rotationX);
      
      // Rotate around Y axis
      tempX = x;
      tempZ = z;
      x = tempX * Math.cos(rotationY) + tempZ * Math.sin(rotationY);
      z = -tempX * Math.sin(rotationY) + tempZ * Math.cos(rotationY);
      
      // Rotate around Z axis
      tempX = x;
      tempY = y;
      x = tempX * Math.cos(rotationZ) - tempY * Math.sin(rotationZ);
      y = tempX * Math.sin(rotationZ) + tempY * Math.cos(rotationZ);
      
      // Add perspective effect
      const scale = 200 / (200 + z);
      x = x * scale + centerX;
      y = y * scale + centerY;
      
      return { x, y, z };
    });
    
    // Update edge lines
    edges.forEach((edge, i) => {
      edgeLines[i].setAttribute('x1', rotatedVertices[edge[0]].x);
      edgeLines[i].setAttribute('y1', rotatedVertices[edge[0]].y);
      edgeLines[i].setAttribute('x2', rotatedVertices[edge[1]].x);
      edgeLines[i].setAttribute('y2', rotatedVertices[edge[1]].y);
      
      // Make lines in front more visible than those in back
      const avgZ = (rotatedVertices[edge[0]].z + rotatedVertices[edge[1]].z) / 2;
      const opacity = 0.3 + 0.5 * (1 - (avgZ + size/2) / size);
      edgeLines[i].setAttribute('stroke-opacity', opacity);
    });
    
    requestAnimationFrame(updateHologram);
  }
  
  // Start the animation
  updateHologram();
  
  // Animate scan line
  anime({
    targets: scanLine,
    y1: [centerY - size, centerY + size, centerY - size],
    y2: [centerY - size, centerY + size, centerY - size],
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
      duration: 3000,
      loop: true,
      delay: i * 100
    });
  });
  
  // Animate platform
  anime({
    targets: platform,
    ry: [5, 6, 5],
    opacity: [0.3, 0.5, 0.3],
    easing: 'easeInOutSine',
    duration: 2000,
    loop: true
  });
  
  // Occasionally show glitch effects
  function glitchEffect() {
    if (Math.random() < 0.3) {
      // Show random glitch dots
      glitchDots.forEach(dot => {
        if (Math.random() < 0.5) {
          // Reposition the dot
          dot.setAttribute('cx', centerX + (Math.random() - 0.5) * size * 2);
          dot.setAttribute('cy', centerY + (Math.random() - 0.5) * size * 2);
          
          // Animate it
          anime({
            targets: dot,
            opacity: [0, 0.8, 0],
            r: [0.5, 1.5, 0.5],
            easing: 'easeOutQuad',
            duration: 500
          });
        }
      });
      
      // Occasionally offset the cube slightly
      if (Math.random() < 0.2) {
        anime({
          targets: holoGroup,
          translateX: [0, (Math.random() - 0.5) * 4, 0],
          translateY: [0, (Math.random() - 0.5) * 4, 0],
          easing: 'easeInOutSine',
          duration: 200
        });
      }
    }
    
    // Schedule next glitch
    setTimeout(glitchEffect, 2000 + Math.random() * 3000);
  }
  
  glitchEffect();

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
window.initHolographicInterfaces = initHolographicInterfaces; 