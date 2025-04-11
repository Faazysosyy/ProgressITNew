import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsAndConditions() {
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
                Terms & Conditions
              </span>
            </h1>
            
            <p className="text-gray-400 mb-10">Last Updated: April 4, 2024</p>
            
            <div className="space-y-8 text-gray-300">
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                <p>
                  Welcome to Progress IT. These Terms and Conditions govern your use of our website www.progressit.online and services, and they constitute a binding legal agreement between you and Progress IT. By accessing or using our services, you agree to be bound by these terms. If you do not agree, please do not use our services.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">2. Acceptance of Terms</h2>
                <p>
                  By accessing our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, our Privacy Policy, and any additional terms and conditions that may apply to specific portions of our service.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">3. Service Description</h2>
                <p>
                  Progress IT provides digital agency services including, but not limited to, web development, mobile app development, UI/UX design, digital marketing, and blockchain solutions. The specific details of our services will be outlined in a separate agreement or proposal for each client.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">4. User Obligations</h2>
                <p className="mb-4">By using our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Provide accurate, current, and complete information when required</li>
                  <li>Maintain the security of your account details if applicable</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                  <li>Use our services in a lawful manner</li>
                  <li>Not attempt to interfere with the proper functioning of our services</li>
                </ul>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">5. Intellectual Property Rights</h2>
                
                <h3 className="text-xl font-semibold mb-2 text-blue-400">5.1. Our Content</h3>
                <p className="mb-4">
                  All content, features, and functionality on our website, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are owned by Progress IT, our licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                
                <h3 className="text-xl font-semibold mb-2 text-blue-400">5.2. Client Content</h3>
                <p className="mb-4">
                  Any content provided by you for use in our services remains your property. However, by providing this content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute it in any media for the purpose of providing and promoting our services.
                </p>
                
                <h3 className="text-xl font-semibold mb-2 text-blue-400">5.3. Portfolio Rights</h3>
                <p>
                  Unless otherwise agreed in writing, we reserve the right to display and link to completed projects as part of our portfolio and to discuss our work on our website, social media, and other promotional materials.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">6. Payment Terms</h2>
                
                <h3 className="text-xl font-semibold mb-2 text-blue-400">6.1. Fees</h3>
                <p className="mb-4">
                  Our fees will be specified in your service agreement or proposal. All fees are in EUR unless otherwise stated.
                </p>
                
                <h3 className="text-xl font-semibold mb-2 text-blue-400">6.2. Payment Schedule</h3>
                <p className="mb-4">
                  Payment schedules will be outlined in your service agreement. Typically, we require a deposit before work begins, followed by milestone payments or a payment schedule.
                </p>
                
                <h3 className="text-xl font-semibold mb-2 text-blue-400">6.3. Late Payments</h3>
                <p>
                  Late payments may incur interest charges and may result in suspension of services. Resumed services may be subject to a reconnection fee.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">7. Changes to Services</h2>
                <p>
                  We reserve the right to modify or discontinue, temporarily or permanently, any part of our services with or without notice. We will not be liable to you or any third party for any modification, suspension, or discontinuance of our services.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">8. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by applicable law, Progress IT shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising out of or in connection with your use or inability to use our services.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">9. Warranties and Disclaimers</h2>
                <p>
                  Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">10. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Progress IT, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including, without limitation, reasonable legal fees, arising out of or in any way connected with your access to or use of our services.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">11. Termination</h2>
                <p>
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">12. Governing Law</h2>
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">13. Dispute Resolution</h2>
                <p>
                  Any dispute arising out of or relating to these Terms and Conditions, or any breach thereof, shall first be attempted to be resolved through good faith negotiation. If such negotiation fails, the dispute shall be submitted to mediation. If mediation is unsuccessful, the dispute shall be resolved by arbitration in accordance with the rules of the London Court of International Arbitration.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">14. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. If we make material changes, we will notify you through our website or via email. Your continued use of our services after such modifications will constitute your acknowledgment and agreement to the modified terms.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">15. Severability</h2>
                <p>
                  If any provision of these Terms and Conditions is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms and Conditions shall otherwise remain in full force and effect.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">16. Entire Agreement</h2>
                <p>
                  These Terms and Conditions, together with our Privacy Policy and any other legal notices published by us on our website, constitute the entire agreement between you and Progress IT concerning our services.
                </p>
              </div>
              
              <div className="bg-gray-950 p-6 rounded-lg border border-gray-800">
                <h2 className="text-2xl font-bold mb-4 text-white">17. Contact Information</h2>
                <p className="mb-4">For any questions about these Terms and Conditions, please contact us at:</p>
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