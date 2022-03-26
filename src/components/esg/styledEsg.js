import styled from "styled-components/macro";
import esgImg from '../../images/esgContainer.svg';

export const EsgWrapper = styled.section`
  padding: 60px 0 240px 0;
`;

export const EsgContent = styled.div`
  width: 76.74%;        /*  1105 / 1440  */
  height: 449px;
  margin: 0 16.32% 0 6.94%;     /* (235 / 1440) && (100 / 1440) */
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: end;
`;

export const EsgImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 306px;
  height: 282px;
  background: center / contain no-repeat url(${esgImg});
`;

export const EsgTitle = styled.h2`
  font-size: 44px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0em;
  white-space: pre-line;
  width: 70.59%;       /* 780 / 1105 */
`;

export const EsgSubtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  max-width: 780px;
`;