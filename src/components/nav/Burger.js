import React from 'react'

import { burger_button } from '../nav/nav.module.css'

export default function Burger({ toggle, toggleActive }) {
  return (
    <button onClick={() => toggle(!toggleActive)} className={`${burger_button} ${toggleActive ? 'navOpen' : 'navClosed'}`}>
        <span></span>
        <span></span>
        <span></span>
    </button>
  )
}
