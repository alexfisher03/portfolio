import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"
import About from "./About/About"
import Backdrop from "./Backdrop/Backdrop"
import ExperienceSection from "./Experience/ExperienceSection"
import Header from "./Header/Header"
import ProjectGrid from "./Projects/ProjectGrid"

export const Maincontent = () => {
  const [showExperience, setShowExperience] = useState(false)
  const [showProjects, setShowProjects] = useState(false);
  const expAnchorRef = useRef<HTMLDivElement | null>(null)
  const projAnchorRef = useRef<HTMLDivElement | null>(null)
  const expInView = useInView(expAnchorRef, { once: true, amount: 0.6, margin: "0px 0px -60% 0px" })
  const projInView = useInView(projAnchorRef, { once: true, amount: 0.6, margin: "0px 0px -60% 0px" })

  useEffect(() => {
    if (expInView) setShowExperience(true)
  }, [expInView])

  useEffect(() => {
    if (projInView) setShowProjects(true)
  }, [projInView])

  return (
    <div className="relative cursor-default">
      <Backdrop />
      <div className="relative z-10">
        <div className="mx-4 sm:mx-16 lg:mx-56 mt-16">
          <Header onRevealExperience={() => setShowExperience(true)} onRevealProjects={() => setShowProjects(true)} />
        </div>
        <div className="sm:mx-12 lg:mx-52">
          <About />
        </div>

        <div ref={expAnchorRef} id="experience-anchor" className="sm:mx-12 lg:mx-52 mt-6 scroll-mt-12" />

        <div className="sm:mx-12 lg:mx-52 mb-12">
          {showExperience ? <ExperienceSection /> : <div className="min-h-[70vh]" />}
        </div>

        <div ref={projAnchorRef} id="projects-anchor" className="sm:mx-12 lg:mx-52 mt-6 scroll-mt-12" />

        <div className="sm:mx-12 lg:mx-50 mb-36">
          {showProjects ? <ProjectGrid /> : <div className="min-h-[70vh]" />}
        </div>
      </div>
    </div>
  )
}
