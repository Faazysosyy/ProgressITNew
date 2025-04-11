"use client";

import React, { useEffect, useRef, useState } from 'react';

const BlackHole: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLowPerformanceDevice, setIsLowPerformanceDevice] = useState(false);

  useEffect(() => {
    // Check for low performance devices
    const checkPerformance = () => {
      // Simple performance detection based on memory
      if ((navigator as any).deviceMemory && (navigator as any).deviceMemory < 4) {
        setIsLowPerformanceDevice(true);
        return true;
      }
      
      // Check if device is mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        setIsLowPerformanceDevice(true);
        return true;
      }
      
      // Check viewport size for small screens
      if (window.innerWidth < 768) {
        setIsLowPerformanceDevice(true);
        return true;
      }
      
      return false;
    };

    const isLowPerf = checkPerformance();
    
    // Create script with optimizations
    const script = document.createElement('script');
    script.type = 'module';
    script.innerHTML = `
      const easingUtils = {
        linear: t => t,
        easeInExpo: t => (t === 0) ? 0 : Math.pow(2, 10 * (t - 1)),
      };

      class AHole {
        constructor(element) {
          this.element = element;
          this.canvas = this.element.querySelector(".js-canvas");
          this.ctx = this.canvas.getContext("2d", { alpha: false });
          
          this.discs = [];
          this.lines = [];
          this.particles = [];
          this.isLowPerformance = ${isLowPerf};
          this.frameCount = 0;
          this.isVisible = true;
          this.visibilityObserver = null;
          
          // Init
          this.setSize();
          this.setDiscs();
          this.setLines();
          this.setParticles();
          
          this.bindEvents();
          
          // Monitor visibility to pause when not visible
          this.setupVisibilityObserver();
          
          // RAF
          this.lastTime = performance.now();
          requestAnimationFrame(this.tick.bind(this));
        }

        /**
         * Observe visibility to pause animation when not visible
         */
        setupVisibilityObserver() {
          if ('IntersectionObserver' in window) {
            this.visibilityObserver = new IntersectionObserver((entries) => {
              this.isVisible = entries[0].isIntersecting;
            }, { threshold: 0.1 });
            
            this.visibilityObserver.observe(this.element);
          }
        }

        /**
         * Bind events
         */
        bindEvents() {
          const debouncedResize = this.debounce(this.onResize.bind(this), 200);
          window.addEventListener("resize", debouncedResize);
        }
        
        /**
         * Debounce function
         */
        debounce(func, wait) {
          let timeout;
          return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
          };
        }

        /**
         * Resize handler
         */
        onResize() {
          this.setSize();
          this.setDiscs();
          this.setLines();
          this.setParticles();
        }

        /**
         * Set size
         */
        setSize() {
          this.rect = this.element.getBoundingClientRect();

          this.render = {
            width: this.rect.width,
            height: this.rect.height,
            dpi: window.devicePixelRatio > 1 ? 1.5 : 1 // Cap DPI at 1.5 for performance
          };

          this.canvas.width = this.render.width * this.render.dpi;
          this.canvas.height = this.render.height * this.render.dpi;
        }

        /**
         * Set discs
         */
        setDiscs() {
          const { width, height } = this.rect;
          const isMobile = window.innerWidth < 768;

          this.discs = [];

          this.startDisc = {
            x: width * 0.5,
            y: height * 0.45,
            w: isMobile ? width * 0.7 : width * 0.75,
            h: height * 0.7
          };

          this.endDisc = {
            x: width * 0.5,
            y: height * 0.95,
            w: 0,
            h: 0
          };

          // Reduce number of discs by ~30% from original values
          const totalDiscs = this.isLowPerformance ? 35 : 70;

          let prevBottom = height;
          this.clip = {};

          for (let i = 0; i < totalDiscs; i++) {
            const p = i / totalDiscs;

            const disc = this.tweenDisc({
              p
            });

            const bottom = disc.y + disc.h;

            if (bottom <= prevBottom) {
              this.clip = {
                disc: { ...disc },
                i
              };
            }

            prevBottom = bottom;

            this.discs.push(disc);
          }

          this.clip.path = new Path2D();
          this.clip.path.ellipse(
            this.clip.disc.x,
            this.clip.disc.y,
            this.clip.disc.w,
            this.clip.disc.h,
            0,
            0,
            Math.PI * 2
          );
          this.clip.path.rect(
            this.clip.disc.x - this.clip.disc.w,
            0,
            this.clip.disc.w * 2,
            this.clip.disc.y
          );
        }

        /**
         * Set lines
         */
        setLines() {
          const { width, height } = this.rect;

          this.lines = [];

          // Reduce number of lines by ~30% from original values
          const totalLines = this.isLowPerformance ? 35 : 70;
          const linesAngle = (Math.PI * 2) / totalLines;

          for (let i = 0; i < totalLines; i++) {
            this.lines.push([]);
          }

          this.discs.forEach((disc) => {
            for (let i = 0; i < totalLines; i++) {
              const angle = i * linesAngle;

              const p = {
                x: disc.x + Math.cos(angle) * disc.w,
                y: disc.y + Math.sin(angle) * disc.h
              };

              this.lines[i].push(p);
            }
          });

          this.linesCanvas = new OffscreenCanvas(width, height);
          const ctx = this.linesCanvas.getContext("2d");

          this.lines.forEach((line, i) => {
            ctx.save();

            let lineIsIn = false;
            line.forEach((p1, j) => {
              if (j === 0) {
                return;
              }

              const p0 = line[j - 1];

              if (
                !lineIsIn &&
                (ctx.isPointInPath(this.clip.path, p1.x, p1.y) ||
                  ctx.isPointInStroke(this.clip.path, p1.x, p1.y))
              ) {
                lineIsIn = true;
              } else if (lineIsIn) {
                ctx.clip(this.clip.path);
              }

              ctx.beginPath();

              ctx.moveTo(p0.x, p0.y);
              ctx.lineTo(p1.x, p1.y);

              ctx.strokeStyle = "#444";
              ctx.lineWidth = 2;
              ctx.stroke();

              ctx.closePath();
            });

            ctx.restore();
          });

          this.linesCtx = ctx;
        }

        /**
         * Set particles
         */
        setParticles() {
          const { width, height } = this.rect;
          const isMobile = window.innerWidth < 768;

          this.particles = [];

          this.particleArea = {
            sw: this.clip.disc.w * 0.5,
            ew: this.clip.disc.w * 2,
            h: height * 0.85
          };
          this.particleArea.sx = (width - this.particleArea.sw) / 2;
          this.particleArea.ex = (width - this.particleArea.ew) / 2;

          // Reduce particles by ~30% but keep them visually impactful
          const totalParticles = this.isLowPerformance ? 35 : 70;

          for (let i = 0; i < totalParticles; i++) {
            const particle = this.initParticle(true);

            this.particles.push(particle);
          }
        }

        /**
         * Init particle
         */
        initParticle(start = false) {
          const sx = this.particleArea.sx + this.particleArea.sw * Math.random();
          const ex = this.particleArea.ex + this.particleArea.ew * Math.random();
          const dx = ex - sx;
          const vx = 0.1 + Math.random() * 0.5;
          const y = start ? this.particleArea.h * Math.random() : this.particleArea.h;
          // Slightly larger particles for better visibility with fewer grid lines
          const r = 0.8 + Math.random() * 4.2;
          const vy = 0.5 + Math.random();

          return {
            x: sx,
            sx,
            dx,
            y,
            vy,
            p: 0,
            r,
            c: \`rgba(255, 255, 255, \${0.3 + Math.random() * 0.7})\`
          };
        }

        /**
         * Tween value
         */
        tweenValue(start, end, p, ease = false) {
          const delta = end - start;
          const easeFunc = ease === 'inExpo' ? easingUtils.easeInExpo : easingUtils.linear;
          return start + delta * easeFunc(p);
        }

        /**
         * Draw discs
         */
        drawDiscs() {
          const { ctx } = this;
          const isMobile = window.innerWidth < 768;

          ctx.strokeStyle = "#444";
          // Slightly increase line width for better visibility with fewer lines
          ctx.lineWidth = isMobile ? 1.5 : 2.2;

          // Outer disc
          const outerDisc = this.startDisc;

          ctx.beginPath();

          ctx.ellipse(
            outerDisc.x,
            outerDisc.y,
            outerDisc.w,
            outerDisc.h,
            0,
            0,
            Math.PI * 2
          );
          ctx.stroke();

          ctx.closePath();

          // Adjust skip factor for better spacing with fewer discs
          const skipFactor = this.isLowPerformance ? (isMobile ? 8 : 6) : 4;
          
          this.discs.forEach((disc, i) => {
            if (i % skipFactor !== 0) {
              return;
            }

            if (disc.w < this.clip.disc.w - 5) {
              ctx.save();

              ctx.clip(this.clip.path);
            }

            ctx.beginPath();

            ctx.ellipse(disc.x, disc.y, disc.w, disc.h, 0, 0, Math.PI * 2);
            ctx.stroke();

            ctx.closePath();

            if (disc.w < this.clip.disc.w - 5) {
              ctx.restore();
            }
          });
        }

        /**
         * Draw lines
         */
        drawLines() {
          const { ctx, linesCanvas } = this;

          ctx.drawImage(linesCanvas, 0, 0);
        }

        /**
         * Draw particles
         */
        drawParticles() {
          const { ctx } = this;

          ctx.save();

          ctx.clip(this.clip.path);

          this.particles.forEach((particle) => {
            ctx.fillStyle = particle.c;
            ctx.beginPath();
            ctx.rect(particle.x, particle.y, particle.r, particle.r);
            ctx.closePath();

            ctx.fill();
          });

          ctx.restore();
        }

        /**
         * Move discs - optimized to limit animation speed
         */
        moveDiscs() {
          // Slightly faster animation with fewer discs for similar visual effect
          const increment = 0.00065;
          
          this.discs.forEach((disc) => {
            disc.p = (disc.p + increment) % 1;
            this.tweenDisc(disc);
          });
        }

        /**
         * Move Particles
         */
        moveParticles() {
          this.particles.forEach((particle) => {
            particle.p = 1 - particle.y / this.particleArea.h;
            particle.x = particle.sx + particle.dx * particle.p;
            particle.y -= particle.vy;

            if (particle.y < 0) {
              particle.y = this.initParticle().y;
            }
          });
        }

        /**
         * Tween disc
         */
        tweenDisc(disc) {
          disc.x = this.tweenValue(this.startDisc.x, this.endDisc.x, disc.p);
          disc.y = this.tweenValue(
            this.startDisc.y,
            this.endDisc.y,
            disc.p,
            "inExpo"
          );

          disc.w = this.tweenValue(this.startDisc.w, this.endDisc.w, disc.p);
          disc.h = this.tweenValue(this.startDisc.h, this.endDisc.h, disc.p);

          return disc;
        }

        /**
         * Tick - optimized with frame skipping and visibility checking
         */
        tick(time) {
          // Skip animation if not visible
          if (!this.isVisible) {
            requestAnimationFrame(this.tick.bind(this));
            return;
          }
          
          const delta = time - this.lastTime;
          this.lastTime = time;
          
          // Frame skipping for low-performance devices
          this.frameCount++;
          if (this.isLowPerformance && this.frameCount % 2 !== 0) {
            requestAnimationFrame(this.tick.bind(this));
            return;
          }

          const { ctx } = this;

          ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

          ctx.save();
          ctx.scale(this.render.dpi, this.render.dpi);

          this.moveDiscs();
          this.moveParticles();

          this.drawDiscs();
          this.drawLines();
          this.drawParticles();

          ctx.restore();

          requestAnimationFrame(this.tick.bind(this));
        }
      }

      // Initialize the black hole for the element with class 'a-hole'
      const aHoleElement = document.querySelector('.a-hole');
      if (aHoleElement) {
        new AHole(aHoleElement);
      }
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [isLowPerformanceDevice]);

  return (
    <div ref={containerRef} className="black-hole-container">
      <style jsx>{`
        .black-hole-container {
          width: 100%;
          height: 100vh;
          position: relative;
          will-change: transform;
        }
        
        .a-hole {
          position: absolute;
          top: 0;
          left: 0;
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .a-hole:before {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 2;
          display: block;
          width: 150%;
          height: 140%;
          background: radial-gradient(ellipse at 50% 55%, transparent 10%, black 50%);
          transform: translate3d(-50%, -50%, 0);
          content: "";
          will-change: transform;
        }
        
        .a-hole:after {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 5;
          display: block;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            ellipse at 50% 75%,
            #a900ff 20%,
            transparent 75%
          );
          mix-blend-mode: overlay;
          transform: translate3d(-50%, -50%, 0);
          content: "";
          will-change: transform;
        }
        
        @media (max-width: 768px) {
          .a-hole:before {
            width: 160%;
            height: 160%;
            background: radial-gradient(ellipse at 50% 50%, transparent 10%, black 50%);
          }
          
          .a-hole:after {
            width: 120%;
            height: 120%;
            background: radial-gradient(
              ellipse at 50% 60%,
              #a900ff 15%,
              transparent 70%
            );
          }
          
          .a-hole .aura {
            width: 35%;
            filter: blur(40px);
          }

          /* Minimal adjustments to container */
          .black-hole-container {
            height: 100vh;
          }
          
          .a-hole {
            transform: none;
          }
          
          .a-hole canvas {
            transform: none;
          }
        }
        
        @keyframes aura-glow {
          0% {
            background-position: 0 100%;
          }
          100% {
            background-position: 0 300%;
          }
        }
        
        .a-hole .aura {
          position: absolute;
          top: -71.5%;
          left: 50%;
          z-index: 3;
          width: 30%;
          height: 140%;
          background: linear-gradient(
              20deg,
              #00f8f1,
              #ffbd1e20 16.5%,
              #fe848f 33%,
              #fe848f20 49.5%,
              #00f8f1 66%,
              #00f8f160 85.5%,
              #ffbd1e 100%
            )
            0 100% / 100% 200%;
          border-radius: 0 0 100% 100%;
          filter: blur(50px);
          mix-blend-mode: plus-lighter;
          opacity: 0.75;
          transform: translate3d(-50%, 0, 0);
          animation: aura-glow 5s infinite linear;
          will-change: transform, background-position;
        }
        
        .a-hole .overlay {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 10;
          width: 100%;
          height: 100%;
          background: transparent;
          mix-blend-mode: overlay;
          opacity: 0.2;
        }
        
        .a-hole canvas {
          display: block;
          width: 100%;
          height: 100%;
          will-change: transform;
        }
      `}</style>
      <div className="a-hole">
        <canvas className="js-canvas"></canvas>
        <div className="aura"></div>
        <div className="overlay"></div>
      </div>
    </div>
  );
};

export default BlackHole; 