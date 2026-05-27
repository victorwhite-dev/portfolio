import { Link } from "react-router-dom"
import { ExternalLink, ArrowLeft, Bot } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Navigation } from "@/components/sections/Navigation"
import { Footer } from "@/components/sections/Footer"
import { projects, type Project, type ProjectCategory } from "@/data/projects"
import { telegramBots, type TelegramBot } from "@/data/telegramBots"

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/30 hover:border-primary/20 transition-all duration-300">
      <div className="relative overflow-hidden aspect-video bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs bg-secondary/80 text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>

        <Button
          size="sm"
          variant="outline"
          className="w-full border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all"
          asChild
        >
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="size-3.5 mr-1.5" />
            View Site
          </a>
        </Button>
      </div>
    </div>
  )
}

function CategoryGrid({
  category,
  label,
  subtitle,
}: {
  category: ProjectCategory
  label: string
  subtitle: string
}) {
  const filtered = projects.filter((p) => p.category === category)
  if (filtered.length === 0) return null

  return (
    <div>
      <div className="mb-8">
        <h3 className="text-xl font-bold text-foreground">{label}</h3>
        <p className="text-sm text-muted-foreground mt-0.5">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

function BotCard({ bot }: { bot: TelegramBot }) {
  return (
    <div className="group rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/30 hover:border-primary/20 transition-all duration-300">
      {/* Chat mockup header */}
      <div className="h-48 bg-gradient-to-br from-primary/15 to-primary/5 flex flex-col overflow-hidden">
        {/* Mini Telegram header bar */}
        <div className="h-8 shrink-0 bg-primary/20 border-b border-primary/10 flex items-center gap-2 px-3">
          <div className="size-4 rounded-full bg-primary/50 flex items-center justify-center">
            <Bot className="size-2.5 text-primary-foreground" />
          </div>
          <span className="text-[10px] font-semibold text-foreground/70 truncate">{bot.title}</span>
          <span className="ml-auto size-1.5 rounded-full bg-green-500" />
        </div>

        {/* Messages */}
        <div className="flex-1 flex flex-col justify-end gap-2 px-3 py-2.5">
          {/* User message */}
          <div
            className="flex justify-end"
            style={{ animation: "chat-msg-in 0.35s ease-out 0.3s both" }}
          >
            <div className="max-w-[82%] rounded-2xl rounded-tr-sm bg-primary px-2.5 py-1.5">
              <p className="text-[10px] text-primary-foreground leading-snug">{bot.chat.user}</p>
            </div>
          </div>

          {/* Typing + bot message share the same slot to prevent layout shift */}
          <div className="relative min-h-[44px]">
            {/* Typing indicator */}
            <div
              className="absolute bottom-0 left-0 flex items-center gap-1 bg-card/90 rounded-2xl rounded-tl-sm px-3 py-2.5 shadow-sm"
              style={{ animation: "chat-msg-in 0.35s ease-out 0.9s both, chat-msg-out 0.25s ease-out 1.8s forwards" }}
            >
              <span className="size-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="size-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="size-1.5 rounded-full bg-muted-foreground/50 animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>

            {/* Bot message */}
            <div
              className="absolute bottom-0 left-0 max-w-[82%]"
              style={{ animation: "chat-msg-in 0.35s ease-out 2.0s both" }}
            >
              <div className="rounded-2xl rounded-tl-sm bg-card/90 shadow-sm px-2.5 py-1.5">
                <p className="text-[10px] text-foreground leading-snug">{bot.chat.bot}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {bot.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {bot.description}
        </p>

        <ul className="mb-4 space-y-1">
          {bot.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="mt-1 size-1.5 rounded-full bg-primary/60 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {bot.techStack.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs bg-secondary/80 text-muted-foreground">
              {tech}
            </Badge>
          ))}
        </div>

        <Button
          size="sm"
          variant="outline"
          className="w-full border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all"
          asChild
        >
          <a href={bot.botUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="size-3.5 mr-1.5" />
            Open in Telegram
          </a>
        </Button>
      </div>
    </div>
  )
}

function BotGrid() {
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-xl font-bold text-foreground">Telegram Bots</h3>
        <p className="text-sm text-muted-foreground mt-0.5">Custom bots for automation, support & productivity</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {telegramBots.map((bot) => (
          <BotCard key={bot.id} bot={bot} />
        ))}
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <div className="min-h-svh bg-background text-foreground antialiased">
      <Navigation />

      <main className="pt-24 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-muted-foreground hover:text-foreground -ml-2"
              asChild
            >
              <Link to="/">
                <ArrowLeft className="size-4" />
                Back to Home
              </Link>
            </Button>
          </div>

          <div className="mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              All Projects
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-foreground tracking-tight">
              Portfolio
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl text-lg leading-relaxed">
              Every project I have shipped — client WordPress builds and personal modern-stack applications.
            </p>
          </div>

          <div className="space-y-20">
            <CategoryGrid
              category="wordpress"
              label="WordPress Projects"
              subtitle="Client sites built with WordPress & WooCommerce"
            />
            <Separator />
            <CategoryGrid
              category="modern"
              label="Modern Stack"
              subtitle="Personal projects exploring React, Node.js & TypeScript"
            />
            <Separator />
            <BotGrid />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
