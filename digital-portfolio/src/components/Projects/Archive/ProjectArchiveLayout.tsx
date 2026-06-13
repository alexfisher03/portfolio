import { motion } from "motion/react"
import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ProjectTable from "./ProjectTable"
import { profile, projects } from "../../../content/portfolio"

export default function ProjectArchiveLayout() {
  const [query, setQuery] = useState("")

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return projects
    }

    return projects.filter((project) => {
      const haystack = [
        project.year,
        project.title,
        project.description ?? "",
        project.linkLabel ?? "",
        project.statusLabel ?? "",
        ...project.stack,
      ]
        .join(" ")
        .toLowerCase()

      return haystack.includes(normalizedQuery)
    })
  }, [query])

  return (
    <div className="relative z-10 mx-auto max-w-4xl px-6 pb-20 pt-10 text-[var(--ink)]">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" as const }}
        className="border-b border-[var(--line)] pb-10"
      >
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)]">
          <ArrowBackIcon fontSize="inherit" />
          Back to {profile.name}
        </Link>

        <h1 className="mt-8 text-2xl font-semibold">Project archive</h1>

        <div className="mt-8">
          <label className="block">
            <span className="sr-only">Search projects</span>
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, stack, year, or status"
              className="w-full border-b border-[var(--line)] bg-transparent px-0 py-3 text-sm text-[var(--ink)] outline-none"
            />
          </label>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.35, ease: "easeOut" as const }}
        className="pt-6"
      >
        <ProjectTable projects={filteredProjects} />
      </motion.section>
    </div>
  )
}
