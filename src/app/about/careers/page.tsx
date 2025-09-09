import React from "react";

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Careers
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            Join our team and help create unforgettable travel experiences
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 012 2v10.5a.5.5 0 01-.8.4L16 14.5V6z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8">
                We're building our careers page with current job openings, company culture information, and application processes. Join us in revolutionizing the travel experience!
              </p>
            </div>

            {/* Placeholder job openings */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Current Opportunities</h3>
              
              {[
                { title: "Senior Travel Consultant", dept: "Customer Service", type: "Full-time" },
                { title: "Destination Specialist", dept: "Operations", type: "Full-time" },
                { title: "Digital Marketing Manager", dept: "Marketing", type: "Full-time" },
                { title: "Software Developer", dept: "Technology", type: "Full-time" },
                { title: "Customer Support Representative", dept: "Customer Service", type: "Part-time" }
              ].map((job, index) => (
                <div key={index} className="p-6 border-2 border-dashed border-neutral-200 dark:border-neutral-700 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="h-5 bg-neutral-200 dark:bg-neutral-700 rounded w-48 mb-2"></div>
                      <div className="flex gap-4 text-sm">
                        <div className="h-4 bg-neutral-100 dark:bg-neutral-600 rounded w-24"></div>
                        <div className="h-4 bg-neutral-100 dark:bg-neutral-600 rounded w-16"></div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <div className="h-8 bg-purple-100 dark:bg-purple-800 rounded w-20"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Why work with us */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 border-2 border-dashed border-purple-200 dark:border-purple-700 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Great Team</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Work with passionate travel experts</p>
              </div>
              
              <div className="text-center p-6 border-2 border-dashed border-purple-200 dark:border-purple-700 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Travel Perks</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Employee travel discounts & benefits</p>
              </div>
              
              <div className="text-center p-6 border-2 border-dashed border-purple-200 dark:border-purple-700 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Growth Opportunities</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Professional development & advancement</p>
              </div>
              
              <div className="text-center p-6 border-2 border-dashed border-purple-200 dark:border-purple-700 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Comprehensive Benefits</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">Health, dental, and wellness programs</p>
              </div>
            </div>

            {/* Contact info */}
            <div className="text-center p-6 bg-neutral-50 dark:bg-neutral-700 rounded-xl">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Interested in joining our team?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Send your resume to careers@smartworldtravel.com
              </p>
              <div className="h-10 bg-purple-600 dark:bg-purple-500 rounded w-32 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}