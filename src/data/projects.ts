// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD A NEW PROJECT
// ─────────────────────────────────────────────────────────────────────────────
// 1. Copy one of the objects below and paste it at the END of the array.
// 2. Fill in each field:
//    • id          – unique string, e.g. "my-new-project"
//    • title       – display name shown on the card
//    • description – one or two sentences describing the project
//    • image       – URL to a screenshot. Use a local path like "/my-image.webp"
//                    (put the file in /public/) or any absolute https:// URL.
//    • liveUrl     – link to the live site; use "#" as a placeholder
//    • techStack   – array of technology labels shown as badges
//    • category    – "wordpress" for WP/WooCommerce work, "modern" for React/Node etc.
//
// The first 3 projects total (across all categories) are shown by default.
// All remaining projects appear when the user clicks "View More".
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectCategory = "wordpress" | "modern"

export interface Project {
  id: string
  title: string
  description: string
  image: string
  liveUrl: string
  techStack: string[]
  category: ProjectCategory
}

export const projects: Project[] = [
  // ── WordPress Projects ───────────────────────────────────────────────────
  {
    id: "apex-consulting",
    title: "Apex Consulting Group",
    description:
      "Corporate website with custom theme, contact forms, and SEO optimization for a mid-size consulting firm.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    liveUrl: "#",
    techStack: ["WordPress", "PHP", "CSS", "ACF"],
    category: "wordpress",
  },
  {
    id: "urban-style-shop",
    title: "Urban Style Shop",
    description:
      "Full WooCommerce store with custom product pages, size guides, and Stripe payment integration.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    liveUrl: "#",
    techStack: ["WordPress", "WooCommerce", "CSS", "JavaScript"],
    category: "wordpress",
  },
  {
    id: "bloom-wellness",
    title: "Bloom Wellness Studio",
    description:
      "Booking-enabled website for a wellness studio with class schedules, instructor profiles, and newsletter integration.",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80",
    liveUrl: "#",
    techStack: ["WordPress", "Elementor", "PHP", "WooCommerce"],
    category: "wordpress",
  },
  {
    id: "peak-realty",
    title: "Peak Realty",
    description:
      "Real-estate agency site with MLS property listings, advanced search filters, and lead capture forms.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    liveUrl: "#",
    techStack: ["WordPress", "PHP", "ACF", "REST API"],
    category: "wordpress",
  },

  // ── Modern Stack Projects ────────────────────────────────────────────────
  {
    id: "taskflow-dashboard",
    title: "TaskFlow Dashboard",
    description:
      "React-based task management app with real-time updates, drag-and-drop boards, and data visualization.",
    image: "/projects/taskflow.png",
    liveUrl: "https://taskflow-kbovahr5g-victorwhitedev-4890s-projects.vercel.app/",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Recharts"],
    category: "modern",
  },
  {
    id: "devapi-docs",
    title: "DevAPI Docs",
    description:
      "Node.js REST API with a full documentation site and interactive endpoint explorer built with OpenAPI.",
    image: "/projects/apidocs.png",
    liveUrl: "https://devapi-docs-9elhedgni-victorwhitedev-4890s-projects.vercel.app/",
    techStack: ["Node.js", "Express", "REST API", "JavaScript"],
    category: "modern",
  },
  {
    id: "finance-tracker",
    title: "Finance Tracker",
    description:
      "Personal finance SaaS with budget categories, spending trends, and monthly summary emails via cron jobs.",
    image: "/projects/finance.png",
    liveUrl: "https://finance-tracker-e4ik-4v8kqxvsj-victorwhitedev-4890s-projects.vercel.app/",
    techStack: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    category: "modern",
  },
]
