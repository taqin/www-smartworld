import React, { FC } from "react";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import ButtonPrimary from "@/shared/ButtonPrimary";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import Heading from "@/shared/Heading";
import BackgroundSection from "@/components/BackgroundSection";

export interface PageHelpCustomerServiceProps {}

const PageHelpCustomerService: FC<PageHelpCustomerServiceProps> = ({}) => {
  return (
    <main className="nc-PageHelpCustomerService relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-10 mb-24 lg:space-y-10 lg:mb-28 mt-10">
      {/* HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-col relative">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
              Customer Service
            </h2>
            <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
              We're here to help you every step of your journey. Our dedicated customer service team provides 24/7 support to ensure your travel experience is smooth, enjoyable, and stress-free.
            </span>
            <div className="flex flex-col sm:flex-row gap-4">
              <ButtonPrimary href="#contact-options" sizeClass="px-5 py-4 sm:px-7">
                Contact Us
              </ButtonPrimary>
              <ButtonPrimary className="bg-white text-neutral-700 hover:bg-gray-100 border border-neutral-200" sizeClass="px-5 py-4 sm:px-7">
                Live Chat
              </ButtonPrimary>
            </div>
          </div>
          <div className="flex-grow">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎧</div>
                <div className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Here to Help</div>
                <div className="text-neutral-500 dark:text-neutral-400">24/7 customer support available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT OPTIONS */}
      <div className="relative py-16" id="contact-options">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Multiple ways to reach our customer service team">
            Get in Touch
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: "📞",
                title: "Phone Support",
                description: "24/7 emergency assistance",
                details: [
                  "Toll-free: 1-800-TRAVEL",
                  "International: +1-555-0123",
                  "Emergency: +1-555-0124",
                  "Average wait time: < 2 minutes"
                ],
                hours: "Available 24/7",
                bestFor: "Emergency situations, complex issues"
              },
              {
                icon: "💬",
                title: "Live Chat",
                description: "Instant online assistance",
                details: [
                  "Available on website and app",
                  "Real-time text chat",
                  "Screen sharing capability",
                  "Chat transcript emailed to you"
                ],
                hours: "Mon-Fri: 8AM-10PM, Sat-Sun: 9AM-8PM",
                bestFor: "Quick questions, booking assistance"
              },
              {
                icon: "✉️",
                title: "Email Support",
                description: "Detailed written assistance",
                details: [
                  "support@smartworldtravel.com",
                  "Response within 24 hours",
                  "Attach documents easily",
                  "Detailed tracking of your inquiry"
                ],
                hours: "Mon-Fri: 9AM-6PM",
                bestFor: "Non-urgent issues, documentation"
              },
              {
                icon: "📱",
                title: "Mobile App",
                description: "Support on the go",
                details: [
                  "In-app messaging",
                  "Push notifications",
                  "Offline assistance",
                  "Travel document storage"
                ],
                hours: "Available 24/7",
                bestFor: "Travelers on the move, quick access"
              },
              {
                icon: "🏢",
                title: "In-Person Support",
                description: "Face-to-face assistance",
                details: [
                  "Airport kiosks available",
                  "City center offices",
                  "Hotel concierge partnerships",
                  "Appointment scheduling"
                ],
                hours: "Varies by location",
                bestFor: "Complex bookings, visa assistance"
              },
              {
                icon: "🤖",
                title: "AI Assistant",
                description: "Instant automated help",
                details: [
                  "24/7 availability",
                  "Natural language processing",
                  "Multi-language support",
                  "Escalation to human agents"
                ],
                hours: "Available 24/7",
                bestFor: "Quick answers, basic inquiries"
              }
            ].map((method, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{method.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white text-center">{method.title}</h3>
                <p className="text-blue-600 dark:text-blue-400 text-center mb-6">{method.description}</p>
                
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400 mb-6">
                  {method.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <strong>🕒 Hours:</strong> {method.hours}
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <p className="text-sm text-green-700 dark:text-green-300">
                      <strong>✨ Best For:</strong> {method.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RESPONSE TIMES */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Our commitment to timely responses for all inquiries">
            Response Time Guarantees
          </Heading>
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    priority: "Emergency",
                    time: "Immediate",
                    response: "Less than 5 minutes",
                    methods: ["Phone", "Live Chat", "Emergency Line"],
                    color: "bg-red-100 dark:bg-red-900/30",
                    textColor: "text-red-700 dark:text-red-300"
                  },
                  {
                    priority: "Urgent",
                    time: "30 minutes",
                    response: "Less than 30 minutes",
                    methods: ["Live Chat", "Priority Email", "App Support"],
                    color: "bg-orange-100 dark:bg-orange-900/30",
                    textColor: "text-orange-700 dark:text-orange-300"
                  },
                  {
                    priority: "Standard",
                    time: "2-4 hours",
                    response: "Same business day",
                    methods: ["Email", "App Support", "Social Media"],
                    color: "bg-blue-100 dark:bg-blue-900/30",
                    textColor: "text-blue-700 dark:text-blue-300"
                  },
                  {
                    priority: "Non-Urgent",
                    time: "24-48 hours",
                    response: "Within 2 business days",
                    methods: ["Email", "Contact Form", "Standard Support"],
                    color: "bg-green-100 dark:bg-green-900/30",
                    textColor: "text-green-700 dark:text-green-300"
                  }
                ].map((level, index) => (
                  <div key={index} className={`p-6 rounded-xl ${level.color}`}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-lg font-semibold ${level.textColor}`}>{level.priority}</h3>
                      <span className={`text-sm font-medium ${level.textColor}`}>{level.time}</span>
                    </div>
                    <p className={`text-sm ${level.textColor} mb-3`}>{level.response}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.methods.map((method, methodIndex) => (
                        <span key={methodIndex} className="bg-white dark:bg-gray-700 px-2 py-1 rounded text-xs">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICE LEVELS */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Different levels of service to meet your needs">
            Service Levels
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                level: "Basic Support",
                price: "Free",
                features: [
                  "Email support",
                  "Knowledge base access",
                  "Community forums",
                  "Standard response times"
                ],
                bestFor: "Budget travelers, DIY planners"
              },
              {
                level: "Priority Support",
                price: "RM29/year",
                features: [
                  "Priority email responses",
                  "Live chat access",
                  "Phone support",
                  "Dedicated account manager",
                  "24/7 emergency assistance"
                ],
                bestFor: "Regular travelers, families"
              },
              {
                level: "VIP Concierge",
                price: "RM199/year",
                features: [
                  "White-glove service",
                  "Personal travel consultant",
                  "Instant response times",
                  "Proactive travel monitoring",
                  "Exclusive deals and upgrades"
                ],
                bestFor: "Frequent travelers, luxury clients"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 dark:border-gray-700">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">{service.level}</h3>
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{service.price}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="text-green-500 mr-2 mt-1">✓</span>
                      <span className="text-neutral-600 dark:text-neutral-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">{service.bestFor}</p>
                  <ButtonPrimary sizeClass="w-full px-4 py-2">
                    Choose Plan
                  </ButtonPrimary>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COMMON ISSUES */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Quick solutions to common customer service inquiries">
            Common Issues & Solutions
          </Heading>
          
          <div className="max-w-4xl mx-auto mt-12 space-y-6">
            {[
              {
                issue: "Booking Changes",
                solution: "Use your account portal to modify bookings up to 48 hours before travel. For urgent changes, contact our 24/7 support line.",
                category: "Modifications"
              },
              {
                issue: "Payment Problems",
                solution: "Check your payment method details and try again. If issues persist, use our secure payment portal or contact billing support.",
                category: "Billing"
              },
              {
                issue: "Document Requirements",
                solution: "Upload required documents through your account dashboard. Our team will review within 24 hours and notify you of any issues.",
                category: "Documentation"
              },
              {
                issue: "Travel Disruptions",
                solution: "Contact our emergency line immediately for flight cancellations, delays, or other travel disruptions. We'll assist with rebooking and accommodations.",
                category: "Emergencies"
              },
              {
                issue: "Service Complaints",
                solution: "Submit detailed feedback through our complaint form. We investigate all issues within 48 hours and provide resolution options.",
                category: "Feedback"
              },
              {
                issue: "Technical Issues",
                solution: "Try clearing your browser cache or using our mobile app. For persistent issues, contact tech support via live chat.",
                category: "Technical"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-neutral-100 dark:border-gray-700">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{item.issue}</h3>
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FEEDBACK & IMPROVEMENT */}
      <div className="relative py-16">
        <BackgroundSection className="bg-blue-50 dark:bg:black/20" />
        <div className="container relative">
          <Heading isCenter desc="Help us improve our service with your feedback">
            Your Feedback Matters
          </Heading>
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">How to Share Feedback</h3>
                  <ul className="space-y-3">
                    {[
                      "Post-trip surveys",
                      "In-app rating system",
                      "Email feedback forms",
                      "Social media reviews",
                      "Direct communication with support"
                    ].map((method, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-neutral-600 dark:text-neutral-400">{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">What We Do With Feedback</h3>
                  <ul className="space-y-3">
                    {[
                      "Analyze trends and patterns",
                      "Identify improvement areas",
                      "Train support teams",
                      "Update processes and systems",
                      "Recognize outstanding service"
                    ].map((action, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span className="text-neutral-600 dark:text-neutral-400">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <ButtonPrimary sizeClass="px-8 py-3">
                  Share Your Experience
                </ButtonPrimary>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="relative py-16">
        <BackgroundSection />
        <div className="container relative">
          <Heading isCenter desc="Send us a message and we'll get back to you promptly">
            Send Us a Message
          </Heading>
          
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white">
                    <option value="">Select a topic</option>
                    <option value="booking">Booking Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="billing">Billing Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="emergency">Emergency</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Message</label>
                  <textarea rows={6} className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" placeholder="How can we help you?"></textarea>
                </div>
                
                <div className="text-center">
                  <ButtonPrimary type="submit" sizeClass="px-8 py-4">
                    Send Message
                  </ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* EMERGENCY CONTACT */}
      <div className="relative py-16">
        <BackgroundSection className="bg-red-50 dark:bg:red-900/20" />
        <div className="container relative text-center">
          <Heading isCenter desc="For immediate assistance during travel emergencies">
            Emergency Contact
          </Heading>
          <div className="max-w-md mx-auto mt-8">
            <div className="bg-red-600 text-white rounded-2xl p-8 shadow-lg">
              <div className="text-3xl font-bold mb-4">🚨 EMERGENCY LINE</div>
              <div className="text-2xl font-mono mb-4">+1-555-0124</div>
              <p className="text-sm opacity-90">Available 24/7 for travel emergencies only</p>
            </div>
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

export default PageHelpCustomerService;