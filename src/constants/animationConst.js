import leftSmiley from '../images/left-smiley.svg';
import rightSmiley from '../images/right-smiley.svg';

export const AnimationData = [
  {
    color: '#161616',
    bgColor: '#E3E3E3',
    align: 'start',
    text: 'What do you do?'
  },
  {
    color: '#fff',
    bgColor: '#1C383C;',
    align: 'end',
    text: 'We provide reusable containers for restaurants, pick them up from users, clean them and give them back to your restaurant'
  },
  {
    color: '#161616',
    bgColor: '#E3E3E3',
    align: 'start',
    text: 'Awesome!'
  },
  {
    color: '#fff',
    bgColor: '#FF9820',
    align: 'start',
    text: 'I want to work with you!'
  },
  {
    color: '#fff',
    bgColor: '#1C383C;',
    align: 'end',
    text: 'Cool! We operate in Singapore and are planning to open in any other countries soon!'
  },
];


export const leftAvatarConfig = {
  image: leftSmiley,
  position: {
    top: '-19px',
    left: '-50px',
  },
  group: {
    initial: null,
    animate: null,
    transition: null
  },
  typing: {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 0
    },
    transition: {
      duration: 0.2,
      delay: 2.5
    }
  },
};

export const rightAvatarConfig = {
  image: rightSmiley,
  position: {
    top: 'calc(100% - 19px)',
    left: 'calc(100% - 24px)',
  },
  group: {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 1,
      delay: 4
    }
  },
  typing: {
    initial: {
      opacity: 1
    },
    animate: {
      opacity: 0
    },
    transition: {
      duration: 0.2,
      delay: 5.5
    }
  },
};