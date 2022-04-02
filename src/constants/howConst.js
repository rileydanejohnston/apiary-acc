import phoneImg from '../images/phone.svg';
import containerImg from '../images/container-monster.svg';
import truckImg from '../images/truck.svg';
import starsImg from '../images/stars.svg';
import curveArrow from '../images/up-right-arrow.svg';
import straightArrow from '../images/straight-arrow.svg';
import mobile180Arrow from '../images/mobile-u-arrow.svg';

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
        img: {
          desktop: curveArrow,
          mobile: straightArrow
        },
        size: {
          desktop: {
            width: '46px',
            height: '46px'
          },
          mobile: {
            width: '18.33px',
            height: '33px'
          }
        },
        top: '136px',
        left: {
          desktop: '69.35%',        /*  860 /  1240  */
          laptop: '71.75%'          /*  706 /  984  */
        },
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
        img: {
          desktop: curveArrow,
          mobile: straightArrow
        },
        size: {
          desktop: {
            width: '46px',
            height: '46px'
          },
          mobile: {
            width: '18.33px',
            height: '33px'
          }
        },
        top: '480px',
        left: {
          desktop: '69.35%',        /*  860 /  1240  */
          laptop: '71.75%'          /*  706 /  984  */
        },
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
        img: {
          desktop: curveArrow,
          mobile: straightArrow
        },
        size: {
          desktop: {
            width: '46px',
            height: '46px'
          },
          mobile: {
            width: '18.33px',
            height: '33px'
          }
        },
        top: '480px',
        left: {
          desktop: '27.82%',        /*  345 /  1240  */
          laptop: '25.81%'          /*  254 /  984  */
        },
        deg: '270deg'

        
        /*  860 /  1240  = 69.35%  */
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
        img: {
          desktop: curveArrow,
          mobile: mobile180Arrow
        },
        size: {
          desktop: {
            width: '46px',
            height: '46px'
          },
          mobile: {
            width: '65px',
            height: '92px'
          }
        },
        top: '136px',
        left: {
          desktop: '27.82%',        /*  345 /  1240  */
          laptop: '25.81%'          /*  254 /  984  */
        },
        deg: '0deg'

        /*  345 /  1240  = 27.82%  */
        /*  860 /  1240  = 69.35%  */
      }
    },
  ],
  highlighter: 'Circular ecosystem',
  buttonText: 'Work with Us'
};