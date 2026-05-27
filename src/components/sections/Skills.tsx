import { Badge } from "@/components/ui/badge"
import { useInView } from "@/hooks/use-in-view"

const established = [
  { label: "WordPress", icon: "🌐" },
  { label: "HTML", icon: "📄" },
  { label: "CSS", icon: "🎨" },
  { label: "JavaScript", icon: "⚡" },
]

const learning = [
  { label: "React", icon: "⚛️" },
  { label: "Node.js", icon: "🟢" },
  { label: "TypeScript", icon: "🔷" },
  { label: "Tailwind CSS", icon: "💨" },
]

export function Skills() {
  const [headingRef, headingVisible] = useInView<HTMLDivElement>()
  const [establishedRef, establishedVisible] = useInView<HTMLDivElement>()
  const [learningRef, learningVisible] = useInView<HTMLDivElement>()

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 relative z-10">
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            My Tech Toolkit
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Solid foundations with WordPress and core web technologies, actively expanding
            into modern fullstack development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Established */}
          <div
            ref={establishedRef}
            style={{ transitionDelay: establishedVisible ? "100ms" : "0ms" }}
            className={`rounded-2xl border border-border bg-card p-8 transition-all duration-700 ease-out ${
              establishedVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="size-2 rounded-full bg-primary" />
              <h3 className="text-lg font-semibold text-foreground">Established</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {established.map((skill, i) => (
                <div
                  key={skill.label}
                  style={{ transitionDelay: establishedVisible ? `${150 + i * 75}ms` : "0ms" }}
                  className={`group flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2.5 hover:bg-primary/20 hover:border-primary/40 transition-all duration-500 ease-out cursor-default ${
                    establishedVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="text-base leading-none">{skill.icon}</span>
                  <span className="text-sm font-medium text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Currently Learning */}
          <div
            ref={learningRef}
            style={{ transitionDelay: learningVisible ? "200ms" : "0ms" }}
            className={`rounded-2xl border border-border bg-card p-8 transition-all duration-700 ease-out ${
              learningVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="size-2 rounded-full bg-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground">Currently Learning</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {learning.map((skill, i) => (
                <div
                  key={skill.label}
                  style={{ transitionDelay: learningVisible ? `${250 + i * 75}ms` : "0ms" }}
                  className={`group flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-4 py-2.5 hover:bg-secondary hover:border-primary/20 transition-all duration-500 ease-out cursor-default ${
                    learningVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="text-base leading-none">{skill.icon}</span>
                  <span className="text-sm font-medium text-foreground/80">{skill.label}</span>
                  <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-muted-foreground/30 text-muted-foreground ml-1">
                    learning
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
