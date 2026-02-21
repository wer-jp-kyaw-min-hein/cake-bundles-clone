import Image from "next/image"

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">

      <Image
        src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=2070&auto=format&fit=crop"
        alt="Cake Banner"
        fill
        className="object-cover"
      />


        <div className="absolute inset-0 bg-rose-900/20"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mb-4">Cake Bundles
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">Beautifully curated cake and flower bundles for every occasion.</p>
          <button className="bg-white/80 text-black px-6 py-3 text-sm uppercase tracking-wider hover:bg-white transition rounded">
            Shop Now
            </button>
            </div>

            </section>
    )
}