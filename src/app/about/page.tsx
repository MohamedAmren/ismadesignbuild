"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollAnimated } from "@/hooks/useScrollAnimation";






export default function AboutPage() {
  return (
    <div>
      {/* Top Text Section */}
      <ScrollAnimated animationType="fade-in" delay={200}>
        <section className="bg-white py-6 sm:py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">

              {/* Left: Design & Build Title */}
              <ScrollAnimated animationType="slide-left" delay={400}>
                <div>
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                    Design & Build
                  </h1>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    based in Kota Kinabalu Sabah
                  </p>
                </div>
              </ScrollAnimated>

              {/* Right: Description Text */}
              <ScrollAnimated animationType="slide-right" delay={600}>
                <div className="text-center lg:text-right mt-4 lg:mt-0">
                  <p className="text-sm text-gray-900 leading-relaxed">
                    We are a passionate team dedicated to helping our clients live better through thoughtful design and precise builds, creating spaces that inspire comfort, function, and lasting value</p>
                </div>
              </ScrollAnimated>
            </div>
          </div>
        </section>
      </ScrollAnimated>

      {/* Image Hero Section */}
      <ScrollAnimated animationType="scale-in" delay={300}>
        <section className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[41rem] bg-cover bg-center bg-no-repeat text-gray-900 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/images/hero%201.jpg')`
          }}>

          {/* Image Section - No text overlay, just pure image */}
          <div className="relative z-10 h-full flex items-center">
            {/* Pure architectural image background - no text overlay */}
          </div>
        </section>
      </ScrollAnimated>

      {/* Why We're Different Section - Following Concept Exact Layout */}
      <ScrollAnimated animationType="fade-in" delay={200}>
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 items-end">

              {/* Left Column - Main Content + WHY WE'RE DIFFERENT + Bottom Image */}
              <ScrollAnimated animationType="slide-left" delay={400}>
                <div className="lg:col-span-1 space-y-6 sm:space-y-8">
                  {/* Main headline and subtext and button */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                        We’re transforming the interior design journey by combining thoughtful concepts, quality materials, and precise execution.
                      </h2>
                      <p className="text-sm text-gray-900 leading-relaxed">
                        From initial consultation to final handover, we deliver exceptional spaces that reflect your lifestyle and enhance your daily living experience.
                      </p>
                    </div>
                  </div>

                  {/* Bottom Image - Clean Team Photo */}
                  <div className="relative h-40 sm:h-48 md:h-64  overflow-hidden">
                    <Image
                      src="/images/hero%202.jpg"
                      alt="Design consultation process"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </ScrollAnimated>

              {/* Center Column - Statistics */}
              <ScrollAnimated animationType="slide-up" delay={600}>
                <div className="lg:col-span-1 mt-8 lg:mt-0">
                  <div className="space-y-6 sm:space-y-8 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">50+</div>
                  <p className="text-sm text-gray-500 leading-relaxed">Projects completed across Sabah</p>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">10+</div>
                  <p className="text-sm text-gray-500 leading-relaxed">Years of expertise</p>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">200+</div>
                  <p className="text-sm text-gray-500 leading-relaxed">Custom furniture pieces created</p>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">98%</div>
                  <p className="text-sm text-gray-500 leading-relaxed">Client satisfaction rating</p>
                </div>

                <div>
                  <div className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">3x</div>
                  <p className="text-sm text-gray-500 leading-relaxed">Faster average project delivery</p>
                </div>
                  </div>
                </div>
              </ScrollAnimated>

              {/* Right Column - Large Team Photo */}
              <ScrollAnimated animationType="slide-right" delay={800}>
                <div className="lg:col-span-1">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]  overflow-hidden mt-8 lg:mt-0">
                    <Image
                      src="/images/hero%203.jpg"
                      alt="Isma Design & Build team"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </ScrollAnimated>
            </div>
          </div>
        </section>
      </ScrollAnimated>

      {/* Core Values - Following Concept Layout */}
      <ScrollAnimated animationType="fade-in" delay={200}>
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

              {/* Left Column - Large Interior Design Image */}
              <ScrollAnimated animationType="slide-left" delay={400}>
                <div className="order-2 lg:order-1">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]  overflow-hidden bg-gray-200">
                <Image
                  src="/images/hero%204.jpg"
                  alt="Interior design showcase"
                  fill
                  className="object-cover"
                />
              </div>
                </div>
              </ScrollAnimated>

              {/* Right Column - Content */}
              <ScrollAnimated animationType="slide-right" delay={600}>
                <div className="order-1 lg:order-2 space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              {/* Main Heading and Description */}
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                  Turning interior design into a personal experience
                </h2>

                <div className="space-y-4 text-gray-900">
                  <p className="text-sm leading-relaxed">
                    We help homeowners discover, explore, and secure the right design solution—without the friction. From high-quality consultations and intelligent design planning to in-app booking and expert guidance, we simplify every step of the journey.
                  </p>

                  <p className="text-sm leading-relaxed">
                    We started Isma Design & Build to fix what traditional design services miss: verified expertise, helpful guidance, and design that puts people first.
                  </p>
                </div>
              </div>

              {/* WHY WE'RE DIFFERENT - Core Values */}
              <div className="space-y-6">
                <h3 className="text-xs font-semibold text-gray-500 tracking-wider uppercase">
                  WHY WE'RE DIFFERENT
                </h3>

                <div className="space-y-4">
                  {/* First Row */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white  text-xs sm:text-sm font-semibold text-gray-700 border border-gray-200">
                      Quality Craftsmanship
                    </span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white  text-xs sm:text-sm font-semibold text-gray-700 border border-gray-200">
                      Transparent Pricing
                    </span>
                  </div>

                  {/* Second Row */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white  text-xs sm:text-sm font-semibold text-gray-700 border border-gray-200">
                      No Hidden Costs
                    </span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white  text-xs sm:text-sm font-semibold text-gray-700 border border-gray-200">
                      Expert Consultation
                    </span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white  text-xs sm:text-sm font-semibold text-gray-700 border border-gray-200">
                      Local Expertise
                    </span>
                  </div>

                  {/* Third Row */}
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white  text-xs sm:text-sm font-semibold text-gray-700 border border-gray-200">
                      Client-First Approach
                    </span>
                    <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white  text-xs sm:text-sm font-semibold text-gray-700 border border-gray-200">
                      Premium Materials
                    </span>
                  </div>
                </div>
              </div>
                </div>
              </ScrollAnimated>
            </div>
          </div>
        </section>
      </ScrollAnimated>

      {/* Our Operating Principles */}
      <ScrollAnimated animationType="fade-in" delay={200}>
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Header Section */}
            <ScrollAnimated animationType="slide-up" delay={400}>
              <div className="text-center sm:text-left mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  Our operating principles
                </h2>
                <p className="text-sm text-gray-900 max-w-3xl leading-relaxed">
                  We believe our work and relationships with clients are the products of our culture—here's what matters most to us as we deliver exceptional interior design and build services across Sabah.
                </p>
              </div>
            </ScrollAnimated>

            {/* Principles Grid - 2 rows x 4 columns */}
            <ScrollAnimated animationType="scale-in" delay={600}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">

            {/* Row 1 */}
            {/* Card 1: Client-First Approach */}
            <div className="bg-white border border-gray-100  p-4 sm:p-6 hover:shadow-sm transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-2 sm:px-3 py-1 bg-blue-50 text-gray-900 text-xs font-semibold ">
                  Client Service
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                Client-First Approach
              </h3>
              <p className="text-sm text-gray-900 leading-relaxed">
                Every project begins with understanding your lifestyle, needs, and goals.
              </p>
            </div>

            {/* Card 2: Build with Precision */}
            <div className="bg-white border border-gray-100  p-4 sm:p-6 hover:shadow-sm transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-50 text-green-600 text-xs font-semibold ">
                  Craftsmanship
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                Build with Precision
              </h3>
              <p className="text-sm text-gray-900 leading-relaxed">
                We focus on details at every stage, from drawings to final handover.
              </p>
            </div>

            {/* Card 3: Quality You Can Trust */}
            <div className="bg-white border border-gray-100  p-4 sm:p-6 hover:shadow-sm transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-purple-50 text-purple-600 text-xs font-semibold ">
                  Materials
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                Quality You Can Trust
              </h3>
              <p className="text-sm text-gray-900 leading-relaxed">
                Using reliable brands like Nippon Paint, Blum, Caesarstone, and TOTO to ensure lasting value.
              </p>
            </div>

            {/* Card 4: Transparent Process */}
            <div className="bg-white border border-gray-100  p-4 sm:p-6 hover:shadow-sm transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold ">
                  Communication
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                Transparent Process
              </h3>
              <p className="text-sm text-gray-900 leading-relaxed">
                Clear scopes, pricing, and timelines with consistent updates to clients.
              </p>
            </div>

            {/* Row 2 */}
            {/* Card 5: On-Time Delivery */}
            <div className="bg-white border border-gray-100  p-4 sm:p-6 hover:shadow-sm transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold ">
                  Reliability
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                On-Time Delivery
              </h3>
              <p className="text-sm text-gray-900 leading-relaxed">
                Committed to realistic schedules and disciplined project management.
              </p>
            </div>

            {/* Card 6: Safety & Compliance */}
            <div className="bg-white border border-gray-100  p-4 sm:p-6 hover:shadow-sm transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-teal-50 text-teal-600 text-xs font-semibold ">
                  Standards
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                Safety & Compliance
              </h3>
              <p className="text-sm text-gray-900 leading-relaxed">
                Every build follows industry standards and local regulations.
              </p>
            </div>

            {/* Card 7: Craftsmanship & Accountability */}
            <div className="bg-white border border-gray-100  p-4 sm:p-6 hover:shadow-sm transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold ">
                  Excellence
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                Craftsmanship & Accountability
              </h3>
              <p className="text-sm text-gray-900 leading-relaxed">
                Skilled teams, supervised work, and a dedication to excellence.
              </p>
            </div>

            {/* Card 8: Sustainable Choices */}
            <div className="bg-white border border-gray-100  p-4 sm:p-6 hover:shadow-sm transition-shadow">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-600 text-xs font-semibold ">
                  Sustainability
                </span>
              </div>
              <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                Sustainable Choices
              </h3>
              <p className="text-sm text-gray-900 leading-relaxed">
                Designs that balance aesthetics with durability, efficiency, and responsibility.
              </p>
            </div>

              </div>
            </ScrollAnimated>
          </div>
        </section>
      </ScrollAnimated>

      {/* Our Process Section */}
      <ScrollAnimated animationType="fade-in" delay={200}>
        <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Header Section */}
            <ScrollAnimated animationType="slide-up" delay={400}>
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4 leading-tight">
                  How We Deliver
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed">
                  We make building simple, reliable, and stress-free.
                </p>
              </div>
            </ScrollAnimated>

            {/* Process Steps Grid */}
            <ScrollAnimated animationType="scale-in" delay={600}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">

                {/* Step 1: Consultation */}
                <ScrollAnimated animationType="fade-in" delay={800}>
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-lg font-bold text-gray-900">01.</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                    Consultation
                  </h3>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    We begin with a detailed discussion to understand your needs, style, and budget.
                  </p>
                </div>
                </ScrollAnimated>

                {/* Step 2: Site Measure & Planning */}
                <ScrollAnimated animationType="fade-in" delay={900}>
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-lg font-bold text-gray-900">02.</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                    Site Measure & Planning
                  </h3>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    Accurate measurements and layout planning to ensure a perfect fit and functional design.
                  </p>
                </div>
                </ScrollAnimated>

                {/* Step 3: Design & Proposal */}
                <ScrollAnimated animationType="fade-in" delay={1000}>
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-lg font-bold text-gray-900">03.</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                    Design & Proposal
                  </h3>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    Creative concepts, realistic 3D visuals, and clear cost estimates tailored to match your vision and needs.
                  </p>
                </div>
                </ScrollAnimated>

                {/* Step 4: Build & Execution */}
                <ScrollAnimated animationType="fade-in" delay={1100}>
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-lg font-bold text-gray-900">04.</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                    Build & Execution
                  </h3>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    Skilled craftsmen bring the design to life using quality materials and precise workmanship.
                  </p>
                </div>
                </ScrollAnimated>

                {/* Step 5: Handover & Aftercare */}
                <ScrollAnimated animationType="fade-in" delay={1200}>
                <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                  <div className="mb-4">
                    <span className="text-lg font-bold text-gray-900">05.</span>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
                    Handover & Aftercare
                  </h3>
                  <p className="text-sm text-gray-900 leading-relaxed">
                    Final inspection, client walkthrough, and ongoing support to ensure lasting satisfaction.
                  </p>
                </div>
                </ScrollAnimated>

              </div>
            </ScrollAnimated>
          </div>
        </section>
      </ScrollAnimated>

      {/* Our Team Section */}
      <ScrollAnimated animationType="fade-in" delay={200}>
        <section className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">

            {/* Header Section */}
            <ScrollAnimated animationType="slide-up" delay={400}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12 md:mb-16">
                {/* Left - Title */}
                <div className="text-center lg:text-left">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                    Our Team
                  </h2>
                </div>
                {/* Right - Description */}
                <div className="flex items-center">
                  <p className="text-sm text-gray-900 leading-relaxed text-center lg:text-left">
                    Our small team work closely together to ensure continuity and personal service for our clients. Our shared goal is an enjoyable and stress-free building experience, to create a unique, quality home for you.
                  </p>
                </div>
              </div>
            </ScrollAnimated>

            {/* Team Grid - 2 rows x 3 columns */}
            <ScrollAnimated animationType="scale-in" delay={600}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Row 1 */}
            {/* Team Member 1 */}
            <div className="space-y-3 sm:space-y-4">
              <div className="relative h-64 sm:h-80 md:h-96  overflow-hidden bg-gray-200">
                <Image
                  src="/images/team1.jpg"
                  alt="Ismail Ahmad"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 "></div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Ismail Ahmad</h3>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 "></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">FOUNDER</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="space-y-3 sm:space-y-4">
              <div className="relative h-64 sm:h-80 md:h-96  overflow-hidden bg-gray-200">
                <Image
                  src="/images/team2.jpg"
                  alt="Sarah Lee"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 "></div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Sarah Lee</h3>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 "></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">PROJECT MANAGER</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="space-y-3 sm:space-y-4">
              <div className="relative h-64 sm:h-80 md:h-96  overflow-hidden bg-gray-200">
                <Image
                  src="/images/team3.jpg"
                  alt="Ahmad Razak"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 "></div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Ahmad Razak</h3>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 "></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">MASTER CRAFTSMAN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2 */}
            {/* Team Member 4 */}
            <div className="space-y-3 sm:space-y-4">
              <div className="relative h-64 sm:h-80 md:h-96  overflow-hidden bg-gray-200">
                <Image
                  src="/images/team4.jpg"
                  alt="Linda Wong"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 "></div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Linda Wong</h3>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 "></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">INTERIOR DESIGNER</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="space-y-3 sm:space-y-4">
              <div className="relative h-64 sm:h-80 md:h-96  overflow-hidden bg-gray-200">
                <Image
                  src="/images/team5.jpg"
                  alt="David Tan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 "></div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">David Tan</h3>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 "></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">SITE SUPERVISOR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="space-y-3 sm:space-y-4">
              <div className="relative h-64 sm:h-80 md:h-96  overflow-hidden bg-gray-200">
                <Image
                  src="/images/team6.jpg"
                  alt="Maria Santos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 "></div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">Maria Santos</h3>
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 "></div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-900">ADMIN COORDINATOR</span>
                  </div>
                </div>
              </div>
            </div>

              </div>
            </ScrollAnimated>
          </div>
        </section>
      </ScrollAnimated>
    </div>
  );
}