import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import '../css/section6.css'
import { MonsterModel } from '../models/Monster';
import { MonsterPinkModel } from '../models/MonsterPink';
import { OrbitControls } from '@react-three/drei';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function Section6({ isMobile }) {
    gsap.registerPlugin(ScrollTrigger)
    const [rotationZ, setRotationZ] = useState(0)
    const [current, setCurrent] = useState('drink-1')
    const [prev, setPrev] = useState('drink-1')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { innerWidth } = window
            const mouseX = event.clientX
            const middleX = innerWidth / 2
            const maxRotation = Math.PI / 2

            const rotation = ((mouseX - middleX) / middleX) * maxRotation
            setRotationZ(rotation)
        }

        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    function handleDrink(e) {
        let name = e.currentTarget.getAttribute('name')
        if (name !== current) {
            setLoading(true)
            // setPrev(current)
            setCurrent(name)
            setTimeout(() => {
                setLoading(false)
            }, 700);
        }
    }

    useEffect(()=>{
       {isMobile &&
        gsap.to('.mobile-wrapper', {
            x:'-100vw',
            scrollTrigger:{
                trigger:'.section6-mobile',
                start:'top top',
                end:`+=${window.innerHeight}`,
                pin: true,
                scrub:1,
                // markers:true
            }
        })
       }
    }, [isMobile])

    useEffect(() => {
    }, [current])

    return (
        <>
            <div className="section-6 d-flex justify-content-evenly align-items-center">
                <div className="can-left d-flex flex-column align-items-center">
                    <div className="can-card col-6 rounded-pill d-flex align-items-center" onClick={(e) => handleDrink(e)} name='drink-1'>
                        <div className="card-left" >
                            <div className="can-heading text-center">Monster Energy</div>
                            <div className="can-desc text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat hic, omnis quam qui aut.</div>
                        </div>
                        <div className="card-right d-flex align-items-center justify-content-start">
                            <img className='can-img img-style-1' src="/monster-green.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="can-middle">
                    {loading ?
                        <>
                            <img className='giphy' src="/giphy.webp" alt="" />
                        </> :
                        <>
                            <div className={`can-model ${current === 'drink-1' ? 'd-block' : ' d-none'} `} >
                                <Canvas camera={{ fov: 24, position: [0, 5, 10] }} >
                                    <ambientLight intensity={3} />
                                    <directionalLight intensity={2} position={[-5, 7, 10]} />
                                    {!isMobile && <OrbitControls autoRotate={false} enableZoom={false} />}
                                    <MonsterModel rotationZ={rotationZ} />
                                </Canvas>
                            </div>

                            <div className={`can-model ${current === 'drink-2' ? 'd-block' : ' d-none'} `} >
                                <Canvas camera={{ fov: 4, position: [0, 5, 10] }} >
                                    <ambientLight intensity={3} />
                                    <directionalLight intensity={2} position={[-1, 7, 10]} />
                                    <MonsterPinkModel rotationZ={rotationZ} />
                                    {!isMobile && <OrbitControls autoRotate={false} enableZoom={false} />}
                                </Canvas>
                            </div>
                        </>}
                </div>

                <div className="can-right d-flex flex-column align-items-center">

                    <div className="can-card rounded-pill col-6 d-flex align-items-center" onClick={(e) => handleDrink(e)} name='drink-2'>
                        <div className="card-right d-flex align-items-center justify-content-end">
                            <img className='can-img img-style-2' src="/monster-pink.png" alt="" />
                        </div>
                        <div className="card-left">
                            <div className="can-heading text-center">Monster Pink</div>
                            <div className="can-desc text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dicta fuga quam est</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section6-mobile">
                <div className="mobile-wrapper d-flex">
                <div className="can-section1 d-flex flex-column justify-content-evenly align-items-center">
                    <div className={`can-model `} >
                        <Canvas camera={{ fov: 24, position: [0, 5, 10] }} >
                            <ambientLight intensity={3} />
                            <directionalLight intensity={2} position={[-5, 7, 10]} />
                            {!isMobile && <OrbitControls autoRotate={false} enableZoom={false} />}
                            <MonsterModel rotationZ={rotationZ} />
                        </Canvas>
                    </div>
                    <div className="can-card rounded-pill d-flex align-items-center">
                        <div className="card-left" >
                            <div className="can-heading text-center">Monster Energy</div>
                            <div className="can-desc text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat hic, omnis quam qui aut.</div>
                        </div>
                        <div className="card-right d-flex align-items-center justify-content-start">
                            <img className='can-img img-style-1' src="/monster-green.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="can-section2 can-section1 d-flex flex-column justify-content-evenly align-items-center">
                    <div className={`can-model  `} >
                        <Canvas camera={{ fov: 4, position: [0, 5, 10] }} >
                            <ambientLight intensity={3} />
                            <directionalLight intensity={2} position={[-1, 7, 10]} />
                            <MonsterPinkModel rotationZ={rotationZ} />
                            {!isMobile && <OrbitControls autoRotate={false} enableZoom={false} />}
                        </Canvas>
                    </div>
                    <div className="can-card col-6 rounded-pill d-flex align-items-center">
                        <div className="card-left" >
                            <div className="can-heading text-center">Monster Energy</div>
                            <div className="can-desc text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat hic, omnis quam qui aut.</div>
                        </div>
                        <div className="card-right d-flex align-items-center justify-content-start">
                            <img className='can-img img-style-1' src="/monster-green.png" alt="" />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Section6