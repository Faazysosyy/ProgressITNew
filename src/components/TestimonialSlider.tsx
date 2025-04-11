"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: string;
  clientName: string;
  position: string;
  company: string;
  text: string;
  logoUrl: string;
  category: string;
}

interface TestimonialSliderProps {
  testimonials?: Testimonial[];
}

const TestimonialSlider = ({
  testimonials = [
    {
      id: "1",
      clientName: "Dana Knight",
      position: "Senior Director Global Marketing & Customer Experience",
      company: "FEIT Electric",
      text: "The team is highly responsive and eager to help. They show a commitment to excellence for both large and small projects.",
      logoUrl:
        "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&q=80",
      category: "B2C ELECTRICAL PARTS ECOMMERCE WEBSITE",
    },
    {
      id: "2",
      clientName: "Alex Chen",
      position: "CTO & Co-founder",
      company: "Quantum Finance",
      text: "Their blockchain expertise transformed our DeFi platform. The team delivered a secure, scalable solution that exceeded our expectations and helped us raise an additional $12M in funding.",
      logoUrl:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      category: "DEFI PLATFORM DEVELOPMENT",
    },
    {
      id: "3",
      clientName: "Sarah Johnson",
      position: "VP of Product",
      company: "MetaVerse Innovations",
      text: "The neural-blockchain integration they developed for our metaverse platform was revolutionary. User engagement increased by 300% and we're now the leading platform in our space.",
      logoUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      category: "METAVERSE INTEGRATION",
    },
    {
      id: "4",
      clientName: "Michael Torres",
      position: "Founder & CEO",
      company: "NFT Collective",
      text: "Their team built our NFT marketplace from concept to launch in just 8 weeks. The platform handles over 10,000 daily transactions with zero downtime. Simply outstanding work.",
      logoUrl:
        "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80",
      category: "NFT MARKETPLACE DEVELOPMENT",
    },
  ],
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full bg-black text-white py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="relative">
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight text-green-400 mb-6">
            Testimonials
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mb-16">
            Take a deep dive into the tales of triumph from our web design
            agency. Our clients enthusiastically recount their journeys,
            showcasing how our cutting-edge web design solutions have
            revolutionized their online platforms.
          </p>

          <div className="absolute top-0 right-0 flex space-x-4">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-yellow-400 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8"
          >
            <div className="bg-white p-8 flex items-center justify-center rounded-md">
              <img
                src={currentTestimonial.logoUrl}
                alt={`${currentTestimonial.company} logo`}
                className="max-w-full max-h-48 object-contain"
              />
            </div>
            <div className="flex flex-col space-y-6">
              <div className="uppercase text-sm font-medium tracking-wider text-green-400">
                {currentTestimonial.category}
              </div>
              <blockquote className="text-2xl font-medium">
                "{currentTestimonial.text}"
              </blockquote>
              <div className="mt-4">
                <div className="font-bold text-xl">
                  {currentTestimonial.clientName}
                </div>
                <div className="text-gray-400 mt-1">
                  {currentTestimonial.position}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestimonialSlider;
