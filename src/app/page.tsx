"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ContactForm from "@/components/contact-form";
import ContinuousSlider from "@/components/continuous-slider";
import HeroBackgroundSlider from "@/components/hero-background-slider";
import { ScrollAnimated, AnimationType } from "@/hooks/useScrollAnimation";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Clock,
  Star,
  MessageSquare,
  Wrench,
  Home as HomeIcon,
  Palette,
  Presentation,
  Ruler,
  PenTool,
  Hammer,
  Building,
  Store,
  ChevronDown,
  Settings,
  MessageCircle,
  Package
} from "lucide-react";

const services = [
  {
    icon: HomeIcon,
    title: "Residential Design & Renovation",
    description: "From apartments to landed homes, including kitchens, wardrobes, and living spaces.",
    image: "Construction & Renovation"
  },
  {
    icon: Building,
    title: "Commercial & Office Fit-Out",
    description: "Retail shops, cafés, restaurants, and corporate offices with branding-focused design.",
    image: "Design & Build"
  },
  {
    icon: Wrench,
    title: "Custom Carpentry & Furniture",
    description: "Wardrobes, kitchen cabinets, TV consoles, partitions, and decorative backdrops.",
    image: "Custom Built-in Furniture"
  },
  {
    icon: Palette,
    title: "Styling & Décor",
    description: "Soft furnishings, lighting, and final touches to complete the space.",
    image: "Flooring & Curtains"
  },
  {
    icon: PenTool,
    title: "2D & 3D Design Visualization",
    description: "Space planning, detailed layouts, and realistic renderings for a clear preview before build.",
    image: "Interior Design + Feng Shui (风水)"
  },
  {
    icon: Settings,
    title: "Project Management & Renovation Works",
    description: "Full on-site execution, scheduling, quality control, and coordination with contractors.",
    image: "Local Authority Submission & Approval"
  }
];

const stats = [
  { number: 10, suffix: "+", label: "Projects Completed" },
  { number: 10, suffix: "+", label: "Years Industry Experience" },
  { number: 50, suffix: "+", label: "Custom Cabinets Installed" },
  { number: 20, suffix: "+", label: "Satisfied Clients in KK & Sabah" }
];

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: "KK & Sabah Expertise",
    description: "Local knowledge and understanding of Sabah's unique style preferences and climate considerations."
  },
  {
    icon: CheckCircle,
    title: "Modern, Functional Designs",
    description: "Contemporary aesthetics combined with practical solutions for everyday living."
  },
  {
    icon: CheckCircle,
    title: "Quality Craftsmanship & Materials",
    description: "We use premium materials and skilled craftsmen to ensure lasting quality."
  },
  {
    icon: CheckCircle,
    title: "End-to-End Project Management",
    description: "From concept to completion, we handle every aspect of your project professionally."
  }
];

const faqData = [
  {
    question: "What services do you provide?",
    answer: "We specialize in interior design, renovation, construction, and design & build solutions, including 2D/3D drawings, custom furniture, flooring, curtains, and authority submissions."
  },
  {
    question: "Do you provide both residential and commercial projects?",
    answer: "Yes, we handle homes, offices, retail, and commercial properties."
  },
  {
    question: "How do I get started with a project?",
    answer: "Contact us with your project details, and we'll arrange a consultation to discuss your ideas and prepare a quotation."
  },
  {
    question: "How long does a renovation or design project take?",
    answer: "It depends on project size and complexity — small works may take weeks, while full projects may take several months."
  },
  {
    question: "Do you provide warranty for your work?",
    answer: "Yes, we provide workmanship warranty, and material warranties are covered by manufacturers."
  },
  {
    question: "Can you work within my budget?",
    answer: "Yes, we'll suggest designs and materials that align with your budget without compromising quality."
  }
];

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "The process often begins with an initial consultation between the designer/architect. Get started from here."
  },
  {
    number: "02",
    title: "Concept Development",
    description: "In this stage, the designer/architect gathers detailed information about the project requirements."
  },
  {
    number: "03",
    title: "Design Development",
    description: "Depending on the project scope and location, the designer/architect may assist the client in obtaining."
  },
  {
    number: "04",
    title: "Permitting & Approvals",
    description: "Depending on the project scope and location, the designer/architect may assist the client. We work to make you 100% happy."
  },
  {
    number: "05",
    title: "Project Closeout",
    description: "Once construction is complete, the designer/architect conducts a final inspection of the project."
  }
];

