import { Block, BlockTitle, FooterBlocks, FooterBottom, FooterWrapper, ImgBackground, Link, LinkImg, LinkWrapper, TextBlock, TextLine } from "./styledFooter"
import { FooterData } from '../../constants/footer';

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
                                </TextBlock>
                                <TextBlock>
                                    <TextLine $size={data.size}>{data.text2}</TextLine>
                                </TextBlock>
                            </Block>
                        )
                    }

                    else return (
                        <Block>
                            <BlockTitle>{data.title}</BlockTitle>
                            <TextBlock>
                                <LinkWrapper>
                                    <ImgBackground>
                                        <LinkImg src={data.img1} />
                                    </ImgBackground>
                                    <Link>
                                        <TextLine>{data.text}</TextLine>
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
                    {links.name}
                </TextLine>
                <Link>
                    <TextLine $size={true}>
                        {links.terms}
                    </TextLine>
                </Link>
            </FooterBottom>
        </FooterWrapper>
    )
}

export default Footer;