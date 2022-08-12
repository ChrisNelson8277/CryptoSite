import React from 'react'
import '../css/sidebar.css'
import {motion} from 'framer-motion'

const SideBar = () => {
    
  return (
    <motion.div animate={{ x: -37 }} transition={{ type: "tween", duration: 0.5 }} className='side-bar'>
        
    </motion.div>
  )
}

export default SideBar