const testimonials = [
  {
    projectName: "Modern Condo Kitchen",
    projectImage: "/images/hero%201.jpg",
    text: "Isma Design & Build transformed our condo with a modern, functional kitchen. The design perfectly maximizes our space while maintaining style. Highly recommended!",
    author: "Nadia",
    location: "Likas",
    clientImage: "/images/client-1.jpg"
  },
  {
    projectName: "Custom Master Wardrobe",
    projectImage: "/images/hero%202.jpg",
    text: "Professional and reliable service from start to finish. The custom wardrobe exceeded my expectations with smart storage solutions and quality materials.",
    author: "Kelvin",
    location: "Penampang",
    clientImage: "/images/client-2.jpg"
  },
  {
    projectName: "Complete House Renovation",
    projectImage: "/images/hero%203.jpg",
    text: "From start to finish, the team made the renovation stress-free and delivered beautiful results. Every detail was handled professionally.",
    author: "Afiqah",
    location: "Inanam",
    clientImage: "/images/client-3.jpg"
  },
  {
    projectName: "Office Interior Design",
    projectImage: "/images/hero%204.jpg",
    text: "Our office space was completely transformed with modern furniture and efficient layouts. The team understood our business needs perfectly.",
    author: "Marcus",
    location: "Kota Kinabalu",
    clientImage: "/images/client-4.jpg"
  },
  {
    projectName: "Living Room Makeover",
    projectImage: "/images/hero%205.jpg",
    text: "Amazing work on our living room! The new design created so much more space and the custom TV cabinet is exactly what we wanted.",
    author: "Sarah",
    location: "Penampang",
    clientImage: "/images/client-5.jpg"
  }
];

const worksData = [
  { id: 1, title: "Modern Living Room", location: "Kota Kinabalu, Sabah", image: "/images/hero 1.jpg" },
  { id: 2, title: "Custom Kitchen", location: "Penampang, Sabah", image: "/images/hero 2.jpg" },
  { id: 3, title: "Office Interior", location: "Likas, Sabah", image: "/images/hero 3.jpg" },
  { id: 4, title: "Master Bedroom", location: "Inanam, Sabah", image: "/images/hero 4.jpg" },
  { id: 5, title: "Bathroom Renovation", location: "Putatan, Sabah", image: "/images/hero 5.jpg" },
  { id: 6, title: "Dining Area Design", location: "Kota Kinabalu, Sabah", image: "/images/hero 1.jpg" },
  { id: 7, title: "Study Room", location: "Penampang, Sabah", image: "/images/hero 2.jpg" },
  { id: 8, title: "Commercial Fit-out", location: "Likas, Sabah", image: "/images/hero 3.jpg" },
  { id: 9, title: "Wardrobe Design", location: "Inanam, Sabah", image: "/images/hero 4.jpg" },
  { id: 10, title: "Outdoor Patio", location: "Kota Kinabalu, Sabah", image: "/images/hero 5.jpg" }
];

