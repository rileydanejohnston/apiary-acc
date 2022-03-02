import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WorkWithUs } from '../sharedComponents/sharedComponents';

export const HeaderSection = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
`
export const HeaderLeft = styled.div`
    margin-left: 20.5px;
    display: flex;
    align-items: center;
`
export const HeaderLogo = styled.div`
    width: 92px;
    height: 52px;
    background-image: url(${props => props.image});
    }
`
export const HeaderTitle = styled.p`
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
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #1C383C;
    margin-right: 30px;
    cursor: pointer;

    &:last-of-type {
        margin-right: 40px;
    }
`
export const HeaderWork = styled(WorkWithUs)`
    width: 132px;
    height: 44px;
    border-style: none;
`