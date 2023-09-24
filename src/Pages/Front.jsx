import React, { useRef } from 'react'
import { About } from '../Components/About'
import { Projects } from '../Components/Projects'
import { Navbar } from '../Components/Navbar'
import { Contact } from '../Components/Contact'

export const Front = () => {
  const ContactRef=useRef(null)
  const ProjectsRef=useRef(null)

  const scrollToSearch = (ref)=>{
    window.scrollTo({
      top:ref.current.offsetTop,
      behavior:'smooth'
    })
  }
  return (
    <>
    
    <div className='Front-Container'>
    <Navbar scrollToSearch={scrollToSearch} ProjectsRef={ProjectsRef} ContactRef={ContactRef} />
    <div className='Front-Text'>
    <h3>Hey there,</h3>
        <h1>I'm a Frontend Developer</h1>
        <button className='View-Projects-Button' onClick={()=>scrollToSearch(ProjectsRef)}>View Projects</button>

    </div>

    </div>
        <About />
        <Projects ProjectsRef={ProjectsRef} />
        <Contact ContactRef={ContactRef} />
    </>
  )
}
