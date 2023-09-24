import React, { useEffect, useState } from 'react'
import logoWhite from '../assets/logowhite-removebg-preview.png'
import { NavLink} from 'react-router-dom'

export const Navbar = ({ProjectInfoStyles,scrollToSearch,ProjectsRef,ContactRef}) => {
  const [mobileMenu,setMobileMenu] = useState(false)
  
  const handleMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }
  const handleProjectTab = () => {
    setMobileMenu(!mobileMenu)
    scrollToSearch(ProjectsRef)
  }
  
  const handleContactTab = () => {
    setMobileMenu(!mobileMenu)
      scrollToSearch(ContactRef)
  }
  return (
    <div className='Nav-Container'>
        
        <NavLink to={'/'} style={{cursor:'pointer'}}><img className='logo' src={logoWhite} /></NavLink>
        <div className="Nav-Links">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink onClick={()=>scrollToSearch(ProjectsRef)}>Projects</NavLink>
        <NavLink onClick={()=>scrollToSearch(ContactRef)}>Contact</NavLink>
        </div>
        <div className='Hamburger-Menu'>
          <div className='Hamburger-Logo'>
            <button onClick={()=>setMobileMenu(!mobileMenu)} className={mobileMenu?'Hamburger-Button Active':'Hamburger-Button'}>
            <div className='bar'>

            </div>
            </button>
          </div>
            <div className={mobileMenu?'Hamburger-Menu-Links':'Hamburger-Menu-Links Hide'}>
            <NavLink className='Hamburger-Menu-Link' onClick={handleMobileMenu} style={{textDecoration:'none'}}>Home</NavLink>
            <NavLink className='Hamburger-Menu-Link'onClick={handleProjectTab} style={{textDecoration:'none',}}>projects</NavLink>
            <NavLink className='Hamburger-Menu-Link'onClick={handleContactTab} style={{textDecoration:'none',}}>contact</NavLink>
            </div>
        </div>
    </div>
  )
}
