import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageHelpFaqProps {}

const PageHelpFaq: FC<PageHelpFaqProps> = ({}) => {
  return (
    <main className="nc-PageHelpFaq relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Frequently Asked Questions
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              Find answers to common questions about our travel services, booking process, and policies. We're here to help make your travel planning experience smooth and enjoyable.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="#faq-content" sizeClass="px-5 py-4 sm:px-7">
                Browse Questions
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                Contact Support
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">❓</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Get Answers</div>
                <div className="text-neutral-500 dark:text-neutral-400">Everything you need to know</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ CATEGORIES */}
      <div className="relative py-16" id="faq-content">
        <BackgroundSection className="bg-blue-50 dark:bg-black/20" />
        <div className="container relative">
          <Heading isCenter desc="Browse our comprehensive FAQ sections">
            Popular Topics
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "📅",
                title: "Booking & Reservations",
                description: "Questions about booking process, payments, and confirmations",
                questions: ["How do I make a booking?", "What payment methods do you accept?", "Can I modify my booking?"]
              },
              {
                icon: "✈️",
                title: "Travel Planning",
                description: "Information about itinerary planning and travel services",
                questions: ["What services do you offer?", "How do you create custom itineraries?", "Do you offer group travel?"]
              },
              {
                icon: "🛂",
                title: "Visa & Documentation",
                description: "Visa assistance and travel document requirements",
                questions: ["What countries require visas?", "How long does visa processing take?", "What documents do I need?"]
              },
              {
                icon: "🛡️",
                title: "Travel Insurance",
                description: "Coverage options and claims process",
                questions: ["What does travel insurance cover?", "How do I file a claim?", "Is insurance mandatory?"]
              },
              {
                icon: "🚗",
                title: "Transportation",
                description: "Airport transfers and local transportation options",
                questions: ["Do you provide airport transfers?", "What vehicles are available?", "How far in advance should I book?"]
              },
              {
                icon: "❌",
                title: "Cancellations",
                description: "Cancellation policies and refund information",
                questions: ["What is your cancellation policy?", "How do I cancel my booking?", "Are refunds available?"]
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
                  {category.questions.map((question, qIndex) => (
                    <li key={qIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMMON QUESTIONS */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Quick answers to our most frequently asked questions">
            Top Questions
          </Heading>
          
          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            {[
              {
                question: "How do I book a travel service?",
                answer: "You can book through our website by selecting your desired service, filling out the booking form, and completing the payment process. You'll receive a confirmation email within 24 hours."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, PayPal, and bank transfers. All transactions are secure and encrypted."
              },
              {
                question: "Can I modify or cancel my booking?",
                answer: "Yes, you can modify or cancel your booking up to 48 hours before your travel date, subject to our cancellation policy. Changes may incur additional fees."
              },
              {
                question: "Do you offer travel insurance?",
                answer: "Yes, we offer comprehensive travel insurance coverage including medical emergencies, trip cancellations, lost luggage, and more."
              },
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking at least 2-4 weeks in advance for domestic travel and 6-8 weeks for international travel to ensure availability and better rates."
              },
              {
                question: "What if I need help during my trip?",
                answer: "We provide 24/7 customer support. Contact us via phone, email, or our mobile app for immediate assistance during your travels."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-neutral-100 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-neutral-600 dark:text-neutral-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT SUPPORT */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative text-center">
          <Heading isCenter desc="Can't find what you're looking for? Our support team is here to help.">
            Still have questions?
          </Heading>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <ButtonPrimary href="/help/customer-service" sizeClass="px-8 py-4">
              Contact Support
            </ButtonPrimary>
            <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-8 py-4">
              Live Chat
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

export default PageHelpFaq;