import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageServicesConciergeProps {}

const PageServicesConcierge: FC<PageServicesConciergeProps> = ({}) => {
  return (
    <main className="nc-PageServicesConcierge relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Travel Concierge
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Experience unparalleled luxury with our dedicated concierge service. From exclusive reservations to personalized experiences, we handle every detail of your journey with 24/7 personal assistance and 500+ premium partners worldwide.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="/services/planning/consultation" sizeClass="px-5 py-4 sm:px-7">
                Start Membership
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                Learn More
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">✨</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Luxury Concierge Service</div>
                <div className="text-neutral-500 dark:text-neutral-400">Exclusive experiences worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-amber-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Experience the difference with our comprehensive luxury concierge services">
            Premium concierge services
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🍽️",
                title: "Dining Excellence",
                description: "Access to the world's most exclusive restaurants and private dining experiences",
                items: ["Michelin-starred reservations", "Private chef experiences", "Wine pairing consultations", "Dietary accommodation"]
              },
              {
                icon: "🎭",
                title: "Entertainment & Events",
                description: "VIP access to concerts, theater, sporting events, and exclusive gatherings",
                items: ["Front-row seating", "Backstage access", "Private box rentals", "Celebrity meet & greets"]
              },
              {
                icon: "🛍️",
                title: "Shopping & Style",
                description: "Personal shopping experiences with luxury brands and exclusive collections",
                items: ["Personal styling", "Private shopping appointments", "Luxury brand access", "Custom tailoring"]
              },
              {
                icon: "🎨",
                title: "Cultural Experiences",
                description: "Immersive cultural activities and exclusive access to local traditions",
                items: ["Private museum tours", "Art gallery previews", "Cultural workshops", "Local artisan visits"]
              },
              {
                icon: "🏖️",
                title: "Wellness & Spa",
                description: "Rejuvenating spa treatments and wellness experiences at world-class facilities",
                items: ["Luxury spa treatments", "Personal wellness plans", "Yoga and meditation", "Fitness training"]
              },
              {
                icon: "🚗",
                title: "Transportation",
                description: "Premium transportation services with luxury vehicles and professional chauffeurs",
                items: ["Luxury car rentals", "Private jet charters", "Yacht rentals", "Helicopter transfers"]
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-neutral-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-200 dark:group-hover:bg-amber-900/50 transition-colors duration-300">
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
                      <span className="text-amber-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MEMBERSHIP TIERS SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-amber-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Choose the level of service that matches your lifestyle">
            Concierge membership levels
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Silver",
                price: "$299",
                period: "per month",
                popular: false,
                features: ["Basic concierge services", "Restaurant reservations", "Event booking assistance", "24/7 phone support"]
              },
              {
                name: "Gold",
                price: "$599",
                period: "per month",
                popular: true,
                features: ["All Silver benefits", "VIP event access", "Personal shopping assistance", "Luxury partner discounts", "Dedicated concierge"]
              },
              {
                name: "Platinum",
                price: "$999",
                period: "per month",
                popular: false,
                features: ["All Gold benefits", "Private jet arrangements", "Exclusive event access", "Global lifestyle management", "24/7 personal assistant"]
              }
            ].map((tier, index) => (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 rounded-2xl p-8 border-2 ${tier.popular ? 'border-amber-500 relative transform scale-105' : 'border-neutral-200 dark:border-gray-700 hover:border-amber-500 transition-colors'}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-amber-600 mb-1">{tier.price}</div>
                  <div className="text-neutral-600 dark:text-neutral-400">{tier.period}</div>
                </div>
                <ul className="space-y-3 mb-6 text-neutral-600 dark:text-neutral-400">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-amber-500 mr-2 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ButtonPrimary className={`w-full ${tier.popular ? 'bg-amber-600 hover:bg-amber-700' : 'bg-amber-600 hover:bg-amber-700'} text-white`}>
                  Select {tier.name}
                </ButtonPrimary>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* HOW IT WORKS SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Simple steps to elevate your travel experience">
            How it works
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {[
              {
                id: 1,
                title: "Request",
                desc: "Contact us with your travel needs and preferences",
                icon: "💬"
              },
              {
                id: 2,
                title: "Personalize",
                desc: "We create a customized experience just for you",
                icon: "🎯"
              },
              {
                id: 3,
                title: "Execute",
                desc: "Our team handles all arrangements seamlessly",
                icon: "📝"
              },
              {
                id: 4,
                title: "Enjoy",
                desc: "Experience luxury travel without any stress",
                icon: "🎉"
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
          <Heading isCenter desc="Let our concierge team transform your next journey into an extraordinary experience.">
            Ready to experience luxury travel?
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/services/planning/consultation" sizeClass="px-8 py-4">
              Start Membership
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

export default PageServicesConcierge;