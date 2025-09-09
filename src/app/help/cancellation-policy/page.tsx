import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageHelpCancellationPolicyProps {}

const PageHelpCancellationPolicy: FC<PageHelpCancellationPolicyProps> = ({}) => {
  return (
    <main className="nc-PageHelpCancellationPolicy relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Cancellation Policy
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Clear and fair cancellation terms for all our travel services. We understand that plans change, and we've designed our policies to be flexible while protecting our service quality and partners.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="#policy-details" sizeClass="px-5 py-4 sm:px-7">
                View Policies
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                Contact Support
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">❌</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Fair Cancellation Terms</div>
                <div className="text-neutral-500 dark:text-neutral-400">Flexible policies for peace of mind</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* GENERAL POLICY OVERVIEW */}
      <div className="relative py-16" id="policy-details">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Our cancellation policies vary by service type and timing">
            General Cancellation Guidelines
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                timeframe: "48+ Hours Before",
                refund: "Full Refund",
                fee: "No cancellation fee",
                color: "bg-green-100 dark:bg-green-900/30",
                textColor: "text-green-700 dark:text-green-300"
              },
              {
                timeframe: "24-48 Hours Before",
                refund: "50% Refund",
                fee: "50% cancellation fee",
                color: "bg-yellow-100 dark:bg-yellow-900/30",
                textColor: "text-yellow-700 dark:text-yellow-300"
              },
              {
                timeframe: "Less than 24 Hours",
                refund: "No Refund",
                fee: "100% cancellation fee",
                color: "bg-red-100 dark:bg-red-900/30",
                textColor: "text-red-700 dark:text-red-300"
              }
            ].map((policy, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className={`w-16 h-16 ${policy.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className={`text-2xl font-bold ${policy.textColor}`}>{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white text-center">{policy.timeframe}</h3>
                <p className={`text-lg font-medium mb-2 text-center ${policy.textColor}`}>{policy.refund}</p>
                <p className="text-neutral-600 dark:text-neutral-400 text-center">{policy.fee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICE-SPECIFIC POLICIES */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Detailed cancellation policies for each service type">
            Service-Specific Terms
          </Heading>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {[
              {
                icon: "✈️",
                title: "Travel Planning Services",
                subtitle: "Custom Itineraries & Consultations",
                policies: [
                  {
                    timeframe: "30+ days before travel",
                    refund: "90% refund",
                    details: "Full refund minus 10% administrative fee"
                  },
                  {
                    timeframe: "15-30 days before travel",
                    refund: "50% refund",
                    details: "50% refund for planning services rendered"
                  },
                  {
                    timeframe: "Less than 15 days",
                    refund: "No refund",
                    details: "No refund due to completed planning work"
                  }
                ],
                note: "Third-party bookings (hotels, flights) subject to individual provider policies"
              },
              {
                icon: "🛂",
                title: "Visa Assistance",
                subtitle: "Documentation Services",
                policies: [
                  {
                    timeframe: "Before submission",
                    refund: "Full refund",
                    details: "Full refund if application not yet submitted"
                  },
                  {
                    timeframe: "After submission, before approval",
                    refund: "50% refund",
                    details: "50% refund minus government fees"
                  },
                  {
                    timeframe: "After approval",
                    refund: "No refund",
                    details: "No refund once visa is approved"
                  }
                ],
                note: "Government fees are non-refundable once submitted"
              },
              {
                icon: "🛡️",
                title: "Travel Insurance",
                subtitle: "Coverage Policies",
                policies: [
                  {
                    timeframe: "14-day cooling period",
                    refund: "Full refund",
                    details: "Full refund within 14 days of purchase"
                  },
                  {
                    timeframe: "Before travel date",
                    refund: "Pro-rated refund",
                    details: "Pro-rated refund based on unused coverage period"
                  },
                  {
                    timeframe: "After travel starts",
                    refund: "No refund",
                    details: "No refund once travel period begins"
                  }
                ],
                note: "Claims processing fees may apply for cancelled policies"
              },
              {
                icon: "🚗",
                title: "Airport Transfers",
                subtitle: "Transportation Services",
                policies: [
                  {
                    timeframe: "24+ hours before",
                    refund: "Full refund",
                    details: "Full refund with 24+ hours notice"
                  },
                  {
                    timeframe: "6-24 hours before",
                    refund: "50% refund",
                    details: "50% refund for late cancellations"
                  },
                  {
                    timeframe: "Less than 6 hours",
                    refund: "No refund",
                    details: "No refund for last-minute cancellations"
                  }
                ],
                note: "No-shows are subject to full charge without refund"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">{service.title}</h3>
                    <p className="text-neutral-600 dark:text-neutral-400">{service.subtitle}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  {service.policies.map((policy, policyIndex) => (
                    <div key={policyIndex} className="border-l-4 border-blue-500 pl-4 py-2">
                      <h4 className="font-semibold text-neutral-900 dark:text-white">{policy.timeframe}</h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">{policy.refund}</p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">{policy.details}</p>
                    </div>
                  ))}
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    <strong>Note:</strong> {service.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CANCELLATION PROCESS */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Simple steps to cancel your booking">
            How to Cancel
          </Heading>
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Online Cancellation",
                    steps: [
                      "Log into your account",
                      "Go to 'My Bookings'",
                      "Select the booking to cancel",
                      "Click 'Cancel Booking'",
                      "Confirm cancellation details",
                      "Receive cancellation confirmation"
                    ],
                    time: "5 minutes"
                  },
                  {
                    title: "Phone Cancellation",
                    steps: [
                      "Call our support team",
                      "Provide booking reference",
                      "Verify your identity",
                      "Request cancellation",
                      "Receive cancellation number",
                      "Get email confirmation"
                    ],
                    time: "10-15 minutes"
                  }
                ].map((method, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">{method.title}</h3>
                    <div className="space-y-3">
                      {method.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1 font-semibold">{stepIndex + 1}.</span>
                          <span className="text-neutral-600 dark:text-neutral-400">{step}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        <strong>⏱️ Time:</strong> {method.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REFUND PROCESS */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="What to expect after cancellation">
            Refund Process
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Processing Time",
                description: "5-7 business days for credit cards, 3-5 business days for digital wallets",
                icon: "⏰"
              },
              {
                title: "Refund Method",
                description: "Refunds are processed to the original payment method used for booking",
                icon: "💳"
              },
              {
                title: "Confirmation",
                description: "Email confirmation sent once refund is processed",
                icon: "✉️"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white text-center">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EXCEPTIONS & SPECIAL CASES */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Special circumstances that may affect cancellation terms">
            Exceptions & Special Cases
          </Heading>
          
          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            {[
              {
                title: "Medical Emergencies",
                description: "Full refund may be available with medical documentation",
                requirement: "Doctor's note or hospital records required"
              },
              {
                title: "Natural Disasters",
                description: "Flexible cancellation for weather-related disruptions",
                requirement: "Official travel advisories or warnings"
              },
              {
                title: "Political Unrest",
                description: "Full refund for destinations with safety warnings",
                requirement: "Government travel advisories"
              },
              {
                title: "Death in Family",
                description: "Compassionate cancellation policy available",
                requirement: "Death certificate or obituary notice"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-neutral-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-2">{item.description}</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">{item.requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative text-center">
          <Heading isCenter desc="Need help with a cancellation? Our support team is here to assist you.">
            Questions About Cancellation?
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/help/customer-service" sizeClass="px-8 py-4">
              Contact Support
            </ButtonPrimary>
            <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-8 py-4">
              View My Bookings
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

export default PageHelpCancellationPolicy;