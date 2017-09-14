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
-
