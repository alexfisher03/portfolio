import { Maincontent } from "./components/Maincontent"
import { ViewportProvider } from "./context/ViewportContent"

function App() {

  return (
    <ViewportProvider>
      <Maincontent />
    </ViewportProvider>
  )
}

export default App
