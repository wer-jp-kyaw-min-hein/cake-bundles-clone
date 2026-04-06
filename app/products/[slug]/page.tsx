import { notFound } from "next/navigation"
import { PRODUCTS } from "@/lib/products"


export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find(p => p.slug === params.slug)

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