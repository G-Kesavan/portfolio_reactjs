 import React from 'react'
import './Header.css'

const Header = ({heading ,topRef}) => {

  return (
    <header ref={topRef}>
        <h1>{heading}</h1>
    </header>
    
  )
}

export default Header