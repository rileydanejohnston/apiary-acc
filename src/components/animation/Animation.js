import React from 'react'
import { AnimationWrapper, TextMessages, TextBubble } from './styledAnimation'
import Avatar from '../avatar/Avatar';
import leftSmiley from '../../images/left-smiley.svg';
import rightSmiley from '../../images/right-smiley.svg';
import { AnimationData } from '../../constants/animationConst';
import uniqueId from 'lodash.uniqueid';

const Animation = () => {

  const leftAvatarAnimations = {
    group: {
      initial: null,
      animate: null,
      transition: null
    },
    typing: {
      initial: {
        opacity: 1
      },
      animate: {
        opacity: 0
      },
      transition: {
        duration: 0.2,
        delay: 2.5
      }
    },
  };

  const rightAvatarAnimations = {
    group: {
      initial: {
        opacity: 0
      },
      animate: {
        opacity: 1
      },
      transition: {
        duration: 1,
        delay: 4
      }
    },
    typing: {
      initial: {
        opacity: 1
      },
      animate: {
        opacity: 0
      },
      transition: {
        duration: 0.2,
        delay: 5.5
      }
    },
  };

  const leftAvatar = {
    top: '-19px',
    left: '-50px',
  };

  const rightAvatar = {
    top: 'calc(100% - 19px)',
    left: 'calc(100% - 24px)',
  };

  return (
    <AnimationWrapper>
      <TextMessages>
        <Avatar
          img={leftSmiley}
          position={leftAvatar}
          animations={leftAvatarAnimations}
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
          img={rightSmiley}
          flip={true}
          position={rightAvatar}
          animations={rightAvatarAnimations}
        />
      </TextMessages>
    </AnimationWrapper>
  )
}

export default Animation