// Featured packages for home page - 3 best packages
const featuredPackages = [
  {
    id: "premium-design",
    name: "Premium Design Package",
    price: "RM 35,000",
    originalPrice: "RM 42,000",
    category: "Interior Design",
    featured: true,
    rating: 4.9,
    reviews: 18,
    image: "/images/Design & Build.jpg",
    description: "Complete interior design solution with custom elements and premium finishes.",
    highlights: [
      "3D visualization and walkthroughs",
      "Custom furniture design",
      "Premium material selection",
      "6 months workmanship warranty"
    ],
    duration: "8-12 weeks"
  },
  {
    id: "smart-home",
    name: "Smart Home Integration Package",
    price: "RM 35,000",
    originalPrice: "RM 42,000",
    category: "Technology",
    featured: true,
    rating: 4.8,
    reviews: 26,
    image: "/images/Design & Build.jpg",
    description: "Complete smart home automation system with modern technology integration.",
    highlights: [
      "Automated lighting control system",
      "Smart thermostat and climate control",
      "Security system integration",
      "12 months technical warranty"
    ],
    duration: "4-6 weeks"
  },
  {
    id: "luxury-suite",
    name: "Luxury Suite Package",
    price: "RM 85,000",
    originalPrice: "RM 100,000",
    category: "Luxury",
    featured: true,
    rating: 5.0,
    reviews: 8,
    image: "/images/Interior Design + Feng Shui (风水).jpg",
    description: "Ultimate luxury package with premium materials and bespoke design elements.",
    highlights: [
      "Feng Shui consultation",
      "Premium 3D visualization and VR walkthrough",
      "Smart home integration",
      "12 months comprehensive warranty"
    ],
    duration: "16-24 weeks"
  }
];

