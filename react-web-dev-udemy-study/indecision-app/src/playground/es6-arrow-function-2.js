// arguments object - no longer bound with arrow functions

const add = function (a, b) {
  console.log(arguments);
  return a + b;
}
// will print the arguments

console.log(add(55,1))

// const add = (a,b) => {
//   console.log(arguments)
//   return a + b
// }
// will not print the arguments


// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Phila', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city )
  }
}

console.log(user.printPlacesLived())

const multipler = {
  numbers: [ 3, 2, 10, 2 ],
  multiplyBy: 10,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy )
  }
}

console.log(multipler.multiply())
