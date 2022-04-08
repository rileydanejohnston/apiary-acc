import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const CarouselWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media( max-width: 767px) {
    flex-direction: column;
  }
`;

export const ViewPort = styled.div`
  overflow: hidden;
  width: 84.17%;       /* 1212 width / 1440 width */
  box-shadow: 0px 2px 10px 0px #00000033;

  @media( max-width: 1280px) {
    width: 90.625%;   // 928 / 1024
  }

  @media( max-width: 1023px) {
    width: 83.33%;   // 640 / 768
  }

  @media( max-width: 767px) {
    width: 94.67%;   // 355 / 375
  }
`;

export const SlideContainer = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  @media( max-width: 767px) {
    display: none;
  }
`;

export const CarouselButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: url(${props => props.image});
  transition: transform .2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.33);
  }
`;

export const CurrentSlide = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: center;
`;

export const MobileBtnWrapper = styled.div`
  display: none;
  
  @media( max-width: 767px) {
    display: block;
    margin-top: 24px;
    width: 91.47%;     // 343 / 375
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;