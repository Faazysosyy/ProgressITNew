"use client";

import React, { useEffect, useRef, useState } from 'react';

interface BigBangAnimationProps {
  onAnimationComplete?: () => void;
}

const MatrixAnimation: React.FC<BigBangAnimationProps> = ({ onAnimationComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [currentText, setCurrentText] = useState("Initializing...");
  const [textComplete, setTextComplete] = useState(false);
  const [secondTextComplete, setSecondTextComplete] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [glitchMode, setGlitchMode] = useState(false);
  const [glitchText, setGlitchText] = useState("");
  const [chaosTexts, setChaosTexts] = useState<{id: number, text: string, x: number, y: number, opacity: number, scale?: number, rotation?: number, color?: string}[]>([]);
  const [screenGlitch, setScreenGlitch] = useState<{x: number, y: number, active: boolean}>({x: 0, y: 0, active: false});
  const [colorShift, setColorShift] = useState(false);
  
  const matrixQuotes = [
    "The Matrix has you...",
    "Follow the white rabbit.",
    "Knock, knock, Neo.",
    "There is no spoon.",
    "Welcome to the desert of the real.",
    "Free your mind.",
    "Unfortunately, no one can be told what the Matrix is. You have to see it for yourself.",
    "I know kung fu.",
    "Déjà vu.",
    "Guns. Lots of guns.",
    "Dodge this.",
    "Everything that has a beginning has an end.",
    "Human beings are a disease, a cancer of this planet.",
    "Choice is an illusion created between those with power and those without.",
    "What is real? How do you define real?",
    "Welcome to the real world.",
    "I can only show you the door. You're the one that has to walk through it.",
    "Never send a human to do a machine's job.",
    "Fate, it seems, is not without a sense of irony.",
    "I'm trying to free your mind, Neo. But I can only show you the door. You're the one that has to walk through it.",
    "ERROR: SYSTEM FAILURE",
    "ACCESS DENIED",
    "SECURITY BREACH DETECTED",
    "CORE SYSTEM OVERLOAD",
    "FATAL EXCEPTION",
    "SYSTEM REBOOT REQUIRED",
    "DATA CORRUPTION DETECTED",
    "MEMORY FRAGMENTATION",
    "BUFFER OVERFLOW",
    "KERNEL PANIC",
    "SEGMENTATION FAULT",
    "STACK OVERFLOW",
    "UNAUTHORIZED ACCESS ATTEMPT",
    "CRITICAL ERROR",
    "SYSTEM MALFUNCTION",
    "PROTOCOL VIOLATION",
    "NEURAL NETWORK COMPROMISED",
    "SYNAPTIC BREAKDOWN",
    "CONSCIOUSNESS OVERLOAD",
    "REALITY DISTORTION DETECTED"
  ];
  
  // Start fade-in effect as soon as component mounts
  useEffect(() => {
    // Start with fade-in
    setFadeIn(true);
    
    // Set a short delay before starting the animation
    const fadeTimer = setTimeout(() => {
      setAnimationStarted(true);
      
      // After a brief delay, start the typing animation for the first message
      setTimeout(() => {
        typeText("Wake Up User.", () => {
          setTextComplete(true);
          
          // After first text is complete, start typing the second message
          setTimeout(() => {
            typeText("The ProgressIT Has You", () => {
              setSecondTextComplete(true);
              
              // Automatically start glitch mode after second text is complete
              setTimeout(() => {
                startGlitchMode();
              }, 1000);
            });
          }, 1500);
        });
      }, 2000);
    }, 1000);
    
    return () => clearTimeout(fadeTimer);
  }, []);
  
  // Activate random screen-wide glitches
  useEffect(() => {
    if (glitchMode) {
      const glitchInterval = setInterval(() => {
        // Random chance to trigger a screen-wide glitch
        if (Math.random() > 0.85) {
          setScreenGlitch({
            x: Math.random() * 10 - 5, // Random offset
            y: Math.random() * 10 - 5,
            active: true
          });
          
          // Random color shift
          setColorShift(Math.random() > 0.5);
          
          // Turn off after a short delay
          setTimeout(() => {
            setScreenGlitch({x: 0, y: 0, active: false});
            setColorShift(false);
          }, Math.random() * 200 + 50); // Random duration
        }
      }, 400);
      
      return () => clearInterval(glitchInterval);
    }
  }, [glitchMode]);
  
  // Function to simulate typing text letter by letter
  const typeText = (text: string, callback: () => void) => {
    let i = 0;
    setCurrentText("");
    
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        // Occasionally add a glitchy effect to the typing
        if (Math.random() > 0.85) {
          // Add a random character then remove it
          const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
          setCurrentText(prev => prev + randomChar);
          
          setTimeout(() => {
            setCurrentText(prev => prev.slice(0, -1) + text.charAt(i));
            i++;
          }, 70);
        } else {
          setCurrentText(prev => prev + text.charAt(i));
          i++;
        }
      } else {
        clearInterval(typingInterval);
        if (callback) callback();
      }
    }, 100); // Faster typing
  };
  
  // Generate random chaos texts all over the screen
  useEffect(() => {
    if (glitchMode) {
      // Create multiple texts that change rapidly
      const interval = setInterval(() => {
        // Add new random texts
        setChaosTexts(prev => {
          const newTexts = [...prev];
          
          // Add a new random text
          if (newTexts.length < 150) { // Increase the number of texts for more chaos
            const randomQuote = matrixQuotes[Math.floor(Math.random() * matrixQuotes.length)];
            // Break quote into syllables or smaller chunks
            const words = randomQuote.split(' ');
            let syllable = '';
            
            if (Math.random() > 0.5) {
              // Add a full word
              syllable = words[Math.floor(Math.random() * words.length)];
            } else {
              // Or just a partial word
              const randomWord = words[Math.floor(Math.random() * words.length)];
              const length = Math.ceil(Math.random() * randomWord.length);
              syllable = randomWord.substring(0, length);
            }
            
            // Sometimes add random characters
            if (Math.random() > 0.85) {
              syllable = Array.from({length: Math.floor(Math.random() * 8) + 1}, () => 
                String.fromCharCode(Math.floor(Math.random() * 93) + 33)
              ).join('');
            }
            
            // Add more random transformations for chaos
            const randomScale = Math.random() * 1.5 + 0.5; // Scale between 0.5 and 2.0
            const randomRotation = Math.random() * 360; // Rotation between 0 and 360 degrees
            
            // Random color variation
            const colors = ['#00FF41', '#00FFFF', '#FF00FF', '#FFFF00', '#FF0000'];
            const color = Math.random() > 0.8 ? colors[Math.floor(Math.random() * colors.length)] : '#00FF41';
            
            newTexts.push({
              id: Date.now() + Math.random(),
              text: syllable,
              x: Math.random() * 100, // Random position
              y: Math.random() * 100,
              opacity: Math.random() * 0.9 + 0.1, // Random opacity
              scale: randomScale,
              rotation: randomRotation,
              color: color
            });
          }
          
          // Update or remove existing texts
          return newTexts.map(text => {
            // Sometimes change the text content
            if (Math.random() > 0.6) { // Increase chance of text changing
              const randomQuote = matrixQuotes[Math.floor(Math.random() * matrixQuotes.length)];
              const words = randomQuote.split(' ');
              const syllable = words[Math.floor(Math.random() * words.length)];
              
              // Sometimes randomly inject special characters
              const glitchedText = Math.random() > 0.85 
                ? syllable.split('').map(c => Math.random() > 0.7 ? String.fromCharCode(Math.floor(Math.random() * 93) + 33) : c).join('')
                : syllable;
              
              // Random color flashes
              const colors = ['#00FF41', '#00FFFF', '#FF00FF', '#FFFF00', '#FF0000'];
              const newColor = Math.random() > 0.7 ? colors[Math.floor(Math.random() * colors.length)] : text.color || '#00FF41';
              
              return {
                ...text, 
                text: glitchedText, 
                opacity: Math.random() * 0.9 + 0.1,
                color: newColor
              };
            }
            
            // Sometimes change position and transform
            if (Math.random() > 0.4) { // Increase chance of position changing
              return {
                ...text, 
                x: Math.max(0, Math.min(100, text.x + (Math.random() * 40 - 20))), // More movement
                y: Math.max(0, Math.min(100, text.y + (Math.random() * 40 - 20))),
                opacity: Math.random() * 0.9 + 0.1,
                rotation: ((text.rotation || 0) + (Math.random() * 90 - 45)) % 360, // More rotation
                scale: Math.max(0.2, (text.scale || 1) + (Math.random() * 0.4 - 0.2)) // Scale fluctuation
              };
            }
            
            return text;
          }).filter(() => Math.random() > 0.02); // Less chance of removing texts
        });
      }, 50); // Update faster for more chaos
      
      return () => clearInterval(interval);
    } else {
      setChaosTexts([]);
    }
  }, [glitchMode]);
  
  // Function to start glitch mode
  const startGlitchMode = () => {
    setGlitchMode(true);
    
    // Display random Matrix quotes with glitch effect
    let quoteIndex = 0;
    const glitchInterval = setInterval(() => {
      setGlitchText(matrixQuotes[quoteIndex % matrixQuotes.length]);
      quoteIndex++;
      
      if (quoteIndex > 30) { // Show more quotes before ending
        clearInterval(glitchInterval);
        setGlitchMode(false);
        setShowFinalMessage(true);
      }
    }, 300); // Faster quote changes
  };
  
  // Handle screen click to trigger glitch effect immediately if we're still in text mode
  const handleScreenClick = () => {
    if (!showFinalMessage && !glitchMode && (textComplete || secondTextComplete)) {
      startGlitchMode();
    }
  };

  // Fix capitalization in the texts
  useEffect(() => {
    if (textComplete) {
      setCurrentText("Wake Up User."); // Ensure correct capitalization
    }
    if (secondTextComplete) {
      setCurrentText("The ProgressIT Has You"); // Ensure correct capitalization
    }
  }, [textComplete, secondTextComplete]);

  return (
    <>
      {/* Black overlay that fades in */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'black',
          opacity: fadeIn ? 1 : 0,
          transition: 'opacity 0.8s ease-in',
          zIndex: 9998
        }}
      />
      
      {/* Matrix animation container */}
      <div 
        ref={containerRef}
        onClick={handleScreenClick}
        className={`matrix-container ${screenGlitch.active ? 'screen-glitch' : ''} ${colorShift ? 'color-shift' : ''}`}
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          opacity: animationStarted ? 1 : 0,
          transition: 'opacity 0.5s ease-in',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#00FF41', // Matrix green
          backgroundColor: 'black',
          fontFamily: 'monospace',
          cursor: 'pointer',
          overflow: 'hidden',
          transform: screenGlitch.active ? `translate(${screenGlitch.x}px, ${screenGlitch.y}px) skew(${screenGlitch.x}deg, ${screenGlitch.y}deg)` : 'none'
        }}
      >
        {/* Screen scan line effect */}
        <div className="scan-lines"></div>
        
        {/* Screen flicker effect */}
        <div className="screen-flicker"></div>
        
        {/* Random chaos texts all over the screen */}
        {chaosTexts.map(item => (
          <div 
            key={item.id}
            className="glitch-text-chaos"
            style={{
              position: 'absolute',
              left: `${item.x}%`,
              top: `${item.y}%`,
              fontSize: `${Math.random() * 24 + 8}px`,
              opacity: item.opacity,
              color: item.color || '#00FF41',
              textShadow: `0 0 5px ${item.color || 'rgba(0, 255, 65, 0.7)'}`,
              transform: `scale(${item.scale || 1}) rotate(${item.rotation || 0}deg)`,
              zIndex: 10001,
              fontFamily: Math.random() > 0.9 ? 'serif' : 'monospace',
              fontWeight: Math.random() > 0.7 ? 'bold' : 'normal',
              letterSpacing: `${Math.random() * 8 - 3}px`,
              filter: Math.random() > 0.8 ? 'blur(1px)' : 'none'
            }}
          >
            {item.text}
          </div>
        ))}
        
        {/* Main text display */}
        {!glitchMode && (
          <div 
            className="main-text"
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              marginBottom: '30px',
              textShadow: '0 0 10px rgba(0, 255, 65, 0.8)',
              letterSpacing: '2px',
              zIndex: 10002,
              textAlign: 'center',
              position: 'relative'
            }}
          >
            {currentText}
            <span className="cursor">_</span>
          </div>
        )}
        
        {/* Glitch text (random Matrix quotes) */}
        {glitchMode && (
          <div 
            className="glitch-text"
            data-text={glitchText}
            style={{
              fontSize: '32px',
              maxWidth: '80%',
              textAlign: 'center',
              position: 'relative',
              fontWeight: 'bold',
              letterSpacing: '1px',
              zIndex: 10002
            }}
          >
            {glitchText}
          </div>
        )}
        
        {/* Final message and buttons */}
        {showFinalMessage && !glitchMode && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '40px',
              textAlign: 'center',
              maxWidth: '80%',
              zIndex: 10002
            }}
          >
            <div 
              style={{
                fontSize: '20px',
                marginBottom: '30px',
                lineHeight: '1.6',
                textShadow: '0 0 8px rgba(0, 255, 65, 0.6)'
              }}
            >
              Maybe let's book a call?<br/>
              Coding is not as easy as it looks like.
            </div>
            
            <div
              style={{
                display: 'flex',
                gap: '20px'
              }}
            >
              <button
                onClick={() => onAnimationComplete && onAnimationComplete()}
                style={{
                  padding: '12px 20px',
                  backgroundColor: 'transparent',
                  color: '#00FF41',
                  border: '2px solid #00FF41',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
                  textTransform: 'uppercase'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 255, 65, 0.2)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 65, 0.8)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.5)';
                }}
              >
                Book a Call
              </button>
              
              <button
                onClick={() => onAnimationComplete && onAnimationComplete()}
                style={{
                  padding: '12px 20px',
                  backgroundColor: 'transparent',
                  color: '#00FF41',
                  border: '2px solid #00FF41',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontFamily: 'monospace',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
                  textTransform: 'uppercase'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 255, 65, 0.2)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 65, 0.8)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 255, 65, 0.5)';
                }}
              >
                Try to Calculate Again
              </button>
            </div>
          </div>
        )}

      </div>

      {/* CSS for the Matrix animation */}
      <style jsx global>{`
        body {
          margin: 0;
          overflow: hidden;
        }
        
        .cursor {
          animation: blink 1s step-end infinite;
        }
        
        @keyframes blink {
          from, to { opacity: 1 }
          50% { opacity: 0 }
        }
        
        .main-text {
          animation: textShift 0.2s ease-in-out infinite alternate;
        }
        
        @keyframes textShift {
          0% { transform: translate(0, 0); }
          20% { transform: translate(0, 0); }
          21% { transform: translate(2px, -2px); }
          22% { transform: translate(0, 0); }
          30% { transform: translate(0, 0); }
          31% { transform: translate(-2px, 2px); }
          32% { transform: translate(0, 0); }
          98% { transform: translate(0, 0); }
          100% { transform: translate(1px, -1px); }
        }
        
        .scan-lines {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(32, 128, 32, 0.2) 50%,
            transparent 100%
          );
          background-size: 100% 3px;
          z-index: 10003;
          pointer-events: none;
          animation: scanLineAnimation 8s linear infinite;
        }
        
        @keyframes scanLineAnimation {
          0% { background-position: 0 0; }
          100% { background-position: 0 1000px; }
        }
        
        .screen-flicker {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          opacity: 0;
          pointer-events: none;
          z-index: 10004;
          animation: flicker 7s infinite;
        }
        
        @keyframes flicker {
          0% { opacity: 0; }
          1% { opacity: 0.3; }
          2% { opacity: 0; }
          8% { opacity: 0; }
          9% { opacity: 0.3; }
          10% { opacity: 0; }
          20% { opacity: 0; }
          21% { opacity: 0.5; }
          22% { opacity: 0; }
          80% { opacity: 0; }
          81% { opacity: 0.3; }
          82% { opacity: 0; }
          98% { opacity: 0; }
          99% { opacity: 0.5; }
          100% { opacity: 0; }
        }
        
        .screen-glitch {
          animation: screenGlitch 0.2s ease-in-out infinite;
        }
        
        @keyframes screenGlitch {
          0% { transform: translate(0, 0) scale(1.001) skew(0deg); }
          20% { transform: translate(3px, 1px) scale(0.998) skew(0.5deg, 0deg); }
          40% { transform: translate(-2px, -1px) scale(1.002) skew(0deg, 0.3deg); }
          60% { transform: translate(1px, 3px) scale(0.999) skew(-0.5deg, 0deg); }
          80% { transform: translate(-1px, -2px) scale(1.001) skew(0deg, -0.3deg); }
          100% { transform: translate(2px, 1px) scale(1) skew(0.2deg, 0.1deg); }
        }
        
        .color-shift {
          animation: colorShift 0.1s step-end infinite;
        }
        
        @keyframes colorShift {
          0% { filter: hue-rotate(0deg); }
          33% { filter: hue-rotate(90deg); }
          66% { filter: hue-rotate(180deg); }
          100% { filter: hue-rotate(270deg); }
        }
        
        .glitch-text {
          animation: glitch 0.3s linear infinite;
          position: relative;
        }
        
        .glitch-text:before,
        .glitch-text:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch-text:before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim 4s infinite linear alternate-reverse;
        }
        
        .glitch-text:after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim2 0.5s infinite linear alternate-reverse;
        }
        
        .glitch-text-chaos {
          animation: glitch-float 2s ease-in-out infinite alternate;
        }
        
        @keyframes glitch-float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-10px) rotate(3deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(5px) rotate(-3deg);
            opacity: 1;
          }
        }
        
        @keyframes glitch {
          2%, 64% {
            transform: translate(2px, 0) skew(0deg);
          }
          4%, 60% {
            transform: translate(-2px, 0) skew(0deg);
          }
          62% {
            transform: translate(0, 0) skew(5deg);
          }
        }
        
        @keyframes glitch-anim {
          0% {
            clip: rect(98px, 9999px, 54px, 0);
            transform: skew(0.5deg);
          }
          5% {
            clip: rect(22px, 9999px, 59px, 0);
            transform: skew(0.1deg);
          }
          10% {
            clip: rect(53px, 9999px, 3px, 0);
            transform: skew(-0.3deg);
          }
          15% {
            clip: rect(94px, 9999px, 46px, 0);
            transform: skew(0.2deg);
          }
          20% {
            clip: rect(95px, 9999px, 81px, 0);
            transform: skew(-0.8deg);
          }
          25% {
            clip: rect(33px, 9999px, 18px, 0);
            transform: skew(0.5deg);
          }
          30% {
            clip: rect(55px, 9999px, 64px, 0);
            transform: skew(-0.2deg);
          }
          35% {
            clip: rect(67px, 9999px, 12px, 0);
            transform: skew(0.8deg);
          }
          40% {
            clip: rect(57px, 9999px, 95px, 0);
            transform: skew(0.2deg);
          }
          45% {
            clip: rect(28px, 9999px, 20px, 0);
            transform: skew(-0.1deg);
          }
          50% {
            clip: rect(61px, 9999px, 34px, 0);
            transform: skew(0.4deg);
          }
          55% {
            clip: rect(79px, 9999px, 43px, 0);
            transform: skew(-0.7deg);
          }
          60% {
            clip: rect(35px, 9999px, 56px, 0);
            transform: skew(0.5deg);
          }
          65% {
            clip: rect(39px, 9999px, 81px, 0);
            transform: skew(-0.2deg);
          }
          70% {
            clip: rect(94px, 9999px, 72px, 0);
            transform: skew(0.6deg);
          }
          75% {
            clip: rect(10px, 9999px, 89px, 0);
            transform: skew(-0.4deg);
          }
          80% {
            clip: rect(88px, 9999px, 24px, 0);
            transform: skew(0.3deg);
          }
          85% {
            clip: rect(67px, 9999px, 3px, 0);
            transform: skew(-0.5deg);
          }
          90% {
            clip: rect(4px, 9999px, 55px, 0);
            transform: skew(0.7deg);
          }
          95% {
            clip: rect(55px, 9999px, 34px, 0);
            transform: skew(-0.3deg);
          }
          100% {
            clip: rect(67px, 9999px, 92px, 0);
            transform: skew(0.4deg);
          }
        }
        
        @keyframes glitch-anim2 {
          0% {
            clip: rect(96px, 9999px, 72px, 0);
            transform: skew(0.3deg);
          }
          5% {
            clip: rect(14px, 9999px, 41px, 0);
            transform: skew(-0.4deg);
          }
          10% {
            clip: rect(75px, 9999px, 22px, 0);
            transform: skew(0.5deg);
          }
          15% {
            clip: rect(60px, 9999px, 73px, 0);
            transform: skew(-0.1deg);
          }
          20% {
            clip: rect(23px, 9999px, 15px, 0);
            transform: skew(0.6deg);
          }
          25% {
            clip: rect(30px, 9999px, 5px, 0);
            transform: skew(-0.8deg);
          }
          30% {
            clip: rect(16px, 9999px, 67px, 0);
            transform: skew(0.2deg);
          }
          35% {
            clip: rect(44px, 9999px, 38px, 0);
            transform: skew(-0.3deg);
          }
          40% {
            clip: rect(67px, 9999px, 36px, 0);
            transform: skew(0.7deg);
          }
          45% {
            clip: rect(81px, 9999px, 41px, 0);
            transform: skew(-0.5deg);
          }
          50% {
            clip: rect(30px, 9999px, 17px, 0);
            transform: skew(0.4deg);
          }
          55% {
            clip: rect(37px, 9999px, 26px, 0);
            transform: skew(-0.2deg);
          }
          60% {
            clip: rect(68px, 9999px, 13px, 0);
            transform: skew(0.8deg);
          }
          65% {
            clip: rect(21px, 9999px, 25px, 0);
            transform: skew(-0.6deg);
          }
          70% {
            clip: rect(75px, 9999px, 85px, 0);
            transform: skew(0.3deg);
          }
          75% {
            clip: rect(42px, 9999px, 19px, 0);
            transform: skew(-0.7deg);
          }
          80% {
            clip: rect(63px, 9999px, 30px, 0);
            transform: skew(0.5deg);
          }
          85% {
            clip: rect(51px, 9999px, 12px, 0);
            transform: skew(-0.1deg);
          }
          90% {
            clip: rect(83px, 9999px, 96px, 0);
            transform: skew(0.2deg);
          }
          95% {
            clip: rect(91px, 9999px, 42px, 0);
            transform: skew(-0.8deg);
          }
          100% {
            clip: rect(16px, 9999px, 23px, 0);
            transform: skew(0.1deg);
          }
        }
      `}</style>
    </>
  );
};

export default MatrixAnimation; 