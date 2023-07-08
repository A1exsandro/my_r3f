import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'

function Sphere() {
  const meshRef = useRef()
  useFrame((state, delta) => (meshRef.current.rotation.y += delta))

  return (
    <mesh 
      visible 
      ref={meshRef}
      userData={{ hello: 'world' }} 
      position={[0, 1, 1]} 
      rotation={[Math.PI / 2, 0, 0]}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="hotpink" transparent />
    </mesh>
  );
}

export default Sphere
