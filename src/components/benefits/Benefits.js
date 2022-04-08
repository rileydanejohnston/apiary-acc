import React from 'react'
import {
  BenefitsSection,
  BenefitText,
  Image,
  BenefitGroup,
} from './styledBenefits'
import { SustainableData } from '../../constants/sustainableConstants'
import { initial, whileInView, viewport, transition } from '../../constants/animateRevealConst';
const { logisticData, supplyData, storageData } = SustainableData
const { logisticsImg, logisticsText, logisticsTextWidth, logisticsSize, logisticsPosition } = logisticData
const { supplyImg, supplyText, supplyTextWidth, supplySize, supplyPosition } = supplyData
const { storageImg, storageText, storageTextWidth, storageSize, storagePosition } = storageData



const Benefits = () => {
  return (
    <BenefitsSection
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      <BenefitGroup position={logisticsPosition}>
        <Image
          img={logisticsImg}
          width={logisticsSize.width}
          height={logisticsSize.height}
        />
        <BenefitText width={logisticsTextWidth}>{logisticsText}</BenefitText>
      </BenefitGroup>
      <BenefitGroup position={supplyPosition}>
        <Image
          img={supplyImg}
          width={supplySize.width}
          height={supplySize.height}
        />
        <BenefitText width={supplyTextWidth}>{supplyText}</BenefitText>
      </BenefitGroup>
      <BenefitGroup position={storagePosition}>
        <Image
          img={storageImg}
          width={storageSize.width}
          height={storageSize.height}
        />
        <BenefitText width={storageTextWidth}>{storageText}</BenefitText>
      </BenefitGroup>
    </BenefitsSection>
  )
}

export default Benefits