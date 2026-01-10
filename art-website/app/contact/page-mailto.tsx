'use client';

import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="relative font-sans" onContextMenu={(e) => e.preventDefault()}>
      <Navbar />
      
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/erm6.png"
          alt="Background"
          fill
          className="object-cover object-top blur-sm"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-white/20 dark:bg-black/20"></div>
      </div>

      {/* Content - Centered */}
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          contact me
        </h1>
        
        <a
          href="mailto:your.email@example.com?subject=Portfolio Contact"
          className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md text-white text-lg font-medium hover:bg-white/30 focus:outline-none focus:bg-white/30 transition-colors"
        >
          send email
        </a>
        
        <p className="text-white text-sm mt-4">
          your.email@example.com
        </p>
      </div>
    </div>
  );
}

