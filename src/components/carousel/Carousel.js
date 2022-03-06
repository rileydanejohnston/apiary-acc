import React from 'react'
import arrowLeft from '../../images/arrow-left.svg'
import arrowRight from '../../images/arrow-right.svg'
import container0 from '../../images/container-0.png'
import {
  CarouselWrapper,
  CarouselButton,
  SlideWrapper,
  SlideImg,
  SlideDetails,
  ListTitle,
  List,
  Item,
  ListGroup
} from './styledCarousel'

const Carousel = () => {

  const ContainerData = {
    image: container0,
    altText: 'Stainless steel containers image 1',
    features: [
      'Removable/adjustable divider',
      'Leak-resistant lid keeps food fresh',
      'Rectangle shapes stack to save storage space',
      'Easy to sanitize and dishwasher safe',
      'Containers and lids are freezer safe',
      'Containers are oven safe up to 300 degrees',
      'Lighter and sturdier than glass',
      'Etched tare weights for easy bulk shopping',
      '304 (18/8) stainless steel, LDPE #4 plastic lid, PP #5 plastic divider',
      'Free of BPA, BPS, phthalates and lead'
    ],
    sizing: [
      '25oz container size with lid on: 7.75” x 1.75" x 5” Lids: 7.75” x 5”'
    ]
  }
  /*

*/
  return (
    <CarouselWrapper >
      <CarouselButton image={arrowLeft} />
      <SlideWrapper>
        <SlideImg src={container0} alt='Stainless steel containers image 1'/>
        <SlideDetails>
          <ListGroup>
            <ListTitle>Features</ListTitle>
            <List>
              {
                ContainerData.features.map((feature, index) => {
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
                ContainerData.sizing.map((size, index) => {
                  return (
                    <Item key={index}>{size}</Item>
                  );
                })
              }
            </List>
          </ListGroup>
        </SlideDetails>
      </SlideWrapper>
      <CarouselButton image={arrowRight} />
    </CarouselWrapper>
  )
}

export default Carousel