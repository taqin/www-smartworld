import React from "react";

export default function AwardsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Awards & Recognition
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Celebrating our achievements and industry recognition
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-yellow-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8">
                We're compiling our awards, certifications, and industry recognitions. This page will showcase our achievements in travel excellence, customer service, and industry innovation.
              </p>
            </div>

            {/* Placeholder awards grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="text-center p-6 border-2 border-dashed border-yellow-200 dark:border-yellow-700 rounded-xl">
                  <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded mb-2"></div>
                  <div className="h-3 bg-neutral-100 dark:bg-neutral-600 rounded w-2/3 mx-auto mb-2"></div>
                  <div className="h-3 bg-neutral-100 dark:bg-neutral-600 rounded w-1/2 mx-auto"></div>
                </div>
              ))}
            </div>

            {/* Placeholder award categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Excellence Awards</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Service & quality recognition</p>
              </div>
              <div className="text-center p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Industry Recognition</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Travel industry honors</p>
              </div>
              <div className="text-center p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Certifications</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Professional accreditations</p>
              </div>
              <div className="text-center p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Customer Choice</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Client satisfaction awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}