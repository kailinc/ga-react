'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};
// will print the arguments

console.log(add(55, 1));

// const add = (a,b) => {
//   console.log(arguments)
//   return a + b
// }
// will not print the arguments


// this keyword - no longer bound

var user = {
  name: 'Andrew',
  cities: ['Phila', 'New York', 'Dublin'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};

console.log(user.printPlacesLived());

var multipler = {
  numbers: [3, 2, 10, 2],
  multiplyBy: 10,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (num) {
      return num * _this2.multiplyBy;
    });
  }
};

console.log(multipler.multiply());
