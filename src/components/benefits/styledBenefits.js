import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const BenefitsSection = styled(motion.div)`
  height: 751px;       /* 871px (slide to next section) - 120px (padding) */
  margin: 0 auto;
  position: relative;

  @media( max-width: 1280px) {
  }
  @media( max-width: 1023px) {
    height: 878px;
  }
  @media(max-width: 767px) {
    height: auto;
    padding: 118px 16px 0;
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    gap: 75px;
  }
`;

export const BenefitGroup = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  transition: top .3s ease, left .3s ease;
  top: ${(props) => (props.position.over1280.top)};
  left: ${(props) => (props.position.over1280.left)};

  @media( max-width: 1280px) {
    left: ${(props) => (props.position.over1023.left)};
  }
  @media( max-width: 1023px) {
    top: ${(props) => (props.position.over767.top)};
    left: ${(props) => (props.position.over767.left)};
  }
  @media(max-width: 767px) {
    position: static;
    gap: 20px;
  }
`;

export const Image = styled.div`
  width: ${(props) => (props.width)};
  height: ${(props) => (props.height)};
  background: center / contain no-repeat;
  background-image: url(${(props) => (props.img)});
`;

export const BenefitText = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  max-width: ${(props) => (props.width)}
`;