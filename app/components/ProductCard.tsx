interface ProductCardProps {
    image: string;
    name: string;
    price: string
    tag?: string
    save?: string
}

export default function ProductCard({ image, name, price, tag, save }: ProductCardProps) {
    return (
        <div className="group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition duration-300">
            {/* Image */}
            <div className="relative h-80 w-full">
                <img
                src={image}
                alt={name}
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />
            {/* soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex gap-2">
                {tag && (
                    <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-white/70 backdrop-blur border border-white/60">
                        {tag}
                    </span>
                )}
                {save && (
                    <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-rose-200/80 backdrop-blur border border-rose-200">
                        {save}
                    </span>
                )}
            </div>
            </div>
            
            {/* Text */}
            <div className="p-5">
                <h3 className="text-base font-semibold">{name}</h3>
                <p className="mt-2 text-sm text-gray-600">Curated bundle for gifting</p>
                <p className="mt-4 text-lg font-bold">{price}</p>
            </div>
        </div>
    )
}