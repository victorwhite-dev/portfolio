import { ArrowDown, GitBranch } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center overflow-hidden"
    >

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 py-24 sm:py-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">

          {/* Photo — below text on mobile, left on desktop */}
          <div className="order-2 md:order-1 flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-primary/15 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-border/60 shadow-2xl shadow-black/40 w-64 sm:w-72 md:w-full max-w-xs lg:max-w-sm">
                <img
                  src="/photo.jpg"
                  alt="Victor"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
              </div>
              {/* Accent dot */}
              <div className="absolute -bottom-3 -right-3 size-20 rounded-full bg-primary/20 blur-xl" />
            </div>
          </div>

          {/* Text — above photo on mobile, right on desktop */}
          <div className="order-1 md:order-2 text-center md:text-left">
            {/* Tag line */}
            <div className="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-4 py-1.5 text-xs font-medium text-green-400 mb-8 backdrop-blur-sm">
              <span className="size-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for freelance projects
            </div>

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-none mb-4">
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
            <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed">
              I build fast, modern websites — from WordPress customization to React &amp; Node.js web apps — and create Telegram bots for automation, bookings, and support. Every project delivered clean, on time, and ready to scale.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-10">
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
            <div className="flex items-center justify-center md:justify-start gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <GitBranch className="size-4" />
                GitHub
              </a>
            </div>
          </div>

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
