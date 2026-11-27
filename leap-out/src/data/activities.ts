export type Category = "Martial Arts" | "Hiking" | "Running";

export type Activity = {
  id: string;
  title: string;
  description: string;
  category: Category;
  location: string;
  travel: string;
  firstTimerFriendly: boolean;
  image: string;
  imageAlt: string;
};

export const FILTERS = ["All", "Martial Arts", "Hiking", "Running"] as const;
export type Filter = (typeof FILTERS)[number];

export const activities: Activity[] = [
  // Martial Arts
  {
    id: "ma-1",
    title: "Beginner Boxing Taster",
    description: "Pads, footwork and a friendly intro — no sparring required.",
    category: "Martial Arts",
    location: "Bolton",
    travel: "12 min",
    firstTimerFriendly: true,
    image:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Boxer wrapping hands before training",
  },
  {
    id: "ma-2",
    title: "BJJ Fundamentals Drop-in",
    description: "Gi or no-gi welcome. Learn escapes and basic sweeps.",
    category: "Martial Arts",
    location: "Farnworth",
    travel: "18 min",
    firstTimerFriendly: true,
    image:
      "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Brazilian jiu-jitsu training on the mats",
  },
  {
    id: "ma-3",
    title: "Muay Thai Evening Class",
    description: "Clinch work, kicks and conditioning with a local coach.",
    category: "Martial Arts",
    location: "Horwich",
    travel: "22 min",
    firstTimerFriendly: false,
    image:
      "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Muay Thai fighter training with pads",
  },
  {
    id: "ma-4",
    title: "Women's Only Boxing Hour",
    description: "Small-group bag work in a supportive gym atmosphere.",
    category: "Martial Arts",
    location: "Bolton Town Centre",
    travel: "8 min",
    firstTimerFriendly: true,
    image:
      "https://images.unsplash.com/photo-1517438476312-10d79c077509?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Woman boxing with focus mitts",
  },
  {
    id: "ma-5",
    title: "Kickboxing Conditioning",
    description: "High-energy circuits mixing pads and bodyweight strength.",
    category: "Martial Arts",
    location: "Westhoughton",
    travel: "20 min",
    firstTimerFriendly: false,
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Athletes training hard in a gym",
  },
  // Hiking
  {
    id: "hi-1",
    title: "Rivington Pike Sunset Walk",
    description: "Classic Pike climb with wide views over the reservoirs.",
    category: "Hiking",
    location: "Rivington",
    travel: "25 min",
    firstTimerFriendly: true,
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hiker on a mountain trail at dusk",
  },
  {
    id: "hi-2",
    title: "Winter Hill Ridge Route",
    description: "Exposed moorland path — bring layers and good boots.",
    category: "Hiking",
    location: "Belmont",
    travel: "28 min",
    firstTimerFriendly: false,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dramatic mountain ridge under cloudy sky",
  },
  {
    id: "hi-3",
    title: "Jumbles Reservoir Loop",
    description: "Easy woodland circuit — perfect for a Sunday reset.",
    category: "Hiking",
    location: "Jumbles",
    travel: "15 min",
    firstTimerFriendly: true,
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Forest path beside water",
  },
  {
    id: "hi-4",
    title: "Smithills Country Park Trails",
    description: "Wooded tracks and open meadows on Bolton’s doorstep.",
    category: "Hiking",
    location: "Smithills",
    travel: "10 min",
    firstTimerFriendly: true,
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Person hiking through green countryside",
  },
  {
    id: "hi-5",
    title: "Guided Moors Walk — Turton",
    description: "Local guide, group pace, and a café stop at the end.",
    category: "Hiking",
    location: "Turton",
    travel: "18 min",
    firstTimerFriendly: true,
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Misty moorland landscape",
  },
  // Running
  {
    id: "ru-1",
    title: "Bolton parkrun Saturday",
    description: "5k community run at Leverhulme Park — walkers welcome.",
    category: "Running",
    location: "Leverhulme Park",
    travel: "14 min",
    firstTimerFriendly: true,
    image:
      "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Runners on a park path at sunrise",
  },
  {
    id: "ru-2",
    title: "Horwich RMI Club Session",
    description: "Track intervals with a friendly local running club.",
    category: "Running",
    location: "Horwich",
    travel: "22 min",
    firstTimerFriendly: true,
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Group of runners on a road",
  },
  {
    id: "ru-3",
    title: "Trail Tempo — Longworth Clough",
    description: "Undulating dirt paths for a sharp midweek effort.",
    category: "Running",
    location: "Egerton",
    travel: "16 min",
    firstTimerFriendly: false,
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Runner on a forest trail",
  },
  {
    id: "ru-4",
    title: "Canal Path Easy Miles",
    description: "Flat recovery jog along the Manchester, Bolton & Bury.",
    category: "Running",
    location: "Little Lever",
    travel: "12 min",
    firstTimerFriendly: true,
    image:
      "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Runner along a waterside path",
  },
  {
    id: "ru-5",
    title: "Queens Park Hill Repeats",
    description: "Short climbs to build power — meet at the bandstand.",
    category: "Running",
    location: "Bolton",
    travel: "9 min",
    firstTimerFriendly: false,
    image:
      "https://images.unsplash.com/photo-1502904550040-7534597429ae?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Athlete sprinting uphill outdoors",
  },
];
