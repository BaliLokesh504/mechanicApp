'use strict';
// const myName = 'bali lokesh';
// const myJob = 'I am a backend develope heyyyy';

// console.log(myName.split(' ').join(' '));

// const newName = function (name) {
//   const nameArray = name.split(' ');
//   const upperName = [];
//   for (const n of nameArray) {
//     upperName.push(n[0].toUpperCase() + n.slice(1));
//   }
//   return upperName.join(' ');
// };

// const finalResult = newName(myName);
// console.log(finalResult);

// const a = [1, 2, 3, 4, 5];

// a.forEach((ab, i, c) => {
//   console.log(ab);
//   console.log(i);
//   console.log(c);
// });

// const newData = a.map((ab) => ab * 2);

// console.log(newData);

// const newFilter = a.filter((ab) => ab < 0);

// console.log(newFilter);

// const newReduce = a.reduce((acc, ab) => {
//   if (acc > ab) return acc;
//   else return ab;
// }, 0);

// console.log(newReduce);

// const multipleData = 2;
// const finalData = a
//   .filter((curr) => curr > 0)
//   .map((curr) => curr * 2)
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(finalData);

// const newFindInIndex = a.findIndex((curr) => {
//   if (curr === 4) a.splice(curr);
// });

// console.log(newFindInIndex);
// console.log(a);

// const newSome = a.some((curr) => curr > 3);
// console.log(newSome);

// const b = [1, 2, 6, 4, 5];

// console.log(b.sort());

// const ab = b.sort((a, b) => {
//   if (a > b) return -1;
// });

// console.log(ab);

// const Arr1 = [7];
// const Arr2 = new Array(7);

// console.log(Arr1);
// console.log(Arr2);

// for (let index = 1; index < 100; index++) {
//   const element = index;
//   if (element % 2 != 0) console.log(element);
// }

// function getUnique(array) {
//   var uniqueArray = [];

// Loop through array values
//   for (i = 0; i < array.length; i++) {
//     if (uniqueArray.indexOf(array[i]) === -1) {
//       uniqueArray.push(array[i]);
//     }
//   }
//   return uniqueArray;
// }

// var names = ['John', 'Peter', 'Clark', 'Harry', 'John', 'Alice'];
// var uniqueNames = getUnique(names);
// console.log(uniqueNames);

// const nameData = 'i am loki';

// console.log(nameData.indexOf('ams'));

// const aArry = [];
// const bArry = new Array(7);

// console.log(aArry);

// bArry.fill(100, 3, 5);

// console.log(bArry);

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const loki = new Person('loki', 1993);

// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// };

// console.log(Person.prototype);

// const Car = function (carMake, carSpeed) {
//   this.carMake = carMake;
//   this.carSpeed = carSpeed;
// };

// Car.prototype.accelerate = function () {
// this.carSpeed += 10;
//   console.log((this.carSpeed += 10));
// };

// Car.prototype.brke = function () {
//   console.log(this.carSpeed / 5);
// };

// const BMW = new Car('bmw', 100);

// console.log(BMW);

// BMW.accelerate();

// class Bar {
//   constructor(carMake, carSpeed) {
//     this.carMake = carMake;
//     this.carSpeed = carSpeed;
//   }
//   get speedUs() {
//     this.carSpeed += 10;
//     console.log((this.carSpeed += 10));
//   }
// }

// const Car = function (charge) {
//   this.charge = charge;
// };

// const Ev = function (charge) {
//   Car.call(this, charge);
// };

// Car.prototype.chargeBattery = function () {
//   console.log(this.charge);
// };

// const vehicelData = {
//   carName: 'BMW',
//   broughtYear: 2012,
//   carAge() {
//     console.log(2021 - this.broughtYear);
//   },
// };

// const vehicelDataNew = {
//   carName: 'BMW',
//   broughtYear: 2010,
// };

// const ageCal = vehicelData.carAge;

// ageCal.call(vehicelDataNew, 'BMW', 2010);

