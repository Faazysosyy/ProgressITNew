// Ember animation for footer
function initEmberAnimation() {
  const canvas = document.createElement("canvas");
  canvas.id = "embersCanvas";
  canvas.style.position = "absolute";
  canvas.style.bottom = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none"; // Allow clicks to pass through
  canvas.style.zIndex = "0";
  canvas.style.opacity = "0.2"; // Set transparency to 20%

  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = 300; // Height of the footer area

  const embers = [];
  const emberCount = 200;

  // Ember particle settings
  const emberSettings = {
    maxSize: 4,
    minSize: 1,
    maxSpeed: 7,
    minSpeed: 0.5,
    color: "rgba(0, 0, 139, 0.7)", // Dark blue color with transparency
  };

  // Adjust canvas size on resize
  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
  });

  // Ember particle class
  class Ember {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + Math.random() * 100;
      this.size =
        emberSettings.minSize +
        Math.random() * (emberSettings.maxSize - emberSettings.minSize);
      this.speed =
        emberSettings.minSpeed +
        Math.random() * (emberSettings.maxSpeed - emberSettings.minSpeed);
      this.opacity = 1;
      this.fadeRate = Math.random() * 0.02 + 0.005;
      this.color = emberSettings.color;
    }

    update() {
      this.y -= this.speed;
      this.opacity -= this.fadeRate;
      if (this.opacity <= 0) {
        this.reset();
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color.replace("0.7", this.opacity.toFixed(2)); // Adjust opacity
      ctx.fill();
    }
  }

  // Create initial embers
  for (let i = 0; i < emberCount; i++) {
    embers.push(new Ember());
  }

  // Animation loop
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    embers.forEach((ember) => {
      ember.update();
      ember.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();

  return canvas;
}
