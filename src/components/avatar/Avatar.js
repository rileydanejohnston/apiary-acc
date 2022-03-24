import React from 'react'
import {
  AvatarGroup,
  AvatarPic,
  Bubbles
} from './styledAvatar'

const Avatar = ({ img, flip, position, animations }) => {

  const { left, top } = position;
  const { group, typing } = animations;

  return (
    <AvatarGroup
      initial={group.initial}
      animate={group.animate}
      transition={group.transition}
      top={top}
      left={left}
    >
      <AvatarPic
        img={img}
        flip={flip}
      />
      <Bubbles
        initial={typing.initial}
        animate={typing.animate}
        transition={typing.transition}
      />
    </AvatarGroup>
  )
}

export default Avatar