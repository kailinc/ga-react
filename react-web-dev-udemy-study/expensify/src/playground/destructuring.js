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

const {name: publisherName = 'Self-published'} = book.publisher

console.log(publisherName)
