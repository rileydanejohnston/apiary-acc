import styled from "styled-components";
import { Highlight, SectionTitle } from "../sharedComponents/sharedComponents";
import { motion } from "framer-motion";

export const ImpactWrapper = styled(motion.section)`
    background: #F4F4F4;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    z-index: 0;

    @media (max-width: 600px) {
        padding: 60px 0 64px;
    }
`
export const ImpactTitle = styled(SectionTitle)`
    @media (max-width: 600px) {
        width: 91.47%;
        margin: auto;
        font-size: 28px;
        line-height: 32px;
    }
`
export const BoxWrapper = styled.div`
    display: flex;
    position: relative;
    width: 94.44%;
    justify-content: space-between;
    margin: 60px auto 120px auto;

    @media (max-width: 1025px) {
        width: 96.1%;  // 984 / 1024
    }

    @media (max-width: 600px) {
        flex-direction: column;
        margin: 120px auto 80px;
    }
`
export const BoxContain = styled.div`
    position: relative;
    width: 48.53%;

    @media (max-width: 1025px) {
        width: 48.98%;  // 482 / 984
    }

    @media (max-width: 600px) {
        width: 91.47%;
        margin: 0 auto 0;

        &:first-of-type {
            margin: 0 auto 117px;
        }
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
    border-radius: 3px;
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
        top: -15%;
    }

    @media (max-width: 700px) {
        top: -12%;
    }

    @media (max-width: 600px) {
        top: -15%;
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

    @media (max-width: 650px) {
        top: -10%;
    }

    @media (max-width: 600px) {
        top: -12%;
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
export const GridWrapper = styled.div`
    width: 100%;
    overflow-x: scroll;
    padding-bottom: 28px;
    display: flex;
    position: relative;

    &::-webkit-scrollbar {
        display: none;
   }

    @media(max-width: 424px) {
        padding: 0 16px;

        &::-webkit-scrollbar {
            display: block;
            width: 20px;
       }
     &::-webkit-scrollbar-track {
        background: #E1E1E1;
        border-radius: 10px;
        margin: 0 16px;
        width: 342px;
        height: 8px;
         }
     &::-webkit-scrollbar-thumb {
         background: #1C383C;
         border-radius: 10px;
         width: 122px;
         height: 8px;
        }
    }
`

export const Grid = styled.div`
    width: 83.33%; 
    display: grid;
    margin: 60px auto 0 auto;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(8, 1fr);
    border-radius: 20px;
    box-sizing: border-box;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 1024px) {
        width: 96.09%;     // 984/1024
    }

    @media (max-width: 425px) {
        width: 984px;
        margin: 40px 3px 28px;
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

    @media (max-width: 425px) {
        width: 163px;
    }
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