import cotaHall from "../assets/images/cota-hall.webp";
import cotaFront from "../assets/images/cota-fronts1.webp";
import cotaBack from "../assets/images/cota-backs2.webp";
import cotaBal from "../assets/images/cota-s4.webp";
import cotaRoom1 from "../assets/images/cota-s3.webp";
import cotaRoom2 from "../assets/images/single-bedroom.webp";

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Rooms' | 'Interiors' | 'Exterior' | 'Nature' | 'Experiences' | 'Food' | 'Surroundings';
  url: string;
  caption?: string;
  aspectRatio: 'vertical' | 'horizontal' | 'square';
}

export const GALLERY_CATEGORIES = [
  'All',
  'Rooms',
  'Interiors',
  'Exterior',
  'Nature',
  'Experiences',
  'Food',
  'Surroundings'
] as const;

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-01",
    title: "Kodaikanal Valley Sunset",
    category: "Exterior",
    url: cotaHall,
    caption: "Golden hour glow across the main cottage property",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-02",
    title: "Cottage Living Space",
    category: "Interiors",
    url: cotaFront,
    caption: "Warm cozy atmosphere in the cottage living area",
    aspectRatio: "vertical"
  },
  {
    id: "gal-03",
    title: "Misty Mountain Canopy",
    category: "Nature",
    url: cotaBack,
    caption: "Morning fog drifting through the pine woods",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-04",
    title: "Cottage Hill View Room",
    category: "Rooms",
    url: cotaBal,
    caption: "Scenic view from the room window",
    aspectRatio: "vertical"
  },
  {
    id: "gal-05",
    title: "Evening Campfire Circle",
    category: "Experiences",
    url: cotaRoom1,
    caption: "Stargazing under the clear Kodaikanal sky",
    aspectRatio: "horizontal"
  },
  {
    id: "gal-06",
    title: "Cottage Bedroom View",
    category: "Rooms",
    url: cotaRoom2,
    caption: "Comfortable and spacious bedroom layout",
    aspectRatio: "square"
  },
];
