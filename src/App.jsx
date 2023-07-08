import './App.css'
import { Canvas } from '@react-three/fiber'
import Box from './components/Box' 
import Sphere from './components/Sphere' 

function App() { 
  
  return (
    <>
      <div 
        className='text-white bg-black flex justify-center'
      >
        Welcome to R3F
      </div>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-2, -1, 0]} />
        <Box position={[2, -1, 0]} />
        <Sphere />
      </Canvas>
    </>
  )
}

export default App
