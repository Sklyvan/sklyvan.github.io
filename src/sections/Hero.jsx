import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";

const Hero = () => {
    const isSmall = useMediaQuery({maxWidth: 480});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                    Hello, I am Joan
                    <span className="waving-hand">👋🏼</span>
                    <p className="hero_tag text-gray_gradient">Software Engineer</p>
                </p>

                <div className="w-full h-full absolute inset-0">
                    {/* <Leva/> */}
                    <Canvas className="w-full h-full">
                        <Suspense fallback={<CanvasLoader/>}>
                            <PerspectiveCamera makeDefault position={[0, 0, 20]}/>
                            <HackerRoom
                                position={sizes.deskPosition}
                                rotation={[0, -Math.PI, 0]}
                                scale={sizes.deskScale}
                            />
                            <group>
                                <Target position={sizes.targetPosition}/>
                            </group>
                            <ambientLight intensity={1}/>
                            <directionalLight intensity={0.5} position={[10, 10, 10]}/>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        </section>
    )
}
export default Hero
