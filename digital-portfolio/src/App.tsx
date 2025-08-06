import About from "./components/About/About"
import Backdrop from "./components/Backdrop/Backdrop"
import Header from "./components/Header/Header"

function App() {

  return (
    <div className="relative">
     <Backdrop />
     <div className="relative z-10">
      <Header />
      <About/>
     </div>
    </div>
  )
}

export default App
