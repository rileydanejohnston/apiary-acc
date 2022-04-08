import React from 'react'
import { Highlight } from '../sharedComponents/sharedComponents'
import {
  Subtitle,
  SustainableWrapper,
  Title,
  TitlesGroup
} from './styledSustainable'
import { SustainableData } from '../../constants/sustainableConstants'
import Carousel from '../carousel/Carousel'
import Benefits from '../benefits/Benefits'
import { initial, whileInView, viewport, transition } from '../../constants/animateRevealConst';
const {
  title,
  subtitle,
} = SustainableData



const Sustainable = () => {

  return (
    <SustainableWrapper
      id='solution'
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      <TitlesGroup>
        <Title>{title}</Title>
        <Subtitle>
          <Highlight>{subtitle.highlight}</Highlight>
          {subtitle.normal}
        </Subtitle>
      </TitlesGroup>
      <Carousel />
      <Benefits />
    </SustainableWrapper>
  )
}

export default Sustainable