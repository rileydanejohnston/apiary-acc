import styled from "styled-components/macro";
import bulletImg from '../../images/bullet-point.svg';

export const SlideWrapper = styled.div`
  background: #fff;
  box-shadow: 0px 2px 10px 0px #00000033;
  flex: 0 0 100%;
  position: relative;
  margin-right: 20px;

  display: flex;
  gap: 6.6%;            /* 80px gap / 1212px width */
  padding: 40px 10px;   /* fudging these numbers a bit for convenience*/

  @media( max-width: 1280px) {
    gap: 2.54%;   // 26 / 1024
    padding-bottom: 94px;
    align-items: end;
  }

  @media( max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media( max-width: 767px) {
    gap: 24px;
    padding: 8px 0 60px 0;
  }
`;

export const SlideImg = styled.img`
/* 
    520px gap / 1192px width
    1212 - 20 padding = 1192
*/
  width: 43.62%;
  height: auto;

  @media( max-width: 1280px) {
    width: 46.26%;         // 420 / 908
  }
  @media( max-width: 1023px) {
    width: 48.39%;         // 300 / 620
  }
  @media( max-width: 767px) {
    width: 95.49%;         // 339 / 355
  }
`;

export const SlideDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media( max-width: 1023px) {
    width: 68.125%;     // 436 / 640px
  }

  @media( max-width: 767px) {
    width: 91%;          // 323 / 355
    gap: 25px;
  }
`;

export const ListGroup = styled.div``;

export const ListTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  margin-bottom: 16px;
`;

export const List = styled.ul`
  list-style-image: url(${bulletImg});
  padding-left: 14px;
`;

export const Item = styled.li`
  padding-left: 10px; 
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
`;