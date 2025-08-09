import About from './About/About'
import Backdrop from './Backdrop/Backdrop'
import Header from './Header/Header'

export const Maincontent = () => {
  return (
    <div className="relative">
        <Backdrop />
        <div className="relative z-10">
            <div className="mx-4 sm:mx-16 lg:mx-56 mt-16">
                <Header />
            </div>
            <div className="sm:mx-12 lg:mx-52">
                <About />
            </div>
        </div>
    </div>
  )
}
