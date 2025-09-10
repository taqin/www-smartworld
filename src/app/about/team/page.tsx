import React from "react";

export default function TeamPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Get to know the passionate individuals behind SmartWorld Travel
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-primary-600 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Our Travel Curators
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Behind every flawlessly planned journey is a team of dedicated travel curators who live and breathe adventure. We aren't just agents; we are passionate explorers, cultural enthusiasts, and logistical experts committed to bringing your travel dreams to life.
              </p>
            </div>

            {/* Team Expertise Areas */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Luxury Specialists</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  Our luxury experts know the secret to five-star relaxation and exclusive experiences that define premium travel.
                </p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Adventure Gurus</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  Our adventure specialists guide you to the world's most thrilling landscapes and unforgettable experiences.
                </p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-xl">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600 dark:text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Cultural Experts</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  Our cultural immersion specialists uncover authentic local connections and meaningful cultural experiences.
                </p>
              </div>
            </div>

            {/* Our Approach */}
            <div className="bg-primary-50 dark:bg-primary-900/20 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 text-center">Our Collaborative Approach</h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-center max-w-3xl mx-auto">
                We work collaboratively, pooling our collective knowledge to ensure your itinerary is personalized to your unique interests and needs. At Smartworld Travels, you're not just a client; you're a fellow traveler, and our shared passion is the foundation of every expert-crafted experience.
              </p>
            </div>

            {/* Team Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-primary-200 dark:border-primary-800 rounded-xl">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Passion</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Love for travel drives everything we do</p>
              </div>
              <div className="text-center p-6 border border-primary-200 dark:border-primary-800 rounded-xl">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Expertise</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Deep knowledge of destinations worldwide</p>
              </div>
              <div className="text-center p-6 border border-primary-200 dark:border-primary-800 rounded-xl">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Collaboration</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Teamwork creates perfect journeys</p>
              </div>
              <div className="text-center p-6 border border-primary-200 dark:border-primary-800 rounded-xl">
                <h4 className="font-semibold text-primary-600 dark:text-primary-400 mb-2">Personalization</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Tailored experiences for every traveler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}