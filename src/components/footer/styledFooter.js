import styled from "styled-components";
import { motion } from "framer-motion";

export const FooterSection = styled(motion.footer)`
    background: #1C383C;
    padding: 80px 0 60px 0;

    @media(max-width: 600px) {
        padding: 60px 0;
    }
`
export const FooterWrapper = styled.div`
    width: 88.89%;
    margin: auto;
    display: flex;
    flex-direction: column;

    @media(max-width: 1024px) {
        width: 84.38%;
    }

    @media(max-width: 768px) {
        width: 91.47%;
    }
`
export const FooterBlocks = styled.div` 
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: auto;

    @media (max-width: 1100px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, minmax(238px, 1fr));
        grid-column-gap: 180px;
    }

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
`
export const Block = styled.div`
    display: flex;
    flex-direction: column;
    order: ${props => props.$order && 3};

    @media(max-width: 768px) {
        margin-bottom: 60px;

        &:nth-of-type(2n){
            margin-bottom: 40px;
        }
    }
`
export const BlockTitle = styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 44px;
    line-height: 52px;
    color: #FFFFFF;
    margin-bottom: 40px;

    @media(max-width: 425px) {
        font-size: 28px;
        line-height: 33.18px;
        margin-bottom: 30px;
    }
`
export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    @media(max-width: 425px) {
        margin-bottom: 20px;
    }
`
export const TextLine = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.$size ? '14px' : '18px'};
    line-height: ${props => props.$size ? '17px' : '21px'};
    color: #FFFFFF;
    //margin-bottom: ${props => props.margin ? '10px' : null};
    margin-right: ${props => props.$right ? '40px' : null};
    white-space: pre-line;
`
export const LinkWrapper = styled.div`
    display: flex;
    margin-bottom: 16px;
    align-items: center;
`
export const ImgBackground = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;
`
export const LinkImg = styled.img`
`
export const Link = styled.a`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }

    @media(max-width: 768px) {
        margin-top: 16px;
    }
`
export const FooterBottom = styled.div`
    display: flex;

    @media(max-width: 768px) {
        flex-direction: column;
    }
`
