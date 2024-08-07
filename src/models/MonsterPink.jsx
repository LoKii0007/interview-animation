import React from 'react'
import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

export function MonsterPinkModel(props) {
  const { nodes, materials } = useGLTF('/monsterPink-transformed.glb')
  let rotationX = -35 * (Math.PI / 180)
  let rotationY = -15 * (Math.PI / 180)

  useEffect(()=>{
  }, [props.rotationZ])

  return (
    <group {...props} dispose={null} scale={1.3} rotation={[ rotationX, props.rotationZ, 0 ]} >
      <mesh geometry={nodes.pCylinder1_Can_Top_0.geometry}  position={[0,0.03,0]} material={materials.Can_Top} scale={[0.1, 0.22, 0.1]} />
      <mesh geometry={nodes.pCylinder1_Metal_0.geometry}  position={[0,0.03,0]} material={materials.Metal} scale={[0.1, 0.22, 0.1]} />
      <mesh geometry={nodes.pCylinder1_Label_0.geometry} position={[0,0.03,0]}  material={materials.Label} scale={[0.1, 0.22, 0.1]} />
    </group>
  )
}

useGLTF.preload('/monsterPink-transformed.glb')
