import React from 'react'
import { carRental } from '../Database/Screenshots'
import { ImageSliderItem } from '../Components/ImageSliderItem'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { Link, NavLink } from 'react-router-dom';


export const RentalProjectInfo = () => {
 
  return (
    <>
    
    <div className='Rental-Project-Info-Container'>
      <h1 className='Rental-Project-Info-Title'>Car Rental Service</h1>
      <div className='Rental-Project-Info-Skills'>
        <h2 className='Rental-Info-Skills-Title'>Skills Used</h2>
        <div className='Rental-Info-Skills-List'>
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>JAVASCRIPT</h5>
          <h5>REACT</h5>
          <h5>FIREBASE</h5>
        </div>
      </div>
    <div className='Rental-Project-Screenshots-Container'>
      <AliceCarousel autoPlay autoPlayInterval={3000}>
      {
         carRental.map((screenshot)=>{
          return <ImageSliderItem key={screenshot.id} screenshot={screenshot}/>
         })
      }
     </AliceCarousel>
     </div>
     <div className='Rental-Project-Info-Buttons'>
     
     <NavLink to={'https://car-rental-d2818.web.app'}>View live</NavLink>
     <NavLink to={'/'}>Return Home</NavLink>
    

    </div>
    <div className="Rental-bottom"></div>
    </div>
    </>
  )
}
