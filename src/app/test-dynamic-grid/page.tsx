import React from 'react';
import SectionGridFeaturePlacesDynamic from '@/components/SectionGridFeaturePlacesDynamic';
import SectionGridFeaturePlacesClient from '@/components/SectionGridFeaturePlacesClient';

export default function TestDynamicGridPage() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-20">
      <div>
        <h1 className="text-3xl font-bold mb-8 text-center">
          Dynamic Grid Components Test
        </h1>
        <p className="text-center text-neutral-600 dark:text-neutral-300 mb-16">
          Comparing server-side vs client-side data fetching for featured listings
        </p>
      </div>

      {/* Server Component Version */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            🚀 Server Component (SSR)
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Data fetched on the server, rendered instantly, SEO-friendly
          </p>
        </div>
        <SectionGridFeaturePlacesDynamic 
          cardType="card2" 
          limit={4}
          heading="Featured Server-Side Listings"
          subHeading="Fetched directly from PostgreSQL on the server"
        />
      </section>

      {/* Client Component Version */}
      <section>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            ⚡ Client Component (CSR)
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            Data fetched via API on the client, with loading states and error handling
          </p>
        </div>
        <SectionGridFeaturePlacesClient 
          cardType="card1" 
          limit={4}
          heading="Featured Client-Side Listings"
          subHeading="Fetched via REST API with loading states"
        />
      </section>

      {/* API Test Section */}
      <section className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-4">🔧 API Testing</h2>
        <div className="space-y-2">
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            Test your API endpoints:
          </p>
          <div className="bg-neutral-800 text-green-400 p-4 rounded-lg font-mono text-sm space-y-1">
            <div>GET /api/listings</div>
            <div>GET /api/listings?featured=true&limit=4</div>
            <div>GET /api/listings?type=stay&location=tokyo</div>
            <div>GET /api/listings?priceMin=100&priceMax=200</div>
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">📊 Performance Notes</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
            <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
              Server Component
            </h3>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>✅ Instant render (no loading state)</li>
              <li>✅ SEO optimized</li>
              <li>✅ Smaller JavaScript bundle</li>
              <li>✅ Better Core Web Vitals</li>
            </ul>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
            <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
              Client Component
            </h3>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>✅ Interactive loading states</li>
              <li>✅ Error handling & retry</li>
              <li>✅ Real-time updates</li>
              <li>✅ Better for user interactions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
