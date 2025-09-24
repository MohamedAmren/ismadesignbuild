"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ScrollAnimated } from "@/hooks/useScrollAnimation";

export default function GlobalCTA() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-32 overflow-hidden bg-black">
      {/* No background image needed for black background */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Heading */}
          <ScrollAnimated animationType="slide-left" threshold={0.2}>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                UNLOCK YOUR<br />DREAM HOME<br />TODAY!
              </h2>
            </div>
          </ScrollAnimated>

          {/* Right - Text and Buttons */}
          <ScrollAnimated animationType="slide-right" threshold={0.2} delay={200}>
            <div className="space-y-8">
              <p className="text-lg text-gray-200 leading-relaxed">
                We encourage clients to actively participate in discussions, share their ideas, preferences, and feedback.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
              {isHomePage ? (
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white hover:bg-blue-800 transition-colors"
                  style={{backgroundColor: '#003153'}}
                >
                  Get in touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              ) : (
                <Button
                  asChild
                  size="lg"
                  className="text-white hover:bg-blue-800 px-8 py-4 text-lg font-semibold"
                  style={{backgroundColor: '#003153'}}
                >
                  <Link href="/contact">
                    Get in touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              )}
              <Button
                asChild
                size="lg"
                variant="outline"
                className="inline-flex items-center justify-center text-white border-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <a href="tel:+60189023676">
                  Call us +60 18-902 3676
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              </div>
            </div>
          </ScrollAnimated>
        </div>
      </div>
    </section>
  );
}