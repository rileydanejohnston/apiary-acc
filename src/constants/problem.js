import turtle from '../images/turtle.png';
import bottles from '../images/bottles.png';
import trash from '../images/plastic-wrappers.png';

export const ProblemData = {
  statTitle: 'Single-use plastics',
  wasteStat: {
    text: '91% Waste',
    top: '59px',
    left: '59px'
  },
  recycleStat: {
    text: '9% Recycled',
    top: '164px',
    left: '88px'
  },
  problemTitle: 'Single-use packaging: bad for the planet, bad for business',
  subtitle: {
    normal1: 'Millions of tons of single-use packaging ',
    highlight1: 'end up in landfills and oceans',
    normal2: ' while only ',
    highlight2: '9% of single-use waste gets recycled',
    normal3: '. Meanwhile, single-use containers are expensive and restaurants need to track inventory / restock weekly.'
  },
  images: [
    {
      image: turtle,
      altText: 'Sea Turtle',
      caption: 'Single-use plastics pollute oceans and kill marine species'
    },
    {
      image: bottles,
      altText: 'An endless sea of plastic bottles',
      caption: 'Single-use plastics pollute landfills and emit dangerous chemicals and greenshouse gases'
    },
    {
      image: trash,
      altText: 'A person standing over a table covered with plastic wrappers',
      caption: 'Not all of the single-use plastics are recyclable'
    }
  ]
};