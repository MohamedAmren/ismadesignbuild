import { Metadata } from "next";
import { ScrollAnimated } from "@/hooks/useScrollAnimation";
import HeroBackgroundSlider from "@/components/hero-background-slider";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Isma Design & Build - How we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900 text-gray-900 overflow-hidden">
        <HeroBackgroundSlider />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-7xl mx-auto flex justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-lg">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollAnimated animationType="fade-in" delay={200}>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We may collect personal information such as:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Name, phone number, email address, and project details provided via our website or contact forms.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>To respond to inquiries and provide quotations.</li>
                  <li>To manage ongoing projects and client communication.</li>
                  <li>To improve our services and website experience.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Data Protection</h2>
                <p className="text-gray-600 leading-relaxed">
                  We take reasonable steps to secure your personal data. However, no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Sharing of Information</h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We do not sell, rent, or trade your personal information. Data may be shared with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Contractors, suppliers, or consultants directly involved in your project.</li>
                  <li>Authorities when required by law.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies & Website Usage</h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may use cookies to enhance browsing experience. You may disable cookies in your browser if preferred.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  Under Malaysia's PDPA (Personal Data Protection Act 2010), you have the right to access, update, or request deletion of your personal information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have questions about this Privacy Policy or Terms & Conditions, please contact us at:
                </p>
                <div className="mt-4 space-y-2 text-gray-600">
                  <p>📧 Email: hello@ismadesignbuild.com</p>
                  <p>📞 Phone: +60 18-902 3676</p>
                </div>
              </div>
            </div>
          </ScrollAnimated>
        </div>
      </section>
    </div>
  );
}