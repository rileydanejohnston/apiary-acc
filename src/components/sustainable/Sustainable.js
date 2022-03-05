import React from 'react'
import { Highlight } from '../sharedComponents/sharedComponents'
import arrowLeft from '../../images/arrow-left.svg'
import arrowRight from '../../images/arrow-right.svg'
import {
  BenefitsSection,
  BenefitText,
  Carousel,
  CarouselButton,
  Circle,
  ContainerImg,
  LogisticsGroup,
  Slide,
  StorageGroup,
  Subtitle,
  SupplyGroup,
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
        <BenefitsSection>
          <LogisticsGroup>
            <ContainerImg />
            <BenefitText>Backend logistics support</BenefitText>
          </LogisticsGroup>
          <SupplyGroup>
            <Circle />
            <BenefitText>
              Save at least 50% on supply cost and time on inventory tracking/re-orders
            </BenefitText>
          </SupplyGroup>
          <StorageGroup>
            <Circle />
            <BenefitText>
            Save storage space while removing tons of waste from our oceans and landfills
            </BenefitText>
          </StorageGroup>
        </BenefitsSection>
      </SustainableContent>
    </SustainableWrapper>
  )
}

export default Sustainable