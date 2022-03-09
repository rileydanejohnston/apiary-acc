import styled from "styled-components/macro";

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ViewPort = styled.div`
  overflow: hidden;
  width: 90.45%;       /* 1212 width / 1340 width */
  box-shadow: 0px 2px 10px 0px #00000033;
`;

export const SlideContainer = styled.div`
  display: flex;
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