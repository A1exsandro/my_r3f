import { BrowserRouter } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import Box from './components/Box' 
import Sphere from './components/Sphere' 
import ComputersCanvas from './components/Computers'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() { 
  
  return (
    <BrowserRouter>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>

      {/* <ComputersCanvas /> */}

      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-2, -1, 0]} />
        <Box position={[2, -1, 0]} />
        <Sphere />
      </Canvas>
    </BrowserRouter>
  )
}

export default App
