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
              features.map((feature, index) => {
                return (
                  <Item key={index}>{feature}</Item>
                );
              })
            }
          </List>
        </ListGroup>
        <ListGroup>
          <ListTitle>Sizing</ListTitle>
          <List>
            {
              sizing.map((size, index) => {
                return (
                  <Item key={index}>{size}</Item>
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