import { Link } from "react-router-dom"
import { ExternalLink, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects, type Project } from "@/data/projects"

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

export function Portfolio() {
  const preview = projects.slice(0, 2)

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Selected Work
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A mix of client WordPress projects and personal builds using modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {preview.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            variant="outline"
            className="gap-2 border-border hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all"
            asChild
          >
            <Link to="/portfolio">
              See More ({projects.length} projects total)
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
