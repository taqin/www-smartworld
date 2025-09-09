import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageHelpTravelTipsProps {}

const PageHelpTravelTips: FC<PageHelpTravelTipsProps> = ({}) => {
  return (
    <main className="nc-PageHelpTravelTips relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Expert Travel Tips
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Discover insider advice and practical tips from travel experts to make your journeys smoother, more enjoyable, and memorable. From packing hacks to cultural etiquette, we've got you covered.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="#tips-categories" sizeClass="px-5 py-4 sm:px-7">
                Explore Tips
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                Get Personalized Advice
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">💡</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Travel Like a Pro</div>
                <div className="text-neutral-500 dark:text-neutral-400">Expert advice for every journey</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TIPS CATEGORIES */}
      <div className="relative py-16" id="tips-categories">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Browse our comprehensive travel tips by category">
            Popular Categories
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "🎒",
                title: "Packing Smart",
                description: "Essential packing tips and space-saving techniques",
                tips: ["Roll clothes instead of folding", "Pack versatile clothing items", "Use packing cubes for organization", "Keep essentials in carry-on"]
              },
              {
                icon: "💰",
                title: "Money Matters",
                description: "Smart financial planning for your travels",
                tips: ["Notify your bank before traveling", "Use credit cards with no foreign fees", "Carry local currency for small purchases", "Keep emergency funds separate"]
              },
              {
                icon: "📱",
                title: "Tech & Apps",
                description: "Essential technology and apps for travelers",
                tips: ["Download offline maps", "Use translation apps", "Backup important documents", "Get a portable power bank"]
              },
              {
                icon: "🏨",
                title: "Accommodation",
                description: "Choosing and booking the perfect place to stay",
                tips: ["Book accommodations with free cancellation", "Check location and public transport access", "Read recent reviews", "Consider alternative lodging options"]
              },
              {
                icon: "🍽️",
                title: "Food & Dining",
                description: "Culinary experiences and dining etiquette",
                tips: ["Try local street food", "Learn basic dining phrases", "Research local customs", "Stay hydrated and try local specialties"]
              },
              {
                icon: "📸",
                title: "Photography",
                description: "Capture your travel memories like a pro",
                tips: ["Golden hour photography tips", "Respect local photography rules", "Backup photos regularly", "Capture candid moments"]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white text-center">{category.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-center mb-6">
                  {category.description}
                </p>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESTINATION-SPECIFIC TIPS */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Tailored advice for different types of destinations">
            Destination-Specific Advice
          </Heading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: "🏖️",
                title: "Beach Destinations",
                subtitle: "Tropical & Coastal Travel",
                tips: [
                  "Pack reef-safe sunscreen",
                  "Stay hydrated in tropical climates",
                  "Learn about local marine life",
                  "Respect beach conservation efforts",
                  "Pack waterproof gear for electronics"
                ],
                bestTime: "Dry season for best weather"
              },
              {
                icon: "🏔️",
                title: "Mountain Adventures",
                subtitle: "High Altitude & Hiking",
                tips: [
                  "Acclimatize gradually to high altitudes",
                  "Pack layers for changing weather",
                  "Bring proper hiking boots",
                  "Carry water purification methods",
                  "Learn basic first aid for outdoor emergencies"
                ],
                bestTime: "Summer months for accessibility"
              },
              {
                icon: "🏛️",
                title: "Cultural Cities",
                subtitle: "Historic & Urban Exploration",
                tips: [
                  "Research local customs and etiquette",
                  "Learn basic phrases in local language",
                  "Dress appropriately for cultural sites",
                  "Get city cards for attractions",
                  "Use public transportation like a local"
                ],
                bestTime: "Shoulder seasons for fewer crowds"
              },
              {
                icon: "🌿",
                title: "Nature & Wildlife",
                subtitle: "Eco-Tourism & Safari",
                tips: [
                  "Choose eco-friendly accommodations",
                  "Respect wildlife and natural habitats",
                  "Support local conservation efforts",
                  "Bring binoculars and zoom lenses",
                  "Follow leave-no-trace principles"
                ],
                bestTime: "Migration or breeding seasons"
              }
            ].map((destination, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{destination.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{destination.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{destination.subtitle}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {destination.tips.map((tip, tipIndex) => (
                    <div key={tipIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-neutral-600 dark:text-neutral-400">{tip}</span>
                    </div>
                  ))}
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <p className="text-sm text-green-700 dark:text-green-300">
                    <strong>🌟 Best Time to Visit:</strong> {destination.bestTime}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BUDGET TRAVEL TIPS */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Travel more while spending less with these money-saving tips">
            Budget Travel Hacks
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Accommodation Savings",
                icon: "🏨",
                tips: [
                  "Book accommodations with kitchen facilities",
                  "Stay slightly outside city centers",
                  "Consider hostels or guesthouses",
                  "Use loyalty programs for discounts",
                  "Book last-minute deals for flexibility"
                ]
              },
              {
                title: "Transportation Deals",
                icon: "✈️",
                tips: [
                  "Be flexible with travel dates",
                  "Use incognito mode when searching",
                  "Consider budget airlines",
                  "Book connecting flights for savings",
                  "Use public transportation locally"
                ]
              },
              {
                title: "Food & Entertainment",
                icon: "🍽️",
                tips: [
                  "Eat where locals eat",
                  "Cook some meals yourself",
                  "Look for happy hour specials",
                  "Take advantage of free attractions",
                  "Use city tourism cards for discounts"
                ]
              },
              {
                title: "Shopping Smart",
                icon: "🛍️",
                tips: [
                  "Shop at local markets",
                  "Avoid tourist trap areas",
                  "Bargain where culturally appropriate",
                  "Buy souvenirs from local artisans",
                  "Check duty-free shopping options"
                ]
              },
              {
                title: "Timing Strategies",
                icon: "⏰",
                tips: [
                  "Travel during shoulder seasons",
                  "Book flights on Tuesday or Wednesday",
                  "Take advantage of off-peak pricing",
                  "Consider red-eye flights",
                  "Plan longer stays for better rates"
                ]
              },
              {
                title: "Money Management",
                icon: "💰",
                tips: [
                  "Use fee-free credit cards",
                  "Withdraw larger amounts to save fees",
                  "Track expenses with travel apps",
                  "Set daily spending limits",
                  "Keep emergency funds separate"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white text-center">{category.title}</h3>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SEASONAL TRAVEL TIPS */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Season-specific advice for year-round travel success">
            Seasonal Travel Guide
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                season: "Spring",
                icon: "🌸",
                tips: [
                  "Pack layers for changing weather",
                  "Book early for popular destinations",
                  "Take advantage of spring festivals",
                  "Expect higher prices in popular spots",
                  "Bring allergy medication if needed"
                ]
              },
              {
                season: "Summer",
                icon: "☀️",
                tips: [
                  "Book accommodations well in advance",
                  "Stay hydrated and use sunscreen",
                  "Travel early morning or late afternoon",
                  "Look for air-conditioned accommodations",
                  "Book indoor activities for midday heat"
                ]
              },
              {
                season: "Fall",
                icon: "🍂",
                tips: [
                  "Enjoy shoulder season pricing",
                  "Pack warm layers for cooler evenings",
                  "Experience harvest festivals",
                  "Book last-minute deals for savings",
                  "Enjoy beautiful fall foliage"
                ]
              },
              {
                season: "Winter",
                icon: "❄️",
                tips: [
                  "Pack warm, waterproof clothing",
                  "Check weather forecasts regularly",
                  "Book indoor backup activities",
                  "Consider travel insurance for weather issues",
                  "Enjoy winter sports and festivals"
                ]
              }
            ].map((season, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{season.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white text-center">{season.season}</h3>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  {season.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-sm">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PRO TRAVELER SECRETS */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Insider secrets from experienced travelers and industry professionals">
            Pro Traveler Secrets
          </Heading>
          
          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            {[
              {
                secret: "Always Pack a Portable Door Stop",
                description: "A simple door stop can add security to budget accommodations and give you peace of mind while sleeping."
              },
              {
                secret: "Take Photos of Important Documents",
                description: "Photograph your passport, ID, and travel documents. Store them in cloud storage for easy access if originals are lost."
              },
              {
                secret: "Learn Basic Local Phrases",
                description: "Even simple greetings and 'thank you' in the local language can open doors and show respect for the culture."
              },
              {
                secret: "Use Compression Bags for Space",
                description: "Compression bags can reduce clothing volume by up to 50%, giving you more space in your luggage."
              },
              {
                secret: "Always Carry Small Bills",
                description: "Having small denominations of local currency is essential for tips, small purchases, and markets that don't accept cards."
              },
              {
                secret: "Research Local Scams",
                description: "Knowing common tourist scams in your destination can help you avoid them and stay safe during your travels."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-neutral-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">{item.secret}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative text-center">
          <Heading isCenter desc="Ready to put these tips into practice? Let us help you plan your next adventure.">
            Start Planning Your Trip
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/services" sizeClass="px-8 py-4">
              Browse Services
            </ButtonPrimary>
            <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-8 py-4">
              Get Personalized Tips
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

export default PageHelpTravelTips;