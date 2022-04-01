import React from 'react'
import {
  ProblemWrapper,
  Grid,
  Cell,
  TitleWrapper,
  Title,
  Subtitle,
  CircleCell,
  CircleGraph,
  CircleStat,
  CircleTitle,
  Image,
  ImgCaption
} from './styledProblem'
import { ProblemData } from '../../constants/problem'
import uniqueId from 'lodash.uniqueid';
import { Highlight } from '../sharedComponents/sharedComponents';
const {
  statTitle,
  wasteStat,
  recycleStat,
  problemTitle,
  subtitle,
  images
} = ProblemData;

const Problem = () => {
  return (
    <ProblemWrapper id='problem'>
      <Grid>
        <CircleCell>
          <CircleTitle>{statTitle}</CircleTitle>
          <CircleGraph>
            <CircleStat
              position={wasteStat.position}
            >
              {wasteStat.text}</CircleStat>
            <CircleStat 
              position={recycleStat.position}
            >
              {recycleStat.text}</CircleStat>
          </CircleGraph>
        </CircleCell>
        <TitleWrapper>
          <Title>{problemTitle}</Title>
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
              <Cell key={uniqueId()}>
                <Image src={image} alt={altText} />
                <ImgCaption>{caption}</ImgCaption>
              </Cell>
            )
          })
        }
      </Grid>
    </ProblemWrapper>
  )
}

export default Problem