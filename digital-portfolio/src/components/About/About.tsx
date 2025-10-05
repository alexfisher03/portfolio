import { motion, useInView } from 'motion/react'
import aboutBg from '../../assets/about-bg.png'
import { useRef } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SchoolIcon from '@mui/icons-material/School';


function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1.0, delay: 0.5, ease: [0, 0.9, 0.5, 1.01] }}
      className="relative overflow-hidden rounded-[32px] px-6 py-8 sm:px-12 sm:py-20 mx-4 sm:mx-10 m-10 border-[0.01px] border-[#ffffff3e] backdrop-blur-sm shadow-[0_10px_40px_0_rgba(127,29,29,0.2)]"
    >
      <img
        src={aboutBg}
        alt="gradient bg"
        className="absolute top-1/2 left-1/2 sm:w-[2000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 object-fill sm:object-fill opacity-40 animate-[spin_30s_linear_infinite] sm:animate-[spin_60s_linear_infinite] blur-2xl pointer-events-none select-none z-0"
      />

      <div className="relative z-10 w-full flex-col justify-between gap-6 text-white">
        <div className="flex flex-col sm:flex-row">
          <div className="min-w-0 basis-1/2">
            <h1 className="text-2xl sm:text-4xl">Software and Systems Engineer</h1>
            <p className="text-base sm:text-lg text-gray-400 mt-3">
              Design, clarity, and maintainability are at the core of my work
            </p>
            <div className="flex items-center gap-4 shrink-0 mt-6">
              <a href="https://github.com/alexfisher03/" target="_blank"  className="border border-[#ffffff20] hover:border-[#ffffff25] hover:bg-[#ffffff10] hover:scale-95 transform ease-in-out rounded-lg p-2 transition-colors duration-200">
                <GitHubIcon />
              </a>
              <a href="https://www.linkedin.com/in/fisheralexander03/" target="_blank" className="border border-[#ffffff20] hover:border-[#ffffff25] hover:bg-[#ffffff10] hover:scale-95 transform ease-in-out rounded-lg p-2 transition-colors duration-200">
                <LinkedInIcon  />
              </a>
            </div>
          </div>
          <div className="basis-1/2 flex justify-center items-center mt-6">
            <div className="flex flex-col items-end">
              <span className="flex-col sm:flex sm:items-evenly">
                <div className="flex justify-end">
                  <SchoolIcon />
                </div>
                <h3 className="mt-3 sm:mt-0 text-sm sm:text-lg">B.S. in Computer Science</h3>
              </span>
              <p className="text-sm sm:text-base italic bg-[linear-gradient(to_right,#999999,#2e557e,#2e557e,#2e557e,#999999,#ffffff,#ffe8d1,#ffb066,#ff7300,#ffb066,#ffe8d1,#ffffff,#999999,#2e557e,#2e557e)] bg-[length:700%_700%] bg-clip-text text-transparent animate-gradient">
                University of Florida
              </p>
              
                <p className="text-xs sm:text-base text-gray-400 mt-1 text-end max-w-2/3">Focused on theory, scalable systems, and real-world applications</p>

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
