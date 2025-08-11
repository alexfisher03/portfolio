import { motion } from "motion/react"
import ProjectItem from "./ProjectItem"
import qvBg from "../../assets/qv-bg.png"
import qvAlt from "../../assets/qv-alt.gif"
import swampSubleasing from "../../assets/ss.png"
import ufACM from "../../assets/uf-acm.png"
import ufACMAlt from "../../assets/uf-acm-alt.gif"
import bbBg from "../../assets/bb-bg.png"

const projects = [
  {
    title: "Quantum Vision",
    description: "Educational and interactive web application visualizing various quantum systems",
    link: "https://qvisionsim.com",
    imageUrl: qvBg,
    altUrl: qvAlt,
    technologies: ["Svelte", "SvelteKit", "Typescript", "Tailwind", "Svelte Cubed"]
  },
  {
    title: "Swamp Subleasing",
    description: "Early contributor — Platform for UF students to list and find subleases all in one place",
    link: "https://www.swampsubleasing.com/",
    imageUrl: swampSubleasing,
    altUrl: undefined,
    technologies: ["React", "Next.js", "Tailwind", "PostgreSQL"]
  },
  {
    title: "UF ACM Main Website",
    description: "Redesign of UF ACM main website with new attendance and analytics features (500+ users)",
    link: "https://uf-acm.com",
    imageUrl: ufACM,
    altUrl: ufACMAlt,
    technologies: ["React", "Framer Motion", "Tailwind", "Firebase"]
  },
  {
    title: "Barbell",
    description: "Gym oriented social media web application for sharing workouts and progress",
    link: "https://github.com/alexfisher03/Barbell",
    imageUrl: bbBg,
    altUrl: undefined,
    technologies: ["Django", "React", "Tailwind", "MySQL", "Nginx", "Docker", "Gunicorn", "DigitalOcean"]
  }
]

export default function ProjectGrid() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.45, ease: "easeOut" as const }}
      className="relative overflow-hidden rounded-[32px] px-6 py-8 sm:px-12 sm:py-16"
    >
      <h2 className="text-base sm:text-2xl text-white/60 mb-4 sm:mb-6">PROJECTS</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 group/projects">
        {projects.map((p) => (
          <ProjectItem key={p.title} {...p} />
        ))}
      </ul>
    </motion.section>
  )
}
