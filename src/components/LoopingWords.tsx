"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

interface LoopingWordsProps {
  words?: string[];
  backgroundColor?: string;
}

const LoopingWords = ({
  words = ["WHAT", "ARE", "YOU", "WAITING", "FOR?"],
  backgroundColor = "bg-background",
}: LoopingWordsProps) => {
  const wordListRef = useRef<HTMLUListElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    // Initialize animation when component mounts
    const timer = setTimeout(() => {
      initAnimation();
    }, 500);

    return () => {
      // Cleanup any animations and timers
      clearTimeout(timer);
      gsap.killTweensOf(wordListRef.current);
    };
  }, []);

  const initAnimation = () => {
    if (!wordListRef.current || !selectorRef.current) return;

    const wordList = wordListRef.current;
    const wordElements = Array.from(wordList.children);
    const totalWords = wordElements.length;
    const wordHeight = 100 / totalWords; // Offset as a percentage
    const edgeElement = selectorRef.current;

    const updateEdgeWidth = () => {
      const centerIndex = (currentIndexRef.current + 1) % totalWords;
      const centerWord = wordElements[centerIndex] as HTMLElement;
      if (!centerWord) return;

      const centerWordWidth = centerWord.getBoundingClientRect().width;
      const listWidth = wordList.getBoundingClientRect().width;
      const percentageWidth = (centerWordWidth / listWidth) * 100;

      gsap.to(edgeElement, {
        width: `${percentageWidth}%`,
        duration: 0.5,
        ease: "expo.easeOut",
      });
    };

    const moveWords = () => {
      currentIndexRef.current++;

      gsap.to(wordList, {
        yPercent: -wordHeight * currentIndexRef.current,
        duration: 1.2,
        ease: "elastic.out(1, 0.85)",
        onStart: updateEdgeWidth,
        onComplete: function () {
          // Check if we need to loop
          if (currentIndexRef.current >= totalWords - 3) {
            // Move the first word to the end of the list
            if (wordList.firstElementChild) {
              wordList.appendChild(wordList.firstElementChild);
            }
            // Reset the counter and position
            currentIndexRef.current--;
            gsap.set(wordList, {
              yPercent: -wordHeight * currentIndexRef.current,
            });
            // Update our tracking array
            wordElements.push(wordElements.shift() as HTMLElement);
          }
        },
      });
    };

    // Initial edge width update
    updateEdgeWidth();

    // Create a repeating timeline for the animation
    gsap
      .timeline({ repeat: -1, delay: 1 })
      .call(moveWords)
      .to({}, { duration: 2 })
      .repeat(-1);
  };

  return (
    <section className="w-full py-24 bg-black text-white flex justify-center items-center overflow-hidden">
      <div className="progress-it-container max-w-full px-4 md:px-6 lg:px-8">
        <div className="looping-words">
          <div className="looping-words__containers">
            <ul ref={wordListRef} className="looping-words__list">
              {words.map((word, index) => (
                <li key={index} className="looping-words__list">
                  <p className="looping-words__p text-gray-200">{word}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="looping-words__fade"></div>
          <div ref={selectorRef} className="looping-words__selector">
            <div className="looping-words__edge"></div>
            <div className="looping-words__edge is--2"></div>
            <div className="looping-words__edge is--3"></div>
            <div className="looping-words__edge is--4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoopingWords;
