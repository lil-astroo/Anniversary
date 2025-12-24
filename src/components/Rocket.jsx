import React, { useRef } from 'react'
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import model from '../assets/rocket_ship.glb';
 
export default function Rocket({ scrollY }) {
    const ref = useRef();
    const { scene } = useGLTF(model);

    return <primitive ref={ref} object={scene} />;
}
