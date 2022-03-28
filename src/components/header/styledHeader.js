import styled from 'styled-components';
import { WorkWithUs } from '../sharedComponents/sharedComponents';
import smallLogo from '../../images/smallLogo.svg';

export const HeaderSection = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    position: relative;

    @media (max-width: 425px) {
        height: 60px;
    }
`
export const HeaderLeft = styled.div`
    margin-left: 20.5px;
    display: flex;
    align-items: center;

    @media (max-width: 425px) {
        margin-left: 16px;
    }
`
export const HeaderLogo = styled.div`
    width: 92px;
    height: 52px;
    background-image: url(${props => props.image});

    @media (max-width: 425px) {
        width: 60px;
        height: 33.44px;
        background-image: url(${smallLogo});
        margin-right: 8px;
    }
`
export const HeaderTitle = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    color: #1C383C;

    @media (max-width: 768px) {
        margin-left: 4px;
    }

    @media (max-width: 425px) {
        font-size: 12px;
        line-height: 14px;
    }
`
export const HeaderRight = styled.div`
    margin: auto 40px auto auto;
    align-items: center;
    display: flex;

    @media (max-width: 1024px) {
        margin-right: 20px;
    }
    @media (max-width: 425px)  {
        margin-right: 8px;
    }
`
export const HeaderNav = styled.nav`
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`
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

    :hover {
        opacity: 0.7;
    }

    @media (max-width: 1024px) {
        margin-right: 20px;

        &: last-of-type {
            margin-right: 20px;
        }
    }
`
export const HeaderWork = styled(WorkWithUs)`
    width: 132px;
    height: 44px;
    border-style: none;

    @media (max-width: 425px) {
        display: none;
    }
`
export const Hamburger = styled.img`
    width: 44px;
    height: 44px;
    margin-right: 30px;
    display: none;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
    }
    @media (max-width: 425px) {
        margin-right: 0;
    }
`