export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [animatedStats, setAnimatedStats] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [isScrollDeleting, setIsScrollDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const [worksSlideIndex, setWorksSlideIndex] = useState(0);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappMessage = (packageName: string, price: string) => {
    return `Hi Isma Design & Build! I'm interested in the ${packageName} (${price}). Can you provide more details?`;
  };

  const whatsappLink = (message: string) => {
    return `https://wa.me/60189023676?text=${encodeURIComponent(message)}`;
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const nextWorksSlide = () => {
    setWorksSlideIndex(prev => {
      const newIndex = prev + 1;
      // When we reach the end of first set (index 10), reset to start (index 0) without animation
      if (newIndex >= worksData.length) {
        // Use setTimeout to reset position without transition
        setTimeout(() => {
          const sliderElement = document.querySelector('[style*="translateX"]') as HTMLElement;
          if (sliderElement) {
            sliderElement.style.transition = 'none';
            sliderElement.style.transform = `translateX(-${0 * (100 / 3)}%)`;
            // Re-enable transition after reset
            setTimeout(() => {
              sliderElement.style.transition = 'transform 300ms ease-in-out';
            }, 50);
          }
        }, 300);
        return 0;
      }
      return newIndex;
    });
  };

  const previousWorksSlide = () => {
    setWorksSlideIndex(prev => {
      const newIndex = prev - 1;
      // When going before start (index -1), jump to end of first set (index 9) without animation
      if (newIndex < 0) {
        // Use setTimeout to reset position without transition
        setTimeout(() => {
          const sliderElement = document.querySelector('[style*="translateX"]') as HTMLElement;
          if (sliderElement) {
            sliderElement.style.transition = 'none';
            sliderElement.style.transform = `translateX(-${(worksData.length - 1) * (100 / 3)}%)`;
            // Re-enable transition after reset
            setTimeout(() => {
              sliderElement.style.transition = 'transform 300ms ease-in-out';
            }, 50);
          }
        }, 300);
        return worksData.length - 1;
      }
      return newIndex;
    });
  };

  const goToWorksSlide = (index: number) => {
    setWorksSlideIndex(index);
  };

  const animateNumber = (targetNumber: number, index: number, duration: number = 2000) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(targetNumber * progress);

      setAnimatedStats(prev => {
        const newStats = [...prev];
        newStats[index] = current;
        return newStats;
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            stats.forEach((stat, index) => {
              setTimeout(() => {
                animateNumber(stat.number, index);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  // Typing animation effect on page load
  useEffect(() => {
    const fullText = "Design. Build. Live Better.";
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
        if (currentIndex <= fullText.length) {
          setTimeout(typeText, 80); // Typing speed
        } else {
          // Hide cursor when typing is complete
          setTimeout(() => setShowCursor(false), 1000);
        }
      }
    };

    // Start typing after a small delay
    setShowCursor(true);
    setTimeout(typeText, 500);
  }, []);

  // Scroll-based deletion effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const scrollProgress = Math.min(scrollY / (heroHeight * 0.3), 1); // Start deleting at 30% scroll

      if (scrollProgress > 0) {
        const fullText = "Design. Build. Live Better.";
        const remainingLength = Math.floor(fullText.length * (1 - scrollProgress));
        setDisplayedText(fullText.slice(0, remainingLength));
        setIsScrollDeleting(true);
        setShowCursor(true); // Show cursor during deletion
      } else {
        if (isScrollDeleting) {
          // Re-type when scrolling back to top
          const fullText = "Design. Build. Live Better.";
          setDisplayedText(fullText);
          setIsScrollDeleting(false);
          // Hide cursor after re-typing
          setTimeout(() => setShowCursor(false), 1000);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrollDeleting]);


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-gray-900 text-gray-900 overflow-hidden">
        <HeroBackgroundSlider />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-7xl mx-auto flex justify-center items-center">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-white drop-shadow-lg md:whitespace-nowrap">
              {displayedText.split('Live Better.').map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && displayedText.includes('Live Better.') && (
                    <span className="text-yellow-300">Live Better.</span>
                  )}
                </span>
              ))}
              {showCursor && <span className="animate-pulse">|</span>}
            </h1>
            <div className="hidden">
              <h2>Best interior design in KK · Cabinet KK · Wardrobe KK</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Projects Slider */}
      <ContinuousSlider />

      {/* About Us Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side */}
            <ScrollAnimated animationType="slide-up" threshold={0.1} delay={100}>
              <div className="text-center lg:text-left">
                <div className="text-sm text-gray-600 font-semibold mb-4">About Us</div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Isma Design & Build</h2>
              </div>
            </ScrollAnimated>

            {/* Right Side */}
            <ScrollAnimated animationType="slide-up" threshold={0.1} delay={400}>
              <div className="flex items-center h-full">
                <p className="text-sm text-gray-600 leading-relaxed text-center lg:text-left">
                  We are a design and build firm driven by the belief that every space should tell a story.
Our team specializes in transforming visions into reality through innovative architectural and interior design solutions crafted with precision and creativity.<br />
                  As a full-service firm, we manage each stage of the process from initial concept and planning to construction and finishing, ensuring quality materials, skilled craftsmanship, and attention to detail. With every project, our mission is to create functional, timeless spaces that reflect the lifestyle, brand, and aspirations of our clients.
                </p>
              </div>
            </ScrollAnimated>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimated animationType="slide-down" threshold={0.1} delay={200}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Our Services</h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                From design to completion, we offer comprehensive solutions for your interior needs.
              </p>
            </div>
          </ScrollAnimated>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 items-end min-h-[400px] md:min-h-[600px]">
            {services.map((service, index) => {
              // Define different image sizes for variety with artistic positioning
              const imageSizes = [
                'aspect-[4/5]',      // Interior Design + Feng Shui
                'aspect-[3/4]',      // Design & Build
                'aspect-[5/6]',      // Construction & Renovation
                'aspect-[4/5]',      // Custom Built-in Furniture
                'aspect-[3/4]',      // Flooring & Curtains
                'aspect-[5/6]'       // Local Authority
              ];

              // Define alignment classes for artistic positioning
              const alignmentClasses = [
                'self-center',       // Interior Design + Feng Shui
                'self-start',        // Design & Build
                'self-end',          // Construction & Renovation
                'self-center',       // Custom Built-in Furniture
                'self-start',        // Flooring & Curtains
                'self-end'           // Local Authority
              ];

              // Define different animation types for variety
              const animationTypes: AnimationType[] = [
                'slide-up',           // Interior Design + Feng Shui
                'scale-in',          // Design & Build
                'slide-left',         // Construction & Renovation
                'slide-up',          // Custom Built-in Furniture
                'slide-right',        // Flooring & Curtains
                'slide-down'         // Local Authority
              ];

              return (
                <ScrollAnimated
                  key={index}
                  animationType={animationTypes[index]}
                  delay={index * 200}
                  threshold={0.05}
                  className={`${alignmentClasses[index]}`}
                >
                  <div className="group cursor-pointer flex flex-col justify-end">
                    {/* Service Image */}
                    <div className={`relative ${imageSizes[index]} mb-6 overflow-hidden `}>
                      <Image
                        src={`/images/${service.image}.jpg`}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          // Fallback to a placeholder color background
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback colored background */}
                      <div
                        className="absolute inset-0 hidden items-center justify-center "
                        style={{
                          backgroundColor: ['#F3F4F6', '#FEF3C7', '#DBEAFE', '#FCE7F3', '#F0F9FF', '#ECFCCB'][index % 6]
                        }}
                      >
                        <service.icon className="h-12 w-12" style={{color: '#003153'}} />
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="text-center px-2">
                      <h3 className="text-base font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm max-w-xs mx-auto">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimated>
              );
            })}
          </div>
        </div>
      </section>

      {/* Materials & Brands We Trust */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimated animationType="slide-down" threshold={0.1} delay={150}>
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">We Always Use High-Quality Materials</h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                To ensure durability and a premium finish, we work only with trusted brands and certified suppliers.
              </p>
            </div>
          </ScrollAnimated>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 md:gap-1 items-center justify-items-center max-w-3xl mx-auto">
            {/* Partner Brands */}
            {[
              { name: "Dulux", logo: "/Dulux Logo Vector.svg" },
              { name: "Formica", logo: "/formica.svg" },
              { name: "Nippon Paint", logo: "/Nippon Paint Logo Vector.svg" },
              { name: "Niro Granite", logo: "/Niro Granite_idqVnhRTbV_0.png" },
              { name: "Pergo", logo: "/pergo-3.svg" }
            ].map((brand, index) => {
              const brandAnimations: AnimationType[] = ['slide-up', 'slide-left', 'scale-in', 'slide-right', 'slide-up'];
              return (
                <ScrollAnimated
                  key={index}
                  animationType={brandAnimations[index]}
                  delay={index * 180}
                  threshold={0.05}
                >
                  <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
                    <div className="flex items-center justify-center p-1">
                    {/* Brand Logo - grayscale by default, colored on hover */}
                    <div className="w-20 h-16 flex items-center justify-center">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={80}
                        height={64}
                        className="object-contain filter grayscale group-hover:filter-none transition-all duration-300"
                        onError={(e) => {
                          // Fallback to a placeholder if logo fails to load
                          e.currentTarget.style.display = 'none';
                          const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                          if (nextElement) {
                            nextElement.style.display = 'flex';
                          }
                        }}
                      />
                      {/* Fallback placeholder */}
                      <div className="w-16 h-12 bg-gray-200 rounded filter grayscale group-hover:filter-none group-hover:bg-yellow-200 transition-all hidden"></div>
                    </div>
                    </div>
                  </div>
                </ScrollAnimated>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 md:py-24 text-black bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
            {stats.map((stat, index) => {
              const statAnimations: AnimationType[] = ['slide-up', 'slide-down', 'slide-left', 'slide-right'];
              return (
                <ScrollAnimated
                  key={index}
                  animationType={statAnimations[index]}
                  delay={index * 250}
                  threshold={0.2}
                >
                <div className="space-y-2 md:space-y-4">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-semibold">
                    {animatedStats[index]}{stat.suffix}
                  </div>
                  <div className="text-sm font-semibold">{stat.label}</div>
                </div>
                </ScrollAnimated>
              );
            })}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimated animationType="slide-up" threshold={0.1} delay={200}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-sm text-gray-600 max-w-3xl mx-auto">
                We bring together experience, quality materials, and personalized service to deliver exceptional results.
              </p>
            </div>
          </ScrollAnimated>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {/* Left Column - Three Cards */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              {/* Top Row - Trusted Design & High-Quality Materials in same row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Card 1 - Trusted Design & Build Firm */}
                <ScrollAnimated animationType="slide-right" delay={100} threshold={0.05}>
                  <div className="bg-gray-100  p-6 md:p-8">
                    <div className="w-12 h-12 bg-white  flex items-center justify-center mb-6">
                      <CheckCircle className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Trusted Design & Build Firm</h3>
                    <p className="text-gray-600 leading-relaxed">
                      A professional team in KK with over 10 years of experience delivering quality interior and construction projects.
                    </p>
                  </div>
                </ScrollAnimated>

                {/* Card 2 - High-Quality Materials & Brands */}
                <ScrollAnimated animationType="scale-in" delay={250} threshold={0.05}>
                  <div className="bg-gray-100  p-6 md:p-8">
                    <div className="w-12 h-12 bg-white  flex items-center justify-center mb-6">
                      <CheckCircle className="h-6 w-6 text-gray-700" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">High-Quality Materials & Brands</h3>
                    <p className="text-gray-600 leading-relaxed">
                     We use reliable brands such as Nippon Paint, Blum, and Formica, trusted worldwide for durability and premium finishes.
                    </p>
                  </div>
                </ScrollAnimated>
              </div>

              {/* Bottom Row - Tailored Solutions */}
              <ScrollAnimated animationType="slide-up" delay={400} threshold={0.05}>
                <div className="bg-gray-100  p-8">
                  <div className="w-12 h-12 bg-white  flex items-center justify-center mb-6">
                    <CheckCircle className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">Tailored Solutions for Every Client</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Each project is customized to reflect your lifestyle, brand, or business goals — ensuring spaces that are both functional and timeless.
                  </p>
                </div>
              </ScrollAnimated>
            </div>

            {/* Right Column - Large Card (Top to Bottom) */}
            <div className="lg:col-span-1">
              <ScrollAnimated animationType="slide-down" delay={350} threshold={0.05}>
                <div className="bg-gray-100  p-8 h-full flex flex-col">
                  <div className="w-12 h-12 bg-white  flex items-center justify-center mb-6">
                    <CheckCircle className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-2">End-to-End Project Management</h3>
                  <div className="flex-grow">
                    <p className="text-gray-600 leading-relaxed">
                     We manage every stage of the process with precision, creativity, and close attention to detail. Whether you’re planning a full-scale home renovation. Our experienced team ensures seamless execution from start to finish. We believe that great design is not just about aesthetics but also about functionality, comfort, and lasting value. With clear communication, reliable project management, and the use of trusted materials, we deliver results that not only meet expectations but create spaces where people truly enjoy living and working.
                    </p>
                  </div>
                </div>
              </ScrollAnimated>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Left side - Title */}
            <ScrollAnimated animationType="slide-left" threshold={0.2} className="lg:col-span-1">
              <div className="text-gray-300 text-sm font-semibold tracking-wider mb-4">SERVICES</div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                Our Working Process
              </h2>
            </ScrollAnimated>

            {/* Right side - Process steps */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {processSteps.map((step, index) => (
                  <ScrollAnimated
                    key={index}
                    animationType={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                    delay={index * 200}
                    threshold={0.1}
                  >
                    <div className="transform transition-transform duration-300 hover:-translate-y-3 cursor-pointer">
                      <div className="text-gray-400 text-sm font-semibold mb-4">{step.number}</div>
                      <h3 className="text-base font-semibold text-white mb-4">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </ScrollAnimated>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Works Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimated animationType="fade-in" threshold={0.2}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Our Works</h2>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Explore some of our recent projects across Kota Kinabalu and Sabah.
              </p>
            </div>
          </ScrollAnimated>

          {/* Works Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out gap-8 lg:gap-12"
                style={{
                  transform: `translateX(-${worksSlideIndex * (100 / 3)}%)`
                }}
              >
                {/* Duplicate projects for seamless infinite scroll: [original] + [duplicate] */}
                {[...worksData, ...worksData].map((project, index) => {
                  // Define different image sizes for variety
                  const imageSizes = [
                    'aspect-[4/5]',      // Standard
                    'aspect-[3/4]',      // Shorter/wider
                    'aspect-[5/6]'       // Taller
                  ];

                  return (
                    <div key={`${project.id}-${Math.floor(index / worksData.length)}`} className="w-1/3 md:w-1/3 flex-shrink-0 flex flex-col justify-end">
                      <ScrollAnimated
                        animationType={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                        delay={index * 50}
                        threshold={0.1}
                        className="flex flex-col justify-end"
                      >
                        <div className="group cursor-pointer flex flex-col justify-end">
                          {/* Project Image */}
                          <div className={`relative ${imageSizes[index % 3]} mb-6 overflow-hidden `}>
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Project Content */}
                          <div className="text-center px-2">
                            <div className="flex items-center justify-center space-x-2 mb-3">
                              <h3 className="text-base font-semibold text-gray-900">{project.title}</h3>
                              <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                            </div>
                            <p className="text-gray-600 text-sm">
                              {project.location}
                            </p>
                          </div>
                        </div>
                      </ScrollAnimated>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={previousWorksSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white  p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ArrowRight className="h-5 w-5 text-gray-600 rotate-180" />
            </button>

            <button
              onClick={nextWorksSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white  p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ArrowRight className="h-5 w-5 text-gray-600" />
            </button>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: worksData.length }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToWorksSlide(index)}
                  className={`w-2 h-2  transition-colors ${
                    index === worksSlideIndex ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Best Packages */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimated animationType="fade-in" threshold={0.1}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Our Best Packages</h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Discover our most popular design and build packages, carefully crafted to meet different needs and budgets.
              </p>
            </div>
          </ScrollAnimated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {featuredPackages.map((pkg, index) => (
              <ScrollAnimated
                key={pkg.id}
                animationType="slide-up"
                delay={index * 200}
                threshold={0.1}
              >
                <div className="group relative bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden h-full flex flex-col">
                  {pkg.featured && (
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 text-xs font-semibold rounded z-10">
                      Most Popular
                    </div>
                  )}

                  {/* Package Image */}
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {pkg.originalPrice && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                        Save {Math.round(((parseFloat(pkg.originalPrice.replace(/[^0-9]/g, '')) - parseFloat(pkg.price.replace(/[^0-9]/g, ''))) / parseFloat(pkg.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                      </div>
                    )}
                  </div>

                  {/* Package Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {pkg.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{pkg.rating}</span>
                        <span className="text-xs text-gray-500">({pkg.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {pkg.name}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {pkg.description}
                    </p>

                    {/* Key Highlights */}
                    <div className="mb-4">
                      <ul className="space-y-1">
                        {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-baseline space-x-2">
                        <span className="text-xl font-bold text-gray-900">{pkg.price}</span>
                        {pkg.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{pkg.duration}</span>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2 mt-auto">
                      <Link
                        href="/offers"
                        className="w-full text-white hover:bg-blue-800 transition-colors py-2 px-4 text-sm font-medium text-center rounded"
                        style={{backgroundColor: '#003153'}}
                      >
                        View Details
                      </Link>
                      <a
                        href={whatsappLink(whatsappMessage(pkg.name, pkg.price))}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full border border-gray-300 text-gray-700 text-center py-2 px-4 text-sm font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2 rounded"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Get Quote</span>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollAnimated>
            ))}
          </div>

          {/* Call to Action */}
          <ScrollAnimated animationType="fade-in" threshold={0.1} delay={600}>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Looking for more options? Explore our complete range of packages.
              </p>
              <Link
                href="/offers"
                className="inline-flex items-center space-x-2 text-white hover:bg-blue-800 transition-colors py-3 px-6 font-medium rounded"
                style={{backgroundColor: '#003153'}}
              >
                <Package className="w-5 h-5" />
                <span>View All Packages</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollAnimated>
        </div>
      </section>

    </div>
  );
}