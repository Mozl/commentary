import moment from 'moment';

let time1 =
  moment()
    .startOf('hour')
    .fromNow() + 3;

console.log(time1);
console.log(moment().format('mm ss'));

const data = [
  {
    id: 0,
    body: 'ndsjfsdkjfbkjdsfb',
    time: moment().format('mm')
  },
  {
    id: 1,
    body: 'sdfkhksdjfhf',
    time: moment().format('mm') - 1
  },
  {
    id: 2,
    body: 'fhdskhfsdfhjsdhfjksdhfjsfadk',
    time: moment().format('mm') - 2
  },
  {
    id: 3,
    body: 'fjsdfsdkfsdaklfhsdkajfhsdfldsfhiuwreirr',
    time: moment().format('mm') - 3
  }
];

export default data;
