import React from 'react'
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
import { ProblemData } from '../../constants/problem'
const {
  statTitle,
  wasteStat,
  recycleStat,
  problemTitle,
  subtitle,
  images
} = ProblemData;

export default function Problem() {
  return (
    <ProblemWrapper>
      <Grid>
        <StatCell>
          <StatTitle>{statTitle}</StatTitle>
          <CircleGraph>
            <WasteStat>{wasteStat}</WasteStat>
            <RecycleStat>{recycleStat}</RecycleStat>
          </CircleGraph>
        </StatCell>
        <TitleWrapper>
          <Title>
            {problemTitle.part1}<br/>
            {problemTitle.part2}
          </Title>
          <Subtitle>
            {subtitle.normal1}
            <Highlight>{subtitle.highlight1}</Highlight>
            {subtitle.normal2}
            <Highlight>{subtitle.highlight2}</Highlight>
            {subtitle.normal3}
          </Subtitle>
        </TitleWrapper>
        {
          images.map(({ image, altText, caption }) => {
            return (
              <Cell>
                <Image src={image} alt={altText} />
                {
                  caption.hasOwnProperty('part2') ? 
                  <ImgCaption>{caption.part1}<br/>{caption.part2}</ImgCaption> :
                  <ImgCaption>{caption.part1}</ImgCaption>
                }
              </Cell>
            )
          })
        }
      </Grid>
    </ProblemWrapper>
  )
}
