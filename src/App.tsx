import { Navigation } from "@/components/sections/Navigation"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Portfolio } from "@/components/sections/Portfolio"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"
import { Toaster } from "@/components/ui/sonner"

export default function App() {
  return (
    <div className="relative min-h-svh bg-background text-foreground antialiased overflow-x-hidden">

      {/* Global background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary/6 rounded-full blur-2xl" />
        <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-primary/5 rounded-full blur-2xl" />
      </div>

      {/* Global grid overlay */}
      <div
        className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.97 0.005 240) 1px, transparent 1px), linear-gradient(90deg, oklch(0.97 0.005 240) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  )
}
