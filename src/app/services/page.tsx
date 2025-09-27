"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollAnimated, AnimationType } from "@/hooks/useScrollAnimation";
import HeroBackgroundSlider from "@/components/hero-background-slider";
import {
  Palette,
  Wrench,
  Home as HomeIcon,
  Building,
  Presentation,
  Store,
  CheckCircle,
  Star,
  Quote,
  ChevronDown,
  ArrowRight,
  Ruler,
  PenTool
} from "lucide-react";

const services = [
  {
    id: "residential-design",
    icon: HomeIcon,
    title: "Residential Design & Renovation",
    description: "From apartments to landed homes, including kitchens, wardrobes, and living spaces.",
    fullDescription: "Complete residential solutions from apartments to landed homes. We specialize in transforming living spaces including modern kitchens, custom wardrobes, comfortable bedrooms, and functional living areas that reflect your lifestyle and personality.",
    image: "/images/Construction & Renovation.jpg",
    features: [
      "Apartment and landed home design",
      "Kitchen design and renovation",
      "Custom wardrobe solutions",
      "Living space optimization",
      "Bedroom and bathroom design"
    ]
  },
  {
    id: "commercial-fitout",
    icon: Building,
    title: "Commercial & Office Fit-Out",
    description: "Retail shops, cafés, restaurants, and corporate offices with branding-focused design.",
    fullDescription: "Professional commercial spaces that reflect your brand identity. We create functional and attractive retail shops, welcoming cafés, stylish restaurants, and productive corporate offices that enhance customer experience and employee productivity.",
    image: "/images/Design & Build.jpg",
    features: [
      "Retail shop design and fit-out",
      "Café and restaurant interiors",
      "Corporate office spaces",
      "Brand-focused design approach",
      "Customer experience optimization"
    ]
  },
  {
    id: "custom-carpentry",
    icon: Wrench,
    title: "Custom Carpentry & Furniture",
    description: "Wardrobes, kitchen cabinets, TV consoles, partitions, and decorative backdrops.",
    fullDescription: "Bespoke carpentry solutions tailored to your space and needs. Our skilled craftsmen create custom wardrobes, kitchen cabinets, entertainment units, room partitions, and decorative backdrops using quality materials and precision techniques.",
    image: "/images/Custom Built-in Furniture.jpg",
    features: [
      "Custom wardrobes and storage",
      "Kitchen cabinet systems",
      "TV consoles and entertainment units",
      "Room partitions and dividers",
      "Decorative backdrops and features"
    ]
  },
  {
    id: "styling-decor",
    icon: Palette,
    title: "Styling & Décor",
    description: "Soft furnishings, lighting, and final touches to complete the space.",
    fullDescription: "The finishing touches that transform a space into a home or workplace. We carefully select and coordinate soft furnishings, lighting solutions, artwork, and decorative elements to create cohesive, inviting environments that reflect your taste and style.",
    image: "/images/Flooring & Curtains.jpg",
    features: [
      "Soft furnishings coordination",
      "Lighting design and installation",
      "Artwork and wall decorations",
      "Decorative accessories",
      "Color scheme coordination"
    ]
  },
  {
    id: "design-visualization",
    icon: PenTool,
    title: "2D & 3D Design Visualization",
    description: "Space planning, detailed layouts, and realistic renderings for a clear preview before build.",
    fullDescription: "Bring your vision to life before construction begins. Our comprehensive visualization services include detailed space planning, precise 2D layouts, and photorealistic 3D renderings that allow you to see exactly how your space will look and function, ensuring complete satisfaction before any work starts.",
    image: "/images/Interior Design + Feng Shui (风水).jpg",
    features: [
      "Detailed space planning and layouts",
      "2D floor plans and elevations",
      "Photorealistic 3D renderings",
      "Virtual walkthroughs",
      "Material and color visualization"
    ]
  },
  {
    id: "project-management",
    icon: Wrench,
    title: "Project Management & Renovation Works",
    description: "Full on-site execution, scheduling, quality control, and coordination with contractors.",
    fullDescription: "Complete project oversight from start to finish. Our experienced project managers handle all aspects of on-site execution, contractor coordination, timeline management, and quality control to ensure your project is delivered on time, on budget, and to the highest standards.",
    image: "/images/Local Authority Submission & Approval.jpg",
    features: [
      "Comprehensive project scheduling",
      "On-site execution management",
      "Quality control and inspections",
      "Contractor coordination",
      "Timeline and budget management"
    ]
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

export default function ServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [worksSlideIndex, setWorksSlideIndex] = useState(0);

  const nextWorksSlide = () => {
    setWorksSlideIndex(prev => {
      const newIndex = prev + 1;
      if (newIndex >= worksData.length) {
        setTimeout(() => {
          const sliderElement = document.querySelector('[style*="translateX"]') as HTMLElement;
          if (sliderElement) {
            sliderElement.style.transition = 'none';
            sliderElement.style.transform = `translateX(-${0 * (100 / 3)}%)`;
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
      if (newIndex < 0) {
        setTimeout(() => {
          const sliderElement = document.querySelector('[style*="translateX"]') as HTMLElement;
          if (sliderElement) {
            sliderElement.style.transition = 'none';
            sliderElement.style.transform = `translateX(-${(worksData.length - 1) * (100 / 3)}%)`;
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

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-900 text-gray-900 overflow-hidden">
        <HeroBackgroundSlider />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-7xl mx-auto flex justify-center items-center">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-white drop-shadow-lg md:whitespace-nowrap">
              Our Services
            </h1>
          </div>
        </div>
      </section>


      {services.map((service, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <section key={service.id} className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                <ScrollAnimated
                  animationType={isReversed ? "slide-right" : "slide-left"}
                  delay={200}
                  threshold={0.1}
                  className={isReversed ? 'lg:order-2' : 'lg:order-1'}
                >
                  <div className="relative aspect-[2/3] mb-6 overflow-hidden max-w-sm mx-auto">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </ScrollAnimated>

                <ScrollAnimated
                  animationType={isReversed ? "slide-left" : "slide-right"}
                  delay={400}
                  threshold={0.1}
                  className={isReversed ? 'lg:order-1' : 'lg:order-2'}
                >
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-6">
                      {service.fullDescription}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-700 mr-3 flex-shrink-0 mt-0.5" style={{color: '#003153'}} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimated>
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <ScrollAnimated animationType="slide-left" threshold={0.2} className="lg:col-span-1">
              <div className="text-gray-300 text-sm font-semibold tracking-wider mb-4">SERVICES</div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
                Our Working Process
              </h2>
            </ScrollAnimated>

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
                    <div className="w-20 h-16 flex items-center justify-center">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={80}
                        height={64}
                        className="object-contain filter grayscale group-hover:filter-none transition-all duration-300"
                      />
                    </div>
                    </div>
                  </div>
                </ScrollAnimated>
              );
            })}
          </div>
        </div>
      </section>

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

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out gap-8 lg:gap-12"
                style={{
                  transform: `translateX(-${worksSlideIndex * (100 / 3)}%)`
                }}
              >
                {[...worksData, ...worksData].map((project, index) => {
                  const imageSizes = [
                    'aspect-[4/5]',
                    'aspect-[3/4]',
                    'aspect-[5/6]'
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
                          <div className={`relative ${imageSizes[index % 3]} mb-6 overflow-hidden`}>
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

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

            <button
              onClick={previousWorksSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ArrowRight className="h-5 w-5 text-gray-600 rotate-180" />
            </button>

            <button
              onClick={nextWorksSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <ArrowRight className="h-5 w-5 text-gray-600" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: worksData.length }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToWorksSlide(index)}
                  className={`w-2 h-2 transition-colors ${
                    index === worksSlideIndex ? 'bg-gray-900' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimated animationType="fade-in" delay={500}>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-gray-600">
                Common questions about our services
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 flex justify-between items-center text-left"
                  >
                    <span className="text-base font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimated>
    </div>
  );
}