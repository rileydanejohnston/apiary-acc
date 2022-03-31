import styled from "styled-components";
import { Highlight } from "../sharedComponents/sharedComponents";

export const ImpactWrapper = styled.section`
    background: #F4F4F4;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    z-index: 0;
`
export const BoxWrapper = styled.div`
    display: flex;
    position: relative;
    width: 94.44%;
    justify-content: space-between;
    margin: 60px auto 120px auto;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`
export const BoxContain = styled.div`
    position: relative;
    width: 48.53%;

    @media (max-width: 600px) {
        width: 75%;
        margin: 0 auto 80px;
    }
`
export const Box = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
`
export const ImageWrap = styled.div`
    position: absolute;
    width: 36.52%;
    top: -23.79%;
    left: 31.67%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    z-index: 0;
    visibility: ${props => props.square};

    @media (max-width: 1024px) {
        top: -20%;
    }

    @media (max-width: 900px) {
        top: -14%;
    }

    @media (max-width: 425px) {
        top: -10%;
    }
`
export const BoxImage = styled.img`
    width: 31.12%;
`
export const Circles = styled.img`
    position: absolute;
    width: 37.73%;
    top: -21.02%;
    left: 31.06%;
    z-index: 0;

    @media (max-width: 1024px) {
        top: -18%;
    }

    @media (max-width: 900px) {
        top: -12%;
    }

    @media (max-width: 425px) {
        top: -8%;
    }
`
export const BoxTitle = styled(Highlight)`
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    margin-top: 40px;
`
export const BoxText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin: 0 6.4%;

    &:last-of-type {
        margin-bottom: 60px;
    }

    @media (max-width: 425px) {
        font-size: 14px;
        line-height: 16px;
    }
`
export const BoxDiamond = styled.img`
    width: 10px;
    height: 10px;
    margin: 20px 0;

    @media (max-width: 425px) {
        margin: 15px 0;
    }
`
export const Grid = styled.div`
    width: 83.33%; 
    display: grid;
    margin: 60px auto 0 auto;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, 1fr);
    border-radius: 20px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 96.09%;     // 984/1024
    }

    @media (max-width: 425px) {
        display: none;
    }
`
export const SmallGrid = styled(Grid)`
    width: 96.09%;
    margin: 30px auto 0 auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    display: none;

    @media (max-width: 425px) {
        display: grid;
    }
`
export const GridCell = styled.div`
    border-right: ${props => props.right ? 'none' : '1px solid gray'};
    border-bottom: ${props => props.bottom ? 'none' : '1px solid gray'};
    max-width: 200px;
    height: 82px;
    display: flex;
    padding: ${props => props.top ? null : '20px'};
    align-items: center;
    justify-content: center;
`
export const GridText = styled.p`
    font-size: 18px;
    line-height: 21px;
    text-align: ${props => props.top ? 'center' : null};
    color: ${props => props.orange ? '#FF9820' : 'inherit'};

    @media (max-width: 600px) {
        font-size: 12px;
        line-height: 14px;
    }

    @media (max-width: 425px) {
        font-size: 18px;
        line-height: 21px;
    }
`
export const GridPic = styled.img`
`