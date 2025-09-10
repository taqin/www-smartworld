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

        {/* Main Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-primary-600 dark:text-primary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Our Journey
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed">
                At Smartworld Travels, our journey began with a simple yet powerful belief: that travel is a force for good. It broadens perspectives, builds bridges between cultures, and creates memories that last a lifetime. We founded Smartworld Travels not just as a booking agency, but as a commitment to making travel smarter, more accessible, and profoundly meaningful.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Our Mission</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Our mission is to go beyond the ordinary, crafting itineraries that are intelligently planned and rich with authentic experiences. We believe in smarter value, ensuring every journey is a worthwhile investment in discovery.
                </p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Our Growth</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  We've grown from a passionate idea into a trusted global partner, but our core mission remains unchanged: to empower you with the knowledge and expertise to see the world in a way that truly enriches your life.
                </p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Our Promise</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  We believe in creating meaningful connections between travelers and destinations, fostering understanding and appreciation for diverse cultures and communities around the world.
                </p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-700 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Our Vision</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Our story is woven into every itinerary we create—a testament to the power of a single, smart idea that continues to inspire and guide us in making travel better for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}