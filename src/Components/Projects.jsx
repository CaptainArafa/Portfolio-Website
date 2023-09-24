import React from 'react'
import Project1 from '../assets/Laptop-Project11.png'
import Project2 from '../assets/Laptop-Project22.png'
import { Link } from 'react-router-dom'

export const Projects = ({ProjectsRef}) => {
  return (
    <div className='Projects-Section'>
      <div className='Projects-Section-Title' ref={ProjectsRef}>
      <h1>My work</h1>
      <span></span>
      </div>
      <div className="Projects-Container">
        <div className='Single-Project-Container'>
        <img src={Project1} alt="Project 1" />
        <div className='Single-Project-Body'>
          <h3>Beginner Gym Guide</h3>
          <p>The Gym Guide website includes a Calorie tracking service, access to a database of all exercises for each muscle group with a search bar and a gym guide form that returns to you a specified workout routine and caloric intake based on your goals and user authentication. all built from scratch using APIs </p>
          <div className='Single-Project-Buttons'>
            <Link to={'https://fir-practice-5eec1.web.app/'} className='Live-Preview'>Live Preview</Link>
            <Link to={'/project/1'} className='More-Info'>More Info</Link>
          </div>
        </div>
        </div>
        <div className='Single-Project-Container'>
        <img src={Project2} alt="Project 2" />
        <div className='Single-Project-Body'>
          <h3>Car Rental Service</h3>
          <p>The Car Rental website is a fully operational Exotic Car rental with user authentication that let's you view the reservations you've made and gives you the option to cancel them </p>
          <div className='Single-Project-Buttons'>
            <Link to={'https://car-rental-d2818.web.app'} className='Live-Preview'>Live Preview</Link>
            <Link to={'/project/2'} className='More-Info'>More Info</Link>
          </div>
        </div>
        
        </div>
      </div>
      </div>
  )
}
