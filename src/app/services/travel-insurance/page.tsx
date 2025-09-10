import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageServicesTravelInsuranceProps {}

const PageServicesTravelInsurance: FC<PageServicesTravelInsuranceProps> = ({}) => {
  return (
    <main className="nc-PageServicesTravelInsurance relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Travel Insurance
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Travel confidently with comprehensive coverage that protects you from unexpected events and emergencies. Peace of mind for every journey with 24/7 global support and quick claims processing.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="/services/planning/consultation" sizeClass="px-5 py-4 sm:px-7">
                Get Protected Today
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                Get a Quote
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Comprehensive Protection</div>
                <div className="text-neutral-500 dark:text-neutral-400">$1M+ medical coverage worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COVERAGE TYPES SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-emerald-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Choose the right coverage for your travel needs with our flexible insurance plans">
            Coverage options
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🏥",
                title: "Medical Coverage",
                description: "Comprehensive medical protection for illness and injury while traveling",
                items: ["Emergency medical treatment", "Hospital stays", "Prescription medications", "Medical evacuation"]
              },
              {
                icon: "✈️",
                title: "Trip Protection",
                description: "Coverage for trip cancellations, interruptions, and delays",
                items: ["Trip cancellation", "Trip interruption", "Travel delays", "Missed connections"]
              },
              {
                icon: "🧳",
                title: "Baggage Protection",
                description: "Coverage for lost, stolen, or damaged baggage and personal belongings",
                items: ["Lost luggage", "Delayed baggage", "Stolen items", "Essential purchases"]
              },
              {
                icon: "🚗",
                title: "Rental Car",
                description: "Collision damage waiver and rental car protection coverage",
                items: ["Collision damage", "Theft protection", "Liability coverage", "Roadside assistance"]
              },
              {
                icon: "⚖️",
                title: "Legal Protection",
                description: "Legal assistance and liability coverage while traveling",
                items: ["Legal representation", "Bail bonds", "Liability coverage", "Legal consultation"]
              },
              {
                icon: "🏠",
                title: "Home Protection",
                description: "Coverage for your home while you're away traveling",
                items: ["Home burglary", "Water damage", "Fire damage", "Property protection"]
              }
            ].map((coverage, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-neutral-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/50 transition-colors duration-300">
                  <span className="text-3xl">{coverage.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  {coverage.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {coverage.description}
                </p>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  {coverage.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-emerald-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PLAN OPTIONS */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Flexible coverage options for every type of traveler and budget">
            Choose your plan
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Basic",
                price: "RM29",
                period: "per trip",
                popular: false,
                features: ["Basic medical coverage", "Trip cancellation", "Lost luggage", "24/7 assistance"]
              },
              {
                name: "Premium",
                price: "RM59",
                period: "per trip",
                popular: true,
                features: ["Enhanced medical coverage", "Full trip protection", "Comprehensive baggage", "Rental car coverage", "Legal protection", "Priority assistance"]
              },
              {
                name: "Annual",
                price: "RM299",
                period: "per year",
                popular: false,
                features: ["Unlimited trips", "Maximum coverage", "All benefits included", "Family coverage", "Adventure sports", "Concierge service"]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 ${plan.popular ? 'border-emerald-500 relative transform scale-105' : 'border-neutral-200 dark:border-gray-700 hover:border-emerald-500 transition-colors'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{plan.price}</div>
                  <div className="text-neutral-600 dark:text-neutral-400">{plan.period}</div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <span className="text-emerald-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ButtonPrimary className={`w-full ${plan.popular ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white`}>
                  Select {plan.name}
                </ButtonPrimary>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-emerald-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Comprehensive protection with exceptional service and support">
            Why choose our travel insurance
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: "🌍",
                title: "Global Coverage",
                description: "Worldwide protection for all your travel destinations"
              },
              {
                icon: "⚡",
                title: "Fast Claims",
                description: "Quick processing and reimbursement for covered expenses"
              },
              {
                icon: "📱",
                title: "Digital Tools",
                description: "Mobile app access for policy management and claims"
              },
              {
                icon: "🎯",
                title: "Customizable",
                description: "Tailored coverage options to match your specific needs"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="font-semibold mb-2 text-neutral-900 dark:text-white">{benefit.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative text-center">
          <Heading isCenter desc="Don't travel without protection. Get instant coverage and travel with peace of mind.">
            Get protected today
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/services/planning/consultation" sizeClass="px-8 py-4">
              Get Quote
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

export default PageServicesTravelInsurance;