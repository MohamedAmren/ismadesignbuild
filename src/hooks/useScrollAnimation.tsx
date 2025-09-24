"use client";

import React, { useEffect, useRef, useState } from 'react';

export type AnimationType = 'fade-in' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down' | 'scale-in';

interface UseScrollAnimationOptions {
  threshold?: number;
  delay?: number;
  duration?: number;
  animationType?: AnimationType;
}

export function useScrollAnimation({
  threshold = 0.1,
  delay = 0,
  duration = 800,
  animationType = 'fade-in'
}: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, delay, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-in-out`;

    if (!isVisible) {
      switch (animationType) {
        case 'fade-in':
          return `${baseClasses} opacity-0`;
        case 'slide-left':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'slide-right':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'slide-up':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'slide-down':
          return `${baseClasses} opacity-0 -translate-y-8`;
        case 'scale-in':
          return `${baseClasses} opacity-0 scale-98`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    return `${baseClasses} opacity-100 translate-x-0 translate-y-0 scale-100`;
  };

  return {
    ref: elementRef,
    className: getAnimationClasses(),
    isVisible,
    hasAnimated
  };
}

// Utility component for easy animation wrapping
interface ScrollAnimatedProps {
  children: React.ReactNode;
  animationType?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export function ScrollAnimated({
  children,
  animationType = 'fade-in',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = ''
}: ScrollAnimatedProps) {
  const { ref, className: animationClassName } = useScrollAnimation({
    animationType,
    delay,
    duration,
    threshold
  });

  return (
    <div
      ref={ref}
      className={`${animationClassName} ${className}`}
    >
      {children}
    </div>
  );
}