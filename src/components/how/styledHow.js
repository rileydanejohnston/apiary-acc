import styled from "styled-components/macro";
import { WorkWithUs } from '../sharedComponents/sharedComponents';
import { Highlight } from '../sharedComponents/sharedComponents'
import phoneImg from '../../images/phone.svg';
import containerImg from '../../images/used-containers.svg';
import truckImg from '../../images/truck.svg';
import starsImg from '../../images/stars.svg';
import upLeftImg from '../../images/up-left-arrow.svg'
import downRightImg from '../../images/down-right-arrow.svg'
import downLeftImg from '../../images/down-left-arrow.svg'
import upRightImg from '../../images/up-right-arrow.svg'

export const HowWrapper = styled.section`
  padding: 80px 0 104px 0;
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
  margin-bottom: 98px;
`;

export const Highlighter = styled(Highlight)`
  margin-bottom: 22px;
  line-height: 21px;
`;

export const StepsWrapper = styled.div`
  margin-bottom: 80px;
  position: relative;
  height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const StepGroup = styled.div`
  width: 33.79%;      /* 420 / 1240 */
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
`;

export const StepGroupTruck = styled(StepGroup)`
  position: absolute;
  right: 0;
  top: 163px;
`;

export const StepGroupStars = styled(StepGroup)`
  position: absolute;
  left: 0;
  top: 163px;
`;

export const Phone = styled.div`
  width: 40px;
  height: 73px;
  background: center / cover no-repeat url(${phoneImg});
`;

export const Containers = styled.div`
  width: 128.71px;
  height: 76px;
  background: center / cover no-repeat url(${containerImg});    
`;

export const Truck = styled.div`
  width: 123.5px;
  height: 92px;
  background: center / cover no-repeat url(${truckImg});    
`;

export const Stars = styled.div`
  width: 82px;
  height: 94.38px;
  background: center / cover no-repeat url(${starsImg});    
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

export const StarArrowUp = styled(ArrowBase)`
  right: 22px;
  top: calc(-46px - 36px);  /* 46 height of arrow, 36 is margin */
  background: center / cover no-repeat url(${upRightImg});
`;

export const StarArrowDown = styled(ArrowBase)`
  right: 22px;
  bottom: calc(-46px - 55px);  /* 46 height of arrow, 55 is margin */
  background: center / cover no-repeat url(${upLeftImg});
`;

export const TruckArrowUp = styled(ArrowBase)`
  top: calc(-46px - 36px);  /* 46 height of arrow, 36 is margin */
  left: 42px;
  background: center / cover no-repeat url(${downRightImg});
`;

export const TruckArrowDown = styled(ArrowBase)`
  left: 42px;
  bottom: calc(-46px - 61px);  /* 46 height of arrow, 61 is margin */
  background: center / cover no-repeat url(${downLeftImg});
`;

export const WorkButton = styled(WorkWithUs)`
  width: 200px;
  height: 60px;
  align-self: center;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
`;