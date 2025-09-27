"use client";

import { notFound } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { ScrollAnimated } from "@/hooks/useScrollAnimation";
import { Calendar, User, ArrowLeft, ArrowRight, Star, MessageCircle, CheckCircle, Share2, Facebook, Twitter, Linkedin, Copy, Send } from "lucide-react";
import { useState } from "react";

const blogData = {
  "residential-design-renovation": {
    title: "Residential Design & Renovation – Turning Houses into Dream Homes",
    content: `Your home is more than just walls and a roof—it's the space where life happens, memories are created, and comfort is found. Yet, over time, homes may begin to feel outdated, cluttered, or misaligned with your lifestyle. That's where residential design and renovation comes in. Whether it's a complete remodel or a simple refresh, thoughtful interior design and renovation can transform your house into a true reflection of your personality, needs, and aspirations.

At Isma Design & Build, we specialize in crafting functional, beautiful, and timeless homes that not only look stunning but also enhance the way you live.

## Why Residential Renovation Matters

**1. Adapting to Lifestyle Changes**
As families grow, work-from-home needs expand, or empty nests emerge, your home should adapt with you. Renovation ensures your spaces are practical for today and tomorrow.

**2. Boosting Property Value**
A well-renovated home significantly increases resale value. Kitchens, bathrooms, and open-plan living spaces are especially powerful upgrades.

**3. Energy Efficiency & Sustainability**
Modern renovations can reduce electricity bills by incorporating smart layouts, energy-efficient lighting, and sustainable materials.

**4. A Fresh Aesthetic**
Interior trends evolve, but a timeless design crafted by professionals ensures your home never feels outdated.

## Key Elements of Successful Residential Design

**1. Space Planning & Layout**
- Proper flow between rooms
- Maximized storage solutions
- Functional placement of furniture

**2. Material Selection**
Choosing the right flooring, cabinetry, countertops, and finishes ensures durability while reflecting your style.

**3. Lighting Design**
- Ambient lighting for comfort
- Task lighting for work areas
- Accent lighting for style

**4. Color Psychology**
The right colors influence mood—calming neutrals for bedrooms, vibrant tones for social spaces, and minimalist palettes for modern designs.

**5. Smart Home Integration**
From automated lighting to climate control, modern homes combine style with cutting-edge technology.

## Our Residential Renovation Process

At Isma Design & Build, we follow a transparent, client-centered approach:

1. **Consultation & Vision Planning** - We begin by understanding your lifestyle, needs, and budget.
2. **Concept Design & Visualization** - Using 2D & 3D renderings, we help you visualize the final outcome before construction begins.
3. **Material & Finishing Selection** - Guided selection of furniture, flooring, and fixtures that balance function and style.
4. **Renovation & Project Management** - Our team ensures timelines, budgets, and quality are met with precision.
5. **Final Styling & Handover** - The finishing touches—furnishings, décor, and accessories—turn your house into a warm, welcoming home.

## Residential Renovation Trends in 2025

- **Open-Concept Living** – Removing unnecessary walls for spaciousness.
- **Biophilic Design** – Incorporating plants, natural light, and organic textures.
- **Minimalist Luxe** – Clean lines with elegant finishes like marble, brass, and wood.
- **Multi-Functional Rooms** – Spaces that serve dual purposes (e.g., home office + guest room).
- **Sustainable Materials** – Bamboo flooring, recycled wood, and eco-friendly paints.

A home renovation isn't just about upgrading interiors—it's about transforming your lifestyle. With the right design, your home becomes a sanctuary that enhances your daily routines, reflects your identity, and stands the test of time.

At Isma Design & Build, we don't just renovate homes—we craft living experiences. Whether you're planning a full-scale remodel or a small refresh, our team is here to turn your vision into reality.`,
    date: "2024-01-15",
    author: "Isma Design Build",
    category: "Residential Design",
    image: "/images/Construction & Renovation.jpg",
    excerpt: "Transform your house into a dream home with our residential design and renovation expertise. From concept to completion, we create functional, beautiful, and timeless living spaces."
  },
  "commercial-office-fitout": {
    title: "Commercial & Office Fit-Out – Designing Workspaces That Inspire Success",
    content: `Your office is more than just a place to work—it's the heartbeat of your business. The way a workspace is designed impacts not only aesthetics but also productivity, employee well-being, and brand image. A well-executed commercial and office fit-out transforms a simple workplace into a hub of collaboration, creativity, and efficiency.

At Isma Design & Build, we create functional and inspiring work environments tailored to meet the unique needs of businesses across industries. Whether it's a corporate office, retail outlet, café, or co-working hub, our team ensures every design aligns with your brand identity and business goals.

## Why Office Design Matters

**1. Boosts Productivity**
Studies show that thoughtfully designed workspaces increase focus and efficiency. Natural light, ergonomic furniture, and optimal layouts all contribute to better performance.

**2. Enhances Employee Well-Being**
Employees spend nearly a third of their lives at work. A comfortable, supportive environment reduces stress and promotes job satisfaction.

**3. Strengthens Brand Identity**
Your office is a physical extension of your brand. From reception areas to meeting rooms, every detail reflects your values and professionalism.

**4. Optimizes Space Utilization**
Smart layouts ensure maximum use of available square footage, especially critical in cities where office space comes at a premium.

**5. Future-Proofing**
A flexible, modular design makes it easier to adapt as your company grows or embraces hybrid work.

## Key Elements of a Successful Commercial Fit-Out

**1. Space Planning**
- Open-plan vs. private offices
- Collaborative zones for brainstorming
- Quiet areas for focused tasks

**2. Brand-Driven Design**
Incorporating brand colors, logos, and visual themes into the space creates a strong identity.

**3. Ergonomics & Comfort**
Adjustable chairs, sit-stand desks, and acoustic panels ensure comfort and minimize distractions.

**4. Lighting Strategy**
- Natural light to reduce fatigue
- Task lighting for detail-oriented work
- Accent lighting for ambiance and style

**5. Technology Integration**
Smart boards, video conferencing systems, and seamless power access keep businesses efficient and connected.

**6. Sustainable Materials**
Eco-friendly finishes, energy-saving lights, and recycled materials reflect a modern, responsible business.

## Office Design Trends in 2025

- **Hybrid Workspaces** – Flexible areas for both remote and in-office teams.
- **Biophilic Design** – Plants, natural textures, and outdoor-inspired elements.
- **Activity-Based Working (ABW)** – Spaces tailored to specific tasks (focus zones, collaboration pods, relaxation lounges).
- **Sustainable & Green Offices** – Energy-efficient HVAC systems, solar solutions, and recycled finishes.
- **Smart Offices** – Automated lighting, booking systems for meeting rooms, and smart access control.

An office fit-out is not just about aesthetics—it's about creating a workplace that empowers people and strengthens business performance. With the right design, your workspace can foster innovation, collaboration, and long-term success.

At Isma Design & Build, we go beyond traditional design. We deliver future-proof, functional, and inspiring work environments that help businesses thrive.`,
    date: "2024-01-10",
    author: "Isma Design Build",
    category: "Commercial Design",
    image: "/images/Design & Build.jpg",
    excerpt: "Create inspiring workspaces that boost productivity and reflect your brand identity. Our commercial fit-out solutions transform offices into hubs of collaboration and success."
  },
  "custom-carpentry-furniture": {
    title: "Custom Carpentry & Furniture – Crafting Spaces with Personality and Precision",
    content: `Furniture is more than a functional necessity—it's what defines the personality, comfort, and flow of a space. While mass-produced pieces may serve a purpose, they rarely capture the uniqueness of your lifestyle, space, or brand identity. That's where custom carpentry and furniture solutions come in.

At Isma Design & Build, we specialize in designing and building bespoke carpentry solutions that blend aesthetics with practicality. From handcrafted wardrobes to statement dining tables and custom office cabinetry, our carpentry services allow clients to express individuality while maximizing functionality.

## Why Choose Custom Carpentry Over Ready-Made Furniture?

**1. Tailored Fit**
Unlike store-bought pieces, custom furniture is designed to fit perfectly into your space. This ensures no wasted corners and seamless integration.

**2. Personalized Style**
Every detail—from material to finish—reflects your taste, whether it's modern minimalism, rustic charm, or timeless luxury.

**3. Durability & Craftsmanship**
Custom furniture uses premium-quality materials and skilled craftsmanship, ensuring longevity compared to mass-produced options.

**4. Maximizes Space**
Especially useful for compact homes and offices, built-in solutions like wardrobes or shelves make the most of every square foot.

**5. Eco-Friendly Choices**
With the option to select sustainable woods and finishes, custom carpentry can reduce environmental impact.

## Types of Custom Carpentry We Provide

**1. Built-In Wardrobes & Storage Solutions**
Sleek, space-saving wardrobes with smart compartments tailored to your lifestyle.

**2. Kitchen Cabinetry**
Designed for both style and efficiency, with options for Blum hinges, Caesarstone countertops, and premium finishes.

**3. Custom Shelving & Display Units**
Showcase your collections, décor, or merchandise with tailored shelving.

**4. Office Furniture**
Functional workstations, reception counters, and storage systems built to reflect professionalism.

**5. Accent & Feature Furniture**
Unique statement pieces such as dining tables, TV consoles, and sideboards crafted to stand out.

## Design Trends in Custom Furniture

- **Minimalist Built-Ins** – Clean lines, hidden storage, and clutter-free spaces.
- **Natural Wood Finishes** – Oak, walnut, and ash bringing warmth and authenticity.
- **Multi-Functional Furniture** – Beds with storage, foldable tables, and convertible workspaces.
- **Statement Pieces** – Bold, handcrafted furniture that doubles as art.
- **Sustainable Materials** – Reclaimed wood and eco-friendly laminates.

## Tips for Choosing Custom Furniture

1. **Know Your Style** – Collect references from Pinterest, Instagram, or magazines.
2. **Set a Budget** – Custom furniture ranges in cost depending on materials and complexity.
3. **Think Long-Term** – Choose timeless designs that grow with your lifestyle.
4. **Prioritize Functionality** – A beautiful piece is only useful if it serves your daily needs.
5. **Work with Professionals** – Experienced firms like Isma Design & Build ensure quality results.

Custom carpentry and furniture go beyond filling a space—they define the space. By combining practicality, beauty, and craftsmanship, bespoke furniture turns ordinary rooms into personalized sanctuaries or productive workplaces.

At Isma Design & Build, we believe every piece of furniture should tell a story—your story. Whether it's a modern built-in wardrobe, a cozy reading nook, or a sleek reception counter, our carpentry services are designed to reflect your personality and elevate your space.`,
    date: "2024-01-05",
    author: "Isma Design Build",
    category: "Custom Furniture",
    image: "/images/Custom Built-in Furniture.jpg",
    excerpt: "Discover the art of bespoke furniture design. Our custom carpentry solutions blend functionality with personality, creating unique pieces tailored perfectly to your space and style."
  },
  "styling-decor": {
    title: "Styling & Décor – Bringing Character and Elegance into Every Space",
    content: `Interior design isn't complete without the final touches that bring life, warmth, and personality into a space. While architecture and carpentry provide the structure, it's the styling and décor that make a house feel like a home—or a workplace feel inviting and inspiring.

At Isma Design & Build, we believe styling is more than just adding furniture or accessories. It's about curating a cohesive atmosphere that reflects the people who live or work in the space. From residential interiors to commercial projects, our styling and décor services focus on details that elevate functionality, comfort, and aesthetics.

## Why Styling & Décor Matter

**1. Completes the Look**
Without décor, even the most well-designed spaces can feel empty or cold. Styling ties everything together for a polished finish.

**2. Creates Personality**
Décor reflects your lifestyle, culture, and values—making every space uniquely yours.

**3. Enhances Comfort**
Thoughtful placement of lighting, textures, and accessories improves both visual and physical comfort.

**4. Boosts Value**
Well-styled interiors often increase property appeal and resale value, especially for homes and offices.

## Elements of Styling & Décor

**1. Furniture Arrangement**
Creating flow and balance while maximizing usability.

**2. Color & Texture**
Selecting hues, patterns, and materials that enhance mood and style.

**3. Lighting Design**
Ambient, task, and accent lighting to highlight features and improve functionality.

**4. Accessories & Art**
Rugs, curtains, artworks, and decorative objects that give depth and personality.

**5. Greenery & Nature**
Indoor plants and natural elements to add freshness and life.

## Popular Décor Styles

- **Modern Minimalist** – Clean lines, neutral tones, clutter-free elegance.
- **Scandinavian** – Light wood, cozy textures, and functional simplicity.
- **Industrial Chic** – Raw materials, exposed steel, and bold accents.
- **Luxury Contemporary** – Sleek designs, premium finishes, and statement pieces.
- **Eclectic** – A creative mix of colors, patterns, and cultural elements.

## Styling Tips for Homeowners

1. **Layer Textures** – Combine wood, metal, fabric, and stone for depth.
2. **Play with Lighting** – Use floor lamps, pendants, and warm LEDs for atmosphere.
3. **Choose Statement Pieces** – Invest in a standout artwork or furniture piece as a focal point.
4. **Balance Proportions** – Avoid oversized furniture in small rooms and vice versa.
5. **Keep It Personal** – Add items that tell your story: family photos, travel souvenirs, or cultural artifacts.

Styling & décor are the soul of interior design. They transform walls and furniture into vibrant, livable spaces that feel authentic and inspiring. At Isma Design & Build, our styling services are designed to highlight your personality, enhance comfort, and create timeless beauty.

Whether you're refreshing a home, styling a new office, or preparing a commercial space, our team ensures that every detail contributes to a beautiful and functional environment.`,
    date: "2023-12-30",
    author: "Isma Design Build",
    category: "Interior Styling",
    image: "/images/Flooring & Curtains.jpg",
    excerpt: "Transform spaces with our expert styling and décor services. We create cohesive, personalized environments that reflect your personality and enhance both comfort and functionality."
  },
  "2d-3d-design-visualization": {
    title: "2D & 3D Design Visualization – From Concept to Reality",
    content: `One of the biggest challenges in interior design and renovation is helping clients imagine the final result before construction begins. Many homeowners and business owners struggle to visualize how colors, layouts, and furniture will come together. This often leads to hesitation, confusion, or even costly mistakes.

That's where 2D and 3D design visualization come in. At Isma Design & Build, we bridge the gap between imagination and reality by providing detailed drawings, 3D renders, and immersive visuals. These tools allow our clients to see their dream space before a single brick is laid or cabinet is built.

## Why Visualization Matters

**1. Clarity of Design**
Clients don't have to rely solely on descriptions or 2D floor plans—they can clearly see how the finished project will look.

**2. Informed Decision-Making**
Choosing materials, colors, and furniture becomes easier when you can preview them in a realistic render.

**3. Avoiding Costly Errors**
Misunderstandings between clients, designers, and contractors are reduced, saving both time and money.

**4. Confidence & Peace of Mind**
Clients feel more secure moving forward when they've already seen their future space.

## 2D vs. 3D Visualization – What's the Difference?

**2D Drawings**
These include floor plans, elevations, and layouts. They show dimensions, wall placements, and furniture arrangements. Perfect for technical clarity and authority approvals.

**3D Renderings**
These are realistic digital images or animations that show the actual look of the space—lighting, shadows, textures, and finishes. They help clients experience the design before it's built.

At Isma Design & Build, we combine 2D for accuracy and 3D for creativity, ensuring that every detail aligns with both technical and aesthetic expectations.

## Our Visualization Process

1. **Initial Consultation** - We discuss your ideas, requirements, and lifestyle needs.
2. **2D Floor Plan Development** - Our designers create detailed layouts showing how every space is used.
3. **3D Visualization** - We produce lifelike renders that bring the concept to life, showing lighting, colors, and materials in context.
4. **Client Feedback & Refinement** - Adjustments are made until the client is satisfied.
5. **Approval & Execution** - The approved visualization becomes the foundation for construction and renovation.

## Benefits for Different Clients

- **Homeowners** – See how their kitchen, living room, or bedroom will look before committing to renovation.
- **Business Owners** – Preview office layouts, reception areas, or retail spaces to ensure functionality and branding alignment.
- **Investors/Developers** – Use 3D visuals to market and sell properties before completion.

## Tools & Technology We Use

We use professional software for accuracy and realism:
- **AutoCAD & SketchUp** for 2D drawings
- **3ds Max, Lumion & V-Ray** for 3D photorealistic renders
- **Virtual Walkthroughs** for an immersive experience

## Common Misconceptions About Visualization

❌ **"It's just for luxury projects."**
Visualization is for everyone—it helps with small renovations and large builds alike.

❌ **"It makes the project more expensive."**
In fact, it saves money by preventing errors and rework.

❌ **"The final build won't match the render."**
When combined with quality materials and skilled execution, the final outcome matches closely with the 3D visuals.

2D and 3D design visualization aren't just add-ons—they are essential tools for a smooth, stress-free renovation journey. They provide clarity, confidence, and creativity while reducing risks and costs.

At Isma Design & Build, we believe every client deserves to see their dream space before construction begins. Whether you're planning a home renovation, a commercial fit-out, or custom furniture installation, our visualization services ensure your project is executed with precision and confidence.`,
    date: "2023-12-25",
    author: "Isma Design Build",
    category: "Design Visualization",
    image: "/images/Interior Design + Feng Shui (风水).jpg",
    excerpt: "Experience your future space before it's built. Our advanced 2D and 3D visualization services help you make confident decisions and avoid costly mistakes in your renovation journey."
  },
  "project-management-renovation": {
    title: "Project Management & Renovation Works – Ensuring Seamless Execution",
    content: `Renovating or building a space is an exciting journey, but it can also be overwhelming without the right guidance. Delays, budget overruns, and miscommunication are common risks in construction projects. That's why effective project management is essential. At Isma Design & Build, we combine strong leadership, structured processes, and renovation expertise to deliver projects that are not only beautiful but also timely, efficient, and stress-free.

## What is Project Management in Renovation?

Project management in construction and renovation is the process of planning, coordinating, and overseeing every detail of a project—from concept to completion. It ensures that:
- Budgets are controlled
- Timelines are respected
- Resources are used efficiently
- Work quality meets or exceeds expectations

In short, it's the backbone of successful renovation works.

## Why Project Management is Crucial

**1. Keeps Projects on Schedule**
Prevents costly delays and ensures timely handover.

**2. Controls Costs**
Manages budgets and reduces unnecessary spending.

**3. Improves Quality**
Ensures workmanship meets professional standards.

**4. Enhances Communication**
Keeps clients, designers, and contractors aligned.

**5. Reduces Stress**
Clients can focus on their lives while we handle the complexity.

## How We Manage Renovation Projects

At Isma Design & Build, we follow a structured approach:

1. **Initial Consultation** – Understanding the client's needs, budget, and vision.
2. **Planning & Design** – Creating detailed 2D/3D plans and securing approvals.
3. **Budgeting** – Providing transparent cost estimates with clear breakdowns.
4. **Scheduling** – Setting realistic timelines and milestones.
5. **Execution** – Overseeing construction, renovation, and coordination of trades.
6. **Quality Control** – Regular inspections to ensure standards are met.
7. **Handover** – Delivering a completed project, ready to live or work in.

## Renovation Works We Specialize In

- **Residential Renovations**: Transforming homes through extensions, kitchen remodels, bathroom upgrades, and complete makeovers.
- **Commercial & Office Fit-Outs**: Renovating business spaces for productivity, branding, and customer experience.
- **Structural Improvements**: Wall removals, extensions, and layout adjustments.
- **Aesthetic Updates**: Painting, flooring, ceilings, and finishes.
- **Systems & Utilities**: Plumbing, electrical works, and mechanical upgrades.

## Technology & Tools We Use

- **Project Management Software** – To track tasks, deadlines, and budgets
- **Gantt Charts & Timelines** – Clear visualizations of progress
- **3D Design Tools** – To preview renovations before execution
- **Quality Checklists** – Ensuring every detail is inspected before handover

## Common Challenges in Renovation & How We Solve Them

1. **Budget Overruns** → We set realistic estimates and keep clients updated
2. **Timeline Delays** → Strict scheduling and constant monitoring prevent slippage
3. **Material Shortages** → We pre-plan with trusted suppliers to avoid disruptions
4. **Unexpected Structural Issues** → Our experienced team provides quick, effective solutions

## Tips for Clients Considering Renovation

1. **Set a Realistic Budget**: Always include a contingency of 10–15%
2. **Be Clear on Priorities**: Decide what's essential vs. optional
3. **Trust the Process**: Constant changes delay projects—stick with approved plans
4. **Communicate Openly**: Share feedback early to avoid costly adjustments
5. **Work with Professionals**: An experienced team ensures quality and safety

Project management and renovation works go hand-in-hand. Without proper coordination, even the best design can fall apart in execution. At Isma Design & Build, we pride ourselves on delivering seamless renovations that are on time, on budget, and built to last. From concept and design to final handover, we manage every detail with precision—so clients can enjoy the excitement of transformation without the stress.`,
    date: "2023-12-20",
    author: "Isma Design Build",
    category: "Project Management",
    image: "/images/Local Authority Submission & Approval.jpg",
    excerpt: "Ensure your renovation project runs smoothly from start to finish. Our comprehensive project management approach delivers quality results on time and within budget."
  }
};

