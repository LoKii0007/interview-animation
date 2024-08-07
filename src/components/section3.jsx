import React, { useEffect, useRef, useLayoutEffect } from 'react'
import '../css/section3.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from 'gsap'

function Section3() {
  gsap.registerPlugin(ScrollTrigger)
  // const sectionRef = useRef()

  useLayoutEffect(() => {

    const windowHeight = window.innerHeight
    console.log(windowHeight)
    // const ref1 = sectionRef.current

    // if (ref1) {
      gsap.to('.word-text, .inner-circle, .middle-circle, .outer-circle', {
        rotation: 0,
        scrollTrigger: {
          trigger: '.section-4',
          start: 'top bottom',
          end: 'top top',
          scrub: 1
        }
      })

      gsap.to('.word', {
        scrollTrigger: {
          trigger: '.word',
          start: 'top top',
          end: `+=${windowHeight}`,
          pin: true,
          scrub: 1,
          // markers : true,
        }
      })

    //  }
  }, [])

  return (
    <>
      {/* <div ref={sectionRef} className="main-div"> */}
        <div className="word pinned d-flex justify-content-center align-items-center ">
          <div className='word-text'>
            Aim high. <br />
            BUild fast.
          </div>
          <div className="outer-circle d-flex justify-content-center align-items-center position-absolute">
            Aim high. <br />
            BUild fast.
          </div>
          <div className="middle-circle d-flex justify-content-center align-items-center position-absolute">
            Aim high. <br />
            BUild fast.
          </div>
          <div className="inner-circle d-flex justify-content-center align-items-center position-absolute">
            Aim high. <br />
            BUild fast.
          </div>
        </div>
      {/* </div> */}
    </>
  )
}

export default Section3