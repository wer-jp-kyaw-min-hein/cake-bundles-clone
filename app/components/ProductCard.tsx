interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  tag?: string;
  save?: string;
  availableDate: string;
  isOpen: boolean;
  onSelect: () => void;
}

export default function ProductCard({
  image,
  name,
  price,
  tag,
  save,
  availableDate,
  isOpen,
  onSelect,
}: ProductCardProps) {
  return (
    <div className="rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition duration-300">
      <button
        type="button"
        onClick={onSelect}
        className="w-full text-left"
        aria-expanded={isOpen}
      >
        <div className="relative h-80 w-full">
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute top-4 left-4 flex gap-2">
            {tag && (
              <span className="px-3 py-1 rounded-full text-xs uppercase tracking-wider bg-white/70 backdrop-blur border border-black/10">
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

        <div className="p-5">
          <h3 className="text-base font-semibold">{name}</h3>
          <p className="mt-2 text-sm text-gray-600">Curated bundle for gifting</p>
          <p className="mt-3 font-semibold">{price}</p>
        </div>
      </button>

      {isOpen && (
        <div className="px-5 pb-5 text-sm text-emerald-700">
          Available date: <span className="font-semibold">{availableDate}</span>
        </div>
      )}
    </div>
  );
}