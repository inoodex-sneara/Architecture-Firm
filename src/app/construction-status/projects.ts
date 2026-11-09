export type ProjectProgressRow = {
  slNo?: string;
  name: string;
  percentage?: string;
  details?: string;
  progress?: string;
};

export type ConstructionProject = {
  slug: string;
  name: string;
  location: string;
  image: string;
  expectedCompletionDate: string;
  statusUpdated: string;
  progressRows: ProjectProgressRow[];
};

export const standardProgressRows: ProjectProgressRow[] = [
  {
    slNo: "",
    name: "Foundation work",
    progress: "100% Completed",
  },
  {
    slNo: "",
    name: "Super Structure work",
    progress:
      "Tower-1: Ground floor slab 100%,1st floor slab 100%,2nd floor slab 100%,3rd floor slab 100%,4th floor slab 100%.\n5th floor 100%, 5th floor column 100%.\n\n6th floor slab 100%, 7th floor slab 100%.\n\n8th floor column 100%,8th floor slab 100%.\n\nTower-2: 1st floor slab 100%,2nd floor slab 100%, 3rd floor slab 100% ,4th floor slab 100%. 5th floor slab 100%. 6th floor slab 100%, 6th floor column 100%,7th floor slab 100%, 8th floor column 100% 8th floor slab 100% 9th floor column 100%,9th Floor Slab",
  },
  {
    slNo: "",
    name: "Block work",
    progress:
      "Tower-1: Ground floor Substation room, Stair wall 98%. 1st floor 98%, 2nd floor 100%, 3rd floor 100%, 4th floor 100%,5th floor 100%, 6th floor 100%,7th floor 100% 8TH Floor100 %\n\nTower-2: 1st floor 100%, 2nd floor 100%,3rd floor 100%, 4th floor 100%, 5th floor 100%,6th floor 100% 7th Floor 100% 8th Floor 100% 9th Floor 90%",
  },
  {
    slNo: "",
    name: "Electrical conduit work",
    progress:
      "Tower-1: 1st floor slab conduiting100%, 2nd floor slab conduiting 100%, 3rd floor slab conduiting 100%,4th floor slab conduiting 100%,5th floor slab conduiting 100%. 6th floor slab 100%, 7th floor 100%, 8th floor slab 100%, 9th floor slab 100%\n\nTower-2:1st floor floor slab conduiting100%, 2nd floor slab conduiting 100%, 3rd floor slab conduiting 100%. 4th floor slab 100%, 5th floor 100%,6th floor slab 100%,7th floor slab 100%. 8th floor slab 100% 9th floor slab100%",
  },
  {
    slNo: "",
    name: "Door frame fitting work",
    progress: "440",
  },
  {
    slNo: "",
    name: "Sanitary & plumbing line work",
    progress: "86%",
  },
  {
    slNo: "",
    name: "In side Ceiling Plaster & Wall Plaster work",
    progress:
      "Tower-1 Basement ceiling Plaster 100%,\nGround floor ceiling Plaster 100%, 2nd floor ceiling 100%, 4th floor 100%,5th floor 100%, 6th floor slab 100%,7th floor 100%, 8th floor ceiling plaster 100%. Basement wall Plaster 95%,2nd floor wall Plaster 100%,3rd Floor wall plaster100% 4th Floor wall plaster 100%,5th Floor wall Plaster 100%, 6th floor wall plaster 100%, 7th floor wall plaster 100%,8th floor wall plaster 100%\n\nTower-2 1st floor ceiling 100%,2nd floor ceiling 100%, 3rd floor 100%, 4th floor 100%, 5th floor 100%,6th floor 100% 7th Floor plaster 100% ,8th floor ceiling plaster 100%,9th Floor ceiling plaster 100%....1st floor wall Plaster 100%,2nd floor Wall plaster 100%,3rd floor wall plaster 100%, 4th floor wall plaster 100%, 5th Floor wall plaster 100%, 6th floor wall plaster 90%,7th floor wall plaster 100% 8th floor wall plaster 100% 9th floor wall plaster 100%",
  },
  {
    slNo: "",
    name: "Electrical cable wiring work",
    progress: "Basement 80%, Ground floor 90%.",
  },
  {
    slNo: "",
    name: "Wall tiles work",
    progress: "95%",
  },
  {
    slNo: "",
    name: "Common sanitary & Plumbing line work",
    progress: "80%",
  },
  {
    slNo: "",
    name: "Outside plastering work",
    progress: "100%",
  },
  {
    slNo: "",
    name: "Floor tiles/Marble work",
    progress: "90%",
  },
  {
    slNo: "",
    name: "L.C.C work",
    progress: "100%",
  },
  {
    slNo: "",
    name: "Grill & Railing work",
    progress: "90%",
  },
  {
    slNo: "",
    name: "Inside paint & Polishing work",
    progress: "50%",
  },
  {
    slNo: "",
    name: "Switch -Socket fitting work",
    progress: "N/A",
  },
  {
    slNo: "",
    name: "Outside paint work",
    progress: "N/A",
  },
  {
    slNo: "",
    name: "Door shutter work",
    progress: "20%",
  },
  {
    slNo: "",
    name: "Aluminum/Glazing work",
    progress: "40%",
  },
  {
    slNo: "",
    name: "Tiles Pointing work & Marble finishing work",
    progress: "N/A",
  },
  {
    slNo: "",
    name: "Commode - Basin fitting work and C.P fittings work",
    progress: "N/A",
  },
  {
    slNo: "",
    name: "Lift/Generator /Substation /Solar work",
    progress: "50%",
  },
  {
    slNo: "",
    name: "Boundary wall /Ground floor development work",
    progress: "70%",
  },
  {
    slNo: "",
    name: "Roof top finishing work",
    progress: "95%",
  },
  {
    slNo: "",
    name: "Roof top Gardening work",
    progress: "N/A",
  },
];

