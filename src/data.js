import moment from 'moment';

const data = [
  {
    id: 0,
    body:
      'Ronaldo has been injured! The England team picked him up and threw him into their goal',
    time: moment().format('mm')
  },
  {
    id: 1,
    body: 'Kane just hammered a wild shot from range well off target',
    time: moment().format('mm') - 1
  },
  {
    id: 2,
    body: 'Now Alli gets a booking',
    time: moment().format('mm') - 2
  },
  {
    id: 3,
    body:
      "AND THERE IS A GOAL! No mistake from Kane, as he gets back up off the turf to cushion in Trippier's pinpoint cutback",
    time: moment().format('mm') - 15
  }
];

export default data;
