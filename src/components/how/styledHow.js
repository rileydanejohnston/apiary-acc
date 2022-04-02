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

  @media( max-width: 1023px) {
    padding: 60px 0;
  }

  @media( max-width: 767px) {
    padding: 60px 16px;
  }
`;

export const HowContent = styled.div`
  width: 86.11%;      /* 1240 / 1440 */
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media( max-width: 1023px) {
    width: 96.09%;    // 984 / 1024
  }

  @media( max-width: 767px) {
    width: 100%;
  }
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
  order: 1;
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