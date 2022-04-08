import styled from "styled-components/macro";
import priceImg from '../../images/price-img.svg';
import mobilePriceImg from '../../images/mobile-price-img.svg';
import { WorkWithUs } from "../sharedComponents/sharedComponents";
import { motion } from "framer-motion";

export const PriceWrapper = styled(motion.section)`
  padding: 0 0 240px 0;

  @media( max-width: 1023px) {
    padding-bottom: 120px;
  }
  @media( max-width: 767px) {
    padding: 0 16px 120px;
  }
`;

export const Title = styled.h2`
  font-size: 44px;
  font-weight: 400;
  line-height: 52px;
  letter-spacing: 0em;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 92px auto;

  @media( max-width: 1023px) {
    margin-bottom: 40px;
    font-size: 28px;
    line-height: 33px;
  }
`;

export const Image = styled.div`
  width: 706px;
  height: 177.57px;
  background: center / contain no-repeat url(${priceImg});
  
  margin: 0 auto 92px auto;

  /* I think margin above looks best. The design calls for different margins on right & left tho. What do you think is better?


  desktop margins
  // margin: 0 27% 92px 23.96%;    (345 / 1440, 389 / 1440)

  @media( max-width: 1280px) {
    margin: 0 17.87% 92px 13.57%;    (183 / 1024, 139 / 1024)
  }
  */

  @media( max-width: 1023px) {
    width: 336px;
    height: 290.5px;
    background-image: url(${mobilePriceImg});
    margin: 0 auto 60.5px auto;
  }
  @media( max-width: 374px) {
    // i'm adding this because min screen size is usually 320
    width: 288px;
    height: 249px;
  }
`;

export const WorkButton = styled(WorkWithUs)`
  width: 200px;
  height: 60px;
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