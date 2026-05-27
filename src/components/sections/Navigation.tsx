import * as React from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { Menu, X, Code as Code2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

type NavLink =
  | { label: string; hash: string; route?: never }
  | { label: string; route: string; hash?: never }

const navLinks: NavLink[] = [
  { label: "About", hash: "#about" },
  { label: "Skills", hash: "#skills" },
  { label: "Portfolio", route: "/portfolio" },
  { label: "Contact", hash: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToHash = (hash: string) => {
    if (location.pathname !== "/") {
      navigate("/")
      setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" }), 100)
    } else {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDesktopHashClick = (e: React.MouseEvent, hash: string) => {
    e.preventDefault()
    scrollToHash(hash)
  }

  const handleMobileHashClick = (hash: string) => {
    setMenuOpen(false)
    setTimeout(() => scrollToHash(hash), 150)
  }

  const linkClass = "px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-white/5 cursor-pointer"
  const mobileLinkClass = "px-4 py-4 text-lg font-medium text-left text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors cursor-pointer"

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-lg tracking-tight text-foreground hover:text-primary transition-colors"
          >
            <Code2 className="size-5 text-primary" />
            Victor 
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.route ? (
                <Link key={link.route} to={link.route} className={linkClass}>
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.hash}
                  href={link.hash}
                  onClick={(e) => handleDesktopHashClick(e, link.hash!)}
                  className={linkClass}
                >
                  {link.label}
                </a>
              )
            )}
            <ModeToggle />
            <Button
              size="sm"
              className="ml-2 bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => scrollToHash("#contact")}
            >
              Hire Me
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-1 md:hidden">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      {menuOpen && (
        <div
          style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 9999 }}
          className="bg-background md:hidden flex flex-col"
        >
          <div className="h-16 shrink-0 flex items-center justify-between px-6 border-b border-border">
            <span className="flex items-center gap-2 font-bold text-lg tracking-tight text-foreground">
              <Code2 className="size-5 text-primary" />
              Victor
            </span>
            <Button variant="ghost" size="icon" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <X className="size-5" />
            </Button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-6">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.route ? (
                  <Link
                    key={link.route}
                    to={link.route}
                    onClick={() => setMenuOpen(false)}
                    className={mobileLinkClass}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <button
                    key={link.hash}
                    type="button"
                    onClick={() => handleMobileHashClick(link.hash!)}
                    className={mobileLinkClass}
                  >
                    {link.label}
                  </button>
                )
              )}
              <Button
                size="sm"
                className="mt-4 ml-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => handleMobileHashClick("#contact")}
              >
                Hire Me
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
