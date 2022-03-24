import React from 'react'
import {
  AvatarGroup,
  AvatarPic,
  Bubbles
} from './styledAvatar'

const Avatar = ({ config, flip }) => {

  const { image, position, group, typing } = config;
  const { top, left } = position;

  return (
    <AvatarGroup
      initial={group.initial}
      animate={group.animate}
      transition={group.transition}
      top={top}
      left={left}
    >
      <AvatarPic
        img={image}
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