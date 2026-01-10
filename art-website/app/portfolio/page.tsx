'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import ImageModal from '../components/ImageModal';

// Your artwork data - you'll add your actual images here
// Recommended: Optimize images to ~1200-1500px wide, 72 DPI, saved at 80-90% quality
// This maintains visual quality while protecting high-res originals
const artworks = [
  {
    id: 1,
    src: '/angel.png',
    title: 'Angel',
    category: 'digital',
    width: 1600,
    height: 1800,
  },
  {
    id: 2,
    src: '/boy.png',
    title: 'Boy',
    category: 'digital',
    width: 1400,
    height: 1400,
  },
  {
    id: 3,
    src: '/bruh (1).png',
    title: 'Bruh',
    category: 'digital',
    width: 1800,
    height: 2200,
  },
  {
    id: 4,
    src: '/childe.png',
    title: 'Childe',
    category: 'digital',
    width: 1500,
    height: 1500,
  },
  {
    id: 5,
    src: '/eyes.png',
    title: 'Eyes',
    category: 'digital',
    width: 1600,
    height: 1400,
  },
  {
    id: 6,
    src: '/fisherman2(1).png',
    title: 'Fisherman',
    category: 'digital',
    width: 1700,
    height: 2000,
  },
  {
    id: 7,
    src: '/girl.png',
    title: 'Girl',
    category: 'digital',
    width: 2000,
    height: 2400,
  },
  {
    id: 8,
    src: '/Illustration4.png',
    title: 'Illustration 4',
    category: 'digital',
    width: 1500,
    height: 1600,
  },
  {
    id: 9,
    src: '/look -g.png',
    title: 'Look',
    category: 'digital',
    width: 1800,
    height: 2200,
  },
  {
    id: 10,
    src: '/pool all together.png',
    title: 'Pool All Together',
    category: 'digital',
    width: 1600,
    height: 1800,
  },
  {
    id: 11,
    src: '/pool.png',
    title: 'Pool',
    category: 'digital',
    width: 1400,
    height: 1600,
  },
  {
    id: 12,
    src: '/summer.png',
    title: 'Summer',
    category: 'digital',
    width: 1900,
    height: 2300,
  },
  {
    id: 13,
    src: '/thumbnail 1 finished.png',
    title: 'Thumbnail 1',
    category: 'digital',
    width: 2200,
    height: 2600,
  },
  {
    id: 14,
    src: '/thumbnail 2 finished.png',
    title: 'Thumbnail 2',
    category: 'digital',
    width: 1500,
    height: 1500,
  },
  {
    id: 15,
    src: '/thumbnail 3 finished.png',
    title: 'Thumbnail 3',
    category: 'digital',
    width: 1600,
    height: 1400,
  },
  {
    id: 16,
    src: '/thumbnail 4 finished.png',
    title: 'Thumbnail 4',
    category: 'digital',
    width: 1500,
    height: 1700,
  },
  {
    id: 17,
    src: '/you are my ghost.png',
    title: 'You Are My Ghost',
    category: 'digital',
    width: 2000,
    height: 2500,
  },
  {
    id: 18,
    src: '/erm6.png',
    title: 'Erm6',
    category: 'digital',
    width: 1600,
    height: 2400,
  },
  {
    id: 19,
    src: '/bird.PNG',
    title: 'Bird',
    category: 'digital',
    width: 2400,
    height: 2800,
  },
];

const categories = ['all', 'prints', 'stickers'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof artworks[0] | null>(null);

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  return (
    <div className="relative font-sans" onContextMenu={(e) => e.preventDefault()}>
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
                className="relative group cursor-pointer mb-4 break-inside-avoid select-none"
                onClick={() => setSelectedImage(artwork)}
                onContextMenu={(e) => e.preventDefault()}
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <Image
                    src={artwork.src}
                    alt={artwork.title}
                    width={artwork.width}
                    height={artwork.height}
                    className="w-full h-auto transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  
                  {/* Frosted Overlay on Hover */}
                  <div className="absolute inset-0 bg-white/0 backdrop-blur-0 group-hover:bg-white/30 group-hover:backdrop-blur-sm dark:group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                    <h3 className="text-lg font-medium text-black dark:text-white px-4 text-center">
                      {artwork.title}
                    </h3>
                  </div>
                  
                  {/* Invisible overlay to block direct image interaction */}
                  <div className="absolute inset-0 z-10" />
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

