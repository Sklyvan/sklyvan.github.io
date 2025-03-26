import React, {useRef} from 'react'
import {useGLTF} from "@react-three/drei";

const Target = (props) => {
    const targetRef = useRef();
    const { scene } = useGLTF(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
    );
    return (
        <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
            <primitive object={scene} />
        </mesh>
    )
}
export default Target
