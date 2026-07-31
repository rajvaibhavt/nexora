function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

        <a
          href="#home"
          className="text-xl font-bold text-text-primary"
        >
          Nex<span className="text-primary">ora</span>
        </a>

        <p className="text-sm text-text-secondary">
          © 2026 Nexora. Built with React and Tailwind CSS.
        </p>

      </div>
    </footer>
  );
}

export default Footer;