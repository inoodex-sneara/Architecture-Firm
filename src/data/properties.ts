export interface FloorPlanItem {
  id: string;
  title: string;
  size: string;
  type: string;
  image?: string;
}

export interface PropertyItem {
  id: string;
  name: string;
  location: string;
  area: "Gulshan & Baridhara" | "Bashundhara R/A" | "Uttara & Mirpur" | "Chattogram & Other";
  type: string;
  status: "Under Construction" | "Nearly Ready" | "Newly Launched" | "Ready";
  tag: string;
  image: string;
  logo?: string;
  description: string;
  gallery: string[];
  specs: {
    size: string;
    bed: string;
    bath: string;
    land: string;
  };
  atAGlance: {
    address: string;
    landArea: string;
    noOfFloors: string;
    apartmentsPerFloor: string;
    apartmentSize: string;
    bedrooms: string;
    bathrooms: string;
    launchDate: string;
    expectedCompletionDate: string;
  };
  floorPlans: FloorPlanItem[];
  mapEmbedUrl?: string;
}

export const allPropertiesData: PropertyItem[] = [
  {
    id: "the-seasons",
    name: "The Seasons",
    location: "Block I, Bashundhara R/A, Dhaka",
    area: "Bashundhara R/A",
    type: "Residential Residence",
    status: "Under Construction",
    tag: "Featured",
    image: "/featured/the-seasons.webp",
    logo: "/featured/the-seasons-logo.png",
    description:
      "The Seasons captures the fluid beauty of Bangladesh's changing seasons. Its design flows with nature's rhythm, creating a harmonious experience for residents. The visual setback evokes vintage luxury, blending past and present, while the home shifts with the seasons, offering spaces that breathe and inspire. A timeless masterpiece, The Seasons is a tribute to nature's cycle, where every moment feels as rich as the changing sky.",
    gallery: [
      "/featured/the-seasons.webp",
      "/hero/slide-2.jpg",
      "/hero/slide-3.jpg",
      "/hero/craftsmanship.jpg",
      "/hero/slide-4.jpg",
    ],
    specs: {
      size: "2,100+ to 2,400+ sft",
      bed: "3-4",
      bath: "3",
      land: "10 Katha",
    },
    atAGlance: {
      address: "Plot-698 & 699, Block-I, Bashundhara R/A, Dhaka",
      landArea: "10 Katha",
      noOfFloors: "G+9",
      apartmentsPerFloor: "2",
      apartmentSize: "2100+ to 2400+ sft",
      bedrooms: "3-4",
      bathrooms: "3",
      launchDate: "May 2025",
      expectedCompletionDate: "November 2028",
    },
    floorPlans: [
      { id: "fp-1", title: "Type A - 2,100 sft", size: "2,100 sft", type: "3 Bed + 3 Bath" },
      { id: "fp-2", title: "Type B - 2,400 sft", size: "2,400 sft", type: "4 Bed + 3 Bath" },
      { id: "fp-3", title: "Duplex Upper Level", size: "3,800 sft", type: "Penthouse Suite" },
      { id: "fp-4", title: "Rooftop Community Deck", size: "Open Terrace", type: "Amenities" },
    ],
  },
  {
    id: "the-lighthouse",
    name: "The Lighthouse",
    location: "Block M, Bashundhara R/A, Dhaka",
    area: "Bashundhara R/A",
    type: "Luxury Condominium",
    status: "Newly Launched",
    tag: "Featured",
    image: "/featured/the-lighthouse.webp",
    logo: "/featured/the-lighthouse-logo.webp",
    description:
      "Standing tall as a luminous beacon of contemporary architectural finesse, The Lighthouse is an ode to refined vertical living. Designed with soaring floor-to-ceiling glass apertures, double-height light shafts, and expansive wrap-around verandas, each residence enjoys uninterrupted southern vistas and soothing natural cross-ventilation.",
    gallery: [
      "/featured/the-lighthouse.webp",
      "/hero/slide-1.jpg",
      "/hero/slide-5.jpg",
      "/showcase/statement-of-arrival.webp",
      "/hero/slide-7.jpg",
    ],
    specs: {
      size: "2,050+ sft",
      bed: "3",
      bath: "3",
      land: "10 Katha",
    },
    atAGlance: {
      address: "Plot-312, Road-8, Block-M, Bashundhara R/A, Dhaka",
      landArea: "10 Katha",
      noOfFloors: "G+11",
      apartmentsPerFloor: "2",
      apartmentSize: "2,050+ to 2,600 sft",
      bedrooms: "3-4",
      bathrooms: "3",
      launchDate: "January 2026",
      expectedCompletionDate: "December 2029",
    },
    floorPlans: [
      { id: "fp-1", title: "Unit A - South Facing", size: "2,050 sft", type: "3 Bed + Family Living" },
      { id: "fp-2", title: "Unit B - Garden View", size: "2,250 sft", type: "3 Bed + 4 Balcony" },
      { id: "fp-3", title: "Sky Villa Duplex", size: "4,100 sft", type: "4 Bed + Private Pool" },
    ],
  },
  {
    id: "emerald-heights",
    name: "Emerald Heights",
    location: "Block K, Bashundhara R/A, Dhaka",
    area: "Bashundhara R/A",
    type: "Luxury Condominium",
    status: "Under Construction",
    tag: "Featured",
    image: "/featured/emerald-heights.webp",
    logo: "/featured/emerald-heights-logo.png",
    description:
      "Emerald Heights embodies understated sophistication and lush biophilic harmony. Nestled in the serene heart of Block K, the project integrates terraced green pocket gardens and private rooftop leisure amenities to offer an oasis of calm within the dynamic metropolis.",
    gallery: [
      "/featured/emerald-heights.webp",
      "/hero/slide-3.jpg",
      "/hero/slide-6.jpg",
      "/hero/slide-2.jpg",
      "/hero/craftsmanship.jpg",
    ],
    specs: {
      size: "1,550+ to 2,050+ sft",
      bed: "3-4",
      bath: "4",
      land: "5 Katha",
    },
    atAGlance: {
      address: "Plot-148, Road-5, Block-K, Bashundhara R/A, Dhaka",
      landArea: "5 Katha",
      noOfFloors: "G+8",
      apartmentsPerFloor: "1",
      apartmentSize: "1,550+ to 2,050+ sft",
      bedrooms: "3-4",
      bathrooms: "4",
      launchDate: "August 2024",
      expectedCompletionDate: "June 2027",
    },
    floorPlans: [
      { id: "fp-1", title: "Single-Unit Full Floor", size: "2,050 sft", type: "4 Bed + 4 Bath" },
      { id: "fp-2", title: "Deluxe Suite Layout", size: "1,750 sft", type: "3 Bed + 3 Bath" },
    ],
  },
  {
    id: "magnifico",
    name: "Magnifico",
    location: "Baridhara Diplomatic Zone, Dhaka",
    area: "Gulshan & Baridhara",
    type: "Duplex Penthouse",
    status: "Nearly Ready",
    tag: "Featured",
    image: "/featured/magnifico.webp",
    logo: "/featured/magnifico-logo.png",
    description:
      "Magnifico is the crowning jewel of the Baridhara Diplomatic enclave. Designed for high-ranking diplomats and discerning connoisseurs, the development boasts quadruple-tier biometric security, dedicated chauffeur quarters, and sprawling penthouses featuring private plunge pools.",
    gallery: [
      "/featured/magnifico.webp",
      "/hero/slide-4.jpg",
      "/hero/slide-1.jpg",
      "/showcase/statement-of-arrival.webp",
      "/hero/craftsmanship.jpg",
    ],
    specs: {
      size: "3,500+ sft",
      bed: "4",
      bath: "4",
      land: "18.62 Katha",
    },
    atAGlance: {
      address: "Road 11, Baridhara Diplomatic Zone, Dhaka",
      landArea: "18.62 Katha",
      noOfFloors: "2B+G+12",
      apartmentsPerFloor: "1",
      apartmentSize: "3,500+ to 5,200 sft",
      bedrooms: "4-5",
      bathrooms: "5",
      launchDate: "October 2023",
      expectedCompletionDate: "March 2027",
    },
    floorPlans: [
      { id: "fp-1", title: "Presidential Flat", size: "3,500 sft", type: "4 Bed + Formal Dining" },
      { id: "fp-2", title: "Crown Duplex Penthouse", size: "5,200 sft", type: "5 Bed + Infinity Terrace" },
    ],
  },
  {
    id: "dew-drops",
    name: "Dew Drops",
    location: "Gulshan 1, Dhaka",
    area: "Gulshan & Baridhara",
    type: "Signature Residence",
    status: "Under Construction",
    tag: "Featured",
    image: "/featured/dew-drops.webp",
    logo: "/featured/dew-drops-logo.png",
    description:
      "Positioned along the pristine tree-lined avenues of Gulshan-1, Dew Drops offers an intimate sanctuary amidst the country's most premier commercial and culinary hub. Crafted with textured fair-face concrete, warm timber louvers, and bespoke European fittings.",
    gallery: [
      "/featured/dew-drops.webp",
      "/hero/slide-5.jpg",
      "/hero/slide-7.jpg",
      "/hero/slide-3.jpg",
      "/hero/slide-2.jpg",
    ],
    specs: {
      size: "2,850+ sft",
      bed: "4",
      bath: "4",
      land: "14 Katha",
    },
    atAGlance: {
      address: "Road 124, Gulshan-1, Dhaka-1212",
      landArea: "14 Katha",
      noOfFloors: "G+12",
      apartmentsPerFloor: "2",
      apartmentSize: "2,850+ sft",
      bedrooms: "4",
      bathrooms: "4",
      launchDate: "March 2024",
      expectedCompletionDate: "October 2027",
    },
    floorPlans: [
      { id: "fp-1", title: "Residence East", size: "2,850 sft", type: "4 Bed + 4 Bath" },
      { id: "fp-2", title: "Residence West", size: "2,850 sft", type: "4 Bed + 4 Bath" },
    ],
  },
  {
    id: "hillside-haven",
    name: "Hillside Haven",
    location: "Nasirabad H/S, Chattogram",
    area: "Chattogram & Other",
    type: "Panoramic Hill Suite",
    status: "Under Construction",
    tag: "Featured",
    image: "/featured/hillside-haven.webp",
    logo: "/featured/hillside-haven-logo.webp",
    description:
      "Perched on the verdant ridges of Nasirabad Heights, Hillside Haven captures panoramic 360-degree vistas of the Chattogram hill range and Karnaphuli river breeze. A rare hillside sanctuary with private infinity pool and elevated sky lounge.",
    gallery: [
      "/featured/hillside-haven.webp",
      "/hero/slide-6.jpg",
      "/hero/slide-2.jpg",
      "/hero/slide-4.jpg",
      "/hero/craftsmanship.jpg",
    ],
    specs: {
      size: "2,350+ sft",
      bed: "3-4",
      bath: "3",
      land: "12 Katha",
    },
    atAGlance: {
      address: "Road 3, Nasirabad Housing Society, Chattogram",
      landArea: "12 Katha",
      noOfFloors: "G+10",
      apartmentsPerFloor: "2",
      apartmentSize: "2,350+ to 2,800 sft",
      bedrooms: "3-4",
      bathrooms: "3",
      launchDate: "February 2025",
      expectedCompletionDate: "September 2028",
    },
    floorPlans: [
      { id: "fp-1", title: "Hill View Suite A", size: "2,350 sft", type: "3 Bed + Study" },
      { id: "fp-2", title: "Valley Panorama Suite B", size: "2,800 sft", type: "4 Bed + Family Room" },
    ],
  },
  {
    id: "silvi",
    name: "Silvi",
    location: "Gulshan-1, Dhaka",
    area: "Gulshan & Baridhara",
    type: "Luxury Condominium",
    status: "Under Construction",
    tag: "Exclusive",
    image: "/offers/silvi.jpg",
    description:
      "Silvi is an architectural triumph in the heart of Gulshan-1, merging tranquil lakeside serenity with effortless urban access. Featuring ultra-wide cantilevered balconies, double glazed acoustic glass, and full home automation.",
    gallery: [
      "/offers/silvi.jpg",
      "/hero/slide-1.jpg",
      "/hero/slide-5.jpg",
      "/hero/craftsmanship.jpg",
    ],
    specs: {
      size: "1,850 – 2,600 sft",
      bed: "3 – 4",
      bath: "3 – 4",
      land: "18 Katha",
    },
    atAGlance: {
      address: "Road 138, Gulshan-1, Dhaka-1212",
      landArea: "18 Katha",
      noOfFloors: "B+G+13",
      apartmentsPerFloor: "2",
      apartmentSize: "1,850 – 2,600 sft",
      bedrooms: "3-4",
      bathrooms: "3-4",
      launchDate: "September 2024",
      expectedCompletionDate: "December 2027",
    },
    floorPlans: [
      { id: "fp-1", title: "Unit A", size: "1,850 sft", type: "3 Bed + 3 Bath" },
      { id: "fp-2", title: "Unit B", size: "2,600 sft", type: "4 Bed + 4 Bath" },
    ],
  },
  {
    id: "cosmopolis",
    name: "Cosmopolis",
    location: "Mirpur-11, Dhaka",
    area: "Uttara & Mirpur",
    type: "Residential Complex",
    status: "Under Construction",
    tag: "Promotional",
    image: "/offers/cosmopolis.jpg",
    description:
      "Cosmopolis redefines modern community living in North Dhaka. Spanning across 47 Katha with sprawling central gardens, walking tracks, daycare centers, and private badminton courts, it provides an idyllic retreat for multi-generational families.",
    gallery: [
      "/offers/cosmopolis.jpg",
      "/hero/slide-2.jpg",
      "/hero/slide-4.jpg",
      "/hero/slide-6.jpg",
    ],
    specs: {
      size: "1,047 – 2,279 sft",
      bed: "3 – 4",
      bath: "3",
      land: "47 Katha",
    },
    atAGlance: {
      address: "Plot 12-15, Section 11, Mirpur, Dhaka",
      landArea: "47 Katha",
      noOfFloors: "2B+G+15 (Twin Towers)",
      apartmentsPerFloor: "4",
      apartmentSize: "1,047 – 2,279 sft",
      bedrooms: "3-4",
      bathrooms: "3",
      launchDate: "January 2024",
      expectedCompletionDate: "December 2027",
    },
    floorPlans: [
      { id: "fp-1", title: "Unit 1 - Compact Family", size: "1,047 sft", type: "3 Bed + 2 Bath" },
      { id: "fp-2", title: "Unit 2 - Spacious Suite", size: "2,279 sft", type: "4 Bed + 3 Bath" },
    ],
  },
  {
    id: "park-royale",
    name: "Park Royale",
    location: "Gulshan-2, Dhaka",
    area: "Gulshan & Baridhara",
    type: "Premium High-Rise",
    status: "Nearly Ready",
    tag: "Signature",
    image: "/offers/park-royale.jpg",
    description:
      "Facing the parklands of Gulshan-2, Park Royale is synonymous with quiet luxury and enduring prestige. With imported Spanish porcelain facades, Japanese high-speed elevator banks, and private club membership, it sets a new gold standard.",
    gallery: [
      "/offers/park-royale.jpg",
      "/hero/slide-3.jpg",
      "/hero/slide-7.jpg",
      "/hero/craftsmanship.jpg",
    ],
    specs: {
      size: "3,100 – 4,500 sft",
      bed: "4",
      bath: "4",
      land: "25 Katha",
    },
    atAGlance: {
      address: "Road 62, Gulshan-2, Dhaka-1212",
      landArea: "25 Katha",
      noOfFloors: "2B+G+14",
      apartmentsPerFloor: "1",
      apartmentSize: "3,100 – 4,500 sft",
      bedrooms: "4",
      bathrooms: "4",
      launchDate: "July 2023",
      expectedCompletionDate: "August 2026",
    },
    floorPlans: [
      { id: "fp-1", title: "Full Floor Residence", size: "3,100 sft", type: "4 Bed + Formal Dining" },
      { id: "fp-2", title: "Grand Penthouse", size: "4,500 sft", type: "5 Bed + Sky Deck" },
    ],
  },
  {
    id: "luminara-skyline",
    name: "Luminara Skyline",
    location: "Road 11, Banani, Dhaka",
    area: "Gulshan & Baridhara",
    type: "Modern Sky Suites",
    status: "Under Construction",
    tag: "Exclusive",
    image: "/projects/project-1.jpg",
    description:
      "Positioned along the vibrant Road 11 corridor of Banani, Luminara Skyline blends cosmopolitan flair with private oasis living. Features infinity rooftop jacuzzi, private gym, and high-efficiency VRF climate control.",
    gallery: [
      "/projects/project-1.jpg",
      "/hero/slide-4.jpg",
      "/hero/slide-2.jpg",
      "/showcase/statement-of-arrival.webp",
    ],
    specs: {
      size: "2,450 – 3,800 sft",
      bed: "4",
      bath: "4",
      land: "32 Katha",
    },
    atAGlance: {
      address: "Road 11, Block-D, Banani, Dhaka-1213",
      landArea: "32 Katha",
      noOfFloors: "B+G+12",
      apartmentsPerFloor: "2",
      apartmentSize: "2,450 – 3,800 sft",
      bedrooms: "4",
      bathrooms: "4",
      launchDate: "November 2024",
      expectedCompletionDate: "May 2028",
    },
    floorPlans: [
      { id: "fp-1", title: "Suite Alpha", size: "2,450 sft", type: "4 Bed + 4 Bath" },
      { id: "fp-2", title: "Duplex Penthouse", size: "3,800 sft", type: "5 Bed + Terrace" },
    ],
  },
  {
    id: "zenith-enclave",
    name: "Zenith Enclave",
    location: "Road 8/A, Dhanmondi, Dhaka",
    area: "Chattogram & Other",
    type: "Architectural Haven",
    status: "Under Construction",
    tag: "Contemporary",
    image: "/projects/project-2.jpg",
    description:
      "Zenith Enclave embraces the cultural heritage and leafy charm of Dhanmondi. Designed with terracotta brick highlights, solar power arrays, and expansive family lounges, it is the perfect sanctuary for modern urban living.",
    gallery: [
      "/projects/project-2.jpg",
      "/hero/slide-5.jpg",
      "/hero/slide-1.jpg",
      "/hero/craftsmanship.jpg",
    ],
    specs: {
      size: "2,150 – 3,200 sft",
      bed: "3 – 4",
      bath: "3",
      land: "20 Katha",
    },
    atAGlance: {
      address: "Road 8/A, Dhanmondi, Dhaka-1209",
      landArea: "20 Katha",
      noOfFloors: "G+11",
      apartmentsPerFloor: "2",
      apartmentSize: "2,150 – 3,200 sft",
      bedrooms: "3-4",
      bathrooms: "3",
      launchDate: "April 2024",
      expectedCompletionDate: "December 2027",
    },
    floorPlans: [
      { id: "fp-1", title: "Garden Suite", size: "2,150 sft", type: "3 Bed + 3 Bath" },
      { id: "fp-2", title: "Terrace Penthouse", size: "3,200 sft", type: "4 Bed + 4 Bath" },
    ],
  },
  {
    id: "grand-meridian",
    name: "The Grand Meridian",
    location: "Baridhara Avenue, Dhaka",
    area: "Gulshan & Baridhara",
    type: "Diplomatic Enclave",
    status: "Nearly Ready",
    tag: "Signature",
    image: "/projects/project-3.jpg",
    description:
      "A monument of architectural prestige located right at Baridhara Avenue. Built with bullet-resistant boundary layers, dual underground basements, and double-height lobbies adorned with Italian Statuario marble.",
    gallery: [
      "/projects/project-3.jpg",
      "/hero/slide-6.jpg",
      "/hero/slide-3.jpg",
      "/showcase/statement-of-arrival.webp",
    ],
    specs: {
      size: "4,200 – 5,600 sft",
      bed: "4 – 5",
      bath: "5",
      land: "55 Katha",
    },
    atAGlance: {
      address: "Baridhara Avenue, Baridhara, Dhaka",
      landArea: "55 Katha",
      noOfFloors: "3B+G+16",
      apartmentsPerFloor: "1",
      apartmentSize: "4,200 – 5,600 sft",
      bedrooms: "4-5",
      bathrooms: "5",
      launchDate: "February 2023",
      expectedCompletionDate: "November 2026",
    },
    floorPlans: [
      { id: "fp-1", title: "Diplomatic Suite", size: "4,200 sft", type: "4 Bed + Study + Staff" },
      { id: "fp-2", title: "Royal Duplex Villa", size: "5,600 sft", type: "5 Bed + Infinity Pool" },
    ],
  },
  {
    id: "aura-heights",
    name: "Aura Heights",
    location: "Sector 3, Uttara, Dhaka",
    area: "Uttara & Mirpur",
    type: "Residential Residence",
    status: "Ready",
    tag: "Move-In Ready",
    image: "/projects/project-4.jpg",
    description:
      "A ready-to-move architectural gem in Uttara Sector 3, mere minutes from the Airport and Dhaka elevated expressway. Features dedicated children's play area, sound-isolated study zones, and solar-assisted water heating.",
    gallery: [
      "/projects/project-4.jpg",
      "/hero/slide-7.jpg",
      "/hero/slide-2.jpg",
      "/hero/craftsmanship.jpg",
    ],
    specs: {
      size: "1,980 – 2,450 sft",
      bed: "3 – 4",
      bath: "3",
      land: "15 Katha",
    },
    atAGlance: {
      address: "Road 14, Sector 3, Uttara, Dhaka-1230",
      landArea: "15 Katha",
      noOfFloors: "G+10",
      apartmentsPerFloor: "2",
      apartmentSize: "1,980 – 2,450 sft",
      bedrooms: "3-4",
      bathrooms: "3",
      launchDate: "Ready to Move",
      expectedCompletionDate: "Ready for Handover",
    },
    floorPlans: [
      { id: "fp-1", title: "Unit A", size: "1,980 sft", type: "3 Bed + 3 Bath" },
      { id: "fp-2", title: "Unit B", size: "2,450 sft", type: "4 Bed + 3 Bath" },
    ],
  },
  {
    id: "bellevue-residences",
    name: "Bellevue Residences",
    location: "Purbachal 300ft Expressway, Dhaka",
    area: "Bashundhara R/A",
    type: "Luxury Condominium",
    status: "Newly Launched",
    tag: "Eco Living",
    image: "/showcase/statement-of-arrival.webp",
    description:
      "Perched strategically along the 300 Feet Purbachal Expressway, Bellevue Residences is designed as a futuristic eco-sustainable residential township. Boasting 65% open green spaces, rainwater harvesting, and EV charging stations for every apartment.",
    gallery: [
      "/showcase/statement-of-arrival.webp",
      "/hero/slide-1.jpg",
      "/hero/slide-4.jpg",
      "/hero/slide-6.jpg",
    ],
    specs: {
      size: "2,200 – 3,100 sft",
      bed: "3 – 4",
      bath: "4",
      land: "24 Katha",
    },
    atAGlance: {
      address: "Expressway Front, Purbachal Sector 1, Dhaka",
      landArea: "24 Katha",
      noOfFloors: "2B+G+14",
      apartmentsPerFloor: "2",
      apartmentSize: "2,200 – 3,100 sft",
      bedrooms: "3-4",
      bathrooms: "4",
      launchDate: "January 2026",
      expectedCompletionDate: "June 2029",
    },
    floorPlans: [
      { id: "fp-1", title: "Eco Suite 1", size: "2,200 sft", type: "3 Bed + Green Balcony" },
      { id: "fp-2", title: "Eco Suite 2", size: "3,100 sft", type: "4 Bed + Private Terrace" },
    ],
  },
  {
    id: "allegra",
    name: "Allegra",
    location: "Block K, Bashundhara R/A, Dhaka",
    area: "Bashundhara R/A",
    type: "Luxury Residential Suites",
    status: "Under Construction",
    tag: "NRB Prime",
    image: "/featured/emerald-heights.webp",
    description:
      "A flagship luxury residential project situated in the prime Block K of Bashundhara R/A. Designed especially with global lifestyle standards for Non-Resident Bangladeshis seeking high capital appreciation, dual-aspect balconies, and tranquil community security.",
    gallery: [
      "/featured/emerald-heights.webp",
      "/hero/slide-5.jpg",
      "/hero/slide-2.jpg",
      "/hero/slide-1.jpg",
    ],
    specs: {
      size: "2,400 – 2,900 sft",
      bed: "3 – 4",
      bath: "4",
      land: "12 Katha",
    },
    atAGlance: {
      address: "Plot 420-422, Road 18, Block K, Bashundhara R/A, Dhaka",
      landArea: "12 Katha",
      noOfFloors: "B+G+12",
      apartmentsPerFloor: "2",
      apartmentSize: "2,400 – 2,900 sft",
      bedrooms: "3-4",
      bathrooms: "4",
      launchDate: "August 2025",
      expectedCompletionDate: "December 2028",
    },
    floorPlans: [
      { id: "fp-1", title: "Type A (East Facing)", size: "2,400 sft", type: "3 Bed + Study" },
      { id: "fp-2", title: "Type B (Corner Unit)", size: "2,900 sft", type: "4 Bed + Family Living" },
    ],
  },
  {
    id: "amabilia",
    name: "Amabilia",
    location: "Mohakhali, Dhaka",
    area: "Gulshan & Baridhara",
    type: "Modern Contemporary Residence",
    status: "Nearly Ready",
    tag: "NRB Pick",
    image: "/featured/the-seasons.webp",
    description:
      "Strategically situated adjacent to the Gulshan commercial corridor and Dhaka elevated transit hub, Amabilia delivers serene living amidst urban connectivity. Thoughtfully curated double-height foyer, rooftop fitness lounge, and high rental yield for overseas investors.",
    gallery: [
      "/featured/the-seasons.webp",
      "/hero/slide-3.jpg",
      "/hero/slide-6.jpg",
      "/hero/craftsmanship.jpg",
    ],
    specs: {
      size: "2,150 – 2,600 sft",
      bed: "3",
      bath: "3",
      land: "10 Katha",
    },
    atAGlance: {
      address: "Wireless Gate, Mohakhali DOHS Access, Dhaka",
      landArea: "10 Katha",
      noOfFloors: "G+10",
      apartmentsPerFloor: "2",
      apartmentSize: "2,150 – 2,600 sft",
      bedrooms: "3",
      bathrooms: "3",
      launchDate: "June 2024",
      expectedCompletionDate: "March 2027",
    },
    floorPlans: [
      { id: "fp-1", title: "Unit A", size: "2,150 sft", type: "3 Bed + 3 Bath" },
      { id: "fp-2", title: "Unit B", size: "2,600 sft", type: "3 Bed + Powder Room" },
    ],
  },
  {
    id: "amberwood",
    name: "Amberwood",
    location: "Tejgaon, Dhaka",
    area: "Uttara & Mirpur",
    type: "Green Architectural Marvel",
    status: "Newly Launched",
    tag: "High ROI",
    image: "/featured/magnifico.webp",
    description:
      "A bold statement in architectural sustainability located in the revitalized modern district of Tejgaon. Offering expansive vertical gardens, acoustic glass insulation, smart home automation, and tailored property management services for expat owners.",
    gallery: [
      "/featured/magnifico.webp",
      "/hero/slide-4.jpg",
      "/hero/slide-7.jpg",
      "/hero/slide-1.jpg",
    ],
    specs: {
      size: "1,850 – 2,350 sft",
      bed: "3",
      bath: "3",
      land: "14 Katha",
    },
    atAGlance: {
      address: "Shaheed Tajuddin Ahmed Sarani, Tejgaon, Dhaka",
      landArea: "14 Katha",
      noOfFloors: "2B+G+14",
      apartmentsPerFloor: "3",
      apartmentSize: "1,850 – 2,350 sft",
      bedrooms: "3",
      bathrooms: "3",
      launchDate: "November 2025",
      expectedCompletionDate: "August 2029",
    },
    floorPlans: [
      { id: "fp-1", title: "Amber Suite 1", size: "1,850 sft", type: "3 Bed + Balcony" },
      { id: "fp-2", title: "Amber Suite 2", size: "2,350 sft", type: "3 Bed + Staff Quarter" },
    ],
  },
];

export function getPropertyById(id: string): PropertyItem | undefined {
  return allPropertiesData.find(
    (p) => p.id.toLowerCase() === id.toLowerCase() || p.id.toLowerCase() === id.toLowerCase().replace(/_/g, "-")
  );
}
