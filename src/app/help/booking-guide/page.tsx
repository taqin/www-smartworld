import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageHelpBookingGuideProps {}

const PageHelpBookingGuide: FC<PageHelpBookingGuideProps> = ({}) => {
  return (
    <main className="nc-PageHelpBookingGuide relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Complete Booking Guide
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Step-by-step instructions to help you book your perfect travel experience. From selecting services to final confirmation, we'll guide you through every stage of the booking process.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="#booking-steps" sizeClass="px-5 py-4 sm:px-7">
                Start Booking
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                View Services
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📋</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Easy Booking Process</div>
                <div className="text-neutral-500 dark:text-neutral-400">Simple steps to your dream trip</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOOKING STEPS */}
      <div className="relative py-16" id="booking-steps">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Follow these simple steps to book your travel services">
            How to Book
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {[
              {
                id: 1,
                title: "Choose Service",
                desc: "Browse our services and select what fits your travel needs",
                icon: "🔍"
              },
              {
                id: 2,
                title: "Fill Details",
                desc: "Complete the booking form with your travel information",
                icon: "📝"
              },
              {
                id: 3,
                title: "Make Payment",
                desc: "Secure payment processing with multiple payment options",
                icon: "💳"
              },
              {
                id: 4,
                title: "Get Confirmation",
                desc: "Receive instant confirmation and travel documents",
                icon: "✅"
              }
            ].map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col items-center max-w-xs mx-auto group"
              >
                <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mb-6 text-3xl font-bold group-hover:bg-blue-700 transition-colors duration-300 shadow-lg group-hover:shadow-xl">
                  {item.icon}
                </div>
                <div className="text-center mt-auto">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">{item.title}</h3>
                  <span className="block text-neutral-500 dark:text-neutral-400">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE SPECIFIC GUIDES */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Detailed booking guides for each service type">
            Service-Specific Instructions
          </Heading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: "✈️",
                title: "Travel Planning",
                subtitle: "Custom Itinerary Booking",
                steps: [
                  "Schedule a free consultation",
                  "Discuss your preferences and budget",
                  "Receive personalized itinerary proposal",
                  "Review and finalize your travel plan",
                  "Complete booking and receive confirmation"
                ],
                tips: "Book at least 4-6 weeks in advance for international trips"
              },
              {
                icon: "🛂",
                title: "Visa Assistance",
                subtitle: "Documentation Services",
                steps: [
                  "Select your destination country",
                  "Upload required documents",
                  "Complete visa application form",
                  "Pay processing fees",
                  "Track application status online"
                ],
                tips: "Processing times vary by country - check requirements early"
              },
              {
                icon: "🛡️",
                title: "Travel Insurance",
                subtitle: "Coverage Options",
                steps: [
                  "Choose coverage type (basic/premium)",
                  "Enter traveler details and travel dates",
                  "Select additional coverage options",
                  "Review policy terms and conditions",
                  "Complete payment and receive policy"
                ],
                tips: "Compare coverage options to find the best fit for your needs"
              },
              {
                icon: "🚗",
                title: "Airport Transfers",
                subtitle: "Transportation Booking",
                steps: [
                  "Enter flight details and arrival time",
                  "Select vehicle type and capacity",
                  "Choose pickup and drop-off locations",
                  "Add special requirements if needed",
                  "Confirm booking and receive driver details"
                ],
                tips: "Book at least 24 hours in advance for guaranteed availability"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{service.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{service.subtitle}</p>
                  </div>
                </div>
                
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-4">Booking Steps:</h4>
                <ol className="space-y-2 mb-6">
                  {service.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1 font-semibold">{stepIndex + 1}.</span>
                      <span className="text-neutral-600 dark:text-neutral-400">{step}</span>
                    </li>
                  ))}
                </ol>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <strong>💡 Tip:</strong> {service.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PAYMENT OPTIONS */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Multiple secure payment options for your convenience">
            Payment Methods
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "💳",
                title: "Credit/Debit Cards",
                description: "All major cards accepted",
                cards: ["Visa", "Mastercard", "American Express", "Discover"]
              },
              {
                icon: "🏦",
                title: "Bank Transfer",
                description: "Direct bank payments",
                cards: ["Wire Transfer", "ACH Transfer", "Online Banking"]
              },
              {
                icon: "📱",
                title: "Digital Wallets",
                description: "Quick and secure",
                cards: ["PayPal", "Apple Pay", "Google Pay", "Samsung Pay"]
              }
            ].map((method, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{method.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white text-center">{method.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-center mb-6">
                  {method.description}
                </p>
                <div className="space-y-2">
                  {method.cards.map((card, cardIndex) => (
                    <div key={cardIndex} className="flex items-center justify-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <span className="text-neutral-600 dark:text-neutral-400">{card}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOOKING TIPS */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Expert tips to make your booking experience smoother">
            Pro Tips
          </Heading>
          
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Book in Advance",
                description: "Save up to 20% by booking 4-8 weeks ahead for better rates and availability"
              },
              {
                title: "Check Requirements",
                description: "Review visa, passport, and health requirements for your destination"
              },
              {
                title: "Flexible Dates",
                description: "Consider flexible travel dates for better pricing options"
              },
              {
                title: "Group Discounts",
                description: "Ask about group discounts for 10+ travelers"
              },
              {
                title: "Travel Insurance",
                description: "Protect your investment with comprehensive travel insurance"
              },
              {
                title: "Document Ready",
                description: "Keep digital copies of all booking confirmations and travel documents"
              }
            ].map((tip, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-neutral-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">{tip.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative text-center">
          <Heading isCenter desc="Ready to book your next adventure? Start your journey with us today.">
            Start Your Booking Journey
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/services" sizeClass="px-8 py-4">
              Browse Services
            </ButtonPrimary>
            <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-8 py-4">
              Get Help
            </ButtonPrimary>
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

export default PageHelpBookingGuide;