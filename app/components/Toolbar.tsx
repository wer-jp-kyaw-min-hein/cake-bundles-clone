export default function Toolbar() {
    return (
        <div className="max-w-7xl mx-auto px-8 py-8 flex items-center justify-between">

        {/* Left side */}
          {/* Left side */}
      <div className="flex items-center gap-6 text-sm text-gray-600">
        <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:border-black transition">
          ☰ <span>Show filters</span>
        </button>
        <span>8 products</span>
      </div>

        {/* Right side */}
        <div className="flex items-center gap-3 text-sm text-gray-600">
            <span>Sort by</span>
            <select className="border border-gray-300 px-3 py-2 rounded-full hover:border-black transition">
                <option value="popularity">Popularity</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
            </select>
        </div>

        </div>
    )
}