import { useInView } from "@/hooks/use-in-view"

const frontend = [
  { label: "WordPress", icon: "🌐" },
  { label: "HTML", icon: "📄" },
  { label: "CSS", icon: "🎨" },
  { label: "JavaScript", icon: "⚡" },
  { label: "React", icon: "⚛️" },
  { label: "Tailwind CSS", icon: "💨" },
]

const backend = [
  { label: "Node.js", icon: "🟢" },
  { label: "TypeScript", icon: "🔷" },
  { label: "Telegram Bots", icon: "🤖" },
  { label: "REST APIs", icon: "🔗" },
]

export function Skills() {
  const [headingRef, headingVisible] = useInView<HTMLDivElement>()
  const [frontendRef, frontendVisible] = useInView<HTMLDivElement>()
  const [backendRef, backendVisible] = useInView<HTMLDivElement>()

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
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
            Tools and technologies I build with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend */}
          <div
            ref={frontendRef}
            style={{ transitionDelay: frontendVisible ? "100ms" : "0ms" }}
            className={`rounded-2xl border border-border bg-card p-8 transition-all duration-700 ease-out ${
              frontendVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="size-2 rounded-full bg-primary" />
              <h3 className="text-lg font-semibold text-foreground">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {frontend.map((skill, i) => (
                <div
                  key={skill.label}
                  style={{ transitionDelay: frontendVisible ? `${150 + i * 75}ms` : "0ms" }}
                  className={`group flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2.5 hover:bg-primary/20 hover:border-primary/40 transition-all duration-500 ease-out cursor-default ${
                    frontendVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="text-base leading-none">{skill.icon}</span>
                  <span className="text-sm font-medium text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div
            ref={backendRef}
            style={{ transitionDelay: backendVisible ? "200ms" : "0ms" }}
            className={`rounded-2xl border border-border bg-card p-8 transition-all duration-700 ease-out ${
              backendVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="size-2 rounded-full bg-primary" />
              <h3 className="text-lg font-semibold text-foreground">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {backend.map((skill, i) => (
                <div
                  key={skill.label}
                  style={{ transitionDelay: backendVisible ? `${250 + i * 75}ms` : "0ms" }}
                  className={`group flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/10 px-4 py-2.5 hover:bg-primary/20 hover:border-primary/40 transition-all duration-500 ease-out cursor-default ${
                    backendVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <span className="text-base leading-none">{skill.icon}</span>
                  <span className="text-sm font-medium text-foreground">{skill.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}