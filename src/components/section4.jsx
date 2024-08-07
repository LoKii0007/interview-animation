import React, { useEffect } from 'react'
import '../css/section4.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function Section4() {

  gsap.registerPlugin(ScrollTrigger)

  useEffect(() => {
    const height = window.innerHeight

    gsap.to('.marketing-circle', {
      scale: 1,
      scrollTrigger: {
        trigger: '.section-4',
        start: 'top top',
        end: `+=${height}`,
        scrub: 1
      }
    })

    ScrollTrigger.create({
      trigger: '.section-4',
      start: 'top top',
      end: `+=${height*2}`,
      pin: '.part-1',
      scrub: 1
    })

    gsap.to('.section4-text2', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.main-div',
        start: 'bottom -50%',
        end: `+=${height / 2}`,
        scrub: 1
      }
    })

    gsap.to('.section4-text1', {
      opacity: 1,
      width :'100%',
      scrollTrigger: {
        trigger: '.section-4',
        start: 'center bottom',
        end: `+=${height}`,
        scrub: 1,
        // markers : true
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
        {/* <div className="part-2 spacing"></div> */}
      </div>
    </>
  )
}

export default Section4