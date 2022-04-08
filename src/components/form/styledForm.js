import styled from "styled-components";
import { WorkWithUs } from "../sharedComponents/sharedComponents";

export const Overlay = styled.section`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.5);
    z-index: 4;
    opacity: ${props => props.open ? '1' : '0'};
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    transition: visibility 1s, opacity 1s ease;
    `
export const Wrapper = styled.div`
    max-width: 760px;
    max-height: 778px;
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 60px 0 40px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    background: white;
    align-items: center;

    @media (max-width: 500px) {
        height: 620px;
        padding: 40px 0 20px;
    }
`
export const Exit = styled.img`
    width: 16.5px;
    height: 16.5px;
    position: absolute;
    top: 24px;
    right: 23.5px;
    cursor: pointer;
    transition: opacity .2s ease;

    :hover {
        opacity: 0.7;
    }

    @media (max-width: 500px) {
        top: 15px;
        right: 15px;
    }
`
export const Title = styled.h3`
    width: 78.95%;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.33;
    white-space: pre-line;
    margin-bottom: 50px;
    text-align: ${props => props.$thanks ? 'center' : 'left'};

    @media (max-width: 500px) {
        font-size: 20px;
        margin-bottom: 30px;
    }
`
export const ConnectForm = styled.form`
    width: 78.95%; // 600/760
    height: 72.49%; // 564/778
    display: flex;
    flex-direction: column;
`
export const InputWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    @media (max-width: 500px) {
        margin-bottom: 25px;
    }
`
export const Label = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 11px;
    color: ${props => props.$valid ? 'inherit' : '#E30613'}

    @media (max-width: 500px) {
        font-size: 12px;
    }
`
export const Input = styled.input`
    width: 100%;
    height: 60px;
    background: #FFFFFF;
    border: ${props => props.$valid ?
        '1px solid #1C383C' :
        '1px solid #E30613'};
    box-sizing: border-box;
    border-radius: 3px;
    padding: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.11;

    @media (max-width: 500px) {
        height: 45px;
        padding: 10px;
        font-size: 14px;
    }
`
export const TextArea = styled.textarea`
    width: 100%;
    height: 180px;
    background: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.11;
    border: ${props => props.$valid ?
        '1px solid #1C383C' :
        '1px solid #E30613'};
    border-radius: 3px;
    padding: 20px;
    outline: none;
    resize: none;

    @media (max-width: 500px) {
        height: 120px;
        font-size: 14px;
        padding: 10px;
    }
`
export const Submit = styled(WorkWithUs)`
    width: 116px;
    height: 60px;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    border-radius: 0;
    opacity: ${props => props.valid ? '1' : '0.5'};

    @media (max-width: 500px) {
        width: 100px;
        height: 50px;
        font-size: 18px;
    }
`
export const Iframe = styled.iframe`
    display: none;
`
export const SubmitScreen = styled.div`
        width: 760px;
        height: 778px;
        display: flex;
        justify-content: center;
        align-items: center;
`