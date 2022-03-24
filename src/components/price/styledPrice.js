import styled from "styled-components/macro";
import priceImg from '../../images/price-img.svg';
import { WorkWithUs } from "../sharedComponents/sharedComponents";

export const PriceWrapper = styled.section`
  padding: 0 0 240px 0;
`;

export const PriceContent = styled.div`
  width: 71.39%;        /*  1028 / 1440  */
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 44px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: center;
  white-space: pre-line;
  margin-bottom: 92px;
`;

export const Image = styled.div`
  width: 68.68%;        /* 706 / 1028  */
  height: 177.57px;     /* 177.57 / 599  */
  background: center / contain no-repeat url(${priceImg});
  margin: 0 17.8% 92px 13.52%;
`;

export const WorkButton = styled(WorkWithUs)`
  width: 200px;
  height: 80px;
  border-radius: 3px;
  font-size: 24px;
  line-height: 28.44px;
  margin: 0 auto 32px auto;

  display: block;
  /* not sure why this is necessary.. it wouldn't work without it*/
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  max-width: 618px;
  margin: 0 auto;
`;