// OBJECT DESTRUCTURING

const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 92
  }
}

const { city, temp } = person.location;

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self-Published'} = book.publisher

// ARRAY DESTRUCTURING
const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [streetName, city, state, zipCode ] = address

console.log(`You are in ${address[1]} ${address[2]}`)
console.log(`You are in ${streetName} ${city}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , mediumCoffee] = item;
console.log(`A Medium ${coffee} costs ${mediumCoffee}`);
