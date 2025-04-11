import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="progress-it-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-blue-500 mb-6 transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to home
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-transparent bg-clip-text animate-gradient-x">
                Privacy Policy
              </span>
            </h1>
            
            <p className="text-gray-400 mb-10">Last Updated: April 8, 2024</p>
            
            <div className="space-y-8 text-gray-300">
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                <p className="mb-4">
                  Progress IT ("we," "us," or "our") respects your privacy and is committed to protecting your personal data. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                  website www.progressit.online (the "Site") or engage with our services.
                </p>
                <p>
                  By accessing or using our Site, you agree to the terms of this Privacy Policy. If you do not agree, 
                  please do not use our services.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>
                <p className="mb-4">We may collect the following types of information:</p>
                
                <h3 className="text-xl font-semibold mb-2 text-blue-400">A. Personal Information</h3>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Job title</li>
                  <li>Payment details (if applicable)</li>
                  <li>Any other information you provide via contact forms, project calculators, or consultations</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-2 text-blue-400">B. Non-Personal Information</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Browser type & version</li>
                  <li>IP address</li>
                  <li>Pages visited</li>
                  <li>Time spent on the Site</li>
                  <li>Referring website</li>
                  <li>Cookies & tracking data</li>
                </ul>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
                <p className="mb-4">We may use your information for:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Providing and improving our services</li>
                  <li>Responding to inquiries & project requests</li>
                  <li>Sending marketing communications (with your consent)</li>
                  <li>Analyzing website performance & user behavior</li>
                  <li>Preventing fraud & enhancing security</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">4. How We Share Your Information</h2>
                <p className="mb-4">We do not sell your personal data. However, we may share it with:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Service Providers:</strong> Third-party vendors assisting with hosting, analytics, marketing, and payment processing.</li>
                  <li><strong>Legal Compliance:</strong> If required by law (e.g., court orders, government requests).</li>
                  <li><strong>Business Transfers:</strong> In case of mergers, acquisitions, or asset sales.</li>
                </ul>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">5. Cookies & Tracking Technologies</h2>
                <p className="mb-4">We use cookies and similar technologies to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Enhance user experience</li>
                  <li>Analyze traffic patterns</li>
                  <li>Personalize content & ads</li>
                  <li>Remember user preferences</li>
                </ul>
                <p>You can manage cookie settings in your browser, but disabling them may affect Site functionality.</p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">6. Data Security</h2>
                <p>
                  We implement industry-standard security measures, including encryption and access controls, 
                  to protect your data. However, no online transmission is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">7. Your Privacy Rights (Under GDPR)</h2>
                <p className="mb-4">If you are in the European Economic Area (EEA) or UK, you have the right to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Access, correct, or delete your personal data</li>
                  <li>Restrict or object to processing</li>
                  <li>Request data portability</li>
                  <li>Withdraw consent (where applicable)</li>
                </ul>
                <p>To exercise these rights, contact us at info@progressit.online.</p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">8. Third-Party Links</h2>
                <p>
                  Our Site may contain links to third-party websites. We are not responsible for their privacy practices, 
                  so we encourage you to review their policies.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">9. Children's Privacy</h2>
                <p>
                  Our services are not intended for users under 16. We do not knowingly collect data from children. 
                  If we become aware of such collection, we will take steps to delete it.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. The latest version will always be posted on our Site with the effective date.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">11. Contact Us</h2>
                <p className="mb-4">For questions about this Privacy Policy, please contact:</p>
                <div className="pl-6">
                  <p className="mb-2"><strong>Progress IT</strong></p>
                  <p className="mb-2">📧 Email: info@progressit.online</p>
                  <p className="mb-2">📍 Address: 27 Old Gloucester Street, London, UK</p>
                  <p>📞 Phone: +371 28674827</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer companyName="Progress IT" />
    </main>
  );
} 