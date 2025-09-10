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

        {/* Main Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-yellow-100 dark:bg-yellow-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-yellow-600 dark:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Our Achievements
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                At Smartworld Travels, our awards are more than just accolades—they are a testament to the trust our clients place in us and the dedication of our incredible team. Each recognition is a powerful validation of our commitment to excellence.
              </p>
            </div>

            {/* Featured Awards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Best Luxury Travel Curator 2023</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  Recognized for exceptional luxury travel experiences and personalized service that exceeds client expectations.
                </p>
              </div>
              
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl">
                <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-200" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Travelers' Choice Award for Sustainable Practice</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  Honored for our commitment to responsible tourism and positive impact on local communities and environments.
                </p>
              </div>
            </div>

            {/* Award Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 border border-yellow-200 dark:border-yellow-700 rounded-xl">
                <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">Excellence Awards</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Service & quality recognition</p>
              </div>
              <div className="text-center p-6 border border-yellow-200 dark:border-yellow-700 rounded-xl">
                <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">Industry Recognition</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Travel industry honors</p>
              </div>
              <div className="text-center p-6 border border-yellow-200 dark:border-yellow-700 rounded-xl">
                <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">Certifications</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Professional accreditations</p>
              </div>
              <div className="text-center p-6 border border-yellow-200 dark:border-yellow-700 rounded-xl">
                <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">Customer Choice</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Client satisfaction awards</p>
              </div>
            </div>

            {/* Our Philosophy */}
            <div className="bg-yellow-100 dark:bg-yellow-800/30 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 text-center">What Our Awards Mean to Us</h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-center max-w-3xl mx-auto">
                These honors are a reflection of the extraordinary, expertly crafted experiences we've been privileged to help our clients enjoy. They prove that our innovative approach to travel, our unwavering focus on customer satisfaction, and our responsible practices are making a tangible difference in the industry.
              </p>
            </div>

            {/* Award Impact */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-neutral-50 dark:bg-neutral-700 rounded-xl">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Quality Assurance</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Our awards validate our commitment to exceptional service and travel experiences.</p>
              </div>
              <div className="text-center p-6 bg-neutral-50 dark:bg-neutral-700 rounded-xl">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Continuous Improvement</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Recognition motivates us to continuously raise the standard for smarter travel.</p>
              </div>
              <div className="text-center p-6 bg-neutral-50 dark:bg-neutral-700 rounded-xl">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Trust & Confidence</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Industry recognition builds trust with our clients and partners worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}