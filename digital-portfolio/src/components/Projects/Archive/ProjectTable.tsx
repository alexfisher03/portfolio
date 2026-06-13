import { motion } from "motion/react"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import type { ProjectRecord } from "../../../content/portfolio"

type Props = {
  projects: ProjectRecord[]
}

export default function ProjectTable({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" as const }}
      className="overflow-x-auto"
    >
      <table className="w-full min-w-[720px] table-auto border-collapse">
        <thead>
          <tr className="border-b border-[var(--line)] text-left">
            <th className="py-4 pr-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Year</th>
            <th className="py-4 pr-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Project</th>
            <th className="hidden py-4 pr-6 text-xs uppercase tracking-[0.18em] text-[var(--muted)] lg:table-cell">Stack</th>
            <th className="py-4 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Link</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={`${project.year}-${project.title}`} className="border-b border-[var(--line)] align-top last:border-b-0">
              <td className="py-5 pr-6 text-sm text-[var(--muted)]">{project.year}</td>
              <td className="py-5 pr-6">
                <p className="text-sm font-medium text-[var(--ink)]">{project.title}</p>
                {project.description ? <p className="mt-2 max-w-xl text-sm leading-7 text-[var(--muted)]">{project.description}</p> : null}
              </td>
              <td className="hidden py-5 pr-6 text-sm leading-7 text-[var(--muted)] lg:table-cell">
                {project.stack.join(" / ")}
              </td>
              <td className="py-5 text-sm">
                {project.linkHref ? (
                  <a
                    href={project.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--muted)] hover:text-[var(--ink)]"
                  >
                    {project.linkLabel ?? "Open"}
                    <ArrowOutwardIcon fontSize="inherit" />
                  </a>
                ) : (
                  <span className="text-[var(--muted)]">{project.linkLabel ?? project.statusLabel ?? "-"}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  )
}
