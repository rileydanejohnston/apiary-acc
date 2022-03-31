import React from 'react'
import {
  SlideWrapper,
  SlideImg,
  SlideDetails,
  ListTitle,
  List,
  Item,
  ListGroup
} from './styledSlide'
import uniqueId from 'lodash.uniqueid';

const Slide = ({ data }) => {

  const { image, altText, features, sizing } = data;

  return (
    <SlideWrapper>
      <SlideImg src={image} alt={altText} />
      <SlideDetails>
        <ListGroup>
          <ListTitle>Features</ListTitle>
          <List>
            {
              features.map((feature) => {
                return (
                  <Item key={uniqueId()}>{feature}</Item>
                );
              })
            }
          </List>
        </ListGroup>
        <ListGroup>
          <ListTitle>Sizing</ListTitle>
          <List>
            {
              sizing.map((size) => {
                return (
                  <Item key={uniqueId()}>{size}</Item>
                );
              })
            }
          </List>
        </ListGroup>
      </SlideDetails>
    </SlideWrapper>
  )
}

export default Slide