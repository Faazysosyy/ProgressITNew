import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Project Calculator | ProgressIT",
  description: "Get an instant estimate for your project based on your specific requirements.",
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="pt-0">{children}</main>
      <Footer />
    </div>
  );
} 