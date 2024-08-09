import { useEffect, useState } from 'react'
import Section3 from './components/section3'
import Section4 from './components/section4'
import Section1 from './components/section1'
import Section6 from './components/section6'
import Section2 from './components/section2'
import Section5 from './components/section5'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import './app.css'

function App() {

  gsap.registerPlugin(ScrollTrigger)

  const [isMobile, setIsMobile] = useState(window.innerWidth<600)

  function responsive(){
    if(window.innerWidth<600) setIsMobile(true)
    else setIsMobile(false)
  }

  useEffect(()=>{
    responsive()
    window.addEventListener('resize', responsive)

    return()=>{
      window.removeEventListener('resize', responsive)
    }
  }, [])

  useEffect(()=>{
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  }, [])

  return (
    <>
      <Section1 isMobile={isMobile}/>
      <Section2 isMobile={isMobile}/>
      <Section3 isMobile={isMobile}/>
      <Section4 isMobile={isMobile}/>
      <Section6 isMobile={isMobile}/>
      <Section5 isMobile={isMobile} />
    </>
  )
}

export default App
