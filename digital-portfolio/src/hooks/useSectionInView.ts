import { useRef } from "react"
import { useInView } from "motion/react"

export function useSectionInView(amount: "some" | "all" | number = 0.6, margin: any = { bottom: "-40%" }) {
  const ref = useRef<HTMLElement | null>(null)
  const inView = useInView(ref, { amount, margin, once: true })
  return { ref, inView }
}
