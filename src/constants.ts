import { Service, Testimonial, Package } from "./types";

export const PACKAGES: Package[] = [
  {
    id: "p1",
    name: "The Royal Treatment",
    price: "$90",
    services: ["Classic Cut", "Hot Towel Shave", "Scalp Massage", "Beard Sculpt"],
    description: "The ultimate grooming experience for the man who deserves it all.",
    tag: "Best Value"
  },
  {
    id: "p2",
    name: "Father & Son",
    price: "$55",
    services: ["1 Gentlemen's Cut", "1 Junior Cut", "2 Refreshments"],
    description: "Bonding time over a fresh look. A tradition for every generation."
  },
  {
    id: "p3",
    name: "Wedding Day Ready",
    price: "$120",
    services: ["Premium Cut", "Razor Head Shave", "Face Buffet Facial", "Gift Set"],
    description: "Look your absolute best for the big day. Includes a premium grooming kit.",
    tag: "Specialty"
  }
];

export const SERVICES: Service[] = [
  {
    id: "1",
    name: "Classic Gentlemen's Cut",
    price: "$35",
    duration: "45 min",
    description: "Precision cut tailored to your style with a hot towel finish.",
    category: "Haircuts"
  },
  {
    id: "2",
    name: "Kids' Junior Cut",
    price: "$25",
    duration: "30 min",
    description: "Sharp and clean look for the young men (under 12).",
    category: "Haircuts"
  },
  {
    id: "3",
    name: "Full Beard Sculpt & Sharp",
    price: "$30",
    duration: "30 min",
    description: "Complete beard reshaping, line-up, and razor finish.",
    category: "Beard & Shave"
  },
  {
    id: "4",
    name: "Classic Hot Towel Shave",
    price: "$40",
    duration: "45 min",
    description: "Traditional straight razor shave with premium oils.",
    category: "Beard & Shave"
  },
  {
    id: "5",
    name: "Signature Styling & Wash",
    price: "$45",
    duration: "40 min",
    description: "Full wash, conditioning, and professional styling session.",
    category: "Beauty & Styling"
  },
  {
    id: "6",
    name: "Edge-Up & Taper",
    price: "$20",
    duration: "20 min",
    description: "Keep it fresh between full cuts with a quick cleanup.",
    category: "Haircuts"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "James Miller",
    text: "Best fade I've ever had. PJ really knows how to work with different hair types. The vibe in the shop is unbeatable.",
    rating: 5
  },
  {
    id: "2",
    name: "Sarah Jenkins",
    text: "I brought my son here for his first real barbershop experience. They were patient and he looked so handsome after!",
    rating: 5
  },
  {
    id: "3",
    name: "Marcus Thorne",
    text: "The hot towel shave is a game changer. Very professional service and a clean, modern environment.",
    rating: 5
  }
];
