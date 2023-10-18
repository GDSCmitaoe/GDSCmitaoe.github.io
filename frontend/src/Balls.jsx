/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 ../public/Balls.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Balls.glb')
  return (
    <group {...props} dispose={null}>
      <pointLight intensity={108702.826} decay={2} position={[4.076, 4.281, -4.204]} rotation={[-1.839, 0.602, 1.932]} />
      <mesh geometry={nodes.Sphere.geometry} material={materials['Material.002']} position={[0, 3.464, 0]} />
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.004']} position={[0, 3.464, 0]} />
      <mesh geometry={nodes.Sphere002.geometry} material={materials['Material.003']} position={[0, 3.464, 0]} />
      <mesh geometry={nodes.Sphere003.geometry} material={materials['Material.001']} position={[0, 3.464, 0]} />
    </group>
  )
}

useGLTF.preload('/Balls.glb')
