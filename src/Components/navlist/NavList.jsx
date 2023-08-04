import { useState } from 'react'
import './navlist.scss'
const NavList = ({setListOpen}) => {
  return (
    <div className='navlist' onClick={()=>{setListOpen(false)}}>
        <ul>
            <li>Home</li>
            <li>Market</li>
            <li>Join Us</li>
            <li>Contact</li>
        </ul>

    </div>
  )
}

export default NavList
