import { HeaderLeft, HeaderLink, HeaderLogo, HeaderRight, HeaderSection, HeaderTitle, HeaderWork } from "./styledHeader"
import logo from '../../images/logo.png';
import logoT from '../../images/logoTipped.png';
import { useState } from 'react';
import { PromiseProvider } from "mongoose";

const Header = (props) => {

    const [image, setImage] = useState(logo);

    return (
        <HeaderSection>
            <HeaderLeft>
                <HeaderLogo
                    image={image}
                    onMouseEnter={() => setImage(logoT)}
                    onMouseLeave={() => setImage(logo)} />
                <HeaderTitle>Awesome Container Company</HeaderTitle>
            </HeaderLeft>
            <HeaderRight>
                {props.headerLinks.map((link) => {
                    return (
                        <HeaderLink
                            to={link.id}>
                            {link.name}
                        </HeaderLink>
                    )
                })}
                <HeaderWork>Work with us</HeaderWork>
            </HeaderRight>
        </HeaderSection>
    )
}
export default Header;