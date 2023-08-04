import React, { useState } from 'react'
import './navbar.scss'
import { Instagram, Menu, Twitter } from '@mui/icons-material'
import NavList from '../navlist/NavList'

const Navbar = () => {

    const [listOpen, setListOpen] = useState(false)

  return (
<>
    <div className='navbar'>
      <div className="left">
        <h1>CRYPTO-TRACKER</h1>
      </div>
      <div className="center">
        <h2>Home</h2>
        <h2>Market</h2>
        <h2>Choose Us</h2>
        <h2>Join</h2>
      </div>
      <div className="right">
    <div className="iconlist">
        <Twitter/>
        <Instagram/>
    </div>
        <Menu className='menu' onClick={() => setListOpen(true)} style={{cursor:"pointer"}}></Menu>
    </div>
    </div>
        {listOpen && <NavList setListOpen={setListOpen}/>}
</>

  )
}

export default Navbar
