import { notFound } from "next/navigation"

const products = [
  {
    slug: "strawberry-cake-bundle",
    name: "Strawberry Cake Bundle",
    description: "Beautiful strawberry cake bundle for gifting."
  },
  {
    slug: "chocolate-flower-set",
    name: "Chocolate Flower Set",
    description: "Chocolate cake with elegant flowers."
  },
  {
    slug: "classic-celebration-bundle",
    name: "Classic Celebration Bundle",
    description: "Perfect bundle for celebrations."
  }
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug)

  if (!product) return notFound()

  return (
    <main className="max-w-5xl mx-auto px-8 py-20">
      <h1 className="text-4xl font-serif mb-6">{product.name}</h1>

      <p className="text-gray-600">
        {product.description}
      </p>
    </main>
  )
}