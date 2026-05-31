import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

function getInitialDark(): boolean {
  return localStorage.getItem("portfolio-theme") !== "light"
}

export function ModeToggle() {
  const [isDark, setIsDark] = React.useState<boolean>(getInitialDark)

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("portfolio-theme", next ? "dark" : "light")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="text-muted-foreground hover:text-foreground"
    >
      {isDark ? (
        <Sun className="size-[1.1rem]" />
      ) : (
        <Moon className="size-[1.1rem]" />
      )}
    </Button>
  )
}
