import React from "react";

export default function PartnershipsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Our Partners
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Trusted collaborations that enhance your travel experience
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 012 2v10.5a.5.5 0 01-.8.4L16 14.5V6z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8">
                We're showcasing our strategic partnerships with airlines, hotels, local tour operators, and technology providers that help us deliver exceptional travel experiences worldwide.
              </p>
            </div>

            {/* Placeholder partner categories */}
            <div className="space-y-8">
              {/* Airlines */}
              <div className="border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 text-center">Airline Partners</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="h-16 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-8 bg-neutral-200 dark:bg-neutral-600 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hotels */}
              <div className="border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 text-center">Hotel Chains</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="h-16 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-8 bg-neutral-200 dark:bg-neutral-600 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Partners */}
              <div className="border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 text-center">Technology Partners</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="h-16 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-8 bg-neutral-200 dark:bg-neutral-600 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Partnership benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border-2 border-dashed border-blue-200 dark:border-blue-700 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Better Prices</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Exclusive rates and deals</p>
              </div>
              
              <div className="text-center p-6 border-2 border-dashed border-blue-200 dark:border-blue-700 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Quality Assurance</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Vetted service providers</p>
              </div>
              
              <div className="text-center p-6 border-2 border-dashed border-blue-200 dark:border-blue-700 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Enhanced Service</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Premium support & amenities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}