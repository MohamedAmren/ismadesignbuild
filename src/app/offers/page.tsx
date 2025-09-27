"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimated } from "@/hooks/useScrollAnimation";
import HeroBackgroundSlider from "@/components/hero-background-slider";
import {
  CheckCircle,
  Star,
  ShoppingCart,
  MessageCircle,
  Filter,
  Search,
  Grid,
  List,
  X,
  Clock,
  Users,
  Package,
  Award
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const packages = [
  // Residential Packages
  {
    id: "compact-living",
    name: "Compact Living (Studio / 1-Bedroom Condo)",
    price: "RM 35,000",
    originalPrice: "RM 50,000",
    category: "Residential",
    featured: false,
    rating: 4.7,
    reviews: 28,
    image: "/images/Design & Build.jpg",
    description: "Perfect solution for studio apartments and 1-bedroom condos with optimized space planning.",
    includes: [
      "Living room TV feature wall (laminate finish, wiring concealment)",
      "Basic plaster ceiling with LED downlights",
      "Wall painting (1 colour, Nippon Matex / Jotun equivalent)",
      "Sliding wardrobe (5ft, laminate finish)",
      "Vinyl SPC flooring 4mm with skirting",
      "8ft base + wall cabinet (laminate finish, ABS edging)",
      "Quartz stone tabletop (basic series)",
      "Sink + basic mixer included",
      "Soft-close hinges & drawers"
    ],
    materials: [
      "Nippon Matex / Jotun paint",
      "Vinyl SPC flooring 4mm",
      "Laminate finish cabinets",
      "Quartz stone basic series",
      "LED downlights",
      "Soft-close hardware"
    ],
    coverage: "Living (up to 200 sqft) + Bedroom (up to 120 sqft) + Kitchen (8ft cabinet)",
    duration: "4-6 weeks",
    suitableFor: "Studio, 1-Bedroom Condo"
  },
  {
    id: "standard-home",
    name: "Standard Home (2-Bedroom Condo / Small Terrace)",
    price: "RM 55,000",
    originalPrice: "RM 75,000",
    category: "Residential",
    featured: true,
    rating: 4.8,
    reviews: 35,
    image: "/images/Construction & Renovation.jpg",
    description: "Comprehensive package for 2-bedroom condos and small terrace houses with premium finishes.",
    includes: [
      "TV feature wall with storage (laminate + LED strip)",
      "Plaster ceiling with cove lighting",
      "Premium emulsion paint (Nippon Easy Wash / Jotun Majestic)",
      "Wardrobe (6ft per room, laminate finish)",
      "Flooring: Vinyl SPC 5mm or laminated timber",
      "Wall painting with 2-tone option",
      "10ft base + wall cabinet (laminate finish)",
      "Quartz stone tabletop (premium basic series)",
      "Sink, tap & hood preparation",
      "Soft-close accessories"
    ],
    materials: [
      "Nippon Easy Wash / Jotun Majestic paint",
      "Vinyl SPC 5mm or laminated timber",
      "Premium laminate cabinets",
      "Quartz stone premium basic series",
      "LED strip lighting",
      "Soft-close accessories"
    ],
    coverage: "Living (250 sqft) + 2 Bedrooms (120 sqft each) + Kitchen (10ft cabinet)",
    duration: "6-8 weeks",
    suitableFor: "2-Bedroom Condo, Small Terrace"
  },
  {
    id: "premium-living",
    name: "Premium Living (3-Bedroom Condo / Intermediate Terrace)",
    price: "RM 80,000",
    originalPrice: "RM 110,000",
    category: "Residential",
    featured: true,
    rating: 4.9,
    reviews: 22,
    image: "/images/Interior Design + Feng Shui (风水).jpg",
    description: "Premium package for 3-bedroom homes with luxury finishes and smart design features.",
    includes: [
      "TV feature wall with hidden storage + LED accent",
      "False ceiling with downlights + cove lighting",
      "Premium wall paint with feature wall (wallpaper / textured paint)",
      "Sliding wardrobe (6–7ft, laminate finish, mirror sliding for master)",
      "SPC Vinyl 5mm flooring + skirting",
      "Feature wall panel for master bedroom",
      "12ft base + wall cabinet (laminate + glass door options)",
      "Quartz stone tabletop (mid-range series)",
      "Sink, mixer, hob & hood preparation",
      "Tall cabinet for oven/microwave"
    ],
    materials: [
      "Premium paint with textured/wallpaper feature walls",
      "SPC Vinyl 5mm flooring",
      "Laminate with glass door options",
      "Quartz stone mid-range series",
      "Mirror sliding doors",
      "LED accent lighting"
    ],
    coverage: "Living (300 sqft) + 3 Bedrooms (130 sqft each) + Kitchen (12ft cabinet)",
    duration: "8-12 weeks",
    suitableFor: "3-Bedroom Condo, Intermediate Terrace"
  },
  {
    id: "deluxe-home",
    name: "Deluxe Home (3 Bedrooms + 1 Bathroom)",
    price: "RM 120,000",
    originalPrice: "RM 160,000",
    category: "Residential",
    featured: false,
    rating: 4.9,
    reviews: 18,
    image: "/images/Custom Built-in Furniture.jpg",
    description: "Deluxe package including bathroom renovation with premium fixtures and finishes.",
    includes: [
      "Full feature wall with custom carpentry + lighting",
      "False ceiling with layered cove + LED",
      "Paint + 1 feature wall option (panel / wallpaper)",
      "Wardrobe (7–8ft, premium laminate finish)",
      "SPC Vinyl 6mm with noise reduction layer",
      "Accent wall design (paint / panel)",
      "12ft premium laminate kitchen cabinet with soft-close system",
      "Quartz stone tabletop (mid-high range)",
      "Tall cabinet + pantry unit",
      "Wall & floor tiles (300×600mm, homogeneous)",
      "Vanity cabinet + quartz top + mirror",
      "Shower screen + water heater prep",
      "Basic sanitary fittings (WC, basin, mixer)"
    ],
    materials: [
      "Premium laminate finishes",
      "SPC Vinyl 6mm with noise reduction",
      "Quartz stone mid-high range",
      "300×600mm homogeneous tiles",
      "Premium sanitary fittings"
    ],
    coverage: "Living (320 sqft) + 3 Bedrooms (140 sqft each) + Kitchen (12ft cabinet) + 1 Bathroom (50 sqft)",
    duration: "10-14 weeks",
    suitableFor: "Larger Condos, Terrace Houses"
  },
  {
    id: "grand-residence",
    name: "Grand Residence (3 Bedrooms + 2 Bathrooms)",
    price: "RM 180,000",
    originalPrice: "RM 250,000",
    category: "Luxury",
    featured: true,
    rating: 5.0,
    reviews: 12,
    image: "/images/Design & Build.jpg",
    description: "Ultimate luxury package for grand residences with top-tier materials and finishes.",
    includes: [
      "Premium TV feature wall (laminate + fluted panel + LED)",
      "False ceiling full with spotlight track & cove lighting",
      "Luxury wall paint / textured accent",
      "Full wardrobe set (8–9ft, laminate + tinted glass for master)",
      "SPC Vinyl 6mm / engineered timber flooring",
      "Accent wall with paneling / wallpaper",
      "14ft full-height cabinets (premium laminate + glass options)",
      "Quartz stone countertop (high-end series, Calacatta Gold look)",
      "Tall cabinet with built-in microwave/oven space",
      "Sink, tap, hob & hood (optional appliance upgrades)",
      "Full tiles (600×600mm, premium porcelain)",
      "Vanity cabinet + quartz top + LED mirror",
      "Shower screen + instant water heater",
      "Premium sanitary fittings (rain shower option)"
    ],
    materials: [
      "Premium laminate + fluted panels",
      "SPC Vinyl 6mm / engineered timber",
      "Calacatta Gold look quartz",
      "600×600mm premium porcelain tiles",
      "Tinted glass wardrobe doors",
      "Premium sanitary fittings"
    ],
    coverage: "Living (350 sqft) + 3 Bedrooms (150 sqft each) + Kitchen (14ft cabinet) + 2 Bathrooms (50 sqft each)",
    duration: "14-20 weeks",
    suitableFor: "Luxury Homes, Large Residences"
  },

  // Kitchen Packages
  {
    id: "essential-kitchen",
    name: "Essential Kitchen Package",
    price: "RM 12,800",
    originalPrice: null,
    category: "Kitchen",
    featured: false,
    rating: 4.6,
    reviews: 45,
    image: "/images/Custom Built-in Furniture.jpg",
    description: "Basic kitchen solution with essential features and quality finishes.",
    includes: [
      "Base cabinet – 10ft",
      "Wall cabinet – 6ft",
      "Quartz table top – 10ft (basic series)",
      "Waterproof sink carcass – 3ft",
      "Aluminium channel – 10ft",
      "3 layers drawer undermount soft-close",
      "Stainless steel sink (single bowl)",
      "Basic mixer tap",
      "Cutlery tray insert"
    ],
    materials: [
      "Laminate finish cabinets",
      "Quartz basic series",
      "Stainless steel sink",
      "Aluminium channel",
      "Soft-close hardware"
    ],
    duration: "3-4 weeks",
    suitableFor: "Small Kitchens, Budget-Conscious"
  },
  {
    id: "standard-kitchen",
    name: "Standard Kitchen Package",
    price: "RM 18,800",
    originalPrice: null,
    category: "Kitchen",
    featured: false,
    rating: 4.7,
    reviews: 38,
    image: "/images/Custom Built-in Furniture.jpg",
    description: "Complete kitchen solution with enhanced storage and premium accessories.",
    includes: [
      "Base cabinet – 12ft",
      "Wall cabinet – 8ft",
      "Tall cabinet – 2ft",
      "Quartz table top – 12ft (standard range)",
      "Waterproof sink carcass – 3ft",
      "Aluminium channel – 12ft",
      "3 layers drawer undermount soft-close",
      "Stainless steel sink (double bowl)",
      "Premium mixer tap",
      "Cutlery tray, dish rack (aluminium)",
      "Soft-close hinges & drawers"
    ],
    materials: [
      "Laminate finish cabinets",
      "Quartz standard range",
      "Double bowl stainless steel sink",
      "Premium mixer tap",
      "Aluminium accessories"
    ],
    duration: "4-5 weeks",
    suitableFor: "Medium Kitchens, Standard Homes"
  },
  {
    id: "premium-kitchen",
    name: "Premium Kitchen Package",
    price: "RM 28,800",
    originalPrice: null,
    category: "Kitchen",
    featured: true,
    rating: 4.8,
    reviews: 29,
    image: "/images/Custom Built-in Furniture.jpg",
    description: "Premium kitchen with designer features and high-end accessories.",
    includes: [
      "Base cabinet – 14ft",
      "Wall cabinet – 10ft",
      "Tall cabinet – 4ft",
      "Quartz table top – 14ft (premium marble look)",
      "Waterproof sink carcass – 3ft",
      "Aluminium channel – 14ft",
      "3 layers drawer undermount soft-close",
      "Premium stainless steel sink (undermount)",
      "Designer mixer tap (Grohe / equivalent)",
      "Pull-out dish rack + cutlery organizer",
      "Pull-out basket (spices / oil tray)",
      "Soft-close hinges, drawers, lift-up doors"
    ],
    materials: [
      "Premium laminate finish",
      "Premium marble look quartz",
      "Undermount stainless steel sink",
      "Grohe equivalent mixer tap",
      "Premium pull-out accessories"
    ],
    duration: "5-6 weeks",
    suitableFor: "Large Kitchens, Premium Homes"
  },
  {
    id: "luxury-kitchen-island",
    name: "Luxury Kitchen + Island Package",
    price: "RM 42,800",
    originalPrice: null,
    category: "Kitchen",
    featured: true,
    rating: 4.9,
    reviews: 16,
    image: "/images/Custom Built-in Furniture.jpg",
    description: "Ultimate luxury kitchen with island and high-end Calacatta Gold look quartz.",
    includes: [
      "Base cabinet – 14ft",
      "Wall cabinet – 12ft",
      "Tall cabinet – 6ft",
      "Quartz table top – 14ft (high-end quartz / Calacatta Gold look)",
      "Waterproof sink carcass – 3ft",
      "Aluminium channel – 14ft",
      "3 layers drawer undermount soft-close",
      "Island cabinet – 6ft",
      "Quartz table top – 6ft × 2.5ft",
      "Island aluminium channel – 6ft",
      "Premium undermount double bowl sink",
      "Designer mixer tap (pull-out spray type)",
      "Pull-out basket system (bottle/spice rack)",
      "Full dish rack system",
      "Waste bin pull-out drawer",
      "Optional appliance integration (microwave/oven cabinet space)"
    ],
    materials: [
      "High-end laminate finish",
      "Calacatta Gold look quartz",
      "Premium undermount sink",
      "Pull-out spray mixer tap",
      "Complete pull-out system"
    ],
    duration: "6-8 weeks",
    suitableFor: "Luxury Kitchens, Large Spaces"
  },

  // Bathroom Add-Ons
  {
    id: "standard-bathroom",
    name: "Standard Bathroom Add-On",
    price: "RM 20,000",
    originalPrice: "RM 28,000",
    category: "Bathroom",
    featured: false,
    rating: 4.5,
    reviews: 24,
    image: "/images/Flooring & Curtains.jpg",
    description: "Complete standard bathroom renovation with quality fixtures.",
    includes: [
      "Tiles (300×600mm)",
      "Vanity + mirror",
      "Shower screen + mixer tap prep",
      "WC + basin set"
    ],
    materials: [
      "300×600mm tiles",
      "Standard vanity unit",
      "Basic mirror",
      "Standard sanitary fittings"
    ],
    coverage: "50 sqft bathroom",
    duration: "2-3 weeks",
    suitableFor: "Standard Bathroom Renovation"
  },
  {
    id: "premium-bathroom",
    name: "Premium Bathroom Add-On",
    price: "RM 30,000",
    originalPrice: "RM 45,000",
    category: "Bathroom",
    featured: false,
    rating: 4.8,
    reviews: 18,
    image: "/images/Flooring & Curtains.jpg",
    description: "Luxury bathroom renovation with premium fixtures and finishes.",
    includes: [
      "Full-height tiles (600×600mm)",
      "Vanity with quartz top + LED mirror",
      "Tempered glass shower screen",
      "Premium sanitary (Grohe / Toto / equivalent)"
    ],
    materials: [
      "600×600mm premium tiles",
      "Quartz vanity top",
      "LED mirror",
      "Grohe / Toto fixtures"
    ],
    coverage: "50 sqft bathroom",
    duration: "3-4 weeks",
    suitableFor: "Premium Bathroom Renovation"
  }
];

const categories = ["All", "Residential", "Kitchen", "Bathroom", "Luxury"];

export default function OffersPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<typeof packages[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const packagesPerPage = 16;

  const filteredPackages = packages.filter(pkg => {
    const matchesCategory = selectedCategory === "All" || pkg.category === selectedCategory;
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pkg.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);
  const startIndex = (currentPage - 1) * packagesPerPage;
  const paginatedPackages = filteredPackages.slice(startIndex, startIndex + packagesPerPage);

  // Reset to page 1 when filters change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const openModal = (pkg: typeof packages[0]) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const whatsappMessage = (packageName: string, price: string) => {
    return `Hi Isma Design & Build! I'm interested in the ${packageName} (${price}). Can you provide more details?`;
  };

  const whatsappLink = (message: string) => {
    return `https://wa.me/60189023676?text=${encodeURIComponent(message)}`;
  };


  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-900 text-gray-900 overflow-hidden">
        <HeroBackgroundSlider />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-7xl mx-auto flex justify-center items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-white drop-shadow-lg md:whitespace-nowrap">
                Our Offers
              </h1>
              <p className="text-lg md:text-xl text-white/90 mt-6 max-w-2xl mx-auto">
                Choose from our carefully crafted packages designed to meet every budget and requirement
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimated animationType="fade-in" threshold={0.1}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Design & Build Packages
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Professional packages tailored to your needs and budget. All packages include consultation, project management, and warranty.
              </p>
            </div>
          </ScrollAnimated>

          {/* Online Store Layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Sidebar - Filters */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-gray-50 p-4 lg:p-6 rounded-lg lg:sticky lg:top-20">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 lg:mb-6 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filters
                </h3>

                {/* Search */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search packages..."
                      value={searchTerm}
                      onChange={(e) => handleSearchChange(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:border-gray-400 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Category</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                          selectedCategory === category
                            ? 'bg-gray-900 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {category}
                        {selectedCategory === category && filteredPackages.length > 0 && (
                          <span className="float-right bg-white/20 px-2 py-0.5 rounded text-xs">
                            {filteredPackages.length}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">Price Range</label>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>Budget: RM 8,000 - RM 20,000</div>
                    <div>Premium: RM 20,000 - RM 50,000</div>
                    <div>Luxury: RM 50,000+</div>
                  </div>
                </div>

                {/* Results Count */}
                <div className="text-sm text-gray-500 border-t border-gray-200 pt-4">
                  Showing {filteredPackages.length} of {packages.length} packages
                </div>
              </div>
            </div>

            {/* Right Content - Products */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1}-{Math.min(startIndex + packagesPerPage, filteredPackages.length)} of {filteredPackages.length} packages
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">View:</span>
                  <div className="flex items-center space-x-1 bg-gray-100 p-1 rounded">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                      }`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded transition-colors ${
                        viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                      }`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Packages Grid/List */}
              <div className={`${
                viewMode === 'grid'
                  ? 'grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'
                  : 'space-y-6'
              }`}>
                {paginatedPackages.map((pkg, index) => (
                  <ScrollAnimated
                    key={pkg.id}
                    animationType={viewMode === 'grid' ? 'slide-up' : 'fade-in'}
                    delay={index * 100}
                    threshold={0.1}
                  >
                    <div className={`group relative bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-all duration-300 hover:shadow-lg overflow-hidden ${
                      viewMode === 'list' ? 'flex' : 'flex flex-col h-full'
                    } ${pkg.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
                      {pkg.featured && (
                        <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 text-xs font-semibold rounded z-10">
                          Most Popular
                        </div>
                      )}

                      {/* Package Image */}
                      <div className={`relative ${viewMode === 'list' ? 'w-48 h-32' : 'h-32'} bg-gray-100`}>
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
                      <div className={`p-3 ${viewMode === 'list' ? 'flex-1' : 'flex-1 flex flex-col'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {pkg.category}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-medium">{pkg.rating}</span>
                          </div>
                        </div>

                        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2">
                          {pkg.name}
                        </h3>

                        <p className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2">
                          {pkg.description}
                        </p>

                        <div className="mb-3">
                          <div className="flex items-baseline space-x-1">
                            <span className="text-lg font-bold text-gray-900">{pkg.price}</span>
                            {pkg.originalPrice && (
                              <span className="text-xs text-gray-500 line-through">{pkg.originalPrice}</span>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-col space-y-2 mt-auto">
                          <button
                            onClick={() => openModal(pkg)}
                            className="w-full text-white hover:bg-blue-800 transition-colors py-2 px-3 text-xs font-medium"
                            style={{backgroundColor: '#003153'}}
                          >
                            View Details
                          </button>
                          <a
                            href={whatsappLink(whatsappMessage(pkg.name, pkg.price))}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full border border-gray-300 text-gray-700 text-center py-2 px-3 text-xs font-medium hover:bg-gray-50 transition-colors flex items-center justify-center space-x-1"
                          >
                            <MessageCircle className="w-3 h-3" />
                            <span>Get Quote</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimated>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center mt-12 space-x-2">
                  <button
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 text-sm font-medium border rounded-md transition-colors ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Previous
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 text-sm font-medium border rounded-md transition-colors ${
                        currentPage === page
                          ? 'text-white border-gray-900'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      style={currentPage === page ? {backgroundColor: '#003153'} : {}}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 text-sm font-medium border rounded-md transition-colors ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>

          {filteredPackages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No packages found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <ScrollAnimated animationType="fade-in" threshold={0.1}>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We offer custom packages tailored to your specific needs and budget.
              Contact us for a personalized consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink("Hi Isma Design & Build! I'd like to discuss a custom package for my project.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:bg-blue-800 transition-colors px-8 py-4 font-medium inline-flex items-center justify-center space-x-2"
                style={{backgroundColor: '#003153'}}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get Custom Quote</span>
              </a>
              <Link
                href="/contact"
                className="border border-gray-300 text-gray-700 px-8 py-4 font-medium hover:bg-gray-50 transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimated>

      {/* Package Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-[95vw] w-[95vw] md:max-w-[90vw] md:w-[90vw] lg:max-w-[85vw] lg:w-[85vw] xl:max-w-[80vw] xl:w-[80vw] max-h-[95vh] p-0 m-0 rounded-lg border-0 overflow-hidden">
          {selectedPackage && (
            <div className="h-full w-full flex flex-col max-h-[95vh]">
              <DialogHeader className="flex-shrink-0 p-4 sm:p-6 md:p-8 lg:p-12 pb-2 sm:pb-4 md:pb-6">
                <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
                  {selectedPackage.name}
                </DialogTitle>
              </DialogHeader>

              <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 pb-4 sm:pb-6 md:pb-8 lg:pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Image and Basic Info */}
                <div className="space-y-4 sm:space-y-6">
                  {/* Package Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={selectedPackage.image}
                      alt={selectedPackage.name}
                      fill
                      className="object-cover"
                    />
                    {selectedPackage.featured && (
                      <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-blue-500 text-white px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-semibold rounded">
                        Most Popular
                      </div>
                    )}
                    {selectedPackage.originalPrice && (
                      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-red-500 text-white px-2 py-1 sm:px-3 sm:py-1 text-xs sm:text-sm font-semibold rounded">
                        Save {Math.round(((parseFloat(selectedPackage.originalPrice.replace(/[^0-9]/g, '')) - parseFloat(selectedPackage.price.replace(/[^0-9]/g, ''))) / parseFloat(selectedPackage.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                      </div>
                    )}
                  </div>

                  {/* Package Details */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 text-sm font-medium rounded">
                        {selectedPackage.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{selectedPackage.rating}</span>
                        <span className="text-xs text-gray-500">({selectedPackage.reviews} reviews)</span>
                      </div>
                    </div>

                    <div className="flex items-baseline space-x-3">
                      <span className="text-3xl font-bold text-gray-900">{selectedPackage.price}</span>
                      {selectedPackage.originalPrice && (
                        <span className="text-xl text-gray-500 line-through">{selectedPackage.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - Description, Includes, and Materials */}
                <div className="space-y-4">
                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{selectedPackage.description}</p>
                  </div>

                  {/* What's Included */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      What's Included
                    </h3>
                    <ul className="space-y-1.5">
                      {selectedPackage.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0 mt-1" />
                          <span className="text-gray-700 text-xs leading-tight">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Materials */}
                  {selectedPackage.materials && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                        <Package className="w-4 h-4 text-blue-500 mr-2" />
                        Materials & Specifications
                      </h3>
                      <ul className="space-y-1.5">
                        {selectedPackage.materials.map((material, index) => (
                          <li key={index} className="flex items-start">
                            <Award className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0 mt-1" />
                            <span className="text-gray-700 text-xs leading-tight">{material}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <div>
                        <div className="text-xs font-medium text-gray-900">Duration</div>
                        <div className="text-xs text-gray-600">{selectedPackage.duration}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-600" />
                      <div>
                        <div className="text-xs font-medium text-gray-900">Suitable For</div>
                        <div className="text-xs text-gray-600">{selectedPackage.suitableFor}</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <a
                      href={whatsappLink(whatsappMessage(selectedPackage.name, selectedPackage.price))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-white text-center py-2 px-4 text-sm font-medium hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2 rounded"
                      style={{backgroundColor: '#003153'}}
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Get Quote via WhatsApp</span>
                    </a>
                    <Link
                      href="/contact"
                      className="w-full border border-gray-300 text-gray-700 text-center py-2 px-4 text-sm font-medium hover:bg-gray-50 transition-colors block rounded"
                    >
                      Schedule Consultation
                    </Link>
                  </div>
                </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
}