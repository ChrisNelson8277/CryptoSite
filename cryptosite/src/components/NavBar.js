import React from 'react'
import '../css/navBar.css'
import { Spin as Hamburger } from 'hamburger-react'

const NavBar = (props) => {
  return (
    <nav className='nav-bar'>
        <div style={{textAlign:"left"}}>CryptoTracker 

        </div>
        <div className=''>
            <Hamburger onToggle={() => {props.setOpenSideBar(!props.sideBar)}} />


        </div>
    </nav>
  )
}

export default NavBar