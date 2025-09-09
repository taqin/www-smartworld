import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageServicesPlanningGroupTravelProps {}

const PageServicesPlanningGroupTravel: FC<PageServicesPlanningGroupTravelProps> = ({}) => {
  return (
    <main className="nc-PageServicesPlanningGroupTravel relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Group Travel Planning
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Bringing people together through unforgettable group experiences. From family reunions to corporate retreats, we handle every detail of your group journey with 10+ member discounts and custom activities.
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
                <div className="text-6xl mb-4">🎉</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Group Travel Experts</div>
                <div className="text-neutral-500 dark:text-neutral-400">Creating memories together</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Experience the joy of shared adventures and create lasting memories together">
            Why choose group travel
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "💰",
                title: "Group Discounts",
                description: "Save up to 25% on accommodations, activities, and transportation when traveling as a group"
              },
              {
                icon: "🎯",
                title: "Customized Activities",
                description: "Tailored experiences that cater to your group's interests and preferences"
              },
              {
                icon: "👨‍✈️",
                title: "Dedicated Guide",
                description: "Professional group leader to handle logistics and ensure smooth travel"
              },
              {
                icon: "🏨",
                title: "Group Accommodations",
                description: "Hotels and resorts that welcome groups with special amenities and spaces"
              },
              {
                icon: "🚌",
                title: "Private Transportation",
                description: "Comfortable group transportation with professional drivers"
              },
              {
                icon: "🍽️",
                title: "Group Dining",
                description: "Restaurant reservations and private dining experiences for groups"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white text-center">{benefit.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GROUP TYPES SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="We specialize in creating memorable experiences for all types of groups">
            Perfect for every group
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Groups",
                subtitle: "Multi-generational travel",
                items: ["Child-friendly activities", "Senior accessibility options", "Family accommodations", "Balanced itineraries"]
              },
              {
                icon: "🎓",
                title: "Educational Groups",
                subtitle: "School & university trips",
                items: ["Educational content", "Safety-focused planning", "Budget-friendly options", "Learning experiences"]
              },
              {
                icon: "👥",
                title: "Friend Groups",
                subtitle: "Adventure & celebration",
                items: ["Adventure activities", "Nightlife & entertainment", "Group bonding experiences", "Flexible scheduling"]
              },
              {
                icon: "⛪",
                title: "Faith Groups",
                subtitle: "Spiritual journeys",
                items: ["Religious site visits", "Spiritual experiences", "Fellowship activities", "Mission trip coordination"]
              }
            ].map((group, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{group.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{group.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{group.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  {group.items.map((item, itemIndex) => (
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

      {/* PLANNING PROCESS SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="We handle everything so you can focus on enjoying the journey together">
            Stress-free group planning
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                id: 1,
                title: "Group Consultation",
                desc: "We meet with your group leader to understand preferences, budget, and special requirements",
                icon: "💬"
              },
              {
                id: 2,
                title: "Custom Proposal",
                desc: "Detailed itinerary with group pricing, accommodations, and activity options",
                icon: "📋"
              },
              {
                id: 3,
                title: "Seamless Execution",
                desc: "We handle all bookings, coordination, and provide on-trip support",
                icon: "⚡"
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

      {/* CTA SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative text-center">
          <Heading isCenter desc="Let's create an unforgettable experience for your group. Contact us for a free consultation.">
            Ready to plan your group adventure?
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/services/planning/consultation" sizeClass="px-8 py-4">
              Get Started
            </ButtonPrimary>
            <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-8 py-4">
              View Group Packages
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

export default PageServicesPlanningGroupTravel;