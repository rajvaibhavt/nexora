function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-8"
    >
      
      <div className="absolute left-1/2 top-20 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 py-20 lg:grid-cols-2">

        
        <div>
          <div className="mb-6 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary-light">
            ✦ Discover what's next
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
            Build ideas that
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              move forward.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
            Nexora brings discovery, creativity, and technology together in
            one modern experience designed to help you explore what comes next.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#explore"
              className="rounded-xl bg-primary px-7 py-3.5 text-center font-semibold text-white transition hover:bg-primary-light"
            >
              Start Exploring →
            </a>

            <a
              href="#features"
              className="rounded-xl border border-border bg-surface/60 px-7 py-3.5 text-center font-semibold text-text-primary transition hover:bg-surface-light"
            >
              Learn More
            </a>
          </div>
        </div>

        
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative rounded-3xl border border-border bg-surface/60 p-5 shadow-2xl backdrop-blur-xl">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-error" />
              <span className="h-3 w-3 rounded-full bg-accent" />
              <span className="h-3 w-3 rounded-full bg-success" />
            </div>

            <div className="rounded-2xl border border-border bg-background/80 p-6">
              <p className="text-sm text-text-secondary">
                Explore Nexora
              </p>

              <h2 className="mt-2 text-2xl font-semibold text-text-primary">
                Discover something new.
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-2xl font-bold text-primary-light">
                    100+
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Resources
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-surface p-4">
                  <p className="text-2xl font-bold text-accent">
                    24/7
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    Explore
                  </p>
                </div>
              </div>

              <div className="mt-4 h-24 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;