"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappLink = "https://wa.me/60189023676?text=Hi%20Isma%20Design%20%26%20Build!%20I'm%20interested%20in%20your%20services.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}