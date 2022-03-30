import React from 'react'
import { Image, PriceContent, PriceWrapper, Text, Title, WorkButton } from './styledPrice'
import { PriceData } from '../../constants/priceConst'
const { title, text, button } = PriceData;

const Price = (props) => {
  return (
    <PriceWrapper>
      <PriceContent>
        <Title>{title}</Title>
        <Image />
        <WorkButton
          onClick={props.openPopup}>
          {button}
        </WorkButton>
        <Text>{text}</Text>
      </PriceContent>
    </PriceWrapper>
  )
}

export default Price