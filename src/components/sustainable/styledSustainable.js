import styled from "styled-components/macro";

export const SustainableWrapper = styled.section`
  padding: 120px 0;
  background: #F4F4F4;

  @media( max-width: 1023px ) {
    padding-bottom: 285px;
  }

  @media( max-width: 767px ) {
    padding: 40px 0 80px 0;
  }
`;

export const TitlesGroup = styled.div`
  max-width: 598px;
  margin: 0 auto;
  padding-bottom: 60px;

  @media( max-width: 767px ) {
    display: none;
  }
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
