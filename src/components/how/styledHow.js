import styled from "styled-components/macro";
import { WorkWithUs } from '../sharedComponents/sharedComponents';
import { Highlight } from '../sharedComponents/sharedComponents'
import phoneImg from '../../images/phone.svg';
import containerImg from '../../images/container-monster.svg';
import truckImg from '../../images/truck.svg';
import starsImg from '../../images/stars.svg';
import topLeftImg from '../../images/up-right-arrow.svg'

export const HowWrapper = styled.section`
  padding: 80px 0 100px 0;
`;

export const HowContent = styled.div`
  width: 86.11%;      /* 1240 / 1440 */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const HowTitle = styled.h2`
  font-size: 44px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0em;
  margin-bottom: 42px;
`;

export const Highlighter = styled(Highlight)`
  margin-top: 20px;
  line-height: 21px;
`;

export const StepsWrapper = styled.div`
  margin-bottom: 80px;
  position: relative;
  height: 695px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StepGroup = styled.div`
  width: 33.79%;      /* 420 / 1240 */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StepGroupTruck = styled(StepGroup)`
  position: absolute;
  right: 0;
  top: 218px;
`;

export const StepGroupStars = styled(StepGroup)`
  position: absolute;
  left: 0;
  top: 218px;
`;

export const Phone = styled.div`
  width: 121.5px;
  height: 140px;
  background: center / cover no-repeat url(${phoneImg});
  margin-bottom: 18px;
`;

export const Containers = styled.div`
  width: 123.5px;
  height: 121.3px;
  background: center / cover no-repeat url(${containerImg});
  margin-bottom: 26.7px; 
`;

export const Truck = styled.div`
  width: 123.5px;
  height: 92px;
  background: center / cover no-repeat url(${truckImg});
  margin-bottom: 30px; 
`;

export const Stars = styled.div`
  width: 114px;
  height: 114px;
  background: center / cover no-repeat url(${starsImg});
  margin-bottom: 7px;
`;

export const StepText = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  white-space: pre-line;
`;

export const ArrowBase = styled.div`
  width: 46px;
  height: 46px;
  position: absolute;
`;

export const Arrow = styled(ArrowBase)`
  background: center / cover no-repeat url(${topLeftImg});
  position: absolute;
  top: ${(props) => (props.top)};
  left: ${(props) => (props.left)};
  transform: rotate(${(props) => (props.deg)});

  /*  345 /  1240  = 27.82%  */
  /*  860 /  1240  = 69.35%  */
`;

export const WorkButton = styled(WorkWithUs)`
  width: 200px;
  height: 60px;
  align-self: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  border-radius: 3px;
`;