import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-darker pt-16 grid-bg">
      {/* Floating code elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 text-primary font-mono text-sm">{"<code>"}</div>
        <div className="absolute top-40 right-20 text-primary font-mono text-sm">{"const dev = true;"}</div>
        <div className="absolute bottom-40 left-20 text-secondary font-mono text-sm">{"// building..."}</div>
        <div className="absolute bottom-20 right-10 text-primary font-mono text-sm">{"</code>"}</div>
        <div className="absolute top-1/3 left-1/4 text-muted font-mono text-xs">{"function create() {}"}</div>
        <div className="absolute top-1/2 right-1/4 text-muted font-mono text-xs">{"import { skills } from './me'"}</div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Terminal-style intro */}
        <div className="mb-8">
          <span className="text-muted font-mono text-sm">
            {">"} <span className="text-primary">whoami</span>
          </span>
        </div>

        {/* Name with glow effect */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
          <span className="text-light">Daiki</span>{" "}
          <span className="text-primary glow-text">Tadokoro</span>
        </h1>

        {/* Title */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="w-3 h-3 bg-primary animate-pulse"></span>
          <p className="text-xl md:text-2xl font-mono text-muted uppercase tracking-widest">
            Fullstack Engineer
          </p>
        </div>

        {/* Description */}
        <div className="bg-dark/80 border border-gray-800 p-6 mb-10 max-w-2xl mx-auto">
          <p className="text-muted font-mono text-sm md:text-base leading-relaxed">
            <span className="text-secondary">$</span> コードを書く。問題を解く。プロダクトを創る。
            <span className="animate-blink">_</span>
          </p>
        </div>

        {/* Tech stack badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["TypeScript", "React", "Node.js", "Go", "AWS"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 border border-gray-700 text-xs font-mono text-muted hover:border-primary hover:text-primary transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact" className="btn-primary">
            Contact_
          </Link>
          <Link href="#portfolio" className="btn-outline">
            View_Works
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center text-muted font-mono text-xs">
          <span className="mb-2">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
