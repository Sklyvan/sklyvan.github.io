/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Science Museum Group (https://sketchfab.com/sciencemuseum)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/enigma-machine-1934-c8ee76c383654e3095ea4cc9e7990274
Title: Enigma machine, 1934
*/

import React, { useRef, useMemo, useContext, createContext } from 'react'
import { useGLTF, Merged } from '@react-three/drei'

const context = createContext()
export function Instances({ children, ...props }) {
    const { nodes } = useGLTF('/models/enigma-machine.glb')
    const instances = useMemo(
        () => ({
            Object: nodes.Object_3,
            Object1: nodes.Object_4,
            Object2: nodes.Object_5,
            Object3: nodes.Object_6,
            Object4: nodes.Object_7,
            Object5: nodes.Object_8,
        }),
        [nodes]
    )
    return (
        <Merged meshes={instances} {...props}>
            {(instances) => <context.Provider value={instances} children={children} />}
        </Merged>
    )
}

export function Model(props) {
    const instances = useContext(context)
    return (
        <group {...props} dispose={null}>
            <group position={[0, -3.487, 4.947]} rotation={[-Math.PI, 0, 0]}>
                <group position={[-9.888, -21.711, -16.977]}>
                    <instances.Object />
                    <instances.Object1 />
                    <instances.Object2 />
                    <instances.Object3 />
                    <instances.Object4 />
                    <instances.Object5 />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/enigma-machine.glb')

export default function EnigmaMachine() {
    return (
        <Instances>
            <Model />
        </Instances>
    )
}
