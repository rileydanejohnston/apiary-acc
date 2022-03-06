import React, { useCallback } from 'react'
import arrowLeft from '../../images/arrow-left.svg'
import arrowRight from '../../images/arrow-right.svg'
import { CarouselData } from '../../constants/carouselConst'
import Slide from '../slide/Slide'
import useEmblaCarousel from 'embla-carousel-react';
import {
  CarouselWrapper,
  CarouselButton,
  ViewPort,
  SlideContainer,
} from './styledCarousel'

const Carousel = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <CarouselWrapper >
      <CarouselButton image={arrowLeft} onClick={scrollPrev} />
        <ViewPort ref={emblaRef}>
          <SlideContainer>
          {
            CarouselData.map((slide, index) => {
              return (
                <Slide key={index} data={slide} />
              )
            })
          }
          </SlideContainer>
        </ViewPort>
      <CarouselButton image={arrowRight} onClick={scrollNext} />
    </CarouselWrapper>
  )
}

export default Carousel