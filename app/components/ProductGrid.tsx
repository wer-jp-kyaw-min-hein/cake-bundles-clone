"use client"

import { useState } from "react";
import ProductCard from "./ProductCard"

export default function ProductGrid() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const products = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800&auto=format&fit=crop",
            availableDate: "Mar 14, 2026",
            tag: "Next day delivery",
            name: "Strawberry Cake Bundle",
            save: "Save 3%"
        },
        {
            id: 2,
            name: "Chocolate Flower Set",
            image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800&auto=format&fit=crop",
            availableDate: "Mar 14, 2026",
            tag: "2 days notice",
            save: "Save 3%",
        },
        {
            id: 3,
            name: "Classic Celebration Bundle",
            image: "https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=800&auto=format&fit=crop",
            availableDate: "Mar 14, 2026",
            tag: "Next day delivery",
            save: "Save 5%",
        },
        {
            id: 4,
            name: "Berry Cream Gift Set",
            image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800&auto=format&fit=crop",
            availableDate: "Mar 14, 2026",
            tag: "Popular",
            save: "Save 3%",
        },
            {
                id: 5,
                name: "Elegant Floral Cake",
                image: "https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=800&auto=format&fit=crop",
                availableDate: "Mar 14, 2026",
                tag: "2 days notice",
                save: "Save 4%",
            },
            {
                id: 6,
                name: "Chocolate Dream Bundle",
                image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800&auto=format&fit=crop",
                availableDate: "Mar 14, 2026",
                tag: "Next day delivery",
                save: "Save 5%",
            },
            {
                id: 7,
                name: "Pastel Party Bundle",
                image: "https://images.unsplash.com/photo-1614707267537-2a3b0b3c7a7b?q=80&w=1200&auto=format&fit=crop",
                availableDate: "Mar 14, 2026",
                tag: "Limited",
                save: "Save 3%",
            },
            {
                id: 8,
                name: "Red Velvet Gift Bundle",
                image: "https://images.unsplash.com/photo-1616690710400-a16d146927c5?q=80&w=1200&auto=format&fit=crop",
                availableDate: "Mar 14, 2026",
                tag: "Best seller",
                save: "Save 6%",
            },
            {
                id: 9,
                name: "Red Velvet Gift Bundle",
                image: "https://images.unsplash.com/photo-1616690710400-a16d146927c5?q=80&w=1200&auto=format&fit=crop",
                availableDate: "Mar 14, 2026",
                tag: "Best seller",
                save: "Save 6%",
            },
            {
                id: 10,
                name: "Red Velvet Gift Bundle",
                image: "https://images.unsplash.com/photo-1616690710400-a16d146927c5?q=80&w=1200&auto=format&fit=crop",
                availableDate: "Mar 14, 2026",
                tag: "Best seller",
                save: "Save 6%",
            },
    ]

        return (
            <section id="cake-bundles" className="py-16 px-8 max-w-7xl mx-auto">

                <h2 className="text-4xl font-serif mb-10 text-center">Cake Bundles</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard
                            availableDate={product.availableDate}
                            isOpen={selectedId === product.id}
                            onSelect={() => 
                                setSelectedId((prev) => (prev === product.id ? null : product.id))}
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            tag={product.tag}
                            save={product.save} price={""}                        />
                    ))}
                    </div>

            </section>
        )
}