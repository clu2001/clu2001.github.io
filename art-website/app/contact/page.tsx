'use client';

import { useState } from 'react';
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        console.error('Form error:', data);
      }
    } catch (error) {
      setStatus('error');
      console.error('Submit error:', error);
    }
  };

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

      {/* Content - Centered Form */}
      <div className="flex items-center justify-center min-h-screen px-4 py-24">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">
            second me your thoughts!
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Hidden field for Web3Forms - Replace with your access key */}
            <input type="hidden" name="access_key" value="f508c49a-3832-4030-9b58-20d8bb0d702e" />
            
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="your name!"
                required
                className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-white/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white/60 transition-colors"
              />
            </div>

            {/* Contact them back Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="your email!"
                required
                className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-white/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white/60 transition-colors"
              />
            </div>

            {/* Message Field */}
            <div>
              <textarea
                name="message"
                placeholder="your message :3"
                required
                rows={6}
                className="w-full px-4 py-3 bg-black/40 backdrop-blur-sm border border-white/30 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white/60 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-md text-white font-medium hover:bg-white/30 focus:outline-none focus:bg-white/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'sending...' : 'send'}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <p className="text-center text-white text-sm">
                message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-white text-sm">
                something went wrong. please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

