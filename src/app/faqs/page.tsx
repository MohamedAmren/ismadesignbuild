"use client";

import { useState } from "react";
import { Metadata } from "next";
import { ScrollAnimated } from "@/hooks/useScrollAnimation";
import HeroBackgroundSlider from "@/components/hero-background-slider";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What services do you provide?",
    answer: "We specialize in interior design, renovation, construction, and design & build solutions. Our services include space planning, 2D & 3D drawings, custom furniture, renovation works, flooring, curtains, and assistance with local authority submissions."
  },
  {
    question: "Do you provide both residential and commercial projects?",
    answer: "Yes. We work on residential homes, offices, retail spaces, and commercial properties."
  },
  {
    question: "How do I get started with a project?",
    answer: "Simply contact us with your project details. We'll arrange a consultation to understand your needs, prepare design concepts, and provide a quotation."
  },
  {
    question: "Do you charge for consultation?",
    answer: "Our initial consultation is usually complimentary. However, detailed design proposals, 3D renderings, and drawings may require a design fee (deductible if you proceed with the project)."
  },
  {
    question: "How long does a renovation or design project take?",
    answer: "Timelines vary based on project size and complexity. A small renovation may take a few weeks, while larger design & build projects can take several months."
  },
  {
    question: "Can I request changes after work has started?",
    answer: "Yes, but changes may affect the timeline and cost. We'll discuss and get your approval before making adjustments."
  },
  {
    question: "Do you help with material selection?",
    answer: "Yes. We guide clients in choosing high-quality finishes, trusted brands (like Nippon Paint, Blum, Caesarstone, and TOTO), and materials that suit both style and budget."
  },
  {
    question: "Do you provide warranty for your work?",
    answer: "Yes. Workmanship warranty is included in most projects. Specific warranties for materials or appliances depend on the manufacturer."
  },
  {
    question: "Do you handle authority approvals?",
    answer: "Yes, we assist with local authority submissions and approvals as part of our full-service package."
  },
  {
    question: "What is the payment schedule like?",
    answer: "Typically, we require a deposit to begin. The remaining balance is collected in stages based on project milestones (e.g., design approval, progress completion, handover)."
  },
  {
    question: "Can you work within my budget?",
    answer: "Yes. We'll propose design solutions and materials that align with your budget while maintaining quality and durability."
  },
  {
    question: "Do you only do full projects or small works too?",
    answer: "We handle both. From small renovations and furniture builds to full design & build projects — no project is too small or too big."
  }
];

export default function FAQPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-900 text-gray-900 overflow-hidden">
        <HeroBackgroundSlider />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-7xl mx-auto flex justify-center items-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-white drop-shadow-lg">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
      </section>

      <ScrollAnimated animationType="fade-in" delay={200}>
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <p className="text-sm text-gray-600">
                Common questions about our services
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 flex justify-between items-center text-left"
                  >
                    <span className="text-base font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${
                        openFaqIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="pb-4 text-sm text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollAnimated>
    </div>
  );
}