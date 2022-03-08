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
import { SustainableData } from '../../constants/sustainableConstants'
const {
  title,
  subtitle,
  logisticText,
  supplyText,
  storageText
} = SustainableData

const Sustainable = () => {

  return (
    <SustainableWrapper>
      <SustainableContent>
        <TitlesGroup>
          <Title>{title}</Title>
          <Subtitle>
            <Highlight>{subtitle.highlight}</Highlight>
            {subtitle.normal}
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
            <BenefitText>{logisticText}</BenefitText>
          </LogisticsGroup>
          <SupplyGroup>
            <Circle />
            <BenefitText>{supplyText}</BenefitText>
          </SupplyGroup>
          <StorageGroup>
            <Circle />
            <BenefitText>{storageText}</BenefitText>
          </StorageGroup>
        </BenefitsSection>
      </SustainableContent>
    </SustainableWrapper>
  )
}

export default Sustainable