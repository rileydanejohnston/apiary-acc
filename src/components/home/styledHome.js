import styled from "styled-components";

export const HomeSection = styled.section`
    display: flex;
    flex-direction: column;
    width: 94%;
    padding: 74px 0 40px 0;
    margin: auto;

    @media (max-width: 1024px) {
        width: 96.09%;
    }

    @media (max-width: 525px) {
        width: 91.47%
    }
`

export const Title = styled.h1`
    width: 63.46%;
    margin-bottom: 85px;
    font-style: normal;
    font-weight: normal;
    font-size: 44px;
    line-height: 1.09;

    @media (max-width: 1200px) {
        width: 83.89%;
    }

    @media (max-width: 900px) {
        font-size: 42px;
        line-height: 48px;
    }

    @media (max-width: 525px) {
        width: 100%;
        margin: 0 auto 40px;
        font-size: 28px;
        line-height: 34px;
    }

`
export const TitleSpan = styled.span`
    color: #FF9820;
`
export const HomeGraphics = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`
export const HomePicContainer = styled.div`
    width: 46.39%;
    height: 39%;
    max-height: 399px;

    @media (max-width: 1200px) {
        width: 48.05%;
        max-height: 309px;
    }

    @media (max-width: 900px) {
        margin: 0 auto 79px;
        width: 67.59%;
    }

    @media (max-width: 525px) {
        width: 100%
    }
`
export const HomePic = styled.div`
    width: 100%;
    height: 92.48%;
    border-radius: 20px;
    overflow: hidden;

    @media (max-width: 1024px) {
        height: 93.53%;
        max-height: 279px;
    }
`
export const HomePicTextContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const HomePicText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    margin-top: 13px;
`
export const Handle = styled.img`
    height: 28px;
    widht: 28px;
`