const allSlugs = Object.keys(blogData);

const featuredPackages = [
  {
    id: "basic-renovation",
    name: "Basic Renovation Package",
    price: "RM 15,000",
    originalPrice: "RM 18,000",
    category: "Renovation",
    rating: 4.8,
    reviews: 24,
    image: "/images/Construction & Renovation.jpg",
    description: "Complete basic renovation solution for small to medium spaces.",
    keyFeatures: [
      "Initial consultation and site visit",
      "Basic 2D floor plan design",
      "Painting (2 coats) for all walls",
      "Project management"
    ]
  },
  {
    id: "premium-design",
    name: "Premium Design Package",
    price: "RM 35,000",
    originalPrice: "RM 42,000",
    category: "Interior Design",
    rating: 4.9,
    reviews: 18,
    image: "/images/Design & Build.jpg",
    description: "Complete interior design solution with custom elements and premium finishes.",
    keyFeatures: [
      "Comprehensive design consultation",
      "3D visualization and walkthroughs",
      "Custom furniture design",
      "6 months workmanship warranty"
    ]
  },
  {
    id: "kitchen-makeover",
    name: "Kitchen Makeover Package",
    price: "RM 18,000",
    originalPrice: "RM 22,000",
    category: "Kitchen",
    rating: 4.7,
    reviews: 31,
    image: "/images/Custom Built-in Furniture.jpg",
    description: "Transform your kitchen with modern design and functional storage solutions.",
    keyFeatures: [
      "Custom kitchen cabinet system",
      "Quartz countertop installation",
      "Backsplash tiling",
      "Kitchen lighting upgrade"
    ]
  },
  {
    id: "home-styling",
    name: "Home Styling Package",
    price: "RM 8,500",
    originalPrice: "RM 12,000",
    category: "Styling",
    rating: 4.6,
    reviews: 42,
    image: "/images/Local Authority Submission & Approval.jpg",
    description: "Complete home styling with furniture, décor, and finishing touches.",
    keyFeatures: [
      "Style consultation and mood boarding",
      "Furniture selection and procurement",
      "Soft furnishing coordination",
      "Styling and arrangement service"
    ]
  },
  {
    id: "bathroom-renovation",
    name: "Bathroom Renovation Package",
    price: "RM 12,000",
    originalPrice: "RM 15,000",
    category: "Renovation",
    rating: 4.7,
    reviews: 28,
    image: "/images/Flooring & Curtains.jpg",
    description: "Complete bathroom makeover with modern fixtures and quality finishes.",
    keyFeatures: [
      "Complete bathroom design",
      "Premium tiles and fixtures",
      "Waterproofing and plumbing",
      "Modern lighting installation"
    ]
  }
];

