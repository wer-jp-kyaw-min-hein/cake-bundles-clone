"use client"

import { useMemo, useState, useCallback } from "react"
import ProductCard from "./ProductCard"
import Toolbar from "./Toolbar"
import { PRODUCTS } from "@/lib/products"


type SortOption = "best-selling" | "newest"


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