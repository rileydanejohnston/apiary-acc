import styled from "styled-components/macro";

export const SustainableWrapper = styled.section`
  padding: 120px 0;
  background: #F4F4F4;
`;

export const SustainableContent = styled.div`
  /* 1340 width / 1440 width (1340 is from carousel button to button) */
  width: 93.06%; 
  margin: 0 auto;
`;

export const TitlesGroup = styled.div`
  max-width: 598px;
  margin: 0 auto;
  padding-bottom: 60px;
`;

export const Title = styled.h2`
  font-size: 44px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 40px;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
`;

export const Carousel = styled.div`
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