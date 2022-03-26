import { HomeGraphics, HomePic, HomePicContainer, HomePicText, HomePicTextContainer, HomeSection, Title, TitleSpan } from "./styledHome";
import trash from '../../images/TrashPlaceHolder.png';
import Animation from "../animation/Animation";

const Home = () => {

    return (
        <HomeSection>
            <Title>Help our environment by eliminating <br /> single-use plastics from your delivery with<br />
                <TitleSpan>Awesome Container Company</TitleSpan>
            </Title>
            <HomeGraphics>
                <HomePicContainer>
                    <HomePic src={trash} alt='trash' />
                    <HomePicTextContainer>
                        <HomePicText>Now</HomePicText>
                        <HomePicText>With Awesome Containers</HomePicText>
                    </HomePicTextContainer>
                </HomePicContainer>
                <Animation />
            </HomeGraphics>
        </HomeSection>
    )
}

export default Home;