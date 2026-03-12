import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <div className="text-3xl font-serif tracking-tight">
          The Bake Studio
        </div>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-gray-600">
          <a href="#faq" className="hover:text-black transition">
            FAQ
          </a>
          <Link href="/login" className="hover:text-black transition">
            Login
          </Link>
          <Link href="/signup" className="hover:text-black transition">
            Sign Up
          </Link>
        </nav>

        <div className="flex gap-5 text-gray-600 text-lg">
          <span>🔍</span>
          <span>👤</span>
          <span>🛒</span>
        </div>
      </div>
    </header>
  )
}