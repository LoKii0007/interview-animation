import React, { useEffect } from 'react'
import '../css/section2.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Section2() {

  gsap.registerPlugin(ScrollTrigger)
  const height = window.innerHeight

  useEffect(() => {

    // # ------------------------ pinned container --------------------------

    ScrollTrigger.create({
      trigger: '.blur-section',
      start: 'top top',
      end: `+=${height*2}`,
      pin: true,
      scrub: 1,
      // markers : true
    })

    // # -------------------- box-1 animation --------------------

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.top-spacing',
        start: 'top top',
        end: `+=${height * 3}`,
        scrub: 1,
      }
    })

    tl1.to('.box-1', {
      height: '35vh',
      width: '35vh',
      transformOrigin: 'bottom left',
      rotationZ: '30deg',
      duration: 4
    })
    tl1.to('.box-1', {
      height: '20vh',
      width: '20vh',
      x: '-20vw',
      y: '-70vh',
      rotationZ: '45deg',
      duration: 4
    })
    tl1.to('.box-1', {
      x: '-15vw',
      y: '-60vh',
      duration: 1
    })
      .to('.box-1', {
        height: '8vh',
        width: '8vh',
        rotationZ: '85deg',
        x: 0,
        y: '-30vh',
        duration: 5
      })
      .to('.box-1', {
        height: '5vh',
        width: '5vh',
        rotationZ: '90deg',
        x: '2vh',
        y: 0,
        duration: 4
      })

    // # -------------------- box-2 animation --------------------


    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.top-spacing',
        start: 'top top',
        end: `+=${height * 3}`,
        scrub: 1,
      }
    })

    tl2.to('.box-2', {
      height: '35vh',
      width: '35vh',
      x: 0,
      transformOrigin: 'top right',
      rotationZ: '-30deg',
      duration: 4
    })
    tl2.to('.box-2', {
      height: '20vh',
      width: '20vh',
      x: '20vw',
      y: '-90vh',
      rotationZ: '-45deg',
      duration: 4
    })
    tl2.to('.box-2', {
      x: '15vw',
      y: '-70vh',
      duration: 1
    })
      .to('.box-2', {
        height: '8vh',
        width: '8vh',
        rotationZ: '-85deg',
        x: 0,
        y: '-25vh',
        duration: 5
      })
      .to('.box-2', {
        height: '5vh',
        width: '5vh',
        rotationZ: '-90deg',
        x: '-2vh',
        y: '5vh',
        duration: 4
      })

  }, [])

  return (
    <>
      <div className="top-spacing"></div>
      <div className="section-2">
        <div className="blur-section">
          <div className="blur-wrapper d-flex justify-content-center align-items-center position-relative">
            <div className="blur-div position-absolute rounded-5 text-center d-flex justify-content-center align-items-center">
              Design, but in a more efficient <br />
              and simplified way
            </div>
          </div>
          <div className="box-section d-flex justify-content-center mt-4 position-relative">
            <div className="box-1"></div>
            <div className="box-2"></div>
          </div>
        </div>
      </div>
      {/* <div className="blur-spacing"></div> */}
    </>
  )
}

export default Section2