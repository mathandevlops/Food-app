import React from 'react'
import Logo from "./assets/pizza-slice-solid.svg"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'> <img src={Logo}/></div>
        <div className='rightside'>
            <Link to= "/">Home</Link>
            <Link to= "menu">Menu Page</Link>
            <Link to= "about">About</Link>
            <Link to= "contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar