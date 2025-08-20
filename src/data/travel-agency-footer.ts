import { WidgetFooterMenu } from "@/components/Footer";

// Travel Agency Footer Navigation
export const TRAVEL_AGENCY_FOOTER_MENUS: WidgetFooterMenu[] = [
  {
    id: "packages",
    title: "Travel Packages",
    menus: [
      { href: "/packages/adventure", label: "Adventure Tours" },
      { href: "/packages/cultural", label: "Cultural Experiences" },
      { href: "/packages/luxury", label: "Luxury Travel" },
      { href: "/packages/family", label: "Family Packages" },
      { href: "/packages/honeymoon", label: "Honeymoon Packages" },
      { href: "/packages/wellness", label: "Wellness Retreats" },
    ],
  },
  {
    id: "services",
    title: "Travel Services",
    menus: [
      { href: "/services/planning", label: "Travel Planning" },
      { href: "/services/visa-assistance", label: "Visa Assistance" },
      { href: "/services/travel-insurance", label: "Travel Insurance" },
      { href: "/services/airport-transfers", label: "Airport Transfers" },
      { href: "/services/concierge", label: "Travel Concierge" },
      { href: "/services/emergency-support", label: "Emergency Support" },
    ],
  },
  {
    id: "company",
    title: "Company",
    menus: [
      { href: "/about/our-story", label: "Our Story" },
      { href: "/about/team", label: "Meet Our Team" },
      { href: "/about/sustainability", label: "Sustainable Travel" },
      { href: "/about/careers", label: "Careers" },
      { href: "/contact", label: "Contact Us" },
      { href: "/blog", label: "Travel Blog" },
    ],
  },
  {
    id: "support",
    title: "Support & Help",
    menus: [
      { href: "/help/faq", label: "FAQ" },
      { href: "/help/booking-guide", label: "Booking Guide" },
      { href: "/help/cancellation", label: "Cancellation Policy" },
      { href: "/help/travel-tips", label: "Travel Tips" },
      { href: "/help/safety", label: "Travel Safety" },
      { href: "/help/customer-service", label: "Customer Service" },
    ],
  },
];

export default TRAVEL_AGENCY_FOOTER_MENUS;
