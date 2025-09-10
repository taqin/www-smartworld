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

        {/* Main Content */}
        <div className="bg-white dark:bg-neutral-800 rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-purple-600 dark:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V4a2 2 0 012 2v10.5a.5.5 0 01-.8.4L16 14.5V6z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-4">
                Join Our Journey
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Do you have a passion for travel and a knack for crafting unforgettable experiences? At Smartworld Travels, we're building a team of innovators, dreamers, and global explorers.
              </p>
            </div>

            {/* Our Culture */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Collaborative Culture</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  Our culture is collaborative, supportive, and driven by a shared love for what we do. We believe that the best travel is a product of inspired minds and a team-first approach.
                </p>
              </div>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 text-center">Growth Opportunities</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed text-center">
                  We offer a vibrant work environment where you can turn your passion into a meaningful career, with opportunities for professional growth and the chance to explore the world through firsthand experience.
                </p>
              </div>
            </div>

            {/* Why Work With Us */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-neutral-50 dark:bg-neutral-700 rounded-xl">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Travel Opportunities</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Explore destinations worldwide</p>
              </div>
              <div className="text-center p-6 bg-neutral-50 dark:bg-neutral-700 rounded-xl">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Professional Growth</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Continuous learning & development</p>
              </div>
              <div className="text-center p-6 bg-neutral-50 dark:bg-neutral-700 rounded-xl">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Impact & Purpose</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Shape the future of travel</p>
              </div>
              <div className="text-center p-6 bg-neutral-50 dark:bg-neutral-700 rounded-xl">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-2">Global Team</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">Work with diverse experts</p>
              </div>
            </div>

            {/* Our Values */}
            <div className="bg-purple-100 dark:bg-purple-800/30 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 text-center">Our Values</h3>
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-center max-w-3xl mx-auto">
                If you're ready to join a group that is shaping the future of travel—with a commitment to responsibility and a drive for excellence—we invite you to build your career with us.
              </p>
            </div>

            {/* Sample Job Openings */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Current Opportunities</h3>
              
              {[
                { title: "Senior Travel Consultant", dept: "Customer Service", type: "Full-time" },
                { title: "Destination Specialist", dept: "Operations", type: "Full-time" },
                { title: "Digital Marketing Manager", dept: "Marketing", type: "Full-time" },
                { title: "Software Developer", dept: "Technology", type: "Full-time" },
                { title: "Customer Support Representative", dept: "Customer Service", type: "Part-time" }
              ].map((job, index) => (
                <div key={index} className="p-6 border border-purple-200 dark:border-purple-700 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">{job.title}</h4>
                      <div className="flex gap-4 text-sm text-neutral-600 dark:text-neutral-300">
                        <span>{job.dept}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="text-center p-6 bg-neutral-50 dark:bg-neutral-700 rounded-xl">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Ready to Start Your Journey?
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                Send your resume to careers@smartworldtravel.com
              </p>
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}