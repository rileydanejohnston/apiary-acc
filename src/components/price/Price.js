import React from 'react'
import { Image, PriceContent, PriceWrapper, Text, Title, WorkButton } from './styledPrice'

const Price = () => {
  return (
    <PriceWrapper>
      <PriceContent>
        <Title>
          {`Get in touch with us to calculate prices\nfor your business`}
        </Title>
        <Image />
        <WorkButton>Work with us</WorkButton>
        <Text>Leave your contacts and request, and our manager will reach out to you to establish our futher partnership!</Text>
      </PriceContent>
    </PriceWrapper>
  )
}

export default Price