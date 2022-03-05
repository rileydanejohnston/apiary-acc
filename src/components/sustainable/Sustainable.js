import React from 'react'
import { Highlight } from '../sharedComponents/sharedComponents'
import arrowLeft from '../../images/arrow-left.svg'
import arrowRight from '../../images/arrow-right.svg'
import {
  Carousel,
  CarouselButton,
  Slide,
  Subtitle,
  SustainableContent,
  SustainableWrapper,
  Title,
  TitlesGroup
} from './styledSustainable'

const Sustainable = () => {
  

  return (
    <SustainableWrapper>
      <SustainableContent>
        <TitlesGroup>
          <Title>Sustainability Delivered</Title>
          <Subtitle>
            <Highlight>Awesome Container Company </Highlight>
            replaces single-use packaging with reusable stainless steel containers
          </Subtitle>
        </TitlesGroup>
        <Carousel >
          <CarouselButton image={arrowLeft} />
          <Slide/>
          <CarouselButton image={arrowRight} />
        </Carousel>
      </SustainableContent>
    </SustainableWrapper>
  )
}

export default Sustainable