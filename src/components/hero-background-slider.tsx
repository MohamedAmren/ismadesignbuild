"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroImages = [
  "/images/hero%201.jpg",
  "/images/hero%202.jpg",
  "/images/hero%203.jpg",
  "/images/hero%204.jpg",
  "/images/hero%205.jpg"
];

export default function HeroBackgroundSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
            index === currentImageIndex ? 'opacity-90' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Hero background ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            onLoad={() => {
              if (index === 0) setIsLoaded(true);
            }}
            onError={(e) => {
              // Fallback to a solid color if image fails to load
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      ))}

    </div>
  );
}