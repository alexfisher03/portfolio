import { createContext, useContext } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";

const ViewportContext = createContext({ isMobile: false });

export const ViewportProvider = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <ViewportContext.Provider value={{ isMobile }}>
      {children}
    </ViewportContext.Provider>
  );
};

export const useViewport = () => useContext(ViewportContext);
