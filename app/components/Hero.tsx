export default function Hero() {
    return (
        <section className="relative h-[70vh] w-full overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=2070&auto=format&fit=crop"
          alt="Cake Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity/40"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Cake Bundles
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">Beautifully curated cake and flower bundles for every occasion.</p>
          <button className="bg-white text-black px-6 py-3 text-sm uppercase tracking-wider hover:bg-gray-200 transition">
            Shop Now
            </button>
            </div>

            </section>
    )
}