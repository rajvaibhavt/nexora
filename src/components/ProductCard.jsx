function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface/50 transition duration-300 hover:-translate-y-1 hover:border-primary/50">

      
      <div className="flex h-52 items-center justify-center overflow-hidden bg-surface">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain p-4 transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium capitalize text-primary-light">
            {product.category}
          </span>

          <span className="text-sm text-text-secondary">
            ★ {product.rating}
          </span>
        </div>

        <h3 className="mt-4 line-clamp-1 text-lg font-semibold text-text-primary">
          {product.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-text-secondary">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xl font-bold text-text-primary">
            ${product.price}
          </p>

          <button
            type="button"
            className="text-sm font-semibold text-primary-light transition hover:text-primary"
          >
            View →
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;