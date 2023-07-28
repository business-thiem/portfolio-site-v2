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
      <a href="#experience"> <FaBookOpen/> </a>
      <a href="#services"> <MdDesignServices/> </a>
      <a href="#contact"> <BiSolidMessageAltDetail/> </a>
    </nav>
  )
}

export default Nav