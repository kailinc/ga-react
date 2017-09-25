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

## Functional Component

functional component just takes props as argument and returns JSX

Example
```js
// Component Version
class Name extends React.Component {
  render() {
    return(
      <div>
        Name: {this.props.firstname} {this.props.lastName}
      </div>
    )
  }
}

// Functional Component Version
// written in fat arrow function sytanx
const Name = props => (
  <div>
    Name: {props.firstName} {props.lastName}
  </div>
)
```

Example
Rendering a Fruit table with Functional Component
```js
// data that is passed into functional component
// array of arrays
const data = [
  ['apple', 'banana', 'cherry'],
  ['grape', 'pear', 'orange'],
  ['plum', 'watermelon', 'canteloupe']
]

const FruitTable = props => (
  <table style={{ borderSpacing: 20, borderStyle: 'solid' }}>
    <tbody>
    // renders the row
      {props.data.map((fruitList, index) => (
        <tr key={index}>
        // renders each column in a row
          {fruitList.map((fruit, i) => (
            <td key={i}>
              {fruit}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
)
```


## Component Lifecycle

Componenets can be created (mounted), updated, removed (unmounted)
ComponentDidMount is called after component is rendered to DOM
componentWillUnmount is called before component is removed from the DOM

### Initializing/ Mounting

Methods:
1.  constructor(): initializes the component with states and bind methods
     bind methods so that this is refering to the component and not what called the
     component
```js
this.myFunctionName = this.myFunctionName.bind(this)
```

2.  componentWillMount(): used for server rendering
    - called before component is rendered to the document
    - use it for server rendering
    - should not used for server request cuz of async
    - component maybe rendered before request is done

3.  componentDidMount(): called if component updates from shouldComponentUpdate
    - use it for network requests (AJAX)
    - called once after component is rendered to DOM

```js
componentDidMount() {
  fetch('http://api.com/${this.props.id}') // goes to this link with the id of whatever prop is passed down
    .then(response => response.json()) // renders the response to be in json
    .then(data => this.setState(prevState => ({ data }))) // whatever data you get you set it to be the new state
}
```

Observation:
-   This seems to be a get request cuz did not pass in new data to update or create, destroy request will not give back data.

Question: Is fetch a built in JS tool or is it something from react?

     - can put event listeners at componentDidMount()
     - remove the event listeners at componentWillUnmount()

Example

```js
class FruitTable extends React.component{
  // adds the event listener of dragover
  // triggers handleDragStart when there is a drag
  componentDidMont() {
    document.addEventListener('dragover', this.handleDragStart)
  }
  // removes the event listener of dragover and function of handleDragStart
  componentWillUnmount() {
    document.removeEventListener('dragover', this.handleDragStart)
  }

  // function just setStates 'dragging': true
  // not sure what this prevState is doing
  handleDragStart(e) {
    e.preventDefault()
    this.setState(prevState => ({
      dragging: true
    }))
  }

}
```

4.  render(): return a React Element
    -   use it to render changes in state or props
    -   should not create change in state, props here


componentWillReceiveProps(newProps)
  this is called when components receives new props
  change state of component based on props Here

