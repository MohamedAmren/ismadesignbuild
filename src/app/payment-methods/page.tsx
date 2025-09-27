"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollAnimated } from "@/hooks/useScrollAnimation";
import {
  CheckCircle,
  CreditCard,
  Building,
  Smartphone,
  Shield,
  Clock,
  ArrowRight,
  MessageCircle
} from "lucide-react";

const paymentMethods = [
  {
    category: "Traditional Payments",
    title: "Cash & Bank Transfer",
    description: "Accept direct cash payments and secure online bank transfers for your convenience.",
    icon: CreditCard,
    features: [
      "Direct cash payments",
      "Secure online bank transfers",
      "Immediate payment confirmation",
      "Receipt provided for all transactions"
    ]
  },
  {
    category: "Flexible Payment Plans",
    title: "EPP Payment up to 60 Months",
    description: "Extended Payment Plan (EPP) options up to 60 months to make your dream project more affordable.",
    icon: Clock,
    logos: [
      { name: "Visa", src: "/images/visa-logo.svg", alt: "Visa" },
      { name: "Mastercard", src: "/images/mastercard-logo.svg", alt: "Mastercard" }
    ],
    features: [
      "Extended payment plans up to 60 months",
      "Flexible monthly installments",
      "Low interest rates",
      "Customizable payment schedules"
    ]
  },
  {
    category: "Buy Now, Pay Later",
    title: "Buy Now Pay Later",
    description: "Convenient pay-later options through trusted financial technology partners.",
    icon: Smartphone,
    logos: [
      { name: "Atome", src: "/images/atome-logo.svg", alt: "Atome" },
      { name: "Grab", src: "/images/grab-logo.svg", alt: "Grab" },
      { name: "Shopee", src: "/images/shopee-logo.svg", alt: "Shopee" }
    ],
    features: [
      "Atome - Split in 3 payments",
      "SPaylater - Flexible installments",
      "GrabPaylater - Seamless checkout",
      "Instant approval available"
    ]
  },
  {
    category: "Bank Financing",
    title: "Aeon Financing",
    description: "We can arrange AEON Bank personal loans with competitive interest rates up to 12% per year.",
    icon: Shield,
    logos: [
      { name: "AEON", src: "/images/aeon-logo.svg", alt: "AEON" }
    ],
    features: [
      "Interest rates up to 12% per year",
      "Professional loan arrangement",
      "Quick approval process",
      "Competitive terms and conditions"
    ]
  },
  {
    category: "Government Projects",
    title: "MOF",
    description: "We are officially registered with the Ministry of Finance (MOF), enabling us to accept government projects and contracts.",
    icon: Building,
    logos: [
      { name: "Jata Negara", src: "/images/jata-negara.svg", alt: "Jata Negara Malaysia" }
    ],
    features: [
      "Official MOF registration",
      "Government contract eligible",
      "Certified for public sector projects",
      "Compliance with government standards"
    ]
  }
];

export default function PaymentMethods() {

  const whatsappMessage = "Hi Isma Design & Build! I'd like to know more about your payment methods and financing options.";
  const whatsappLink = `https://wa.me/60189023676?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center z-10">
          <ScrollAnimated animationType="fade-in" threshold={0.1}>
            <div className="max-w-4xl mx-auto">
              <Badge variant="outline" className="mb-6 text-white border-white/30 bg-white/10">
                Multiple Payment Options Available
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Flexible <span className="text-yellow-400">Payment Methods</span>
              </h1>
              <p className="text-sm text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Choose from various secure payment options designed to make your design and build project more accessible and convenient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-white text-gray-900 hover:bg-gray-100 transition-colors py-4 px-8 font-semibold rounded-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Discuss Payment Options</span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-2 border border-white text-white hover:bg-white hover:text-gray-900 transition-colors py-4 px-8 font-semibold rounded-lg"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollAnimated>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollAnimated animationType="slide-up" threshold={0.1}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Payment Options</h2>
              <p className="text-sm text-gray-600 max-w-3xl mx-auto">
                We offer multiple secure payment methods to suit your preferences and financial situation.
              </p>
            </div>
          </ScrollAnimated>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {paymentMethods.map((method, index) => (
              <ScrollAnimated
                key={index}
                animationType="slide-up"
                delay={index * 150}
                threshold={0.1}
              >
                <Card className="h-full border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="bg-gray-50 border-b border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-3 text-xs">
                          {method.category}
                        </Badge>
                        <CardTitle className="text-sm font-semibold text-gray-900 mb-2">
                          {method.title}
                        </CardTitle>
                      </div>
                      <div className="w-12 h-12 bg-white border border-gray-200 rounded-lg flex items-center justify-center flex-shrink-0 ml-4">
                        <method.icon className="w-6 h-6 text-gray-700" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-6">
                    {method.logos && (
                      <div className="mb-4 pb-4 border-b border-gray-100">
                        <div className="flex flex-wrap items-center gap-3">
                          {method.logos.map((logo, logoIdx) => (
                            <div key={logoIdx} className="h-8 flex items-center">
                              <div className="bg-gray-100 px-3 py-1 rounded text-xs font-medium text-gray-700 border">
                                {logo.name}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="space-y-3">
                      {method.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimated>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}