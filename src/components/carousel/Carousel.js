import React, { useState, useEffect, useCallback } from 'react'
import { withSize } from 'react-sizeme'
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
  MobileBtnWrapper,
  CurrentSlide,
} from './styledCarousel'
import uniqueId from 'lodash.uniqueid'

const Carousel = ({ size }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [scrollProgress, setScrollProgress] = useState(1);

  // loop: if you're on slide 3/3, clicking next goes to 1/3
  // default speed is 10
  useEmblaCarousel.globalOptions = { 
    loop: true,
    speed: 8,
  }

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setScrollProgress(emblaApi.selectedScrollSnap() + 1);
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setScrollProgress(emblaApi.selectedScrollSnap() + 1);
    }
  }, [emblaApi]);

  return (
    <CarouselWrapper >
      { // scroll buttons appear on sides of carousel at large screen sizes
        size.width > 767 && 
        <CarouselButton image={arrowLeft} onClick={scrollPrev} />
      }
        <ViewPort ref={emblaRef}>
          <SlideContainer>
          {
            CarouselData.map((slide) => {
              return (
                <Slide key={uniqueId()} data={slide} />
              )
            })
          }
          </SlideContainer>
        </ViewPort>
        { // scroll buttons appear on sides of carousel at large screen sizes
          size.width > 767 && 
          <CarouselButton image={arrowRight} onClick={scrollNext} />
        }
        { // scroll buttons appear below carousel at smaller screens
          size.width <= 767 && 
          <MobileBtnWrapper>
            <CarouselButton image={arrowLeft} onClick={scrollPrev} />
            <CurrentSlide>{scrollProgress}/3</CurrentSlide>
            <CarouselButton image={arrowRight} onClick={scrollNext} />
          </MobileBtnWrapper>
        }
    </CarouselWrapper>
  )
}

export default withSize()(Carousel)