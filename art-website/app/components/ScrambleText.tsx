'use client';

import { useState, useEffect, useRef } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  href?: string;
  isHovering?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function ScrambleText({ 
  text, 
  className = '', 
  href,
  isHovering: externalIsHovering,
  onMouseEnter,
  onMouseLeave 
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [internalIsHovering, setInternalIsHovering] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);

  // Use external hover state if provided, otherwise use internal
  const isHovering = externalIsHovering !== undefined ? externalIsHovering : internalIsHovering;

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

  useEffect(() => {
    if (!isHovering) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const speed = 20; // milliseconds per frame

    if (animationRef.current) {
      clearInterval(animationRef.current);
    }

    animationRef.current = setInterval(() => {
      setDisplayText(() => {
        return text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            
            // Reveal characters progressively from left to right
            if (index < iteration) {
              return text[index];
            }
            
            // Scramble unrevealed characters
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
      });

      iteration += 1 / 3; // Controls how fast letters reveal

      if (iteration >= text.length) {
        if (animationRef.current) {
          clearInterval(animationRef.current);
        }
        setDisplayText(text);
      }
    }, speed);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [isHovering, text, chars]);

  const content = (
    <span
      onMouseEnter={onMouseEnter || (() => setInternalIsHovering(true))}
      onMouseLeave={onMouseLeave || (() => setInternalIsHovering(false))}
      className={className}
    >
      {displayText}
    </span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}

