import React from 'react'
import {
  HowWrapper,
  HowContent,
  HowTitle,
  StepsWrapper,
  WorkButton,
  Highlighter,
} from './styledHow'
import { HowInfo } from '../../constants/howConst'
import Step from '../step/Step';
import uniqueId from 'lodash.uniqueid';
const {
  title,
  steps,
  highlighter,
  buttonText
} = HowInfo;

const How = (props) => {

  return (
    <HowWrapper>
      <HowContent>
        <HowTitle>{title}</HowTitle>
        <StepsWrapper>
          {
            steps.map((step, index) => {
              return (
                <Step step={step} key={uniqueId()} order={index * 2} />
              )
            })
          }
          <Highlighter>{highlighter}</Highlighter>
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