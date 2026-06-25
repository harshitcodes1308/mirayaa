import type { Category, Product } from "@/types";

const jewelryImages = [
  "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=86",
  "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1200&q=86",
  "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1200&q=86",
  "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=86",
  "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=86"
];

export const categories: Category[] = [
  {
    id: "cat-oxidised",
    name: "Oxidised Affairs",
    slug: "oxidised-affairs",
    description: "Handcrafted oxidised silver dangles and drops with ceremonial depth.",
    imageUrl: jewelryImages[0],
    displayOrder: 1
  },
  {
    id: "cat-desi",
    name: "The Desi Elegance",
    slug: "desi-elegance",
    description: "Traditional studs with contemporary soul, made for everyday glow.",
    imageUrl: jewelryImages[2],
    displayOrder: 2
  },
  {
    id: "cat-daily",
    name: "Daily Wears",
    slug: "daily-wears",
    description: "Lightweight everyday earrings for college, work, and quick plans.",
    imageUrl: jewelryImages[4],
    displayOrder: 3
  }
];

export const products: Product[] = [
  {
    id: "prod-royal-sparkle",
    name: "The Royal Sparkle",
    slug: "the-royal-sparkle",
    description: "A regal oxidised drop with mirror-like glints and a festive swing.",
    price: 249,
    comparePrice: 299,
    images: [jewelryImages[0], jewelryImages[1]],
    category: "oxidised-affairs",
    stock: 14,
    isFeatured: true,
    tags: ["New", "Festive"],
    material: "Oxidised alloy, faux mirror work",
    weightGrams: 18
  },
  {
    id: "prod-mandala",
    name: "Mandala Shimmer Earrings",
    slug: "mandala-shimmer-earrings",
    description: "Circular mandala detailing with a soft antique finish.",
    price: 149,
    comparePrice: 199,
    images: [jewelryImages[1], jewelryImages[3]],
    category: "oxidised-affairs",
    stock: 22,
    isFeatured: true,
    tags: ["Lightweight"],
    material: "Oxidised alloy",
    weightGrams: 12
  },
  {
    id: "prod-shisha",
    name: "Shisha Sun Jhumka",
    slug: "shisha-sun-jhumka",
    description: "Sun-cut jhumkas made for kurtas, college days, and wedding corners.",
    price: 199,
    images: [jewelryImages[2], jewelryImages[4]],
    category: "oxidised-affairs",
    stock: 10,
    isFeatured: true,
    tags: ["Bestseller"],
    material: "Oxidised alloy, acrylic mirror",
    weightGrams: 16
  },
  {
    id: "prod-mayura",
    name: "Mayura Majesty Drops",
    slug: "mayura-majesty-drops",
    description: "Peacock-inspired drops with a poised festive silhouette.",
    price: 249,
    images: [jewelryImages[3], jewelryImages[0]],
    category: "oxidised-affairs",
    stock: 8,
    isFeatured: true,
    tags: ["Statement"],
    material: "Oxidised alloy",
    weightGrams: 20
  },
  {
    id: "prod-cotton-candy",
    name: "Cotton Candy Earrings",
    slug: "cotton-candy-earrings",
    description: "Soft-toned studs for a playful desi everyday look.",
    price: 99,
    images: [jewelryImages[4], jewelryImages[2]],
    category: "desi-elegance",
    stock: 30,
    isFeatured: true,
    tags: ["Under Rs. 100"],
    material: "Fashion alloy, enamel",
    weightGrams: 8
  },
  {
    id: "prod-colourblock",
    name: "Colourblock Bells",
    slug: "colourblock-bells",
    description: "Compact bell studs with a clean color-blocked finish.",
    price: 149,
    images: [jewelryImages[0], jewelryImages[4]],
    category: "desi-elegance",
    stock: 16,
    isFeatured: true,
    tags: ["Everyday"],
    material: "Fashion alloy, enamel",
    weightGrams: 9
  },
  {
    id: "prod-divine",
    name: "Divine Dangles",
    slug: "divine-dangles",
    description: "Temple-inspired movement with a polished oxidised edge.",
    price: 199,
    images: [jewelryImages[1], jewelryImages[2]],
    category: "oxidised-affairs",
    stock: 12,
    isFeatured: true,
    tags: ["Temple"],
    material: "Oxidised alloy",
    weightGrams: 14
  },
  {
    id: "prod-indus",
    name: "Indus Peacock Drops",
    slug: "indus-peacock-drops",
    description: "Peacock forms with a small, bright profile for daily wear.",
    price: 99,
    images: [jewelryImages[2], jewelryImages[3]],
    category: "oxidised-affairs",
    stock: 18,
    isFeatured: true,
    tags: ["Under Rs. 100"],
    material: "Oxidised alloy",
    weightGrams: 10
  },
  {
    id: "prod-boho-bloom",
    name: "Mini Boho Bloom",
    slug: "mini-boho-bloom",
    description: "Tiny floral studs with boho warmth and simple styling.",
    price: 99,
    images: [jewelryImages[3], jewelryImages[1]],
    category: "desi-elegance",
    stock: 25,
    isFeatured: false,
    tags: ["Mini"],
    material: "Fashion alloy",
    weightGrams: 7
  },
  {
    id: "prod-aparna",
    name: "Aparna Jhumka",
    slug: "aparna-jhumka",
    description: "A fuller jhumka silhouette for sarees, lehengas, and big days.",
    price: 249,
    comparePrice: 299,
    images: [jewelryImages[4], jewelryImages[0]],
    category: "desi-elegance",
    stock: 9,
    isFeatured: false,
    tags: ["Statement"],
    material: "Fashion alloy, ghungroo detail",
    weightGrams: 19
  }
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return products.filter((product) => product.category === slug);
}
