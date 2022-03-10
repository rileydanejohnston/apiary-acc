import React from 'react'
import { EsgContent, EsgImage, EsgSubtitle, EsgTitle, EsgWrapper } from './styledEsg'
import { EsgData } from '../../constants/esgConst'
const { title, subtitle } = EsgData;

const Esg = () => {
  return (
    <EsgWrapper>
      <EsgContent>
        <EsgImage />
        <EsgTitle>{title}</EsgTitle>
        <EsgSubtitle>{subtitle}</EsgSubtitle>
      </EsgContent>
    </EsgWrapper>
  )
}

export default Esg