import React from 'react'
import { Image, PriceWrapper, Text, Title, WorkButton } from './styledPrice'
import { PriceData } from '../../constants/priceConst'
import { initial, whileInView, viewport, transition } from '../../constants/animateRevealConst';
const { title, text, button } = PriceData;

const Price = (props) => {
  return (
    <PriceWrapper
      id='pricing'
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      <Title>{title}</Title>
      <Image />
      <WorkButton
        onClick={props.openPopup}>
        {button}
      </WorkButton>
      <Text>{text}</Text>
    </PriceWrapper>
  )
}

export default Price