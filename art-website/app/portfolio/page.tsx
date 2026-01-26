'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import ImageModal from '../components/ImageModal';

const artworks = [
  {
    id: 1,
    src: '/angel.png',
    title: 'Angel',
    category: 'prints',
    width: 800, 
    height: 900,
  },
  {
    id: 2,
    src: '/boy.png',
    title: 'Boy',
    category: 'prints',
    width: 700,
    height: 700,
  },
  {
    id: 3,
    src: '/bruh (1).png',
    title: 'You Are My Everything',
    category: 'prints',
    width: 900,
    height: 1100,
  },
  {
    id: 4,
    src: '/childe.png',
    title: 'Childe',
    category: 'prints',
    width: 750,
    height: 750,
  },
  {
    id: 5,
    src: '/eyes.png',
    title: 'Eyes',
    category: 'prints',
    width: 800,
    height: 700,
  },
  {
    id: 6,
    src: '/fisherman2(1).png',
    title: 'Fisherman',
    category: 'prints',
    width: 850,
    height: 1000,
  },
  {
    id: 7,
    src: '/girl.png',
    title: 'Girl',
    category: 'prints',
    width: 1000,
    height: 1200,
  },
  {
    id: 8,
    src: '/Illustration4.png',
    title: 'Jack Wallace',
    category: 'prints',
    width: 750,
    height: 800,
  },
  {
    id: 9,
    src: '/look -g.png',
    title: 'Look',
    category: 'prints',
    width: 900,
    height: 1100,
  },
  {
    id: 10,
    src: '/pool all together.png',
    title: 'Pool & Boy & Girl',
    category: 'prints',
    width: 800,
    height: 900,
  },
  {
    id: 11,
    src: '/pool.png',
    title: 'Pool',
    category: 'prints',
    width: 700,
    height: 800,
  },
  {
    id: 12,
    src: '/summer.png',
    title: 'Summer',
    category: 'prints',
    width: 950,
    height: 1150,
  },
  {
    id: 13,
    src: '/thumbnail 1 finished.png',
    title: 'Thumbnail 1',
    category: 'prints',
    width: 1100,
    height: 1300,
    featured: true, // ← Featured
  },
  {
    id: 14,
    src: '/thumbnail 2 finished.png',
    title: 'Thumbnail 2',
    category: 'prints',
    width: 750,
    height: 750,
    featured: true, // ← Featured
  },
  {
    id: 15,
    src: '/thumbnail 3 finished.png',
    title: 'Thumbnail 3',
    category: 'prints',
    width: 800,
    height: 700,
    featured: true, // ← Featured
  },
  {
    id: 16,
    src: '/thumbnail 4 finished.png',
    title: 'Thumbnail 4',
    category: 'prints',
    width: 750,
    height: 850,
    featured: true, // ← Featured
  },
  {
    id: 17,
    src: '/you are my ghost.png',
    title: 'You Are My Ghost',
    category: 'prints',
    width: 1000,
    height: 1250,
    featured: true, // ← Featured
  },
  {
    id: 18,
    src: '/erm6.png',
    title: 'Did you mean that?',
    category: 'prints',
    width: 800,
    height: 1200,
  },
  {
    id: 19,
    src: '/bird.PNG',
    title: 'Bird',
    category: 'prints',
    width: 1200,
    height: 1800,
  },
  {
    id: 20,
    src: '/jem.jpg',
    title: 'Jem!',
    category: 'stickers',
    width: 1200,
    height: 1800,
  },
  {
    id: 21,
    src: '/sticker lads.png',
    title: 'LADs sticker',
    category: 'stickers',
    width: 1200,
    height: 1800,
  },
  {
    id: 23,
    src: '/sticker - caleb 1.png',
    title: 'Caleb sticker',
    category: 'stickers',
    width: 1200,
    height: 1800,
  },
  {
    id: 24,
    src: '/sticker - zayne 1.png',
    title: 'Zayne sticker',
    category: 'stickers',
    width: 1200,
    height: 1800,
  },
  {
    id: 25,
    src: '/forget me not.png',
    title: 'Forget me not',
    category: 'prints',
    width: 1200,
    height: 1800,
  },
  {
    id: 26,
    src: '/ivantill chess.png',
    title: 'Ivan & Till Chess',
    category: 'prints',
    width: 1200,
    height: 1800,
  },
  {
    id: 27,
    src: '/ok sure.png',
    title: 'American',
    category: 'prints',
    width: 1200,
    height: 1800,
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
        {/* CSS Grid Gallery with Priority Sizing */}
        <div className="pt-24 px-8 pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 auto-rows-[200px] gap-4">
            {filteredArtworks.map((artwork, index) => {
              // Featured images span 2 columns and 2 rows (4x size)
              const gridClass = artwork.featured 
                ? 'col-span-2 row-span-2' 
                : 'col-span-1 row-span-1';
              
              return (
                <div
                  key={artwork.id}
                  className={`relative group cursor-pointer select-none ${gridClass}`}
                  onClick={() => setSelectedImage(artwork)}
                  onContextMenu={(e) => e.preventDefault()}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded h-full">
                    <Image
                      src={artwork.src}
                      alt={artwork.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none"
                      sizes={artwork.featured 
                        ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                        : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 16vw"
                      }
                      loading={index < 10 ? "eager" : "lazy"}
                      priority={index < 6}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    
                    {/* Frosted Overlay on Hover */}
                    <div className="absolute inset-0 bg-white/0 backdrop-blur-0 group-hover:bg-white/30 group-hover:backdrop-blur-sm transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 pointer-events-none">
                      <h3 className="text-lg font-medium text-white px-4 text-center">
                        {artwork.title}
                      </h3>
                    </div>
                    
                    {/* Invisible overlay to block direct image interaction */}
                    <div className="absolute inset-0 z-10" />
                  </div>
                </div>
              );
            })}
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

