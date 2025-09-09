import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageServicesAirportTransfersProps {}

const PageServicesAirportTransfers: FC<PageServicesAirportTransfersProps> = ({}) => {
  return (
    <main className="nc-PageServicesAirportTransfers relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Airport Transfers
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Start and end your journey in comfort. Reliable airport transportation with professional drivers and premium vehicles serving 500+ airports worldwide with 24/7 availability.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="/services/planning/consultation" sizeClass="px-5 py-4 sm:px-7">
                Book Transfer
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                View Fleet
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚗</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Premium Airport Service</div>
                <div className="text-neutral-500 dark:text-neutral-400">Rated 4.9/5 by travelers</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VEHICLE FLEET SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Choose from our wide selection of well-maintained vehicles for every travel need">
            Premium vehicle fleet
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🚗",
                title: "Executive Sedan",
                description: "Premium sedans for business travelers and couples seeking comfort",
                items: ["Mercedes E-Class, BMW 5 Series", "Leather interior", "WiFi & bottled water", "Up to 3 passengers"],
                price: "From $45",
                color: "blue"
              },
              {
                icon: "🚙",
                title: "Luxury SUV",
                description: "Spacious SUVs perfect for families and small groups",
                items: ["Cadillac Escalade, BMW X7", "Premium sound system", "Extra luggage space", "Up to 6 passengers"],
                price: "From $65",
                color: "indigo"
              },
              {
                icon: "🚌",
                title: "Group Shuttle",
                description: "Shared shuttle service for budget-conscious travelers",
                items: ["Mercedes Sprinter", "Multiple stops", "Professional driver", "Up to 12 passengers"],
                price: "From $25",
                color: "purple"
              },
              {
                icon: "🚐",
                title: "Van Minibus",
                description: "Perfect for larger groups and extended families",
                items: ["Ford Transit, Mercedes Vito", "Ample luggage space", "Comfortable seating", "Up to 8 passengers"],
                price: "From $85",
                color: "pink"
              },
              {
                icon: "🏎️",
                title: "Sports Car",
                description: "Exotic sports cars for special occasions and luxury travel",
                items: ["Porsche, Ferrari, Lamborghini", "Premium experience", "Photo opportunities", "Up to 2 passengers"],
                price: "From $150",
                color: "red"
              },
              {
                icon: "🌟",
                title: "VIP Service",
                description: "Ultimate luxury with meet-and-greet and premium amenities",
                items: ["Any premium vehicle", "Meet & greet service", "Fast-track security", "Champagne service"],
                price: "From $200",
                color: "orange"
              }
            ].map((vehicle, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-neutral-100 dark:border-gray-700"
              >
                <div className={`w-16 h-16 bg-${vehicle.color}-100 dark:bg-${vehicle.color}-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-${vehicle.color}-200 dark:group-hover:bg-${vehicle.color}-900/50 transition-colors duration-300`}>
                  <span className="text-3xl">{vehicle.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  {vehicle.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {vehicle.description}
                </p>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 mb-4">
                  {vehicle.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className={`text-${vehicle.color}-500 mr-2 mt-1`}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className={`text-xl font-bold text-${vehicle.color}-600`}>{vehicle.price}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Comprehensive airport transfer solutions for every need">
            Transfer services
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: "✈️",
                title: "Airport Pickup",
                description: "Professional driver meets you at arrivals with personalized name sign, helps with luggage, and ensures smooth departure to your destination.",
                color: "blue"
              },
              {
                icon: "🏠",
                title: "Hotel Drop-off",
                description: "Direct transfer to your hotel or accommodation with real-time flight tracking to adjust for delays.",
                color: "indigo"
              },
              {
                icon: "⏰",
                title: "Hourly Service",
                description: "Flexible hourly bookings for multiple stops, city tours, or business meetings.",
                color: "purple"
              },
              {
                icon: "📱",
                title: "Real-time Tracking",
                description: "Track your driver's location in real-time and receive updates on your transfer status.",
                color: "pink"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-${service.color}-100 dark:bg-${service.color}-900/30 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white text-2xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">{service.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COVERAGE SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="We serve major airports worldwide with reliable transfer services">
            Global airport coverage
          </Heading>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            {['🇺🇸 JFK', '🇬🇧 LHR', '🇫🇷 CDG', '🇯🇵 NRT', '🇸🇬 SIN', '🇦🇪 DXB', '🇩🇪 FRA', '🇳🇱 AMS', '🇮🇹 FCO', '🇪🇸 MAD', '🇨🇭 ZRH', '🇭🇰 HKG'].map((airport) => (
              <div key={airport} className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="text-xl mb-1">{airport.split(' ')[0]}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-semibold">{airport.split(' ')[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Experience the difference with our premium airport transfer service">
            Why choose our transfer service
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🕒",
                title: "Punctuality",
                description: "Flight tracking ensures we're there when you arrive, every time"
              },
              {
                icon: "💎",
                title: "Professional Drivers",
                description: "Licensed, experienced, and courteous professional drivers"
              },
              {
                icon: "🛡️",
                title: "Safety First",
                description: "Fully insured vehicles with regular maintenance and safety checks"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">{feature.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative text-center">
          <Heading isCenter desc="Arrive in style and comfort. Reserve your premium airport transfer today.">
            Book your airport transfer
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/services/planning/consultation" sizeClass="px-8 py-4">
              Book Now
            </ButtonPrimary>
            <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-8 py-4">
              View Fleet
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

export default PageServicesAirportTransfers;