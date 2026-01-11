'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ScrambleText from './ScrambleText';

const categories = ['all', 'prints', 'stickers'];

interface NavbarProps {
  onFilterChange?: (category: string) => void;
  selectedCategory?: string;
}

export default function Navbar({ onFilterChange, selectedCategory = 'all' }: NavbarProps) {
  const [homeHover, setHomeHover] = useState(false);
  const [portfolioHover, setPortfolioHover] = useState(false);
  const [workHover, setWorkHover] = useState(false);
  const [contactHover, setContactHover] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  
  const pathname = usePathname();
  const isPortfolioPage = pathname === '/portfolio';

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl font-bold text-white"
              onMouseEnter={() => setLogoHover(true)}
              onMouseLeave={() => setLogoHover(false)}
            >
              <ScrambleText text="jemisdog" isHovering={logoHover} />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {/* Portfolio with dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setPortfolioHover(true)}
              onMouseLeave={() => setPortfolioHover(false)}
            >
              <Link
                href="/portfolio"
                className={`inline-block text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors ${
                  isPortfolioPage ? 'underline decoration-1 underline-offset-4' : ''
                }`}
              >
                <ScrambleText text="portfolio" isHovering={portfolioHover} />
              </Link>
              
              {/* Dropdown filters - only show on portfolio page */}
              {isPortfolioPage && (
                <div className="absolute top-full left-0 pt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-black/90 backdrop-blur-md border border-gray-700 rounded-md shadow-lg py-2 px-3 min-w-[150px]">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => onFilterChange?.(category)}
                        className={`
                          block w-full text-left px-4 py-2.5 text-sm lowercase tracking-wider transition-colors rounded
                          ${selectedCategory === category 
                            ? 'text-white bg-gray-700 font-medium' 
                            : 'text-gray-300 hover:text-white hover:bg-gray-800'}
                        `}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link
              href="/ocs"
              className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
              onMouseEnter={() => setWorkHover(true)}
              onMouseLeave={() => setWorkHover(false)}
            >
              <ScrambleText text="ocs" isHovering={workHover} />
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
            >
              <ScrambleText text="contact me!" isHovering={contactHover} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-300"
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
