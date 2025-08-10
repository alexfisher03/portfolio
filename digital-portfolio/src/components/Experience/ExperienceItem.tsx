import { motion, type Variants } from "motion/react"

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "tween", duration: 0.8, delay: 0.3, ease: "easeOut" as const } }
}

type Props = {
  title: string
  company: string
  description: string
  technologies?: string[]
  link?: string
  date: string
}

export default function ExperienceItem({ title, company, description, technologies, link, date }: Props) {
  const Wrapper = (link ? "a" : "div") as "a" | "div"
  const wrapperProps = link
    ? { href: link, target: "_blank", rel: "noopener noreferrer" }
    : {}
  const interactive = link ? "cursor-pointer" : ""

  return (
    <motion.li variants={itemVariants} className="w-full">
      <Wrapper
        {...wrapperProps}
        className={`group/item block rounded-sm p-1 sm:p-8 transition-colors duration-150 hover:bg-[#ffffff10] ${interactive} outline-none focus-visible:ring-2 focus-visible:ring-white/30`}
      >
        <div className="sm:flex flex-col">
          <div className="basis-1/3">
            <div className="text-white/60 text-sm font-bold text-start">{date}</div>
          </div>
          <div className="basis-2/3">
            <div className="text-white">{title}</div>
            <div className="text-white/60 text-sm italic transition-all duration-150 group-hover/item:text-[rgba(50,125,255)]/80 group-hover/item:underline">
              {company}
            </div>
            <div className="text-white/70 text-sm mt-2">{description}</div>
            {technologies && technologies.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {technologies.map((t) => (
                  <li
                    key={t}
                    className="px-2 py-1 rounded-full text-xs text-[rgba(50,125,255)]/80 bg-[rgba(50,125,255,0.15)] border border-white/10 hover:scale-105 hover:translate-y-0.5 transform transition-transform ease-in-out duration-200"
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
