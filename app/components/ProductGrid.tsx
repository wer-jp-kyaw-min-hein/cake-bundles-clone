import ProductCard from "./ProductCard"

export default function ProductGrid() {

    const products = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800&auto=format&fit=crop",
            name: "Strawberry Cake Bundle",
            price: "$58"
        },
        {
            id: 2,
            name: "Chocolate Flower Set",
            price: "$64",
            image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=800&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Classic Celebration Bundle",
            price: "$72",
            image: "https://images.unsplash.com/photo-1542396601-dca920ea2807?q=80&w=800&auto=format&fit=crop",
        }
    ]

        return (
            <section className="py-16 px-8 max-w-7xl mx-auto">

                <h2 className="text-3xl font-bold mb-8">Our Best Sellers</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                    </div>

            </section>
        )
}