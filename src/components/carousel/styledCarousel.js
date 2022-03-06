import styled from "styled-components/macro";

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Slide = styled.div`
  width: 90.45%;       /* 1212 width / 1340 width */
  height: 600px;
  background: #fff;
  box-shadow: 0px 2px 10px 0px #00000033;
`;

export const CarouselButton = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  background: url(${props => props.image});
  transition: transform .2s;

  &:hover {
    cursor: pointer;
    transform: scale(1.33);
  }
`;