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

        {/* Placeholder Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-primary-600 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8">
                We're preparing detailed profiles of our amazing team members. This page will feature our leadership, travel experts, and support staff who make your travel dreams come true.
              </p>
            </div>

            {/* Placeholder team grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="text-center p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                  <div className="w-20 h-20 bg-neutral-200 dark:bg-neutral-700 rounded-full mx-auto mb-4"></div>
                  <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded mb-2"></div>
                  <div className="h-3 bg-neutral-100 dark:bg-neutral-600 rounded w-2/3 mx-auto"></div>
                </div>
              ))}
            </div>

            {/* Placeholder departments */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Leadership</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Executive team and founders</p>
              </div>
              <div className="text-center p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Travel Experts</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Destination specialists and advisors</p>
              </div>
              <div className="text-center p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Support Team</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Customer service and operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}