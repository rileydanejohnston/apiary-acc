import styled from "styled-components/macro";
import PercentImg from '../../images/plastic-percents.svg'
import { motion } from "framer-motion";

export const ProblemWrapper = styled(motion.section)`
  padding: 120px 0;
  background: #1C383C;

  @media( max-width: 1023px ) {
    padding: 80px 0;
  }
  @media( max-width: 767px) {
    padding-top: 40px;
  }
`;

export const Grid = styled.div`
  width: 80.56%;      // 1160 / 1440
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 348px 369px;
  gap: 80px 60px;

  @media( max-width: 1280px ) {
    width: 982px;      // 982 / 1024 = 95.9%
    gap: 80px 20px;
    grid-template-columns: repeat(3, minmax(314px, 347px));
  }

  @media( max-width: 1023px ) {
    width: 94.7%;      // 727 / 768 = 94.7%
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 226px 229px 300px;
    gap: 40px 20px;
  }
  @media( max-width: 767px ) {
    width: 90%;       // 288 / 320
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;

export const Cell = styled.div`
  @media( max-width: 1280px) {
    width: 314px;
  }
  @media( max-width: 1023px ) {
    width: auto;
    grid-row: 3/4;
  }
  @media( max-width: 767px ) {
    order: 3;
    margin: 0 auto;
    width: 229px;
  }
`;

export const TitleWrapper = styled.div`
  grid-column: 2/4;
  margin-top: 56px;

  @media(max-width: 1280px) {
    max-width: 500px;
    padding-left: 20px;
  }

  @media( max-width: 1023px ) {
    max-width: none;
    grid-column: 1/4;
    order: 1;
    margin: 0;
  }
`;

export const Title = styled.h2`
  max-width: 708px;
  color: #fff;
  font-size: 44px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0em;
  margin-bottom: 20px;

  @media( max-width: 1023px ) {
    max-width: 647px;
    margin: 0 auto 40px auto;
    font-size: 38px;
    line-height: 45px;
    text-align: center;
  }
  @media( max-width: 767px ) {
    margin-bottom: 32px;
    font-size: 28px;
    line-height: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 627px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;

  @media( max-width: 1023px ) {
    max-width: 616px;
    text-align: center;
    margin: 0 auto;
  }
`;

export const CircleCell = styled.div`
  background: #fff;
  border-radius: 3px;
  box-shadow: 0px 4px 4px 0px #00000040;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;

  @media( max-width: 1023px ) {
    order: 2;
    grid-column: 2/3;
    gap: 16px;
  }
  @media( max-width: 767px ) {
    width: 229px;
    height: 229px;
    margin: 0 auto;
  }
`;

export const CircleTitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: #000;
`;

export const CircleGraph = styled.div`
  width: 236px;
  height: 236px;
  position: relative;
  background: center / contain no-repeat url(${PercentImg});

  @media( max-width: 1023px ) {
    width: 160px;
    height: 160px;
  }
`;

export const CircleStat = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  position: absolute;
  color: #000;
  top: ${(props) => (props.position.over1024.top)};
  left: ${(props) => (props.position.over1024.left)};

  @media( max-width: 1023px ) {
    top: ${(props) => (props.position.under1024.top)};
    left: ${(props) => (props.position.under1024.left)};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 315px;
  border-radius: 3px;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin-bottom: 20px;

  @media( max-width: 1023px ) {
    height: 229px;
  }
  @media( max-width: 767px ) {
    width: 229px;
    height: 229px;
  }
`;

export const ImgCaption = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
`;