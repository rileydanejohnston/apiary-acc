import React from 'react'
import {
  AvatarGroup,
  AvatarPic,
  Bubbles
} from './styledAvatar'

const Avatar = ({ img, bubblesOpen, flip, position }) => {

  const { left, top } = position;

  return (
    <AvatarGroup
      top={top}
      left={left}
    >
      <AvatarPic img={img} flip={flip} />
      {
        bubblesOpen && <Bubbles />
      }
    </AvatarGroup>
  )
}

export default Avatar