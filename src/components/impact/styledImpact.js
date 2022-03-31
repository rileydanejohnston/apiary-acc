import styled from "styled-components";
import { Highlight } from "../sharedComponents/sharedComponents";

export const ImpactWrapper = styled.section`
    background: #F4F4F4;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
`
export const BoxWrapper = styled.div`
    display: flex;
    width: 94.44%;
    justify-content: space-between;
    margin: 60px auto 120px auto;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`
export const Box = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 48.53%;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 20px;

    @media (max-width: 600px) {
        margin: 0 auto 80px;
        width: 75%;
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
`
export const BoxDiamond = styled.img`
    width: 10px;
    height: 10px;
    margin: 20px 0;
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
`
export const GridPic = styled.img`
`