"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollAnimated } from "@/hooks/useScrollAnimation";
import HeroBackgroundSlider from "@/components/hero-background-slider";
import { Calendar, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: "residential-design-renovation",
    title: "Residential Design & Renovation – Turning Houses into Dream Homes",
    excerpt: "Transform your house into a dream home with our residential design and renovation expertise. From concept to completion, we create functional, beautiful, and timeless living spaces.",
    date: "2024-01-15",
    author: "Isma Design Build",
    category: "Residential Design",
    image: "/images/Construction & Renovation.jpg",
    slug: "residential-design-renovation"
  },
  {
    id: "commercial-office-fitout",
    title: "Commercial & Office Fit-Out – Designing Workspaces That Inspire Success",
    excerpt: "Create inspiring workspaces that boost productivity and reflect your brand identity. Our commercial fit-out solutions transform offices into hubs of collaboration and success.",
    date: "2024-01-10",
    author: "Isma Design Build",
    category: "Commercial Design",
    image: "/images/Design & Build.jpg",
    slug: "commercial-office-fitout"
  },
  {
    id: "custom-carpentry-furniture",
    title: "Custom Carpentry & Furniture – Crafting Spaces with Personality and Precision",
    excerpt: "Discover the art of bespoke furniture design. Our custom carpentry solutions blend functionality with personality, creating unique pieces tailored perfectly to your space and style.",
    date: "2024-01-05",
    author: "Isma Design Build",
    category: "Custom Furniture",
    image: "/images/Custom Built-in Furniture.jpg",
    slug: "custom-carpentry-furniture"
  },
  {
    id: "styling-decor",
    title: "Styling & Décor – Bringing Character and Elegance into Every Space",
    excerpt: "Transform spaces with our expert styling and décor services. We create cohesive, personalized environments that reflect your personality and enhance both comfort and functionality.",
    date: "2023-12-30",
    author: "Isma Design Build",
    category: "Interior Styling",
    image: "/images/Flooring & Curtains.jpg",
    slug: "styling-decor"
  },
  {
    id: "2d-3d-design-visualization",
    title: "2D & 3D Design Visualization – From Concept to Reality",
    excerpt: "Experience your future space before it's built. Our advanced 2D and 3D visualization services help you make confident decisions and avoid costly mistakes in your renovation journey.",
    date: "2023-12-25",
    author: "Isma Design Build",
    category: "Design Visualization",
    image: "/images/Interior Design + Feng Shui (风水).jpg",
    slug: "2d-3d-design-visualization"
  },
  {
    id: "project-management-renovation",
    title: "Project Management & Renovation Works – Ensuring Seamless Execution",
    excerpt: "Ensure your renovation project runs smoothly from start to finish. Our comprehensive project management approach delivers quality results on time and within budget.",
    date: "2023-12-20",
    author: "Isma Design Build",
    category: "Project Management",
    image: "/images/Local Authority Submission & Approval.jpg",
    slug: "project-management-renovation"
  }
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-900 text-gray-900 overflow-hidden">
        <HeroBackgroundSlider />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-7xl mx-auto flex justify-center items-center">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-white drop-shadow-lg md:whitespace-nowrap">
              Our Blogs
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimated animationType="fade-in" threshold={0.1}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Latest Insights & Tips
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                Discover the latest trends, tips, and insights from our interior design and renovation experts.
              </p>
            </div>
          </ScrollAnimated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post, index) => (
              <ScrollAnimated
                key={post.id}
                animationType={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                delay={index * 100}
                threshold={0.1}
              >
                <Link href={`/blogs/${post.slug}`}>
                  <article className="group cursor-pointer bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white text-gray-900 px-3 py-1 text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 mb-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </article>
                </Link>
              </ScrollAnimated>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}