import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Shadow } from '@react-three/drei';
import '../css/section6.css'
import { RedbullModel } from '../models/Redbull';
import { MonsterModel } from '../models/Monster';
import { MonsterPinkModel } from '../models/MonsterPink';

function Section6() {

    const [rotationZ, setRotationZ] = useState(0)
    const [current, setCurrent] = useState('drink-1')
    const [prev, setPrev] = useState('drink-1')

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
       setPrev(current)
       setCurrent(e.currentTarget.getAttribute('name'))
    }

    useEffect(()=>{
       console.log(current)
    }, [current])

    return (
        <>
            <div className="section-6 d-flex justify-content-evenly align-items-center">
                <div className="can-left d-flex flex-column align-items-center">
                    <div className="can-card col-6 can-1 d-flex align-items-center" onClick={(e)=>handleDrink(e)} name='drink-1'>
                        <div className="card-left" >
                            <div className="can-heading text-center">Monster Energy</div>
                            <div className="can-desc text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat hic, omnis quam qui aut.</div>
                        </div>
                        <div className="card-right">
                            <img className='can-img' src="/monster-green.png" alt="" />
                        </div>
                    </div>
                    {/* <div className="can-card col-6 can-1 d-flex my-3">
                        <div className="card-left">
                            <div className="can-heading text-center">Monster Lime</div>
                            <div className="can-desc text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat hic, omnis quam qui aut.</div>
                        </div>
                        <div className="card-right">
                            <img className='can-img' src="/monster.jpg" alt="" />
                        </div>
                    </div>
                    <div className="can-card col-6 can-1 d-flex">
                        <div className="card-left">
                            <div className="can-heading text-center">Coca-cola</div>
                            <div className="can-desc text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat hic, omnis quam qui aut.</div>
                        </div>
                        <div className="card-right">
                            <img className='can-img' src="/monster.jpg" alt="" />
                        </div>
                    </div> */}
                </div>

                <div className="can-middle">
                    {/* <div className="can-model" >
                        <Canvas camera={{ fov: 30, position: [10, 10, 10] }} >
                        <OrbitControls enableZoom={false} touches={false} autoRotate={false} />
                        <ambientLight intensity={2} />
                        <directionalLight position={[10, 3, 10]} />
                        <RedbullModel />
                    </Canvas>
                    </div> */}

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
                </div>

                <div className="can-right d-flex flex-column align-items-center">

                    <div className="can-card col-6 can-1 d-flex align-items-center" onClick={(e)=>handleDrink(e)} name='drink-2'>
                        <div className="card-left">
                            <div className="can-heading text-center">Monster Pink</div>
                            <div className="can-desc text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. A dicta fuga quam est</div>
                        </div>
                        <div className="card-right">
                            <img className='can-img' src="/monster-pink.png" alt="" />
                        </div>
                    </div>
                    {/* <div className="can-card col-6 can-1 d-flex my-3">
                        <div className="card-left">
                            <div className="can-heading text-center">Redbull Green</div>
                            <div className="can-desc text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat hic, omnis quam qui aut.</div>
                        </div>
                        <div className="card-right">
                            <img className='can-img' src="/monster.jpg" alt="" />
                        </div>
                    </div>
                    <div className="can-card col-6 can-1 d-flex">
                        <div className="card-left">
                            <div className="can-heading text-center">Limca</div>
                            <div className="can-desc text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum placeat hic, omnis quam qui aut.</div>
                        </div>
                        <div className="card-right">
                            <img className='can-img' src="/monster.jpg" alt="" />
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Section6