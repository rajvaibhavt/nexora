import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="px-6 pb-20 pt-10 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-primary/30 bg-surface px-6 py-14 text-center sm:px-12">

        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

        <div className="relative">
          <h2 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Ready to explore?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-text-secondary">
            Discover products, search instantly, and experience Nexora across
            any device.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#explore"
              className="rounded-xl bg-primary px-7 py-3.5 font-semibold text-white transition hover:bg-primary-light"
            >
              Explore Products
            </a>

            <Link
              to="/login"
              className="rounded-xl border border-border bg-background/60 px-7 py-3.5 font-semibold text-text-primary transition hover:bg-surface-light"
            >
              Sign In
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CTA;