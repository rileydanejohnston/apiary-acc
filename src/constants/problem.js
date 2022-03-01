import turtle from '../images/turtle.svg';
import bottles from '../images/bottles.svg';
import trash from '../images/plastic-wrappers.svg';

export const ProblemData = {
  statTitle: 'Single-use plastics',
  wasteStat: '91% Waste',
  recycleStat: '9% Recycled',
  problemTitle: {
    part1: 'Single-use packaging:',
    part2: 'bad for the planet, bad for business'
  },
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
      caption: {
        part1: 'Single-use plastics pollute oceans and',
        part2: 'kill marine species'
      }
    },
    {
      image: bottles,
      altText: 'An endless sea of plastic bottles',
      caption: {
        part1: 'Single-use plastics pollute landfills and ',
        part2: 'emit dangerous chemicals and greenshouse gases'
      }
    },
    {
      image: trash,
      altText: 'A person standing over a table covered with plastic wrappers',
      caption: {
        part1: 'Not all of the single-use plastics are recyclable'
      }
    }
  ]
};