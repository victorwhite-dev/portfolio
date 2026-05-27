import { Code as Code2, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Code2 className="size-4 text-primary" />
          <span>
            Built by{" "}
            <span className="text-foreground font-medium">Victor White</span> · 2026
          </span>
        </div>

        <p className="text-xs text-muted-foreground">
          React · TypeScript · Tailwind CSS
        </p>

        <Button
          variant="ghost"
          size="icon-sm"
          onClick={scrollToTop}
          aria-label="Back to top"
          className="text-muted-foreground hover:text-foreground hover:bg-white/5"
        >
          <ArrowUp className="size-4" />
        </Button>
      </div>
    </footer>
  )
}
