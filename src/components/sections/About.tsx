import { CircleCheck as CheckCircle2 } from "lucide-react"

const highlights = [
  "3+ years building WordPress sites for clients",
  "React, Node.js & TypeScript web apps",
  "Focused on clean code and performance",
  "Telegram bots for business automation",
]

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
              From WordPress to the{" "}
              <span className="text-primary">Modern Web Stack</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I started my journey building websites with WordPress, learning the ropes of themes, plugins, and delivering real results for clients.
              </p>
              <p>
                Over time, I fell in love with the process — the problem-solving, the craft, the moment something clicks into place. I build with React, Node.js, and TypeScript to create fast, dynamic applications — and Telegram bots for automation, bookings, and client communication.
              </p>
              <p>
                Every project is a chance to grow, and I bring the same care and precision from my WordPress roots to everything I build.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="size-4 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-2xl shadow-black/30">
              <img
                src="/about-developer.webp"
                alt="Developer workspace"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10 blur-sm" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/8 rounded-2xl -z-10 blur-sm" />

            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 bg-card/90 backdrop-blur-sm border border-border rounded-xl px-4 py-3 shadow-lg">
              <p className="text-2xl font-bold text-foreground">3+</p>
              <p className="text-xs text-muted-foreground">Years of experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
