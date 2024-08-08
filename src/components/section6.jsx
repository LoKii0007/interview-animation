import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import '../css/section6.css'
import { MonsterModel } from '../models/Monster';
import { MonsterPinkModel } from '../models/MonsterPink';

function Section6() {

    const [rotationZ, setRotationZ] = useState(0)
    const [current, setCurrent] = useState('drink-1')
    const [prev, setPrev] = useState('drink-1')
    const [loading , setLoading] = useState(false)

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
        if(name !== current){
            setLoading(true)
            // setPrev(current)
            setCurrent(name)
            setTimeout(() => {
                setLoading(false)
            }, 700);
        }
    }

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
                            <MonsterModel rotationZ={rotationZ} />
                        </Canvas>
                    </div>

                    <div className={`can-model ${current === 'drink-2' ? 'd-block' : ' d-none'} `} >
                        <Canvas camera={{ fov: 4, position: [0, 5, 10] }} >
                            <ambientLight intensity={3} />
                            <directionalLight intensity={2} position={[-1, 7, 10]} />
                            <MonsterPinkModel rotationZ={rotationZ} />
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
        </>
    )
}

export default Section6