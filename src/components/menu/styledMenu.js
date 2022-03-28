import styled from 'styled-components';
import { WorkWithUs } from '../sharedComponents/sharedComponents';

export const Wrapper = styled.div`
    width: 100%;
    max-width: 375px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20%;
    border: 1px solid black;
    border-radius: 20px;
    padding: 60px 0 60px 0;
    background: white;
    z-index: 2;

    @media (max-width: 425px) {
        padding-top: 111px;
        border: none;
    }
`
export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const NavLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 24px;
    cursor: pointer;

    @media (max-width: 425px) {
        &:last-of-type {
            margin-bottom: 112px;
        }
    }
`
export const WorkButton = styled(WorkWithUs)`
    width: 200px;
    height: 60px;
    font-size: 24px;
    line-height: 28px;
    margin: auto;
    display: none;

    @media (max-width: 425px) {
        display: block;
    }
`