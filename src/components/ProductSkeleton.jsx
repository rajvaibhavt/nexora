function ProductSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface/50">
      <div className="h-52 animate-pulse bg-surface-light" />

      <div className="p-5">
        <div className="h-5 w-24 animate-pulse rounded bg-surface-light" />

        <div className="mt-5 h-6 w-3/4 animate-pulse rounded bg-surface-light" />

        <div className="mt-4 h-4 w-full animate-pulse rounded bg-surface-light" />

        <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-surface-light" />

        <div className="mt-6 h-6 w-20 animate-pulse rounded bg-surface-light" />
      </div>
    </div>
  );
}

export default ProductSkeleton;