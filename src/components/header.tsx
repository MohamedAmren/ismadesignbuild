"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Offers", href: "/offers" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-gray-900">
            Isma Design & Build
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:opacity-80 ${
                pathname === item.href
                  ? "text-gray-900"
                  : "text-gray-600"
              }`}
              style={pathname === item.href ? {color: '#003153'} : {}}
            >
              {item.name}
            </Link>
          ))}
          <Button
            asChild
            className="ml-4 text-white hover:bg-blue-800"
            style={{backgroundColor: '#003153'}}
          >
            <Link href="/contact">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0">
              <div className="flex flex-col h-full bg-white">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="text-xl font-bold text-gray-900">
                    Isma Design & Build
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-6 py-8">
                  <nav className="flex flex-col space-y-2">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`group flex items-center justify-between p-4 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                          pathname === item.href
                            ? "bg-blue-50 text-blue-900 border-l-4 border-blue-600"
                            : "text-gray-700 hover:text-gray-900"
                        }`}
                        style={pathname === item.href ? {borderLeftColor: '#003153', backgroundColor: '#f0f9ff'} : {}}
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="text-lg font-medium">{item.name}</span>
                        <ArrowRight className={`h-5 w-5 transition-transform ${
                          pathname === item.href ? 'text-blue-600' : 'text-gray-400 group-hover:translate-x-1'
                        }`}
                        style={pathname === item.href ? {color: '#003153'} : {}}
                        />
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Footer with CTA and Contact */}
                <div className="p-6 border-t border-gray-100 bg-gray-50">
                  <div className="space-y-4">
                    <Button
                      asChild
                      className="w-full text-white hover:bg-blue-800 h-12 text-lg font-semibold"
                      style={{backgroundColor: '#003153'}}
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/contact" className="flex items-center justify-center space-x-2">
                        <span>Get Quote</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </Button>

                    <a
                      href="tel:+60189023676"
                      className="flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="text-sm font-medium">+60 18-902 3676</span>
                    </a>

                    <div className="text-center">
                      <p className="text-xs text-gray-500">
                        Kota Kinabalu, Sabah, Malaysia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}