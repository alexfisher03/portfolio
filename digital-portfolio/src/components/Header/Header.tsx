import { motion } from "motion/react"

const Header = () => {
  return (
    <div className="py-4">
        <motion.h1 
            initial={{ opacity: 0, y:20}} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }} 
            className="text-2xl sm:text-4xl font-extrabold text-start ml-6 mt-6"
        >
        Alexander Fisher
        </motion.h1>
        <motion.p 
            initial={{ opacity: 0, y:20}} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }} 
            className="text-gray-300 text-base sm:text-lg text-start ml-6 mt-2">Software Engineer 
        </motion.p>
    </div>
  )
}

export default Header