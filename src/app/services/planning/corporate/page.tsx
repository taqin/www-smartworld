import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageServicesPlanningCorporateProps {}

const PageServicesPlanningCorporate: FC<PageServicesPlanningCorporateProps> = ({}) => {
  return (
    <main className="nc-PageServicesPlanningCorporate relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Corporate Travel
              <span className="block text-blue-600">Management</span>
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Streamlined business travel solutions that save time, reduce costs, and enhance employee satisfaction. With 30% average cost savings and 24/7 support available.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="/services/planning/consultation" sizeClass="px-5 py-4 sm:px-7">
                Schedule Demo
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                Contact Sales
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🏢</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Corporate Travel Solutions</div>
                <div className="text-neutral-500 dark:text-neutral-400">Professional business travel management</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="End-to-end travel management services designed for modern businesses">
            Comprehensive corporate travel solutions
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "📋",
                title: "Travel Policy Management",
                description: "Customized travel policies that align with your company culture and budget requirements",
                items: ["Policy development & implementation", "Compliance monitoring", "Automated approval workflows", "Policy violation alerts"]
              },
              {
                icon: "💳",
                title: "Expense Management",
                description: "Streamlined expense reporting and reimbursement processes with real-time tracking",
                items: ["Automated expense capture", "Real-time spending alerts", "Integration with accounting systems", "Mobile expense reporting"]
              },
              {
                icon: "📈",
                title: "Analytics & Reporting",
                description: "Comprehensive insights into travel patterns, costs, and opportunities for optimization",
                items: ["Real-time dashboards", "Cost savings analysis", "Travel pattern insights", "Custom reporting"]
              },
              {
                icon: "🤝",
                title: "Vendor Management",
                description: "Strategic partnerships with airlines, hotels, and service providers for better rates",
                items: ["Preferred vendor programs", "Volume discounts", "Quality assurance", "Performance monitoring"]
              },
              {
                icon: "📱",
                title: "Mobile Solutions",
                description: "Mobile app for booking, expense tracking, and travel management on the go",
                items: ["Mobile booking platform", "Real-time notifications", "Digital itinerary management", "Offline access"]
              },
              {
                icon: "🛡️",
                title: "Risk Management",
                description: "Comprehensive duty of care solutions to ensure employee safety and security",
                items: ["Travel risk assessments", "Real-time traveler tracking", "Emergency response", "Travel security alerts"]
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

      {/* IMPLEMENTATION PROCESS SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Seamless onboarding and integration with your existing systems">
            Implementation process
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20">
            {[
              {
                id: 1,
                title: "Assessment",
                desc: "Comprehensive analysis of current travel patterns and requirements",
                icon: "📊"
              },
              {
                id: 2,
                title: "Customization",
                desc: "Tailored solution design based on your specific business needs",
                icon: "🎯"
              },
              {
                id: 3,
                title: "Integration",
                desc: "Seamless integration with existing HR and accounting systems",
                icon: "🔗"
              },
              {
                id: 4,
                title: "Training",
                desc: "Comprehensive training for administrators and travelers",
                icon: "🎓"
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

      {/* STATS SECTION */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Proven results with leading companies worldwide">
            Corporate travel excellence
          </Heading>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                stat: "500+",
                label: "Companies Served"
              },
              {
                stat: "30%",
                label: "Average Savings"
              },
              {
                stat: "24/7",
                label: "Support Available"
              },
              {
                stat: "99.9%",
                label: "System Uptime"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">{item.stat}</div>
                <div className="text-neutral-600 dark:text-neutral-400">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative text-center">
          <Heading isCenter desc="Let us show you how our corporate travel solutions can transform your business travel program.">
            Ready to optimize your corporate travel?
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/services/planning/consultation" sizeClass="px-8 py-4">
              Schedule Demo
            </ButtonPrimary>
            <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-8 py-4">
              Contact Sales
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

export default PageServicesPlanningCorporate;