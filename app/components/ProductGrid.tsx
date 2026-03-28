"use client"

import { useMemo, useState, useCallback } from "react"
import ProductCard from "./ProductCard"
import Toolbar from "./Toolbar"

type Product = {
  id: number
  slug: string
  image: string
  tag: string
  name: string
  save?: string
  giftReady: boolean
  createdAt: string
}

type SortOption = "best-selling" | "newest"

const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "strawberry-cake-bundle",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800&auto=format&fit=crop",
    tag: "Next day delivery",
    name: "Strawberry Cake Bundle",
    save: "Save 3%",
    giftReady: true,
    createdAt: "2026-03-10",
  },
  {
    id: 2,
    slug: "chocolate-flower-set",
    name: "Chocolate Flower Set",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800&auto=format&fit=crop",
    tag: "2 days notice",
    save: "Save 3%",
    giftReady: true,
    createdAt: "2026-03-09",
  },
  {
    id: 3,
    slug: "classic-celebration-bundle",
    name: "Classic Celebration Bundle",
    image:
      "https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=800&auto=format&fit=crop",
    tag: "Next day delivery",
    save: "Save 5%",
    giftReady: false,
    createdAt: "2026-03-08",
  },
  {
    id: 4,
    name: "Berry Cream Gift Set",
    slug: "berry-cream-gift-set",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800&auto=format&fit=crop",
    tag: "Popular",
    save: "Save 3%",
    giftReady: true,
    createdAt: "2026-03-07",
  },
  {
    id: 5,
    name: "Elegant Floral Cake",
    slug: "elegant-floral-cake",
    image:
      "https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=800&auto=format&fit=crop",
    tag: "2 days notice",
    save: "Save 4%",
    giftReady: true,
    createdAt: "2026-03-06",
  },
  {
    id: 6,
    name: "Chocolate Dream Bundle",
    slug: "chocolate-dream-bundle",
    image:
      "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800&auto=format&fit=crop",
    tag: "Next day delivery",
    save: "Save 5%",
    giftReady: false,
    createdAt: "2026-03-05",
  },
  {
    id: 7,
    name: "Pastel Party Bundle",
    slug: "pastel-party-bundle",
    image:
      "https://images.unsplash.com/photo-1614707267537-2a3b0b3c7a7b?q=80&w=1200&auto=format&fit=crop",
    tag: "Limited",
    save: "Save 3%",
    giftReady: true,
    createdAt: "2026-03-04",
  },
  {
    id: 8,
    name: "Red Velvet Gift Bundle",
    slug: "red-velvet-gift-bundle-1",
    image:
      "https://images.unsplash.com/photo-1616690710400-a16d146927c5?q=80&w=1200&auto=format&fit=crop",
    tag: "Best seller",
    save: "Save 6%",
    giftReady: true,
    createdAt: "2026-03-03",
  },
  {
    id: 9,
    name: "Red Velvet Gift Bundle",
    slug: "red-velvet-gift-bundle-2",
    image:
      "https://images.unsplash.com/photo-1616690710400-a16d146927c5?q=80&w=1200&auto=format&fit=crop",
    tag: "Best seller",
    save: "Save 6%",
    giftReady: false,
    createdAt: "2026-03-02",
  },
  {
    id: 10,
    name: "Red Velvet Gift Bundle",
    slug: "red-velvet-gift-bundle-3",
    image:
      "https://images.unsplash.com/photo-1616690710400-a16d146927c5?q=80&w=1200&auto=format&fit=crop",
    tag: "Best seller",
    save: "Save 6%",
    giftReady: true,
    createdAt: "2026-03-01",
  },
]

export default function ProductGrid() {
  const [filters, setFilters] = useState({
    nextDayDelivery: false,
    giftReady: false,
    onSale: false,
  })

  const [sortBy, setSortBy] = useState<SortOption>("best-selling")

  const filteredAndSortedProducts = useMemo(() => {
    const result = PRODUCTS.filter((product) => {
      if (filters.nextDayDelivery && product.tag !== "Next day delivery") {
        return false
      }

      if (filters.giftReady && !product.giftReady) {
        return false
      }

      if (filters.onSale && !product.save) {
        return false
      }

      return true
    })

    if (sortBy === "newest") {
      result.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    }

    return result
  }, [filters, sortBy])

  const handleFilterChange = useCallback(
    (name: "nextDayDelivery" | "giftReady" | "onSale") => {
      setFilters((prev) => ({
        ...prev,
        [name]: !prev[name],
      }))
    },
    []
  )

  return (
    <section id="cake-bundles" className="mx-auto max-w-7xl px-8 py-16">
      <h2 className="mb-2 text-center text-4xl font-serif">Cake Bundles</h2>

      <Toolbar
        productCount={filteredAndSortedProducts.length}
        filters={filters}
        onFilterChange={handleFilterChange}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            slug={product.slug}
            image={product.image}
            name={product.name}
            tag={product.tag}
            save={product.save}
          />
        ))}
      </div>
    </section>
  )
}