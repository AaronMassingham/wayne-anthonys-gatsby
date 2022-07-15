import React, { useRef,useLayoutEffect } from 'react'
import gsap from 'gsap'

//Style 
import { animatedBg, bg } from '../background/background.module.css'

export default function Background() {

  const backgroundAnimation = useRef();

  useLayoutEffect(() => {
    gsap.to(backgroundAnimation.current, {x: '900px', duration:60, ease: "none", repeat: -1});
  },[]);

  return (
    <div className={ animatedBg }>
      <div className={ bg } ref={ backgroundAnimation }></div>
    </div>

  )
}
