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
    <div className="min-h-svh bg-background text-foreground antialiased">
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
