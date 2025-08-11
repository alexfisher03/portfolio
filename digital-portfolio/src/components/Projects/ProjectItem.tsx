import type { Variants } from "motion/react"
import { motion } from "motion/react"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.8, delay: 0.3, ease: "easeOut" as const } }
}

type Props = {
  title: string
  description: string
  link: string
  imageUrl: string
  altUrl?: string
  technologies?: string[]
}

export default function ProjectItem({ title, description, link, imageUrl, altUrl, technologies }: Props) {
  return (
    <motion.li variants={itemVariants} className="group group-hover/projects:opacity-20 hover:opacity-100 transition-opacity duration-200 w-full">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block overflow-hidden rounded-[24px] border border-white/15 backdrop-blur-sm shadow-[0_10px_20px_0_rgba(0,0,0,0.35)] shadow-red-500/10 transition-shadow ease-linear duration-200"
      >
        <div className="relative aspect-[16/9]">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-300 ${altUrl ? "group-hover:opacity-0" : "opacity-100"}`}
          />

          {altUrl && (
            <img
              src={altUrl}
              alt={`${title} preview`}
              loading="lazy"
              className="absolute inset-0 z-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}

          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-transparent backdrop-blur-sm sm:backdrop-blur-none" />

          <div className="absolute inset-x-0 bottom-0 z-20 p-4 sm:p-6 sm:backdrop-blur-[1px]">
            <div className="rounded-sm p-2 sm:p-3 transition-colors duration-150 ">
              <div className="flex">
                <h3 className="text-white text-lg font-semibold group-hover:text-[#ff3232] transition-colors duration-200">{title}</h3>
                <div className="ml-1 text-white group-hover:text-[#ff3232] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                  <ArrowOutwardIcon fontSize="small" />
                </div>
              </div>
              <p className="mt-1 text-sm text-white/75 line-clamp-3">{description}</p>
              {technologies && technologies.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {technologies.map((t) => (
                  <li
                    key={t}
                    className="px-2 py-1 rounded-full text-[10px] sm:text-xs text-[#ff3232)]/80 bg-[#ff32323e] border border-white/10 hover:scale-105 hover:translate-y-0.5 transform transition-transform ease-in-out duration-200"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
            </div>
          </div>
        </div>

      </a>
    </motion.li>
  )
}
