import React from 'react'
import { AnimationWrapper, TextMessages, TextBubble } from './styledAnimation'
import Avatar from '../avatar/Avatar';
import { AnimationData, leftAvatarConfig, rightAvatarConfig } from '../../constants/animationConst';
import uniqueId from 'lodash.uniqueid';

const Animation = () => {

  return (
    <AnimationWrapper>
      <TextMessages>
        <Avatar
          config={leftAvatarConfig}
        />
        {
          AnimationData.map(({ color, bgColor, align, text }, i) => {
            return (
              <TextBubble
                initial={{ opacity: 0, display: 'none' }}
                animate={{ opacity: 1, display: 'block' }}
                transition={{ duration: 0.5, delay: (i + 1) * 3 }}
                color={color}
                bgColor={bgColor}
                align={align}
                key={uniqueId()}
              >{text}</TextBubble>
            )
          })
        }
        <Avatar
          config={rightAvatarConfig}
          flip={true}
        />
      </TextMessages>
    </AnimationWrapper>
  )
}

export default Animation