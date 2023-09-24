import React from 'react'

export const ImageSliderItem = ({screenshot}) => {

  return (
    <img className='sliderimg' src={screenshot.img} alt="Project-Screenshot" />
  )
}
