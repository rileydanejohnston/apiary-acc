import styled from "styled-components/macro";
import { motion } from 'framer-motion';

export const AnimationWrapper = styled.div`
  width: 36.3%;
  padding: 52px 0;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const TextMessages = styled(motion.ul)`
  width: 79.9%;      // 391 / 491
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
`;

export const TextBubble = styled(motion.li)`
  padding: 10px 12px;
  max-width: 279px;
  color: ${(props) => (props.color)};
  background-color: ${(props) => (props.bgColor)};
  align-self: ${(props) => (props.align)};
  border-radius: ${(props) => (props.align === 'start' ? '0 10px 10px 10px' : '10px 10px 0 10px')};

  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
`;