import React, { useEffect, useState } from 'react'
import logoWhite from '../assets/logowhite-removebg-preview.png'
import logoBlack from '../assets/logo-removebg-preview.png'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

export const Navbar = ({ProjectInfoStyles,scrollToSearch,ProjectsRef,ContactRef}) => {
  const navigate= useNavigate()
  const [mobileMenu,setMobileMenu] = useState(false)
  const params = useParams()
  useEffect(()=>{
    console.log(params.id)
  },[])
  const handleMobileMenu = () => {
    if(!window.location.pathname.endsWith('/')){
      window.location='/'
    }
    setMobileMenu(!mobileMenu)
  }
  const handleProjectTab = () => {
    if(!window.location.pathname.endsWith('/')){
      window.location='/'
    }
    setMobileMenu(!mobileMenu)
    if(window.location.pathname.endsWith('/')){
    scrollToSearch(ProjectsRef)
    }
  }
  const handleContactTab = () => {
    if(!window.location.pathname.endsWith('/')){
      window.location='/'
    }
    setMobileMenu(!mobileMenu)
    if(window.location.pathname.endsWith('/')){
      scrollToSearch(ContactRef)
    }
  
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
            <button onClick={()=>setMobileMenu(!mobileMenu)} className={mobileMenu?'Hamburger-Button Active':'Hamburger-Button'}>
            <div className='bar'>

            </div>
            </button>
          </div>
            <div className={mobileMenu?'Hamburger-Menu-Links':'Hamburger-Menu-Links Hide'}>
            <NavLink className='Hamburger-Menu-Link' onClick={handleMobileMenu} style={{textDecoration:'none', color:ProjectInfoStyles?"black":"white"}}>Home</NavLink>
            <NavLink className='Hamburger-Menu-Link'onClick={handleProjectTab} style={{textDecoration:'none', color:ProjectInfoStyles?"black":"white"}}>projects</NavLink>
            <NavLink className='Hamburger-Menu-Link'onClick={handleContactTab} style={{textDecoration:'none', color:ProjectInfoStyles?"black":"white"}}>contact</NavLink>
            </div>
        </div>
    </div>
  )
}
