"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappLink = "https://wa.me/60189023676?text=Hi%20Isma%20Design%20%26%20Build!%20I'm%20interested%20in%20your%20services.";

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
          {/* Left - Company Info */}
          <div className="space-y-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
              Isma Design<br />
              & Build
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Develops conceptual design ideas, refines them into detailed plans.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white hover:bg-blue-800 transition-colors"
              style={{backgroundColor: '#003153'}}
            >
              Get in touch
            </button>
          </div>

          {/* Center - Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
            <div className="space-y-4">
              {[
                { name: "Projects", href: "/projects" },
                { name: "About", href: "/about" },
                { name: "Offers", href: "/offers" },
                { name: "Payment Methods", href: "/payment-methods" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-base text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Third - Additional Pages */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-wider">Pages</h3>
            <div className="space-y-4">
              {[
                { name: "Terms & Condition", href: "/terms" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "FAQs", href: "/faqs" },
                { name: "Portfolio", href: "/projects" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-base text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Fourth - Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-wider">Contact</h3>
            <div className="space-y-4">
              <div className="block text-base text-gray-300">
                Kota Kinabalu, Sabah<br />
                Malaysia
              </div>
              <div className="block text-base text-gray-300">
                +60 18-902 3676
              </div>
              <div className="block text-base text-gray-300">
                hello@ismadesignbuild.com
              </div>
            </div>
          </div>

          {/* Fifth - Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-400 uppercase tracking-wider">Social</h3>
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/ismadesignbuild"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-gray-300 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/ismadesignbuild"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-gray-300 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@ismadesignbuild"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-gray-300 hover:text-white transition-colors"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>


        {/* Payment Methods */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-center mb-8">
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">We Accept</h4>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {[
                { name: "Visa" },
                { name: "Mastercard" },
                { name: "Atome" },
                { name: "Grab" },
                { name: "Shopee" },
                { name: "AEON" }
              ].map((payment, index) => (
                <div
                  key={index}
                  className="bg-gray-800 border border-gray-700 px-3 py-2 rounded text-xs font-medium text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  {payment.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 text-center border-t border-gray-800">
          <p className="text-base text-gray-500">
            © {currentYear} Isma Design & Build. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}