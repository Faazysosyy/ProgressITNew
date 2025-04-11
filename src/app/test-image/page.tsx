import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TestImagePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Image Test Page</h1>
      
      <div className="mb-4">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Next.js Image Component</h2>
          <div className="relative w-full h-64">
            <Image 
              src="/images/favicon.png"
              alt="Favicon Test" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        
        <div className="p-4 border rounded">
          <h2 className="text-xl font-semibold mb-2">Regular HTML Image</h2>
          <img 
            src="/images/favicon.png" 
            alt="Regular Image Test" 
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
} 