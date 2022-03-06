import React from 'react'
import arrowLeft from '../../images/arrow-left.svg'
import arrowRight from '../../images/arrow-right.svg'
import {
  CarouselWrapper,
  CarouselButton,
  Slide
} from './styledCarousel'

const Carousel = () => {
  return (
    <CarouselWrapper >
      <CarouselButton image={arrowLeft} />
      <Slide />
      <CarouselButton image={arrowRight} />
    </CarouselWrapper>
  )
}

export default Carousel