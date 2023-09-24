import React, { useState } from 'react'
import logoWhite from '../assets/logowhite-removebg-preview.png'
import logoBlack from '../assets/logo-removebg-preview.png'
import { NavLink } from 'react-router-dom'

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
    <div className={ProjectInfoStyles?'Nav-ProjectInfo':'Nav-Container'}>
        
        <NavLink to={'/'} style={{cursor:'pointer'}}><img className='logo' src={ProjectInfoStyles? logoBlack:logoWhite} /></NavLink>
        <div className="Nav-Links">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink onClick={()=>scrollToSearch(ProjectsRef)}>Projects</NavLink>
        <NavLink onClick={()=>scrollToSearch(ContactRef)}>Contact</NavLink>
        </div>
        <div className='Hamburger-Menu'>
          <div className='Hamburger-Logo'>
            <button onClick={handleMobileMenu} className={mobileMenu?'Hamburger-Button Active':'Hamburger-Button'}>
            <div className='bar'>

            </div>
            </button>
          </div>
            <div className={mobileMenu?'Hamburger-Menu-Links':'Hamburger-Menu-Links Hide'}>
            <NavLink onClick={handleMobileMenu} style={{textDecoration:'none'}} to={"/"}>Home</NavLink>
            <NavLink onClick={handleProjectTab} style={{textDecoration:'none'}}>projects</NavLink>
            <NavLink onClick={handleContactTab} style={{textDecoration:'none'}}>contact</NavLink>
            </div>
        </div>
    </div>
  )
}
