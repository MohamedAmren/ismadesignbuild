import { Metadata } from "next";
import { ScrollAnimated } from "@/hooks/useScrollAnimation";
import HeroBackgroundSlider from "@/components/hero-background-slider";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for Isma Design & Build services in Kota Kinabalu, Sabah.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900 text-gray-900 overflow-hidden">
        <HeroBackgroundSlider />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-7xl mx-auto flex justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-lg">
              Terms & Conditions
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollAnimated animationType="fade-in" delay={200}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  Welcome to Isma Design & Build. By accessing our website and engaging our services, you agree to comply with and be bound by these Terms & Conditions. If you disagree with any part, please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
                <p className="text-gray-600 leading-relaxed">
                  We provide interior design, renovation, construction, and related consultancy services. All services are subject to written agreements, proposals, or quotations issued by us.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Proposals & Quotations</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>All quotations are valid for 30 days from the date issued.</li>
                  <li>Any changes in design, materials, or scope may result in additional charges.</li>
                  <li>A signed agreement and deposit are required before commencement of any project.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payments</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Payment terms will be stated in the project agreement.</li>
                  <li>Late payments may incur penalties or suspension of work.</li>
                  <li>All payments are non-refundable once work has commenced, unless otherwise agreed.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Project Timelines</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Project duration will be outlined in the agreement.</li>
                  <li>Delays caused by third parties, authority approvals, or unforeseen circumstances are beyond our control.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Client Responsibilities</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Clients must provide accurate information, timely approvals, and access to the project site.</li>
                  <li>Any delays or costs arising from the client's failure to provide required information will be borne by the client.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Materials & Warranty</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Materials and finishes will be as specified in the agreement.</li>
                  <li>Warranties (if any) on workmanship or materials will be specified separately.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
                <p className="text-gray-600 leading-relaxed">
                  All designs, drawings, and creative works remain the property of Isma Design & Build until full payment is received.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  We are not liable for indirect, incidental, or consequential damages. Our liability is limited to the value of the project agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms & Conditions are governed under the laws of Malaysia.
                </p>
              </div>
            </div>
          </ScrollAnimated>
        </div>
      </section>
    </div>
  );
}