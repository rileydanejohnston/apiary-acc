import React from 'react'
import {
  BenefitsSection,
  BenefitText,
  Circle,
  ContainerImg,
  LogisticsGroup,
  StorageGroup,
  SupplyGroup,
} from './styledBenefits'
import { SustainableData } from '../../constants/sustainableConstants'
const {
  logisticText,
  supplyText,
  storageText
} = SustainableData

const Benefits = () => {
  return (
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
  )
}

export default Benefits