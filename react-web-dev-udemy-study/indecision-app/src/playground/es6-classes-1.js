class Person {
  constructor(name = 'Anynomous', age = 0) {
    this.name = name
    this.age = age
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old!`
  }
}

let kai = new Person('Kailin Chen')

console.log('this is kai ', kai)
console.log('this is kai saying hello ', kai.getDescription())

let lin = new Person()

console.log('this is lin ', lin)
