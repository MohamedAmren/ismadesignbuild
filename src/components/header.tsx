"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 pt-6">
                <div className="text-2xl font-bold text-gray-900">
                  Isma Design & Build
                </div>
                <div className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg font-medium transition-colors hover:opacity-80 ${
                        pathname === item.href
                          ? "text-gray-900"
                          : "text-gray-600"
                      }`}
                      style={pathname === item.href ? {color: '#003153'} : {}}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="mt-4 text-white hover:bg-blue-800 w-fit"
                    style={{backgroundColor: '#003153'}}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}