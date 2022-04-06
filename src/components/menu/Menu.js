import { headerLinks } from '../../constants/headerConst';
import { Nav, NavLink, WorkButton, Wrapper } from './styledMenu';
import uniqueId from 'lodash.uniqueid';

const Menu = (props) => {

    return (
        <Wrapper>
            <Nav>
                {headerLinks.map((link) => {
                    return (
                        <NavLink
                            key={uniqueId()}
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