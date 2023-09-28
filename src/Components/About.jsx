import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className='About-Section'>
        <div className='About-Me'>
        <h2>Hi, I’m Youssef. Nice to meet you.</h2>
        <div className='About-Me-Body'>
                    <p>I'm a 19-year-old Frontend Developer who specializes in React. I have two years of experience, and am capable of  turning any idea you have into an operational website with any feature you want. When I'm not at my desk working my magic, you can find me working out at the gym.</p>
                    <div className='About-Links'><Link to={'/'}><BsGithub size={'30'} color='white' /></Link><Link to={'/'}><BsLinkedin size={'30'} color='white' /></Link></div>
                </div>
                </div>
            <div className='About-Skills'>
            <div className='Skills-Title'>
        <h1>My Skills</h1>
        <span></span>
        </div>
                <div className='About-Skills-Container'>
                    <h4 className='About-Skills-Card'>HTML</h4>
                    <h4 className='About-Skills-Card'>CSS</h4>
                    <h4 className='About-Skills-Card'>JAVASCRIPT</h4>
                    <h4 className='About-Skills-Card'>TYPESCRIPT</h4>
                    <h4 className='About-Skills-Card'>REACT</h4>
                    <h4 className='About-Skills-Card'>GIT</h4>
                    <h4 className='About-Skills-Card'>NODE</h4>
                    <h4 className='About-Skills-Card'>GITHUB</h4>
                    <h4 className='About-Skills-Card'>FIREBASE</h4>
                </div>
            </div>

        </div>
  )
}
