const features = [
  {
    icon: "✦",
    title: "Discover",
    description:
      "Explore useful content through a clean and intuitive experience designed for effortless discovery.",
  },
  {
    icon: "⚡",
    title: "Fast Experience",
    description:
      "Built with modern technologies to deliver a fast, responsive, and seamless experience across devices.",
  },
  {
    icon: "◎",
    title: "Stay Connected",
    description:
      "Access everything through a simple interface designed around clarity, accessibility, and usability.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-20 px-6 py-24 sm:py-28 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
            Why Nexora
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
            Everything you need to
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}explore smarter.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-text-secondary sm:text-lg">
            A modern experience focused on simplicity, performance, and
            meaningful discovery.
          </p>
        </div>

        
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-border bg-surface/50 p-7 transition duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-surface"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-xl text-primary-light">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-text-primary">
                {feature.title}
              </h3>

              <p className="mt-3 leading-7 text-text-secondary">
                {feature.description}
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary-light">
                Learn more
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;