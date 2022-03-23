import React, { useState } from 'react'
import { AnimationWrapper, TextMessages, TextBubble } from './styledAnimation'
import Avatar from '../avatar/Avatar';
import leftSmiley from '../../images/left-smiley.svg';
import rightSmiley from '../../images/right-smiley.svg';
import { AnimationData } from '../../constants/animationConst';
import uniqueId from 'lodash.uniqueid';

const Animation = () => {

  const leftAvatar = {
    top: '-19px',
    left: '-50px',
  };

  const rightAvatar = {
    top: 'calc(100% - 19px)',
    left: 'calc(100% - 24px)',
  };

  const [leftBubblesOpen, setLeftBubblesOpen] = useState(true);
  const [rightBubblesOpen, setRightBubblesOpen] = useState(true);
  const [rightAvatarOpen, setRightAvatarOpen] = useState(true);
  const [containerHeight, setContainerHeight] = useState(0);

  return (
    <AnimationWrapper>
        <TextMessages>
          <Avatar
            img={leftSmiley}
            bubblesOpen={leftBubblesOpen}
            position={leftAvatar}
          />
          {
            AnimationData.map(({ color, bgColor, align, text }, i) => {
              return (
                <TextBubble
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: i * 2 }}
                  color={color}
                  bgColor={bgColor}
                  align={align}
                  key={uniqueId()}
                >{text}</TextBubble>
              )
            })
          }
          { 
            rightAvatarOpen && 
            <Avatar
              img={rightSmiley}
              flip={true}
              bubblesOpen={rightBubblesOpen}
              position={rightAvatar}
            />
          }
        </TextMessages>
    </AnimationWrapper>
  )
}

export default Animation