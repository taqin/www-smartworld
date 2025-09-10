import React from "react";

export default function SustainabilityPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Sustainable Travel
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Our commitment to responsible tourism and environmental stewardship
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Our Commitment
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                At Smartworld Travels, we believe that travel broadens horizons and should also protect them. Our commitment to sustainable tourism is not just a policy; it's a core part of who we are.
              </p>
            </div>

            {/* Sustainability Initiatives */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Eco-Conscious Partners</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  We meticulously select and partner with eco-conscious vendors, from boutique eco-lodges to local guides who are dedicated to preserving their communities and environments.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656-.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Responsible Travel</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  We actively promote off-peak travel to help reduce the strain of overtourism and encourage experiences that benefit local economies directly.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Traveler Education</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  Our mission is to empower you to be a responsible traveler through education and transparent choices, ensuring your journey leaves a positive footprint.
                </p>
              </div>
              
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Positive Impact</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  By choosing us, you become a partner in our commitment to a more ethical, respectful, and sustainable world.
                </p>
              </div>
            </div>

            {/* Our Promise */}
            <div className="bg-green-100 dark:bg-green-800/30 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 text-center">Our Sustainability Promise</h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-center max-w-3xl mx-auto">
                Travel should enrich the world as much as it enriches our lives. Our commitment to sustainable tourism means we thoughtfully partner with eco-conscious vendors and educate travelers, ensuring every journey leaves a positive footprint on our planet and its communities.
              </p>
            </div>

            {/* Key Principles */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border border-green-200 dark:border-green-700 rounded-xl">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Environmental Protection</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Minimizing our ecological impact</p>
              </div>
              <div className="text-center p-6 border border-green-200 dark:border-green-700 rounded-xl">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Community Support</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Empowering local communities</p>
              </div>
              <div className="text-center p-6 border border-green-200 dark:border-green-700 rounded-xl">
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Cultural Preservation</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Respecting and protecting heritage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}