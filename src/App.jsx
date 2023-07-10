import { BrowserRouter } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import Box from './components/Box' 
import Sphere from './components/Sphere' 

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Works from './components/Works'

function App() { 
  
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Works />

        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-2, -1, 0]} />
          <Box position={[2, -1, 0]} />
          <Sphere />
        </Canvas>
      </div>
    </BrowserRouter>
  )
}

export default App
