import { headerLinks } from '../../constants/headerConst';
import { Nav, NavLink, WorkButton, Wrapper } from './styledMenu';

const Menu = (props) => {

    return (
        <Wrapper>
            <Nav>
                {headerLinks.map((link) => {
                    return (
                        <NavLink
                            onClick={props.toggleMenu}
                            href={link.id}>
                            {link.name}
                        </NavLink>
                    )
                })}
            </Nav>
            <WorkButton
            >Work with us</WorkButton>
        </Wrapper>
    )
}

export default Menu;