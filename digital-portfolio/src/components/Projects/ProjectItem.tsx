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
  link?: string
  imageUrl: string
  altUrl?: string
  imageClassName?: string
  altImageClassName?: string
  technologies?: string[]
}

export default function ProjectItem({ title, description, link, imageUrl, altUrl, imageClassName, altImageClassName, technologies }: Props) {
  const Wrapper = (link ? "a" : "div") as "a" | "div"
  const wrapperProps = link
    ? { href: link, target: "_blank" as const, rel: "noopener noreferrer" }
    : {}

  return (
    <motion.li variants={itemVariants} className="group group-hover/projects:opacity-20 hover:opacity-100 transition-opacity duration-200 w-full h-full">
      <Wrapper
        {...wrapperProps}
        className={`relative flex h-full flex-col overflow-hidden rounded-[24px] border border-white/15 bg-black/40 backdrop-blur-sm shadow-[0_10px_20px_0_rgba(0,0,0,0.35)] shadow-red-500/10 transition-shadow ease-linear duration-200 ${link ? "" : "cursor-default"}`}
      >
        <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className={`absolute inset-0 z-0 h-full w-full object-cover transition-opacity duration-300 ${imageClassName ?? ""} ${altUrl ? "group-hover:opacity-0" : "opacity-100"}`}
          />

          {altUrl && (
            <img
              src={altUrl}
              alt={`${title} preview`}
              loading="lazy"
              className={`absolute inset-0 z-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${altImageClassName ?? ""}`}
            />
          )}

          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        <div className="relative z-20 flex flex-1 border-t border-white/10 px-4 py-3 sm:px-6 sm:py-4">
          <div className="rounded-sm transition-colors duration-150 flex h-full w-full flex-col">
            <div className="flex items-start gap-1.5">
              <h3 className="min-w-0 min-h-[3rem] flex-1 text-balance text-base font-semibold leading-normal text-white sm:text-lg group-hover:text-[#ff3232] transition-colors duration-200">
                {title}
              </h3>
              {link ? (
                <div className="mt-0.5 shrink-0 text-white group-hover:text-[#ff3232] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">
                  <ArrowOutwardIcon fontSize="small" />
                </div>
              ) : null}
            </div>
            <p className="mt-1 min-h-[4rem] text-sm leading-relaxed text-white/75 line-clamp-3">{description}</p>
            {technologies && technologies.length > 0 ? (
              <ul className="mt-3 min-h-[3rem] flex flex-wrap content-start gap-2">
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
      </Wrapper>
    </motion.li>
  )
}
