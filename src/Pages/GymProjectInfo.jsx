import React from 'react'
import { Gymguide } from '../Database/Screenshots'
import { ImageSliderItem } from '../Components/ImageSliderItem'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { NavLink } from 'react-router-dom';


export const GymProjectInfo = () => {
 
  return (
    <>

    <div className='Gym-Project-Info-Container'>
      <h1 className='Gym-Project-Info-Title'>Beginner Gym Guide</h1>
      <div className='Gym-Project-Info-Skills'>
        <h2 className='Gym-Info-Skills-Title'>Skills Used</h2>
        <div className='Gym-Info-Skills-List'>
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>JAVASCRIPT</h5>
          <h5>REACT</h5>
          <h5>FIREBASE</h5>
        </div>
      </div>
    <div className='Gym-Project-Screenshots-Container'>
      <AliceCarousel autoPlay autoPlayInterval={3000}>
      {
         Gymguide.map((screenshot)=>{
          return <ImageSliderItem screenshot={screenshot}/>
         })
      }
     </AliceCarousel>
     </div>
    <div className='Gym-Project-Info-Buttons'>
      
     <NavLink to={'https://fir-practice-5eec1.web.app/'}>View live</NavLink>
     <NavLink to={'/'}>Return Home</NavLink>


    </div>
    <div className="Gym-bottom"></div>
    </div>
    </>
  )
}
