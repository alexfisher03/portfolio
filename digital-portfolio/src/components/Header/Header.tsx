import { motion } from "motion/react"
import { useViewport } from "../../context/ViewportContext"

type Props = { onRevealExperience: () => void }

const Header = ({ onRevealExperience }: Props) => {
  const { isMobile } = useViewport()
  const goExp = () => {
    onRevealExperience()
    document.getElementById("experience-anchor")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  return (
    <div className="flex justify-center sm:flex-row">
      <div className="flex sm:items-start sm:basis-1/2">
        <div className="flex-col gap-3">
          <motion.h1 initial={{ opacity: 0, y:20}} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-2xl sm:text-4xl font-semibold text-center sm:text-start sm:ml-6 mt-6">Alexander Fisher</motion.h1>
          <motion.p initial={{ opacity: 0, y:20}} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-gray-400 text-base sm:text-lg text-center sm:text-start sm:ml-6 mt-2">Software Engineer</motion.p>
        </div>
      </div>
      {isMobile ? null : (
        <div className="flex justify-end sm:basis-1/2 mt-8">
          <div className="flex flex-row">
            <motion.nav initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-gray-400 text-base sm:text-lg mr-6 mt-2">
              <p onClick={goExp} className="cursor-pointer hover:text-gray-300 transition-colors duration-150 ease-in-out">Experience</p>
            </motion.nav>
            <motion.nav initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.45, delay: 0.35 }} className="text-gray-400 text-base sm:text-lg mr-6 mt-2">
              <p className="cursor-pointer hover:text-gray-300 transition-colors duration-150 ease-in-out">Projects</p>
            </motion.nav>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
