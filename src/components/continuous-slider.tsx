"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Use hero images for the project slider
const projectImages = [
  {
    id: 1,
    src: "/images/hero%201.jpg",
    alt: "Interior design project 1",
  },
  {
    id: 2,
    src: "/images/hero%202.jpg",
    alt: "Interior design project 2",
  },
  {
    id: 3,
    src: "/images/hero%203.jpg",
    alt: "Interior design project 3",
  },
  {
    id: 4,
    src: "/images/hero%204.jpg",
    alt: "Interior design project 4",
  },
  {
    id: 5,
    src: "/images/hero%205.jpg",
    alt: "Interior design project 5",
  },
  {
    id: 6,
    src: "/images/hero%206.jpg",
    alt: "Interior design project 6",
  },
];

export default function ContinuousSlider() {
  const [currentOffset, setCurrentOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffset(prev => prev - 1); // Move continuously left pixel by pixel
    }, 25); // Smooth continuous movement (40fps)

    return () => clearInterval(interval);
  }, []);

  // Reset position seamlessly when needed (this happens off-screen so it's invisible)
  useEffect(() => {
    if (currentOffset <= -800) { // Reset after moving significant distance adjusted for smaller card widths
      setCurrentOffset(0);
    }
  }, [currentOffset]);

  return (
    <section className="py-20 bg-white">
      {/* Full width slider container - no headings */}
      <div className="w-full overflow-hidden">
        <div
          className="flex gap-2 sm:gap-3 md:gap-8"
          style={{
            transform: `translateX(${currentOffset}px)`,
            width: 'fit-content',
            willChange: 'transform'
          }}
        >
          {/* Triple the images for seamless infinite scroll */}
          {[...projectImages, ...projectImages, ...projectImages].map((project, index) => (
            <div
              key={`${project.id}-${Math.floor(index / projectImages.length)}-${index}`}
              className="flex-shrink-0 w-32 sm:w-40 md:w-[480px]" // Small cards for mobile to show 3 at once
            >
              <div className="relative w-full h-32 sm:h-40 md:h-[480px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority={index < 6}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}