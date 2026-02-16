interface ProductCardProps {
    image: string;
    name: string;
    price: string
}

export default function ProductCard({ image, name, price }: ProductCardProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            
            <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover"
            />

            <div className="p-4">
                <h3 className="text-lg font-medium mb-2">{name}</h3>
                <p className="text-gray-600">{price}</p>
            </div>
        </div>
    )
}