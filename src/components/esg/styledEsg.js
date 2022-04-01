import styled from "styled-components/macro";
import esgImg from '../../images/esgContainer.svg';

export const EsgWrapper = styled.section`
  padding: 60px 0 240px 0;

  @media( max-width: 1280px) {
    padding-top: 40px;
  }
  @media( max-width: 1023px) {
    padding: 50px 0 120px 0;
  }
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

  @media( max-width: 1280px) {
    height: 532px;
    width: 91.21%;     // 934 / 1024
    margin: 0 4.9% 0 4%;           // (40 / 1024) && (50 / 1024)
  }
  @media( max-width: 1023px) {
    gap: 0;
    align-items: center;
    width: 90%;        // 288 / 320
    margin: 0 auto;
    height: auto;
  }
`;

export const EsgImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 306px;
  height: 282px;
  background: center / contain no-repeat url(${esgImg});

  @media( max-width: 1023px) {
    position: static;
    margin-bottom: 60px;
  }
  @media( max-width: 767px) {
    width: 173.62px;
    height: 160px;
  }
`;

export const EsgTitle = styled.h2`
  font-size: 44px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0em;
  max-width: 780px;

  @media( max-width: 1023px) {
    margin-bottom: 40px;
  }
  @media( max-width: 767px) {
    font-size: 28px;
    line-height: 33px;
  }
`;

export const EsgSubtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  max-width: 780px;
`;