import { useState } from "react";
import { Link } from "react-router-dom";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        
        <a href="#home" className="text-2xl font-bold tracking-tight text-text-primary">
          Nex<span className="text-primary">ora</span>
        </a>

        
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#home"
            className="text-sm font-medium text-text-secondary transition hover:text-text-primary"
          >
            Home
          </a>

          <a
            href="#features"
            className="text-sm font-medium text-text-secondary transition hover:text-text-primary"
          >
            Features
          </a>

          <a
            href="#explore"
            className="text-sm font-medium text-text-secondary transition hover:text-text-primary"
          >
            Explore
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-text-secondary transition hover:text-text-primary"
          >
            About
          </a>
        </div>

    
        <Link
          to="/login"
          className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-light md:block"
        >
          Sign In
        </Link>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="text-2xl text-text-primary md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      
      {menuOpen && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <a href="#home" className="text-text-secondary">
              Home
            </a>

            <a href="#features" className="text-text-secondary">
              Features
            </a>

            <a href="#explore" className="text-text-secondary">
              Explore
            </a>

            <a href="#about" className="text-text-secondary">
              About
            </a>

            <Link
              to="/login"
              className="rounded-lg bg-primary px-5 py-3 text-center font-semibold text-white"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;