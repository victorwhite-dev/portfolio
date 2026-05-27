# Portfolio — Project Guide

## Tech Stack

| Layer | Tool | Version |
|-------|------|---------|
| Framework | React | 19 |
| Language | TypeScript | 5.9 (strict) |
| Build | Vite | 7 |
| Styling | Tailwind CSS | 4 (via `@tailwindcss/vite`) |
| UI components | shadcn/ui (Radix UI) | — |
| Icons | lucide-react | — |
| Routing | react-router-dom | 7 |
| Animations | tw-animate-css + native CSS transitions | — |
| Notifications | sonner (Toaster) | — |
| Theme | next-themes (dark/light, key: `portfolio-theme`) | — |

## Folder Structure

```
src/
  App.tsx                    # Root layout: Nav → sections → Footer
  main.tsx                   # Entry: BrowserRouter, Routes, theme init
  index.css                  # Tailwind + tw-animate-css imports, CSS variables

  components/
    sections/                # Full-page sections (one file = one section)
      Navigation.tsx
      Hero.tsx
      About.tsx
      Skills.tsx
      Portfolio.tsx
      Contact.tsx
      Footer.tsx
    ui/                      # shadcn/ui primitives — do not edit directly
    mode-toggle.tsx          # Dark/light switch
    theme-provider.tsx       # next-themes wrapper

  pages/
    Portfolio.tsx            # /portfolio route — full project list

  data/
    projects.ts              # Project data: type Project, type ProjectCategory

  hooks/
    use-mobile.ts            # Detects mobile viewport (< 768px)
    use-in-view.ts           # IntersectionObserver hook for scroll animations

  lib/
    utils.ts                 # cn() — clsx + tailwind-merge

public/                      # Static images (.webp)
```

## Routing

Two routes, defined in `main.tsx`:

- `/` → `App.tsx` (single-page layout with all sections)
- `/portfolio` → `src/pages/Portfolio.tsx` (full project list)

## Coding Rules

**TypeScript**
- Strict mode enabled: `strict`, `noUnusedLocals`, `noUnusedParameters`
- Use `type` imports for types: `import { type Project } from "@/data/projects"`
- Path alias `@/` maps to `src/` — always use it instead of relative paths

**Components**
- Named exports for all section and UI components (`export function About()`)
- Default export only for page-level components (`export default function App()`)
- Helper components (e.g. `ProjectCard`, `CategoryGrid`) are defined in the same file as their parent section and not exported
- No React import needed — `react-jsx` transform is configured

**Styling**
- All styling via Tailwind utility classes — no separate CSS files per component
- Use `cn()` from `@/lib/utils` when class names are conditional
- Responsive breakpoints: `sm:` (640px), `md:` (768px), `lg:` (1024px)
- Design tokens from CSS variables (`text-foreground`, `bg-card`, `text-primary`, etc.) — never hardcode colors
- Hover effects use `transition-all duration-200/300/500` consistently

**Animations**
- Scroll animations: `useInView` hook from `@/hooks/use-in-view` + conditional Tailwind classes
- Pattern: start `opacity-0 translate-y-6`, transition to `opacity-100 translate-y-0`
- Stagger via inline `style={{ transitionDelay: "Xms" }}`
- Continuous animations: `animate-bounce`, `animate-pulse` (Tailwind built-ins)

**Data**
- Static content (project list, skill arrays) lives outside JSX — defined as `const` arrays at the top of the file or in `src/data/`

**Images**
- Format: `.webp` only
- Stored in `public/` and referenced as `/filename.webp`

## Naming Conventions

| Thing | Convention | Example |
|-------|-----------|---------|
| Section components | PascalCase, noun | `Hero`, `About`, `Skills` |
| Page components | PascalCase + `Page` suffix | `PortfolioPage` |
| Helper components (local) | PascalCase, descriptive | `ProjectCard`, `CategoryGrid` |
| Hooks | camelCase, `use` prefix | `useInView`, `useMobile` |
| Data files | camelCase | `projects.ts` |
| Types | PascalCase | `Project`, `ProjectCategory` |
| CSS ids for sections | kebab-case | `id="skills"`, `id="about"` |
| Image files | kebab-case | `about-developer.webp` |

## Common Patterns

**Section wrapper:**
```tsx
<section id="section-name" className="py-24 sm:py-32 relative">
  <div className="mx-auto max-w-6xl px-6">
    {/* Section label */}
    <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
      Label
    </p>
    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Title</h2>
  </div>
</section>
```

**Scroll animation:**
```tsx
const [ref, isVisible] = useInView<HTMLDivElement>()

<div
  ref={ref}
  className={`transition-all duration-700 ease-out ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`}
/>
```

**Card with hover:**
```tsx
<div className="rounded-2xl border border-border bg-card p-8 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/30 transition-all duration-300">
```
