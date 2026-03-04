function ProductCard({
  image,
  title,
  price,
  originalPrice,
  discount,
  labels = [],
  isCategory = false,
}) {
  const classname = isCategory
    ? "product_card relative w-full max-w-48 bg-white rounded-lg overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] m-1.5"
    : "product_card relative w-full max-w-52.5 bg-white rounded-lg overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]";

  return (
    <div className={classname}>
      {/* Image Container */}
      <div className="relative aspect-square bg-green-50 p-4">
        <img src={image} alt={title} className="w-full h-full object-contain" />

        {/* Product Labels */}
        {labels.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {labels.map((label, index) => (
              <div
                key={index}
                className="bg-green-600 text-white text-[10px] px-2 py-0.5 rounded-sm font-medium"
              >
                {label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3">
        {/* Title */}
        <h3 className="text-sm text-gray-800 line-clamp-2 mb-2 leading-snug min-h-10">
          {title}
        </h3>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          {/* Current Price */}
          <span className="text-green-500 font-bold text-lg">
            {price.toLocaleString("vi-VN")} ₫
          </span>

          {/* Discount Badge */}
          {discount && (
            <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded font-medium">
              -{discount}%
            </span>
          )}
        </div>

        {/* Original Price */}
        {originalPrice && (
          <div className="mt-1">
            <span className="text-gray-400 text-sm line-through">
              {originalPrice.toLocaleString("vi-VN")} ₫
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
