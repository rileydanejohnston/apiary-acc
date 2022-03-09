import styled from "styled-components";

export const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    background: #1C383C;
    padding: 80px 0 60px 0;
`
export const FooterBlocks = styled.div` 
    display: flex;
    width: 88.89%;
    justify-content: space-between;
    margin: auto;
`
export const Block = styled.div`
    display: flex;
    flex-direction: column;
`
export const BlockTitle = styled.h3`
    font-style: normal;
    font-weight: normal;
    font-size: 44px;
    line-height: 52px;
    color: #FFFFFF;
    margin-bottom: 40px;
`
export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`
export const TextLine = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: ${props => props.$size ? '14px' : '18px'};
    line-height: ${props => props.$size ? '17px' : '21px'};
    color: #FFFFFF;
    margin-bottom: ${props => props.margin ? '10px' : null};
    margin-right: ${props => props.$right ? '40px' : null};
`
export const LinkWrapper = styled.div`
    display: flex;
    margin-bottom: 16px;
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
`
export const FooterBottom = styled.div`
    display: flex;
    width: 88.89%;
    margin-left: 5.55%;
`
