import React from 'react'
import {
  HowWrapper,
  HowContent,
  HowTitle,
  StepsWrapper,
  WorkButton,
  StepGroup,
  StepGroupTruck,
  Phone,
  Containers,
  StepText,
  Highlighter,
  Truck,
  Stars,
  StepGroupStars,
  TopLeftArrow,
  TopRightArrow,
  BottomRightArrow,
  BottomLeftArrow,

} from './styledHow'
import { HowData } from '../../constants/howConst'
const {
  title,
  step1,
  step2,
  step3,
  step4,
  highlighter,
  buttonText
} = HowData;

const How = () => {
  return (
    <HowWrapper>
      <HowContent>
        <HowTitle>{title}</HowTitle>
        <StepsWrapper>
          <StepGroup>
            <Phone />
            <StepText>{step1}</StepText>
          </StepGroup>
          <Highlighter>{highlighter}</Highlighter>
          <StepGroup>
            <Containers />
            <StepText>{step3}</StepText>
          </StepGroup>
          <StepGroupTruck>
            <Truck />
            <StepText>{step2}</StepText>
          </StepGroupTruck>
          <StepGroupStars>
            <Stars/>
            <StepText>{step4}</StepText>
          </StepGroupStars>
          <TopLeftArrow />
          <TopRightArrow />
          <BottomRightArrow />
          <BottomLeftArrow />
        </StepsWrapper>
        <WorkButton>{buttonText}</WorkButton>
      </HowContent>
    </HowWrapper>
  )
}

export default How