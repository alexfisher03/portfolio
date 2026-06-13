import { useContext } from "react"
import { ViewportContext } from "./viewportContextValue"

export const useViewport = () => useContext(ViewportContext)
