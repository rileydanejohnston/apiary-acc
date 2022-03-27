import React from 'react'
import {
  BenefitsSection,
  BenefitText,
  Image,
  LogisticsGroup,
  StorageGroup,
  SupplyGroup,
} from './styledBenefits'
import { SustainableData } from '../../constants/sustainableConstants'
const { logisticData, supplyData, storageData } = SustainableData
const { logisticsImg, logisticsText, logisticsSize } = logisticData
const { supplyImg, supplyText, supplySize } = supplyData
const { storageImg, storageText, storageSize } = storageData

const Benefits = () => {
  return (
    <BenefitsSection>
      <LogisticsGroup>
        <Image
          img={logisticsImg}
          width={logisticsSize.width}
          height={logisticsSize.height}
        />
        <BenefitText>{logisticsText}</BenefitText>
      </LogisticsGroup>
      <SupplyGroup>
        <Image
          img={supplyImg}
          width={supplySize.width}
          height={supplySize.height}
        />
        <BenefitText>{supplyText}</BenefitText>
      </SupplyGroup>
      <StorageGroup>
        <Image
          img={storageImg}
          width={storageSize.width}
          height={storageSize.height}
        />
        <BenefitText>{storageText}</BenefitText>
      </StorageGroup>
    </BenefitsSection>
  )
}

export default Benefits