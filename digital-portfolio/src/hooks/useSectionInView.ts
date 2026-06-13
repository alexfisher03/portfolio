import { useRef } from "react"
import { useInView } from "motion/react"

export function useSectionInView(amount: "some" | "all" | number = 0.6) {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { amount, once: true })
  return { ref, inView }
}
