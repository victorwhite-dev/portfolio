import { ArrowDown, GitBranch, Link } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-center overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary/6 rounded-full blur-2xl" />
        <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-primary/5 rounded-full blur-2xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0.005 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.005 240) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Tag line */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary mb-8 backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          Available for freelance projects
        </div>

        {/* Name */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground leading-none mb-4">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
            Victor
          </span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl font-medium text-muted-foreground mb-6">
          <span className="text-foreground/80">Fullstack Developer</span>
        </p>

        {/* Bio */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          I build fast, modern websites — from WordPress customization to React &amp; Node.js web apps — and create Telegram bots for automation, bookings, and support. Every project delivered clean, on time, and ready to scale.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg shadow-primary/20"
            onClick={() => scrollTo("#portfolio")}
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-border hover:border-primary/50 hover:bg-primary/5 hover:text-foreground font-semibold px-8"
            onClick={() => scrollTo("#contact")}
          >
            Contact Me
          </Button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <GitBranch className="size-4" />
            GitHub
          </a>
          <span className="text-border">·</span>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Link className="size-4" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors animate-bounce cursor-pointer"
        aria-label="Scroll to about"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ArrowDown className="size-4" />
      </button>
    </section>
  )
}
