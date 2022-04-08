import { FooterSection, Block, BlockTitle, FooterBlocks, FooterBottom, FooterWrapper, ImgBackground, Link, LinkImg, LinkWrapper, TextBlock, TextLine } from "./styledFooter"
import { FooterData } from '../../constants/footerConst';
import uniqueId from 'lodash.uniqueid';
import { initial, whileInView, viewport, transition } from '../../constants/animateRevealConst';
const {
    blocks,
    links
} = FooterData;

const Footer = () => {

    return (
        <FooterSection
            id='contacts'
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={transition}
        >
            <FooterWrapper>
                <FooterBlocks>
                    {blocks.map((data) => {
                        if (data.hasOwnProperty('text1')) {
                            return (
                                <Block key={uniqueId()}>
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
                            <Block
                                key={uniqueId()}
                                $order={true}>
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
        </FooterSection>
    )
}

export default Footer;