import React from 'react'

//style
import { button, small, icon } from '../button/button.module.css'

export default function Button(props) {

/*
    <Button text="Normal With Icon" hasIcon="yes" isSmall="">
      <span>
        <FontAwesomeIcon icon={ faHandScissors }/>
      </span>
    </Button>

    <Button text="Small With Icon" hasIcon="yes" isSmall="yes">
      <span>
        <FontAwesomeIcon icon={ faHandScissors }/>
      </span>
    </Button>

    <Button text="Normal No Icon" hasIcon="" isSmall=""/>

    <Button text="Small No Icon" hasIcon="" isSmall="yes"/>
*/

  return (
    <button 
      className={`
        ${button}  
        ${props.isSmall ? small : null}
        ${props.hasIcon ? icon : null}
      `}>
      {props.children}{props.text}
    </button>
  )
}
