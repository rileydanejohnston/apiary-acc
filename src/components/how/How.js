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
  Arrow,

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

const How = (props) => {

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
            <Stars />
            <StepText>{step4}</StepText>
          </StepGroupStars>
          <Arrow top='136px' left='27.82%' deg='0deg' />
          <Arrow top='136px' left='69.35%' deg='90deg' />
          <Arrow top='480px' left='69.35%' deg='180deg' />
          <Arrow top='480px' left='27.82%' deg='270deg' />
        </StepsWrapper>
        <WorkButton
          onClick={props.openPopup}>
          {buttonText}
        </WorkButton>
      </HowContent>
    </HowWrapper>
  )
}

export default How