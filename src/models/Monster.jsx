import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function MonsterModel(props) {
  const { nodes, materials } = useGLTF('/monster-transformed.glb')
  let rotationX = -125 * (Math.PI / 180)
  let rotationY = 5 * (Math.PI / 180)

  useEffect(()=>{
    // console.log('changing')
  }, [props.rotationZ])

  return (
    <group {...props} dispose={null}>
      <mesh 
      geometry={nodes.Object_2.geometry} 
      material={materials.initialShadingGroup} 
      position={[0,-2,0]}
      rotation={[ rotationX, 0 , props.rotationZ]} />
    </group>
  )
}

useGLTF.preload('/monster-transformed.glb')
