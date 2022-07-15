import React, { useState } from 'react'

//style
import { header, copyright, navOpen, navClosed, nav_container, backdrop } from '../header/header.module.css'

//Components
import Nav from '../nav/Nav'
import Logo from '../logo/Logo'
import Burger from '../nav/Burger'
import Social from '../social/Social'

export default function Header() {

  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${ header } ${toggle ? `${navOpen}` : `${navClosed}`}`}>


      <div className='bdr-b-solid'>
        <Logo/>
        <Burger toggle={ setToggle } toggleActive={ toggle }/>
      </div>


      <div className={ nav_container }>

        <div>
          <Nav toggle={ setToggle } toggleActive={ toggle }/>
        </div>

        <div className='flex-between bdr-t-solid'>
          <h2>Enquire</h2>
          <span className='h2-style chonky'>01422 202 848</span>
        </div>

        <div className='bdr-t-solid'>
          <h2>Follow</h2>
          <Social />
        </div>

        <div className={`bdr-t-solid flex-between ${ copyright }`}>
          <span>&copy; 2022 Wayne Anthony</span>
          <span>&frasl; &frasl;</span>
          <span>Built Off Grid by <a href="https://www.facebook.com/arnmMultimedia" rel="noreferrer" target="_blank">ARNM</a></span>
        </div>

      </div>

      <div className={`${ backdrop } ${toggle ? `${navOpen}` : `${navClosed}`}`}></div>
    </div>
    
  )
}