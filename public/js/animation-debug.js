// Animation Debug Helper
(function() {
  console.log('==== Animation Debug Script Started ====');
  
  // Log all cards and their data-card attributes
  console.log('Scanning DOM for cards...');
  const cards = document.querySelectorAll('[class*="card"]');
  console.log(`Found ${cards.length} potential card elements`);
  
  cards.forEach(card => {
    const cardId = card.getAttribute('data-card');
    const cardText = card.textContent.trim().substring(0, 50);
    console.log(`Card: id=${cardId || 'none'}, text="${cardText}..."`);
  });
  
  // Log animation script status
  const scripts = [
    '/js/animation-loader.js',
    '/js/tech-animate-adaptive.js',
    '/js/tech-animate-quantum.js',
    '/js/tech-animate-neural.js',
    '/js/tech-animate-datamesh.js',
    '/js/tech-animate-cybernetic.js',
    '/js/tech-animate-twin.js',
    '/js/tech-animate-holographic.js',
    '/js/tech-animate-edge.js'
  ];
  
  console.log('Checking animation scripts...');
  scripts.forEach(src => {
    const scriptElement = document.querySelector(`script[src="${src}"]`);
    console.log(`Script "${src}": ${scriptElement ? 'Loaded' : 'Not loaded'}`);
  });
  
  // Check anime.js
  console.log('anime.js status:', typeof anime !== 'undefined' ? 'Loaded' : 'Not loaded');
  
  // Check global animation functions
  const animationFunctions = [
    'initAdaptiveInterfaces',
    'initQuantumArchitecture',
    'initNeuralIntegration',
    'initDataMeshSystems',
    'initCyberneticSecurity',
    'initDigitalTwinEngineering',
    'initHolographicInterfaces',
    'initEdgeComputingSolutions'
  ];
  
  console.log('Checking animation functions...');
  animationFunctions.forEach(fn => {
    console.log(`Function "${fn}": ${typeof window[fn] === 'function' ? 'Available' : 'Not available'}`);
  });
  
  console.log('==== Animation Debug Complete ====');
})(); 