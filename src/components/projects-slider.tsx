"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

// Sample project data with placeholder images
const projects = [
  {
    id: 1,
    title: "Modern Kitchen",
    location: "Luyang",
    image: "/images/project1.svg",
    description: "Contemporary kitchen design with custom cabinetry and modern appliances.",
    gallery: ["/images/project1.svg", "/images/project1.svg", "/images/project1.svg"]
  },
  {
    id: 2,
    title: "Living Room Renovation",
    location: "Likas",
    image: "/images/project2.svg",
    description: "Complete living room makeover with built-in entertainment center.",
    gallery: ["/images/project2.svg", "/images/project2.svg", "/images/project2.svg"]
  },
  {
    id: 3,
    title: "Master Bedroom",
    location: "Penampang",
    image: "/images/project3.svg",
    description: "Elegant master bedroom with custom wardrobe and study area.",
    gallery: ["/images/project3.svg", "/images/project3.svg", "/images/project3.svg"]
  },
  {
    id: 4,
    title: "Office Interior",
    location: "KK City",
    image: "/images/project4.svg",
    description: "Professional office space with modern workstations and meeting areas.",
    gallery: ["/images/project4.svg", "/images/project4.svg", "/images/project4.svg"]
  },
  {
    id: 5,
    title: "Dining Area",
    location: "Inanam",
    image: "/images/project5.svg",
    description: "Stylish dining area with custom dining set and ambient lighting.",
    gallery: ["/images/project5.svg", "/images/project5.svg", "/images/project5.svg"]
  },
  {
    id: 6,
    title: "Bathroom Renovation",
    location: "Tuaran",
    image: "/images/project6.svg",
    description: "Modern bathroom with premium fixtures and elegant tiling.",
    gallery: ["/images/project6.svg", "/images/project6.svg", "/images/project6.svg"]
  },
  {
    id: 7,
    title: "Exhibition Booth",
    location: "KK Convention Centre",
    image: "/images/project7.svg",
    description: "Eye-catching exhibition booth design for local business showcase.",
    gallery: ["/images/project7.svg", "/images/project7.svg", "/images/project7.svg"]
  },
  {
    id: 8,
    title: "TV Console",
    location: "Putatan",
    image: "/images/project8.svg",
    description: "Custom TV console with integrated storage and cable management.",
    gallery: ["/images/project8.svg", "/images/project8.svg", "/images/project8.svg"]
  }
];

// Create placeholder images for projects
const createPlaceholderSVG = (title: string, color: string) => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="${color}"/>
      <rect x="50" y="50" width="300" height="200" fill="white" opacity="0.9"/>
      <text x="200" y="160" text-anchor="middle" font-family="system-ui" font-size="18" font-weight="600" fill="#374151">${title}</text>
      <text x="200" y="190" text-anchor="middle" font-family="system-ui" font-size="14" fill="#6B7280">Interior Design Project</text>
    </svg>
  `)}`;
};

export default function ProjectsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % projects.length;
      visible.push(projects[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our recent work across Kota Kinabalu and Sabah.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getVisibleProjects().map((project, index) => (
                <Card 
                  key={project.id} 
                  className="group cursor-pointer hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={createPlaceholderSVG(project.title, ["#DC2626", "#059669", "#7C3AED", "#EA580C", "#0D9488"][index % 5])}
                      alt={`${project.title} in ${project.location}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        View Gallery
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{project.location}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="p-2"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={toggleAutoplay}
              className="p-2"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="p-2"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 transition-colors ${ 
                  index === currentIndex ? "bg-gray-300" : "bg-gray-300"
                }`}
                style={index === currentIndex ? {backgroundColor: '#003153'} : {}}
              />
            ))}
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Carousel>
                    <CarouselContent>
                      {selectedProject.gallery.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="relative h-96">
                            <Image
                              src={createPlaceholderSVG(selectedProject.title, "#DC2626")}
                              alt={`${selectedProject.title} image ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-500">{selectedProject.location}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <Button 
                    className="text-white hover:bg-blue-800"
                    style={{backgroundColor: '#003153'}}
                    onClick={() => {
                      const whatsappLink = `https://wa.me/60189023676?text=Hi%20Isma%20Design%20%26%20Build!%20I'm%20interested%20in%20a%20project%20similar%20to%20your%20${selectedProject.title}%20project%20in%20${selectedProject.location}.`;
                      window.open(whatsappLink, "_blank");
                    }}
                  >
                    Interested in Similar Project
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
}