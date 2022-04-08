import styled from "styled-components";
import linkedin from '../../images/linkedin.svg';
import { SectionTitle } from "../sharedComponents/sharedComponents";
import { motion } from "framer-motion";

export const TeamWrapper = styled(motion.section)`
    display: flex;
    flex-direction: column;
    width: 53.61%;  // 772/1440
    margin: auto;
    padding: 0 0 136px;

    @media(max-width: 1439px) {
        width: 78.125%;
    }

    @media(max-width: 600px) {
        padding-bottom: 60px;
    }

    @media (max-width: 425px) {
        width: 91.47%;
    }
`
export const TeamTitle = styled(SectionTitle)`
    @media (max-width: 750px) {
        font-size: 28px;
        line-height: 33.18px;
    }
`
export const TeamBlocks = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 80px auto 120.8px auto;
    width: 100%;

    @media(max-width: 750px) {
        flex-direction: column;
        margin: 44px auto 100px;
    }
`
export const TeamBlock = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25.91%;  // 200/772

    @media(max-width: 750px) {
        margin: 0 auto 44px;
        width: 50%;
    }
`
export const TeamImage = styled.img`
    width: 146px;
    height: 146px;
    margin-bottom: 20px;

    @media(max-width: 750px) {
        width: 200px;
        height: 200px;
    }
`
export const TeamText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    @media(max-width: 1024px) {
        font-size: 18px;
        line-height: 22px;
    }
    @media(max-width: 750px) {
        font-size: 24px;
        line-height: 28px;
    }
`
export const Link = styled.a`
    width: 32px;
    height: 32.2px;
    background-image: url(${linkedin});
    margin: 21px auto 0 auto;
    cursor: pointer;
`

export const PartnerWrapper = styled(motion.div)``;

export const PartnerRow1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 80px auto 55px auto;

    @media(max-width: 600px) {
        flex-direction: column;
        margin: 0 auto;
    }
`
export const PartnerRow2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    width: 56.26%;

    @media(max-width: 600px) {
        flex-direction: column;
        width: 100%;
    }
`
export const PartnerLink = styled.a`
    cursor: pointer;

    @media(max-width: 600px) {
        margin: 40px auto 0;
        }
    }
`
export const Partner = styled.img`
@media(max-width: 768px) {
    max-width: 150px;
    max-height: 100px;
}
@media(max-width: 600px) {
    max-width: none;
    max-height: none;
}

@media (max-width: 400px) {
    max-width: 242px;
}
`