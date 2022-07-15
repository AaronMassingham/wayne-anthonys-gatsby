import React from 'react'
import { Link } from 'gatsby'

import { nav, nav_active } from '../nav/nav.module.css'

export default function Nav({ toggle, toggleActive }) {
  return (
    <div onClick={() => toggle(!toggleActive)} role="button" className={`flex-center ${ nav }`}>
        <Link activeClassName={nav_active} to="/">Home</Link>
        <Link activeClassName={nav_active} to="/about">Cuts &amp; Shaves</Link>
        <Link activeClassName={nav_active} to="/experience">The Experience</Link>
        <Link activeClassName={nav_active} to="/shop">Shop</Link>
        <Link activeClassName={nav_active} to="/block">Blog</Link>
        <Link activeClassName={nav_active} to="/contact">Contact &amp; Location</Link>
    </div>
  )
}
