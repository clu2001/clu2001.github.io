'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import ImageModal from '../components/ImageModal';

// Your artwork data - you'll add your actual images here
const artworks = [
  {
    id: 1,
    src: '/erm6.png', // Replace with your actual image paths
    title: 'Untitled #1',
    category: 'digital',
    width: 1920,
    height: 3000,
  },
  {
    id: 2,
    src: '/erm6.png',
    title: 'Untitled #2',
    category: 'painting',
    width: 1920,
    height: 1080,
  },
  {
    id: 3,
    src: '/erm6.png',
    title: 'Untitled #3',
    category: 'digital',
    width: 1200,
    height: 1600,
  },
  // Add more artworks here
];

const categories = ['all', 'digital', 'painting', 'drawing', 'mixed media'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null);

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  return (
    <div className="relative font-sans">
      <Navbar 
        onFilterChange={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      
      {/* Background Image - Blurred and Static */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/erm6.png"
          alt="Background"
          fill
          className="object-cover object-top blur-sm"
          priority
          quality={100}
        />
        {/* Optional: Add overlay to reduce brightness */}
        <div className="absolute inset-0 bg-white/20 dark:bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-screen">
        {/* Masonry Grid Gallery - simplified padding */}
        <div className="pt-24 px-8 pb-16">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
            {filteredArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="relative group cursor-pointer mb-4 break-inside-avoid"
                onClick={() => setSelectedImage(artwork)}
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <Image
                    src={artwork.src}
                    alt={artwork.title}
                    width={artwork.width}
                    height={artwork.height}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  
                  {/* Frosted Overlay on Hover */}
                  <div className="absolute inset-0 bg-white/0 backdrop-blur-0 group-hover:bg-white/30 group-hover:backdrop-blur-sm dark:group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <h3 className="text-lg font-medium text-black dark:text-white px-4 text-center">
                      {artwork.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Full-Size View */}
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </div>
  );
}

