import React from 'react'
import { Highlight } from '../sharedComponents/sharedComponents'
import {
  BenefitsSection,
  BenefitText,
  Circle,
  ContainerImg,
  LogisticsGroup,
  StorageGroup,
  Subtitle,
  SupplyGroup,
  SustainableContent,
  SustainableWrapper,
  Title,
  TitlesGroup
} from './styledSustainable'
import { SustainableData } from '../../constants/sustainableConstants'
import Carousel from '../carousel/Carousel'
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
        <Carousel />
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