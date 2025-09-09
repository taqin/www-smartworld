import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageServicesEmergencySupportProps {}

const PageServicesEmergencySupport: FC<PageServicesEmergencySupportProps> = ({}) => {
  return (
    <main className="nc-PageServicesEmergencySupport relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Emergency Support
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Travel with complete peace of mind. Our global emergency response team is available 24/7 to handle any crisis, anywhere in the world. With less than 15-minute response time and support in 195+ countries.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="/services/planning/consultation" sizeClass="px-5 py-4 sm:px-7">
                Get Protected
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                Learn More
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚨</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">24/7 Emergency Support</div>
                <div className="text-neutral-500 dark:text-neutral-400">Global response team ready to help</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EMERGENCY HOTLINE SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-red-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="For immediate assistance, call our 24/7 emergency hotline">
            Emergency hotline
          </Heading>
          
          <div className="max-w-2xl mx-auto mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-neutral-100 dark:border-gray-700">
            <div className="text-4xl lg:text-5xl font-bold text-red-600 dark:text-red-400 mb-4 text-center">
              +1-800-EMERGENCY
            </div>
            <div className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 text-center">
              Available 24 hours a day, 7 days a week
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center">
                <div className="font-semibold mb-2 text-neutral-900 dark:text-white">🌍 Global Coverage</div>
                <div className="text-neutral-600 dark:text-neutral-400">Support in 195+ countries</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center">
                <div className="font-semibold mb-2 text-neutral-900 dark:text-white">🗣️ Multi-language</div>
                <div className="text-neutral-600 dark:text-neutral-400">Support in 50+ languages</div>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 text-center">
                <div className="font-semibold mb-2 text-neutral-900 dark:text-white">⚡ Instant Response</div>
                <div className="text-neutral-600 dark:text-neutral-400">Under 15 minutes average</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-red-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Complete protection and support for any travel emergency situation">
            Comprehensive emergency services
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🏥",
                title: "Medical Emergency",
                description: "Immediate medical assistance and healthcare coordination worldwide",
                items: ["Hospital referrals", "Medical evacuation", "Prescription assistance", "Medical monitoring"]
              },
              {
                icon: "🛂",
                title: "Document Assistance",
                description: "Help with lost passports, visas, and travel documents",
                items: ["Emergency passport replacement", "Visa assistance", "Document translation", "Embassy coordination"]
              },
              {
                icon: "🏨",
                title: "Emergency Housing",
                description: "Safe accommodation when your travel plans are disrupted",
                items: ["Hotel arrangements", "Extended stay support", "Alternative lodging", "Family accommodation"]
              },
              {
                icon: "⚖️",
                title: "Legal Support",
                description: "Legal assistance and guidance for international legal matters",
                items: ["Legal referrals", "Bail assistance", "Translation services", "Legal document help"]
              },
              {
                icon: "🚁",
                title: "Evacuation Services",
                description: "Emergency evacuation from dangerous situations or natural disasters",
                items: ["Medical evacuation", "Security evacuation", "Natural disaster response", "Political crisis support"]
              },
              {
                icon: "💰",
                title: "Financial Emergency",
                description: "Emergency funds and financial assistance when you need it most",
                items: ["Emergency cash transfer", "Credit card assistance", "Banking coordination", "Travel insurance claims"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-neutral-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors duration-300">
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
                      <span className="text-red-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESPONSE PROCESS SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="How we handle your emergency with speed and precision">
            Emergency response process
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {[
              {
                id: 1,
                title: "Alert",
                desc: "Contact our 24/7 emergency hotline or app",
                icon: "🚨"
              },
              {
                id: 2,
                title: "Assess",
                desc: "Immediate evaluation of your situation",
                icon: "📋"
              },
              {
                id: 3,
                title: "Act",
                desc: "Deploy appropriate emergency response",
                icon: "⚡"
              },
              {
                id: 4,
                title: "Monitor",
                desc: "Continuous support until resolution",
                icon: "👁️"
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

      {/* GLOBAL COVERAGE SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-red-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Emergency support available in 195+ countries worldwide">
            Global coverage network
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                stat: "195+",
                label: "Countries Covered"
              },
              {
                stat: "50+",
                label: "Languages Supported"
              },
              {
                stat: "10,000+",
                label: "Partner Facilities"
              },
              {
                stat: "< 15",
                label: "Min Response Time"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-red-600 dark:text-red-400 mb-2">{item.stat}</div>
                <div className="text-neutral-600 dark:text-neutral-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SAFETY TIPS SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Essential information to keep you safe while traveling">
            Travel safety tips
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">Before You Travel</h3>
              <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Register with your embassy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Share itinerary with family</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Purchase comprehensive travel insurance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Save emergency contacts offline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Research local emergency services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Make copies of important documents</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">During Your Trip</h3>
              <ul className="space-y-3 text-neutral-600 dark:text-neutral-400">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Keep emergency contacts accessible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Stay aware of your surroundings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Monitor local news and weather</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Use reputable transportation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Trust your instincts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 mt-1">•</span>
                  <span>Keep digital copies of documents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative text-center">
          <Heading isCenter desc="Add comprehensive emergency support to your travel protection plan.">
            Travel with complete peace of mind
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/services/planning/consultation" sizeClass="px-8 py-4">
              Add Emergency Coverage
            </ButtonPrimary>
            <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-8 py-4">
              Learn More
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

export default PageServicesEmergencySupport;