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

        {/* Main Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-12">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 012 2v10.5a.5.5 0 01-.8.4L16 14.5V6z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Our Partnership Network
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Behind every seamless journey we craft is a carefully curated network of global partners who share our commitment to quality and integrity. We are highly selective, choosing to collaborate only with airlines, hotels, tour operators, and local guides who align with our core values.
              </p>
            </div>

            {/* Partnership Benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Quality Assurance</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  This trusted ecosystem of collaborators is our clients' assurance of a consistently high-quality experience, from the moment they step on the plane to their return home.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Exclusive Access</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  Our strong relationships with these partners grant us access to exclusive offers, unique experiences, and a level of support that ensures your travels are truly exceptional.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Shared Values</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  With Smartworld Travels, you are supported by the best in the business—partners who share our dedication to excellence, reliability, and sustainability.
                </p>
              </div>
            </div>

            {/* Partner Categories */}
            <div className="space-y-8">
              {/* Airlines */}
              <div className="border border-blue-200 dark:border-blue-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 text-center">Airline Partners</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="h-16 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-8 bg-neutral-200 dark:bg-neutral-600 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hotels */}
              <div className="border border-blue-200 dark:border-blue-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 text-center">Hotel Chains</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="h-16 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-8 bg-neutral-200 dark:bg-neutral-600 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Partners */}
              <div className="border border-blue-200 dark:border-blue-700 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6 text-center">Technology Partners</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="h-16 bg-neutral-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center">
                      <div className="w-12 h-8 bg-neutral-200 dark:bg-neutral-600 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Our Promise */}
            <div className="bg-blue-100 dark:bg-blue-800/30 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 text-center">Our Partnership Promise</h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-center max-w-3xl mx-auto">
                Our partnerships are your badge of quality and trust. We work exclusively with a handpicked network of airlines, hotels, and local guides who share our commitment to excellence, ensuring a seamless, high-quality, and reliable travel experience.
              </p>
            </div>

            {/* Key Partnership Values */}
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-blue-200 dark:border-blue-700 rounded-xl">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Excellence</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Highest quality standards</p>
              </div>
              <div className="text-center p-6 border border-blue-200 dark:border-blue-700 rounded-xl">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Reliability</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Dependable service delivery</p>
              </div>
              <div className="text-center p-6 border border-blue-200 dark:border-blue-700 rounded-xl">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Sustainability</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Eco-friendly practices</p>
              </div>
              <div className="text-center p-6 border border-blue-200 dark:border-blue-700 rounded-xl">
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Innovation</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Cutting-edge solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}