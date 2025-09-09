import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageServicesVisaAssistanceProps {}

const PageServicesVisaAssistance: FC<PageServicesVisaAssistanceProps> = ({}) => {
  return (
    <main className="nc-PageServicesVisaAssistance relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Visa Assistance
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Navigate complex visa requirements with confidence. Our expert guidance ensures smooth processing for travelers worldwide. Let each journey begin with proper documentation and hassle-free border crossings.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="/services/planning/consultation" sizeClass="px-5 py-4 sm:px-7">
                Start Application
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                Free Consultation
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🛂</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Expert Visa Processing</div>
                <div className="text-neutral-500 dark:text-neutral-400">150+ countries supported</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* VISA TYPES SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Comprehensive visa processing services for all types of travel">
            Visa types we handle
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "✈️",
                title: "Tourist Visa",
                description: "Hassle-free tourist visa processing for leisure travelers and vacationers",
                items: ["Single & multiple entry", "Vacation planning", "Family applications", "Group processing"]
              },
              {
                icon: "💼",
                title: "Business Visa",
                description: "Professional business visa services for meetings, conferences, and work",
                items: ["Business meetings", "Conference attendance", "Work assignments", "Corporate clients"]
              },
              {
                icon: "🎓",
                title: "Student Visa",
                description: "Complete student visa assistance for international education opportunities",
                items: ["University admissions", "Study programs", "Exchange programs", "Research visas"]
              },
              {
                icon: "🏥",
                title: "Medical Visa",
                description: "Medical visa processing for treatment and healthcare services abroad",
                items: ["Medical treatment", "Hospital admissions", "Companion visas", "Emergency processing"]
              },
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family Visa",
                description: "Family reunion and dependent visa processing services",
                items: ["Spouse visas", "Child dependent visas", "Parent visas", "Family reunification"]
              },
              {
                icon: "🔄",
                title: "Transit Visa",
                description: "Quick transit visa processing for connecting flights and layovers",
                items: ["Airport transit", "Seaport transit", "Land border crossing", "Emergency transit"]
              }
            ].map((visa, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border border-neutral-100 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  <span className="text-3xl">{visa.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                  {visa.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                  {visa.description}
                </p>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  {visa.items.map((item, itemIndex) => (
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

      {/* HOW IT WORKS */}
      <div className="nc-SectionHowItWork">
        <Heading isCenter desc="Simple, streamlined visa application process with expert guidance">
          Our visa process
        </Heading>
        <div className="mt-20 relative grid md:grid-cols-4 gap-20">
          {/* Connecting line visualization */}
          <div className="hidden md:block absolute inset-x-0 top-20 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          
          {[
            {
              id: 1,
              title: "Consultation",
              desc: "We assess your visa requirements and provide initial guidance",
              icon: "💬"
            },
            {
              id: 2,
              title: "Documentation", 
              desc: "We help prepare and review all required documents",
              icon: "📋"
            },
            {
              id: 3,
              title: "Application",
              desc: "We submit your application and schedule appointments", 
              icon: "📝"
            },
            {
              id: 4,
              title: "Tracking",
              desc: "We monitor your application status and keep you updated",
              icon: "🔍"
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

      {/* DESTINATIONS SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="We provide visa assistance for travel to countries worldwide">
            Popular destinations
          </Heading>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            {['🇺🇸 USA', '🇬🇧 UK', '🇨🇦 Canada', '🇦🇺 Australia', '🇪🇺 EU', '🇯🇵 Japan', '🇸🇬 Singapore', '🇦🇪 UAE', '🇨🇳 China', '🇮🇳 India', '🇧🇷 Brazil', '🇿🇦 South Africa'].map((country) => (
              <div key={country} className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="text-2xl mb-2">{country.split(' ')[0]}</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400">{country.split(' ')[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BENEFITS SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Expert guidance and support throughout your visa application journey">
            Why choose our visa service
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: "🎯",
                title: "Expert Guidance",
                description: "Experienced visa consultants with up-to-date knowledge of requirements"
              },
              {
                icon: "⏰",
                title: "Time Saving",
                description: "Avoid common mistakes and delays with our professional assistance"
              },
              {
                icon: "📞",
                title: "24/7 Support",
                description: "Round-the-clock assistance for urgent visa queries and issues"
              },
              {
                icon: "💯",
                title: "High Success Rate",
                description: "98% success rate with our thorough document preparation process"
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {benefit.description}
                  </p>
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
          <Heading isCenter desc="Let our experts guide you through the visa process. Get started today!">
            Ready to start your visa application?
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/services/planning/consultation" sizeClass="px-8 py-4">
              Start Application
            </ButtonPrimary>
            <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-8 py-4">
              Free Consultation
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

export default PageServicesVisaAssistance;