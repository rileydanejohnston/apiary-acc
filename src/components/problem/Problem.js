import React from 'react'
import turtlePic from '../../images/turtle.svg';
import bottlePic from '../../images/bottles.svg';
import trashPic from '../../images/plastic-wrappers.svg';
import {
  ProblemWrapper,
  Grid,
  Cell,
  TitleWrapper,
  Title,
  Subtitle,
  Highlight,
  StatCell,
  CircleGraph,
  WasteStat,
  RecycleStat,
  StatTitle,
  Image,
  ImgCaption
} from './styledProblem'

export default function Problem() {
  return (
    <ProblemWrapper>
      <Grid>
        <StatCell>
          <StatTitle>Single-use plastics</StatTitle>
          <CircleGraph>
            <WasteStat>91% Waste</WasteStat>
            <RecycleStat>9% Recycled</RecycleStat>
          </CircleGraph>
        </StatCell>
        <TitleWrapper>
          <Title>
            Single-use packaging:<br/>
            bad for the planet, bad for business
          </Title>
          <Subtitle>
            Millions of tons of single-use packaging <Highlight>end up in landfills and oceans</Highlight> while only <Highlight>9% of single-use waste gets recycled. </Highlight>Meanwhile, single-use containers are expensive and restaurants need to track inventory / restock weekly.
          </Subtitle>
        </TitleWrapper>
        <Cell>
          <Image src={turtlePic} alt='Sea Turtle' />
          <ImgCaption>Single-use plastics pollute oceans and<br/>kill marine species</ImgCaption>
        </Cell>
        <Cell>
          <Image src={bottlePic} alt='An endless sea of plastic bottles' />
          <ImgCaption>Single-use plastics pollute landfills and<br/>emit dangerous chemicals and greenhouse gases</ImgCaption>
        </Cell>
        <Cell>
          <Image src={trashPic} alt='A person standing over a table covered with plastic wrappers' />
          <ImgCaption>Not all of the single-use plastics are recyclable</ImgCaption>
        </Cell>
      </Grid>
    </ProblemWrapper>
  )
}
