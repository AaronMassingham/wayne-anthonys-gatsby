import React from 'react'

//style
import { button } from '../button/button.module.css'

export default function Button(props) {
  return (
    <button className={ button }>{ props.text }</button>
  )
}
