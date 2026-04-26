import { motion } from "motion/react"
import ProjectItem from "./ProjectItem"
import qvBg from "../../assets/qv-bg.png"
import bava from "../../assets/bava.png"
import qvAlt from "../../assets/qv-alt.gif"
import amtalThumb from "../../assets/amtal.png"
import amtalHover from "../../assets/amtal.gif"
import bavaAlt from "../../assets/budg.png"
import shig from "../../assets/shig.png"
import shigAlt from "../../assets/shig.gif"
import {Link} from "react-router-dom"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const projects = [
  {
    title: "Shigawire",
    description: "Desktop HTTP recording and replay proxy with automatic redaction, packaged with Tauri and backed by Go/Fiber, reverse-proxy capture, and SQLite.",
    link: "https://github.com/alexfisher03/shigawire-dev",
    imageUrl: shig,
    altUrl: shigAlt,
    technologies: ["Tauri", "Next.js", "React", "Tailwind", "Go", "Fiber", "SQLite"]
  },
  {
    title: "Budgeted Reversible Computation on And-Inverter Graphs",
    description:
      "Published at IEEE DCAS 2026: developed and evaluated schedulers for reversible computation on AIGs under strict ancilla budgets, spanning store-all baselines through exact-optimal Dijkstra search, with budget-vs-cost analysis.",
    imageUrl: bava,
    altUrl: bavaAlt,
    imageClassName: "scale-115 object-center",
    altImageClassName: "scale-110 object-center",
    technologies: ["C++", "AIG", "Reversible Scheduling", "Dijkstra", "Ancilla Budgeting"],
  },
  {
    title: "Amtal - HDL Parsing and Verification Pipeline",
    description:
      "End-to-end toolchain from SystemVerilog RTL and stage-scoped rules to solver-ready Boolean constraints: lex/parse, binding, Boolean IR, AIG, CNF, Z3 SAT, and witness reports mapped back to signals—built for explainable debug.",
    imageUrl: amtalThumb,
    altUrl: amtalHover,
    technologies: [
      "SystemVerilog",
      "C++",
      "Parsing",
      "AIG",
      "CNF",
      "Z3",
      "SAT",
    ],
  },
  {
    title: "Quantum Vision",
    description: "Educational and interactive web application visualizing various quantum systems",
    link: "https://qvisionsim.com",
    imageUrl: qvBg,
    altUrl: qvAlt,
    technologies: ["Svelte", "SvelteKit", "Typescript", "Tailwind", "Svelte Cubed"]
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
      <h2 className="text-xl sm:text-2xl text-white opacity-50 mb-4 sm:mb-6">PROJECTS</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 group/projects">
        {projects.map((p) => (
          <ProjectItem key={p.title} {...p} />
        ))}
      </ul>
      <div className="flex justify-start text-xl sm:text-2xl text-white opacity-50 mt-8 sm:mt-16">
        <div className="flex">
          <Link to="/archive" className="flex items-center group">
            <p className="group-hover:border-b-1 border-blue-400/60 transition-colors duration-200">VIEW ALL PROJECTS</p>
            <span className="ml-2 transform transition-transform duration-200 -translate-y-0.5 group-hover:translate-x-2">
              <ArrowForwardIcon fontSize="small" />
            </span>
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
