'use strict';

var square = function square(x) {
  return x * x;
};

console.log(square(10));

var getFirstName = function getFirstName(name) {
  return name.split(' ')[0];
};

console.log(getFirstName('Mike Smith'));
