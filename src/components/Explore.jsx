import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./ProductSkeleton";

function Explore() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  async function loadProducts() {
    try {
      setLoading(true);
      setError("");

      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError("We couldn't load the products. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="explore"
      className="scroll-mt-20 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
            Explore
          </p>

          <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
            Discover something
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}new.
            </span>
          </h2>

          <p className="mt-5 text-text-secondary">
            Explore products fetched in real time from a public REST API.
          </p>
        </div>

        
        {!loading && !error && (
          <div className="mx-auto mt-10 max-w-xl">
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-text-secondary">
                ⌕
              </span>

              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-border bg-surface/60 py-3.5 pl-12 pr-4 text-text-primary outline-none transition placeholder:text-text-secondary focus:border-primary"
              />
            </div>
          </div>
        )}

        
        {error && (
          <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-error/30 bg-error/10 p-6 text-center">
            <p className="text-error">
              {error}
            </p>

            <button
              type="button"
              onClick={loadProducts}
              className="mt-4 rounded-lg bg-primary px-5 py-2.5 font-semibold text-white transition hover:bg-primary-light"
            >
              Try Again
            </button>
          </div>
        )}

        
        {loading && (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        )}

        
        {!loading && !error && (
          <>
            {filteredProducts.length > 0 ? (
              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-16 text-center">
                <p className="text-xl font-semibold text-text-primary">
                  No products found
                </p>

                <p className="mt-2 text-text-secondary">
                  Try searching for something else.
                </p>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  );
}

export default Explore;