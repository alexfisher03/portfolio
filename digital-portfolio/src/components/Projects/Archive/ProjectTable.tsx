import { motion } from "motion/react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useViewport } from "../../../context/ViewportContext";

export type ProjectRow = { 
  year: string 
  title: string 
  stack: string[] 
  linkHref?: string 
  linkLabel?: string 
}

type Props = { projects: ProjectRow[] }

export default function ProjectTable({ projects }: Props) {
  const { isMobile } = useViewport()

  return (
    <motion.section
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.45, ease: "easeOut" as const }}
      className="relative overflow-hidden py-8 sm:py-16"
    >
    <div className="w-full border-collapse text-left">
        <table className="table-auto w-full">
            <thead className="sticky top-0 text-sm sm:text-base text-white/80 z-10 border-b border-slate-300/50 px-6 py-5 backdrop-blur">
                <tr>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Year</th>
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Project</th>
                    {isMobile ? null : (
                      <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Stack</th>
                    )}
                    <th className="py-4 pr-8 text-sm font-semibold text-slate-200">Link</th>
                </tr>
            </thead>
            <tbody> 
            {projects.map((p) => ( // map rows
              <tr key={`${p.year}-${p.title}`} className="border-b border-slate-300/30 last:border-none group"> 
                <td className="py-4 pr-4 align-top text-sm text-slate-300">{p.year}</td> 
                <td className="py-4 pr-4 align-top text-xs sm:text-base font-semibold leading-snug text-slate-100">{p.title}</td> 
                {isMobile ? null : (
                  <td className="py-4 pr-4 align-top"> 
                    <ul className="flex flex-wrap gap-2"> 
                      {p.stack.map((t) => ( // map tech
                        <li // pill
                          key={t} 
                          className="px-2 py-1 rounded-full text-xs text-[#FF13F0]/80 bg-[#ff13ef37]" // pink pill style
                        > 
                          {t} 
                        </li>
                      ))} 
                    </ul>
                  </td>
                )}
                {p.linkHref ? (
                    <td className="py-4 pr-0 align-top"> 
                  <a
                    href={p.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-xs sm:text-base items-center group/link text-slate-200 hover:text-[#FF13F0]/80 transition-colors duration-200"
                  >
                    {p.linkLabel ?? "view project"}
                    <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1 group/link-hover:translate-x-1">
                      <ArrowOutwardIcon fontSize="small"/>
                    </span>
                  </a>
                </td>
                ) : (
                  null
                )}
              </tr>
            ))}
          </tbody> 
        </table>
    </div>
    </motion.section>
  )
}
