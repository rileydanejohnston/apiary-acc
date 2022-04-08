import { Hamburger, HeaderLeft, HeaderLink, HeaderLogo, HeaderNav, HeaderRight, HeaderSection, HeaderTitle, HeaderWork } from "./styledHeader"
import logo from '../../images/logo.svg';
import logoT from '../../images/logoTipped.svg';
import hamburger from '../../images/hamburger.svg';
import menuExit from '../../images/menuExit.svg';
import { useState, useEffect } from 'react';
import { headerLinks } from '../../constants/headerConst';
import Menu from "../menu/Menu";
import uniqueId from 'lodash.uniqueid';
import { initial, whileInView, viewport, transition } from '../../constants/animateRevealConst';

const Header = (props) => {

    const [image, setImage] = useState(logo);

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        function checkWindow() {
            if (window.innerWidth > 1024) {
                setMenuOpen(false)
            }
        }
        window.addEventListener('resize', checkWindow);
        return () => window.removeEventListener('resize', checkWindow);
    })

    return (
        <HeaderSection
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={transition}
        >
            <HeaderLeft>
                <HeaderLogo
                    image={image}
                    onMouseEnter={() => setImage(logoT)}
                    onMouseLeave={() => setImage(logo)} />
                <HeaderTitle>Awesome Container Company</HeaderTitle>
            </HeaderLeft>
            <HeaderRight>
                <Hamburger src={menuOpen ? menuExit : hamburger}
                    onClick={toggleMenu} />
                <HeaderNav>
                    {headerLinks.map((link) => {
                        return (
                            <HeaderLink
                                key={uniqueId()}
                                href={link.id}>
                                {link.name}
                            </HeaderLink>
                        )
                    })}
                </HeaderNav>
                <HeaderWork
                    onClick={props.openPopup}>
                    Work with us
                </HeaderWork>
            </HeaderRight>
            {menuOpen &&
                <Menu
                    openPopup={props.openPopup}
                    toggleMenu={toggleMenu} />
            }
        </HeaderSection>
    )
}
export default Header;