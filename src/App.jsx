import { useEffect } from 'react'
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
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
    </>
  )
}

export default App
