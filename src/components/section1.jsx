import React, { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import '../css/section1.css'
import { RubiksCubeModel } from '../models/Rubiks-cube';
import gsap from 'gsap';

function Section1() {

  const [cubeRef , setCubeRef] = useState()
  const [imgFlag , setImgFlag] = useState(false)
  const radian = Math.PI/180

  setTimeout(() => {
    setImgFlag(!imgFlag)
  }, 3000);

  useEffect(()=>{
    gsap.to('.cube-model', {
      y:0,
      x:0,
      scrollTrigger:{
        trigger:'.section-1',
        start :'bottom bottom',
        end:'bottom 30%',
        scrub:0.5
      }
    })

  }, [])

  useEffect(()=>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.section-1',
        start :'bottom bottom',
        end:'bottom 30%',
        scrub:1
      }
    })

    if(cubeRef){
      console.log(cubeRef.current.rotation)
      tl.to(cubeRef.current.rotation , {
        x:0,
        y: radian*360 ,
        z: radian*360
      })
    }
  }, [cubeRef])

  return (
    <>
      <div className="section-1 position-relative d-flex justify-content-center align-items-center">
        <div className="sec1-text text-center">
          The most accurate <br />
          and reliable API for <br />
          blockchain data <br />
        </div>
        <div className="floating-img flt-img-1 position-absolute">
          <img src={`/${ imgFlag ? 'eth' : 'dogecoin'}.png`} alt="" />
        </div>
        <div className="floating-img flt-img-2 position-absolute">
          <img src={`/${ imgFlag ? 'avax' : 'binance'}.png`} alt="" />
        </div>
        <div className="floating-img flt-img-3 position-absolute">
          <img src={`/${ imgFlag ? 'binance' : 'eth'}.png`} alt="" />
        </div>
        <div className="floating-img flt-img-4 position-absolute">
          <img src={`/${ imgFlag ? 'dogecoin' : 'matic'}.png`} alt="" />
        </div>
        <div className="floating-img flt-img-5 position-absolute">
          <img src={`/${ imgFlag ? 'matic' : 'avax'}.png`} alt="" />
        </div>
      </div>
      <div className="blockchain-end d-flex justify-content-around align-items-center">
        <div className="chain-left text-center d-flex ">
          <div className="chain-left-text">
            Raw blockchain data is complex <br /> to parse and requires a ton of <br /> work to be useful for most applications.
          </div>
        </div>
        <div className="chain-right position-relative d-flex justify-content-center align-items-center">

          <div className="block-icon icon-1 position-absolute d-flex flex-column">
            <div className="icon-img">
               <img src="/binance.png" alt="" />
            </div>
            <div className="animated-line d-flex flex-column justify-content-center align-items-center">
              <div className="dash-fill-2 dash-fill position-absolute"></div>
              <div className="dash-up-1"></div>
              <div className="dash-1"></div>
              <div className="dash-up-1"></div>
              <div className="dash-1"></div>
              <div className="dash-up-1"></div>
              <div className="dash-1"></div>
              <div className="dash-up-1"></div>
            </div>
          </div>
          <div className="block-icon icon-2 position-absolute d-flex">
            <div className="icon-img">
               <img src="/binance.png" alt="" />
            </div>
            <div className="animated-line d-flex justify-content-center align-items-center">
              <div className="dash-fill-1 position-absolute"></div>
              <div className="dash-up"></div>
              <div className="dash"></div>
              <div className="dash-up"></div>
              <div className="dash"></div>
              <div className="dash-up"></div>
            <div className="dash"></div>
              <div className="dash-up"></div>
            </div>
          </div>
          <div className="block-icon icon-4 position-absolute d-flex">
            <div className="icon-img">
               <img src="/binance.png" alt="" />
            </div>
            <div className="animated-line d-flex justify-content-center align-items-center">
              <div className="dash-fill-1 position-absolute"></div>
              <div className="dash-up"></div>
              <div className="dash"></div>
              <div className="dash-up"></div>
              <div className="dash"></div>
              <div className="dash-up"></div>
              <div className="dash"></div>
              <div className="dash-up"></div>
            </div>
          </div>
          <div className="block-icon icon-3 position-absolute d-flex flex-column">
            <div className="icon-img">
               <img src="/binance.png" alt="" />
            </div>
            <div className="animated-line d-flex flex-column justify-content-center align-items-center">
              <div className="dash-fill-2 dash-fill position-absolute"></div>
              <div className="dash-up-1"></div>
              <div className="dash-1"></div>
              <div className="dash-up-1"></div>
              <div className="dash-1"></div>
              <div className="dash-up-1"></div>
              <div className="dash-1"></div>
              <div className="dash-up-1"></div>
            </div>
          </div>
          <div className="cube-model">
            <Canvas camera={{ fov: 45, position: [0, 3, 25] }} >
              <OrbitControls enableZoom={false} touches={false} autoRotate={false} />
              <ambientLight intensity={2} />
              <directionalLight position={[0, 3, 10]} />
              <RubiksCubeModel setCubeRef={setCubeRef} />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1