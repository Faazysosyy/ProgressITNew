// Adaptive Interfaces animation implementation
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
  
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.style.position = 'absolute';
  svg.style.width = '100%';
  svg.style.height = '100%';
  container.appendChild(svg);
  
  // Create interface elements that adapt
  const devices = [
    { type: 'desktop', x: 30, y: 40, width: 30, height: 20 },
    { type: 'tablet', x: 50, y: 65, width: 15, height: 20 },
    { type: 'mobile', x: 75, y: 50, width: 10, height: 18 }
  ];
  
  // Create device outlines
  const deviceElements = devices.map(device => {
    const deviceGroup = createSvgElement('g', {}, svg);
    
    // Device outline
    const outline = createSvgElement('rect', {
      x: device.x,
      y: device.y,
      width: device.width,
      height: device.height,
      rx: device.type === 'mobile' ? 2 : 1,
      fill: 'rgba(6, 182, 212, 0.2)',
      stroke: '#06B6D4',
      'stroke-width': 1
    }, deviceGroup);
    
    // Screen area
    const screen = createSvgElement('rect', {
      x: device.x + 1,
      y: device.type === 'desktop' ? device.y + 1 : device.y + 3,
      width: device.width - 2,
      height: device.type === 'desktop' ? device.height - 6 : device.height - 6,
      rx: 0.5,
      fill: 'rgba(6, 182, 212, 0.1)',
      stroke: '#06B6D4',
      'stroke-width': 0.5
    }, deviceGroup);
    
    // Content blocks (representing responsive layouts)
    const contentBlocks = [];
    const blockCount = device.type === 'desktop' ? 3 : (device.type === 'tablet' ? 2 : 1);
    const blockWidth = (device.width - 4) / blockCount;
    
    for (let i = 0; i < blockCount; i++) {
      const block = createSvgElement('rect', {
        x: device.x + 2 + i * blockWidth,
        y: device.type === 'desktop' ? device.y + 3 : device.y + 5,
        width: blockWidth - 1,
        height: device.type === 'desktop' ? 4 : 3,
        rx: 0.5,
        fill: 'rgba(6, 182, 212, 0.3)',
        stroke: 'none'
      }, deviceGroup);
      
      contentBlocks.push(block);
    }
    
    // Add screen elements (lines representing text/content)
    const contentLines = [];
    const lineCount = device.type === 'desktop' ? 5 : (device.type === 'tablet' ? 4 : 3);
    const lineY = device.type === 'desktop' ? device.y + 10 : (device.type === 'tablet' ? device.y + 10 : device.y + 10);
    const lineSpacing = device.type === 'desktop' ? 2 : (device.type === 'tablet' ? 2 : 2);
    
    for (let i = 0; i < lineCount; i++) {
      const lineWidth = (device.width - 4) * (0.7 + Math.random() * 0.3);
      const line = createSvgElement('line', {
        x1: device.x + 2,
        y1: lineY + i * lineSpacing,
        x2: device.x + 2 + lineWidth,
        y2: lineY + i * lineSpacing,
        stroke: '#06B6D4',
        'stroke-width': 0.5,
        'stroke-opacity': 0.7
      }, deviceGroup);
      
      contentLines.push(line);
    }
    
    return {
      group: deviceGroup,
      outline,
      screen,
      contentBlocks,
      contentLines,
      device
    };
  });
  
  // Create connection lines between devices
  const connections = [];
  for (let i = 0; i < devices.length; i++) {
    for (let j = i + 1; j < devices.length; j++) {
      const device1 = devices[i];
      const device2 = devices[j];
      
      const x1 = device1.x + device1.width / 2;
      const y1 = device1.y + device1.height / 2;
      const x2 = device2.x + device2.width / 2;
      const y2 = device2.y + device2.height / 2;
      
      const connection = createSvgElement('line', {
        x1,
        y1,
        x2,
        y2,
        stroke: 'rgba(6, 182, 212, 0.3)',
        'stroke-width': 0.8,
        'stroke-dasharray': '2,2'
      }, svg);
      
      // Create data packet that will travel between devices
      const packet = createSvgElement('circle', {
        r: 1.2,
        fill: '#06B6D4',
        opacity: 0
      }, svg);
      
      connections.push({ line: connection, packet, x1, y1, x2, y2 });
    }
  }
  
  // Create central user icon
  const userCircle = createSvgElement('circle', {
    cx: 50,
    cy: 40,
    r: 5,
    fill: 'rgba(6, 182, 212, 0.2)',
    stroke: '#06B6D4',
    'stroke-width': 1
  }, svg);
  
  const userHead = createSvgElement('circle', {
    cx: 50,
    cy: 37,
    r: 2,
    fill: 'rgba(6, 182, 212, 0.4)',
    stroke: '#06B6D4',
    'stroke-width': 0.5
  }, svg);
  
  const userBody = createSvgElement('path', {
    d: 'M50,39 L50,44 M47,41 L53,41 M48,44 L47,47 M52,44 L53,47',
    fill: 'none',
    stroke: '#06B6D4',
    'stroke-width': 0.8
  }, svg);
  
  // Connect user to all devices
  const userConnections = [];
  devices.forEach(device => {
    const x1 = 50;
    const y1 = 40;
    const x2 = device.x + device.width / 2;
    const y2 = device.y + device.height / 2;
    
    const connection = createSvgElement('line', {
      x1,
      y1,
      x2,
      y2,
      stroke: 'rgba(6, 182, 212, 0.5)',
      'stroke-width': 0.8,
      'stroke-dasharray': '3,2'
    }, svg);
    
    // User feedback packet
    const packet = createSvgElement('circle', {
      r: 1.5,
      fill: '#06B6D4',
      opacity: 0
    }, svg);
    
    userConnections.push({ line: connection, packet, x1, y1, x2, y2 });
  });
  
  // Animate devices (adaptation effect)
  deviceElements.forEach((deviceEl, i) => {
    // Subtle pulse animation
    anime({
      targets: deviceEl.outline,
      opacity: [0.7, 1, 0.7],
      'stroke-opacity': [0.7, 1, 0.7],
      easing: 'easeInOutSine',
      duration: 3000,
      loop: true,
      delay: i * 500
    });
    
    // Content blocks adaptation
    deviceEl.contentBlocks.forEach((block, j) => {
      anime({
        targets: block,
        width: () => {
          const device = deviceEl.device;
          const blockCount = device.type === 'desktop' ? 3 : (device.type === 'tablet' ? 2 : 1);
          const blockWidth = (device.width - 4) / blockCount;
          return [blockWidth - 1, blockWidth - 1 + Math.random() * 2, blockWidth - 1];
        },
        height: () => {
          const height = deviceEl.device.type === 'desktop' ? 4 : 3;
          return [height, height + 1, height];
        },
        opacity: [0.3, 0.8, 0.3],
        easing: 'easeInOutSine',
        duration: 2000,
        delay: i * 300 + j * 200,
        loop: true
      });
    });
    
    // Content lines adapt
    deviceEl.contentLines.forEach((line, j) => {
      const initialWidth = parseFloat(line.getAttribute('x2')) - parseFloat(line.getAttribute('x1'));
      
      anime({
        targets: line,
        x2: [
          parseFloat(line.getAttribute('x1')) + initialWidth,
          parseFloat(line.getAttribute('x1')) + initialWidth * (0.7 + Math.random() * 0.3),
          parseFloat(line.getAttribute('x1')) + initialWidth
        ],
        opacity: [0.7, 1, 0.7],
        easing: 'easeInOutSine',
        duration: 4000,
        delay: i * 300 + j * 150,
        loop: true
      });
    });
  });
  
  // Animate connection data flow
  connections.forEach((connection, i) => {
    function animateDataFlow() {
      anime({
        targets: connection.packet,
        cx: [connection.x1, connection.x2],
        cy: [connection.y1, connection.y2],
        opacity: [0, 0.8, 0],
        easing: 'easeInOutSine',
        duration: 1500,
        complete: function() {
          setTimeout(animateDataFlow, 3000 + Math.random() * 3000);
        }
      });
    }
    
    setTimeout(animateDataFlow, 1000 + i * 1000);
  });
  
  // Animate user connections (feedback)
  userConnections.forEach((connection, i) => {
    function animateUserInteraction() {
      // Randomize direction (user to device or device to user)
      const toUser = Math.random() < 0.5;
      
      anime({
        targets: connection.packet,
        cx: toUser ? [connection.x2, connection.x1] : [connection.x1, connection.x2],
        cy: toUser ? [connection.y2, connection.y1] : [connection.y1, connection.y2],
        opacity: [0, 0.8, 0],
        easing: 'easeInOutSine',
        duration: 1200,
        complete: function() {
          setTimeout(animateUserInteraction, 2000 + Math.random() * 4000);
        }
      });
    }
    
    setTimeout(animateUserInteraction, 2000 + i * 1000);
  });
  
  // Animate user
  anime({
    targets: userCircle,
    r: [5, 5.5, 5],
    opacity: [0.7, 0.9, 0.7],
    easing: 'easeInOutSine',
    duration: 2000,
    loop: true
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
window.initAdaptiveInterfaces = initAdaptiveInterfaces; 