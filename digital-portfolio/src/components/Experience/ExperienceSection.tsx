import { motion } from "motion/react"
import ExperienceItem from "./ExperienceItem"
import experienceBg from "../../assets/experience-bg.png"

const listVariants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.1, staggerChildren: 0.1 } }
}

export default function ExperienceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.45, ease: "easeOut" as const }}
      className="relative overflow-hidden rounded-[32px] px-6 py-8 sm:px-12 sm:py-20 mx-4 sm:mx-10 border border-white/25 backdrop-blur-sm shadow-[0_10px_30px_0_rgba(29,78,216,0.2)]"
    >
      <div className="absolute top-1/2 left-1/2 sm:w-[2000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <img
          src={experienceBg}
          alt="gradient bg"
          style={{ rotate: "45deg" }}
          className="w-full h-full object-fill opacity-40 blur-2xl animate-[spin-rev_60s_linear_infinite]"
        />
      </div>
      <div className="flex flex-col">
        <div className="">
          <h2 className="text-xl sm:text-2xl text-white opacity-50 mb-8">EXPERIENCE</h2>
        </div>
          <div className="group">
            <motion.ul initial="hidden" animate="visible" variants={listVariants} className="space-y-2">
              <div className="group-hover:opacity-40 hover:opacity-100 transition-opacity duration-300 mb-12 sm:mb-0">
                <ExperienceItem 
                  title="Software Engineer Intern, Wealth Services Engineering" 
                  company="Bank of New York (BNY)" 
                  description="Built a production-ready admin microservice for Pershing Wealth Services using Spring Boot and Angular. Connected frontend with SpringBoot backend, leveraging REST API calls to IBM Mainframe master database through microservice chaining."
                  technologies={["Java", "SpringBoot", "Angular", "TypeScript", "Gitlab CI/CD", "Jasmine", "Jira"]}
                  date="June 2025 — August 2025"
                  link="https://www.bny.com/corporate/global/en.html"
                />
              </div>
              <div className="group-hover:opacity-40 hover:opacity-100 transition-opacity duration-300 mb-12 sm:mb-0">
                <ExperienceItem
                  title="Vice President - Internal"
                  company="UF Association for Computing Machinery (ACM)"
                  description="Managed internal operations for UF’s largest pre-professional Computer Science organization, establishing repeatable formulas for successful workshop and social event creation.
                  Led the creation and delivery of technical code-along workshops, expanding annual engagement by over 8x and driving a 50% average increase in total organization attendance, while ensuring all projects were hands-on, documented, and take-home ready.
                  (Previously served as Workshop Lead)"
                technologies={["Public Speaking", "Organization Leadership", "React", "Git", "HTML", "CSS", "JavaScript", "Supabase", "Figma", "Firebase"]}
                date="January 2023 - Present"
                link="https://uf-acm.com/"
                />
              </div>
              <div className="group-hover:opacity-40 hover:opacity-100 transition-opacity duration-300 mb-6 sm:mb-0">
                <ExperienceItem
                  title="Design Team Lead"
                  company="UF Association for Computing Machinery (ACM)"
                  description="Redesigned and optimized the UF ACM website (Spring 2024) with React, Framer Motion, and Tailwind CSS, improving performance, maintainability, and engagement. Developed and deployed ACM Connect (Fall 2024), a Discord bot on AWS EC2 using discord.py, automating daily internship and opportunity postings for 2,100+ members. Built and launched the ACM Admin Dashboard (Spring 2025) with Next.js, React, and Firebase, centralizing meetings, attendance, analytics, and member administration for 475+ users."
                  technologies={["React", "Next.js", "Firebase", "Framer Motion", "Tailwind CSS", "AWS EC2", "discord.py"]}
                  date="May 2024 — May 2025"
                  link="https://acm-connect-website-git-feature-tandev-jasons-projects-bbe11fb6.vercel.app/"
                />
              </div>
            </motion.ul>
          </div>
      </div>
    </motion.section>
  )
}
