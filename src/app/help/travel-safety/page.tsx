import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageHelpTravelSafetyProps {}

const PageHelpTravelSafety: FC<PageHelpTravelSafetyProps> = ({}) => {
  return (
    <main className="nc-PageHelpTravelSafety relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Travel Safety Guide
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Your comprehensive guide to staying safe while traveling. From pre-trip preparation to on-the-ground safety measures, we provide essential information to ensure your journey is both enjoyable and secure.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="#safety-topics" sizeClass="px-5 py-4 sm:px-7">
                Safety Topics
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                Emergency Contacts
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🛡️</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Travel Safe, Travel Smart</div>
                <div className="text-neutral-500 dark:text-neutral-400">Essential safety information for every traveler</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PRE-TRIP SAFETY */}
      <div className="relative py-16" id="safety-topics">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Essential safety preparations before you travel">
            Before You Go
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "📋",
                title: "Research Your Destination",
                description: "Know before you go",
                tips: [
                  "Check travel advisories",
                  "Research local laws and customs",
                  "Understand political climate",
                  "Learn about common scams",
                  "Know emergency numbers"
                ]
              },
              {
                icon: "🏥",
                title: "Health Preparations",
                description: "Stay healthy abroad",
                tips: [
                  "Get necessary vaccinations",
                  "Pack a medical kit",
                  "Purchase travel insurance",
                  "Research local healthcare",
                  "Bring prescription medications"
                ]
              },
              {
                icon: "📱",
                title: "Communication Setup",
                description: "Stay connected safely",
                tips: [
                  "Set up international roaming",
                  "Download offline maps",
                  "Share itinerary with family",
                  "Get local SIM card info",
                  "Install safety apps"
                ]
              },
              {
                icon: "💳",
                title: "Financial Safety",
                description: "Protect your money",
                tips: [
                  "Notify your bank",
                  "Use credit cards over debit",
                  "Carry emergency cash",
                  "Keep cards separate",
                  "Use hotel safes"
                ]
              },
              {
                icon: "🎒",
                title: "Document Security",
                description: "Keep your papers safe",
                tips: [
                  "Make passport copies",
                  "Store digital backups",
                  "Use RFID-blocking wallets",
                  "Keep documents separate",
                  "Register with embassy"
                ]
              },
              {
                icon: "🏠",
                title: "Home Security",
                description: "Protect your home",
                tips: [
                  "Arrange house sitting",
                  "Stop mail delivery",
                  "Use timers for lights",
                  "Inform trusted neighbors",
                  "Secure valuables"
                ]
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

      {/* DURING TRAVEL SAFETY */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Stay safe while exploring your destination">
            While You're There
          </Heading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: "🚶",
                title: "Personal Safety",
                subtitle: "Protect yourself and your belongings",
                guidelines: [
                  {
                    title: "Stay Aware",
                    description: "Be conscious of your surroundings and avoid distractions like phones in crowded areas"
                  },
                  {
                    title: "Blend In",
                    description: "Dress appropriately for local customs and avoid obvious tourist appearance"
                  },
                  {
                    title: "Trust Your Instincts",
                    description: "If a situation feels unsafe, leave immediately and seek help"
                  },
                  {
                    title: "Stay Sober",
                    description: "Limit alcohol consumption and never leave drinks unattended"
                  }
                ],
                emergency: "Know local emergency numbers and keep them accessible"
              },
              {
                icon: "🚗",
                title: "Transportation Safety",
                subtitle: "Safe travel options and practices",
                guidelines: [
                  {
                    title: "Licensed Transport",
                    description: "Use only licensed taxis or reputable ride-sharing services"
                  },
                  {
                    title: "Public Transport",
                    description: "Be aware of peak times and keep valuables secure on buses/trains"
                  },
                  {
                    title: "Rental Cars",
                    description: "Inspect vehicles thoroughly and understand local traffic laws"
                  },
                  {
                    title: "Walking Safety",
                    description: "Stick to well-lit areas and avoid walking alone at night"
                  }
                ],
                emergency: "Have backup transportation options and know emergency contacts"
              },
              {
                icon: "🏨",
                title: "Accommodation Safety",
                subtitle: "Choosing and securing your stay",
                guidelines: [
                  {
                    title: "Research Reviews",
                    description: "Read recent reviews focusing on safety and security features"
                  },
                  {
                    title: "Room Security",
                    description: "Use deadbolts, safes, and keep doors/windows locked"
                  },
                  {
                    title: "Fire Safety",
                    description: "Know evacuation routes and check fire extinguisher locations"
                  },
                  {
                    title: "Ground Floor",
                    description: "Request rooms above ground floor for better security"
                  }
                ],
                emergency: "Know hotel emergency procedures and front desk contact"
              },
              {
                icon: "💳",
                title: "Financial Security",
                subtitle: "Protecting your money and cards",
                guidelines: [
                  {
                    title: "ATM Safety",
                    description: "Use ATMs in well-lit, public areas during daylight hours"
                  },
                  {
                    title: "Card Protection",
                    description: "Keep cards in RFID-blocking wallets and monitor transactions"
                  },
                  {
                    title: "Cash Management",
                    description: "Carry only what you need and keep it in multiple locations"
                  },
                  {
                    title: "Payment Methods",
                    description: "Use credit cards for better fraud protection over debit cards"
                  }
                ],
                emergency: "Keep emergency cash separate and know how to report stolen cards"
              }
            ].map((safety, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{safety.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{safety.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{safety.subtitle}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  {safety.guidelines.map((guideline, guidelineIndex) => (
                    <div key={guidelineIndex} className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-semibold text-neutral-900 dark:text-white">{guideline.title}</h4>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">{guideline.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <p className="text-sm text-red-700 dark:text-red-300">
                    <strong>🚨 Emergency:</strong> {safety.emergency}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EMERGENCY PREPAREDNESS */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Be prepared for emergencies with these essential resources">
            Emergency Preparedness
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Emergency Contacts",
                icon: "📞",
                items: [
                  "Local emergency services: 112/911",
                  "U.S. Embassy: +1-202-501-4444",
                  "Travel insurance provider",
                  "Family emergency contact",
                  "Hotel/accommodation contact"
                ]
              },
              {
                title: "Medical Emergencies",
                icon: "🏥",
                items: [
                  "Nearest hospital locations",
                  "Blood type and allergies",
                  "Prescription medications",
                  "Travel insurance policy number",
                  "Emergency evacuation coverage"
                ]
              },
              {
                title: "Document Loss",
                icon: "📄",
                items: [
                  "Passport backup photos",
                  "Embassy contact information",
                  "Police report procedures",
                  "Emergency cash access",
                  "Digital document copies"
                ]
              },
              {
                title: "Natural Disasters",
                icon: "🌪️",
                items: [
                  "Local emergency alerts",
                  "Evacuation routes",
                  "Emergency shelter locations",
                  "Weather monitoring apps",
                  "Disaster preparedness kit"
                ]
              },
              {
                title: "Security Threats",
                icon: "🚨",
                items: [
                  "Local police contact",
                  "Security apps",
                  "Safe meeting points",
                  "Emergency communication plan",
                  "Local security services"
                ]
              },
              {
                title: "Travel Insurance",
                icon: "🛡️",
                items: [
                  "Policy number and coverage",
                  "24/7 assistance hotline",
                  "Claim procedures",
                  "Coverage limits",
                  "Emergency medical contacts"
                ]
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white text-center">{item.title}</h3>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-sm">{listItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESTINATION-SPECIFIC SAFETY */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Safety considerations for different types of destinations">
            Destination-Specific Safety
          </Heading>
          
          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            {[
              {
                destination: "Urban Cities",
                risks: ["Petty theft", "Pickpocketing", "Scams", "Traffic accidents"],
                precautions: [
                  "Keep valuables secure and out of sight",
                  "Be cautious in crowded tourist areas",
                  "Use licensed transportation services",
                  "Stay aware of your surroundings"
                ],
                special: "Research high-crime areas and avoid them, especially at night"
              },
              {
                destination: "Beach & Coastal Areas",
                risks: ["Water safety", "Sun exposure", "Marine life", "Theft"],
                precautions: [
                  "Swim in designated areas with lifeguards",
                  "Use reef-safe sunscreen and stay hydrated",
                  "Learn about local marine life hazards",
                  "Don't leave valuables unattended on beaches"
                ],
                special: "Check weather conditions and water quality before swimming"
              },
              {
                destination: "Mountain & Remote Areas",
                risks: ["Altitude sickness", "Weather changes", "Getting lost", "Limited medical access"],
                precautions: [
                  "Acclimatize gradually to high altitudes",
                  "Pack appropriate clothing and gear",
                  "Carry maps and communication devices",
                  "Inform others of your hiking plans"
                ],
                special: "Consider hiring local guides for unfamiliar terrain"
              },
              {
                destination: "Political Unstable Regions",
                risks: ["Civil unrest", "Travel restrictions", "Communication issues", "Safety concerns"],
                precautions: [
                  "Monitor news and travel advisories regularly",
                  "Register with your embassy",
                  "Have multiple evacuation plans",
                  "Keep emergency cash accessible"
                ],
                special: "Consider purchasing specialized kidnapping and ransom insurance"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-neutral-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">{item.destination}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-medium text-red-600 dark:text-red-400 mb-2">Common Risks:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.risks.map((risk, riskIndex) => (
                        <span key={riskIndex} className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-1 rounded text-sm">
                          {risk}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-blue-600 dark:text-blue-400 mb-2">Precautions:</h4>
                    <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                      {item.precautions.map((precaution, precautionIndex) => (
                        <li key={precautionIndex} className="flex items-start">
                          <span className="text-blue-500 mr-1">•</span>
                          <span>{precaution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    <strong>⚠️ Special Consideration:</strong> {item.special}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SAFETY APPS & RESOURCES */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Essential apps and resources for travel safety">
            Safety Apps & Resources
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Smart Traveler",
                type: "Official Government App",
                features: ["Travel advisories", "Embassy locations", "Emergency contacts", "Safety alerts"],
                download: "Free from app stores"
              },
              {
                name: "Google Translate",
                type: "Communication Tool",
                features: ["Offline translation", "Camera translation", "Voice translation", "Phrasebook"],
                download: "Free with in-app purchases"
              },
              {
                name: "Maps.Me",
                type: "Offline Maps",
                features: ["Offline navigation", "Points of interest", "Location sharing", "Route planning"],
                download: "Free with premium options"
              },
              {
                name: "ICE (In Case of Emergency)",
                type: "Medical Information",
                features: ["Emergency contacts", "Medical information", "Blood type", "Allergies"],
                download: "Free or premium versions"
              },
              {
                name: "Find My Friends",
                type: "Location Sharing",
                features: ["Real-time location", "Geofencing", "Location history", "Emergency alerts"],
                download: "Free with Apple devices"
              },
              {
                name: "TripIt",
                type: "Travel Organizer",
                features: ["Itinerary management", "Document storage", "Flight tracking", "Hotel information"],
                download: "Free with premium options"
              }
            ].map((app, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white text-center">{app.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-center mb-4">{app.type}</p>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 mb-4">
                  {app.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{app.download}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EMERGENCY CONTACT SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative text-center">
          <Heading isCenter desc="In case of emergency, contact our 24/7 support team immediately">
            Need Emergency Assistance?
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/help/customer-service" sizeClass="px-8 py-4">
              Emergency Contacts
            </ButtonPrimary>
            <ButtonPrimary className="bg-red-600 text-white hover:bg-red-700 border border-red-600" sizeClass="px-8 py-4">
              Call Emergency Line
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

export default PageHelpTravelSafety;