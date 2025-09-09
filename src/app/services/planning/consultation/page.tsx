import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import Textarea from "@/shared/Textarea";
import Label from "@/components/Label";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageServicesPlanningConsultationProps {}

const PageServicesPlanningConsultation: FC<PageServicesPlanningConsultationProps> = ({}) => {
  return (
    <main className="nc-PageServicesPlanningConsultation relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Free Travel Consultation
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Let our travel experts design your perfect journey. No obligation, just expert advice tailored to you. Get a 30-minute complimentary call with our expert travel advisors, 100% personalized to your needs.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="#consultation-form" sizeClass="px-5 py-4 sm:px-7">
                Book Consultation
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                Learn More
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💬</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Expert Travel Advice</div>
                <div className="text-neutral-500 dark:text-neutral-400">Free 30-minute consultation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONSULTATION FORM SECTION */}
      <div className="relative py-16" id="consultation-form">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Fill out the form below and one of our travel experts will contact you within 24 hours.">
            Book your free consultation
          </Heading>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12 mt-12 max-w-4xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Full Name *</Label>
                  <Input 
                    placeholder="John Doe" 
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label>Email Address *</Label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label>Phone Number</Label>
                  <Input 
                    placeholder="+1 (555) 123-4567" 
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label>Preferred Date</Label>
                  <Input 
                    type="date" 
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div>
                <Label>Travel Destination</Label>
                <Input 
                  placeholder="Where would you like to go?" 
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label>Travel Style</Label>
                <select className="w-full mt-2 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                  <option value="">Select your travel style</option>
                  <option value="luxury">Luxury & Premium</option>
                  <option value="adventure">Adventure & Outdoor</option>
                  <option value="cultural">Cultural & Historical</option>
                  <option value="relaxation">Relaxation & Wellness</option>
                  <option value="family">Family Friendly</option>
                  <option value="budget">Budget Conscious</option>
                </select>
              </div>
              
              <div>
                <Label>Tell us about your dream trip</Label>
                <Textarea 
                  className="mt-2" 
                  rows={4}
                  placeholder="Describe your ideal travel experience, special requirements, or any questions you have..."
                />
              </div>
              
              <div className="text-center">
                <ButtonPrimary type="submit" className="px-8 py-4 text-lg">
                  Schedule Free Consultation
                </ButtonPrimary>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* WHAT TO EXPECT SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Your free consultation includes:">
            What to expect
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "📋",
                title: "Personal Assessment",
                description: "We'll discuss your travel preferences, budget, and must-have experiences"
              },
              {
                icon: "🗺️",
                title: "Destination Insights",
                description: "Expert recommendations based on your interests and travel goals"
              },
              {
                icon: "💰",
                title: "Budget Planning",
                description: "Transparent pricing and money-saving tips for your trip"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white text-center">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SUBSCRIBE SECTION */}
      <div className="container">
        <SectionSubscribe2 className="pb-24 lg:pb-32" />
      </div>
      </div>
    </main>
  );
};

export default PageServicesPlanningConsultation;