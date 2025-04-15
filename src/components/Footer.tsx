"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Instagram,
} from "lucide-react";

interface FooterProps {
  companyName?: string;
}

export default function Footer({ companyName = "Progress IT" }: FooterProps) {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Load the ember animation script
    const script = document.createElement("script");
    script.src = "/js/emberAnimation.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (
        footerRef.current &&
        typeof window !== "undefined" &&
        window.initEmberAnimation
      ) {
        const canvas = window.initEmberAnimation();
        footerRef.current.appendChild(canvas);
        footerRef.current.style.position = "relative";
        footerRef.current.style.overflow = "hidden";
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-white py-16 relative">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="border-b border-gray-800 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Industries Column */}
            <div className="space-y-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
                INDUSTRIES
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/industries#financial-services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Financial Services Digital Transformation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries#real-estate"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Real Estate Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries#ecommerce"
                    className="hover:text-blue-400 transition-colors"
                  >
                    E-commerce & Retail Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries#blockchain"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Blockchain & DApp Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries#entertainment"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Entertainment & Media Platforms
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="space-y-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
                SERVICES
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/services#website-development"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Website Development & Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#seo"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Search Engine Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#mobile-app-development"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Mobile Application Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#uiux-design"
                    className="hover:text-blue-400 transition-colors"
                  >
                    UI/UX Design & Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#brand-identity"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Brand Identity Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#custom-web-applications"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Custom Web Application Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Technologies Column */}
            <div className="space-y-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
                TECHNOLOGIES
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-blue-400 transition-colors"
                  >
                    ASP.NET Development Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-blue-400 transition-colors"
                  >
                    React.js
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Node.js
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Angular
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-blue-400 transition-colors"
                  >
                    AWS / Azure Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Solana / ERC20 Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Case Studies Column */}
            <div className="space-y-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
                CASE STUDIES
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    The California Endowment Website Redesign
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    BEGA Website Redesign
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    BSM Consulting Website and Portal Redesign
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Spexster Web App Design & Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-blue-400 transition-colors"
                  >
                    KPFF Website Redesign & Development
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 border-b border-gray-800">
          {/* Chat With Us */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
              CHAT WITH US
            </h3>
            <div>
              <Link
                href="tel:+37128674827"
                className="text-xl md:text-2xl font-medium hover:text-blue-400 transition-colors"
              >
                +371 28674827
              </Link>
            </div>
            <div>
              <Link
                href="mailto:info@progressit.online"
                className="text-xl md:text-2xl font-medium hover:text-blue-400 transition-colors"
              >
                info@progressit.online
              </Link>
            </div>
          </div>

          {/* Find Us */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
              FIND US
            </h3>
            <address className="text-xl md:text-2xl font-medium not-italic">
              Head Office UK, London
              <br />
              27 Old Gloucester Street, London
            </address>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
              FOLLOW US ON
            </h3>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Linkedin size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Twitter size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Youtube size={24} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Instagram size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">{companyName}</div>
            <div className="text-sm text-gray-400 mt-2">
              © {new Date().getFullYear()} Progress IT All Rights Reserved
            </div>
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/#contact" className="hover:text-blue-400 transition-colors">
              Contact Us
            </Link>
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-blue-400 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
