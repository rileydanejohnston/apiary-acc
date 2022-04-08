import { Box, BoxContain, BoxDiamond, BoxImage, BoxText, BoxTitle, BoxWrapper, Circles, Grid, GridCell, GridPic, GridText, GridWrapper, ImageWrap, ImpactTitle, ImpactWrapper, ScrollContainer } from "./styledImpact"
import { ImpactData } from "../../constants/impactConst";
import uniqueId from 'lodash.uniqueid'
import rectleft from '../../images/rectleft.svg';
import rectmiddle from '../../images/rectmiddle.svg';
import rectright from '../../images/rectright.svg';
import circles from '../../images/circles.svg';
import { initial, whileInView, viewport, transition } from '../../constants/animateRevealConst';


const {
    diamond,
    boxes,
    table
} = ImpactData;

const Impact = () => {

    return (
        <ImpactWrapper
            id='impact'
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={transition}
        >
            <ImpactTitle>Impact</ImpactTitle>
            <BoxWrapper>
                {boxes.map(({ id, title, text }) => {
                    return (
                        <BoxContain key={id}>
                            {id === 1 ?
                                <ImageWrap>
                                    <BoxImage src={rectleft} />
                                    <BoxImage src={rectmiddle} />
                                    <BoxImage src={rectright} />
                                </ImageWrap>
                                :
                                <Circles src={circles} />
                            }
                            <Box>
                                <BoxTitle>{title}</BoxTitle>
                                <BoxDiamond src={diamond} />
                                <BoxText>{text.line1}</BoxText>
                                <BoxDiamond src={diamond} />
                                <BoxText>{text.line2}</BoxText>
                                <BoxDiamond src={diamond} />
                                <BoxText>{text.line3}</BoxText>
                                {id === 1 &&
                                    <>
                                        <BoxDiamond src={diamond} />
                                        <BoxText>{text.line4}</BoxText>
                                    </>
                                }
                            </Box>
                        </BoxContain>
                    )
                })
                }
            </BoxWrapper>
            <ImpactTitle>The competition is no match</ImpactTitle>
            <GridWrapper>
                <Grid>
                    {table.map((cell) => {
                        if (cell.hasOwnProperty('pic')) {
                            return (
                                <GridCell
                                    key={uniqueId()}
                                    right={cell.right}
                                    bottom={cell.bottom}
                                    top={cell.top}>
                                    <GridPic src={cell.pic} />
                                </GridCell>
                            )
                        }
                        else if (cell.hasOwnProperty('content')) {
                            return (
                                <GridCell
                                    key={uniqueId()}
                                    right={cell.right}
                                    bottom={cell.bottom}
                                    top={cell.top}>
                                    <GridText
                                        top={cell.top}
                                        orange={cell.color}>
                                        {cell.content}</GridText>
                                </GridCell>
                            )
                        }
                    })}
                </Grid>
            </GridWrapper>
        </ImpactWrapper>
    )
}

export default Impact;