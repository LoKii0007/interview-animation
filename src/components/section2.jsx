import React, { useEffect } from 'react'
import '../css/section2.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Section2() {

  gsap.registerPlugin(ScrollTrigger)
  const height = window.innerHeight

  useEffect(() => {

    gsap.to('.box-1, .box-2', {
      height: 40,
      width: 40,
      x:0,
      y:0,
      scrollTrigger: {
        trigger: '.section-2',
        start: 'top top',
        end: `+=${height*1.5}`,
        scrub: true,
        markers: true
      }
    })

    ScrollTrigger.create({
      trigger: '.blur-section',
      start: 'top -50%',
      end: `+=${height}`,
      pin: true,
      scrub: 1,
    })
  }, [])

  return (
    <>
      <div className="section-2 d-flex flex-column">
        <div className="blur-section d-flex justify-content-center align-items-end">
          <div className="blur-wrapper">
            <div className="blur-div position-absolute rounded-5"></div>
          </div>
          <div className="box-section d-flex justify-content-center gap-5 mt-4">
          <div className="box-1"></div>
          <div className="box-2"></div>
        </div>
        </div>
        <div className="blur-spacing"></div>
      </div>
    </>
  )
}

export default Section2