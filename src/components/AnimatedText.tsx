"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text?: string;
  className?: string;
  colorClass?: string;
}

export default function AnimatedText({ 
  text = "Innovations", 
  className = "",
  colorClass = "from-blue-400 to-indigo-500"
}: AnimatedTextProps) {
  
  return (
    <div className={cn("flex flex-col items-center justify-center relative w-full", className)}>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@100&display=swap");

        :root {
          --sp: 12s;
          --white: #ffffff;
        }

        .content {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 70vmin;
          font-family: "Kanit", sans-serif;
        }

        .content div {
          position: absolute;
          display: flex;
          animation: show-hide var(--sp) ease 0s infinite;
          mix-blend-mode: plus-lighter;
        }

        @keyframes show-hide {
          0%, 100% {
            opacity: 0;
            transform: scale(0.8);
          }
          20%, 80% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .content div span {
          width: 10vmin;
          position: relative;
          text-align: center;
          box-sizing: border-box;
          color: #ffffff90;
          text-shadow: none;
          font-family: "Kanit", sans-serif;
          font-size: 4vmin;
          font-weight: 100;
        }

        .up:before,
        .down:before {
          width: 80%;
          height: 0.1vmin;
          background: radial-gradient(ellipse at 50% 50%, var(--white), #ffffff00 70%);
          content: "";
          position: absolute;
          border-radius: 100%;
          filter: blur(2px);
          left: 10%;
          top: 49%;
          box-shadow: none;
          animation: shadow var(--sp) ease 0s infinite;
        }

        .down:before {
          width: 1vmin;
          height: 0.5vmin;
          filter: blur(3px);
          left: calc(50% - 0.5vmin);
          top: 45%;
          box-shadow: none;
        }

        @keyframes shadow {
          0%, 10%, 90%, 100% {
            opacity: 0;
          }
          45%, 55% {
            opacity: 0.25;
            height: 0.25vmin;
          }
        }

        .up span,
        .down span {
          animation-duration: var(--sp);
          animation-timing-function: ease;
          animation-delay: 0s;
          animation-iteration-count: infinite;
        }

        .up-0 {
          /* No animation for first and last letters */
        }

        .up-2-8 {
          animation-name: go-up-2-8;
        }

        .up-3-7 {
          animation-name: go-up-3-7;
        }

        .up-4-6 {
          animation-name: go-up-4-6;
        }

        .up-5 {
          animation-name: go-up-5;
        }

        .down-0 {
          /* No animation for first and last letters */
        }

        .down-2-8 {
          animation-name: go-down-2-8;
        }

        .down-3-7 {
          animation-name: go-down-3-7;
        }

        .down-4-6 {
          animation-name: go-down-4-6;
        }

        .down-5 {
          animation-name: go-down-5;
        }

        @keyframes go-up-2-8 {
          0%, 10%, 90%, 100% {
            top: 0;
          }
          40%, 60% {
            top: -0.6vmin;
          }
        }

        @keyframes go-up-3-7 {
          0%, 10%, 90%, 100% {
            top: 0;
          }
          40%, 60% {
            top: -1.2vmin;
          }
        }

        @keyframes go-up-4-6 {
          0%, 10%, 90%, 100% {
            top: 0;
          }
          40%, 60% {
            top: -1.8vmin;
          }
        }

        @keyframes go-up-5 {
          0%, 10%, 90%, 100% {
            top: 0;
          }
          40%, 60% {
            top: -2.4vmin;
          }
        }

        @keyframes go-down-2-8 {
          0%, 10%, 90%, 100% {
            top: 0;
          }
          40%, 60% {
            top: 0.6vmin;
          }
        }

        @keyframes go-down-3-7 {
          0%, 10%, 90%, 100% {
            top: 0;
          }
          40%, 60% {
            top: 1.2vmin;
          }
        }

        @keyframes go-down-4-6 {
          0%, 10%, 90%, 100% {
            top: 0;
          }
          40%, 60% {
            top: 1.8vmin;
          }
        }

        @keyframes go-down-5 {
          0%, 10%, 90%, 100% {
            top: 0;
          }
          40%, 60% {
            top: 2.4vmin;
          }
        }
      `}</style>
      
      <div className="content">
        <div className="up">
          <span className="up-0">I</span>
          <span className="up-2-8">N</span>
          <span className="up-3-7">N</span>
          <span className="up-4-6">O</span>
          <span className="up-5">V</span>
          <span className="up-4-6">A</span>
          <span className="up-3-7">T</span>
          <span className="up-2-8">I</span>
          <span className="up-0">O</span>
          <span className="up-2-8">N</span>
          <span className="up-0">S</span>
        </div>
        <div className="down">
          <span className="down-0">I</span>
          <span className="down-2-8">N</span>
          <span className="down-3-7">N</span>
          <span className="down-4-6">O</span>
          <span className="down-5">V</span>
          <span className="down-4-6">A</span>
          <span className="down-3-7">T</span>
          <span className="down-2-8">I</span>
          <span className="down-0">O</span>
          <span className="down-2-8">N</span>
          <span className="down-0">S</span>
        </div>
      </div>
      
      {/* Visible heading for SEO but spaced below the animation */}
      <h2 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${colorClass} text-transparent bg-clip-text opacity-0`}>
        {text}
      </h2>
    </div>
  );
} 