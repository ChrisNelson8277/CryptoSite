import React from 'react'
import '../css/navBar.css'
import { Spin as Hamburger } from 'hamburger-react'
import { useNavigate } from 'react-router-dom'

const NavBar = (props) => {
  const navigate= useNavigate();
  return (
    <nav className='nav-bar'>
        <div onClick={()=>{navigate('/')}} style={{textAlign:"left"}}>CryptoSearch

        </div>
        <div className=''>
            <Hamburger onToggle={() => {props.setOpenSideBar(!props.sideBar)}} />


        </div>
    </nav>
  )
}

export default NavBar