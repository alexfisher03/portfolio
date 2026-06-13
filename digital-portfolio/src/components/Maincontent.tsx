import { motion } from "motion/react"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import Backdrop from "./Backdrop/Backdrop"
import {
  backlogProjects,
  education,
  experiences,
  featuredProjects,
  profile,
  publications,
} from "../content/portfolio"
import { Link } from "react-router-dom"

const sectionAnimation = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.35, ease: "easeOut" as const },
}

export const Maincontent = () => {
  return (
    <div className="relative min-h-screen text-[var(--ink)]">
      <Backdrop />

      <header className="border-b border-[var(--line)] bg-[var(--bg)]">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-semibold tracking-[-0.03em] md:text-2xl">{profile.name}</h1>
            <p className="mt-1 text-base text-[var(--muted)] md:text-lg">{profile.role}</p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-[var(--muted)]">
            <a href="#experience" className="hover:text-[var(--ink)]">
              Experience
            </a>
            <a href="#projects" className="hover:text-[var(--ink)]">
              Projects
            </a>
            <a href="#publication" className="hover:text-[var(--ink)]">
              Publication
            </a>
            <a href="#archive" className="hover:text-[var(--ink)]">
              Archive
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-24 pt-12">
        <motion.section {...sectionAnimation} className="border-b border-[var(--line)] pb-12">
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Education</p>
              <div className="mt-4 space-y-4">
              {education.map((item) => (
                <div key={`${item.degree}-${item.school}`} className="border-l border-[var(--line)] pl-4">
                  <p className="text-base font-medium text-[var(--ink)]">{item.degree}</p>
                  <p className="mt-1 text-sm text-[var(--muted)]">{item.school}</p>
                </div>
              ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--ink)]"
                >
                  {link.label}
                  <ArrowOutwardIcon fontSize="inherit" />
                </a>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section {...sectionAnimation} id="experience" className="scroll-mt-20 border-b border-[var(--line)] py-12">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Experience</h2>
          <div className="mt-8 divide-y divide-[var(--line)]">
            {experiences.map((experience) => (
              <article key={`${experience.company}-${experience.title}`} className="grid gap-4 py-6 md:grid-cols-[11rem_1fr]">
                <p className="text-sm text-[var(--muted)]">{experience.date}</p>
                <div>
                  <h3 className="text-base font-semibold text-[var(--ink)]">{experience.title}</h3>
                  <p className="mt-1 text-sm text-[var(--muted-strong)]">
                    {experience.link ? (
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-[var(--ink)]"
                      >
                        {experience.company}
                        <ArrowOutwardIcon fontSize="inherit" />
                      </a>
                    ) : (
                      experience.company
                    )}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{experience.description}</p>
                  <p className="mt-3 text-xs leading-6 text-[var(--muted)]">{experience.technologies.join(" / ")}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...sectionAnimation} id="projects" className="scroll-mt-20 border-b border-[var(--line)] py-12">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Selected projects</h2>
          <div className="mt-8 divide-y divide-[var(--line)]">
            {featuredProjects.map((project) => (
              <article key={project.title} className="grid gap-4 py-6 md:grid-cols-[5rem_1fr]">
                <p className="text-sm text-[var(--muted)]">{project.year}</p>
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-[var(--ink)]">{project.title}</h3>
                    {project.linkHref ? (
                      <a
                        href={project.linkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-[var(--muted)] hover:text-[var(--ink)]"
                      >
                        {project.linkLabel ?? "Open"}
                        <ArrowOutwardIcon fontSize="inherit" />
                      </a>
                    ) : (
                      <span className="text-sm text-[var(--muted)]">{project.linkLabel ?? project.statusLabel ?? ""}</span>
                    )}
                  </div>
                  {project.description ? <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.description}</p> : null}
                  <p className="mt-3 text-xs leading-6 text-[var(--muted)]">{project.stack.join(" / ")}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...sectionAnimation} id="publication" className="scroll-mt-20 border-b border-[var(--line)] py-12">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Publication</h2>
          <div className="mt-8 space-y-6">
            {publications.map((publication) => (
              <article key={publication.title}>
                <div className="grid gap-4 md:grid-cols-[5rem_1fr]">
                  <p className="text-sm text-[var(--muted)]">{publication.date}</p>
                  <div>
                    <h3 className="text-base font-semibold text-[var(--ink)]">{publication.title}</h3>
                    <p className="mt-1 text-sm text-[var(--muted-strong)]">{publication.venue}</p>
                    <p className="mt-1 text-sm text-[var(--muted)]">{publication.authors}</p>
                    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{publication.description}</p>
                    <p className="mt-3 text-xs leading-6 text-[var(--muted)]">{publication.technologies.join(" / ")}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section {...sectionAnimation} id="archive" className="scroll-mt-20 py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-sm uppercase tracking-[0.2em] text-[var(--muted)]">Project archive</h2>
              <p className="mt-3 text-sm text-[var(--muted)]">{backlogProjects.length} additional projects.</p>
            </div>
            <Link to="/archive" className="text-sm text-[var(--muted)] hover:text-[var(--ink)]">
              View all projects
            </Link>
          </div>

          <div className="mt-8 divide-y divide-[var(--line)]">
            {backlogProjects.slice(0, 5).map((project) => (
              <div key={`${project.year}-${project.title}`} className="grid gap-4 py-4 md:grid-cols-[5rem_1fr]">
                <p className="text-sm text-[var(--muted)]">{project.year}</p>
                <div>
                  <h3 className="text-sm font-medium text-[var(--ink)]">{project.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-[var(--muted)]">{project.stack.join(" / ")}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  )
}
