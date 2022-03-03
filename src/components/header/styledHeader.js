import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WorkWithUs } from '../sharedComponents/sharedComponents';

export const HeaderSection = styled.header`
    height: 80px;
    display: flex;
    flex-direction row;
    justify-content: space-between;
`
export const HeaderLeft = styled.div`
    margin-left: 20.5px;
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const HeaderLogo = styled.img`
    width: 92px;
    height: 52px;
    background: inherit;
`
export const HeaderTitle = styled.p`
    font-family: Spline Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #1C383C;
`
export const HeaderRight = styled.nav`
    margin: auto 40px auto auto;
    align-items: center;
`
// make this styled Link when you get chance
export const HeaderLink = styled.a`
    font-family: Spline Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #1C383C;
    margin-right: 30px;
    cursor: pointer;

    last-of-type {
        margin-right: 40px;
    }
`
export const HeaderWork = styled(WorkWithUs)`
    width: 132px;
    height: 44px;
    border-style: none;
`