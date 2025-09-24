import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/contact-form";
import { ScrollAnimated } from "@/hooks/useScrollAnimation";
import HeroBackgroundSlider from "@/components/hero-background-slider";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Calendar,
  CheckCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Get Your Free Consultation | Isma Design & Build",
  description: "Contact Isma Design & Build for your interior design and renovation project in Kota Kinabalu, Sabah. Free consultation and competitive quotes available.",
  keywords: "contact interior designer kk, free consultation kk, renovation quote sabah, isma design build contact",
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone & WhatsApp",
    details: "+60 18-902 3676",
    description: "Available daily 9 AM - 7 PM",
    action: "tel:+60189023676"
  },
  {
    icon: Mail,
    title: "Email",
    details: "hello@ismadesignbuild.com",
    description: "We'll respond within 24 hours",
    action: "mailto:hello@ismadesignbuild.com"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "Kota Kinabalu, Sabah",
    description: "Serving KK and surrounding areas",
    action: null
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Sat: 9 AM - 7 PM",
    description: "Sunday: By appointment only",
    action: null
  }
];

const serviceAreas = [
  "Kota Kinabalu City",
  "Likas",
  "Luyang",
  "Penampang",
  "Putatan",
  "Inanam",
  "Sepanggar",
  "Tuaran",
  "Menggatal",
  "Telipok"
];

const whatsappLink = "https://wa.me/60189023676?text=Hi%20Isma%20Design%20%26%20Build!%20I'm%20interested%20in%20your%20services.";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[70vh] flex items-center justify-center bg-gray-900 text-gray-900 overflow-hidden">
        <HeroBackgroundSlider />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-7xl mx-auto flex justify-center items-center">
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-tight text-white drop-shadow-lg md:whitespace-nowrap">
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      <ScrollAnimated animationType="fade-in" delay={200}>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Let's Start Your Project
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Ready to transform your space? Get in touch for a free consultation and quote.
              We're here to help bring your interior design vision to life.
            </p>
          </div>
        </section>
      </ScrollAnimated>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <ScrollAnimated
                key={index}
                animationType={index % 2 === 0 ? "slide-up" : "scale-in"}
                delay={index * 100}
                threshold={0.1}
              >
                <Card className="border-gray-200 hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6" style={{color: '#003153'}} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.action ? (
                        <a
                          href={info.action}
                          className="font-medium hover:opacity-80 transition-colors"
                          style={{color: '#003153'}}
                        >
                          {info.details}
                        </a>
                      ) : (
                        <div className="text-gray-900 font-medium">{info.details}</div>
                      )}
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimated>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <ScrollAnimated animationType="slide-right" delay={300} threshold={0.1}>
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Free Consultation</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Tell us about your project and we'll provide a detailed consultation and quote.
                    All consultations are completely free with no obligation.
                  </p>
                </div>
                <ContactForm />
              </div>
            </ScrollAnimated>

            <ScrollAnimated animationType="slide-left" delay={500} threshold={0.1}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
                  <p className="text-gray-600 mb-4">
                    We proudly serve the following areas in and around Kota Kinabalu:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2" style={{backgroundColor: '#003153'}}></div>
                        <span className="text-sm text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Don't see your area listed? Contact us - we may still be able to help!
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 text-white flex items-center justify-center text-sm font-bold flex-shrink-0" style={{backgroundColor: '#003153'}}>
                        1
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Initial Contact</div>
                        <div className="text-sm text-gray-600">We'll respond within 24 hours to schedule your consultation</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 text-white flex items-center justify-center text-sm font-bold flex-shrink-0" style={{backgroundColor: '#003153'}}>
                        2
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Free Consultation</div>
                        <div className="text-sm text-gray-600">We'll visit your space and discuss your vision and requirements</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 text-white flex items-center justify-center text-sm font-bold flex-shrink-0" style={{backgroundColor: '#003153'}}>
                        3
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Detailed Proposal</div>
                        <div className="text-sm text-gray-600">Receive a comprehensive quote with design concepts and timeline</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 text-white flex items-center justify-center text-sm font-bold flex-shrink-0" style={{backgroundColor: '#003153'}}>
                        4
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Project Start</div>
                        <div className="text-sm text-gray-600">Once approved, we begin bringing your vision to life</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimated>
          </div>
        </div>
      </section>

      <ScrollAnimated animationType="fade-in" delay={200}>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Prefer Direct Contact?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Reach out to us directly via WhatsApp or phone for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us Now
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="text-white hover:bg-blue-800"
                style={{backgroundColor: '#003153'}}
              >
                <a href="tel:+60189023676">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Direct
                </a>
              </Button>
            </div>
          </div>
        </section>
      </ScrollAnimated>
    </div>
  );
}