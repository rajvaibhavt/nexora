function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 px-6 py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 rounded-3xl border border-border bg-surface/50 p-8 sm:p-10 lg:grid-cols-2 lg:p-14">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-light">
              About Nexora
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Product discovery made
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}simple.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-text-secondary">
              Nexora is a modern product discovery experience built around
              fast browsing, simple search, and a clean interface that works
              across devices.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-background/60 p-6">
              <p className="text-3xl font-bold text-primary-light">100%</p>
              <p className="mt-2 text-sm text-text-secondary">
                Responsive experience
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background/60 p-6">
              <p className="text-3xl font-bold text-accent">Live</p>
              <p className="mt-2 text-sm text-text-secondary">
                REST API data
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background/60 p-6 sm:col-span-2">
              <p className="font-semibold text-text-primary">
                Built for a smooth browsing experience
              </p>

              <p className="mt-2 text-sm leading-6 text-text-secondary">
                Responsive layouts, loading states, error handling, search,
                and accessible form validation come together in one interface.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;