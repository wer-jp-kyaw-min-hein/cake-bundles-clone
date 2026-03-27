"use client"

type SortOption = "best-selling" | "newest"

interface ToolbarProps {
  productCount: number
  filters: {
    nextDayDelivery: boolean
    giftReady: boolean
    onSale: boolean
  }
  onFilterChange: (name: "nextDayDelivery" | "giftReady" | "onSale") => void
  sortBy: SortOption
  onSortChange: (value: SortOption) => void
}

export default function Toolbar({
  productCount,
  filters,
  onFilterChange,
  sortBy,
  onSortChange,
}: ToolbarProps) {
  return (
    <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
        <span className="font-medium text-black">{productCount} products</span>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.nextDayDelivery}
            onChange={() => onFilterChange("nextDayDelivery")}
          />
          Next day delivery
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.giftReady}
            onChange={() => onFilterChange("giftReady")}
          />
          Gift ready
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={filters.onSale}
            onChange={() => onFilterChange("onSale")}
          />
          On sale
        </label>
      </div>

      <div className="flex items-center gap-3 text-sm text-gray-600">
        <span>Sort by</span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="rounded-md border border-gray-300 bg-white px-3 py-2 font-medium text-black focus:outline-none"
        >
          <option value="best-selling">Best selling</option>
          <option value="newest">Newest</option>
        </select>
      </div>
    </div>
  )
}