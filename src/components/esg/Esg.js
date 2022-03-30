import React from 'react'
import {
  EsgContent,
  EsgImage,
  EsgSubtitle,
  EsgTitle,
  EsgWrapper,
} from './styledEsg'
import { EsgData } from '../../constants/esgConst'
import { Highlight } from '../sharedComponents/sharedComponents';
const { title, subtitle1, subtitle2, highlight } = EsgData;

const Esg = () => {
  return (
    <EsgWrapper>
      <EsgContent>
        <EsgImage />
        <EsgTitle>{title}</EsgTitle>
        <EsgSubtitle>
          {subtitle1}
          <Highlight>
            {highlight}
          </Highlight>
          {subtitle2}
        </EsgSubtitle>
      </EsgContent>
    </EsgWrapper>
  )
}

export default Esg