'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ScrambleText from './ScrambleText';

const categories = ['all', 'digital', 'painting', 'drawing', 'mixed media'];

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
              className="text-2xl font-bold text-gray-900 dark:text-white"
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
              className="relative"
              onMouseEnter={() => setPortfolioHover(true)}
              onMouseLeave={() => setPortfolioHover(false)}
            >
              <Link
                href="/portfolio"
                className={`text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors ${
                  isPortfolioPage ? 'underline decoration-1 underline-offset-4' : ''
                }`}
              >
                <ScrambleText text="portfolio" isHovering={portfolioHover} />
              </Link>
              
              {/* Dropdown filters - only show on portfolio page */}
              {isPortfolioPage && portfolioHover && (
                <div className="absolute top-full left-0 mt-2 z-50">
                  <div className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-md shadow-lg py-2 px-3 min-w-[150px]">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => onFilterChange?.(category)}
                        className={`
                          block w-full text-left px-3 py-2 text-sm lowercase tracking-wider transition-colors rounded
                          ${selectedCategory === category 
                            ? 'text-black dark:text-white bg-gray-100 dark:bg-gray-900 font-medium' 
                            : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900'}
                        `}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <a
              href="#ocs"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              onMouseEnter={() => setWorkHover(true)}
              onMouseLeave={() => setWorkHover(false)}
            >
              <ScrambleText text="ocs" isHovering={workHover} />
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
            >
              <ScrambleText text="contact me!" isHovering={contactHover} />
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
