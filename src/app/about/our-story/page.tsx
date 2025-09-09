import React from "react";

export default function OurStoryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Our Story
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Discover the journey that led to the creation of SmartWorld Travel
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-primary-600 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8">
                We're crafting an inspiring story about our journey, mission, and the passion that drives SmartWorld Travel. This page will showcase our company's history, values, and vision for the future of travel.
              </p>
            </div>

            {/* Placeholder sections */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Our Beginning</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">The story of how we started</p>
              </div>
              <div className="text-center p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Our Mission</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">What drives us every day</p>
              </div>
              <div className="text-center p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Our Values</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">The principles we stand by</p>
              </div>
              <div className="text-center p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Our Vision</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Where we're heading</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}