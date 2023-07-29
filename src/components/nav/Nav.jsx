import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {FaUserCircle} from 'react-icons/fa'
import {FaBookOpen} from 'react-icons/fa'
import {MdDesignServices} from 'react-icons/md'
import {BiSolidMessageAltDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}> <HiHome/> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} > <FaUserCircle/> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} > <FaBookOpen/> </a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''} > <MdDesignServices/> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}> <BiSolidMessageAltDetail/> </a>
    </nav>
  )
}

export default Nav