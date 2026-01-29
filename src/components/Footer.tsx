import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darker border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="font-mono text-primary font-bold mb-2">{"<DT />"}</div>
            <p className="text-muted font-mono text-sm">
              Fullstack Engineer
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-6">
            <Link href="#about" className="text-muted hover:text-primary font-mono text-sm transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-muted hover:text-primary font-mono text-sm transition-colors">
              Skills
            </Link>
            <Link href="#portfolio" className="text-muted hover:text-primary font-mono text-sm transition-colors">
              Works
            </Link>
            <Link href="#contact" className="text-muted hover:text-primary font-mono text-sm transition-colors">
              Contact
            </Link>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://github.com/daiki-tadokoro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary font-mono text-sm transition-colors"
            >
              [gh]
            </a>
            <a
              href="https://x.com/daiki_tadokoro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary font-mono text-sm transition-colors"
            >
              [x]
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-muted hover:text-primary font-mono text-sm transition-colors"
            >
              [mail]
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-muted font-mono text-xs">
            <span className="text-secondary">$</span> echo &quot;© {currentYear} Daiki Tadokoro&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
