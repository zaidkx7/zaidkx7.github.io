import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold">
              Muhammad<span className="text-primary">Zaid</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#about"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
          } py-4 bg-background/90 backdrop-blur-lg`}
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-md transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
