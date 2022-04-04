import { Handle, HomeGraphics, HomePic, HomePicContainer, HomePicText, HomePicTextContainer, HomeSection, Title, TitleSpan } from "./styledHome";
import trash from '../../images/TrashPlaceHolder.png';
import container0 from '../../images/container-0-copy.png';
import handle from '../../images/sliderHandle.svg';
import ReactCompareImage from 'react-compare-image';
import Animation from "../animation/Animation";
import React from "react";

const Home = () => {

    return (
        <HomeSection>
            <Title>Help our environment by eliminating single-use plastics from your delivery with
                <TitleSpan> Awesome Container Company</TitleSpan>
            </Title>
            <HomeGraphics>
                <HomePicContainer>
                    <HomePic>
                        <ReactCompareImage
                            handle={<Handle src={handle} />}
                            leftImage={trash}
                            leftImageCss={
                                { height: '100%' }
                            }
                            rightImage={container0}
                            rightImageCss={
                                {
                                    height: '100%'
                                }
                            }
                            sliderLineColor='#FF9820'
                            handleSize='28'
                        />
                    </HomePic>
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