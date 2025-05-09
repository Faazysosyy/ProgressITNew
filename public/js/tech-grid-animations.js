(function() {
  console.log('Tech Grid Animations script loaded.');

  // Helper to create SVG elements (if an animation needs SVG)
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

  // --- Animation 1: Pulsating Circles ---
  function setupPulsatingCircles(container, theme) {
    if (!container) return;
    // container.innerHTML = ""; // DO NOT CLEAR - this is the animation layer
    container.style.position = 'relative'; // Ensure child absolute positioning works

    const centerDot = document.createElement("div");
    centerDot.className = "dot pulse-dot"; // Use classes from user CSS
    centerDot.style.width = centerDot.style.height = "8px";
    centerDot.style.left = "calc(50% - 4px)";
    centerDot.style.top = "calc(50% - 4px)";
    centerDot.style.background = theme.accent || theme.primary;
    container.appendChild(centerDot);

    for (let r = 0; r < 4; r++) {
      const radius = 15 + r * (container.offsetWidth / 10); // Make radius somewhat responsive
      const count = 6 + r * 3;
      for (let i = 0; i < count; i++) {
        const d = document.createElement("div");
        d.className = "dot pulse-dot";
        const angle = (i / count) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const sz = Math.max(2, 3 + r * 0.3 * (container.offsetWidth / 180)); // Scale size
        d.style.width = d.style.height = `${sz}px`;
        d.style.left = `calc(50% + ${x}px - ${sz / 2}px)`;
        d.style.top = `calc(50% + ${y}px - ${sz / 2}px)`;
        d.style.animationDelay = `${r * 0.2 + i * 0.1}s`;
        d.style.background = theme.primary || '#fff';
        d.style.opacity = (90 - r * 10) / 100; // Keep opacity as is or tie to theme
        container.appendChild(d);
      }
    }
  }

  // --- Animation 2: Rotating Orbits ---
  function setupRotatingOrbits(container, theme) {
    if (!container) return;
    // container.innerHTML = ""; 
    container.style.position = 'relative';

    const centerDot = document.createElement("div");
    centerDot.className = "dot";
    centerDot.style.width = centerDot.style.height = "8px";
    centerDot.style.left = "calc(50% - 4px)";
    centerDot.style.top = "calc(50% - 4px)";
    centerDot.style.background = theme.accent || theme.primary;
    container.appendChild(centerDot);

    for (let r = 0; r < 3; r++) {
      const orbitContainer = document.createElement("div");
      orbitContainer.className = "orbit-container"; // User CSS class
      orbitContainer.style.animationDuration = `${8 + r * 4}s`;
      orbitContainer.style.animationDirection = r % 2 ? "reverse" : "normal";
      
      const radius = 20 + r * (container.offsetWidth / 9); // Responsive radius
      const count = 6 + r * 3;
      for (let i = 0; i < count; i++) {
        const d = document.createElement("div");
        d.className = "dot";
        const angle = (i / count) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const sz = Math.max(2, 4 - r * 0.5 * (container.offsetWidth / 180) );
        d.style.width = d.style.height = `${sz}px`;
        d.style.left = `calc(50% + ${x}px - ${sz / 2}px)`;
        d.style.top = `calc(50% + ${y}px - ${sz / 2}px)`;
        d.style.background = theme.primary || '#fff';
        d.style.opacity = (90 - r * 15) / 100;
        orbitContainer.appendChild(d);
      }
      container.appendChild(orbitContainer);
    }
  }

  // --- Animation 3: Sequential Rings ---
  function setupSequentialRings(container, theme) {
    if (!container) return;
    // container.innerHTML = ""; 
    container.style.position = 'relative';
    
    const centerDot = document.createElement("div");
    centerDot.className = "dot"; // Generic dot, animation is on .sequential-dot
    centerDot.style.width = centerDot.style.height = "6px";
    centerDot.style.left = "calc(50% - 3px)";
    centerDot.style.top = "calc(50% - 3px)";
    centerDot.style.background = theme.accent || theme.primary;
    container.appendChild(centerDot);

    for (let i = 0; i < 5; i++) {
      const rad = 15 + i * (container.offsetWidth / 12);
      const count = 8 + i * 4;
      for (let j = 0; j < count; j++) {
        const d = document.createElement("div");
        d.className = "dot sequential-dot"; // Uses .sequential-dot for specific animation from CSS
        const angle = (j / count) * 2 * Math.PI;
        const x = Math.cos(angle) * rad;
        const y = Math.sin(angle) * rad;
        const sz = Math.max(1.5, 3 + i * 0.2 * (container.offsetWidth / 180));
        d.style.width = d.style.height = `${sz}px`;
        d.style.left = `calc(50% + ${x}px - ${sz / 2}px)`;
        d.style.top = `calc(50% + ${y}px - ${sz / 2}px)`;
        d.style.animationDelay = `${i * 0.3 + (j / count) * 0.1}s`;
        d.style.background = theme.primary || '#fff';
        d.style.opacity = (90 - i * 15) / 100;
        container.appendChild(d);
      }
    }
  }

  // --- Animation 4: Concentric Rotations ---
  function setupConcentricRotations(container, theme) {
    if (!container) return;
    // container.innerHTML = ""; 
    container.style.position = 'relative';

    const wrap = document.createElement("div");
    wrap.className = "concentric-container"; // User CSS class
    container.appendChild(wrap);

    const centerDot = document.createElement("div");
    centerDot.className = "dot";
    centerDot.style.width = centerDot.style.height = "5px";
    centerDot.style.left = "calc(50% - 2.5px)";
    centerDot.style.top = "calc(50% - 2.5px)";
    centerDot.style.background = theme.accent || 'rgba(255,255,255,0.9)';
    wrap.appendChild(centerDot);

    const numRings = Math.min(8, Math.floor(container.offsetWidth / 25)); // Responsive number of rings

    for (let r = 0; r < numRings; r++) {
      const ring = document.createElement("div");
      ring.className = "concentric-ring"; // User CSS class
      ring.style.animationDuration = `${3 * Math.pow(1.5, r)}s`;
      ring.style.animationDirection = r % 2 === 0 ? 'normal' : 'reverse';
      
      const radius = 10 + r * (container.offsetWidth / (numRings * 2.2) );
      const circ = 2 * Math.PI * radius;
      const count = Math.max(6, Math.floor(circ / 10));
      for (let i = 0; i < count; i++) {
        const d = document.createElement("div");
        d.className = "dot";
        const angle = (i / count) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const sz = Math.max(2, 4 - r * 0.2);
        d.style.width = d.style.height = `${sz}px`;
        d.style.left = `calc(50% + ${x}px - ${sz/2}px)`;
        d.style.top = `calc(50% + ${y}px - ${sz/2}px)`;
        d.style.background = theme.primary || '#fff';
        d.style.opacity = (90 - r * 5) / 100;
        ring.appendChild(d);
      }
      wrap.appendChild(ring);
    }
  }

  // --- Animation 5: Circular Waves ---
  function setupCircularWaves(container, theme) {
    if (!container) return;
    // container.innerHTML = ""; 
    container.style.position = 'relative';

    const centerDot = document.createElement("div");
    centerDot.className = "dot";
    centerDot.style.width = centerDot.style.height = "8px";
    centerDot.style.left = "calc(50% - 4px)";
    centerDot.style.top = "calc(50% - 4px)";
    centerDot.style.background = theme.accent || theme.primary;
    container.appendChild(centerDot);
    
    const numLayers = Math.min(5, Math.floor(container.offsetWidth / 30));

    for (let r = 0; r < numLayers; r++) {
      const rad = 15 + r * (container.offsetWidth / (numLayers * 2.5) );
      const count = 8 + r * 4;
      for (let i = 0; i < count; i++) {
        const d = document.createElement("div");
        d.className = "dot circular-wave-dot"; // User CSS class
        const angle = (i / count) * 2 * Math.PI;
        const x = Math.cos(angle) * rad;
        const y = Math.sin(angle) * rad;
        const sz = Math.max(1.5, 3 + r * 0.2 * (container.offsetWidth / 180));
        d.style.width = d.style.height = `${sz}px`;
        d.style.left = `calc(50% + ${x}px - ${sz / 2}px)`;
        d.style.top = `calc(50% + ${y}px - ${sz / 2}px)`;
        d.style.animationDelay = `${r * 0.2 + (i / count) * 0.5}s`;
        d.style.background = theme.primary || '#fff';
        d.style.opacity = (90 - r * 10) / 100;
        container.appendChild(d);
      }
    }
  }

  // --- Animation 6: Expanding Lines ---
  function setupExpandingLines(container, theme) {
    if (!container) return;
    // container.innerHTML = ""; 
    container.style.position = 'relative';

    const centerDot = document.createElement("div");
    centerDot.className = "dot";
    centerDot.style.width = centerDot.style.height = "6px";
    centerDot.style.left = "calc(50% - 3px)";
    centerDot.style.top = "calc(50% - 3px)";
    centerDot.style.background = theme.accent || 'rgba(255,255,255,0.8)';
    container.appendChild(centerDot);

    for (let g = 0; g < 3; g++) {
      const lineContainer = document.createElement("div");
      lineContainer.className = "line-container"; // User CSS class
      lineContainer.style.animationDuration = `${8 + g * 4}s`;
      lineContainer.style.animationDirection = g % 2 ? "reverse" : "normal";
      
      const numLines = 12;
      for (let i = 0; i < numLines; i++) {
        const line = document.createElement("div");
        line.className = "expanding-line"; // User CSS class
        line.style.animationDelay = `${(i / numLines) * 2}s`;
        line.style.transform = `rotate(${(360 / numLines) * i}deg)`;
        line.style.background = theme.primary || 'rgba(255,255,255,0.3)';
        
        // Optional: add a dot at the end of the line
        const dot = document.createElement("div");
        dot.className = "dot";
        const dotSize = Math.max(1.5, 3 * (container.offsetWidth / 180));
        dot.style.width = dot.style.height = `${dotSize}px`;
        dot.style.left = "calc(70px - 1.5px)"; // Adjust if line length changes
        dot.style.top = "calc(50% - 1.5px)";
        dot.style.background = theme.primary || 'rgba(255,255,255,0.8)';
        line.appendChild(dot);
        lineContainer.appendChild(line);
      }
      container.appendChild(lineContainer);
    }
  }

  // --- Animation 7: Breathing Grid ---
  function setupBreathingGrid(container, theme) {
    if (!container) return;
    // container.innerHTML = ""; 
    container.style.position = 'relative';
    
    const grid = Math.min(9, Math.floor(container.offsetWidth / 20)); // Responsive grid size
    const spacing = container.offsetWidth / (grid + 1); // Responsive spacing
    const dotSize = Math.max(2, 4 * (container.offsetWidth / 180));
    const offset = -(spacing * (grid - 1)) / 2;

    for (let y = 0; y < grid; y++) {
      for (let x = 0; x < grid; x++) {
        const d = document.createElement("div");
        d.className = "dot breathing-dot"; // User CSS class
        const px = offset + x * spacing;
        const py = offset + y * spacing;
        d.style.width = d.style.height = `${dotSize}px`;
        d.style.left = `calc(50% + ${px}px - ${dotSize / 2}px)`;
        d.style.top = `calc(50% + ${py}px - ${dotSize / 2}px)`;
        
        const center = (grid - 1) / 2;
        const dist = Math.hypot(x - center, y - center);
        const maxD = Math.hypot(center, center) || 1; // Avoid division by zero
        d.style.animationDelay = `${(dist / maxD) * 1.5}s`;
        d.style.background = theme.primary || `rgba(255,255,255,${(90 - (dist / maxD) * 40) / 100})`;
        container.appendChild(d);
      }
    }
  }

  // --- Animation 8: Ripple Effect ---
  function setupRippleEffect(container, theme) {
    if (!container) return;
    // container.innerHTML = ""; 
    container.style.position = 'relative';

    const centerDot = document.createElement("div");
    centerDot.className = "dot";
    centerDot.style.width = centerDot.style.height = "8px";
    centerDot.style.left = "calc(50% - 4px)";
    centerDot.style.top = "calc(50% - 4px)";
    centerDot.style.background = theme.accent || 'rgba(255,255,255,0.9)';
    centerDot.style.zIndex = "10";
    container.appendChild(centerDot);

    const rippleHost = document.createElement("div");
    rippleHost.className = "ripple-container"; // User CSS class
    container.appendChild(rippleHost);

    const numRipples = 4;
    const rippleDuration = 4; 

    for (let i = 0; i < numRipples; i++) {
      const r = document.createElement("div");
      r.className = "ripple-ring"; // User CSS class
      r.style.animationDelay = `${i * (rippleDuration / numRipples)}s`;
      r.style.borderColor = theme.primary || 'rgba(255,255,255,0.3)';
      // Adjust ripple keyframes if needed, or ensure CSS uses a general color
      rippleHost.appendChild(r);
    }

    const numDotRings = Math.min(6, Math.floor(container.offsetWidth / 30));
    const maxRadius = container.offsetWidth * 0.4;

    for (let ring = 0; ring < numDotRings; ring++) {
      const radius = (container.offsetWidth * 0.1) + (ring * (maxRadius - (container.offsetWidth * 0.1)) / (numDotRings -1 || 1) );
      const numDots = 6 + ring * 3;

      for (let i = 0; i < numDots; i++) {
        const angle = (i / numDots) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const distanceFromCenter = Math.sqrt(x * x + y * y) / maxRadius;
        const d = document.createElement("div");
        d.className = "ripple-wave-dot"; // User CSS class for these dots
        const size = Math.max(2, (5 - ring * 0.5) * (container.offsetWidth / 180) );
        d.style.width = d.style.height = `${size}px`;
        d.style.left = `calc(50% + ${x}px - ${size / 2}px)`;
        d.style.top = `calc(50% + ${y}px - ${size / 2}px)`;
        d.style.animationDelay = `${distanceFromCenter * (rippleDuration / 1.2)}s`;
        d.style.background = theme.primary || `rgba(255,255,255,${(90 - ring * 10) / 100})`;
        container.appendChild(d);
      }
    }
  }

  // --- Animation 9: Fibonacci Spiral ---
  function setupFibonacciSpiral(container, theme) {
    if (!container) return;
    // container.innerHTML = ""; 
    container.style.position = 'relative';
    
    const wrap = document.createElement("div");
    wrap.className = "fibonacci-container"; // User CSS class
    container.appendChild(wrap);

    const centerDot = document.createElement("div");
    centerDot.className = "dot";
    centerDot.style.width = centerDot.style.height = "6px";
    centerDot.style.left = "calc(50% - 3px)";
    centerDot.style.top = "calc(50% - 3px)";
    centerDot.style.background = theme.accent || 'rgba(255,255,255,0.9)';
    wrap.appendChild(centerDot);

    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const N = Math.floor(container.offsetWidth * 0.6); // Responsive N
    const scaleFactor = container.offsetWidth / 180; // Scale based on original 180px container

    for (let i = 0; i < N; i++) {
      const angle = i * goldenAngle;
      const rad = scaleFactor * 0.8 * Math.sqrt(i) * 4; // Scaled radius
      const x = Math.cos(angle) * rad;
      const y = Math.sin(angle) * rad;
      const sz = Math.max(1, (3 - (i / N) * 1.5) * scaleFactor); // Scaled size
      if (sz < 0.5) continue;

      const d = document.createElement("div");
      d.className = "fibonacci-dot"; // User CSS class
      d.style.width = d.style.height = `${sz}px`;
      d.style.left = `calc(50% + ${x}px - ${sz / 2}px)`;
      d.style.top = `calc(50% + ${y}px - ${sz / 2}px)`;
      d.style.animationDelay = `${(i / N) * 3}s`;
      d.style.background = theme.primary || `rgba(255,255,255,${(90 - (i / N) * 60) / 100})`;
      wrap.appendChild(d);
    }
  }

  // --- Animation 10: Halftone Gradient ---
  function setupHalftoneGradient(container, theme) {
    if (!container) return;
    // container.innerHTML = ""; 
    container.style.position = 'relative';

    const wrap = document.createElement("div");
    wrap.className = "halftone-container"; // User CSS class
    container.appendChild(wrap);

    const numRadii = Math.max(3, Math.floor(container.offsetWidth / 40)); // Responsive radii count
    const baseRadius = container.offsetWidth / (numRadii * 2.5);

    for(let r_idx = 0; r_idx < numRadii; r_idx++) {
      const radius = baseRadius + r_idx * baseRadius;
      const count = 12 + r_idx * 8;
      const size = Math.max(2, (6 - r_idx) * (container.offsetWidth / 180) );
      for (let i = 0; i < count; i++) {
        const d = document.createElement("div");
        d.className = "halftone-dot"; // User CSS class
        d.style.width = d.style.height = `${size}px`;
        const angle = (i / count) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        d.style.left = `calc(50% + ${x}px - ${size / 2}px)`;
        d.style.top = `calc(50% + ${y}px - ${size / 2}px)`;
        d.style.animationDelay = `${(r_idx * 0.3 + i / count).toFixed(2)}s`;
        d.style.background = theme.primary || `rgba(255,255,255,${(90 - r_idx * 15) / 100})`;
        wrap.appendChild(d);
      }
    }
  }

  // --- Animation 11: Silver Spiral ---
  function setupSilverSpiral(container, theme) {
    if (!container) return;
    // container.innerHTML = ""; 
    container.style.position = 'relative';

    const wrap = document.createElement("div");
    wrap.className = "silver-container"; // User CSS class
    container.appendChild(wrap);

    const N = Math.floor(container.offsetWidth * 0.7); // Responsive N
    const angleStep = Math.PI * (2 - Math.sqrt(2));
    const scaleFactor = container.offsetWidth / 180;

    for (let i = 0; i < N; i++) {
      const angle = i * angleStep;
      const rad = scaleFactor * 1.2 * Math.sqrt(i) * 6; // Scaled radius
      const size = Math.max(1, (4 - (i / N) * 2) * scaleFactor); // Scaled size
      if (size < 0.5) continue;

      const d = document.createElement("div");
      d.className = "silver-dot"; // User CSS class
      d.style.width = d.style.height = `${size}px`;
      d.style.left = `calc(50% + ${Math.cos(angle) * rad}px - ${size / 2}px)`;
      d.style.top = `calc(50% + ${Math.sin(angle) * rad}px - ${size / 2}px)`;
      d.style.animationDelay = `${(i / N) * 2}s`;
      d.style.background = theme.primary || '#fff'; // Use theme
      wrap.appendChild(d);
    }
  }

  // --- Animation 12: Sunflower Spiral (SVG + SMIL) ---
  function setupSunflowerSpiral(container, theme) {
    if (!container) return;
    // container.innerHTML = ""; 
    container.style.position = 'relative';
    
    const N = Math.floor(container.offsetWidth * 1.1); // Responsive N
    const SIZE = container.offsetWidth; // Use container width
    const DOT_RADIUS = Math.max(1, 2 * (SIZE / 180)); // Responsive dot radius
    const MARGIN = DOT_RADIUS * 2;
    const CENTER = SIZE / 2;
    const MAX_RADIUS = CENTER - MARGIN - DOT_RADIUS;
    const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
    const DURATION = 3;
    const svgNS = "http://www.w3.org/2000/svg";

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", SIZE);
    svg.setAttribute("height", SIZE);
    svg.setAttribute("viewBox", `0 0 ${SIZE} ${SIZE}`);
    container.appendChild(svg);

    for (let i = 0; i < N; i++) {
      const idx = i + 0.5;
      const frac = idx / N;
      const r = Math.sqrt(frac) * MAX_RADIUS;
      const theta = idx * GOLDEN_ANGLE;
      const x = CENTER + r * Math.cos(theta);
      const y = CENTER + r * Math.sin(theta);

      const circle = document.createElementNS(svgNS, "circle");
      circle.setAttribute("cx", x);
      circle.setAttribute("cy", y);
      circle.setAttribute("r", DOT_RADIUS);
      circle.setAttribute("fill", theme.primary || "#fff");
      circle.setAttribute("opacity", "0.6");
      svg.appendChild(circle);

      const animR = document.createElementNS(svgNS, "animate");
      animR.setAttribute("attributeName", "r");
      animR.setAttribute("values", `${DOT_RADIUS * 0.5};${DOT_RADIUS * 1.5};${DOT_RADIUS * 0.5}`);
      animR.setAttribute("dur", `${DURATION}s`);
      animR.setAttribute("begin", `${frac * DURATION}s`);
      animR.setAttribute("repeatCount", "indefinite");
      animR.setAttribute("calcMode", "spline");
      animR.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      circle.appendChild(animR);

      const animO = document.createElementNS(svgNS, "animate");
      animO.setAttribute("attributeName", "opacity");
      animO.setAttribute("values", `${(theme.opacityMin || 0.3)};${(theme.opacityMax || 1)};${(theme.opacityMin || 0.3)}`);
      animO.setAttribute("dur", `${DURATION}s`);
      animO.setAttribute("begin", `${frac * DURATION}s`);
      animO.setAttribute("repeatCount", "indefinite");
      animO.setAttribute("calcMode", "spline");
      animO.setAttribute("keySplines", "0.4 0 0.6 1;0.4 0 0.6 1");
      circle.appendChild(animO);
    }
  }

  // Main initialization function to be called from outside
  window.initAllTechGridAnimations = function() {
    const gridCardsConfig = [
      { code: 242, animFn: setupPulsatingCircles,       theme: { primary: '#3b82f6', accent: '#60a5fa' } }, // Adaptive Interfaces (Blue)
      { code: 627, animFn: setupRotatingOrbits,        theme: { primary: '#8b5cf6', accent: '#a78bfa' } }, // Quantum-Ready (Purple)
      { code: 675, animFn: setupSequentialRings,       theme: { primary: '#10b981', accent: '#34d399' } }, // Neural Integration (Emerald)
      { code: 937, animFn: setupConcentricRotations,   theme: { primary: '#ef4444', accent: '#f87171' } }, // Data Mesh Systems (Red)
      { code: 886, animFn: setupCircularWaves,         theme: { primary: '#f97316', accent: '#fb923c' } }, // Cybernetic Security (Orange)
      { code: 727, animFn: setupExpandingLines,        theme: { primary: '#06b6d4', accent: '#22d3ee' } }, // Digital Twin Eng (Cyan)
      { code: 889, animFn: setupBreathingGrid,         theme: { primary: '#d946ef', accent: '#e879f9' } }, // Holographic Interfaces (Fuchsia)
      { code: 646, animFn: setupRippleEffect,          theme: { primary: '#facc15', accent: '#fde047' } }, // Edge Computing (Yellow)
      { code: 739, animFn: setupFibonacciSpiral,       theme: { primary: '#ec4899', accent: '#f472b6' } }, // Synthetic Media (Pink)
      { code: 738, animFn: setupHalftoneGradient,      theme: { primary: '#6366f1', accent: '#818cf8' } }, // Quantum Encryption (Indigo)
      { code: 574, animFn: setupSilverSpiral,          theme: { primary: '#6b7280', accent: '#9ca3af' } }, // Augmented Dev (Gray - for Silver)
      { code: 136, animFn: setupSunflowerSpiral,       theme: { primary: '#22c55e', accent: '#4ade80', opacityMin: 0.4, opacityMax: 0.9 } }  // Biodigital Interfaces (Green)
    ];

    console.log('Initializing all tech grid animations... (Temporarily disabled for debugging text issue)');
    // return; // Alternative way to disable all new animations

    gridCardsConfig.forEach(config => {
      const cardElement = document.querySelector(`[data-card="${config.code}"]`);
      if (cardElement) {
        let animHost = cardElement.querySelector('.tech-grid-animation-host');
        if (!animHost) {
          animHost = document.createElement('div');
          animHost.className = 'tech-grid-animation-host';
          Object.assign(animHost.style, {
            position: 'absolute', top: '0', left: '0', 
            width: '100%', height: '100%',
            overflow: 'hidden', pointerEvents: 'none', zIndex: '0'
          });
          if(cardElement.style.position !== 'relative' && cardElement.style.position !== 'absolute' && cardElement.style.position !== 'fixed') {
            cardElement.style.position = 'relative'; // Ensure card is a positioning context
          }
          cardElement.insertBefore(animHost, cardElement.firstChild);
        }
        
        if (typeof config.animFn === 'function') {
          try {
            console.log(`Applying animation ${config.animFn.name} to card ${config.code} - (call TEMPORARILY COMMENTED OUT)`);
            // config.animFn(animHost, config.theme); // <<<< TEMPORARILY COMMENTED OUT
          } catch (e) {
            console.error(`Error applying ${config.animFn.name} to card ${config.code}:`, e);
          }
        } else {
          console.warn(`Animation function for card ${config.code} not found.`);
        }
      } else {
        console.warn(`Card element with data-card="${config.code}" not found.`);
      }
    });
  };
})(); 