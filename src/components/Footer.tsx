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
import { useTranslation } from "@/lib/useTranslation";

interface FooterProps {
  companyName?: string;
}

export default function Footer({ companyName = "Progress IT" }: FooterProps) {
  const { t } = useTranslation();
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
    <footer 
      ref={footerRef} 
      className="bg-black text-white py-16 relative" 
      style={{ zIndex: 20 }}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="border-b border-gray-800 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Industries Column */}
            <div className="space-y-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
                {t('footer.industries')}
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/industries#financial-services"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.financialServices')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries#real-estate"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.realEstate')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries#ecommerce"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.ecommerce')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries#blockchain"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.blockchain')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries#entertainment"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.entertainment')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="space-y-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
                {t('footer.services')}
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/services#website-development"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.websiteDevelopment')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#seo"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.seo')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#mobile-app-development"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.mobileAppDevelopment')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#uiux-design"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.uiuxDesign')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#brand-identity"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.brandIdentity')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services#custom-web-applications"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.customWebApplications')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Technologies Column */}
            <div className="space-y-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
                {t('footer.technologies')}
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.aspNet')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.reactjs')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.nodejs')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.angular')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.awsAzure')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/technologies"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.solanaDevelopment')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Case Studies Column */}
            <div className="space-y-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
                {t('footer.showcase')}
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/showcase"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.elevateInc')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/showcase"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.wooshAir')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/showcase"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.gastroGuide')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/showcase"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.chMedic')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/showcase"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {t('footer.careAI')}
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
              {t('footer.chatWithUs')}
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
              {t('footer.findUs')}
            </h3>
            <address className="text-xl md:text-2xl font-medium not-italic">
              {t('footer.headOffice')}
              <br />
              {t('footer.address')}
            </address>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-sm font-medium uppercase tracking-wider text-gray-400">
              {t('footer.followUs')}
            </h3>
            {/* Commented out social icons */}
            {/*
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
            */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold">{companyName}</div>
            <div className="text-sm text-gray-400 mt-2">
              © {new Date().getFullYear()} {t('footer.allRightsReserved')}
            </div>
          </div>
          <div className="flex space-x-6 text-sm">
            {/* <Link href="/#contact" className="hover:text-blue-400 transition-colors">
              {t('footer.contactUs')}
            </Link> */}
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
              {t('footer.privacyPolicy')}
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-blue-400 transition-colors">
              {t('footer.termsAndConditions')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
