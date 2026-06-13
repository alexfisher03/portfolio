import { useMediaQuery } from "../hooks/useMediaQuery"
import { ViewportContext } from "./viewportContextValue"

export const ViewportProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return <ViewportContext.Provider value={{ isMobile }}>{children}</ViewportContext.Provider>
}
