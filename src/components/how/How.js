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

const How = () => {
  return (
    <HowWrapper>
      <HowContent>
        <HowTitle>How it works?</HowTitle>
        <StepsWrapper>
          <StepGroup>
            <Phone />
            <StepText>
              {`01.\nRestaurants request reusable\ncontainers via app`}
            </StepText>
          </StepGroup>
          <Highlighter>Circular ecosystem</Highlighter>
          <StepGroup>
            <Containers />
            <StepText>
              {`03.\nPick up used containers from users\nvia app`}
            </StepText>
          </StepGroup>
          <StepGroupTruck>
            <Truck />
            <StepText>
              {`02.\nDeliver containers\nto restaurants`}
            </StepText>
          </StepGroupTruck>
          <StepGroupStars>
            <Stars/>
            <StepText>
              {`04.\nWash containers\nat commercial facility`}
            </StepText>
          </StepGroupStars>
          <TopLeftArrow />
          <TopRightArrow />
          <BottomRightArrow />
          <BottomLeftArrow />
        </StepsWrapper>
        <WorkButton>Work With Us</WorkButton>
      </HowContent>
    </HowWrapper>
  )
}

export default How