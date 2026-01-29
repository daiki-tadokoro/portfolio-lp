"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Works", href: "#portfolio" },
  { label: "Contact", href: "https://x.com/messages/compose?recipient_id=daiki_tadokoro", external: true },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darker/95 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-mono font-bold text-primary hover:glow-text transition-all"
          >
            {"<DY />"}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              "external" in item && item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary font-mono text-sm transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-muted hover:text-primary font-mono text-sm transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-muted hover:text-primary font-mono"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "[x]" : "[=]"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {navItems.map((item) =>
              "external" in item && item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-2 text-muted hover:text-primary font-mono text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {">"} {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-muted hover:text-primary font-mono text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {">"} {item.label}
                </Link>
              )
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
