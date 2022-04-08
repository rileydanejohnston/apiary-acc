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
import { initial, whileInView, viewport, transition } from '../../constants/animateRevealConst';
const { title, subtitle1, subtitle2, highlight } = EsgData;

const Esg = () => {
  return (
    <EsgWrapper
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
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