import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProjectTable, { type ProjectRow } from "./ProjectTable";

const archiveData : ProjectRow[] = [
  { year: "2025", title: "Quantum Vision", stack: ["Svelte", "SvelteKit", "Typescript", "Tailwind", "Svelte Cubed"], linkHref: "https://qvisionsim.com", linkLabel: "qvisionsim.com" },
  { year: "2025", title: "Swamp Subleasing", stack: ["React", "Next.js", "Tailwind", "PostgreSQL"], linkHref: "https://www.swampsubleasing.com", linkLabel: "swampsubleasing.com" },
  { year: "2025", title: "ACM Connect - Discord Internship Bot", stack: ["Python", "Discord.py", "AWS"], linkHref: "https://acm-connect-website-git-feature-tandev-jasons-projects-bbe11fb6.vercel.app/", linkLabel: "acm-connect-website" },
  { year: "2024", title: "UF ACM Administrative Dashboard", stack: ["React", "Firebase", "Tailwind", "Material UI"] },
  { year: "2024", title: "UF ACM API Workshop Template", stack: ["Python", "Flask", "Javascript", "HTML"], linkHref: "https://github.com/alexfisher03/ACM_API_Workshop"},
  { year: "2024", title: "UF ACM Fullstack Workshop Template", stack: ["React", "NextJs", "Supabase", "PostgreSQL"], linkHref: "https://github.com/alexfisher03/ACM_Fullstack_Template" },
  { year: "2024", title: "UF ACM Admin SDK", stack: ["Javascript", "Firebase", "Node.js", "Bash"]},
  { year: "2024", title: "Craigslist CarCache", stack: ["C++", "React", "Tailwind"], linkHref: "https://github.com/alexfisher03/COP3530_project3/tree/main", linkLabel: "Github Repo" },
  { year: "2024", title: "GatorSync - Centralized UF Student Org Scheduler", stack: ["React", "Django", "Tailwind", "PostgreSQL"], linkHref: "https://github.com/alexfisher03/CEN3031_Group4", linkLabel: "Github Repo" },
  { year: "2024", title: "UF ACM Web Portfolio Workshop 2", stack: ["React", "Tailwind"], linkHref: "https://github.com/alexfisher03/ACMWebPortfolio2", linkLabel: "Github Repo" },
  { year: "2024", title: "UF ACM Web Portfolio Workshop", stack: ["HTML", "CSS", "JavaScript"], linkHref: "https://github.com/alexfisher03/ACMWebPortfolio", linkLabel: "Github Repo" },
  { year: "2024", title: "UF ACM Site", stack: ["React", "Firebase", "Framer Motion"], linkHref: "https://uf-acm.com", linkLabel: "uf-acm.com" },
  { year: "2024", title: "Credit Spotter - AI Financial Chatbot", stack: ["React", "Node.js", "OpenAI API", "Tailwind"], linkHref: "https://github.com/alexfisher03/CFC_Hackathon2024", linkLabel: "Github Repo" },
  { year: "2024", title: "Minesweeper Game", stack: ["C++", "SFML"]},
  { year: "2023", title: "Barbell", stack: ["Django", "React", "Tailwind", "MySQL", "Nginx", "Docker", "Gunicorn", "DigitalOcean"], linkHref: "github.com/alexfisher03/Barbell", linkLabel: "Github Repo" },
  { year: "2023", title: "Sudoku Game", stack: ["Python"] }

]

export default function ProjectArchiveLayout() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.45, ease: "easeOut" as const }}
      className="relative overflow-hidden px-6 py-8 sm:px-12 sm:py-16"
    >
      <div className="flex justify-start text-xl sm:text-2xl text-white opacity-50 mt-4 sm:mt-8">
        <div className="flex">
          <Link to="/" className="flex items-center group">
            <span className="mr-2 transform transition-transform duration-200 -translate-y-0.5 group-hover:-translate-x-2">
              <ArrowBackIcon fontSize="small" />
            </span>
            <p className="group-hover:border-b-1 border-blue-400/60 transition-colors duration-200">Alexander Fisher</p>
          </Link>
        </div>
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white opacity-80 mt-4 sm:mt-8">ALL PROJECTS</h2>
      <ProjectTable projects={archiveData} />
    </motion.section>
  
  )
}
