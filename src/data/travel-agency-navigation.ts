import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";

// Destination highlights for mega menu
const destinationHighlights: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Asia Adventures",
    items: [
      { id: ncNanoId(), href: "/destinations/japan", name: "Japan Tours" },
      { id: ncNanoId(), href: "/destinations/thailand", name: "Thailand Packages" },
      { id: ncNanoId(), href: "/destinations/vietnam", name: "Vietnam Explorer" },
      { id: ncNanoId(), href: "/destinations/bali", name: "Bali Paradise" },
      { id: ncNanoId(), href: "/destinations/singapore", name: "Singapore City Break" },
    ]
  },
  {
    id: ncNanoId(),
    image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "European Escapes",
    items: [
      { id: ncNanoId(), href: "/destinations/italy", name: "Italian Romance" },
      { id: ncNanoId(), href: "/destinations/france", name: "French Riviera" },
      { id: ncNanoId(), href: "/destinations/spain", name: "Spanish Delights" },
      { id: ncNanoId(), href: "/destinations/greece", name: "Greek Islands" },
      { id: ncNanoId(), href: "/destinations/norway", name: "Nordic Adventures" },
    ]
  },
  {
    id: ncNanoId(),
    image: "https://images.pexels.com/photos/5059013/pexels-photo-5059013.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "African Safari",
    items: [
      { id: ncNanoId(), href: "/destinations/kenya", name: "Kenya Wildlife" },
      { id: ncNanoId(), href: "/destinations/tanzania", name: "Tanzania Safari" },
      { id: ncNanoId(), href: "/destinations/south-africa", name: "South Africa Tours" },
      { id: ncNanoId(), href: "/destinations/botswana", name: "Botswana Explorer" },
      { id: ncNanoId(), href: "/destinations/namibia", name: "Namibian Wonders" },
    ]
  },
  {
    id: ncNanoId(),
    image: "https://images.pexels.com/photos/7473041/pexels-photo-7473041.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    title: "Americas Journey",
    items: [
      { id: ncNanoId(), href: "/destinations/peru", name: "Machu Picchu Tours" },
      { id: ncNanoId(), href: "/destinations/costa-rica", name: "Costa Rica Adventure" },
      { id: ncNanoId(), href: "/destinations/canada", name: "Canadian Rockies" },
      { id: ncNanoId(), href: "/destinations/chile", name: "Chilean Patagonia" },
      { id: ncNanoId(), href: "/destinations/usa", name: "USA National Parks" },
    ]
  }
];

// Experience-based packages
const experiencePackages: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/packages/adventure",
    name: "Adventure Tours",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/packages/adventure/trekking", name: "Trekking & Hiking" },
      { id: ncNanoId(), href: "/packages/adventure/water-sports", name: "Water Sports" },
      { id: ncNanoId(), href: "/packages/adventure/mountain-climbing", name: "Mountain Climbing" },
      { id: ncNanoId(), href: "/packages/adventure/wildlife-safari", name: "Wildlife Safari" },
      { id: ncNanoId(), href: "/packages/adventure/extreme-sports", name: "Extreme Sports" },
    ]
  },
  {
    id: ncNanoId(),
    href: "/packages/cultural",
    name: "Cultural Experiences",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/packages/cultural/heritage-tours", name: "Heritage Tours" },
      { id: ncNanoId(), href: "/packages/cultural/food-wine", name: "Food & Wine Tours" },
      { id: ncNanoId(), href: "/packages/cultural/festivals", name: "Festival Experiences" },
      { id: ncNanoId(), href: "/packages/cultural/art-history", name: "Art & History Tours" },
      { id: ncNanoId(), href: "/packages/cultural/local-immersion", name: "Local Immersion" },
    ]
  },
  {
    id: ncNanoId(),
    href: "/packages/luxury",
    name: "Luxury Travel",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/packages/luxury/five-star", name: "5-Star Escapes" },
      { id: ncNanoId(), href: "/packages/luxury/private-jets", name: "Private Jet Tours" },
      { id: ncNanoId(), href: "/packages/luxury/yacht-cruises", name: "Luxury Yacht Cruises" },
      { id: ncNanoId(), href: "/packages/luxury/exclusive-resorts", name: "Exclusive Resorts" },
      { id: ncNanoId(), href: "/packages/luxury/butler-service", name: "Butler Service Tours" },
    ]
  },
  {
    id: ncNanoId(),
    href: "/packages/family",
    name: "Family Packages",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/packages/family/theme-parks", name: "Theme Park Adventures" },
      { id: ncNanoId(), href: "/packages/family/beach-resorts", name: "Family Beach Resorts" },
      { id: ncNanoId(), href: "/packages/family/educational", name: "Educational Tours" },
      { id: ncNanoId(), href: "/packages/family/all-inclusive", name: "All-Inclusive Family" },
      { id: ncNanoId(), href: "/packages/family/multi-generation", name: "Multi-Generation Tours" },
    ]
  },
  {
    id: ncNanoId(),
    href: "/packages/honeymoon",
    name: "Honeymoon Packages",
    isNew: true,
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/packages/honeymoon/romantic-islands", name: "Romantic Islands" },
      { id: ncNanoId(), href: "/packages/honeymoon/european-romance", name: "European Romance" },
      { id: ncNanoId(), href: "/packages/honeymoon/exotic-destinations", name: "Exotic Destinations" },
      { id: ncNanoId(), href: "/packages/honeymoon/luxury-suites", name: "Luxury Suite Escapes" },
      { id: ncNanoId(), href: "/packages/honeymoon/adventure-romance", name: "Adventure Romance" },
    ]
  },
  {
    id: ncNanoId(),
    href: "/packages/wellness",
    name: "Wellness Retreats",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/packages/wellness/spa-retreats", name: "Spa Retreats" },
      { id: ncNanoId(), href: "/packages/wellness/yoga-meditation", name: "Yoga & Meditation" },
      { id: ncNanoId(), href: "/packages/wellness/detox-programs", name: "Detox Programs" },
      { id: ncNanoId(), href: "/packages/wellness/thermal-springs", name: "Thermal Springs" },
      { id: ncNanoId(), href: "/packages/wellness/mindfulness", name: "Mindfulness Journeys" },
    ]
  }
];

