export interface SpecialProject {
  id: string;
  name: string;
  location: string;
  area: "Gulshan & Baridhara" | "Bashundhara R/A" | "Uttara & Mirpur" | "Chattogram" | "Other";
  image: string;
  offerBadge: string;
  status: "Under Construction" | "Nearly Ready" | "Newly Launched" | "Ready";
  discountNote: string;
  specs: {
    size: string;
    bed: string;
    bath: string;
    land: string;
  };
}

export const specialOffersData: SpecialProject[] = [
  {
    id: "silvi",
    name: "Silvi",
    location: "Gulshan-1, Dhaka",
    area: "Gulshan & Baridhara",
    image: "/offers/silvi.jpg",
    offerBadge: "5% Booking Rebate",
    status: "Under Construction",
    discountNote: "Special 5% booking discount with 36-month interest-free installment.",
    specs: {
      size: "1,850 – 2,600 sft",
      bed: "3 – 4",
      bath: "3 – 4",
      land: "18 Katha",
    },
  },
  {
    id: "cosmopolis",
    name: "Cosmopolis",
    location: "Mirpur-11, Dhaka",
    area: "Uttara & Mirpur",
    image: "/offers/cosmopolis.jpg",
    offerBadge: "Free Registration Benefit",
    status: "Under Construction",
    discountNote: "Zero registration cost & complimentary smart home automation.",
    specs: {
      size: "1,047 – 2,279 sft",
      bed: "3 – 4",
      bath: "3",
      land: "47 Katha",
    },
  },
  {
    id: "park-royale",
    name: "Park Royale",
    location: "Gulshan-2, Dhaka",
    area: "Gulshan & Baridhara",
    image: "/offers/park-royale.jpg",
    offerBadge: "Complimentary Interior Design",
    status: "Nearly Ready",
    discountNote: "Full turnkey architectural interior package included for limited units.",
    specs: {
      size: "3,100 – 4,500 sft",
      bed: "4",
      bath: "4",
      land: "25 Katha",
    },
  },
  {
    id: "the-lighthouse",
    name: "The Lighthouse",
    location: "Block I, Bashundhara R/A, Dhaka",
    area: "Bashundhara R/A",
    image: "/featured/the-lighthouse.webp",
    offerBadge: "Penthouse Priority Deal",
    status: "Newly Launched",
    discountNote: "Priority pre-launch rates for duplex penthouses with private terrace.",
    specs: {
      size: "3,400 – 4,800 sft",
      bed: "4 – 5",
      bath: "5",
      land: "30 Katha",
    },
  },
  {
    id: "dew-drops",
    name: "Dew Drops",
    location: "Block C, Bashundhara R/A, Dhaka",
    area: "Bashundhara R/A",
    image: "/featured/dew-drops.webp",
    offerBadge: "Flexible 36-Month EMI",
    status: "Under Construction",
    discountNote: "Tailored zero-interest payment milestones through partnered private banks.",
    specs: {
      size: "2,200 – 3,100 sft",
      bed: "3 – 4",
      bath: "4",
      land: "22 Katha",
    },
  },
  {
    id: "the-seasons",
    name: "The Seasons",
    location: "Sector 4, Uttara, Dhaka",
    area: "Uttara & Mirpur",
    image: "/featured/the-seasons.webp",
    offerBadge: "Zero Price Escalation",
    status: "Under Construction",
    discountNote: "Guaranteed fixed price contract with zero cost escalation till handover.",
    specs: {
      size: "1,750 – 2,400 sft",
      bed: "3",
      bath: "3",
      land: "18 Katha",
    },
  },
  {
    id: "emerald-heights",
    name: "Emerald Heights",
    location: "Purbachal 300 Feet Expressway, Dhaka",
    area: "Bashundhara R/A",
    image: "/featured/emerald-heights.webp",
    offerBadge: "Pre-Launch Exclusive Rate",
    status: "Newly Launched",
    discountNote: "Special launch price for first 10 corporate & expatriate buyers.",
    specs: {
      size: "1,950 – 2,800 sft",
      bed: "3",
      bath: "3",
      land: "16 Katha",
    },
  },
  {
    id: "hillside-haven",
    name: "Hillside Haven",
    location: "Khulshi Hills, Chattogram",
    area: "Chattogram",
    image: "/featured/hillside-haven.webp",
    offerBadge: "Panoramic View Suite Deal",
    status: "Under Construction",
    discountNote: "Hill-view luxury suites with private infinity lounge membership.",
    specs: {
      size: "2,800 – 4,100 sft",
      bed: "4",
      bath: "4",
      land: "40 Katha",
    },
  },
  {
    id: "magnifico",
    name: "Magnifico Residency",
    location: "Baridhara Diplomatic Zone, Dhaka",
    area: "Gulshan & Baridhara",
    image: "/featured/magnifico.webp",
    offerBadge: "Diplomatic Suite Package",
    status: "Nearly Ready",
    discountNote: "High-security luxury residences with diplomatic parking privilege.",
    specs: {
      size: "4,500 – 6,200 sft",
      bed: "5",
      bath: "5",
      land: "48 Katha",
    },
  },
  {
    id: "luminara-skyline",
    name: "Luminara Skyline",
    location: "Road 11, Banani, Dhaka",
    area: "Gulshan & Baridhara",
    image: "/projects/project-1.jpg",
    offerBadge: "Floor Upgrade Privilege",
    status: "Under Construction",
    discountNote: "Complimentary higher floor selection on standard unit booking.",
    specs: {
      size: "2,450 – 3,800 sft",
      bed: "4",
      bath: "4",
      land: "32 Katha",
    },
  },
  {
    id: "zenith-enclave",
    name: "Zenith Enclave",
    location: "Road 8/A, Dhanmondi, Dhaka",
    area: "Other",
    image: "/projects/project-2.jpg",
    offerBadge: "Zero Processing Fee",
    status: "Under Construction",
    discountNote: "No processing charges and 100% legal documentation assistance.",
    specs: {
      size: "2,150 – 3,200 sft",
      bed: "3 – 4",
      bath: "3",
      land: "20 Katha",
    },
  },
  {
    id: "grand-meridian",
    name: "The Grand Meridian",
    location: "Baridhara Avenue, Dhaka",
    area: "Gulshan & Baridhara",
    image: "/projects/project-3.jpg",
    offerBadge: "Private Terrace Inclusion",
    status: "Nearly Ready",
    discountNote: "Double-height living space with rooftop garden terrace included.",
    specs: {
      size: "4,200 – 5,600 sft",
      bed: "4 – 5",
      bath: "5",
      land: "55 Katha",
    },
  },
];

