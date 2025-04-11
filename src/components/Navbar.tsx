"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
}

interface NavbarProps {
  logo?: string;
  navItems?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
}

export default function Navbar({
  logo = "/logo.svg",
  navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Industries", href: "/industries" },
    { label: "Technologies", href: "/technologies" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  ctaText = "Let's Talk",
  ctaHref = "#contact",
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-black/30 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5",
      )}
    >
      <div className="progress-it-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 relative">
            <div className="flex items-center">
              <span
                className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
              >
                Progress IT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors relative",
                    "text-white",
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className={cn(
                "font-medium transition-all overflow-hidden relative group btn-gradient-hover",
                "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:shadow-lg text-white border-none"
              )}
            >
              <Link href={ctaHref}>
                <span className="relative z-10">{ctaText}</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300"></span>
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden z-50 relative transition-colors p-2",
              isMenuOpen ? "text-white" : "text-white",
            )}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            >
              <div className="flex flex-col justify-center items-center h-full pt-14">
                <div className="flex flex-col items-center space-y-6">
                  {navItems.map((item) => (
                    <div key={item.label} className="text-center">
                      <Link
                        href={item.href}
                        className="text-white text-2xl font-medium mx-4 py-2 relative inline-block"
                        onClick={toggleMenu}
                      >
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:opacity-90 text-white py-4 px-8 text-lg rounded-md"
                  >
                    <Link href={ctaHref} onClick={toggleMenu}>
                      {ctaText}
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