// Location-based packages
const locationPackages: NavItemType[] = [
  { id: ncNanoId(), href: "/packages/asia", name: "Asia Tours" },
  { id: ncNanoId(), href: "/packages/europe", name: "Europe Tours" },
  { id: ncNanoId(), href: "/packages/africa", name: "Africa Safari" },
  { id: ncNanoId(), href: "/packages/americas", name: "Americas Explorer" },
  { id: ncNanoId(), href: "/packages/middle-east", name: "Middle East Wonders" },
  { id: ncNanoId(), href: "/packages/oceania", name: "Australia & New Zealand" },
  { id: ncNanoId(), href: "/packages/arctic", name: "Arctic Expeditions" },
  { id: ncNanoId(), href: "/packages/caribbean", name: "Caribbean Islands" },
];

// Hidden gems packages
const hiddenGemsPackages: NavItemType[] = [
  { id: ncNanoId(), href: "/packages/hidden-gems/off-beaten-path", name: "Off the Beaten Path" },
  { id: ncNanoId(), href: "/packages/hidden-gems/local-secrets", name: "Local Secrets" },
  { id: ncNanoId(), href: "/packages/hidden-gems/undiscovered", name: "Undiscovered Destinations" },
  { id: ncNanoId(), href: "/packages/hidden-gems/boutique-experiences", name: "Boutique Experiences" },
  { id: ncNanoId(), href: "/packages/hidden-gems/insider-access", name: "Insider Access Tours" },
  { id: ncNanoId(), href: "/packages/hidden-gems/remote-locations", name: "Remote Locations" },
];

// Services menu
const servicesMenu: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/services/planning",
    name: "Travel Planning",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/services/planning/consultation", name: "Free Consultation" },
      { id: ncNanoId(), href: "/services/planning/custom-itinerary", name: "Custom Itinerary" },
      { id: ncNanoId(), href: "/services/planning/group-planning", name: "Group Travel Planning" },
      { id: ncNanoId(), href: "/services/planning/corporate", name: "Corporate Travel" },
    ]
  },
  { id: ncNanoId(), href: "/services/visa-assistance", name: "Visa Assistance" },
  { id: ncNanoId(), href: "/services/travel-insurance", name: "Travel Insurance" },
  { id: ncNanoId(), href: "/services/airport-transfers", name: "Airport Transfers" },
  { id: ncNanoId(), href: "/services/concierge", name: "Travel Concierge" },
  { id: ncNanoId(), href: "/services/emergency-support", name: "24/7 Emergency Support" },
];

// Special offers
const specialOffersMenu: NavItemType[] = [
  { id: ncNanoId(), href: "/offers/early-bird", name: "Early Bird Discounts", isNew: true },
  { id: ncNanoId(), href: "/offers/last-minute", name: "Last Minute Deals" },
  { id: ncNanoId(), href: "/offers/group-discounts", name: "Group Discounts" },
  { id: ncNanoId(), href: "/offers/seasonal", name: "Seasonal Specials" },
  { id: ncNanoId(), href: "/offers/loyalty", name: "Loyalty Rewards" },
  { id: ncNanoId(), href: "/offers/student", name: "Student Discounts" },
];

// About Us menu
const aboutUsMenu: NavItemType[] = [
  { id: ncNanoId(), href: "/about/our-story", name: "Our Story" },
  { id: ncNanoId(), href: "/about/team", name: "Meet Our Team" },
  { id: ncNanoId(), href: "/about/sustainability", name: "Sustainable Travel" },
  { id: ncNanoId(), href: "/about/awards", name: "Awards & Recognition" },
  { id: ncNanoId(), href: "/about/partnerships", name: "Our Partners" },
  { id: ncNanoId(), href: "/about/careers", name: "Careers" },
];

// Main navigation structure for Travel Agency
export const TRAVEL_AGENCY_NAVIGATION: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/packages",
    name: "Packages",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/packages/experience-based",
        name: "Experience-Based",
        type: "dropdown",
        children: experiencePackages
      },
      {
        id: ncNanoId(),
        href: "/packages/location-based",
        name: "Location-Based",
        type: "dropdown",
        children: locationPackages
      },
      {
        id: ncNanoId(),
        href: "/packages/hidden-gems",
        name: "Hidden Gems",
        type: "dropdown",
        children: hiddenGemsPackages
      },
      {
        id: ncNanoId(),
        href: "/offers",
        name: "Special Offers",
        type: "dropdown",
        children: specialOffersMenu,
        isNew: true
      }
    ]
  },
  {
    id: ncNanoId(),
    href: "/destinations",
    name: "Destinations",
    type: "megaMenu",
    megaMenu: destinationHighlights
  },
  {
    id: ncNanoId(),
    href: "/services",
    name: "Services",
    type: "dropdown",
    children: servicesMenu
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About Us",
    type: "dropdown",
    children: aboutUsMenu
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact Us"
  },
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Travel Blog"
  }
];

export default TRAVEL_AGENCY_NAVIGATION;
