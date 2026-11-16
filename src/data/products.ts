import breakfast from "../assets/patla.jpg";
import hotel from "../assets/hotel.jpg";
import namkeen from "../assets/mota.png";
import roasted from "../assets/patla1.jpg";
import mithasPack from "../assets/packing.jpeg";
import amritKalash from "../assets/poha.png";
import amritKalashSika from "../assets/sketch.jpg";

export interface PohaProduct {
  brand: "Mithas" | "Amrit Kalash";
  name: string;
  slug: string;
  image: string;
  description: string;
  features: string[];
  applications: string[];
  packaging: string;
}

export const products: PohaProduct[] = [
  {
    brand: "Mithas",
    name: "Breakfast Special Poha",
    slug: "breakfast-special-poha",
    image: breakfast,
    description:
      "A light, quick-cooking poha for a comforting everyday breakfast, with the soft texture and authentic taste families enjoy.",
    features: ["Light texture", "Quick to prepare", "Made for everyday breakfast"],
    applications: ["Home-style breakfast", "Poha chivda", "Everyday recipes"],
    packaging: "Contact us for current pack sizes and availability.",
  },
  {
    brand: "Mithas",
    name: "Hotel Special Poha",
    slug: "hotel-special-poha",
    image: hotel,
    description:
      "Created for hotels, restaurants and caterers, with a dependable texture that works well for larger-scale cooking.",
    features: ["Hotel and food-service focused", "Consistent texture", "Takes on seasonings well"],
    applications: ["Hotels and restaurants", "Catering", "Bulk breakfast service"],
    packaging: "Contact us for current commercial pack sizes and availability.",
  },
  {
    brand: "Mithas",
    name: "Namkeen Special Poha",
    slug: "namkeen-special-poha",
    image: namkeen,
    description:
      "A versatile, crisp poha variety suited to namkeen makers and snack preparations.",
    features: ["Crisp texture", "Versatile for snack recipes", "Made for namkeen preparations"],
    applications: ["Poha chivda", "Namkeen", "Savory snacks"],
    packaging: "Contact us for current pack sizes and availability.",
  },
  {
    brand: "Mithas",
    name: "Roasted Poha",
    slug: "roasted-poha",
    image: roasted,
    description:
      "Mithas Roasted Poha offers a roasted option for customers looking to bring this distinctive variety to their kitchen.",
    features: ["Roasted poha variety", "Convenient for poha recipes", "From the Mithas range"],
    applications: ["Poha recipes", "Savory snacks", "Everyday cooking"],
    packaging: "Contact us for current pack sizes and availability.",
  },
  {
    brand: "Mithas",
    name: "Mithas Poha – 1 kg Pack",
    slug: "mithas-poha-1-kg-pack",
    image: mithasPack,
    description:
      "Mithas Poha in a convenient 1 kg pack, bringing the brand’s poha range to home kitchens.",
    features: ["1 kg pack", "Convenient home-kitchen size", "Authentic Mithas taste"],
    applications: ["Family breakfast", "Poha recipes", "Everyday cooking"],
    packaging: "1 kg pack.",
  },
  {
    brand: "Amrit Kalash",
    name: "Amrit Kalash Poha",
    slug: "amrit-kalash-poha",
    image: amritKalash,
    description:
      "A classic poha selection from Amrit Kalash for breakfast and everyday poha preparations.",
    features: ["Amrit Kalash brand selection", "Versatile poha variety", "Suitable for everyday recipes"],
    applications: ["Breakfast", "Home cooking", "Poha recipes"],
    packaging: "Contact us for current pack sizes and availability.",
  },
  {
    brand: "Amrit Kalash",
    name: "Amrit Kalash Sika Poha",
    slug: "amrit-kalash-sika-poha",
    image: amritKalashSika,
    description:
      "The Sika Poha variety from Amrit Kalash, available for customers seeking this specialty selection.",
    features: ["Amrit Kalash Sika variety", "Distinct product selection", "Suitable for poha preparations"],
    applications: ["Breakfast", "Poha recipes", "Everyday cooking"],
    packaging: "Contact us for current pack sizes and availability.",
  },
];
