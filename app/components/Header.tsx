export default function Header() {
    return (
      <header className="border-b border-[color:var(--line)]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-serif">
            fieldnotes
          </div>
  
          {/* Navigation */}
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide text-gray-600">
            <a href="#">Same Day Pickup/Delivery</a>
            <a href="#">CNY 2026</a>
            <a href="#">VDAY 2026</a>
            <a href="#">Shop</a>
            <a href="#">Gifting</a>
            <a href="#">Promotions</a>
            <a href="#">Loyalty</a>
          </nav>
  
          {/* Icons */}
          <div className="flex gap-4 text-gray-600">
            <span>🔍</span>
            <span>👤</span>
            <span>🛒</span>
          </div>
  
        </div>
      </header>
    )
  }
  