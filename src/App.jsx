import { BrowserRouter } from 'react-router-dom' 
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'
import StarsCanvas from './components/Stars'
import Tech from './components/Tech'
import { useIsMobile } from './contexts/IsMobileContext'

import './App.css'

function App() { 
  const { isMobile } = useIsMobile()
  
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <div className="relative z-0"> 
          { !isMobile && <StarsCanvas /> }

          <About />
          <Works /> 
          { !isMobile && <Tech /> }
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
