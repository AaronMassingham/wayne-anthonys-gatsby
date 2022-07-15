import React from "react"

//Components
import Header from "../header/Header"

//Styles
import '../../styles/style.css'

const Layout = ({ children }) => {
  return (
    <>
      
      <div className="wrapper">
        <Header />
        <main>
          { children }

        </main>
      </div>
    </>
  )
}

export default Layout