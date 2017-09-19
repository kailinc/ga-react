# React Lesson by General Assembly

## Intro to React.js

React rerenders one thing, not re-render everything
React is agnostic to other tools in front end
React can co-exists with other JS frameworks, letting other frameworks handle
models and controllers and having React sort out Views

### YouTube: React.js Conf 2015 Keynote - Introducing React Native (8:15-16:30)

XHP is a PHP extension
PHP has tricks to switch between HTML and PHP syntax
prevent cross type script attacks

What makes react powerful?
-   Virtual Dom
-   Server Rendering = decrease server cost
-   descriptive warnings = tells exactly what you did wrong, how to fix it
-   custom event system

React wraps an imperative API with a declarative one

## Initial Set up

command to create react app is
```terminal
create-react-app appName
```

awesome feature of react is npm start will auto open a browser to localhost:3000
and it will refresh is there is new code!!!!

### File Structure

Seems like src/ is the folder for source code of an application
index.js is the main file that dictates the rules, functions of the app using
JavaScript and react.
index.css is the main file for styling.
public/index.html seems to be the html file for the basic structure of the app

## Components

components is pieces of application that we can define once and reuse all over the place
there is more integration of HTML, CSS, and JS
web app is not small, reusuable components that encompass own content, presentation, behavior

### Component Set up

 'default' means that if someone try to import something and can't find, will
 give Hello component
 there can only be one default export per file

## Virtual DOM

should keep components seperate and organized
main hub of react app is in src/index.js

Virtual Dom is staging area of changes that will be eventually implemented

render method generates a Virtual DOM node added to the actual DOM

Use JSX to define contents of node

### YouTube: Pete Hunt - The Secrets of React's VIrtual DOM (FutureJS 2014)

#### Key Takeaways
-   your function should only do one thing so that it is predicatable and easy
    for you to follow the process
-   If you function does more than one thing, you should break it down so it calls
    upon other functions, componenets, files to finish the task at hand

## Props

### Component Data with Props

Props Example

```html
<div id="app"></app>
```

React File
```js
class CallKitty extends React.Component {
  render() {
    return (
      <h1>Here {this.props.catName}!</h1>
    )
  }
}
/*
 * Render the above component into the div #app passes Meowser into CallKitty component
 * this will set the value of props.catName to be Meowser
 */
React.render(<CallKitty catName={"Meowser"}/>, document.getElementById('app'));
```
This is probably one of the ways we pass in data from AJAX requests to React apps

### Multiple Props

this is the same process as single props

```js
ReactDOM.render(
  <Hello name={"Nick"} age={23}/>,
  document.getElementById('root')
)
```

### Multiple Props passed from an Object

lets pass down an object instead of each value as an attribute

Person Object to pass down

```js
var person = {
  personName: "Nick",
  personAge: 24
}
```

how to handle object rendering

```js
ReactDOM.render(
  <Hello
  name={person.personName}
  age={person.personAge}
  />,
  document.getElementById('root')
)
```

handling object with nested data structure

example: person
```js
const person = {
  personName: "Nick",
  personAge: 24,
  favorites: [
    "capybaras",
    "Tigers",
    "Dinosaurs count!"
  ]
}
```

## Nested Component

comments in the previous example is where we can have nested components
can use it by haing <Comment /> inside of a Post's render method

Render all comments by
```js
class Post extends Component {
  render() {
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ]
    /// rest of content .....
  }
}
```

I really don't like this way, is there a forloop for me to use instead of doing this?
For rendering an article with lots of comments, this process is not scalable


## State

props represent data that will be same every time our component is rendered
state = mutable attributes
state must be object
no direct mutation
use setState()

## ES6

### Const and Let

let is for variables that can be changed
const is for variables that can't be changed entirely

example
```js
const speaker = {
  price: 10,
  color: white
}

speaker.price = 20

// speaker = {
//   price: 20,
//   color: white
// }
```

### Literals

can export multiple modules from a file

```js
// in unicorn.js
export const addTwo = num => num + 2;
export const addThree = num => num + 3;

// In the magical land of another file aka rainbows.js
import {addTwo, addThree } from './unicorn.js'
```
