# The Complete React Web Developer Course (with Redux)


## Section 3

-   put `<meta charset="utf-8">` in the header tag of index.html so that browser
    will know how to encode it (utf-8) is words
-   most broswers default it to utf-8, this is just to be safe

### Setting Up Babel

-   Babel is a compiler that takes new es6, es7 and makes it into es5
-   why? cuz browsers do not support the new es6/7 yet
-   we can write dope ass code and still run on broswers
-   Babel doesn't compile anything by default, so we have to add presets and stuff
-   will use react preset, includes preset-flow, syntax-jsx, transform-react-jsx, transform-react-display-name
-   will use env preset, includes es2015, es2016, es2017

-   Installation for getting babel-cli
```
yarn global add babel-cli
```
-   adding package for the project to be listed in package.json
```
yarn add <package>
```
-   yarn.lock is a file that descriptes each dependencies used in node_modules/
-   it gives the name, version, source of each dependencies
-   yarn.lock is auto generated
-   idea is to write all the code in src/ and then use babel to generate files in scripts/
-   index.html will use the compiled files in scripts to render
-   we never touch the files in scripts

```terminal
$ babel src/app.js --out-file=public/scripts/app.js --presets=env,react
```

  - src/app.js is the file to compile
  - out-file is where to be the compiled file
  - presets is where you define what presets you want to use
  - if you put --watch, it will watch for changes in src/app.js and make changes to scripts/app.js if there is any changes


  ### Exploring JSX

  - React does not let you render the whole object
  - you have to specify parts of the object to use

  ### Conditional Rendering in JSX

  - use a function that will return a value based on condition
  ```js
  var user = {
    name: 'Andrew',
    age: 29,
    location: 'Boston, MA'
  };

  function getLocation (location) {
    return location ? location : 'Unknown';
  }

  var templateTwo = (
    <div>
      <h1>{ user.name }</h1>
      <p>Age: { user.age }</p>
      <p>Location: { getLocation(user.location) }</p>
    </div>
  )
  ```

  - you have write a jsx within {}
  ` {<h3> This is a H3</h3>}`
  - this lets you render if a value exists, if value doesn't exist you don't return
   something to return. So you return undefined

  ```js
  function getLocation (location) {
    return location ? <p>Location: { location }</p> : undefined;
  }

  var templateTwo = (
    <div>
      <h1>{ user.name }</h1>
      <p>Age: { user.age }</p>
      { getLocation(user.location) }
    </div>
  )
  ```

  - can use ternary statement in {}
  ```js
    <h1>{ user.name ? user.name : 'Anonymous' }</h1>
  ```

  - can use true or false to render it because JSX ignores null, false, and undefined

  ```js
  { user.age >= 18 && <p>Age: { user.age }</p> }
  ```
  - if user.age > 18 === true , it will render that
  - else it will return false and JSX will ignore it
  - very nifty

  - There are 3 ways to do conditional rendering in JSX. Essentially it gets the
    same results. However, some approach might be better than other approaches
    depending on your needs.

    1. using an outside function
    -   This may be for checking more complicated stuff
    example:
      ```js
      function getLocation (location) {
        return location ? <p>Location: { location }</p> : undefined;
      }

      { getLocation(user.location) }
      ```

    2. Using ternary statement
    -   You should use this if you are sure you are going to render something everything
    example:
    ```js
    <h1>{ user.name ? user.name : 'Anonymous' }</h1>
    ```

    3. Using AND operator
    -   You should use this if you are not going to render something sometimes.
    -   It is clever in using the fact that JSX will not render false, null, or undefined
    ```js
    { user.age >= 18 && <p>Age: { user.age }</p> }
    ```

  ### ES6 Aside: const and Let

  -    var's problem: you can reassign a variable, override variables
  -    these problems makes it hard to find bugs
  -    Can't redefine let, but can reaasign let variable to a new value
  -    const can't redefine, and reassign
  -    const and let will help you write better code and keep track of your code
  -    let and const are block scope, meaning they only exist in code block of an
       if statement, for, while loop

  ### ES6 Aside: Arrow Function I

  ```js
  // Regular Function
  const square = function (x) {
    return x * x
  };

  // Arrow Function
  const square = (x) => {
    return x * x
  }

  // Can be simplified into this one liner
  const square = (x) => x * x
  ```

  -    All arrow functions are anynmous, can't reference it by its name
  -


### ES6: Arrow Functions II

-   arguments object - no longer bound with arrow functions
-   this keyword  - no longer bound

### Event and Attributes

### Manual Data Binding

-   JSX does not have data binding 
-
