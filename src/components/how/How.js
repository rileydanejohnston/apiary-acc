import React from 'react'
import {
  HowWrapper,
  HowContent,
  HowTitle,
  StepsWrapper,
  WorkButton
} from './styledHow'

const How = () => {
  return (
    <HowWrapper>
      <HowContent>
        <HowTitle>How it works?</HowTitle>
        <StepsWrapper></StepsWrapper>
        <WorkButton>Work With Us</WorkButton>
      </HowContent>
    </HowWrapper>
  )
}

export default How