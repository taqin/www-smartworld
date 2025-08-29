import Link from 'next/link';
import ButtonPrimary from '@/shared/ButtonPrimary';

export default function NotFound() {
  return (
    <div className="nc-Page404">
      <div className="container relative pt-5 pb-16 lg:pb-20 lg:pt-5">
        {/* HEADER */}
        <header className="text-center max-w-2xl mx-auto space-y-2">
          <span className="block text-sm text-neutral-800 sm:text-base dark:text-neutral-200 tracking-wider font-medium">
            404 ERROR
          </span>
          <h1 className="text-7xl md:text-8xl">🏠</h1>
          <h2 className="text-xl md:text-2xl text-neutral-900 font-semibold dark:text-neutral-100">
            Listing not found
          </h2>
          <span className="block text-sm text-neutral-6000 sm:text-base dark:text-neutral-300 font-light leading-relaxed">
            The listing you're looking for doesn't exist or has been removed.{` `}
          </span>
        </header>
        
        {/* CONTENT */}
        <div className="text-center pt-8 max-w-xs mx-auto space-y-4">
          <ButtonPrimary href="/" className="w-full">
            Return Home
          </ButtonPrimary>
          <Link
            href="/listing-stay"
            className="block text-neutral-6000 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100 font-medium"
          >
            Browse all listings
          </Link>
        </div>
      </div>
    </div>
  );
}
