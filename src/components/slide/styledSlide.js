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
`;

export const SlideImg = styled.img`
/* 
    520px gap / 1192px width
    1212 - 20 padding = 1192
*/
  width: 43.62%;
`;

export const SlideDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
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