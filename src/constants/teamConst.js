import lam from '../images/Lam.png';
import phua from '../images/Phua.png';
import catella from '../images/Catella.png';
import chef from '../images/chefatwork.svg';
import stewards from '../images/stewards.svg';
import ninja from '../images/ninjavan.svg';
import creatella from '../images/creatella.svg';
import goa from '../images/goa.svg';

export const TeamData = {
    teamTitle: 'An Awesome Team',
    members: [
        {
            image: lam,
            name: 'Hung Lam',
            role: 'Founder / CEO',
            link: 'https://www.linkedin.com/in/hung-lam-85a502163/'
        },
        {
            image: phua,
            name: 'Edwin Phua',
            role: 'Co-founder / COO',
            link: 'https://www.linkedin.com/in/edwin-phua/'
        },
        {
            image: catella,
            name: 'Guillaume Catella',
            role: 'Co-founder / CTO',
            link: 'https://www.linkedin.com/in/guillaumecatella/'
        }
    ],
    partnersTitle: 'And Awesome Partners',
    partners1: [
        chef, stewards, ninja
    ],
    partners2: [
        creatella, goa
    ]

}