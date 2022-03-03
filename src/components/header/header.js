import { HeaderLeft, HeaderLink, HeaderLogo, HeaderRight, HeaderSection, HeaderTitle, HeaderWork } from "./styledHeader"

const Header = () => {

    return (
        <HeaderSection>
            <HeaderLeft>
                <HeaderLogo />
                <HeaderTitle>Awesome Container Company</HeaderTitle>
            </HeaderLeft>
            <HeaderRight>
                <HeaderLink>The Problem</HeaderLink>
                <HeaderLink>Sustainable Solution</HeaderLink>
                <HeaderLink>Impact</HeaderLink>
                <HeaderLink>Pricing</HeaderLink>
                <HeaderLink>Team</HeaderLink>
                <HeaderLink>Contacts</HeaderLink>
                <HeaderWork>Work with us</HeaderWork>
            </HeaderRight>
        </HeaderSection>
    )
}
export default Header;