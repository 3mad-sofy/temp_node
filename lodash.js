// npm init -y (everything default) 

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
console.log('Hello Emad, iam here to help you!');
