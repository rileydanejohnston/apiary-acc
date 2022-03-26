import styled from "styled-components/macro";
import bubbles from '../../images/bubbles.svg';
import { motion } from 'framer-motion';

export const AvatarGroup = styled(motion.div)`
  width: max-content;
  display: flex;
  gap: 12px;
  align-items: center;
  position: absolute;
  top: ${(props) => (props.top)};
  left: ${(props) => (props.left)};
`;

export const AvatarPic = styled.div`
  width: 38px;
  height: 38px;
  background: center / contain no-repeat url(${(props) => (props.img)});
  order: ${(props) => (props.flip && 2)};
`;

export const Bubbles = styled(motion.div)`
  width: 24px;
  height: 8px;
  background: center / contain no-repeat url(${bubbles});
  transform: rotate(${(props) => (props.flip && '180deg')});
`;