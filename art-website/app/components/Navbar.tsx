'use client';

import { useState } from 'react';
import ScrambleText from './ScrambleText';

export default function Navbar() {
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [logoHover, setLogoHover] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="text-2xl font-bold text-gray-900 dark:text-white"
              onMouseEnter={() => setLogoHover(true)}
              onMouseLeave={() => setLogoHover(false)}
            >
              <ScrambleText text="Logo" isHovering={logoHover} />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              onMouseEnter={() => setHomeHover(true)}
              onMouseLeave={() => setHomeHover(false)}
            >
              <ScrambleText text="Home" isHovering={homeHover} />
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              onMouseEnter={() => setAboutHover(true)}
              onMouseLeave={() => setAboutHover(false)}
            >
              <ScrambleText text="About" isHovering={aboutHover} />
            </a>
            <a
              href="#work"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              onMouseEnter={() => setWorkHover(true)}
              onMouseLeave={() => setWorkHover(false)}
            >
              <ScrambleText text="Work" isHovering={workHover} />
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
            >
              <ScrambleText text="Contact" isHovering={contactHover} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

