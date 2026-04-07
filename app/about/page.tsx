export const metadata = {
  title: "About Us | The Bake Studio",
  description: "Learn more about The Bake Studio and our cake bundle services.",
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-serif">About Us</h1>

      <div className="mt-8 space-y-6 text-sm leading-7 text-gray-700">
        <p>
          The Bake Studio creates thoughtful cake and gift bundles designed for
          celebrations, special occasions, and meaningful moments.
        </p>

        <p>
          We focus on elegant presentation, quality ingredients, and a warm gifting
          experience that feels personal and memorable.
        </p>

        <p>
          Our goal is to make it easy for customers to choose beautiful bundles for
          birthdays, anniversaries, and everyday celebrations.
        </p>
      </div>
    </main>
  )
}