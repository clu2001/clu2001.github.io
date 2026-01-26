'use client';

import { useEffect } from 'react';
import Image from 'next/image';

interface ImageModalProps {
  image: {
    src: string;
    title: string;
    width: number;
    height: number;
  };
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    // Only close if clicking the backdrop itself
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-[101]"
        aria-label="Close"
      >
        ×
      </button>

      <div
        className="relative max-w-7xl max-h-[90vh] w-full select-none"
        onClick={(e) => e.stopPropagation()}
        onContextMenu={(e) => e.preventDefault()}
      >
        {/* Image */}
        <div className="relative w-full h-full flex items-center justify-center bg-black p-4">
          <Image
            src={image.src}
            alt={image.title}
            width={image.width}
            height={image.height}
            className="max-w-full max-h-[85vh] w-auto h-auto object-contain pointer-events-none"
            quality={100}
            priority
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
          {/* Invisible overlay to block direct image interaction */}
          <div className="absolute inset-0 z-10" onClick={(e) => e.stopPropagation()} />
        </div>

        {/* Title */}
        <div className="text-center mt-4">
          <h2 className="text-2xl font-medium text-white">{image.title}</h2>
        </div>
      </div>
    </div>
  );
}