const data = {
  quoteId: 'Q-uPFJoSovS',
  vehicle: { make: 'MARUTI', model: 'Omni', licenseplateno: 'KA01 AB1234' },
  currency: 'INR',
  customer: { name: '', phone: null },
  quoteRef: 'Test ref',
  createdOn: '2021-01-05T14:00:41.220Z',
  paintType: null,
  quoteType: 'lease',
  assessment: [
    {
      data: [
        {
          name: 'non-panel',
          imageUrl: {
            rawImages: [
              'https://clearquote-mrcnn.s3.amazonaws.com/annotation_data/Q-uPFJoSovS_1609855241357.jpg',
              'https://clearquote-mrcnn.s3.amazonaws.com/annotation_data/Q-uPFJoSovS_1609855244584.jpg',
            ],
            annotatedImages: [
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855241357_annotated_1609855272898.jpg',
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855244584_annotated_1609855265505.jpg',
            ],
          },
          damageCode: 'scratchS1',
        },
        {
          name: 'doorhandle',
          imageUrl: {
            rawImages: ['https://clearquote-mrcnn.s3.amazonaws.com/annotation_data/Q-uPFJoSovS_1609855243090.jpg'],
            annotatedImages: [
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855243090_annotated_1609855269221.jpg',
            ],
          },
          damageCode: 'Clean',
        },
        {
          name: 'orvm',
          imageUrl: {
            rawImages: ['https://clearquote-mrcnn.s3.amazonaws.com/annotation_data/Q-uPFJoSovS_1609855244584.jpg'],
            annotatedImages: [
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855244584_annotated_1609855265505.jpg',
            ],
          },
          damageCode: 'broken',
        },
        {
          name: 'alloywheel',
          imageUrl: {
            rawImages: ['https://clearquote-mrcnn.s3.amazonaws.com/annotation_data/Q-uPFJoSovS_1609855245268.jpg'],
            annotatedImages: [
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855245268_annotated_1609855258790.jpg',
            ],
          },
          damageCode: 'Clean',
        },
      ],
      name: 'manualInspectionNeeded',
      description: 'Manual Attention Needed',
    },
    {
      data: [
        {
          name: 'rearws',
          imageUrl: {
            rawImages: ['https://clearquote-mrcnn.s3.amazonaws.com/annotation_data/Q-uPFJoSovS_1609855243944.jpg'],
            annotatedImages: [
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855243944_annotated_1609855261875.jpg',
            ],
          },
          damageCode: 'Clean',
          panelConfidence: null,
          damageConfidence: null,
        },
        {
          name: 'leftcpillar',
          imageUrl: {
            rawImages: ['https://clearquote-mrcnn.s3.amazonaws.com/annotation_data/Q-uPFJoSovS_1609855243944.jpg'],
            annotatedImages: [
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855243944_annotated_1609855261875.jpg',
            ],
          },
          damageCode: 'Clean',
          panelConfidence: null,
          damageConfidence: null,
        },
      ],
      name: 'detectedPanels',
      description: 'Detected panels',
    },
    {
      name: 'missingPanels',
      panels: [
        'bonnet',
        'fuelcap',
        'headlightwasher',
        'leftapillar',
        'leftbpillar',
        'leftdpillar',
        'leftfrontdoorcladding',
        'leftfrontdoorglass',
        'leftfrontrocker',
        'leftfrontventglass',
        'leftquarterglass',
        'leftreardoorcladding',
        'leftreardoorglass',
        'leftrearrocker',
        'leftrearventglass',
        'leftroofside',
        'licenseplate',
        'logo',
        'lowerbumpergrille',
        'namebadge',
        'Reflector',
        'rightapillar',
        'rightbpillar',
        'rightcpillar',
        'rightdpillar',
        'rightfrontdoorcladding',
        'rightfrontdoorglass',
        'rightfrontrocker',
        'rightfrontventglass',
        'rightquarterglass',
        'rightreardoorcladding',
        'rightreardoorglass',
        'rightrearrocker',
        'rightrearventglass',
        'rightroofside',
        'Roof',
        'sensor',
        'towbarcover',
        'variant',
        'wheelcap',
        'wheelrim',
        'sunroof',
        'odometer',
        'vin',
        'tyre',
        'frontbumpergrille',
        'righttailgate',
        'lefttailgate',
        'footstep',
        'leftvalence',
        'rightvalence',
        'rightbootlamp',
        'leftbootlamp',
        'frontbumper',
        'leftfender',
        'leftfrontdoor',
        'leftreardoor',
        'leftrunningboard',
        'leftqpanel',
        'leftorvm',
        'leftheadlamp',
        'lefttaillamp',
        'leftfoglamp',
        'leftwa',
        'rightfender',
        'rightfrontdoor',
        'rightreardoor',
        'rightrunningboard',
        'rightqpanel',
        'rightorvm',
        'rightheadlamp',
        'righttaillamp',
        'rightfoglamp',
        'rightwa',
        'rearbumper',
        'tailgate',
        'mtailgate',
        'frontws',
        'centerfrontbumper',
        'centerrearbumper',
        'leftfrontbumper',
        'rightfrontbumper',
        'leftrearbumper',
        'rightrearbumper',
        'leftfrontdoorhandle',
        'leftreardoorhandle',
        'rightfrontdoorhandle',
        'rightreardoorhandle',
        'leftfrontalloywheel',
        'leftrearalloywheel',
        'rightfrontalloywheel',
        'rightrearalloywheel',
        'leftfootstep',
        'rightfootstep',
        'fronttowbarcover',
        'reartowbarcover',
        'rightreartyre',
        'leftreartyre',
        'rightfronttyre',
        'leftfronttyre',
        'rightfrontbumpergrille',
        'leftfrontbumpergrille',
        'rightfrontwa',
        'leftfrontwa',
        'rightrearwa',
        'leftrearwa',
        'frontbumperbroken',
        'rearbumperbroken',
        'roofrail',
        'indicator',
        'rearbumpercladding',
        'frontbumpercladding',
        'rightfrontwheelcap',
        'rightrearwheelcap',
        'rightfrontwheelrim',
        'rightrearwheelrim',
        'wiper',
      ],
      description: 'Panel missed in the images',
    },
  ],
  preQuoteId: null,
  postQuoteId: null,
  vehicleInfo: { logo: null, rcCard: null, odoMeter: null, vinPlate: null, nameBadge: null, licensePlate: [] },
  estimateTotal: { tax: 5, total: 0, discount: 0, totalAfterTax: 0, taxDescription: 'VAT', totalAfterDiscount: 0 },
  segmentImages: {
    rawImages: [
      'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_24_25_090000.jpg',
      'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_24_56_636000.jpg',
      'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_25_48_197000.jpg',
      'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_25_23_538000.jpg',
      'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_26_39_054000.jpg',
    ],
    imageDetails: [
      {
        _id: '5ff4712dd1ec0f140241ab30',
        raw:
          'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_24_25_090000.jpg',
        error: null,
        filename: null,
        annotated:
          'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855241357_annotated_1609855272898.jpg',
      },
      {
        _id: '5ff4712dd1ec0f140241ab2f',
        raw:
          'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_24_56_636000.jpg',
        error: null,
        filename: null,
        annotated:
          'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855243090_annotated_1609855269221.jpg',
      },
      {
        _id: '5ff4712dd1ec0f140241ab2e',
        raw:
          'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_25_48_197000.jpg',
        error: null,
        filename: null,
        annotated:
          'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855243944_annotated_1609855261875.jpg',
      },
      {
        _id: '5ff4712dd1ec0f140241ab2d',
        raw:
          'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_25_23_538000.jpg',
        error: null,
        filename: null,
        annotated:
          'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855244584_annotated_1609855265505.jpg',
      },
      {
        _id: '5ff4712dd1ec0f140241ab2c',
        raw:
          'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_26_39_054000.jpg',
        error: null,
        filename: null,
        annotated:
          'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855245268_annotated_1609855258790.jpg',
      },
    ],
    resizedImages: { annotatedImages: [] },
    annotatedImages: [
      'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855241357_annotated_1609855272898.jpg',
      'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855243090_annotated_1609855269221.jpg',
      'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855243944_annotated_1609855261875.jpg',
      'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855244584_annotated_1609855265505.jpg',
      'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855245268_annotated_1609855258790.jpg',
    ],
  },
  fleetImageType: 'null',
  segmentImagesV2: [
    {
      rawImage:
        'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_24_25_090000.jpg',
      imageType: 'car',
      annotatedImages: [
        'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855241357_annotated_1609855272898.jpg',
      ],
    },
    {
      rawImage:
        'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_24_56_636000.jpg',
      imageType: 'car',
      annotatedImages: [
        'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855243090_annotated_1609855269221.jpg',
      ],
    },
    {
      rawImage:
        'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_25_48_197000.jpg',
      imageType: 'car',
      annotatedImages: [
        'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855243944_annotated_1609855261875.jpg',
      ],
    },
    {
      rawImage:
        'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_25_23_538000.jpg',
      imageType: 'car',
      annotatedImages: [
        'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855244584_annotated_1609855265505.jpg',
      ],
    },
    {
      rawImage:
        'https://cleansecar-prod.s3.us-east-2.amazonaws.com/ServiceImages/newapartment-2020_12_28_18_26_39_054000.jpg',
      imageType: 'car',
      annotatedImages: [
        'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855245268_annotated_1609855258790.jpg',
      ],
    },
  ],
  segmentationEstimate: {
    damages: [
      {
        'non-panel': [
          {
            url:
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855241357_annotated_1609855272898.jpg',
            area: 0,
            name: 'scratch',
          },
          {
            url:
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855244584_annotated_1609855265505.jpg',
            area: 0,
            name: 'scratch',
          },
        ],
      },
      {
        doorhandle: [
          {
            url:
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855243090_annotated_1609855269221.jpg',
            area: 100,
            name: 'clean',
          },
        ],
      },
      {
        rearws: [
          {
            url:
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855243944_annotated_1609855261875.jpg',
            area: 100,
            name: 'clean',
          },
        ],
      },
      {
        leftcpillar: [
          {
            url:
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855243944_annotated_1609855261875.jpg',
            area: 100,
            name: 'clean',
          },
        ],
      },
      {
        orvm: [
          {
            url:
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855244584_annotated_1609855265505.jpg',
            name: 'broken',
          },
        ],
      },
      {
        alloywheel: [
          {
            url:
              'https://s3.us-east-1.amazonaws.com/clearquote-mrcnn/annotated_data/Q-uPFJoSovS_1609855245268_annotated_1609855258790.jpg',
            area: 100,
            name: 'clean',
          },
        ],
      },
    ],
    estimates: [
      {
        name: 'non-panel',
        costs: [
          {
            __v: 0,
            _id: '5ec7e7fde80c42775d2dae89',
            vehicle: { make: '.', model: '.' },
            discount: 0,
            panelCode: 'non-panel',
            panelName: '',
            damageCode: 'scratchS1',
            dealerCode: '.',
            damageValue: 0,
            lineItemType: 'paintingschedule',
            discountedValve: 0,
          },
          {
            __v: 0,
            _id: '5ec7e974e80c42775d2dc33f',
            vehicle: { make: '.', model: '.' },
            discount: 0,
            panelCode: 'non-panel',
            panelName: '',
            damageCode: 'scratchS1',
            dealerCode: '.',
            damageValue: 0,
            lineItemType: 'Parts',
            discountedValve: 0,
          },
          {
            __v: 0,
            _id: '5ec7eaf6e80c42775d2dd839',
            vehicle: { make: '.', model: '.' },
            discount: 0,
            panelCode: 'non-panel',
            panelName: '',
            damageCode: 'scratchS1',
            dealerCode: '.',
            damageValue: 0,
            lineItemType: 'R&Rlabour',
            discountedValve: 0,
          },
          {
            __v: 0,
            _id: '5ec7ec7ae80c42775d2ded2e',
            vehicle: { make: '.', model: '.' },
            discount: 0,
            panelCode: 'non-panel',
            panelName: '',
            damageCode: 'scratchS1',
            dealerCode: '.',
            damageValue: 0,
            lineItemType: 'tinkeringlabour',
            discountedValve: 0,
          },
        ],
        totalCost: 0,
        damageCode: 'scratchS1',
        isApproved: true,
        discountedCost: 0,
      },
      { name: 'doorhandle', costs: [], totalCost: 0, damageCode: 'Clean', isApproved: true, discountedCost: 0 },
      { name: 'rearws', costs: [], totalCost: 0, damageCode: 'Clean', isApproved: true, discountedCost: 0 },
      { name: 'leftcpillar', costs: [], totalCost: 0, damageCode: 'Clean', isApproved: true, discountedCost: 0 },
      {
        name: 'orvm',
        costs: [
          {
            discount: 0,
            panelCode: 'orvm',
            damageCode: 'broken',
            damageValue: 0,
            lineItemType: 'none',
            discountedValve: 0,
          },
        ],
        totalCost: 0,
        damageCode: 'broken',
        isApproved: true,
        discountedCost: 0,
      },
      { name: 'alloywheel', costs: [], totalCost: 0, damageCode: 'Clean', isApproved: true, discountedCost: 0 },
    ],
    totalCost: 0,
  },
};

console.log(Object.entries(data));