const whatsappMessage = (packageName: string, price: string) => {
  return `Hi Isma Design & Build! I'm interested in the ${packageName} (${price}). Can you provide more details?`;
};

const whatsappLink = (message: string) => {
  return `https://wa.me/60189023676?text=${encodeURIComponent(message)}`;
};

const recentPosts = [
  {
    id: "residential-design-renovation",
    title: "Residential Design & Renovation – Turning Houses into Dream Homes",
    excerpt: "Transform your house into a dream home with our residential design and renovation expertise. From concept to completion, we create functional, beautiful, and timeless living spaces.",
    date: "2024-01-15",
    image: "/images/Construction & Renovation.jpg",
    slug: "residential-design-renovation"
  },
  {
    id: "commercial-office-fitout",
    title: "Commercial & Office Fit-Out – Designing Workspaces That Inspire Success",
    excerpt: "Create inspiring workspaces that boost productivity and reflect your brand identity. Our commercial fit-out solutions transform offices into hubs of collaboration and success.",
    date: "2024-01-10",
    image: "/images/Design & Build.jpg",
    slug: "commercial-office-fitout"
  },
  {
    id: "custom-carpentry-furniture",
    title: "Custom Carpentry & Furniture – Crafting Spaces with Personality and Precision",
    excerpt: "Discover the art of bespoke furniture design. Our custom carpentry solutions blend functionality with personality, creating unique pieces tailored perfectly to your space and style.",
    date: "2024-01-05",
    image: "/images/Custom Built-in Furniture.jpg",
    slug: "custom-carpentry-furniture"
  }
];

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogData[resolvedParams.slug as keyof typeof blogData];
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      comment: "Great article! Very informative and helpful.",
      date: "2024-01-16",
      avatar: "/images/hero 1.jpg"
    },
    {
      id: 2,
      name: "Sarah Lee",
      email: "sarah@example.com",
      comment: "Thanks for sharing these tips. Looking forward to more content like this.",
      date: "2024-01-17",
      avatar: "/images/hero 2.jpg"
    }
  ]);
  const [newComment, setNewComment] = useState({ name: "", email: "", comment: "" });
  const [showShareMenu, setShowShareMenu] = useState(false);

  if (!post) {
    notFound();
  }

  const currentIndex = allSlugs.indexOf(resolvedParams.slug);
  const previousPost = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextPost = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name && newComment.email && newComment.comment) {
      const comment = {
        id: comments.length + 1,
        name: newComment.name,
        email: newComment.email,
        comment: newComment.comment,
        date: new Date().toISOString().split('T')[0],
        avatar: "/images/hero 3.jpg"
      };
      setComments([...comments, comment]);
      setNewComment({ name: "", email: "", comment: "" });
    }
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert('Link copied to clipboard!');
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  };

  return (
    <div className="min-h-screen bg-white">
      <article className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Left Content - Blog Post */}
            <div className="lg:col-span-3 order-1 lg:order-1">
          <ScrollAnimated animationType="fade-in" threshold={0.1}>
            <div className="mb-8">
              <Link
                href="/blogs"
                className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>

              <div className="mb-6">
                <span className="bg-gray-100 text-gray-900 px-3 py-1 text-sm font-semibold">
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center space-x-6 mb-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>
          </ScrollAnimated>

          <ScrollAnimated animationType="slide-up" delay={200} threshold={0.1}>
            <div className="relative aspect-[16/9] mb-12 overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimated>

          <ScrollAnimated animationType="fade-in" delay={400} threshold={0.1}>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>

              <div className="text-gray-700 leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return (
                      <h3 key={index} className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                        {paragraph.replace(/\*\*/g, '')}
                      </h3>
                    );
                  } else if (paragraph.startsWith('- ')) {
                    const listItems = paragraph.split('\n- ').map(item => item.replace(/^- /, ''));
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                        {listItems.map((item, itemIndex) => (
                          <li key={itemIndex}>{item.replace(/\*\*/g, '')}</li>
                        ))}
                      </ul>
                    );
                  } else if (paragraph.match(/^\d+\./)) {
                    const listItems = paragraph.split(/\n\d+\./).map(item => item.replace(/^\d+\.\s*/, ''));
                    return (
                      <ol key={index} className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                        {listItems.map((item, itemIndex) => (
                          <li key={itemIndex}>{item.replace(/\*\*/g, '')}</li>
                        ))}
                      </ol>
                    );
                  } else if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').split('<strong>').map((part, partIndex) => {
                          if (part.includes('</strong>')) {
                            const [boldText, rest] = part.split('</strong>');
                            return (
                              <span key={partIndex}>
                                <strong>{boldText}</strong>
                                {rest}
                              </span>
                            );
                          }
                          return part;
                        })}
                      </p>
                    );
                  }
                  return null;
                })}

                <div className="mt-12 p-6 bg-gray-50 border-l-4 border-gray-900">
                  <p className="text-gray-700 leading-relaxed">
                    Contact Isma Design Build for your next interior design or renovation project.
                    Our experienced team is ready to bring your vision to life with professional
                    expertise and quality craftsmanship.
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimated>

          {/* Share Buttons */}
          <ScrollAnimated animationType="fade-in" delay={500} threshold={0.1}>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0">
                <h3 className="text-lg font-semibold text-gray-900">Share this article</h3>
                <div className="flex items-center space-x-3">
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={shareLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-sky-500 text-white hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-blue-700 text-white hover:bg-blue-800 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center justify-center w-10 h-10 bg-gray-600 text-white hover:bg-gray-700 transition-colors"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimated>

          {/* Comments Section */}
          <ScrollAnimated animationType="fade-in" delay={700} threshold={0.1}>
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">
                Comments ({comments.length})
              </h3>

              {/* Existing Comments */}
              <div className="space-y-8 mb-12">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-gray-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                        <span className="text-sm text-gray-500">
                          {new Date(comment.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{comment.comment}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Comment Form */}
              <div className="bg-gray-50 p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Leave a Comment</h4>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={newComment.name}
                        onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={newComment.email}
                        onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                      Comment *
                    </label>
                    <textarea
                      id="comment"
                      rows={4}
                      required
                      value={newComment.comment}
                      onChange={(e) => setNewComment({ ...newComment, comment: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                      placeholder="Share your thoughts..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-6 py-3 font-semibold hover:bg-gray-800 transition-colors flex items-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Post Comment</span>
                  </button>
                </form>
              </div>
            </div>
          </ScrollAnimated>

          <ScrollAnimated animationType="slide-up" delay={600} threshold={0.1}>
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                {previousPost && (
                  <Link
                    href={`/blogs/${previousPost}`}
                    className="group flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Previous Post</div>
                      <div className="font-medium">{blogData[previousPost as keyof typeof blogData].title}</div>
                    </div>
                  </Link>
                )}

                {nextPost && (
                  <Link
                    href={`/blogs/${nextPost}`}
                    className="group flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors md:text-right"
                  >
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Next Post</div>
                      <div className="font-medium">{blogData[nextPost as keyof typeof blogData].title}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          </ScrollAnimated>
            </div>

            {/* Right Sidebar - Packages */}
            <div className="lg:col-span-1 order-2 lg:order-2">
              <ScrollAnimated animationType="slide-right" threshold={0.1}>
                <div className="sticky top-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Packages</h3>

                  {/* Desktop: Vertical stack, Mobile: Horizontal scroll */}
                  <div className="lg:space-y-6 lg:block flex lg:overflow-visible overflow-x-auto gap-6 pb-4 lg:pb-0 packages-scroll">
                    {featuredPackages.slice(0, 5).map((pkg, index) => (
                      <div key={pkg.id} className="bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:w-auto w-72 flex-shrink-0">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image
                            src={pkg.image}
                            alt={pkg.name}
                            fill
                            className="object-cover"
                          />
                          {pkg.originalPrice && (
                            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold">
                              Save {Math.round(((parseFloat(pkg.originalPrice.replace(/[^0-9]/g, '')) - parseFloat(pkg.price.replace(/[^0-9]/g, ''))) / parseFloat(pkg.originalPrice.replace(/[^0-9]/g, ''))) * 100)}%
                            </div>
                          )}
                        </div>

                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="bg-gray-100 text-gray-800 px-2 py-1 text-xs font-medium">
                              {pkg.category}
                            </span>
                            <div className="flex items-center space-x-1">
                              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                              <span className="text-xs font-medium">{pkg.rating}</span>
                            </div>
                          </div>

                          <h4 className="font-semibold text-gray-900 mb-2 text-sm">{pkg.name}</h4>

                          <p className="text-gray-600 text-xs leading-relaxed mb-3">
                            {pkg.description}
                          </p>

                          <div className="mb-4">
                            <div className="flex items-baseline space-x-2">
                              <span className="text-lg font-bold text-gray-900">{pkg.price}</span>
                              {pkg.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                              )}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <a
                              href={whatsappLink(whatsappMessage(pkg.name, pkg.price))}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full bg-gray-900 text-white text-center py-2 px-3 text-xs font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-1"
                            >
                              <MessageCircle className="w-3 h-3" />
                              <span>Get Quote</span>
                            </a>
                            <Link
                              href="/offers"
                              className="w-full border border-gray-300 text-gray-700 text-center py-2 px-3 text-xs font-semibold hover:bg-gray-50 transition-colors block"
                            >
                              View All Packages
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimated>
            </div>
          </div>
        </div>
      </article>

      {/* Recent Posts Section */}
      <ScrollAnimated animationType="fade-in" threshold={0.1}>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                Recent Posts
              </h2>
              <p className="text-sm md:text-base text-gray-600">
                Discover more insights and tips from our latest articles
              </p>
            </div>

            {/* Desktop: Grid layout, Mobile: Horizontal scroll */}
            <div className="md:grid md:grid-cols-3 md:gap-8 max-w-6xl mx-auto flex md:overflow-visible overflow-x-auto gap-6 pb-4 md:pb-0 packages-scroll">
              {recentPosts.filter(recentPost => recentPost.slug !== resolvedParams.slug).slice(0, 3).map((recentPost, index) => (
                <ScrollAnimated
                  key={recentPost.id}
                  animationType={index % 2 === 0 ? 'slide-left' : 'slide-right'}
                  delay={index * 100}
                  threshold={0.1}
                >
                  <Link href={`/blogs/${recentPost.slug}`}>
                    <article className="group cursor-pointer bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg md:w-auto w-80 flex-shrink-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={recentPost.image}
                          alt={recentPost.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3 text-xs text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(recentPost.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</span>
                        </div>

                        <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                          {recentPost.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {recentPost.excerpt}
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

            <div className="text-center mt-12">
              <Link
                href="/blogs"
                className="bg-gray-900 text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors inline-flex items-center space-x-2"
              >
                <span>View All Posts</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </ScrollAnimated>
    </div>
  );
}