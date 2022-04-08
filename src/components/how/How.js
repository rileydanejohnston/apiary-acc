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
import { initial, whileInView, viewport, transition } from '../../constants/animateRevealConst';
const {
  title,
  steps,
  highlighter,
  buttonText
} = HowInfo;

const How = (props) => {

  return (
    <HowWrapper
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
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