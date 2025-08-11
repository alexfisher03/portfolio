import { Navigate, Route, Routes } from "react-router"
import { Maincontent } from "./components/Maincontent"
import { ViewportProvider } from "./context/ViewportContext"
import ProjectArchive from "./pages/ProjectArchive"

function App() {

  return (
    <ViewportProvider>
      <Routes>
        <Route path="/" element={<Maincontent />} />
        <Route path="/archive" element={<ProjectArchive />} />
        <Route path="*" element={<Navigate to="/" replace />} /> 
      </Routes>
    </ViewportProvider>
  )
}

export default App