export const constructionProjects: ConstructionProject[] = [
  {
    slug: "west-gate",
    name: "West Gate",
    location: "Uttara, Dhaka",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80&sat=-18",
    expectedCompletionDate: "January 2027",
    statusUpdated: "September, 2026",
    progressRows: standardProgressRows,
  },
  {
    slug: "valencia",
    name: "Valencia",
    location: "Uttara, Dhaka",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80&sat=-20",
    expectedCompletionDate: "January 2027",
    statusUpdated: "September, 2026",
    progressRows: standardProgressRows,
  },
  {
    slug: "welcome-home",
    name: "Welcome Home",
    location: "Banani, Dhaka",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80&sat=-15",
    expectedCompletionDate: "December 2026",
    statusUpdated: "August, 2026",
    progressRows: standardProgressRows,
  },
  {
    slug: "decoris",
    name: "Decoris",
    location: "Mirpur, Dhaka",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80&sat=-18",
    expectedCompletionDate: "March 2027",
    statusUpdated: "October, 2026",
    progressRows: standardProgressRows,
  },
  {
    slug: "sunny-hill",
    name: "Sunny Hill",
    location: "Dhanmondi, Dhaka",
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1200&q=80&sat=-22",
    expectedCompletionDate: "June 2027",
    statusUpdated: "September, 2026",
    progressRows: standardProgressRows,
  },
  {
    slug: "lakeside-serenade",
    name: "Lakeside Serenade",
    location: "Gulshan, Dhaka",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80&sat=-20",
    expectedCompletionDate: "November 2026",
    statusUpdated: "September, 2026",
    progressRows: standardProgressRows,
  },
  {
    slug: "beverly-residence",
    name: "Beverly Residence",
    location: "Baridhara, Dhaka",
    image:
      "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&w=1200&q=80&sat=-16",
    expectedCompletionDate: "February 2027",
    statusUpdated: "August, 2026",
    progressRows: standardProgressRows,
  },
  {
    slug: "pleasant-homes",
    name: "Pleasant Homes",
    location: "Bashundhara, Dhaka",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80&sat=-18",
    expectedCompletionDate: "May 2027",
    statusUpdated: "October, 2026",
    progressRows: standardProgressRows,
  },
  {
    slug: "harbor-view",
    name: "Harbor View",
    location: "Chattogram, Bangladesh",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80&sat=-18",
    expectedCompletionDate: "April 2027",
    statusUpdated: "September, 2026",
    progressRows: standardProgressRows,
  },
  {
    slug: "skyline-residences",
    name: "Skyline Residences",
    location: "Motijheel, Dhaka",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80&sat=-20",
    expectedCompletionDate: "February 2027",
    statusUpdated: "October, 2026",
    progressRows: standardProgressRows,
  },
  {
    slug: "oak-crest",
    name: "Oak Crest",
    location: "Nikunja, Dhaka",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80&sat=-18",
    expectedCompletionDate: "August 2027",
    statusUpdated: "September, 2026",
    progressRows: standardProgressRows,
  },
  {
    slug: "emerald-terrace",
    name: "Emerald Terrace",
    location: "Purbachal, Dhaka",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80&sat=-14",
    expectedCompletionDate: "July 2027",
    statusUpdated: "September, 2026",
    progressRows: standardProgressRows,
  },
];

export const projectDetails = Object.fromEntries(
  constructionProjects.map((project) => [project.slug, project])
) as Record<string, ConstructionProject>;
