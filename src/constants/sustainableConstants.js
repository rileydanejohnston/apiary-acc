import logisticsImg from '../images/logistics-img.svg';
import supplyImg from '../images/supply-img.svg';
import storageImg from '../images/storage-img.svg';

export const SustainableData = {
  title: 'Sustainability Delivered',
  subtitle: {
    highlight: 'Awesome Container Company ',
    normal: 'replaces single-use packaging with reusable stainless steel containers'
  },
  logisticData: {
    logisticsText: 'Backend logistics support',
    logisticsTextWidth: '286px',
    logisticsImg: logisticsImg,
    logisticsSize: {
      width: '152.73px',
      height: '165.86px'
    },
    logisticsPosition: {
      over1280: {
        top: '101px',
        left: '13.26%'
      },
      over1023: {
        left: '4.69%'
      },
      over767: {
        top: '80px',
        left: '8.33%'
      }
    }
  },
  supplyData: {
    supplyText: 'Save at least 50% on supply cost and time on inventory tracking/re-orders',
    supplyTextWidth: '369px',
    supplyImg: supplyImg,
    supplySize: {
      width: '179.1px',
      height: '92.6px'
    },
    supplyPosition: {
      over1280: {
        top: '277px',
        left: '59.24%'
      },
      over1023: {
        left: '54.39%'
      },
      over767: {
        top: '379px',
        left: '41.02%'
      }
    }
},
  storageData: {
    storageText: 'Save storage space while removing tons of waste from our oceans and landfills',
    storageTextWidth: '543px',
    storageImg: storageImg,
    storageSize: {
      width: '154.8px',
      height: '105px'
    },
    storagePosition: {
      over1280: {
        top: '550px',
        left: '22.22%'
      },
      over1023: {
        left: '15.33%'
      },
      over767: {
        top: '677px',
        left: '14.71%'
      }
    }
  }
}