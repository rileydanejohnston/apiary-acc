import phoneImg from '../images/phone.svg';
import containerImg from '../images/container-monster.svg';
import truckImg from '../images/truck.svg';
import starsImg from '../images/stars.svg';
import topLeftImg from '../images/up-right-arrow.svg'

export const HowData = {
  title: 'How it works?',
  step1: `01.\nRestaurants request reusable\ncontainers via app`,
  step2: `02.\nDeliver containers\nto restaurants`,
  step3: `03.\nPick up used containers from users\nvia app`,
  step4: `04.\nWash containers\nat commercial facility`,
  highlighter: 'Circular ecosystem',
  buttonText: 'Work with Us'
};

export const HowInfo = {
  title: 'How it works?',
  steps: [
    {
      // step wrapper
      stepStyles: {
        position: 'static',
        top: '0',
        left: '0',
        width: '300px'
      },
      // image
      imgStyles: {
        img: phoneImg,
        width: '121.5px',
        height: '140px',
      },
      // text
      text: `01.\nRestaurants request reusable containers via app`,
      textMargin: '18px',
      // arrow
      arrowStyles: {
        top: '136px',
        left: '69.35%',
        deg: '90deg'
      }
    },
    {
      // step wrapper
      stepStyles: {
        position: 'absolute',
        top: '218px',
        left: 'calc(100% - 206px)',
        width: '206px',
      },
      // image
      imgStyles: {
        img: truckImg,
        width: '123.5px',
        height: '92px',
      },
      // text
      text: `02.\nDeliver containers to restaurants`,
      textMargin: '30px',
      // arrow
      arrowStyles: {
        top: '480px',
        left: '69.35%',
        deg: '180deg'
      }
    },
    {
      // step wrapper
      stepStyles: {
        position: 'static',
        top: '0',
        left: '0',
        width: '300px'
      },
      // image
      imgStyles: {
        img: containerImg,
        width: '123.5px',
        height: '121.3px',
      },
      // text
      text: `03.\nPick up used containers from users via app`,
      textMargin: '26.7px',
      // arrow
      arrowStyles: {
        top: '480px',
        left: '27.82%',
        deg: '270deg'
      }
    },
    {
      // step wrapper
      stepStyles: {
        position: 'absolute',
        top: '218px',
        left: '0',
        width: '239px',
      },
      // image
      imgStyles: {
        img: starsImg,
        width: '114px',
        height: '114px',
      },
      // text
      text: `04.\nWash containers\nat commercial facility`,
      textMargin: '7px',
      // arrow
      arrowStyles: {
        top: '136px',
        left: '27.82%',
        deg: '0deg'
      }
    },
  ],
  highlighter: 'Circular ecosystem',
  buttonText: 'Work with Us'
};