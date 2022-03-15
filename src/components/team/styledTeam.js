import styled from "styled-components";
import linkedin from '../../images/linkedin.svg';

export const TeamWrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 53.61%;  // 772/1440
    margin: auto;
    padding: 0 0 136px;
`
export const TeamBlocks = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 80px auto 120.8px auto;
    width: 100%;
`
export const TeamBlock = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 25.91%;  // 200/772
`
export const TeamImage = styled.img`
    width: 146px;
    height: 146px;
    margin-bottom: 20px;
`
export const TeamText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
`
export const Link = styled.a`
    width: 32px;
    height: 32.2px;
    background-image: url(${linkedin});
    margin: 21px auto 0 auto;
    cursor: pointer;
`
export const PartnerRow1 = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 80px auto 55px auto;
`
export const PartnerRow2 = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    width: 56.26%;
`
export const PartnerLink = styled.a`
    cursor: pointer;
    border: 1px solid red;
    height: min-content;
`
export const Partner = styled.img`
`