import React from 'react'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandScissors } from '@fortawesome/free-solid-svg-icons'

//Components
import Layout from '../components/layout/Layout'
import FullBackground from '../components/blocks/FullBackground'
import Button from '../components/button/Button'

export default function About() {

  return (
    <Layout>
      <FullBackground blocktype="hero">
        About

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


      </FullBackground>

    </Layout>

  )
}
