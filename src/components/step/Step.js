import React from 'react'
import { Image, StepWrapper, Text, Arrow } from './styledStep'

const Step = ({ step, order }) => {

  const { stepStyles, imgStyles, text, textMargin, arrowStyles } = step;

  return (
    <>
      <StepWrapper styles={stepStyles} order={order}>
        <Image styles={imgStyles} />
        <Text styles={textMargin}>{text}</Text>
      </StepWrapper>
      <Arrow styles={arrowStyles} />
    </>
  )
}

export default Step