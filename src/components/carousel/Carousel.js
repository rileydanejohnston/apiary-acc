import React, { useState, useCallback } from 'react'
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
  ButtonWrapper,
} from './styledCarousel'
import uniqueId from 'lodash.uniqueid'
import { initial, whileInView, viewport, transition } from '../../constants/animateRevealConst';

const Carousel = () => {

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
    <CarouselWrapper
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      { /* scroll buttons appear on sides of carousel at large screen sizes */}
      <ButtonWrapper>
        <CarouselButton image={arrowLeft} onClick={scrollPrev} />
      </ButtonWrapper>
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
      { /* scroll buttons appear on sides of carousel at large screen sizes */}
      <ButtonWrapper>
        <CarouselButton image={arrowRight} onClick={scrollNext} />
      </ButtonWrapper>
      { /* scroll buttons appear below carousel at smaller screens */}
      <MobileBtnWrapper>
        <CarouselButton image={arrowLeft} onClick={scrollPrev} />
        <CurrentSlide>{scrollProgress}/3</CurrentSlide>
        <CarouselButton image={arrowRight} onClick={scrollNext} />
      </MobileBtnWrapper>
    </CarouselWrapper>
  )
}

export default Carousel