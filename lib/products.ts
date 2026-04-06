export type Product = {
  id: number
  slug: string
  name: string
  description: string
  image: string
  tag?: string
  save?: string
  giftReady: boolean
  createdAt: string
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "strawberry-cake-bundle",
    name: "Strawberry Cake Bundle",
    description: "Beautiful strawberry cake bundle for gifting.",
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800&auto=format&fit=crop",
    tag: "Next day delivery",
    save: "Save 3%",
    giftReady: true,
    createdAt: "2026-03-10",
  },
  {
    id: 2,
    slug: "chocolate-flower-set",
    name: "Chocolate Flower Set",
    description: "Chocolate cake with elegant flowers.",
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800&auto=format&fit=crop",
    tag: "2 days notice",
    save: "Save 3%",
    giftReady: true,
    createdAt: "2026-03-09",
  },
]