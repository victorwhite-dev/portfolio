import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send, GitBranch, Mail, CircleCheck as CheckCircle2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const FORMSPREE_URL = import.meta.env.VITE_FORMSPREE_URL as string

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof schema>

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    const res = await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    })

    if (res.ok) {
      setSubmitted(true)
      reset()
      toast.success("Message sent! I'll get back to you soon.")
    } else {
      toast.error("Something went wrong, please try again")
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Let's Build Something Together
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Have a project in mind, or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl border border-primary/30 bg-primary/10 p-10 text-center h-full flex flex-col items-center justify-center gap-4">
                <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="size-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Thanks for reaching out. I'll get back to you as soon as possible.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 border-primary/30 hover:border-primary/50 hover:bg-primary/5 hover:text-foreground"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl border border-border bg-card p-8 space-y-5"
              >
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground/80">
                    Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-secondary/50 border-border focus-visible:border-primary/50 focus-visible:ring-primary/20 placeholder:text-muted-foreground/50"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground/80">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="bg-secondary/50 border-border focus-visible:border-primary/50 focus-visible:ring-primary/20 placeholder:text-muted-foreground/50"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground/80">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    className="bg-secondary/50 border-border focus-visible:border-primary/50 focus-visible:ring-primary/20 placeholder:text-muted-foreground/50 resize-none"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="size-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="size-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-5">
                Connect
              </h3>
              <div className="space-y-3">
                <a
                  href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="size-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Mail className="size-4 text-primary" />
                  </div>
                  {import.meta.env.VITE_CONTACT_EMAIL}
                </a>
                <a
                  href={import.meta.env.VITE_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="size-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <GitBranch className="size-4 text-primary" />
                  </div>
                  {(import.meta.env.VITE_GITHUB_URL as string).replace("https://", "")}
                </a>

                <a
                  href={import.meta.env.VITE_TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="size-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <svg
                      className="size-4 text-primary"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  {(import.meta.env.VITE_TELEGRAM_URL as string).replace("https://", "")}
                </a>
                {/* <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="size-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Link className="size-4 text-primary" />
                  </div>
                  linkedin.com/in/victor
                </a> */}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-3">
                Availability
              </h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">Available for freelance</span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Available for freelance projects. Response time within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
