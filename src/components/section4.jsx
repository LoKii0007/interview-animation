import React, { useEffect, useState } from 'react'
import '../css/section4.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Section4({isMobile}) {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const height = window.innerHeight

  //# ---------------------circle shrink animation -------------------------------

    gsap.to('.marketing-circle', {
      scale: 1,
      scrollTrigger: {
        trigger: '.section-4',
        start: 'top top',
        end: `+=${height}`,
        scrub: 1
      }
    })

  //# --------------------- pin conatiner -------------------------------


    ScrollTrigger.create({
      trigger: '.section-4',
      start: 'top top',
      end: `+=${height*1.75}`,
      pin: '.part-1',
      scrub: 1
    })

  //# ---------------------words animations -------------------------------


    gsap.to('.section4-text2', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.section-4',
        start: 'center bottom',
        end: `+=${height / 2}`,
        scrub: 1,
        // markers : true,
      }
    })

    gsap.to('.section4-text1', {
      opacity: 1,
      width :'100%',
      fontSize:`${isMobile?25:90}`,
      scrollTrigger: {
        trigger: '.section-4',
        start: 'center bottom',
        end: `+=${height}`,
        scrub: 1,
        // markers : true
      }
    })

  //# ---------------------ball bounce animation -------------------------------


    let tl1 = gsap.timeline({
      paused:true
    })

    tl1.to('.marketing-circle', {
      y:`${isMobile?'40vh':'30vh'}`,
      ease:'bounce',
      duration:2,
    })

    ScrollTrigger.create({
      trigger: '.section-4',
      start: 'center top',
      end: `center -1%`,
      scrub: 1,
      onEnter:()=>{
        tl1.play()
      },
      onLeaveBack:()=>{
        tl1.reverse()
      }
    })

  }, [])

  return (
    <>
      <div className="section-4">
        <div className="part-1 d-flex justify-content-center align-items-center">
          <div className="marketing-circle"></div>
          <div className='section4-text2 position-absolute'>
            Another way
          </div>
          <div className='section4-text1 position-absolute d-flex justify-content-around'>
            <div>Integrated</div>
            <div>Marketing</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section4