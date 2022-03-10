import React from 'react'
import { EsgContent, EsgImage, EsgSubtitle, EsgTitle, EsgWrapper } from './styledEsg'

const Esg = () => {
  return (
    <EsgWrapper>
      <EsgContent>
        <EsgImage />
        <EsgTitle>{`We are an ESG company:\nwe care for social and environmental\nsustainability`}</EsgTitle>
        <EsgSubtitle>In 2020 Singapore’s government took on the Green Plan: a whole-of-nation movement to advance Singapore’s national agenda on sustainable development. Our company is a part of its solution to cultivating a Sustainable Living — 1 of the 5 key programmes of SG Green Plan.</EsgSubtitle>
      </EsgContent>
    </EsgWrapper>
  )
}

export default Esg