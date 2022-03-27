import styled from "styled-components/macro";
import containerMonster from '../../images/container-monster.svg';

export const BenefitsSection = styled.div`
  width: 84.17%;       /* 1212 width / 1440 width */
  height: 751px;       /* 871px (slide to next section) - 120px (padding) */
  margin: 0 auto;
  position: relative;
`;

export const LogisticsGroup = styled.div`
  max-width: 286px;
  display: flex;
  gap: 37.5px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 110px;
  left: 6.35%;         /* (191px -  114px) / 1212px */
`;

export const ContainerImg = styled.div`
  width: 146.09px;
  height: 143.5px;
  background: center / contain no-repeat url(${containerMonster});
`;

export const BenefitText = styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
`;

export const SupplyGroup = styled(LogisticsGroup)`
  gap: 45px;
  max-width: 360px;
  top: 218px;
  left: 61.34%;        
/* 
  left = (803px -  114 + 54.5) / 1212px
  the 54.5 formats the text
*/
`;

export const Circle = styled.div`
  width: 148px;
  height: 148px;
  background: #C4C4C4;
  border-radius: 100px;
`;

export const StorageGroup = styled(SupplyGroup)`
  max-width: 543px;
  top: 500px;
  left: 17%;       /* (320px -  114px) / 1212px */
`;