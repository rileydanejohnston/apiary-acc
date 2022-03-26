import { HeaderLeft, HeaderLink, HeaderLogo, HeaderRight, HeaderSection, HeaderTitle, HeaderWork } from "./styledHeader"
import logo from '../../images/logo.svg';
import logoT from '../../images/logoTipped.svg';
import { useState } from 'react';
import { headerLinks } from '../../constants/headerConst';

const Header = () => {

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
                {headerLinks.map((link) => {
                    return (
                        <HeaderLink
                            href={link.id}
                            key={headerLinks.indexOf(link)}>
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