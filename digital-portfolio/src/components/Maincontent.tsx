import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"
import About from "./About/About"
import Backdrop from "./Backdrop/Backdrop"
import ExperienceSection from "./Experience/ExperienceSection"
import Header from "./Header/Header"

export const Maincontent = () => {
  const [showExperience, setShowExperience] = useState(false)
  const anchorRef = useRef<HTMLDivElement | null>(null)
  const inView = useInView(anchorRef, { once: true, amount: 0.6, margin: "0px 0px -60% 0px" })

  useEffect(() => {
    if (inView) setShowExperience(true)
  }, [inView])

  return (
    <div className="relative cursor-default">
      <Backdrop />
      <div className="relative z-10">
        <div className="mx-4 sm:mx-16 lg:mx-56 mt-16">
          <Header onRevealExperience={() => setShowExperience(true)} />
        </div>
        <div className="sm:mx-12 lg:mx-52">
          <About />
        </div>

        <div ref={anchorRef} id="experience-anchor" className="sm:mx-12 lg:mx-52 mt-6 scroll-mt-12" />

        <div className="sm:mx-12 lg:mx-52 mb-36">
          {showExperience ? (
            <ExperienceSection />
          ) : (
            <div className="min-h-[70vh]" />
          )}
        </div>
      </div>
    </div>
  )
}
