"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send, MessageCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  "Cabinet",
  "Renovation", 
  "Interior Design",
  "Full House",
  "Special Booth Exhibition",
  "Other"
];

const budgetRanges = [
  "< RM20k",
  "RM20k - 50k",
  "RM50k - 100k", 
  "> RM100k"
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const generateWhatsAppLink = (data: ContactFormData) => {
    const baseUrl = "https://wa.me/60189023676";
    const message = `Hi Isma Design & Build!
Name: ${data.name}
Phone: ${data.phone}${data.email ? `
Email: ${data.email}` : ""}
Interested Project: ${data.projectType}${data.budget ? `
Budget: ${data.budget}` : ""}${data.message ? `
Message: ${data.message}` : ""}`;
    
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const whatsappLink = generateWhatsAppLink(data);
      
      toast.success("Form submitted successfully!", {
        description: "You'll be redirected to WhatsApp to continue the conversation.",
        duration: 3000,
      });

      // Open WhatsApp link
      window.open(whatsappLink, "_blank");
      
      reset();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white shadow-lg p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name & Phone Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name <span style={{color: '#003153'}}>*</span>
            </label>
            <Input
              {...register("name")}
              placeholder="Your full name"
              className={errors.name ? "" : ""}
              style={errors.name ? {borderColor: '#003153'} : {}}
            />
            {errors.name && (
              <p className="text-sm mt-1" style={{color: '#003153'}}>{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone / WhatsApp <span style={{color: '#003153'}}>*</span>
            </label>
            <Input
              {...register("phone")}
              placeholder="+60 18-902 3676"
              className={errors.phone ? "" : ""}
              style={errors.phone ? {borderColor: '#003153'} : {}}
            />
            {errors.phone && (
              <p className="text-sm mt-1" style={{color: '#003153'}}>{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email (Optional)
          </label>
          <Input
            {...register("email")}
            type="email"
            placeholder="your.email@example.com"
            className={errors.email ? "" : ""}
            style={errors.email ? {borderColor: '#003153'} : {}}
          />
          {errors.email && (
            <p className="text-sm mt-1" style={{color: '#003153'}}>{errors.email.message}</p>
          )}
        </div>

        {/* Project Type & Budget Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Interested Project <span style={{color: '#003153'}}>*</span>
            </label>
            <Select onValueChange={(value) => setValue("projectType", value)}>
              <SelectTrigger className={errors.projectType ? "" : ""} style={errors.projectType ? {borderColor: '#003153'} : {}}>
                <SelectValue placeholder="Select project type" />
              </SelectTrigger>
              <SelectContent>
                {projectTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.projectType && (
              <p className="text-sm mt-1" style={{color: '#003153'}}>{errors.projectType.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget Range (Optional)
            </label>
            <Select onValueChange={(value) => setValue("budget", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message / Project Details (Optional)
          </label>
          <Textarea
            {...register("message")}
            placeholder="Tell us more about your project..."
            rows={4}
            className="resize-none"
          />
        </div>

        {/* Submit Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="text-white hover:bg-blue-800 flex-1"
            style={{backgroundColor: '#003153'}}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin h-4 w-4 border-b-2 border-white mr-2" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
          
          <Button
            type="button"
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
            onClick={() => {
              const whatsappLink = "https://wa.me/60189023676?text=Hi%20Isma%20Design%20%26%20Build!%20I'm%20interested%20in%20your%20services.";
              window.open(whatsappLink, "_blank");
            }}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp Direct
          </Button>
        </div>
      </form>
    </div>
  );
}