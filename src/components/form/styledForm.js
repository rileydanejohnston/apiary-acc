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
    z-index: 1;
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
`
export const Title = styled.h3`
    width: 78.95%;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.33;
    white-space: pre-line;
    margin-bottom: 50px;
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
`
export const Label = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 11px;
    color: ${props => props.$valid ? 'inherit' : '#E30613'}
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
`
export const TextArea = styled.textarea`
    width: 100%;
    height: 180px;
    background: #FFFFFF;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.11;
    border: 1px solid #1C383C;
    border-radius: 3px;
    padding: 20px;
    outline: none;
`
export const Submit = styled(WorkWithUs)`
    width: 116px;
    height: 60px;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    border-radius: 0;
    opacity: ${props => props.valid ? '1' : '0.5'};
`
export const Iframe = styled.iframe`
    display: none;
`