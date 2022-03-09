import { Block, BlockText, BlockTitle, FooterBlocks, FooterBottom, FooterWrapper, ImgBackground, Link, LinkImg, LinkWrapper, TextBlock, TextLine, TextLineS, TextWrapper } from "./styledFooter"
import { FooterData } from '../../constants/footer';
import insta from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';

const {
    blocks,
    links
} = FooterData;

const Footer = () => {

    return (
        <FooterWrapper>
            <FooterBlocks>
                {blocks.map((data) => {
                    if (data.hasOwnProperty('text1')) {
                        return (
                            <Block key={blocks.indexOf(data)}>
                                <BlockTitle>{data.title}</BlockTitle>
                                <TextBlock>
                                    <TextLine margin={data.margin}>{data.text1}</TextLine>
                                    <TextLine>{data.text2}</TextLine>
                                </TextBlock>
                                <TextBlock>
                                    <TextLine $size={data.size}>{data.text3}</TextLine>
                                    <TextLine $size={data.size}>{data.text4}</TextLine>
                                    <TextLine $size={data.size}>{data.text5}</TextLine>
                                </TextBlock>
                            </Block>
                        )
                    }

                    else return (
                        <Block key={blocks.indexOf(data)}>
                            <BlockTitle>{data.title}</BlockTitle>
                            <TextBlock>
                                <LinkWrapper>
                                    <ImgBackground>
                                        <LinkImg src={insta} />
                                    </ImgBackground>
                                    <Link>
                                        <TextLine>{data.link1}</TextLine>
                                    </Link>
                                </LinkWrapper>
                                <LinkWrapper>
                                    <ImgBackground>
                                        <LinkImg src={twitter} />
                                    </ImgBackground>
                                    <Link>
                                        <TextLine>{data.link2}</TextLine>
                                    </Link>
                                </LinkWrapper>
                            </TextBlock>
                        </Block>
                    )
                })}
            </FooterBlocks>
            <FooterBottom>
                <TextLine
                    $size={true}
                    $right={true}>
                    Awesome Container Compnay © 2022
                </TextLine>
                <Link>
                    <TextLine $size={true}>
                        Terms of Use
                    </TextLine>
                </Link>
            </FooterBottom>
        </FooterWrapper>
    )
}

export default Footer;