import styled from "styled-components/macro";
import PercentImg from '../../images/plastic-percents.svg'

export const ProblemWrapper = styled.section`
  padding: 120px 0;
  background: #1C383C;
`;

export const Grid = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 348px 369px;
  gap: 80px 60px;
`;

export const Cell = styled.div`
`;

export const TitleWrapper = styled.div`
  grid-column: 2/4;
  margin-top: 56px;
`;

export const Title = styled.h2`
  max-width: 708px;
  color: #fff;
  font-size: 44px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0em;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  max-width: 627px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
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
`;

export const CircleStat = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0em;
  position: absolute;
  color: #000;
  top: ${(props) => (props.top)};
  left: ${(props) => (props.left)};
`;

export const Image = styled.img`
  width: 100%;
  height: 315px;
  border-radius: 3px;
  box-shadow: 0px 4px 4px 0px #00000040;
  margin-bottom: 20px;
`;

export const ImgCaption = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;
`;