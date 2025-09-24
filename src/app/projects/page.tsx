"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ScrollAnimated } from "@/hooks/useScrollAnimation";
import HeroBackgroundSlider from "@/components/hero-background-slider";
import { MapPin, Calendar, ExternalLink, MessageSquare, CheckCircle, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    location: "Luyang, KK",
    category: "Kitchen",
    date: "2024",
    description: "Complete kitchen renovation featuring custom cabinetry, quartz countertops, and modern appliances.",
    fullDescription: "This comprehensive kitchen renovation transformed a dated space into a modern culinary haven. We installed custom-built cabinets with soft-close hardware, integrated a kitchen island for additional prep space, and incorporated energy-efficient LED lighting throughout.",
    features: ["Custom cabinetry", "Quartz countertops", "Kitchen island", "LED lighting", "Premium hardware"],
    image: "/images/hero 1.jpg",
    duration: "6 weeks",
    budget: "RM25,000 - RM35,000"
  },
  {
    id: 2,
    title: "Living Room Renovation",
    location: "Likas, KK",
    category: "Living Room",
    date: "2024",
    description: "Spacious living room makeover with built-in entertainment center and modern color scheme.",
    fullDescription: "This living room renovation focused on creating a functional entertainment space for a growing family. We designed and built a custom entertainment center that houses all media equipment while providing ample display space.",
    features: ["Built-in entertainment center", "Custom shelving", "New flooring", "Ambient lighting", "Space optimization"],
    image: "/images/hero 2.jpg",
    duration: "4 weeks",
    budget: "RM15,000 - RM22,000"
  },
  {
    id: 3,
    title: "Master Bedroom Suite",
    location: "Penampang",
    category: "Bedroom",
    date: "2023",
    description: "Elegant master bedroom featuring custom wardrobe, study area, and luxurious finishes.",
    fullDescription: "This master bedroom project transformed an ordinary space into a luxurious retreat. The centerpiece is a walk-in wardrobe with organized storage solutions for clothing, accessories, and shoes.",
    features: ["Walk-in wardrobe", "Built-in study desk", "Custom lighting", "Premium materials", "Storage optimization"],
    image: "/images/hero 3.jpg",
    duration: "5 weeks",
    budget: "RM18,000 - RM28,000"
  },
  {
    id: 4,
    title: "Corporate Office Interior",
    location: "KK City Center",
    category: "Office",
    date: "2024",
    description: "Professional office space design with modern workstations and efficient layout.",
    fullDescription: "This corporate office project involved designing a productive workspace for a local business. We created an open-plan layout with individual workstations, collaborative areas, and private meeting rooms.",
    features: ["Open-plan workstations", "Meeting rooms", "Reception area", "Ergonomic furniture", "Technology integration"],
    image: "/images/hero 4.jpg",
    duration: "8 weeks",
    budget: "RM40,000 - RM60,000"
  },
  {
    id: 5,
    title: "Stylish Dining Area",
    location: "Inanam",
    category: "Dining Room",
    date: "2023",
    description: "Contemporary dining space with custom dining set and elegant finishes.",
    fullDescription: "This dining area renovation focused on creating an inviting space for family gatherings and entertaining. We designed a custom dining table that fits the space perfectly and complements the home's overall aesthetic.",
    features: ["Custom dining table", "Statement lighting", "Built-in storage", "Feature wall", "Window treatments"],
    image: "/images/hero 5.jpg",
    duration: "3 weeks",
    budget: "RM12,000 - RM18,000"
  },
  {
    id: 6,
    title: "Luxury Bathroom Renovation",
    location: "Tuaran",
    category: "Bathroom",
    date: "2024",
    description: "Modern bathroom featuring premium fixtures and elegant tiling.",
    fullDescription: "This bathroom renovation maximized functionality in a compact space while incorporating luxury finishes. We installed a walk-in shower with rainfall showerhead, floating vanity with ample storage, and premium tiles throughout.",
    features: ["Walk-in shower", "Floating vanity", "Premium tiles", "Smart storage", "Modern fixtures"],
    image: "/images/hero 1.jpg",
    duration: "4 weeks",
    budget: "RM20,000 - RM30,000"
  },
  {
    id: 7,
    title: "Custom TV Console & Storage",
    location: "Putatan",
    category: "Furniture",
    date: "2023",
    description: "Built-in TV console with integrated storage and cable management.",
    fullDescription: "This custom TV console project addressed the need for organized entertainment storage while maintaining a clean, modern aesthetic. The unit features hidden cable management, adjustable shelving for various media components, and display areas for decorative items.",
    features: ["Cable management", "Adjustable shelving", "Hidden storage", "Display areas", "Custom finish"],
    image: "/images/hero 3.jpg",
    duration: "2 weeks",
    budget: "RM3,500 - RM6,000"
  }
];

const categories = ["All", "Kitchen", "Living Room", "Bedroom", "Bathroom", "Office", "Commercial", "Furniture"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-900 text-gray-900 overflow-hidden">
        <HeroBackgroundSlider />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-7xl mx-auto flex justify-center items-center">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-white drop-shadow-lg md:whitespace-nowrap">
              Our Projects
            </h1>
          </div>
        </div>
      </section>

      <ScrollAnimated animationType="fade-in" delay={200}>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Portfolio of Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our portfolio of completed projects across Kota Kinabalu and Sabah. Each project showcases our commitment to quality craftsmanship and innovative design.
            </p>
          </div>
        </section>
      </ScrollAnimated>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollAnimated animationType="fade-in" delay={300}>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category
                    ? "text-white hover:bg-blue-800"
                    : "border-gray-300 text-gray-600 hover:border-yellow-500 hover:opacity-80"
                  }
                  style={selectedCategory === category ? {backgroundColor: '#003153'} : {}}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
                {selectedCategory !== "All" && ` in ${selectedCategory}`}
              </p>
            </div>
          </ScrollAnimated>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ScrollAnimated
                key={project.id}
                animationType={index % 3 === 0 ? "slide-up" : index % 3 === 1 ? "scale-in" : "slide-up"}
                delay={index * 100}
                threshold={0.05}
              >
                <div
                  className="group cursor-pointer bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </div>
                    <Badge className="absolute top-4 left-4 text-white" style={{backgroundColor: '#003153'}}>
                      {project.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.date}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              </ScrollAnimated>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white transition-colors"
              >
                <X className="h-5 w-5 text-gray-900" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-auto">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge className="text-white" style={{backgroundColor: '#003153'}}>
                        {selectedProject.category}
                      </Badge>
                      <Badge variant="outline">{selectedProject.date}</Badge>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-gray-500 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {selectedProject.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {selectedProject.duration}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Overview</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" style={{color: '#003153'}} />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50">
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Duration</div>
                      <div className="text-sm text-gray-600">{selectedProject.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">Budget Range</div>
                      <div className="text-sm text-gray-600">{selectedProject.budget}</div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      className="w-full text-white hover:bg-blue-800"
                      style={{backgroundColor: '#003153'}}
                      onClick={() => {
                        const whatsappLink = `https://wa.me/60189023676?text=Hi%20Isma%20Design%20%26%20Build!%20I'm%20interested%20in%20a%20project%20similar%20to%20your%20"${selectedProject.title}"%20in%20${selectedProject.location}.%20Can%20we%20discuss%20the%20details?`;
                        window.open(whatsappLink, "_blank");
                      }}
                    >
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Interested in Similar Project
                    </Button>
                    <p className="text-sm text-gray-500 text-center mt-3">
                      Get a free consultation for your project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}