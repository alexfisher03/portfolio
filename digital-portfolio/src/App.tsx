import { Maincontent } from "./components/Maincontent"
import { ViewportProvider } from "./context/ViewportContext"

function App() {

  return (
    <ViewportProvider>
      <Maincontent />
    </ViewportProvider>
  )
}

export default App
