import diamond from '../images/diamond.svg';
import logo from '../images/logo.svg';
import dotB from '../images/bDot.svg';
import dotO from '../images/oDot.svg';

export const ImpactData = {
    diamond: diamond,
    boxes: [
        {
            id: 1,
            title: 'For Businesses',
            text: {
                line1: 'Save at least 50% on supply cost',
                line2: 'Save 50-60 hours per week of manager’s labor cost: no inventory management, no reordering, no restocking',
                line3: 'Save real estate cost for storage'
            }
        },
        {
            id: 2,
            title: 'For Users',
            text: {
                line1: 'Remove all chemicals going into food: plastics, BPA, PFAS and other ‘forever chemicals’ used to hold compostable packaging together',
                line2: 'Gamification: reward for returned containers',
                line3: 'Sustainability sells: users feel good about helping the planet'
            }
        }
    ],
    // table: {
    //     headers: [
    //         { content: logo },
    //         {
    //             content: 'Awesome Container Company',
    //             color: 'orange'
    //         },
    //         { content: 'Deliver Zero' },
    //         { content: 'Logistics Company' },
    //         { content: 'Washing Facility' },
    //         { content: 'Single-use plastics' }
    //     ],
    //     rows: [
    //         [
    //             {
    //                 content: 'Save over 50% on supply costs',
    //                 left: 'left'
    //             },
    //             { content: dotO },
    //             { content: null },
    //             { content: null },
    //             { content: null },
    //             { content: null }
    //         ],
    //         [
    //             {
    //                 content: 'Save real estate storage costs',
    //                 left: 'left'
    //             },
    //             { content: dotO },
    //             { content: dotB },
    //             { content: null },
    //             { content: null },
    //             { content: null }
    //         ],
    //         [
    //             {
    //                 content: 'Inventory management',
    //                 left: 'left'
    //             },
    //             { content: dotO },
    //             { content: null },
    //             { content: null },
    //             { content: null },
    //             { content: null }
    //         ],
    //         [
    //             {
    //                 content: 'Never reorder supplies',
    //                 left: 'left'
    //             },
    //             { content: dotO },
    //             { content: null },
    //             { content: null },
    //             { content: null },
    //             { content: null }
    //         ],
    //         [
    //             {
    //                 content: 'Easy pickup and delivery',
    //                 left: 'left'
    //             },
    //             { content: dotO },
    //             { content: null },
    //             { content: dotB },
    //             { content: dotB },
    //             { content: dotB }
    //         ],
    //         [
    //             {
    //                 content: 'Sustainable products',
    //                 left: 'left'
    //             },
    //             { content: dotO },
    //             { content: null },
    //             { content: null },
    //             { content: dotB },
    //             { content: null }
    //         ],
    //         [
    //             {
    //                 content: 'App for tracking and reporting',
    //                 border: 'bottom',
    //                 left: 'left'
    //             },
    //             {
    //                 content: dotO,
    //                 border: 'bottom'
    //             },
    //             {
    //                 content: null,
    //                 border: 'bottom'
    //             },
    //             {
    //                 content: dotB,
    //                 border: 'bottom'
    //             },
    //             {
    //                 content: null,
    //                 border: 'bottom'
    //             },
    //             {
    //                 content: null,
    //                 border: 'bottom'
    //             }
    //         ]
    //     ]
    // },
    table: [
        {
            pic: logo,
            top: 'top'
        },
        {
            content: 'Awesome Container Company',
            color: 'orange',
            top: 'top'
        },
        {
            content: 'Deliver Zero',
            top: 'top'
        },
        {
            content: 'Logistics Company',
            top: 'top'
        },
        {
            content: 'Washing Facility',
            top: 'top'
        },
        {
            content: 'Single-use plastics',
            top: 'top',
            right: 'right'
        },
        {
            content: 'Save over 50% on supply costs',
            left: 'left'
        },
        { pic: dotO },
        { content: null },
        { content: null },
        { content: null },
        {
            content: null,
            right: 'right'
        },
        {
            content: 'Save real estate storage costs',
            left: 'left'
        },
        { pic: dotO },
        { pic: dotB },
        { content: null },
        { content: null },
        {
            content: null,
            right: 'right'
        },
        {
            content: 'Inventory management',
            left: 'left'
        },
        { pic: dotO },
        { content: null },
        { content: null },
        { content: null },
        {
            content: null,
            right: 'right'
        },
        {
            content: 'Never reorder supplies',
            left: 'left'
        },
        { pic: dotO },
        { content: null },
        { content: null },
        { content: null },
        {
            content: null,
            right: 'right'
        },
        {
            content: 'Easy pickup and delivery',
            left: 'left'
        },
        { pic: dotO },
        { content: null },
        { pic: dotB },
        { pic: dotB },
        {
            pic: dotB,
            right: 'right'
        },
        {
            content: 'Sustainable products',
            left: 'left'
        },
        { pic: dotO },
        { content: null },
        { content: null },
        { pic: dotB },
        {
            content: null,
            right: 'right'
        },
        {
            content: 'App for tracking and reporting',
            bottom: 'bottom',
            left: 'left'
        },
        {
            pic: dotO,
            bottom: 'bottom'
        },
        {
            content: null,
            bottom: 'bottom'
        },
        {
            pic: dotB,
            bottom: 'bottom'
        },
        {
            content: null,
            bottom: 'bottom'
        },
        {
            content: null,
            bottom: 'bottom',
            right: 'right'
        }
    ]

}

