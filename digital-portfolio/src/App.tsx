import { useEffect } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router"
import { Maincontent } from "./components/Maincontent"
import { ViewportProvider } from "./context/ViewportContext"
import ProjectArchive from "./pages/ProjectArchive"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {

  return (
    <ViewportProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Maincontent />} />
        <Route path="/archive" element={<ProjectArchive />} />
        <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>
    </ViewportProvider>
  )
}

export default App
