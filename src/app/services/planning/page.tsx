import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageServicesPlanningProps {}

const PageServicesPlanning: FC<PageServicesPlanningProps> = ({}) => {
  return (
    <main className="nc-PageServicesPlanning relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Travel Planning
              <span className="block text-blue-600">Reimagined</span>
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Transform your travel dreams into reality with our expert planning services. From bucket-list adventures to luxury escapes, we craft journeys that inspire with 1000+ happy travelers and 50+ destinations worldwide.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="/services/planning/consultation" sizeClass="px-5 py-4 sm:px-7">
                Start Planning
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                View Services
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌟</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Expert Travel Planning</div>
                <div className="text-neutral-500 dark:text-neutral-400">Crafting unforgettable journeys</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Comprehensive travel planning solutions tailored to your unique style and preferences">
            Our planning services
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "✨",
                title: "Personalized Planning",
                description: "Custom itineraries designed around your interests, budget, and travel style",
                items: ["One-on-one consultation", "Interest-based activities", "Flexible scheduling", "Budget optimization"]
              },
              {
                icon: "🌍",
                title: "Destination Expertise",
                description: "Local insights and hidden gems from our network of destination specialists",
                items: ["Local partner network", "Insider recommendations", "Cultural immersion", "Off-the-beaten-path"]
              },
              {
                icon: "📱",
                title: "Digital Journey",
                description: "Interactive digital itinerary with real-time updates and offline access",
                items: ["Mobile app integration", "Real-time notifications", "Offline maps & guides", "Digital documents"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-neutral-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  {service.items.map((item, itemIndex) => (
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
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Our streamlined process ensures your perfect travel experience">
            How we work
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {[
              {
                id: 1,
                title: "Discovery",
                desc: "We learn about your travel dreams, preferences, and requirements",
                icon: "🔍"
              },
              {
                id: 2,
                title: "Design",
                desc: "Our experts craft a personalized itinerary with unique experiences",
                icon: "🎨"
              },
              {
                id: 3,
                title: "Refine",
                desc: "We adjust the plan based on your feedback until it's perfect",
                icon: "⚡"
              },
              {
                id: 4,
                title: "Execute",
                desc: "We handle all bookings and provide 24/7 support during your journey",
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

      {/* TRAVEL STYLES SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Whatever your travel style, we have the expertise to create your perfect journey">
            Travel styles we excel at
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: "🏖️",
                title: "Luxury",
                subtitle: "Premium experiences"
              },
              {
                icon: "🏔️",
                title: "Adventure",
                subtitle: "Thrilling experiences"
              },
              {
                icon: "🏛️",
                title: "Cultural",
                subtitle: "Rich heritage tours"
              },
              {
                icon: "🧘",
                title: "Wellness",
                subtitle: "Relaxation focused"
              }
            ].map((style, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{style.icon}</span>
                </div>
                <h3 className="font-semibold mb-2 text-neutral-900 dark:text-white">{style.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{style.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative text-center">
          <Heading isCenter desc="Let's create unforgettable memories together. Start with a free consultation today.">
            Ready to plan your dream journey?
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/services/planning/consultation" sizeClass="px-8 py-4">
              Start Planning
            </ButtonPrimary>
            <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-8 py-4">
              View Services
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

export default PageServicesPlanning;