import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";
import Image from "next/image";

export interface PageServicesPlanningCustomItineraryProps {}

const PageServicesPlanningCustomItinerary: FC<PageServicesPlanningCustomItineraryProps> = ({}) => {
  return (
    <main className="nc-PageServicesPlanningCustomItinerary relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 mt-10 lg:space-y-10 lg:mb-28">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Custom Travel Itineraries
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Your journey, your way. We craft personalized travel experiences that match your unique style, interests, and dreams. Let each trip be an inspirational journey, each destination a perfect match for your vision.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="/services/planning/consultation" sizeClass="px-5 py-4 sm:px-7">
                Start Planning
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                Learn More
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Personalized Journey</div>
                <div className="text-neutral-500 dark:text-neutral-400">Crafted uniquely for you</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="nc-SectionHowItWork">
        <Heading isCenter desc="Our simple 4-step process to create your perfect itinerary">
          How it works
        </Heading>
        <div className="mt-20 relative grid md:grid-cols-4 gap-20">
          {/* Connecting line visualization */}
          <div className="hidden md:block absolute inset-x-0 top-20 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          
          {[
            {
              id: 1,
              title: "Consultation",
              desc: "We discuss your preferences, budget, and travel goals in detail",
              icon: "💬"
            },
            {
              id: 2,
              title: "Research", 
              desc: "Our experts research destinations, accommodations, and activities",
              icon: "🔍"
            },
            {
              id: 3,
              title: "Draft Itinerary",
              desc: "We create a detailed day-by-day plan with recommendations", 
              icon: "📋"
            },
            {
              id: 4,
              title: "Refine & Book",
              desc: "We adjust based on your feedback and handle all bookings",
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

      {/* FEATURES SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Everything you need for a seamless travel experience">
            What's included
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🏨",
                title: "Accommodation",
                items: ["Curated hotel selections", "Alternative lodging options", "Best value recommendations", "Location optimization"]
              },
              {
                icon: "🎭",
                title: "Activities",
                items: ["Must-see attractions", "Hidden local gems", "Pre-booked tickets", "Flexible scheduling"]
              },
              {
                icon: "🍽️",
                title: "Dining",
                items: ["Restaurant reservations", "Local cuisine experiences", "Dietary accommodations", "Food tour recommendations"]
              },
              {
                icon: "🚗",
                title: "Transportation",
                items: ["Flight recommendations", "Local transport options", "Car rental arrangements", "Airport transfers"]
              },
              {
                icon: "📱",
                title: "Digital Guide",
                items: ["Interactive itinerary", "Offline maps", "Emergency contacts", "Local tips & phrases"]
              },
              {
                icon: "🎯",
                title: "Support",
                items: ["24/7 travel assistance", "Local partner network", "Real-time adjustments", "Emergency support"]
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-neutral-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative text-center">
          <Heading isCenter desc="Let's create an itinerary that's uniquely yours. Start with a free consultation today.">
            Ready for your perfect journey?
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/services/planning/consultation" sizeClass="px-8 py-4">
              Start Planning
            </ButtonPrimary>
            <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-8 py-4">
              View Examples
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

export default PageServicesPlanningCustomItinerary;