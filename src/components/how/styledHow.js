import styled from "styled-components/macro";
import { WorkWithUs } from '../sharedComponents/sharedComponents';
import { Highlight } from '../sharedComponents/sharedComponents'
import phoneImg from '../../images/phone.svg';
import containerImg from '../../images/used-containers.svg';
import truckImg from '../../images/truck.svg';
import starsImg from '../../images/stars.svg';
import bottomLeftImg from '../../images/up-left-arrow.svg'
import topRightImg from '../../images/down-right-arrow.svg'
import bottomRightImg from '../../images/down-left-arrow.svg'
import topLeftImg from '../../images/up-right-arrow.svg'

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

export const TopLeftArrow = styled(ArrowBase)`
  left: 27.82%;    /* 345 /  1240 */
  top: 80px;  
  background: center / cover no-repeat url(${topLeftImg});
`;

export const BottomLeftArrow = styled(ArrowBase)`
  left: 27.82%;    /* 345 /  1240 */
  bottom: 165px;
  background: center / cover no-repeat url(${bottomLeftImg});
`;

export const TopRightArrow = styled(ArrowBase)`
  top: 80px;
  right: 26.61%;      /* 330 / 1240 */
  background: center / cover no-repeat url(${topRightImg});
`;

export const BottomRightArrow = styled(ArrowBase)`
  bottom: 165px;
  right: 26.61%;      /* 330 / 1240 */
  background: center / cover no-repeat url(${bottomRightImg});
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