shouldComponentUpdate(), componentWillUpdate(), componentDidUpdate()
  used for performance optimizations
  probably for testing


  ## Unidirectional Flow

  component can update state
  can't update prop
  define state at the highest component you can

  ## Immutable Data Types

  state and props are mutable
  don't change either directly cuz React might not be aware of change and
  rerendering may not happen

  React is returning a fresh copy of the state with new ref with updated data when
  use setState


  Inccorect way to change state (directly)
  ```js
  handleChange(e) {
    this.state.myPieceOfState = e.target.value;
  }
  ```

  Correct way to change state
  ```js
  handleChange(event) {
    this.setState(prevState => ({
      myPieceOfState: event.target.value
    }))
  }
  ```

  you don't want to mutate the array
  with pop() you will mutate an array
  you would have to use map, filter, and reduce cuz it returns modified copies of the
  array and don't mutate the originals

  example
  ```js
  const newArray = anArray.filter((item, index, originalArray) => index !== originalArray.length - 1 )
  ```

  you can use object.assign for this too

  ```js
  const newObject = Object.assign({}, anObject, { foo: 'barrrr' })
  ```
  keys from anObject and keys from the 3rd argu will be copied to a new object (newObject)

  you can use Immutable.js from FB that will have methods for chaning data without you
  thinking about ways to change data correctly

  ## React Router

  you can write js programs that go back and forth between pages
  window.history.back() window.history.forward()

  ### Browser History Mechanics

  page is a whole HTML file that browser downloads and displays

  routing defines what content is displayed when someone visits a certain URL
  there can be many pages for the same site

  SPA, change the content without sending users to diff web pages, the notion of
  back and forth is lost
  If user is on SPA, press back, they are completely off the site

  Solution:
    .pushState()
    .replaceState()
  so when user "goes" to a diff part of the page, invoke pushState()
  this will save custom browser history
  can use React Router for taking care of back and forth in sites

  ### React Router

  React Router is a 3rd party library to make it easy for us to route URLs
  load diff component on the same page as user navigate to different url
  changes to url, renders a new react component
  match url to component

  ```js
  // Traditional Method - calling the server
  <a href="https://blog.AboutPage.com">About tab</a>
  <a href="https://blog.MainPage.com">Main Blog Tab</a>

  // Using React Router
  render() {
    return(
      <Route path="about" component={AboutPage}/>
      <Route path="mainBlog" component={BlogPage}>
    )
  }
  ```

  ## Introduction to APIs

  DOM and jQuery are examples of API // WHAAT?

  There are 2 major types of serailized data formats

  ### JSON

  JavaScript Object Notation is light weight, easy to read, quick to parse

  ```json
  {
    "users": [
      {"name": "Wonder Woman", "id": 0},
      {"name": "Black Panther", "id": 1},
      {"name": "Batgirl", "id": 2}
    ]
  }
  ```

  ### XML

  eXtensible Markup Language
  is fat, ugly, cumbersome to parse
  is used becauze of legacy websites

  ```xml
    <users>
    <user id="0">
      <name>Wonder Woman</name>
    </user>
    <user id="1">
      <name>Black Panther</name>
    </user>
    <user id="2">
      <name>Batgirl</name>
    </user>
  ```

  ### Authentication

  many API are free to use, but require API key
  this is to prevent fraud, regulate usage, prevent abuse

  important to not push API keys to a public GitHub Repo

  keep it in .env

  ### Fetch()

  Fetch() lets us build SPA that don;t require refreshes

  example
  ```js
  let issAPI = 'http://api.open-notify.org/astros.json'; // this is the link to send api to
  fetch(issAPI) // this is the fetch request
    .then((response) => { // if the requese is successful, turn the response into json format
      return response.json()
    }).then((json) => { // this is success handling for request
      console.log('JSON from the ISS ', json)
    }).catch((ex) => { // error handling for request
      console.log('An error occured while parsign! ', ex)
    })
  ```

  ### More on Fetch() from MDN

  Syntax
  ```
  Promise<Response> fetch(input[, init]);
  ```
  input = this is the url you want to fetch

  init (this is optional)
  this is passed as an object
    1. method: can put request methods (GET, POST)
    2. headers: specify what type of data is used
    3. body: for updating, creating
    4. mode
    5. credentials: for tokens
    6.

  Example of GET Request
  ```js
  var myImage = document.querySelector('img');
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'image/jpeg');

  var myInit = { method: 'GET',
                 headers: myHeaders,
                 mode: 'cors',
                 cache: 'default' };

  var myRequest = new Request('flowers.jpg');

  fetch(myRequest, myInit).then(function(response) {
    ...
  });
  ```

  ### $.AJAX vs Fetch()

  AJAX could be used instead of Fetch(). One reason Fetch() is preferred over AJAX
  is because to use AJAX you would have to incorporate the whole jQuery Library
  to use AJAX. You are using only a small portion of jQuery to send AJAX requests.
  In the stand point of optimization and reducing file size, it would make more
  sense to use Fetch(). If optimization does not matter to you then by all means
  use AJAX from jQuery.

  ### Why You Shouldn't use Fetch

  Fetch is a low level API, this means that you have to be very explicit in sending
  any type of AJAX request. This means more typing. // EWWW

  Wrong way to do POST Request with Fetch()
  ```js
  fetch('/user', {
    method: 'POST',
    body: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  });
  ```
  Correct way to do POST Request with Fetch()
  ```js
  fetch('/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
  });
  ```

  Conclusion: It is probably best to use a AJAX library.
  Article: https://medium.com/@shahata/why-i-wont-be-using-fetch-api-in-my-apps-6900e6c6fe78

  ## Imperative and Declarative Programming

  ### Imperative

  Imperative coding = outline what is needed, write it out step by step

  ```
  ask everyone in the room to line up
  for every person in the line
     ask each person to come to the front of the room
    ask each person to then speak their name
  ```

  Example
  ```js
  let room = ['Superman', 'Black Panther', 'Wonder Woman', 'Iron Man']

  for (let i = 0; i < room.length; i++) {
    let person = room[i]
    console.log("Imperative way: " + person)
  }
  ```

  imperative programing focuses on why, how, where, and when your code executes

  ### Declarative

  Example

  ```js
  let room = ['Superman', 'Black Panther', 'Wonder Woman', 'Iron Man']

  room.forEach( (person) => {
    console.log('Declarative way: ' + person)
  })
  ```
  forEach is a method in declarative programming
  the method only cares about what you want

  Example:
  User gets a discount by entering 'TREATYOSELF2017' into cart's coupon box input box

  Items
  ```js
  let items = [
    {
      title: 'Breath of the Wild',
      price: 49.99
    },
    {
      title: 'The Minish Cap',
      price: 29.99
    },
    {
      title: 'Twilight Princess',
      price: 49.99
    }
  ]
  ```

  Imperative Way

  ```js
  let discountedItems = [];
  for (let i = 0; i < items.length; i++) {
    discountedItems.push({
      title: items[i].title,
      price: items[i].price * 0.5
    });
  }
  ```

  Declarative Way
  ```js
  let discountedItems = items.map((item) => {
    return {
      title: item.title,
      price: item.price * 0.5
    }
  })
  ```
  Conclusion

  Imperative is found in object oriented programming where you focus on a line by
  line execution path working with objects

  My Thoughts:
  - Seems like the only difference between Declarative way and Imperative way is just
   that Declarative way uses less code, lines, or letters.


   ## Heroku

   You can deploy a React applicatin to the internet with Heroku. It is popular among Web Developers and
   provides five free applications to every user.

   Heroku is a cloud platform that allows developers to deploy applications to the internet. You can
   deploy any type of application (Node.js, Ruby, Java, PHP)

   Heroku CLI (Command Line Interface) lets you deploy and develop through the command line.

   To login
   ```terminal
   heroku login
   ```

   You should see the following
    ```Terminal
    Enter your Heroku credentials.
    Email:
    Password: (it is hidden when you type it).
    Authentication successful
    ```

    To deploy a React app to heroku you can use create-react-app-buildpack

    create-react-app-buildpack is a set of scripts that Heroku will use to read your
    React.js code and rebuild it to be hosted on the web.

    type the following to create a react app on heroku using create-react-app-buildpack
    ```
    heroku create-react-app app-name --buildpack https://github.com/user/create-react-app-buildpack.git
    ```

    Use git to add all files and commit changes
    ```terminal
    git add -A
    git commit -m 'I need a challenge'
    ```

    WARNING WARNING
    You only want to do git add -A the first time. This command adds all the file
    in the repository and send it to github. If you do this later, it will add hidden files.

    Why is this bad?
    Developers usually use hidden files to store valuale, sensitive information like API keys.
    There are web scrappers looking for these valuable information and abuse it.

    Command to push your app to heroku
    ```terminal
    git push heroku master
    ```

    Command to go to your hosted app
    ```terminal
    git push heroku master
    ```

    Deploying your Project Live

    ### Route clean URLs with React Router

    React Router uses hash-based URLS
    ex:
    ```
    https://example.com/index.html#/users/me/edit
    ```
    Wnat you really want
    ```
    https://example.com/users/me/edit
    ```

    To do accomplish this, you need to configure web server for clean browserHistory
    ```json
    {
      "root": "build/",
      "clean_urls": false,
      "routes": {
        "/**": "index.html"
      }

    }
    ```

    ### Getting around CORS with Heroku Proxy

    CORS Proxy is a service that allows developers to access resources from other websites
    without having to own that website

    What do you mean?

    For example, if you want to embed an img of a cat on https://acatwebsite.com/ Some owners
    of a website want to make sure cat images can only be accessed through browser.

    CORS = Cross Origin Resource Sharing. This is a web standard that website use to make sure things
    accesssing them (like you getting the cat picture) are safe.

    When you go to website where only one side is using CORS on the backend, you'll get an error
    saying that you aren't allowed to access the resource.

    If you use CORS proxy, you don't need to set up CORS. CORS proxy does it for you.

    Set up:
    1. Add "proxies" to static.json
        ```json
        {
          "proxies": {
            "/api/": {
              "origin": "${API_URL}"
            }
          }
        }
        ```
    2. Point UI app to specific backend API using CLI
      ```terminal
      heroku config:set API_URL="https://api.example.com"
      ```
