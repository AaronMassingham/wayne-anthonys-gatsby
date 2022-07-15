import React from 'react'

import { social } from '../social/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Social() {
  return (
    <div className={`flex-between ${ social }`}>
      <FontAwesomeIcon icon={ faFacebookF }/>
      <FontAwesomeIcon icon={ faInstagram }/>
      <FontAwesomeIcon icon={ faYoutube }/>
      <FontAwesomeIcon icon={ faTwitter }/>
    </div> 
  )
}
